import { isStoryGeneratorAction, } from '../TypeGuards/isStoryGeneratorAction';
import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
export const maxAnswerLengthReducer = (previousState = 5000, action) => {
    if (isStoryGeneratorAction(action) &&
        action.type === StoryGeneratorActionTypes.MaxAnswerLength) {
        return action.value;
    }
    return previousState;
};
export default maxAnswerLengthReducer;
