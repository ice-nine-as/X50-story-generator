import {
  QuestionStates,
} from '../Enums/QuestionStates';
import {
  TAnswerModel,
} from './TAnswerModel';
import {
  TOneOrArray,
} from '../TypeAliases/TOneOrArray';

export type TQuestionModel = {
  answer:    TOneOrArray<TAnswerModel> | null;
  big?:      boolean;
  multiple?: number;
  state:     QuestionStates;
  text:      string;
}

export default TQuestionModel;