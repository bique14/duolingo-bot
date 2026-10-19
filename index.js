const axios = require("axios");

const DUOLINGO_SECRET_JWT = process.env.DUOLINGO_SECRET_JWT;
const DUOLINGO_SECRET_COOKIE = process.env.DUOLINGO_SECRET_COOKIE;
const DUOLINGO_SECRET_USER_ID = process.env.DUOLINGO_SECRET_USER_ID;

const generateLessonPayload = () => {
  const nowInSeconds = Math.floor(Date.now() / 1000);

  const durationSeconds = Math.floor(Math.random() * (300 - 120 + 1)) + 120;

  const startTime = nowInSeconds - durationSeconds;
  const endTime = nowInSeconds;

  return {
    startTime: startTime,
    endTime: endTime,
  };
};

const createSession = async () => {
  const data = {
    challengeTypes: [
      "assist",
      "characterIntro",
      "characterMatch",
      "characterPuzzle",
      "characterSelect",
      "characterTrace",
      "characterWrite",
      "completeReverseTranslation",
      "definition",
      "dialogue",
      "extendedMatch",
      "extendedListenMatch",
      "form",
      "freeResponse",
      "gapFill",
      "judge",
      "listen",
      "listenComplete",
      "listenMatch",
      "match",
      "name",
      "listenComprehension",
      "listenIsolation",
      "listenSpeak",
      "listenTap",
      "mathChallengeBlob",
      "orderTapComplete",
      "partialListen",
      "partialReverseTranslate",
      "patternTapComplete",
      "radioBinary",
      "radioImageSelect",
      "radioListenMatch",
      "radioListenRecognize",
      "radioSelect",
      "readComprehension",
      "reverseAssist",
      "sameDifferent",
      "select",
      "selectPronunciation",
      "selectTranscription",
      "svgPuzzle",
      "syllableTap",
      "syllableListenTap",
      "speak",
      "tapCloze",
      "tapClozeTable",
      "tapComplete",
      "tapCompleteTable",
      "tapDescribe",
      "translate",
      "transliterate",
      "transliterationAssist",
      "typeCloze",
      "typeClozeTable",
      "typeComplete",
      "typeCompleteTable",
      "writeComprehension",
      "star",
      "normal",
      "fictional_board",
      "chessMatch",
      "chessPvpMatch",
      "chessMiniMatch",
      "mathProductSelect",
      "mathMatch",
      "mathMultiSelect",
      "mathPatternTable",
      "mathTypeFill",
      "mathIntegerNumberLineFill",
      "mathEstimateNumberLine",
      "mathExpressionBuild",
      "mathFactorTree",
      "mathFractionFill",
    ],
    fromLanguage: "en",
    isFinalLevel: false,
    isRedoingPassedNode: false,
    isV2: true,
    juicy: true,
    learningLanguage: "ru",
    shakeToReportEnabled: true,
    smartTipsVersion: 2,
    treeId: "2c4542b6077ddcbf61d1f47ea5f207a8",
    alphabetId: "cyrillic",
    alphabetSessionId: "cyrillic",
    alphabetsPathProgressKey: null,
    type: "ALPHABET_LESSON",
  };

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://www.duolingo.com/2023-05-23/sessions",
    headers: {
      accept: "application/json; charset=UTF-8",
      "accept-language":
        "en-GB,en;q=0.9,th;q=0.8,th-TH;q=0.7,ja-JP;q=0.6,ja;q=0.5,es-ES;q=0.4,es;q=0.3",
      authorization: `Bearer ${DUOLINGO_SECRET_JWT}`,
      "content-type": "application/json; charset=UTF-8",
      origin: "https://www.duolingo.com",
      priority: "u=1, i",
      referer: "https://www.duolingo.com/alphabets/ru/cyrillic",
      "x-amzn-trace-id": `User=${DUOLINGO_SECRET_USER_ID}`,
      Cookie: `jwt_token=${DUOLINGO_SECRET_JWT}; ${DUOLINGO_SECRET_COOKIE}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const result = await response.data;
    return result.id;
  } catch (error) {
    console.log(error);
  }
};

const farmingXp = async (sessionId) => {
  const { startTime, endTime } = generateLessonPayload();
  const data = {
    challenges: [
      {
        type: "characterSelect",
        challengeResponseTrackingProperties: {
          generation_timestamp: 1792364537866,
        },
        choices: [
          {
            character: "д",
            tts: "https://d1ugqg1wx6doua.cloudfront.net/audio/ru/bfa522c216b16589eec4e5d5cd5405ad",
          },
          {
            character: "т",
            tts: "https://d1ugqg1wx6doua.cloudfront.net/audio/ru/f85c6e8e9d91be7306cb1befd4b6353b",
          },
          {
            character: "ф",
            tts: "https://d1ugqg1wx6doua.cloudfront.net/audio/ru/7e0547d2ba1bbc83f6cdaf7fa0a66029",
          },
          {
            character: "и",
            tts: "https://d1ugqg1wx6doua.cloudfront.net/audio/ru/09b16e786bc81776f5d723924808902a",
          },
        ],
        correctIndex: 0,
        id: "1014694779",
        isOptionTtsDisabled: false,
        metadata: {
          targetCharacterIds: [
            "Т т_t",
            "О о_o",
            "Д д_d",
            "И и_i",
            "Ф ф_f",
            "К к_k",
          ],
        },
        prompt: "d",
        challengeGeneratorIdentifier: {
          generatorId: "1014694779",
          specificType: "character_select",
        },
        phonemeCharacterBased: false,
        timeTaken: 11720,
        correct: true,
        guess: "0",
      },
    ],
    disableCantListenOverride: false,
    disableHintsOverride: false,
    fromLanguage: "en",
    id: sessionId,
    learningLanguage: "ru",
    metadata: {
      alphabetSessionId: "cyrillic",
      staticSessionId: "cyrillic_2_1",
    },
    ttsAnnotations: {},
    type: "ALPHABET_LESSON",
    heartsLeft: 0,
    startTime: startTime,
    enableBonusPoints: false,
    endTime: endTime,
    failed: false,
    maxInLessonStreak: 12,
    shouldLearnThings: true,
    courseId: "DUOLINGO_RU_EN",
  };

  const config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `https://www-prod.duolingo.com/2017-06-30/alphabets/sessions/ru/en/${sessionId}`,
    headers: {
      accept: "application/json; charset=UTF-8",
      "accept-language":
        "en-GB,en;q=0.9,th;q=0.8,th-TH;q=0.7,ja-JP;q=0.6,ja;q=0.5,es-ES;q=0.4,es;q=0.3",
      authorization: `Bearer ${DUOLINGO_SECRET_JWT}`,
      "content-type": "application/json; charset=UTF-8",
      origin: "https://www.duolingo.com",
      priority: "u=1, i",
      referer: "https://www.duolingo.com/",
      "x-amzn-trace-id": `User=${DUOLINGO_SECRET_USER_ID}`,
      Cookie: `jwt_token=${DUOLINGO_SECRET_JWT}; ${DUOLINGO_SECRET_COOKIE}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    const result = await response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  const ROUND = 10;
  let i = 0;

  while (true) {
    const sessionId = await createSession();
    console.log(sessionId);
    const farmingResult = await farmingXp(sessionId);
    console.log(farmingResult.xpGain);
    await delay(1000);
    i++;
    if (i === ROUND) break;
  }
})();
