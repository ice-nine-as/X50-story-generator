import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';

export const makeStoryGeneratorAction =
  function (action: IStoryGeneratorAction, value: any, id?: number): IStoryGeneratorAction
{
  const act = (<any>Object).assign({}, action, { value, });
  if (arguments.length >= 3) {
    act.id = id;
  }

  return Object.freeze(act);
};

export default makeStoryGeneratorAction;