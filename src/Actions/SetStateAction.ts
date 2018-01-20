import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';
import {
  StoryStates,
} from '../Enums/StoryStates';

export const SetStateAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetState,
  value: StoryStates.InProgress,
});

export default SetStateAction;