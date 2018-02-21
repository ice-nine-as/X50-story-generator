import { isStoryGeneratorAction, } from '../TypeGuards/isStoryGeneratorAction';
import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
import { StoryStates, } from '../Enums/StoryStates';
export const stateReducer = (previousState = StoryStates.InProgress, action) => {
    if (isStoryGeneratorAction(action) &&
        action.type === StoryGeneratorActionTypes.SetState) {
        return action.value;
    }
    return previousState;
};
export default stateReducer;
