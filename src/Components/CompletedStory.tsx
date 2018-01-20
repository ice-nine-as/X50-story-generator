import {
  TCompletedStoryProps,
} from '../TypeAliases/TCompletedStoryProps';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/CompletedStory.less';

export class CompletedStory extends React.PureComponent<TCompletedStoryProps> {
  render() {
    return (
      <div className={`CompletedStory ${(styles || {}).CompletedStory}`}>
        CompletedStory.
      </div>
    );
  }
}

export default CompletedStory;