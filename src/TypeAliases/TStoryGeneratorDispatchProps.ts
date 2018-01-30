import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';
import {
  StoryStates,
} from '../Enums/StoryStates';
import {
  TQuestionModel,
} from './TQuestionModel';

export type TStoryGeneratorDispatchProps = {
  setAnswerText:      (value: string, id: number) => IStoryGeneratorAction;
  setMaxAnswerLength: (value: number) => IStoryGeneratorAction;
  setQuestions:       (value: Array<TQuestionModel>) => IStoryGeneratorAction;
  setStoryState:      (value: StoryStates) => IStoryGeneratorAction;
}

export default TStoryGeneratorDispatchProps;