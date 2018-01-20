import {
  CompletedStory,
} from './CompletedStory';
import {
  Question,
} from './Question';
import {
  InProgressStory,
} from './InProgressStory';
import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';
import {
  makeStoryGeneratorAction,
} from '../Modules/makeStoryGeneratorAction';
import {
  connect,
  MapDispatchToProps,
  MapDispatchToPropsFactory,
} from 'react-redux';
import {
  Dispatch,
} from 'redux';
import {
  SetAnswerablePercentageAction
} from '../Actions/SetAnswerablePercentageAction';
import {
  SetCensoredPercentageAction,
} from '../Actions/SetCensoredPercentageAction';
import {
  SetMaxAnswerLengthAction,
} from '../Actions/SetMaxAnswerLengthAction';
import {
  SetPreAnsweredPercentageAction,
} from '../Actions/SetPreAnsweredPercentageAction';
import {
  SetQuestionsAction,
} from '../Actions/SetQuestionsAction';
import {
  SetShuffleAction,
} from '../Actions/SetShuffleAction';
import {
  SetStateAction,
} from '../Actions/SetStateAction';
import {
  StoryStates,
} from '../Enums/StoryStates';
import {
  TStoryGeneratorDispatchProps,
} from '../TypeAliases/TStoryGeneratorDispatchProps';
import {
  TStoryGeneratorOwnProps,
} from '../TypeAliases/TStoryGeneratorOwnProps';
import {
  TQuestionModel,
} from '../TypeAliases/TQuestionModel';
import {
  validateStoryGeneratorProps,
} from '../Validators/validateStoryGeneratorProps';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/StoryGenerator.less';

const shuffleArray = require('shuffle-array');

export class StoryGenerator extends React.PureComponent<TStoryGeneratorDispatchProps & TStoryGeneratorOwnProps> {
  render() {
    let key = -1;

    /* Throws if invalid. */
    validateStoryGeneratorProps(this.props);

    const models = this.props.questions.map((model) => {
      return <Question model={model} key={key += 1} />;
    });

    return (
      <div className={`StoryGenerator ${(styles || {}).StoryGenerator}`}>
        StoryGenerator.

        {this.props.state === StoryStates.Complete ?
          <CompletedStory models={this.props.questions} /> :
          <InProgressStory>
            {this.props.shuffle ?
              shuffleArray(models) :
              models}
          </InProgressStory>}
      </div>
    );
  }
}

export const mapStateToProps = ({
  storyGenerator: {
    answerablePercentage,
    censoredPercentage,
    maxAnswerLength,
    preAnsweredPercentage,
    questions,
    shuffle,
    state,
  },
}: {
  storyGenerator: TStoryGeneratorOwnProps,
}) => ({
  answerablePercentage,
  censoredPercentage,
  maxAnswerLength,
  preAnsweredPercentage,
  questions,
  shuffle,
  state,
});

export const mapDispatchToProps: MapDispatchToPropsFactory<TStoryGeneratorDispatchProps, TStoryGeneratorOwnProps> = (dispatch: Dispatch<IStoryGeneratorAction>): MapDispatchToProps<TStoryGeneratorDispatchProps, TStoryGeneratorOwnProps> => ({
  setAnswerablePercentage: (value: number) => {
    const action = makeStoryGeneratorAction(
      SetAnswerablePercentageAction,
      value);

    return dispatch(action);
  },
  
  setCensoredPercentage: (value: number) => {
    const action = makeStoryGeneratorAction(
      SetCensoredPercentageAction,
      value);

    return dispatch(action);
  },
  
  setMaxAnswerLength: (value: number) => {
    const action = makeStoryGeneratorAction(SetMaxAnswerLengthAction, value);
    return dispatch(action);
  },
  
  setPreAnsweredPercentage: (value: number) => {
    const action = makeStoryGeneratorAction(
      SetPreAnsweredPercentageAction,
      value);

    return dispatch(action);
  },
  
  setQuestions: (value: Array<TQuestionModel>) => {
    const action = makeStoryGeneratorAction(SetQuestionsAction, value);
    return dispatch(action);
  },

  setShuffle: (value: boolean) => {
    const action = makeStoryGeneratorAction(SetShuffleAction, value);
    return dispatch(action);
  },

  setStoryState: (value: StoryStates) => {
    const action = makeStoryGeneratorAction(SetStateAction, value);
    return dispatch(action);
  },
});

export const ConnectedStoryGenerator = connect(mapStateToProps, mapDispatchToProps)(StoryGenerator);

export default ConnectedStoryGenerator;