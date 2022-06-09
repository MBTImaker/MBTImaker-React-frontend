import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import { Comment, CommentDelete, CommentReport, Comments, CommentSave, DeleteCommentProperties, GetCommetsProperties, TotalComments, WriteCommentProperties } from '../types';

const useComment = ({ page, size }: GetCommetsProperties) => {
    const [savedComments, setSavedComments] = useState<Comment[]>([]);
    const [totalComments, setTotalComments] = useState<TotalComments>();

    useEffect(() => {
        getCommentsFromServer({ page, size });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, size]);

    const getCommentsFromServer = async ({ page, size }: GetCommetsProperties) => {
        try {
            const response: AxiosResponse<Comments> = await axios({
                method: "get",
                url: `https://mbti-test.herokuapp.com/comment?page=${page}&size=${size}`,
            });

            if (response.status !== 200) throw new Error("서버에서 댓글을 가져오지 못했어요.");
            setSavedComments(response.data.data.content);
            setTotalComments(response.data.data.totalPages);
        } catch (e) {
            console.error(e);
        }
    }

    const writeComment = async ({ content, mbti, name, password, page, size }: WriteCommentProperties) => {
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
            getCommentsFromServer({ page, size });
        } catch (e) {
            console.error(e);
        }
    };

    const deleteComment = async ({ id, name, password, page, size }: DeleteCommentProperties) => {
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
            getCommentsFromServer({ page, size });
        } catch (e) {
            alert("비밀번호가 틀렸어요.");
        }
    };

    const reportComment = async (commentId: number, description: string, subject: string) => {
        try {
            const response: AxiosResponse<CommentReport> = await axios({
                method: "post",
                url: `https://mbti-test.herokuapp.com/report`,
                data: {
                    commentId,
                    description,
                    subject,
                },
            });

            if (response.status !== 200) throw new Error("신고되지 않았어요. 다시 입력해 주세요 🚨");
            alert("신고되었어요 🚨");
        } catch (e) {
            alert("신고되지 않았어요. 다시 입력해 주세요 🚨");
        }
    };

    return { savedComments, totalComments, getCommentsFromServer, writeComment, deleteComment, reportComment }
}

export default useComment;