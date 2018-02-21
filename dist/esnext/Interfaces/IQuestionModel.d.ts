import { QuestionStates } from '../Enums/QuestionStates';
import { QuestionTypes } from '../Enums/QuestionTypes';
import { IAnswerModel } from './IAnswerModel';
import { TOneOrArray } from '../TypeAliases/TOneOrArray';
export interface IQuestionModel {
    answer: TOneOrArray<IAnswerModel>;
    author?: string;
    multiple?: number;
    state: QuestionStates;
    text: string;
    type: QuestionTypes;
}
export default IQuestionModel;
