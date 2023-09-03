const questionBank = [
  {
    description: "What are all the words that contain A and E?",
    testFunction: function (returnArray) {
      if (returnArray.length === 0) {
        return false;
      }
      for (let i = 0; i < returnArray.length; i++) {
        if (
          !returnArray[i].includes("A" || "a") ||
          !returnArray[i].includes("E" || "e")
        ) {
          return false;
        }
      }
      return true;
    },
  },
  {
    description: "Find all the palindromes in the list!",

    testFunction: (returnArray) => {
      if (returnArray.length === 0) {
        return false;
      }
      for (let i = 0; i < returnArray.length; i++) {
        const reverseWord = returnArray[i].split("").reverse().join("");
        if (returnArray[i] !== reverseWord) {
          return false;
        }
      }
      return true;
    },
  },
  {
    description: "What words start with the letter 'F'?",

    testFunction: (returnArray) => {
      if (returnArray.length === 0) {
        return false;
      }
      for (let i = 0; i < returnArray.length; i++) {
        wordUpper = returnArray[i].toUpperCase();
        if (wordUpper[0] !== "F") {
          return false;
        }
      }
      return true;
    },
  },
];

export const miniWords = [
  "AARDWOLVES",
  "AARGH",
  "ANTENNIFEROUS",
  "BRR",
  "CUESTAS",
  "CUFF",
  "FIDDI",
  "funny",
  "FAIR",
  "FANTASTIC",
  "LUNISOLAR",
  "LUNITIDAL",
  "LUNK",
  "POLYPTYCHS",
  "POLYPUS",
  "POLYPUSES",
  "POLYRHYTHM",
  "POLYRHYTHMIC",
  "PROGRAM",
  "PROGRESS",
  "PROLIFIC",
  "RACECAR",
  "REST",
  "SUPERORDINARY",
  "tattarrattat",
  "TOKTOKKIE",
  "TOKTOKKIES",
  "TOLA",
  "TOLAN",
  "TSKTSK",
];

export default questionBank;
