import {
  StoryGeneratorActionTypes
} from '../Enums/StoryGeneratorActionTypes';

export const isStoryGeneratorActionType = (maybe: any): maybe is StoryGeneratorActionTypes => {
  return (Object as any).values(StoryGeneratorActionTypes).includes(maybe);
};

export default isStoryGeneratorActionType;