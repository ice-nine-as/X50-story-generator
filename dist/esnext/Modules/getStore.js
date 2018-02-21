import { getRootReducer, } from './getRootReducer';
import { createStore, combineReducers, } from 'redux';
export const getStore = () => {
    const rootReducer = combineReducers({
        storyGenerator: getRootReducer(),
    });
    return createStore(rootReducer);
};
export default getStore;
