import {
  isStoryGeneratorAction,
} from '../TypeGuards/isStoryGeneratorAction';
import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';
import {
  AnyAction,
  Reducer,
} from 'redux';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';
import {
  StoryStates,
} from '../Enums/StoryStates';

export const stateReducer: Reducer<StoryStates> = (previousState: StoryStates = StoryStates.InProgress, action: IStoryGeneratorAction | AnyAction) => {
  if (isStoryGeneratorAction(action) &&
    action.type === StoryGeneratorActionTypes.SetState)
  {
    return action.value;
  }

  return previousState;
};

export default stateReducer;