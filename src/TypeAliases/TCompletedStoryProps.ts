import {
  IStoryTemplate,
} from '../Interfaces/IStoryTemplate';
import {
  IQuestionModel,
} from '../Interfaces/IQuestionModel';

export type TCompletedStoryProps = {
  models:        ReadonlyArray<IQuestionModel>;
  proseTemplate: IStoryTemplate;
};

export default TCompletedStoryProps;