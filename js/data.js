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
  '1': {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    type: `single`,
    answers: [{
      image: imagesURL.paintings[0],
      type: `painting`
    }]
  },
  '2': {
    question: `Угадай, фото или рисунок?`,
    type: `double`,
    answers: [{
      type: `photo`,
      url: imagesURL.photos[0]
    },
    {
      type: `painting`,
      url: imagesURL.paintings[1]
    }
    ]
  },
  '3': {
    question: `Найдите рисунок среди изображений`,
    type: `triple`,
    answers: [{
      type: `photo`,
      url: imagesURL.photos[1]
    },
    {
      type: `painting`,
      url: imagesURL.paintings[2]
    },
    {
      type: `photo`,
      url: imagesURL.photos[2]
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
