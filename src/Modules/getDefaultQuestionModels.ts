import {
  QuestionStates,
} from '../Enums/QuestionStates';
import {
  TAnswerModel,
} from '../TypeAliases/TAnswerModel';
import {
  TQuestionModel,
} from '../TypeAliases/TQuestionModel';

let id = -1;
const answerFactory = (author = 'Ice 9', text: string = Math.random().toString(36)): TAnswerModel => {
  return {
    author,
    id: id += 1,
    text,
  };
};

export const getDefaultQuestionModels = (): ReadonlyArray<TQuestionModel> => {
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

  return Object.freeze(questionModels.map<TQuestionModel>((model: Partial<TQuestionModel>): TQuestionModel => {
    const fullModel = Object.assign({}, model, {
      author: 'Ice 9',
      state:  QuestionStates.Unset,
    });

    if (fullModel.multiple) {
      fullModel.answer = [];
      for (let ii = 0; ii < fullModel.multiple; ii += 1) {
        fullModel.answer.push(answerFactory());
        fullModel.answer[ii].big = fullModel.big;
      }
    } else {
      fullModel.answer = answerFactory();
      fullModel.answer.big = fullModel.big;
    }

    return Object.freeze(fullModel as TQuestionModel);
  }));
}

export default getDefaultQuestionModels;