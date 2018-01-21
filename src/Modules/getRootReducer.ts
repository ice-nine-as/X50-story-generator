import {
  combineReducers,
  Reducer,
} from 'redux';
import {
  answerablePercentageReducer,
} from '../Reducers/answerablePercentageReducer';
import {
  censoredPercentageReducer,
} from '../Reducers/censoredPercentageReducer';
import {
  maxAnswerLengthReducer,
} from '../Reducers/maxAnswerLengthReducer';
import {
  preAnsweredPercentageReducer,
} from '../Reducers/preAnsweredPercentageReducer';
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
    answerablePercentage:  answerablePercentageReducer,
    censoredPercentage:    censoredPercentageReducer,
    maxAnswerLength:       maxAnswerLengthReducer,
    preAnsweredPercentage: preAnsweredPercentageReducer,
    questions:             questionsReducer,
    shuffle:               shuffleReducer,
    state:                 stateReducer,
  });
};

export default getRootReducer;