import {
  getLoremIpsumTemplateString,
} from './getLoremIpsumTemplateString';
import {
  IProseTemplate,
} from '../Interfaces/IProseTemplate';
import {
  ProseTemplate,
} from '../Objects/ProseTemplate';

export const getDefaultProseTemplate = (): IProseTemplate => {
  return new ProseTemplate(getLoremIpsumTemplateString());
}

export default getDefaultProseTemplate;