import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const SetPreAnsweredPercentageAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetPreAnsweredPercentage,
  value: 0.34,
});

export default SetPreAnsweredPercentageAction;