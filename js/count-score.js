const MIN_ANSWERS_COUNT = 10;
const ANSWER_COUNT = 100;
const ANSWER_COUNT_CORRECTION = 50;
const QUICK_ANSWER_MAX_TIME = 10;
const LONG_ANSWER_MIN_TIME = 20;

export default function countScore(answersArr, livesCount) {
  if (!answersArr || !Array.isArray(answersArr)) {
    throw new Error(`Answers should be an array`);
  } else if (typeof livesCount !== `number`) {
    throw new Error(`Lives should be a number`);
  } else if (livesCount < 0) {
    throw new Error(`Lives should not be a negative number`);
  }

  if (answersArr.length < MIN_ANSWERS_COUNT || livesCount === 0) {
    return -1;
  }

  let score = 0;

  answersArr.forEach((answer) => {
    if (answer.isRight) {
      score += ANSWER_COUNT;

      if (answer.time < QUICK_ANSWER_MAX_TIME) {
        score += ANSWER_COUNT_CORRECTION;
      } else if (answer.time > LONG_ANSWER_MIN_TIME) {
        score -= ANSWER_COUNT_CORRECTION;
      }
    }
  });

  if (answersArr.length >= MIN_ANSWERS_COUNT) {
    for (let i = 0; i < livesCount; i++) {
      score += ANSWER_COUNT_CORRECTION;
    }
  }

  return score;
}
