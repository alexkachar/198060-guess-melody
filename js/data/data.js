export const gameState = Object.freeze({
  level: 0,
  notes: 3,
  time: 300,
  points: 0
});

export const game = {
  title: `Угадай мелодию`,
  rules: [`За 5 минут нужно ответить на все вопросы.`, `Можно допустить 3 ошибки.`]
};

export const levels = {
  '1': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    type: `artist`,
    answers: [
      {
        img: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`,
        correct: true
      },
      {
        img: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: false
      },
      {
        img: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: false
      }
    ]
  },
  '2': {
    type: `artist`,
    audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers: [
      {
        img: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: false
      },
      {
        img: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`,
        correct: true
      },
      {
        img: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        artist: `Quincas Moreira`,
        correct: false
      }
    ]
  },
  '3': {
    type: `artist`,
    audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    answers: [
      {
        img: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: true
      },
      {
        img: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: false
      },
      {
        img: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`,
        correct: false
      }
    ]
  },
  '4': {
    type: `artist`,
    audio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    answers: [
      {
        img: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`,
        correct: false
      },
      {
        img: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: false
      },
      {
        img: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: true
      }
    ]
  },
  '5': {
    type: `artist`,
    audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    answers: [
      {
        img: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        artist: `Quincas Moreira`,
        correct: false
      },
      {
        img: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`,
        correct: true
      },
      {
        img: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`,
        correct: false
      }
    ]
  },
  '6': {
    type: `genre`,
    genre: `pop`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `pop`,
        correct: true,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `pop`,
        correct: true,
        autoplay: false
      },
    ]
  },
  '7': {
    type: `genre`,
    genre: `Jazz`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        correct: true,
        autoplay: false
      },
      {
        audio: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        genre: `Electronic`,
        correct: false,
        autoplay: false
      }
    ]
  },
  '8': {
    genre: `rock`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: true,
        autoplay: false
      },
    ]
  },
  '9': {
    genre: `Country`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: true,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
        genre: `Electronic`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `pop`,
        correct: false,
        autoplay: false
      }
    ]
  },
  '10': {
    genre: `Jazz`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `pop`,
        correct: false,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `pop`,
        correct: false,
        autoplay: false
      },
      {
        audio: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        genre: `Electronic`,
        correct: true,
        autoplay: false
      },
      {
        audio: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
        genre: `Electronic`,
        correct: true,
        autoplay: false
      }
    ]
  }
};
//
// const QUEST = {
//   'level-0': {
//     text: `Вас зовут Луиджи Марио, вы водопроводчик, но сейчас перед вами стоит очень важная миссия — спасти принцессу
//     Грибного Королевства Тоадстул Пич. Её похитил злой повелитель черепах Боузер и вы отправились в Грибное Королевство,
//     чтобы победить Боузера и освободить принцессу. Вы отправляетесь в первый замок, но, чтобы в него попасть нужно
//     преодолеть несколько препятствий. Вы стоите посреди на одной из равнин Грибного Королевства и видите как на вас
//     стремительно несется хмурый гриб вашего роста. Нужно срочно что-то предпринять`,
//     answers: [
//       {
//         action: `left`,
//         title: `Вы побежите влево, от гриба`,
//         go() {
//         }
//       },
//       {
//         action: `right`,
//         title: `Вы побежите вправо, прямо на гриб`,
//         go() {
//         }
//       },
//       {
//         action: `jump`,
//         title: `Вы прыгнете вверх`,
//         go() {
//           return 1;
//         }
//       }
//     ]
//   }
// };