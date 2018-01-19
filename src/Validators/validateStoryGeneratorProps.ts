import {
  StoryStates,
} from '../Enums/StoryStates';

export const strings = {
  PROPS_INVALID:
    'The props argument passed to validateStoryGeneratorProps was not an ' +
    'object.',

  ANSWERABLE_PERCENTAGE_INVALID:
    'The answerablePercentage property passed to ' +
    'validateStoryGeneratorProps was not a number greater than 0 and less ' +
    'than or equal to 1.',

  CENSORED_PERCENTAGE_INVALID:
    'The censoredPercentage property passed to validateStoryGeneratorProps ' +
    'was not a number greater than or equal to 0 and less than 1.',

  MAX_ANSWER_LENGTH_INVALID:
    'The maxAnswerLength property passed to validateStoryGeneratorProps was ' +
    'not an integer greater than 0.',

  QUESTIONS_INVALID:
    'The questions property passed to validateStoryGeneratorProps was not ' +
    'an array.',

  QUESTIONS_EMPTY:
    'The questions property passed to validateStoryGeneratorProps was empty.',

  SHUFFLE_INVALID:
    'The shuffle property passed to validateStoryGeneratorProps was not a ' +
    'boolean.',

  STATE_INVALID:
    'The state property passed to validateStoryGeneratorProps was not a ' +
    'member of the StoryStates enum.',
};

export const validateStoryGeneratorProps = (props: any) => {
  if (typeof props !== 'object' || !props) {
    throw new Error(strings.PROPS_INVALID);
  } else if (typeof props.answerablePercentage !== 'number' ||
    Number.isNaN(props.answerablePercentage) ||
    props.answerablePercentage <= 0 ||
    props.answerablePercentage > 1)
  {
    throw new Error(strings.ANSWERABLE_PERCENTAGE_INVALID);
  } else if (typeof props.censoredPercentage !== 'number' ||
    Number.isNaN(props.censoredPercentage) ||
    props.censoredPercentage < 0 ||
    props.censoredPercentage >= 1)
  {
    throw new Error(strings.CENSORED_PERCENTAGE_INVALID);
  } else if (typeof props.maxAnswerLength !== 'number' ||
    Number.isNaN(props.maxAnswerLength) ||
    !Number.isSafeInteger(props.maxAnswerLength) ||
    props.maxAnswerLength <= 0)
  {
    throw new Error(strings.MAX_ANSWER_LENGTH_INVALID);
  } else if (!Array.isArray(props.questions)) {
    throw new Error(strings.QUESTIONS_INVALID);
  } else if (props.questions.length === 0) {
    throw new Error(strings.QUESTIONS_EMPTY);
  } else if ('shuffle' in props && typeof props.shuffle !== 'boolean') {
    throw new Error(strings.SHUFFLE_INVALID);
  } else if (!Object.values(StoryStates).includes(props.state)) {
    throw new Error(strings.STATE_INVALID);
  }

  return true;
};