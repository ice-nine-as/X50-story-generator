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

export const maxAnswerLengthReducer: Reducer<number> = (previousState: number = 5000, action: IStoryGeneratorAction | AnyAction) => {
  if (isStoryGeneratorAction(action) &&
    action.type === StoryGeneratorActionTypes.SetMaxAnswerLength)
  {
    return action.value;
  }

  return previousState;
};

export default maxAnswerLengthReducer;