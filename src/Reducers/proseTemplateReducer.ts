import {
  IStoryTemplate,
} from '../Interfaces/IStoryTemplate';
import {
  isStoryGeneratorAction,
} from '../TypeGuards/isStoryGeneratorAction';
import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';
import {
  AnyAction,
  Reducer,
} from 'redux';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const proseTemplateReducer: Reducer<IStoryTemplate> =
  (previousState: IStoryTemplate | null = null,
    action: IStoryGeneratorAction | AnyAction) =>
{
  if (isStoryGeneratorAction(action) &&
    action.type === StoryGeneratorActionTypes.StoryTemplate)
  {
    return action.value;
  }

  return previousState;
};

export default proseTemplateReducer;