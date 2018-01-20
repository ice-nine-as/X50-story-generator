import {
  isStoryGeneratorAction,
} from '../TypeGuards/isStoryGeneratorAction';
import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';
import {
  Reducer,
} from 'redux';
import {
  TStoryGeneratorOwnProps,
} from '../TypeAliases/TStoryGeneratorOwnProps';

export const storyGeneratorReducer: Reducer<TStoryGeneratorOwnProps> = (previousState: any = null, action: IStoryGeneratorAction) => {
  if (isStoryGeneratorAction(action)) {
    return action.value;
  }

  return previousState;
};

export default storyGeneratorReducer;