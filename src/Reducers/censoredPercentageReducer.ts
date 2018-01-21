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

export const censoredPercentageReducer: Reducer<number> = (previousState: number = 0.33, action: IStoryGeneratorAction | AnyAction) => {
  if (isStoryGeneratorAction(action) &&
    action.type === StoryGeneratorActionTypes.SetCensoredPercentage)
  {
    return action.value;
  }

  return previousState;
};

export default censoredPercentageReducer;