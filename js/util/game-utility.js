export function optimizeProportion(frame, imgDimensions) {
  let imgWidth = 0;
  let imgHeight = 0;
  let proportion = 1;

  if (imgDimensions.width > imgDimensions.height) {
    imgWidth = frame.width;
    proportion = frame.width / imgDimensions.width;
    imgHeight = imgDimensions.height * proportion;
  } else {
    imgHeight = frame.height;
    proportion = frame.height / imgDimensions.height;
    imgWidth = imgDimensions.width * proportion;
  }

  if (imgHeight > frame.height) {
    proportion = frame.height / imgHeight;
    imgHeight = frame.height;
    imgWidth = imgWidth * proportion;
  } else if (imgWidth > frame.width) {
    proportion = frame.width / imgWidth;
    imgWidth = frame.width;
    imgHeight = imgHeight * proportion;
  }
  return {
    width: imgWidth,
    height: imgHeight
  };
}

export function resizeImages(element) {
  const images = element.querySelectorAll(`img`);

  images.forEach((img) => {
    img.onload = () => {
      const frameSize = {
        width: img.parentElement.clientWidth,
        height: img.parentElement.clientHeight
      };
      const imgSize = {
        width: img.naturalWidth,
        height: img.naturalHeight
      };
      const resizePicture = optimizeProportion(frameSize, imgSize);
      img.width = resizePicture.width;
      img.height = resizePicture.height;
    };
  });
}

function copyObject(object) {
  const newObject = Object.assign({}, object);

  for (const key in newObject) {
    if (newObject[key] instanceof Array) {
      newObject[key] = newObject[key].slice();
    }
  }

  return newObject;
}

export function tick(game) {
  const gameStat = copyObject(game);
  gameStat.time = gameStat.time - 1;
  return gameStat;
}

export function nextLevel(gameData) {
  const game = copyObject(gameData);
  game.level++;
  return game;
}

export function subtractLive(gameData) {
  const game = copyObject(gameData);
  game.lives--;
  return game;
}
