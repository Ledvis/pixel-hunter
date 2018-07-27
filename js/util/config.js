const InitialState = {
  lives: 3,
  time: 30,
  level: 0,
  name: ``,
  gameResult: ``,
  statistic: [],
  allStatistic: []
};

const StepValue = {
  TIME: 1,
  LIVE: 1,
  LEVEL: 1
};

const Result = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

const GameSettings = {
  FAST_ANSWER: 10,
  SLOW_ANSWER: 20,
  LITTLE_TIME: 5,
  TOTAL_SCREEN_QUANTITY: 10
};

const GameType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`,
  GREETINGS: `greetings`,
  RULES: `rules`,
  FINISH: `finish`,
  RESTART: `restart`
};

const BackendSettings = {
  GET_QUESTIONS_URL: `https://es.dump.academy/pixel-hunter/questions`,
  UPLOAD_STATISTIC_URL: `https://es.dump.academy/pixel-hunter/stats/`,
  APP_ID: 186764
};

export {
  InitialState,
  StepValue,
  Result,
  GameSettings,
  GameType,
  BackendSettings
};
