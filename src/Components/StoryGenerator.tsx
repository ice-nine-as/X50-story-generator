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
  SetAnswerTextAction,
} from '../Actions/SetAnswerTextAction';
import {
  SetMaxAnswerLengthAction,
} from '../Actions/SetMaxAnswerLengthAction';
import {
  SetQuestionsAction,
} from '../Actions/SetQuestionsAction';
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

export class StoryGenerator extends React.PureComponent<TStoryGeneratorDispatchProps & TStoryGeneratorOwnProps> {
  render() {
    /* Throws if invalid. */
    validateStoryGeneratorProps(this.props);

    const questions = this.props.questions.map((model, index) => {
      return (
        <Question
          {...model}
          key={index}
          setAnswerText={this.props.setAnswerText} />
      );
    });


    return (
      <div className={`StoryGenerator ${(styles || {}).StoryGenerator}`}>
        StoryGenerator.

        {this.props.state === StoryStates.Complete ?
          <CompletedStory
            models={this.props.questions}
            proseTemplate={this.props.proseTemplate} /> :
          <InProgressStory
            setStoryState={this.props.setStoryState}>
            {questions}
          </InProgressStory>}
      </div>
    );
  }
}

export const mapStateToProps = ({
  storyGenerator: {
    maxAnswerLength,
    questions,
    state,
  },
}: {
  storyGenerator: TStoryGeneratorOwnProps,
}) => ({
  maxAnswerLength,
  questions,
  state,
});

export const mapDispatchToProps: MapDispatchToPropsFactory<TStoryGeneratorDispatchProps, TStoryGeneratorOwnProps> = (dispatch: Dispatch<IStoryGeneratorAction>): MapDispatchToProps<TStoryGeneratorDispatchProps, TStoryGeneratorOwnProps> => ({
  setAnswerText: (value: string, id: number) => {
    const action = makeStoryGeneratorAction(
      SetAnswerTextAction,
      value,
      id);

    return dispatch(action);
  },
  
  setMaxAnswerLength: (value: number) => {
    const action = makeStoryGeneratorAction(SetMaxAnswerLengthAction, value);
    return dispatch(action);
  },
  
  setQuestions: (value: Array<TQuestionModel>) => {
    const action = makeStoryGeneratorAction(SetQuestionsAction, value);
    return dispatch(action);
  },

  setStoryState: (value: StoryStates) => {
    const action = makeStoryGeneratorAction(SetStateAction, value);
    return dispatch(action);
  },
});

export const ConnectedStoryGenerator = connect(mapStateToProps, mapDispatchToProps)(StoryGenerator);

export default ConnectedStoryGenerator;