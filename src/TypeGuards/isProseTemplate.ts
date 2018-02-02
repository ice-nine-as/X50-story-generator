import {
  IProseTemplate,
} from '../Interfaces/IProseTemplate';

export const isProseTemplate = (maybe: any): maybe is IProseTemplate => {
  return typeof maybe === 'object' &&
    maybe &&
    typeof maybe.text === 'string' &&
    maybe.text &&
    typeof maybe.complete === 'function';
};

export default isProseTemplate;