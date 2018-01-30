import {
  isStoryGeneratorAction,
} from '../TypeGuards/isStoryGeneratorAction';
import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';
import {
  ProseTemplate,
} from '../Objects/ProseTemplate';
import {
  AnyAction,
  Reducer,
} from 'redux';
import {
  StoryGeneratorActionTypes,
} from '../Enums/StoryGeneratorActionTypes';

export const proseTemplateReducer: Reducer<ProseTemplate | null> = (previousState: ProseTemplate | null = null, action: IStoryGeneratorAction | AnyAction) => {
  if (isStoryGeneratorAction(action) &&
    action.type === StoryGeneratorActionTypes.SetProseTemplate)
  {
    return action.value;
  }

  return previousState;
};

export default proseTemplateReducer;