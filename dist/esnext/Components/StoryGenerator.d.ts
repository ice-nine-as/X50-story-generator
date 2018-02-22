/// <reference types="react" />
import { IStoryTemplate } from '../Interfaces/IStoryTemplate';
import { IQuestionModel } from '../Interfaces/IQuestionModel';
import { MapDispatchToPropsFactory } from 'react-redux';
import { StoryStates } from '../Enums/StoryStates';
import { TStoryGeneratorDispatchProps } from '../TypeAliases/TStoryGeneratorDispatchProps';
import { TStoryGeneratorOwnProps } from '../TypeAliases/TStoryGeneratorOwnProps';
import * as React from 'react';
export declare class StoryGenerator extends React.PureComponent<TStoryGeneratorDispatchProps & TStoryGeneratorOwnProps> {
    render(): JSX.Element;
}
export declare const mapStateToProps: ({storyGenerator: {maxAnswerLength, proseTemplate, questions, state}}: {
    storyGenerator: TStoryGeneratorOwnProps;
}) => {
    maxAnswerLength: number;
    proseTemplate: IStoryTemplate;
    questions: ReadonlyArray<IQuestionModel>;
    state: StoryStates;
};
export declare const mapDispatchToProps: MapDispatchToPropsFactory<TStoryGeneratorDispatchProps, TStoryGeneratorOwnProps>;
export declare const ConnectedStoryGenerator: React.ComponentClass<Pick<TStoryGeneratorDispatchProps & TStoryGeneratorOwnProps, "setAnswerText" | "setStoryState" | "setMaxAnswerLength" | "setQuestions" | "substitutionMap"> & TStoryGeneratorOwnProps> & {
    WrappedComponent: React.ComponentType<TStoryGeneratorDispatchProps & TStoryGeneratorOwnProps>;
};
export default ConnectedStoryGenerator;
