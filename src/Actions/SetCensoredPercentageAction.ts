import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const SetCensoredPercentageAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetCensoredPercentage,
  value: 0.33,
});

export default SetCensoredPercentageAction;