import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
export const SetMaxAnswerLengthAction = Object.freeze({
    type: StoryGeneratorActionTypes.SetMaxAnswerLength,
    value: 5000,
});
export default SetMaxAnswerLengthAction;
