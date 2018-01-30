import {
  Answer,
} from './Answer';
import {
  IQuestionProps,
} from '../Interfaces/IQuestionProps';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/Question.less';

export class Question extends React.PureComponent<IQuestionProps> {
  render() {
    return (
      <div className={`Question ${(styles || {}).Question}`}>
        {this.props.text}
        {Array.isArray(this.props.answer) ?
          this.props.answer.map((model, index) => {
            return (
              <Answer
                {...model}
                key={index}
                setAnswerText={this.props.setAnswerText} />
            );
          }) :
          <Answer
            {...this.props.answer}
            setAnswerText={this.props.setAnswerText} />}
      </div>
    );
  }
}