import { CompletedStory, } from './CompletedStory';
import { InProgressStory, } from './InProgressStory';
import { makeStoryGeneratorAction, } from '../Modules/makeStoryGeneratorAction';
import { Question, } from './Question';
import { connect, } from 'react-redux';
import { AnswerTextAction, } from '../Actions/AnswerTextAction';
import { MaxAnswerLengthAction, } from '../Actions/MaxAnswerLengthAction';
import { QuestionsAction, } from '../Actions/QuestionsAction';
import { StateAction, } from '../Actions/StateAction';
import { StoryStates, } from '../Enums/StoryStates';
import { validateStoryGeneratorProps, } from '../Validators/validateStoryGeneratorProps';
import * as React from 'react';
import styles from '../Styles/Components/StoryGenerator.less';
export class StoryGenerator extends React.PureComponent {
    render() {
        validateStoryGeneratorProps(this.props);
        const questions = this.props.questions.map((model, index) => {
            return (React.createElement(Question, Object.assign({}, model, { key: index, setAnswerText: this.props.setAnswerText })));
        });
        return (React.createElement("div", { className: `StoryGenerator ${(styles || {}).StoryGenerator}` },
            "StoryGenerator.",
            this.props.state === StoryStates.Complete ?
                React.createElement(CompletedStory, { models: this.props.questions, proseTemplate: this.props.proseTemplate }) :
                React.createElement(InProgressStory, { setStoryState: this.props.setStoryState }, questions)));
    }
}
export const mapStateToProps = ({ storyGenerator: { maxAnswerLength, proseTemplate, questions, state, }, }) => ({
    maxAnswerLength,
    proseTemplate,
    questions,
    state,
});
export const mapDispatchToProps = (dispatch) => ({
    setAnswerText: (value, id) => {
        const action = makeStoryGeneratorAction(AnswerTextAction, value, id);
        return dispatch(action);
    },
    setMaxAnswerLength: (value) => {
        const action = makeStoryGeneratorAction(MaxAnswerLengthAction, value);
        return dispatch(action);
    },
    setQuestions: (value) => {
        const action = makeStoryGeneratorAction(QuestionsAction, value);
        return dispatch(action);
    },
    setStoryState: (value) => {
        const action = makeStoryGeneratorAction(StateAction, value);
        return dispatch(action);
    },
});
export const ConnectedStoryGenerator = connect(mapStateToProps, mapDispatchToProps)(StoryGenerator);
export default ConnectedStoryGenerator;
