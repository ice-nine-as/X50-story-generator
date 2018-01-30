import {
  TCompletedStoryProps,
} from '../TypeAliases/TCompletedStoryProps';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/CompletedStory.less';

export class CompletedStory extends React.PureComponent<TCompletedStoryProps> {
  render() {
    const value = this.props.models.reduce<string>((text, questionModel) => {
      if (Array.isArray(questionModel.answer)) {
        return text + questionModel.text + ' ' +
          questionModel.answer.reduce<string>((text, answerModel) => (
            text +
              (answerModel.text.endsWith('.') ?
                answerModel.text + ' ' :
                answerModel.text + '. ')
        ), '');
      } else {
        return text + questionModel.text + ' ' +
          (questionModel.answer.text.endsWith('.') ?
            questionModel.answer.text + ' ' :
            questionModel.answer.text + '. ');
      }
    }, '');

    return (
      <div className={`CompletedStory ${(styles || {}).CompletedStory}`}>
        <div>CompletedStory.</div>
        
        <textarea
          className={`CompletedStoryTextArea ${(styles || {}).CompletedStoryTextArea}`}
          defaultValue={value} />

        <button className={`CompletedStorySubmitButton ${(styles || {}).CompletedStoryTextArea}`}>
          Submit My Story
        </button>
      </div>
    );
  }
}

export default CompletedStory;