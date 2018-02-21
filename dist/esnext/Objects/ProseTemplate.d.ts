import { IProseTemplate } from '../Interfaces/IProseTemplate';
import { TSubstitutionMap } from '../TypeAliases/TSubstitutionMap';
export declare const strings: {
    TEXT_INVALID: string;
};
export declare class ProseTemplate implements IProseTemplate {
    text: string;
    constructor(text: string);
    complete(substitutions: TSubstitutionMap): string;
}
export default ProseTemplate;
