import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';

export const makeStoryGeneratorAction = (action: IStoryGeneratorAction, value: any): IStoryGeneratorAction => {
  return Object.freeze(Object.assign({}, action, { value, }));
};

export default makeStoryGeneratorAction;