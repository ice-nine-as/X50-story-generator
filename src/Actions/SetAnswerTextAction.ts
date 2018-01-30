import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const SetAnswerTextAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetAnswerText,
  value: '',
});

export default SetAnswerTextAction;