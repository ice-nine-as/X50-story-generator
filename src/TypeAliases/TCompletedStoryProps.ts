import {
  IProseTemplate,
} from '../Interfaces/IProseTemplate';
import {
  IQuestionModel,
} from '../Interfaces/IQuestionModel';

export type TCompletedStoryProps = {
  models:          ReadonlyArray<IQuestionModel>;
  proseTemplate:   IProseTemplate;
};

export default TCompletedStoryProps;