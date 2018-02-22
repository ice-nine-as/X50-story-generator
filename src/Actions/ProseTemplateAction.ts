import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const ProseTemplateAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.ProseTemplate,
  value: null,
});

export default ProseTemplateAction;