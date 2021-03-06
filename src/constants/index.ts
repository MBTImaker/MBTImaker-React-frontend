import { Question, ReportKoreanType } from './../types';

export const DISTRIBUTED_URL = "https://christmas-movie.netlify.app";

export const QUESTION_LIST: Question[] = [
    {
        id: 1,
        question: {
            situation: `오늘은 크리스마스 홈파티 하는 날.\n방을 어떻게 꾸밀까?`,
            ask: `고민하는 나는?`,
        },
        options: {
            a: `오늘은 특별한 날 화려하게 꾸민다.`,
            b: `그래도 단순한 게 좋다.\n미니멀하게 꾸민다.`
        }
    },
    {
        id: 2,
        question: {
            situation: `오늘은\n크리스마스`,
            ask: `집에 있는 나는?`,
        },
        options: {
            a: `친구들에게 연락해 약속을 잡는다.`,
            b: `오늘은 그냥 평범한 하루,\n집에서 쉰다.`,
        }
    },
    {
        id: 3,
        question: {
            situation: `내가 영화 속\n히어로라면`,
            ask: `나는?`,
        },
        options: {
            a: `불의를 못 참고,\n바로 행동에 나서는 히어로.`,
            b: `계획을 세우고\n이후에 행동 개시하는 히어로.`,
        }
    },
    {
        id: 4,
        question: {
            situation: `지금 밖에\n눈이 내린다.`,
            ask: `옆 사람에게 나는?`,
        },
        options: {
            a: `눈이 2cm 정도 왔네. 내일은 더 쌓인대.\n뉴스 봐야겠다. 라고 말한다.`,
            b: `눈이 많이 왔네. 집 갈 때 조심해\n라고 말한다.`,
        }
    },
    {
        id: 5,
        question: {
            situation: `크리스마스에\n재밌는 영화를 보았다.`,
            ask: `친구에게 묘사하는 나는?`,
        },
        options: {
            a: `주인공이... 스토리부터 길고 상세하게\n구체적으로 설명한다.`,
            b: `재밌게 볼만하더라. 라고 짧게\n설명한다.`,
        }
    },
    {
        id: 6,
        question: {
            situation: `영화를 선택하려는데\n평점이 생각보다 낮았다.`,
            ask: `그러면 나는?`,
        },
        options: {
            a: `평점이 낮다면 재미없을 게 뻔해. 라며\n다른 걸 찾아본다.`,
            b: `평점이 낮지만 내용이 끌리는데,\n한 번 봐볼까? 라며 영화를 감상한다.`,
        }
    },
    {
        id: 7,
        question: {
            situation: `크리스마스 데이트하는 날,\n사고가 나 상대방이 늦었다.`,
            ask: `그때 나는?`,
        },
        options: {
            a: `괜찮아? 놀랐겠다ㅠㅠ 병원 다녀왔어?\n라고 말한다.`,
            b: `무슨 사고? 어떻게 하다가 다쳤어?\n라고 말한다.`,
        }
    },
    {
        id: 8,
        question: {
            situation: `크리스마스\n선물을 받았다고`,
            ask: `자랑하는 친구에게 나는?`,
        },
        options: {
            a: `진짜? 기분 좋겠다!\n라고 말한다.`,
            b: `뭐 받았어? 봐봐!\n라고 말한다.`,
        }
    },
    {
        id: 9,
        question: {
            situation: `영화를\n볼 때,`,
            ask: `나는?`,
        },
        options: {
            a: `주인공에게 감정을 이입해서 본다.`,
            b: `상황이 어떻게 흘러가는지,\n논리적으로 사고하면서 본다.`,
        }
    },
    {
        id: 10,
        question: {
            situation: `크리스마스 아침에\n일어나서`,
            ask: `나는?`,
        },
        options: {
            a: `오늘 할 일을 세세하게 계획한다.`,
            b: `할 일을 대강 정해두었지만,\n변경 가능성은 있다.`,
        }
    },
    {
        id: 11,
        question: {
            situation: `크리스마스\n홈 파티가 끝나고,`,
            ask: `나는?`,
        },
        options: {
            a: `어지러진 것들을 바로 치운다.`,
            b: `친구들이 떠난 후, 치운다.`,
        }
    },
    {
        id: 12,
        question: {
            situation: `영화관에서 영화를 보려는데,\n자리가 없다.`,
            ask: `그때 나는?`,
        },
        options: {
            a: `오늘은 날이 아닌가보다. 다음에 봐야지\n라며 돌아간다.`,
            b: `그러면 지금 하는 다른 걸 볼까? 하며\n다른 걸 본다.`,
        }
    }
];

export const REPORT_TYPE: ReportKoreanType[] = [
    {
        value: "ABUSE",
        korean: "욕설 / 비하",
    },
    {
        value: "PORNOGRAPHY",
        korean: "음란물 / 불건전한 대화",
    },
    {
        value: "COMMERCIAL",
        korean: "상업적 광고 / 판매",
    },
    {
        value: "PAPERING",
        korean: " 낚시 / 도배",
    },
    {
        value: "DISPUTE",
        korean: "지나친 정치 / 종교 논쟁",
    },
    {
        value: "PROMOTION",
        korean: "불법 홍보",
    },
]