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


export const fetchCollectionRequestAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection');

        dispatch(fetchCollectionRequest());

        collectionRef.get().then(snapShot => {
            const collectionMap = convertCollectionSnapshotToMap(snapShot);
            dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(err => dispatch(fetchCollectionFail(err.message)))
    }
}