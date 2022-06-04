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
    id: string;
    question: {
        situation: string;
        ask: string;
    }
    answer: {
        a: string;
        b: string;
    };
}