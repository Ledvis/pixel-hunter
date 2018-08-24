import {
  GAME_SETTING,
  ANSWER_TYPE,
  ANSWER_SCORE
} from '../util/config';

export function countFinalScore(answers, lives) {
  if (answers.length < GAME_SETTING.AMOUNT_GAME_LEVELS) {
    return GAME_SETTING.FAIL;
  } else {
    const finallyScores = answers.reduce((sum, answer) => {
      switch (answer) {
        case ANSWER_TYPE.CORRECT:
          return sum + ANSWER_SCORE.CORRECT;
        case ANSWER_TYPE.FAST:
          return sum + ANSWER_SCORE.CORRECT + ANSWER_SCORE.FAST;
        case ANSWER_TYPE.SLOW:
          return sum + ANSWER_SCORE.CORRECT + ANSWER_SCORE.SLOW;
      }

      return sum;
    }, 0);
    return finallyScores + lives * ANSWER_SCORE.LIVE;
  }
}
