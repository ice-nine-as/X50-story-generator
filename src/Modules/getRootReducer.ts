import {
  combineReducers,
  Reducer,
} from 'redux';
import {
  maxAnswerLengthReducer,
} from '../Reducers/maxAnswerLengthReducer';
import {
  proseTemplateReducer,
} from '../Reducers/proseTemplateReducer';
import {
  questionsReducer,
} from '../Reducers/questionsReducer';
import {
  shuffleReducer,
} from '../Reducers/shuffleReducer';
import {
  stateReducer,
} from '../Reducers/stateReducer';
import {
  TStoryGeneratorOwnProps
} from '../TypeAliases/TStoryGeneratorOwnProps';

export const getRootReducer = (): Reducer<TStoryGeneratorOwnProps> => {
  return combineReducers({
    maxAnswerLength: maxAnswerLengthReducer,
    proseTemplate:   proseTemplateReducer,
    questions:       questionsReducer,
    shuffle:         shuffleReducer,
    state:           stateReducer,
  });
};

export default getRootReducer;