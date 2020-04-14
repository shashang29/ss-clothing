import React, { useEffect, useState,lazy } from 'react';
import { Route } from 'react-router-dom';


import { fetchCollectionRequest } from '../../firebase/firebase.utils';
import CollectionsContext from '../../contexts/collections/collections.context';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverview = lazy(() =>
  import('../../components/collections-overview/collections-overview.component'));
const CollectionPage = lazy(() =>
  import('../collection/collection.component'));

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


const ShopPage = ({ match }) => {

  const [collections, setCollections] = useState();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    async function fetchCollection() {
      const data = await fetchCollectionRequest();
      setCollections(data);
      setLoading(false);
    }

    fetchCollection();

  }, [])


  return (

    <div>
      <CollectionsContext.Provider value={{ collections: collections, isLoading: loading }}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewWithSpinner} />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageWithSpinner}
        />
      </CollectionsContext.Provider>
    </div>
  )
}

export default ShopPage;
