import {
  Question,
} from './Question';
import {
  TCompletedStoryProps,
} from '../TypeAliases/TCompletedStoryProps';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/InProgressStory.less';

export const strings = {
  CHILD_INVALID:
    'One of the children passed to the Story component was not a string, ' +
    'number, or an instance of the Question component.',
};

export class CompletedStory extends React.PureComponent<TCompletedStoryProps> {
  render() {
    return (
      <div className={`CompletedStory ${(styles || {}).CompletedStory}`}>
        Story.

        {React.Children.map(this.props.children, (child) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return child;
          } else if (child.type !== Question) {
            throw new Error(strings.CHILD_INVALID);
          }

          return child;
        })}

        <button className={`InProgressStoryComplete ${(styles || {}).InProgressStoryComplete}`}>
          Complete Story
        </button>
      </div>
    )
  }
}