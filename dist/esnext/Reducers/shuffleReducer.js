import { isStoryGeneratorAction, } from '../TypeGuards/isStoryGeneratorAction';
import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
export const shuffleReducer = (previousState = true, action) => {
    if (isStoryGeneratorAction(action) &&
        action.type === StoryGeneratorActionTypes.SetShuffle) {
        return action.value;
    }
    return previousState;
};
export default shuffleReducer;
