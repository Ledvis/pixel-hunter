import {
  assert
} from 'chai';
import createTimer from '../timer';

describe(`Timer function`, function() {
  it(`should return true when time has not gone`, function() {
    const timer = createTimer(3);
    timer.tick();
    assert.isTrue(timer.tick());
  });
  it(`should return false when time has gone`, function() {
    const timer = createTimer(3);
    timer.tick();
    timer.tick();
    assert.isFalse(timer.tick());
  });
  it(`should return an Object`, function() {
    assert.isObject(createTimer(4));
  });
  it(`should return an Object with method tick()`, function() {
    const timer = createTimer(3);
    assert.equal(typeof timer.tick, `function`);
  });
  it(`should throw an Error if an argument is not a number`, function() {
    assert.throw(function() {
      createTimer(`3`);
    });
    assert.throw(function() {
      createTimer(``);
    });
    assert.throw(function() {
      createTimer({
        time: 5
      });
    });
    assert.throw(function() {
      createTimer([5]);
    });
    assert.throw(function() {
      createTimer(null);
    });
    assert.throw(function() {
      createTimer(undefined);
    });
  });
});
