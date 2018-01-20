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
  setAnswerablePercentage:  (value: number) => IStoryGeneratorAction;
  setCensoredPercentage:    (value: number) => IStoryGeneratorAction;
  setMaxAnswerLength:       (value: number) => IStoryGeneratorAction;
  setPreAnsweredPercentage: (value: number) => IStoryGeneratorAction;
  setQuestions:             (value: Array<TQuestionModel>) => IStoryGeneratorAction;
  setShuffle:               (value: boolean) => IStoryGeneratorAction;
  setStoryState:            (value: StoryStates) => IStoryGeneratorAction;
}

export default TStoryGeneratorDispatchProps;