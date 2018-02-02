import {
  IProseTemplate,
} from '../Interfaces/IProseTemplate';
import {
  IQuestionModel,
} from '../Interfaces/IQuestionModel';
import {
  StoryStates,
} from '../Enums/StoryStates';
import {
  TSubstitutionMap,
} from './TSubstitutionMap';

export type TStoryGeneratorOwnProps = {
  maxAnswerLength: number;
  proseTemplate:   IProseTemplate;
  questions:       ReadonlyArray<IQuestionModel>;
  substitutionMap: TSubstitutionMap;
  state:           StoryStates;
}

export default TStoryGeneratorOwnProps;