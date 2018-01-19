import {
  CompletedStory,
} from './CompletedStory';
import {
  Question,
} from './Question';
import {
  InProgressStory,
} from './InProgressStory';
import {
  StoryStates,
} from '../Enums/StoryStates';
import {
  TStoryGeneratorProps,
} from '../TypeAliases/TStoryGeneratorProps';
import {
  validateStoryGeneratorProps,
} from '../Validators/validateStoryGeneratorProps';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/StoryGenerator.less';

const shuffleArray = require('shuffle-array');

export class StoryGenerator extends React.PureComponent<TStoryGeneratorProps> {
  render() {
    let key = -1;

    /* Throws if invalid. */
    validateStoryGeneratorProps(this.props);

    const models = this.props.questions.map((model) => {
      return <Question model={model} key={key += 1} />;
    });

    return (
      <div className={`StoryGenerator ${(styles || {}).StoryGenerator}`}>
        StoryGenerator.

        {this.props.state === StoryStates.Complete ?
          <CompletedStory /> :
          <InProgressStory>
            {this.props.shuffle ?
              shuffleArray(models) :
              models}
          </InProgressStory>}
      </div>
    );
  }
}

export default StoryGenerator;