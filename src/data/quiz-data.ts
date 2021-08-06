import { Quiz } from "./quiz-types";
import SneakerImage from '../assets/Image/Sneaker.jpg';
import CryptoImage from '../assets/Image/what-is-crypto.jpg'

export const questions: Quiz[] = [
  {
    quizId: "dfjsak2",
    quizName: "How are you!",
    points: 5,
    questions: [
      {
        question: "How are you",
        options: [
          {
            text: "fine",
            isRight: true
          },
          {
            text: "thank you",
            isRight: false
          },
          {
            text: "thank you",
            isRight: false
          },
        ]
      },
      {
        question: "How Was your day?",
        options: [
          {
            text: "it was fine",
            isRight: true
          },
          {
            text: "it was bad",
            isRight: false
          }
        ]
      }
    ]
  },
  {
    quizId: "dfjsa22",
    quizName: "What ur name!",
    points: 5,
    questions: [
      {
        question: "is your name Vishal",
        options: [
          {
            text: "noe",
            isRight: false
          },
          {
            text: "yes",
            isRight: true
          }
        ]
      },
      {
        question: "do you have gf",
        options: [
          {
            text: "noe",
            isRight: true
          },
          {
            text: "yes",
            isRight: false
          }
        ]
      }
    ]
  },

  {
    quizId: "dfjsa224",
    quizName: "The blockchain quiz",
    quizImage: CryptoImage,
    points: 10,
    questions: [
      {
        question: "Who created Bitcoin?",
        options: [
          {
            text: "Satoshi Nakamoto",
            isRight: true
          },
          {
            text: "Eric Hughes",
            isRight: false
          },
          {
            text: "Vitalik Buterin",
            isRight: false
          },
          {
            text: "China",
            isRight: false
          }
        ]
      },
      {
        question: "What is a miner?",
        options: [
          {
            text: "A type of blockchain",
            isRight: false
          },
          {
            text: "An algorithm that predicts the next part of the chain",
            isRight: false
          },
          {
            text: "A person doing calculations to verify a transaction",
            isRight: false
          },
          {
            text: "Computers that validate and process blockchain transactions",
            isRight: true
          }
        ]
      },
      {
        question: "What is a blockchain?",
        options: [
          {
            text: "A distributed ledger on a peer to peer network",
            isRight: true
          },
          {
            text: "A type of cryptocurrency",
            isRight: false
          },
          {
            text: "An exchange",
            isRight: false
          },
          {
            text: "A centralized ledger",
            isRight: false
          }
        ]
      },
      {
        question: "What is a genesis block?",
        options: [
          {
            text: " The first block of a Blockchain",
            isRight: true
          },
          {
            text: "A famous block that hardcoded a hash of the Book of Genesis onto the blockchain",
            isRight: false
          },
          {
            text: "The first block after each block halving",
            isRight: false
          },
          {
            text: "The 2nd transaction of a Blockchain",
            isRight: false
          }
        ]
      },
      {
        question: "What is a dApp?",
        options: [
          {
            text: "A type of Cryptocurrency",
            isRight: false
          },
          {
            text: "A condiment",
            isRight: false
          },
          {
            text: "A type of blockchain",
            isRight: false
          },
          {
            text: "A decentralized application",
            isRight: true
          }
        ]
      },
    ]
  },
  {
    quizId: "dfjsa124",
    quizName: "The Sneaker head quiz",
    quizImage: SneakerImage,
    points: 10,
    questions: [
      {
        question: "Which famous rapper collaborated with Nike, and then Adidas, to create Yeezy?",
        options: [
          {
            text: "Jay-Z",
            isRight: false
          },
          {
            text: "Kanye West",
            isRight: true
          },
          {
            text: "Drake",
            isRight: false
          },
          {
            text: "Future",
            isRight: false
          }
        ]
      },
      {
        question: "How many shoes are in the Air Jordan collection?",
        options: [
          {
            text: "10",
            isRight: false
          },
          {
            text: "56",
            isRight: false
          },
          {
            text: "32",
            isRight: true
          },
          {
            text: "23",
            isRight: false
          }
        ]
      },
      {
        question: "Which of these artists has also collaborated with Adidas?",
        options: [
          {
            text: "Pharrell Williams",
            isRight: true
          },
          {
            text: "Eminem",
            isRight: false
          },
          {
            text: "Kendrick Lamar",
            isRight: false
          },
          {
            text: "Rihanna",
            isRight: false
          }
        ]
      },
      {
        question: "Which one of these is NOT a sneaker store?",
        options: [
          {
            text: "Kith",
            isRight: false
          },
          {
            text: "Complex",
            isRight: true
          },
          {
            text: "Bodega",
            isRight: false
          },
          {
            text: "Stadium Goods",
            isRight: false
          }
        ]
      },
      {
        question: "Which rap group was responsible for putting the Adidas Superstars on the map?",
        options: [
          {
            text: "Wu-Tang Clan",
            isRight: false
          },
          {
            text: "Run-D.M.C.",
            isRight: true
          },
          {
            text: "N.W.A.",
            isRight: false
          },
          {
            text: "Bell BivDevoe",
            isRight: false
          }
        ]
      },
    ]
  },
];

// export { questions };
