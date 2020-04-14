import React from 'react';

import Spinner from '../spinner/spinner.component';
import CollectionsContext from '../../contexts/collections/collections.context';


const WithSpinner = WrappedComponent => ({match}) => {
    return (
        <CollectionsContext.Consumer>
            {({ isLoading }) => {
                return isLoading ? <Spinner/>
                    : <WrappedComponent match={match}  />
            }}
        </CollectionsContext.Consumer>
    )
};

export default WithSpinner;