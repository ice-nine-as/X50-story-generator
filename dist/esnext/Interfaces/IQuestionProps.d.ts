import { IQuestionModel } from './IQuestionModel';
import { IStoryGeneratorAction } from '../Actions/IStoryGeneratorAction';
export interface IQuestionProps extends IQuestionModel {
    setAnswerText: (text: string, id: number) => IStoryGeneratorAction;
}
export default IQuestionProps;
