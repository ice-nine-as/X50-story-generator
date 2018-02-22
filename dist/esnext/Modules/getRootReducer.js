import { combineReducers, } from 'redux';
import { maxAnswerLengthReducer, } from '../Reducers/maxAnswerLengthReducer';
import { proseTemplateReducer, } from '../Reducers/proseTemplateReducer';
import { questionsReducer, } from '../Reducers/questionsReducer';
import { stateReducer, } from '../Reducers/stateReducer';
export const getRootReducer = () => {
    return combineReducers({
        maxAnswerLength: maxAnswerLengthReducer,
        proseTemplate: proseTemplateReducer,
        questions: questionsReducer,
        state: stateReducer,
    });
};
export default getRootReducer;
