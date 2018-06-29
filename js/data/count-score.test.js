import {
  assert
} from 'chai';
import countScore from '../count-score';

const testAnswersArr = [
  [{
    isRight: true,
    time: 10
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
    isRight: false,
    time: 1
  },
  {
    isRight: false,
    time: 2
  },
  {
    isRight: false,
    time: 3
  },
  {
    isRight: false,
    time: 4
  },
  {
    isRight: false,
    time: 5
  },
  {
    isRight: false,
    time: 6
  },
  {
    isRight: false,
    time: 7
  },
  {
    isRight: false,
    time: 8
  },
  {
    isRight: false,
    time: 9
  },
  {
    isRight: false,
    time: 1
  }
  ],
  [{
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  }
  ],
  [{
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 15
  }
  ],
  [{
    isRight: true,
    time: 25
  },
  {
    isRight: true,
    time: 25
  },
  {
    isRight: true,
    time: 25
  },
  {
    isRight: true,
    time: 15
  },
  {
    isRight: true,
    time: 15
  },
  {
    isRight: true,
    time: 15
  },
  {
    isRight: true,
    time: 15
  },
  {
    isRight: true,
    time: 15
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  }
  ],
  [{
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: false,
    time: 25
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 15
  },
  {
    isRight: false,
    time: 5
  },
  {
    isRight: false,
    time: 5
  }
  ],
  [{
    isRight: true,
    time: 1
  },
  {
    isRight: true,
    time: 2
  },
  {
    isRight: true,
    time: 9
  },
  {
    isRight: true,
    time: 5
  },
  {
    isRight: false,
    time: 1
  },
  {
    isRight: true,
    time: 20
  },
  {
    isRight: true,
    time: 1000
  },
  {
    isRight: true,
    time: 15
  },
  {
    isRight: true,
    time: 11
  },
  {
    isRight: true,
    time: 19
  }
  ]
];

describe(`Game score count`, function() {
  it(`should return -1 when answers count is less than 10; time all normal; lives number 3`, function() {
    assert.equal(countScore(testAnswersArr[0], 3), -1);
  });
  it(`should return -1 when all answers are correct; time all normal; lives number 0`, function() {
    assert.equal(countScore(testAnswersArr[1], 0), -1);
  });
  it(`should return 1150 when all answers are correct; time all normal; lives number 3`, function() {
    assert.equal(countScore(testAnswersArr[1], 3), 1150);
  });
  it(`should return 50 when all answers are wrong; time all fast; lives number 1`, function() {
    assert.equal(countScore(testAnswersArr[2], 1), 50);
  });
  it(`should return 50 when all answers are wrong; time all normal; lives number 1`, function() {
    assert.equal(countScore(testAnswersArr[3], 1), 50);
  });
  it(`should return 1500 when all answers are correct; time 9 fast, 1 normal; lives number 1`, function() {
    assert.equal(countScore(testAnswersArr[4], 1), 1500);
  });
  it(`should return 1050 when all answers are correct; time 3 slow, 5 normal, 2 fast; lives number 2`, function() {
    assert.equal(countScore(testAnswersArr[5], 2), 1050);
  });
  it(`should return 600 when 3 answers are correct, 7 answers are not correct; time 5 fast, 4 normal, 1 fast; lives number is 3`, function() {
    assert.equal(countScore(testAnswersArr[6], 3), 600);
  });
  it(`should return 1100 when 9 answers are correct, 1 answer is not correct; time 4 fast, 3 normal, 2 slow; lives number is 1`, () => {
    assert.equal(countScore(testAnswersArr[7], 1), 1100);
  });
});
