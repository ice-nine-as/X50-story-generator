import {
  QuestionStates,
} from '../Enums/QuestionStates';
import {
  QuestionTypes,
} from '../Enums/QuestionTypes';
import {
  TSubstitutionValue,
} from '../TypeAliases/TSubstitutionValue';

export interface IAnswerModel {
  author:      string;
  id:          number;
  selections?: ReadonlyArray<TSubstitutionValue>;
  state:       QuestionStates;
  text:        string;
  type:        QuestionTypes;
}

export default IAnswerModel;