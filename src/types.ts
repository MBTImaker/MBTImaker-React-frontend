export type TestCountResult = {
    "status": number,
    "code": string,
    "message": string,
    "data": {
        "testCount": number
    }
}

export type Answer = "a" | "b" | null;

export interface Question {
    id: number;
    question: {
        situation: string;
        ask: string;
    }
    answer: {
        a: string;
        b: string;
    };
}

export type TestCode = Record<number, 0 | 1>;
export interface TestResult {
    "status": number;
    "code": string;
    "message": string;
    "data": {
        "mbtiResult": {
            "mbti": string;
            "character": {
                "movieName": {
                    "url": string;
                },
                "name": {
                    "url": string;
                },
                "image": {
                    "url": string;
                },
                "representativePersonality": string;
                "personalities": string[];
            },
            "bestChemistry": {
                "movieName": string;
                "characterName": string;
                "imageUrl": string;
            },
            "worstChemistry": {
                "movieName": string;
                "characterName": string;
                "imageUrl": string;
            },
            "recommendedMovies": [
                {
                    "url": string;
                },
                {
                    "url": string;
                },
                {
                    "url": string;
                }
            ]
        },
        "sameType": {
            "movieName": string;
            "characterName": string;
            "imageUrl": string;
            "percentage": number;
        },
        "mostPopularType": {
            "movieName": string;
            "characterName": string;
            "imageUrl": string;
            "percentage": number;
        },
        "kakao_JAVASCRIPT_KEY": string;
    }
}