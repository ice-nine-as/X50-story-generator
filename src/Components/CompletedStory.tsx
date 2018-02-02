import {
  TCompletedStoryProps,
} from '../TypeAliases/TCompletedStoryProps';
import {
  TSubstitutionMap,
} from '../TypeAliases/TSubstitutionMap';

import * as React from 'react';

// @ts-ignore
import styles from '../Styles/Components/CompletedStory.less';

export class CompletedStory extends React.PureComponent<TCompletedStoryProps> {
  render() {
    const substitutionMap: TSubstitutionMap = this.props.models.reduce((map, model) => {
      if (Array.isArray(model.answer)) {
        model.answer.forEach((answer) => {
          map[`{{${answer.id}}}`] = answer.text;
        });
      } else {
        map[`{{${model.answer.id}}}`] = model.answer.text;
      }
      return map;
    }, {} as TSubstitutionMap);

    const storyText = this.props.proseTemplate.complete(substitutionMap);

    return (
      <div className={`CompletedStory ${(styles || {}).CompletedStory}`}>
        <div>CompletedStory.</div>
        
        <textarea
          className={`CompletedStoryTextArea ${(styles || {}).CompletedStoryTextArea}`}
          defaultValue={storyText} />

        <button className={`CompletedStorySubmitButton ${(styles || {}).CompletedStoryTextArea}`}>
          Submit My Story
        </button>
      </div>
    );
  }
}

export default CompletedStory;