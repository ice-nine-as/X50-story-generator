export const strings = {
    TEXT_INVALID: 'The text argument passed to the censorText function was not a string ' +
        'with content.',
};
export const censorText = (text) => {
    if (typeof text !== 'string' || text.length === 0) {
        throw new Error(strings.TEXT_INVALID);
    }
    return '\u2588'.repeat(text.length);
};
export default censorText;
