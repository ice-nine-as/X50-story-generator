import {
  IProseTemplate,
} from '../Interfaces/IProseTemplate';
import {
  IQuestionModel,
} from '../Interfaces/IQuestionModel';
import {
  StoryStates,
} from '../Enums/StoryStates';

export type TStoryGeneratorOwnProps = {
  maxAnswerLength: number;
  proseTemplate:   IProseTemplate;
  questions:       Array<IQuestionModel>;
  state:           StoryStates;
}

export default TStoryGeneratorOwnProps;