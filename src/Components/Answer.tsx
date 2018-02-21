import {
  censorText,
} from '../Modules/censorText';
import {
  IAnswerProps,
} from '../Interfaces/IAnswerProps';
import {
  QuestionStates,
} from '../Enums/QuestionStates';
import {
  QuestionTypes,
} from '../Enums/QuestionTypes';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/Answer.less';

export class Answer extends React.PureComponent<IAnswerProps> {
  render() {
    /* Typescript compiler uses `_this` internally, so __this it is. */
    const __this = this;

    const element = (() => {
      const props: { [key: string]: any } = {
        className: `AnswerInput ${(styles || {}).QuestionInput}`,
        defaultValue: this.props.text,
        readOnly: this.props.state === QuestionStates.Censored ||
          this.props.state === QuestionStates.PreAnswered
      };

      if (this.props.state === QuestionStates.Censored) {
        const _props = (Object as any).assign({}, props);

        /* Censored components are uncontrolled, so should have no default
         * value. */
        delete _props.defaultValue;

        return (
          <input
            {..._props}
            value={censorText(this.props.text)} />
        );
      } else if (this.props.type === QuestionTypes.Select) {
        let key = -1;
        return (
          <select {...props}>
            {(this.props.selections || []).map((selection) => (
              <option key={key += 1}>{selection}</option>
            ))}
          </select>
        );
      }

      props.onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        __this.props.setAnswerText(e.currentTarget.value, __this.props.id);
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