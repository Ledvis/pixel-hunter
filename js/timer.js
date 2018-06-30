export default function createTimer(initialTime) {
  if (typeof initialTime !== `number`) {
    throw new Error(`Time should be a number!`);
  }

  let time = initialTime;

  return {
    tick() {
      if (time > 0) {
        time--;
      }

      return time > 0;
    }
  };
}
