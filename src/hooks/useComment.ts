import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import { IComment, IComments, ICommentSave } from '../types';

const useComment = (page: number = 1, size: number = 5) => {
    const [savedComments, setSavedComments] = useState<IComment[]>();

    useEffect(() => {
        const fetchSavedComments = async () => {
            axios
                .get<IComments>(`https://mbti-test.herokuapp.com/comment?page=${page}&size=${size}`)
                .then((response) => {
                    setSavedComments(response.data.data.content);
                })
                .catch((e) => console.error(e));
        }
        fetchSavedComments();
    }, [page, size]);


    const writeComment = async (content: string, mbti: string, name: string, password: string) => {
        try {
            const response: AxiosResponse<ICommentSave> = await axios({
                method: "post",
                url: `https://mbti-test.herokuapp.com/comment`,
                data: {
                    content,
                    mbti,
                    name,
                    password,
                },
            });

            if (response.status !== 200) throw new Error("다시 댓글을 작성해 주세요.");
            alert("댓글이 작성되었습니다");
        } catch (e) {
            console.error(e);
        }
    };

    return { savedComments, writeComment }
}

export default useComment;