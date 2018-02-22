import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const QuestionsAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.Questions,
  value: [],
});

export default QuestionsAction;