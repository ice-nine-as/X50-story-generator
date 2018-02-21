import { getDefaultQuestionModels, } from '../Modules/getDefaultQuestionModels';
import { isStoryGeneratorAction, } from '../TypeGuards/isStoryGeneratorAction';
import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
export const questionsReducer = (previousState = getDefaultQuestionModels(), action) => {
    if (isStoryGeneratorAction(action)) {
        if (action.type === StoryGeneratorActionTypes.SetQuestions) {
            return action.value;
        }
        else {
            return previousState.map((model) => {
                if (Array.isArray(model.answer)) {
                    model.answer.forEach((answerModel) => {
                        if (answerModel.id === action.id) {
                            answerModel.text = action.value;
                        }
                    });
                }
                else if (model.answer.id === action.id) {
                    model.answer.text = action.value;
                }
                return model;
            });
        }
    }
    return previousState;
};
export default questionsReducer;
