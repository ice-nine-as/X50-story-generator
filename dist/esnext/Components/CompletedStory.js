import * as React from 'react';
import styles from '../Styles/Components/CompletedStory.less';
export class CompletedStory extends React.PureComponent {
    render() {
        const substitutionMap = this.props.models.reduce((map, model) => {
            if (Array.isArray(model.answer)) {
                model.answer.forEach((answer) => {
                    map[`{{${answer.id}}}`] = answer.text;
                });
            }
            else {
                map[`{{${model.answer.id}}}`] = model.answer.text;
            }
            return map;
        }, {});
        const storyText = this.props.proseTemplate.complete(substitutionMap);
        return (React.createElement("div", { className: `CompletedStory ${(styles || {}).CompletedStory}` },
            React.createElement("div", null, "CompletedStory."),
            React.createElement("textarea", { className: `CompletedStoryTextArea ${(styles || {}).CompletedStoryTextArea}`, defaultValue: storyText }),
            React.createElement("button", { className: `CompletedStorySubmitButton ${(styles || {}).CompletedStoryTextArea}` }, "Submit My Story")));
    }
}
export default CompletedStory;
