import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const MaxAnswerLengthAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.MaxAnswerLength,
  value: 5000,
});

export default MaxAnswerLengthAction;