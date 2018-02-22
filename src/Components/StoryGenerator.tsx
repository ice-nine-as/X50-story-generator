import {
  CompletedStory,
} from './CompletedStory';
import {
  InProgressStory,
} from './InProgressStory';
import {
  // @ts-ignore
  IProseTemplate,
} from '../Interfaces/IProseTemplate';
import {
  IQuestionModel,
} from '../Interfaces/IQuestionModel';
import {
  IStoryGeneratorAction,
} from '../Actions/IStoryGeneratorAction';
import {
  makeStoryGeneratorAction,
} from '../Modules/makeStoryGeneratorAction';
import {
  Question,
} from './Question';
import {
  connect,
  MapDispatchToProps,
  MapDispatchToPropsFactory,
} from 'react-redux';
import {
  Dispatch,
} from 'redux';
import {
  AnswerTextAction,
} from '../Actions/AnswerTextAction';
import {
  MaxAnswerLengthAction,
} from '../Actions/MaxAnswerLengthAction';
import {
  QuestionsAction,
} from '../Actions/QuestionsAction';
import {
  StateAction,
} from '../Actions/StateAction';
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
    proseTemplate,
    questions,
    state,
  },
}: {
  storyGenerator: TStoryGeneratorOwnProps,
}) => ({
  maxAnswerLength,
  proseTemplate,
  questions,
  state,
});

export const mapDispatchToProps: MapDispatchToPropsFactory<TStoryGeneratorDispatchProps, TStoryGeneratorOwnProps> = (dispatch: Dispatch<IStoryGeneratorAction>): MapDispatchToProps<TStoryGeneratorDispatchProps, TStoryGeneratorOwnProps> => ({
  setAnswerText: (value: string, id: number) => {
    const action = makeStoryGeneratorAction(
      AnswerTextAction,
      value,
      id);

    return dispatch(action);
  },
  
  setMaxAnswerLength: (value: number) => {
    const action = makeStoryGeneratorAction(MaxAnswerLengthAction, value);
    return dispatch(action);
  },
  
  setQuestions: (value: Array<IQuestionModel>) => {
    const action = makeStoryGeneratorAction(QuestionsAction, value);
    return dispatch(action);
  },

  setStoryState: (value: StoryStates) => {
    const action = makeStoryGeneratorAction(StateAction, value);
    return dispatch(action);
  },
});

export const ConnectedStoryGenerator = connect(mapStateToProps, mapDispatchToProps)(StoryGenerator);

export default ConnectedStoryGenerator;