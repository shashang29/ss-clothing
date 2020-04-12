import React from 'react';

import CollectionsContext from '../../contexts/collections/collections.context';


import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({match}) => {
    return (
        <CollectionsContext.Consumer>
            {({ isLoading }) => {
                return isLoading ? (<SpinnerOverlay>
                    <SpinnerContainer />
                </SpinnerOverlay>)
                    : <WrappedComponent match={match}  />
            }}
        </CollectionsContext.Consumer>
    )
};

export default WithSpinner;