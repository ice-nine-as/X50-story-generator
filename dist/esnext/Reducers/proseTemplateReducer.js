import { isStoryGeneratorAction, } from '../TypeGuards/isStoryGeneratorAction';
import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
export const proseTemplateReducer = (previousState = null, action) => {
    if (isStoryGeneratorAction(action) &&
        action.type === StoryGeneratorActionTypes.ProseTemplate) {
        return action.value;
    }
    return previousState;
};
export default proseTemplateReducer;
