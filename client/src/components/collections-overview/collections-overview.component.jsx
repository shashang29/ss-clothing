import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import CollectionsContext from '../../contexts/collections/collections.context';


const CollectionsOverview = () => {
  const {collections} = useContext(CollectionsContext);
  
  const collection = collections ? Object.keys(collections).map(key => collections[key]) 
  : [];
  
  return(
  <div className='collections-overview'>
    {collection.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
    }



export default CollectionsOverview;