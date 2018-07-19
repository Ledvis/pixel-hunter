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

const gameData = [
  {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    type: `single`,
    answers: [{
      image: imagesURL.paintings[1],
      type: `paint`
    }]
  },
  {
    question: `Угадай, фото или рисунок?`,
    type: `double`,
    answers: [{
      image: imagesURL.photos[0],
      type: `photo`
    },
    {
      image: imagesURL.paintings[0],
      type: `paint`
    }
    ]
  },
  {
    question: `Найдите рисунок среди изображений`,
    type: `triple`,
    answers: [{
      image: imagesURL.photos[1],
      type: `photo`
    },
    {
      image: imagesURL.paintings[2],
      type: `paint`
    },
    {
      image: imagesURL.photos[2],
      type: `photo`
    }
    ]
  }
];

function getRandomRange(from, to) {
  return Math.floor((Math.random() * to) + from);
}

const LEVELS_COUNT = 3;

export function generateGameData() {
  const data = [];

  for (let i = 0; i < LEVELS_COUNT; i++) {
    data.push(gameData[getRandomRange(0, 3)]);
  }

  return data;
}

export const INITIAL_GAME_STATE = {
  livesCount: 3,
  time: 50,
  isWin: false,
  isOver: false,
  answers: []
};
