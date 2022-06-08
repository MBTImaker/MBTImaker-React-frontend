import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import { Comment, CommentDelete, Comments, CommentSave } from '../types';

const useComment = (page: number = 1, size: number = 5) => {
    const [savedComments, setSavedComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchSavedComments = async () => {
            try {
                const response: AxiosResponse<Comments> = await axios({
                    method: "get",
                    url: `https://mbti-test.herokuapp.com/comment?page=${page}&size=${size}`,
                });

                if (response.status !== 200) throw new Error("다시 댓글을 작성해 주세요.");
                setSavedComments(response.data.data.content);
            } catch (e) {
                console.error(e)
            }
        }
        fetchSavedComments();
    }, [page, size]);


    const writeComment = async (content: string, mbti: string, name: string, password: string) => {
        try {
            const response: AxiosResponse<CommentSave> = await axios({
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
            alert("댓글이 작성되었어요 :)");
        } catch (e) {
            console.error(e);
        }
    };

    const deleteComment = async (id: number, name: string, password: string) => {
        try {
            const response: AxiosResponse<CommentDelete> = await axios({
                method: "patch",
                url: `https://mbti-test.herokuapp.com/comment`,
                data: {
                    id,
                    name,
                    password,
                },
            });

            if (response.status !== 200) throw new Error("비밀번호가 틀렸어요.");
            alert("댓글이 삭제되었어요.");
        } catch (e) {
            alert("비밀번호가 틀렸어요.");
        }
    };

    return { savedComments, writeComment, deleteComment }
}

export default useComment;