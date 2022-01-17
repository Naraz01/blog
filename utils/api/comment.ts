import axios from "axios";
import { CommentItem } from "./types";

export const CommentApi = {
    setComment(payload: CommentItem) {
        return axios.post('http://localhost:3001/comments/', payload).then(({data}) => data);
    },
    deleteComment(payload: any) {
        return axios.delete('http://localhost:3001/comments/'+payload).then(({data}) => data);
    },
    updateComment(id: any, text: any) {
        return axios.patch('http://localhost:3001/comments/'+id, {
            text: text,
        }).then(({data}) => data);
    },
};