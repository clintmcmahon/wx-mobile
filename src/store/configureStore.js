import { createStore, combineReducers } from 'redux';
import locationReducer from '../reducers/locationReducer';

const rootReducer = combineReducers(
    { location: locationReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;