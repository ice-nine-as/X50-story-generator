import {
  IAnswerProps,
} from '../Interfaces/IAnswerProps';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/Answer.less';
import { QuestionTypes } from '../Enums/QuestionTypes';

export class Answer extends React.PureComponent<IAnswerProps> {
  render() {
    const _this = this;

    const element = (() => {
      const props: { [key: string]: any } = {
        className: `AnswerInput ${(styles || {}).QuestionInput}`,
        defaultValue: this.props.text,
      };

      if (this.props.type === QuestionTypes.Select) {
        return (
          <select {...props}></select>
        );
      }

      props.onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        _this.props.setAnswerText(e.currentTarget.value, _this.props.id);
      };
      
      if (this.props.type === QuestionTypes.Big) {
        return (
          <textarea {...props} />
        );
      } else {
        return (
          <input {...props} />
        );
      }
    })();

    return (
      <div className={`Answer ${(styles || {}).Answer}`}>
        {element}
      </div>
    );
  }
}

export default Answer;