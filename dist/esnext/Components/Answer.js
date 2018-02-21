import { censorText, } from '../Modules/censorText';
import { QuestionStates, } from '../Enums/QuestionStates';
import { QuestionTypes, } from '../Enums/QuestionTypes';
import * as React from 'react';
import styles from '../Styles/Components/Answer.less';
export class Answer extends React.PureComponent {
    render() {
        const __this = this;
        const element = (() => {
            const props = {
                className: `AnswerInput ${(styles || {}).QuestionInput}`,
                defaultValue: this.props.text,
                readOnly: this.props.state === QuestionStates.Censored ||
                    this.props.state === QuestionStates.PreAnswered
            };
            if (this.props.state === QuestionStates.Censored) {
                const _props = Object.assign({}, props);
                delete _props.defaultValue;
                return (React.createElement("input", Object.assign({}, _props, { value: censorText(this.props.text) })));
            }
            else if (this.props.type === QuestionTypes.Select) {
                let key = -1;
                return (React.createElement("select", Object.assign({}, props), (this.props.selections || []).map((selection) => (React.createElement("option", { key: key += 1 }, selection)))));
            }
            props.onKeyUp = (e) => {
                __this.props.setAnswerText(e.currentTarget.value, __this.props.id);
            };
            if (this.props.type === QuestionTypes.Big) {
                return (React.createElement("textarea", Object.assign({}, props)));
            }
            else {
                return (React.createElement("input", Object.assign({}, props)));
            }
        })();
        return (React.createElement("div", { className: `Answer ${(styles || {}).Answer}` }, element));
    }
}
export default Answer;
