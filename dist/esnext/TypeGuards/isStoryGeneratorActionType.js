import { StoryGeneratorActionTypes } from '../Enums/StoryGeneratorActionTypes';
export const isStoryGeneratorActionType = (maybe) => {
    return Object.values(StoryGeneratorActionTypes).includes(maybe);
};
export default isStoryGeneratorActionType;
