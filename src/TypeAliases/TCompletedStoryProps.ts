import {
  IProseTemplate,
} from '../Interfaces/IProseTemplate';
import {
  IQuestionModel,
} from '../Interfaces/IQuestionModel';

export type TCompletedStoryProps = {
  models:        Array<IQuestionModel>;
  proseTemplate: IProseTemplate;
};

export default TCompletedStoryProps;