import {
  QuestionStates,
} from '../Enums/QuestionStates';
import {
  TQuestionModel,
} from '../TypeAliases/TQuestionModel';

export const getDefaultQuestionModels = (): Array<TQuestionModel> => {
  const questionModels = [
    {
      big: true,
      text: 'Who is X?',
    },

    {
      text: 'Where does X live?',
    },

    {
      text: 'What year is it?',
    },

    {
      text: 'What is X\'s housing situation?',
    },

    {
      text: 'What kind of work does X do?',
    },

    {
      multiple: 3,
      text: 'What are three words that describe X?',
    },

    {
      text: 'Is X in a relationship?',
    },

    {
      text: 'How does X feel about her relationship status?',
    },

    {
      text: 'How does X feel about working for her employer?',
    },

    {
      text: 'How much does X earn?',
    },

    {
      text: 'How much does X spend on food and housing?',
    },

    {
      text: 'Does X have brothers or sisters?',
    },

    {
      text: 'Where do X\'s parents live?',
    },

    {
      text: 'How does X usually travel to see her parents?',
    },

    {
      text: 'How often does X go to visit her parents?',
    },
  ];

  return questionModels.map<TQuestionModel>((model) => {
    return Object.assign({}, model, {
      answer: null,
      state:  QuestionStates.Unset,
    });
  });
}

export default getDefaultQuestionModels;