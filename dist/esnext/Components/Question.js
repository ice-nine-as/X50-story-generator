import { Answer, } from './Answer';
import * as React from 'react';
import styles from '../Styles/Components/Question.less';
export class Question extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: `Question ${(styles || {}).Question}` },
            this.props.text,
            Array.isArray(this.props.answer) ?
                this.props.answer.map((model, index) => {
                    return (React.createElement(Answer, Object.assign({}, model, { key: index, setAnswerText: this.props.setAnswerText })));
                }) :
                React.createElement(Answer, Object.assign({}, this.props.answer, { setAnswerText: this.props.setAnswerText }))));
    }
}
