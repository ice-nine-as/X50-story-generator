import {
  TSubstitutionMap,
} from '../TypeAliases/TSubstitutionMap';

export interface IProseTemplate {
  complete(substitions: TSubstitutionMap): string;
  text: string;
}

export default IProseTemplate;