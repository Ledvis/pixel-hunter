import {
  assert
} from 'chai';
import createTimer from '../timer';

describe(`Timer function`, function() {
  it(`should return an object with tick() method`, function() {
    const timer = createTimer(5);
    assert.equal(typeof timer.tick, `function`);
  });
  it(`should return true if timer is still on`, function() {
    const timer = createTimer(5);

    for (let i = 0; i < 3; i++) {
      timer.tick();
    }

    assert.isTrue(timer.tick());
  });
  it(`should return false if timer is off`, function() {
    const timer = createTimer(1);
    assert.isFalse(timer.tick());
  });
  it(`should return an Object`, function() {
    assert.isObject(createTimer(5));
  });
  it(`should throw error if argument is not a number`, function() {
    assert.throw(function() {
      createTimer(`5`);
    });
    assert.throw(function() {
      createTimer(``);
    });
    assert.throw(function() {
      createTimer([]);
    });
    assert.throw(function() {
      createTimer({});
    });
    assert.throw(function() {
      createTimer(null);
    });
    assert.throw(function() {
      createTimer(undefined);
    });
  });
});
