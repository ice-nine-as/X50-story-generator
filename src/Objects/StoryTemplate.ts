import {
  IStoryTemplate,
} from '../Interfaces/IStoryTemplate';
import {
  TSubstitutionMap,
} from '../TypeAliases/TSubstitutionMap';

export const strings = {
  TEXT_INVALID:
  'The text argument passed to the ProseTemplate constructor was not a ' +
  'string with content.',
};

const escape = require('escape-string-regexp');

export class StoryTemplate implements IStoryTemplate {
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
      const re = new RegExp(escape(key), 'g');
      completed = completed.replace(re, substitutions[key]);
    });

    return completed;
  }
}

export default StoryTemplate;