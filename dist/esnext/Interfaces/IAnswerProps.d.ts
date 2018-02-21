import { IStoryGeneratorAction } from '../Actions/IStoryGeneratorAction';
import { IAnswerModel } from './IAnswerModel';
export interface IAnswerProps extends IAnswerModel {
    setAnswerText: (value: string, id: number) => IStoryGeneratorAction;
}
export default IAnswerProps;
