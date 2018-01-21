import {
  getDefaultQuestionModels,
} from '../Modules/getDefaultQuestionModels';
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
  TQuestionModel,
} from '../TypeAliases/TQuestionModel';

export const questionsReducer: Reducer<Array<TQuestionModel>> = (previousState: Array<TQuestionModel> = getDefaultQuestionModels(), action: IStoryGeneratorAction | AnyAction) => {
  if (isStoryGeneratorAction(action) &&
    action.type === StoryGeneratorActionTypes.SetQuestions)
  {
    return action.value;
  }

  return previousState;
};

export default questionsReducer;