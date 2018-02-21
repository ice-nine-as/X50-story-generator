import { StoryStates, } from '../Enums/StoryStates';
export const isStoryState = (maybe) => {
    return Object.values(StoryStates).includes(maybe);
};
export default isStoryState;
