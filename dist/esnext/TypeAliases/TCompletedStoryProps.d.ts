import { IStoryTemplate } from '../Interfaces/IStoryTemplate';
import { IQuestionModel } from '../Interfaces/IQuestionModel';
export declare type TCompletedStoryProps = {
    models: ReadonlyArray<IQuestionModel>;
    proseTemplate: IStoryTemplate;
};
export default TCompletedStoryProps;
