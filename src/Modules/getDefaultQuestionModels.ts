import {
  QuestionStates,
} from '../Enums/QuestionStates';
import {
  IAnswerModel,
} from '../Interfaces/IAnswerModel';
import {
  IQuestionModel,
} from '../Interfaces/IQuestionModel';
import {
  QuestionTypes,
} from '../Enums/QuestionTypes';

const answerFactory =
  (id: number,
    type: QuestionTypes = QuestionTypes.Normal,
    state: QuestionStates = QuestionStates.Answerable,
    author = 'Ice 9',
    text: string = ''): IAnswerModel =>
  {
    const _text = (() => {
      if (text.length === 0) {
        if (state === QuestionStates.PreAnswered) {
          return 'PREANSWERED: ' + Math.random().toString(36).split('').join('.');
        } else if (state === QuestionStates.Censored) {
          return Math.random().toString(36).split('').join('.');
        }        
      }

      return text;
    })();

    const model = {
      author,
      id,
      state,
      type,
      text: _text,
    };

    if (type === QuestionTypes.Select) {
      (model as any).selections = [ 'Yes', 'No', 'Sort of', ];      
    }

    return model;
  }

export const getDefaultQuestionModels = (): ReadonlyArray<IQuestionModel> => {
  let answerId = -1;

  const questionModels = [
    {
      text: 'Who is X?',
      type: QuestionTypes.Big,
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
      type: QuestionTypes.Select,
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

  return Object.freeze(questionModels.map<IQuestionModel>((model: Partial<IQuestionModel>): IQuestionModel => {
    const state = ((): QuestionStates => {
      const keys = Object.keys(QuestionStates);
      /* Skip Unset, the last element. */
      const rand = Math.floor(Math.random() * (keys.length - 1));
      return (QuestionStates as any)[keys[rand]];
    })();

    const fullModel = Object.assign({}, model, {
      author: 'Ice 9',
      state,
    });

    if (fullModel.multiple) {
      fullModel.answer = [];
      for (let ii = 0; ii < fullModel.multiple; ii += 1) {
        fullModel.answer.push(answerFactory(answerId += 1, fullModel.type, state));
      }
    } else {
      fullModel.answer = answerFactory(answerId += 1, fullModel.type, state);
    }

    return Object.freeze(fullModel as IQuestionModel);
  }));
}

export default getDefaultQuestionModels;