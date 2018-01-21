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

export const answerablePercentageReducer: Reducer<number> = (previousState: number = 0.34, action: IStoryGeneratorAction | AnyAction) => {
  if (isStoryGeneratorAction(action) &&
    action.type === StoryGeneratorActionTypes.SetAnswerablePercentage)
  {
    return action.value;
  }

  return previousState;
};

export default answerablePercentageReducer;