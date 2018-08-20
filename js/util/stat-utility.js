import {
  GAME_SETTING,
  ANSWER,
  ANSWER_SCORE
} from '../util/config';

export function countFinalScore(answers, lives) {
  if (answers.length < GAME_SETTING.AMOUNT_GAME_LEVELS) {
    return GAME_SETTING.FAIL;
  } else {
    const finallyScores = answers.reduce((sum, answer) => {
      switch (answer) {
        case ANSWER.CORRECT:
          return sum + ANSWER_SCORE.CORRECT;
        case ANSWER.FAST:
          return sum + ANSWER_SCORE.CORRECT + ANSWER_SCORE.FAST;
        case ANSWER.SLOW:
          return sum + ANSWER_SCORE.CORRECT + ANSWER_SCORE.SLOW;
      }

      return sum;
    }, 0);
    return finallyScores + lives * ANSWER_SCORE.LIVE;
  }
}
