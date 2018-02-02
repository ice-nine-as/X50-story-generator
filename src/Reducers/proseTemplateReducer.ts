import {
  getDefaultProseTemplate,
} from '../Modules/getDefaultProseTemplate';
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
  (previousState: IProseTemplate = getDefaultProseTemplate(), action: IStoryGeneratorAction | AnyAction) => {
    if (isStoryGeneratorAction(action) &&
      action.type === StoryGeneratorActionTypes.SetProseTemplate)
    {
      return action.value;
    }

    return previousState;
  };

export default proseTemplateReducer;