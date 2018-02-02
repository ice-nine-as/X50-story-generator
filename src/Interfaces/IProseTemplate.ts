import {
  TSubstitutionMap,
} from '../TypeAliases/TSubstitutionMap';

export interface IProseTemplate {
  complete(substitutionMap: TSubstitutionMap): string;
  text: string;
}

export default IProseTemplate;