import { UPDATE_COLLECTION } from './shop.types'

export const updateCollection = (collectionMap) => ({
    type: UPDATE_COLLECTION,
    payload: collectionMap
});