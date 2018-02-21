export const makeStoryGeneratorAction = function (action, value, id) {
    const act = Object.assign({}, action, { value, });
    if (arguments.length >= 3) {
        act.id = id;
    }
    return Object.freeze(act);
};
export default makeStoryGeneratorAction;
