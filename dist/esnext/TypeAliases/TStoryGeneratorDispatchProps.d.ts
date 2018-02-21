import { IQuestionModel } from '../Interfaces/IQuestionModel';
import { IStoryGeneratorAction } from '../Actions/IStoryGeneratorAction';
import { StoryStates } from '../Enums/StoryStates';
export declare type TStoryGeneratorDispatchProps = {
    setAnswerText: (value: string, id: number) => IStoryGeneratorAction;
    setMaxAnswerLength: (value: number) => IStoryGeneratorAction;
    setQuestions: (value: Array<IQuestionModel>) => IStoryGeneratorAction;
    setStoryState: (value: StoryStates) => IStoryGeneratorAction;
};
export default TStoryGeneratorDispatchProps;
