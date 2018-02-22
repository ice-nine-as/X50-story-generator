import {
  IStoryTemplate,
} from '../Interfaces/IStoryTemplate';
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
  proseTemplate:   IStoryTemplate;
  questions:       ReadonlyArray<IQuestionModel>;
  substitutionMap: TSubstitutionMap;
  state:           StoryStates;
}

export default TStoryGeneratorOwnProps;