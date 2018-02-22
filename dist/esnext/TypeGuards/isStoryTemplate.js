export const isStoryTemplate = (maybe) => {
    return typeof maybe === 'object' &&
        maybe &&
        typeof maybe.text === 'string' &&
        maybe.text &&
        typeof maybe.complete === 'function';
};
export default isStoryTemplate;
