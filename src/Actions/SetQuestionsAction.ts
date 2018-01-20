import {
  getDefaultQuestionModels,
} from '../Modules/getDefaultQuestionModels';
import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const SetQuestionsAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetQuestions,
  value: getDefaultQuestionModels(),
});

export default SetQuestionsAction;