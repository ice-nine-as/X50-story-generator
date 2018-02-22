import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';
import {
  StoryStates,
} from '../Enums/StoryStates';

export const StateAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.State,
  value: StoryStates.InProgress,
});

export default StateAction;