export type SocialMedia = "band" | "facebook" | "instagram" | "kakaotalk" | "twitter";
export type TestCode = Record<number, 0 | 1>;
export type Children = React.ReactNode;
export type Answer = "a" | "b" | null;
export type Image = string;

export type TestCountResult = {
    "status": number,
    "code": string,
    "message": string,
    "data": {
        "testCount": number
    }
};

export type Question = {
    id: number;
    question: {
        situation: string;
        ask: string;
    }
    answer: {
        a: string;
        b: string;
    };
};

export type CardPercentageInfo = {
    "movieName": string;
    "characterName": string;
    "imageUrl": string;
    "percentage": number;
};

export type TestResult = {
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
        "sameType": CardPercentageInfo,
        "mostPopularType": CardPercentageInfo,
        "kakao_JAVASCRIPT_KEY": string;
    }
};

export type Comment = {
    "id": number,
    "createdDate": string;
    "mbti": string;
    "name": string;
    "password": string;
    "content": string;
    "childSize": number,
    "state": string;
};

export type Comments = {
    "status": number;
    "code": string;
    "message": string;
    "data": {
        "content": Comment[];
        "pageable": {
            "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
            },
            "pageNumber": number;
            "pageSize": number;
            "offset": number;
            "paged": boolean;
            "unpaged": boolean;
        },
        "last": boolean;
        "totalPages": number;
        "totalElements": number;
        "sort": {
            "sorted": boolean;
            "unsorted": boolean;
            "empty": boolean;
        },
        "first": boolean;
        "number": number;
        "numberOfElements": number;
        "size": number;
        "empty": boolean;
    }
};

export type CommentSave = {
    "status": number;
    "code": string;
    "message": string;
    "data": {
        "result": string;
        "clientIp": string;
    }
}
export type CommentDelete = {
    "code": "string",
    "data": {},
    "message": "string",
    "status": 0
}