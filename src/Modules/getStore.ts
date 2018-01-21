import {
  getRootReducer,
} from './getRootReducer';
import {
  createStore,
  combineReducers,
  Store,
} from 'redux';
import {
  TStoryGeneratorOwnProps,
} from '../TypeAliases/TStoryGeneratorOwnProps';

export const getStore = (): Store<TStoryGeneratorOwnProps> => {
  const rootReducer = combineReducers<TStoryGeneratorOwnProps>({
    storyGenerator: getRootReducer(),
  });

  return createStore(rootReducer);
};

export default getStore;