import {
  default as escape,
} from 'escape-string-regexp';
import {
  IProseTemplate,
} from '../Interfaces/IProseTemplate';
import {
  TSubstitutionMap,
} from '../TypeAliases/TSubstitutionMap';

export const strings = {
  TEXT_INVALID:
    'The text argument passed to the ProseTemplate constructor was not a ' +
    'string with content.',
};

export class ProseTemplate implements IProseTemplate {
  text: string = '';

  constructor(text: string) {
    if (typeof text !== 'string' || text.length === 0) {
      throw new Error(strings.TEXT_INVALID);
    }

    this.text = text;
  }

  complete(substitutions: TSubstitutionMap): string {
    if (typeof this.text !== 'string' || this.text.length === 0) {
      throw new Error(strings.TEXT_INVALID);
    }

    let completed = this.text;

    Object.keys(substitutions).forEach((key) => {
      completed = completed.replace(escape(key), substitutions[key]);
    });

    return completed;
  }
}

export default ProseTemplate;