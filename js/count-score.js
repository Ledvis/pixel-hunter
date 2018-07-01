const MIN_ANSWERS_COUNT = 10;
const QUICK_ANSWER_MAX_TIME = 10; // sec
const LONG_ANSWER_MIN_TIME = 20; // sec
const ANSWER_SCORE_COUNT = 100;
const ANSWER_SCORE_CORRECTION = 50;

export default function countScore(answersArr, livesNumber) {
  if (!answersArr || !Array.isArray(answersArr)) {
    throw new Error(`Answers should be an array`);
  } else if (typeof livesNumber !== `number`) {
    throw new Error(`Lives should be a number`);
  } else if (livesNumber < 0) {
    throw new Error(`Lives should not be a negative number`);
  }

  let scoreCount = 0;

  if (answersArr.length < MIN_ANSWERS_COUNT || livesNumber === 0) {
    return -1;
  }

  answersArr.forEach((answer) => {
    if (answer.isRight) {
      scoreCount += ANSWER_SCORE_COUNT;

      if (answer.time < QUICK_ANSWER_MAX_TIME) {
        scoreCount += ANSWER_SCORE_CORRECTION;
      } else if (answer.time > LONG_ANSWER_MIN_TIME) {
        scoreCount -= ANSWER_SCORE_CORRECTION;
      }
    }
  });

  if (answersArr.length >= MIN_ANSWERS_COUNT) {
    for (let i = 0; i < livesNumber; i++) {
      scoreCount += ANSWER_SCORE_CORRECTION;
    }
  }

  return scoreCount;
}