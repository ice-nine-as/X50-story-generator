import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const SetShuffleAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetShuffle,
  value: true,
});

export default SetShuffleAction;