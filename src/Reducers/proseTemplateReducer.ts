import {
  IProseTemplate,
} from '../Interfaces/IProseTemplate';
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

export const proseTemplateReducer: Reducer<IProseTemplate> =
  (previousState: IProseTemplate | null = null,
    action: IStoryGeneratorAction | AnyAction) =>
{
  if (isStoryGeneratorAction(action) &&
    action.type === StoryGeneratorActionTypes.ProseTemplate)
  {
    return action.value;
  }

  return previousState;
};

export default proseTemplateReducer;