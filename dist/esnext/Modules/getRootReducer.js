import { combineReducers, } from 'redux';
import { maxAnswerLengthReducer, } from '../Reducers/maxAnswerLengthReducer';
import { proseTemplateReducer, } from '../Reducers/proseTemplateReducer';
import { questionsReducer, } from '../Reducers/questionsReducer';
import { shuffleReducer, } from '../Reducers/shuffleReducer';
import { stateReducer, } from '../Reducers/stateReducer';
export const getRootReducer = () => {
    return combineReducers({
        maxAnswerLength: maxAnswerLengthReducer,
        proseTemplate: proseTemplateReducer,
        questions: questionsReducer,
        shuffle: shuffleReducer,
        state: stateReducer,
    });
};
export default getRootReducer;
