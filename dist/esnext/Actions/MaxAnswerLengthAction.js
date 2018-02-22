import { StoryGeneratorActionTypes, } from '../Enums/StoryGeneratorActionTypes';
export const MaxAnswerLengthAction = Object.freeze({
    type: StoryGeneratorActionTypes.MaxAnswerLength,
    value: 5000,
});
export default MaxAnswerLengthAction;
