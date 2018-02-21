import { getLoremIpsumTemplateString, } from './getLoremIpsumTemplateString';
import { ProseTemplate, } from '../Objects/ProseTemplate';
export const getDefaultProseTemplate = () => {
    return new ProseTemplate(getLoremIpsumTemplateString());
};
export default getDefaultProseTemplate;
