import { getDefaultProseTemplate, } from '../Modules/getDefaultProseTemplate';
import { isStoryGeneratorAction, } from '../TypeGuards/isStoryGeneratorAction';
import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
export const proseTemplateReducer = (previousState = getDefaultProseTemplate(), action) => {
    if (isStoryGeneratorAction(action) &&
        action.type === StoryGeneratorActionTypes.SetProseTemplate) {
        return action.value;
    }
    return previousState;
};
export default proseTemplateReducer;
