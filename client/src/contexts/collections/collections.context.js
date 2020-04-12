import { createContext } from 'react';

const CollectionsContext = createContext({
    collections: undefined,
    isLoading: true
});

export default CollectionsContext;