import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner';
import { updateCollection } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;

    const collectionRef = firestore.collection('collection');
    collectionRef.get().then(snapShot => {
      const collectionMap = convertCollectionSnapshotToMap(snapShot);
      updateCollection(collectionMap);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
        render={(props) => <CollectionsOverviewWithSpinner isLoading={} {...props} />
        } />
        <Route path={`${match.path}/:collectionId`} 
        render={(props) => <CollectionPageWithSpinner {...props} />} />
      </div>
    )
  };
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
