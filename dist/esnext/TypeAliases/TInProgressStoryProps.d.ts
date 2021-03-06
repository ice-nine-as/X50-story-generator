import { IStoryGeneratorAction } from '../Actions/IStoryGeneratorAction';
import { StoryStates } from '../Enums/StoryStates';
export declare type TInProgressStoryProps = {
    setStoryState: (value: StoryStates) => IStoryGeneratorAction;
};
export default TInProgressStoryProps;
