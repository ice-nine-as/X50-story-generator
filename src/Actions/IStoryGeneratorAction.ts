import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export interface IStoryGeneratorAction {
  type:  StoryGeneratorActionTypes;
  value: any;
}

export default IStoryGeneratorAction;