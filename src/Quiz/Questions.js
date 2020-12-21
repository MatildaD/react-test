const GENERAL = "GENERAL";
const QUOTES = "QUOTES";
const NAMES_PLACES = "NAMES_PLACES";

export { GENERAL, QUOTES, NAMES_PLACES };

export default function getQuestions(set) {
  switch (set) {
    case GENERAL:
      return {
        "general-q1": {
          id: "general-q1",
          question: "What is the airspeed velocity of an unlaiden swallow?",
          answers: [
            { id: "a", answer: "5 m/s", isCorrect: false },
            { id: "b", answer: "10 m/s", isCorrect: false },
            { id: "c", answer: "15 m/s", isCorrect: false },
            { id: "d", answer: "More information required", isCorrect: true }
          ]
        },
        "general-q2": {
          id: "general-q2",
          question: "Who the eff is Hank?",
          answers: [
            {
              id: "a",
              answer: "A small island in the Pacific Ocean",
              isCorrect: true
            },
            {
              id: "b",
              answer:
                "A spherical mass of ice and rock, visible from Earth only with a telescope",
              isCorrect: true
            },
            {
              id: "c",
              answer:
                "An optical disc originally created to store sound recordings",
              isCorrect: true
            },
            {
              id: "d",
              answer:
                "A small coral atoll 703 nautical miles south of the equator",
              isCorrect: true
            }
          ]
        },
        "general-q3": {
          id: "general-q3",
          question: "Which is the biggest ocean in the world?",
          answers: [
            { id: "a", answer: "Bering Sea", isCorrect: false },
            { id: "b", answer: "The Atlantic Ocean", isCorrect: false },
            { id: "c", answer: "The Pacific Ocean", isCorrect: true },
            { id: "d", answer: "The Arctic Ocean", isCorrect: false }
          ]
        },
        "general-q4": {
          id: "general-q4",
          question: "Who was the first man on the moon?",
          answers: [
            { id: "a", answer: "Louis Armstrong", isCorrect: false },
            { id: "b", answer: "Michael Collins", isCorrect: false },
            { id: "c", answer: "Buzz Aldrin", isCorrect: false },
            { id: "d", answer: "Neil Armstrong", isCorrect: true }
          ]
        },
        "general-q5": {
          id: "general-q5",
          question: 'Which group first released the song "It\'s raining men"?',
          answers: [
            { id: "a", answer: "Weather Girls", isCorrect: true },
            { id: "b", answer: "The Supremes", isCorrect: false },
            { id: "c", answer: "The Three Degrees", isCorrect: false },
            { id: "d", answer: "Destiny's Child", isCorrect: false }
          ]
        }
      };
    case QUOTES:
      return {
        "quotes-q1": {
          id: "quotes-q1",
          question: "Who said/wrote \"A stupid person's idea of a clever person\"?",
          answers: [
            { id: "a", answer: "Stephen Fry", isCorrect: false },
            { id: "b", answer: "Julie Burchill", isCorrect: false },
            { id: "c", answer: "Aldous Huxley", isCorrect: false },
            { id: "d", answer: "Elizabeth Bowen", isCorrect: true }
          ]
        },
        "quotes-q2": {
          id: "quotes-q2",
          question: "Who said/wrote \"Be yourself; everyone else is already taken\"?",
          answers: [
            { id: "a", answer: "Frank Zappa ", isCorrect: false },
            { id: "b", answer: "Oscar Wilde", isCorrect: true },
            { id: "c", answer: "Marcus Tullius Cicero", isCorrect: false },
            { id: "d", answer: "Mae West", isCorrect: false }
          ]
        },
        "quotes-q3": {
          id: "quotes-q3",
          question: "Who said/wrote \"Don't cry because it's over, smile because it happened\"?",
          answers: [
            { id: "a", answer: " Marilyn Monroe", isCorrect: false },
            { id: "b", answer: "Mahatma Gandhi", isCorrect: false },
            { id: "c", answer: "J.K. Rowling", isCorrect: false },
            { id: "d", answer: "Dr. Seuss", isCorrect: true }
          ]
        },
      };
    case NAMES_PLACES:
      return {
        "names_places-q1": {
          id: "names_places-q1",
          question: "In what country is Chernobyl located (today)?",
          answers: [
            { id: "a", answer: "Ukraine", isCorrect: true },
            { id: "b", answer: "Russia", isCorrect: false },
            { id: "c", answer: "Belarus", isCorrect: false },
            { id: "d", answer: "Poland", isCorrect: false }
          ]
        },
        "names_places-q2": {
          id: "names_places-q2",
          question: "What is the capital of Australia?",
          answers: [
            { id: "a", answer: "Perth", isCorrect: false },
            { id: "b", answer: "Melbourne", isCorrect: false },
            { id: "c", answer: "Sydney", isCorrect: false },
            { id: "d", answer: "Canberra", isCorrect: true }
          ]
        },
        "names_places-q3": {
          id: "names_places-q3",
          question: "On what continent is the island of Tuvalu located?",
          answers: [
            { id: "a", answer: "Europe", isCorrect: false },
            { id: "b", answer: "Asia", isCorrect: false },
            { id: "c", answer: "Oceania", isCorrect: true },
            { id: "d", answer: "Antarctica", isCorrect: false }
          ]
        },
      };

    default:
      return {};
  }
}
