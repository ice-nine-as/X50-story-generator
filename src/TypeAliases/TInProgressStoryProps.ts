import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';
import {
  StoryStates,
} from '../Enums/StoryStates';

export type TInProgressStoryProps = {
  setStoryState: (value: StoryStates) => IStoryGeneratorAction;
}

export default TInProgressStoryProps;