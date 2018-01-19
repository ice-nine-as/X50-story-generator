import {
  StoryStates,
} from '../Enums/StoryStates';
import {
  TQuestionModel,
} from './TQuestionModel';

export type TStoryGeneratorProps = {
  answerablePercentage:  number;
  censoredPercentage:    number;
  maxAnswerLength:       number;
  preAnsweredPercentage: number;
  questions:             Array<TQuestionModel>;
  shuffle?:              boolean;
  state:                 StoryStates;
}

export default TStoryGeneratorProps;