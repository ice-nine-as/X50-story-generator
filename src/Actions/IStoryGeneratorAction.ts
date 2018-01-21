import {
  Action,
} from 'redux';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export interface IStoryGeneratorAction extends Action {
  type:  StoryGeneratorActionTypes;
  value: any;
}

export default IStoryGeneratorAction;