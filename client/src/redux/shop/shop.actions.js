import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';

export const fetchCollectionRequest = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_REQUEST
});

export const fetchCollectionSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionFail = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAIL,
    payload: error
});

