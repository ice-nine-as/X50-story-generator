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

export const questionsReducer: Reducer<Array<TQuestionModel>> =
  (previousState: ReadonlyArray<TQuestionModel> = getDefaultQuestionModels(),
    action: IStoryGeneratorAction | AnyAction) =>
{
  if (isStoryGeneratorAction(action)) {
    if (action.type === StoryGeneratorActionTypes.SetQuestions) {
      return action.value;
    } else {
      return previousState.map((model) => {
        if (Array.isArray(model.answer)) {
          model.answer.forEach((answerModel) => {
            if (answerModel.id === action.id) {
              answerModel.text = action.value;
            }
          });
        } else if (model.answer.id === action.id) {
          model.answer.text = action.value;
        }

        return model;
      });
    }
  }

  return previousState;
};

export default questionsReducer;