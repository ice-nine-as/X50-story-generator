import {
  TQuestionProps,
} from '../TypeAliases/TQuestionProps';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/Question.less';

export class Question extends React.PureComponent<TQuestionProps> {
  render() {
    let key = -1;

    const inputFactory = () => {
      const props = {
        className: `QuestionInput ${(styles || {}).QuestionInput}`,
        key:       key += 1,
      };

      return this.props.model.big ?
        <textarea {...props} /> :
        <input    {...props} />;
    }

    const inputs = [
      inputFactory(),
    ];
    
    if (this.props.model.multiple) {
      for (let ii = 0; ii < this.props.model.multiple - 1; ii += 1) {
        inputs.push(inputFactory());
      }
    }

    return (
      <div className={`Question ${(styles || {}).Question}`}>
        {this.props.model.text}
        {inputs}
      </div>
    );
  }
}