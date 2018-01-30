import {
  IStoryGeneratorAction,
} from './IStoryGeneratorAction';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const SetProseTemplateAction: IStoryGeneratorAction = Object.freeze({
  type:  StoryGeneratorActionTypes.SetProseTemplate,
  value: null,
});

export default SetProseTemplateAction;