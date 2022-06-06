import axios from 'axios';
import { useEffect, useState } from 'react'
import { IComment, IComments } from '../types';

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

    return { savedComments }
}

export default useComment;