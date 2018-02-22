import { TSubstitutionMap } from '../TypeAliases/TSubstitutionMap';
export interface IStoryTemplate {
    complete(substitutionMap: TSubstitutionMap): string;
    text: string;
}
export default IStoryTemplate;
