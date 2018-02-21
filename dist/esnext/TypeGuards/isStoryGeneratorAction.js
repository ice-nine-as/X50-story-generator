import { isStoryGeneratorActionType, } from './isStoryGeneratorActionType';
export const isStoryGeneratorAction = (maybe) => {
    return typeof maybe === 'object' &&
        maybe &&
        isStoryGeneratorActionType(maybe.type) &&
        'value' in maybe;
};
export default isStoryGeneratorAction;
