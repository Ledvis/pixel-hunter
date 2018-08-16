export const GAME_SETTING = {
  FAIL: -1,
  GAME_LEVELS_AMOUNT: 3,
  MAX_LIVES_AMOUNT: 3
};

export const InitialGameState = Object.freeze({
  level: 0,
  lives: 3,
  time: 30,
  stats: []
});

export const TIME = {
  FOR_ANSWER: 30,
  FAST_ANSWER_MAX: 10,
  SLOW_ANSWER_MIN: 20,
  LAST_SECONDS: 5
};

export const ANSWER = {
  RIGHT: 1,
  FAST: 2,
  SLOW: 3,
  WRONG: 0
};

export const PROJECT_ID = 843130;
