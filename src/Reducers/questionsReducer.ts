import {
  IQuestionModel,
} from '../Interfaces/IQuestionModel';
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

export const questionsReducer: Reducer<Array<IQuestionModel>> =
  (previousState: ReadonlyArray<IQuestionModel> = [],
    action: IStoryGeneratorAction | AnyAction) =>
{
  if (isStoryGeneratorAction(action)) {
    if (action.type === StoryGeneratorActionTypes.Questions) {
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