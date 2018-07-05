const imagesURL = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`,
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`,
  ]
};

const levelsType = {
  '0': {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    type: `single`,
    answers: [{
      image: imagesURL.paintings[1],
      type: `painting`
    }]
  },
  '1': {
    question: `Угадай, фото или рисунок?`,
    type: `double`,
    answers: [{
      image: imagesURL.photos[0],
      type: `photo`
    },
    {
      image: imagesURL.paintings[0],
      type: `painting`
    }
    ]
  },
  '2': {
    question: `Найдите рисунок среди изображений`,
    type: `triple`,
    answers: [{
      image: imagesURL.photos[1],
      type: `photo`
    },
    {
      image: imagesURL.paintings[2],
      type: `painting`
    },
    {
      image: imagesURL.photos[2],
      type: `photo`
    }
    ]
  }
};

const LEVELS_COUNT = 3;

export function generateLevelsData() {
  const data = [];

  for (let i = 0; i < LEVELS_COUNT; i++) {
    data.push(levelsType[i]);
  }

  return data;
}

export const gameState = {
  livesCount: 3,
  time: 50,
  isOver: false
};
