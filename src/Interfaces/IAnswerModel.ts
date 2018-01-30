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
  text:        string;
  type:        QuestionTypes;
}

export default IAnswerModel;