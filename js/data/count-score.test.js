import {
  assert
} from 'chai';
import countScore from '../count-score';

const testData = [
  [{
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }],
  [{
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }],
  [{
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: true,
    time: 15
  }, {
    isRight: false,
    time: 15
  }, {
    isRight: false,
    time: 15
  }, {
    isRight: false,
    time: 15
  }],
  [{
    isRight: true,
    time: 5
  }, {
    isRight: true,
    time: 5
  }, {
    isRight: true,
    time: 5
  }, {
    isRight: true,
    time: 5
  }, {
    isRight: true,
    time: 5
  }, {
    isRight: false,
    time: 5
  }, {
    isRight: false,
    time: 5
  }, {
    isRight: false,
    time: 5
  }, {
    isRight: false,
    time: 5
  }, {
    isRight: false,
    time: 5
  }],
];

describe(`Game score count`, function() {
  it(`should return -1 if all answers are right, count < 10; time = 15; lives = 3`, function() {
    assert.equal(countScore(testData[0], 3), -1);
  });
  it(`should return -1 if all answers are right, count = 10; time = 15; lives = 0`, function() {
    assert.equal(countScore(testData[1], 0), -1);
  });
  it(`should return 850 if answers are 7 right, 3 wrong, count = 10; time = 15; lives = 3`, function() {
    assert.equal(countScore(testData[2], 3), 850);
  });
  it(`should return 750 if answers are 5 right, 5 wrong, count = 10; time = 5; lives = 1`, function() {
    assert.equal(countScore(testData[2], 1), 750);
  });
  it(`should throw an Error if pass the invalid data`, function() {
    assert.throw(function() {
      countScore([]);
    });
    assert.throw(function() {
      countScore({});
    });
    assert.throw(function() {
      countScore(`5`);
    });
    assert.throw(function() {
      countScore(5);
    });
    assert.throw(function() {
      countScore(null);
    });
    assert.throw(function() {
      countScore(undefined);
    });
  });
});
