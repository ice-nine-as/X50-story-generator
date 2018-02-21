import { Question, } from './Question';
import { StoryStates, } from '../Enums/StoryStates';
import * as React from 'react';
import styles from '../Styles/Components/InProgressStory.less';
export const strings = {
    CHILD_INVALID: 'One of the children passed to the Story component was not a string, ' +
        'number, or an instance of the Question component.',
};
export class InProgressStory extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: `InProgressStory ${(styles || {}).InProgressStory}` },
            "Story.",
            React.Children.map(this.props.children, (child) => {
                if (typeof child === 'string' || typeof child === 'number') {
                    return child;
                }
                else if (child.type !== Question) {
                    throw new Error(strings.CHILD_INVALID);
                }
                return child;
            }),
            React.createElement("button", { className: `InProgressStoryComplete ${(styles || {}).InProgressStoryComplete}`, onClick: () => this.props.setStoryState(StoryStates.Complete) }, "Complete Story")));
    }
}
