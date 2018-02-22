import { IStoryTemplate } from '../Interfaces/IStoryTemplate';
import { TSubstitutionMap } from '../TypeAliases/TSubstitutionMap';
export declare const strings: {
    TEXT_INVALID: string;
};
export declare class StoryTemplate implements IStoryTemplate {
    text: string;
    constructor(text: string);
    complete(substitutions: TSubstitutionMap): string;
}
export default StoryTemplate;
