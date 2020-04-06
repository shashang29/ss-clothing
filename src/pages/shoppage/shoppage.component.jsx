import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {

    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(async snapShot => {
      convertCollectionSnapshotToMap(snapShot);
    })


  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  };
}

export default ShopPage;
