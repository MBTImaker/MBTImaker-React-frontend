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

export type TestCode = Record<number, 0 | 1>