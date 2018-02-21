import { getDefaultQuestionModels, } from '../Modules/getDefaultQuestionModels';
import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
export const SetQuestionsAction = Object.freeze({
    type: StoryGeneratorActionTypes.SetQuestions,
    value: getDefaultQuestionModels(),
});
export default SetQuestionsAction;
