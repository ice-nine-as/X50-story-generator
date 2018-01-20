import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const SetMaxAnswerLengthAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetMaxAnswerLength,
  value: 5000,
});

export default SetMaxAnswerLengthAction;