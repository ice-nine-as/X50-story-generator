import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const SetAnswerablePercentageAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetAnswerablePercentage,
  value: 0.33,
});

export default SetAnswerablePercentageAction;