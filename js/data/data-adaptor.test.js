import {assert} from 'chai';
import {adaptServerData} from "./data-adaptor";

// Входной формат данных:

const serverData = [
  {
    "type": "genre",
    "question": "Выберите все песни в жанре R'n'B",
    "genre": "rnb",
    "answers": [
      {
        "src": "/path/to/file.mp3",
        "genre": "rnb"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "blues"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "rock"
      },
      {
        "src": "/path/to/file.mp3",
        "genre": "rnb"
      }
    ]
  },
  {
    "type": "artist",
    "question": "Кто исполняет эту песню?",
    "src": "path/to/file.mp3",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 300,
          "height": 300
        },
        "title": "Пелагея",
        "isCorrect": false
      },
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 300,
          "height": 300
        },
        "title": "Краснознамённая дивизия имени моей Бабушки",
        "isCorrect": false
      },
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 300,
          "height": 300
        },
        "title": "Кровосток",
        "isCorrect": true
      }
    ]
  }
]

// Выходной формат данных:

const localData = [
  {
    type: `genre`,
    question: `Выберите все песни в жанре R'n'B`,
    genre: `rnb`,
    answers: [
      {
        audio: `/path/to/file.mp3`,
        genre: `rnb`,
        correct: true,
        autoplay: true
      },
      {
        audio: `/path/to/file.mp3`,
        genre: `blues`,
        correct: false,
        autoplay: false
      },
      {
        audio: `/path/to/file.mp3`,
        genre: `rock`,
        correct: false,
        autoplay: false
      },
      {
        audio: `/path/to/file.mp3`,
        genre: `rnb`,
        correct: true,
        autoplay: false
      }
    ]
  }, {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    audio: `path/to/file.mp3`,
    answers: [
      {
        value: `1`,
        img: `http://placehold.it/705x455`,
        artist: `Пелагея`,
        correct: false
      },
      {
        value: `2`,
        img: `http://placehold.it/705x455`,
        artist: `Краснознамённая дивизия имени моей Бабушки`,
        correct: false
      },
      {
        value: `3`,
        img: `http://placehold.it/705x455`,
        artist: `Кровосток`,
        correct: true
      }
    ]
  }
];


describe(`Adapt server data`, () => {
  it(`adapted data is valid`, () => {
    assert.equal(adaptServerData(serverData), localData);
  });


});
