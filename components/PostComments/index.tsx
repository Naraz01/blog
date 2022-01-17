import React from 'react';
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";
import { AddCommentForm } from '../AddCommentForm';

interface CommentItem {
    id: number,
    text: string,
    userId: number,
    postId: number,
    createAt: string,
}
interface CommentsProps {
    comments: [CommentItem],
    newsId: number,
    addComment: any,
    deleteComment: any;
}

export const PostComments: React.FC<CommentsProps> = ({comments, newsId, addComment, deleteComment}) => {
    return (
        <Paper elevation={0} className="mt-40 p-30">
            <div className="container">
                <Typography variant="h6" className="mb-20">
                    {
                        comments && comments.length < 0 ? '' : comments.length
                    } 
                     комментария
                </Typography>
                <Divider />
                <AddCommentForm newsId={newsId} addComment={addComment} />
                <div className="mb-20"/>
                {
                    comments.map(obj => <Comment key={obj.id} id={obj.id} user={obj.userId} text={obj.text} post={obj.postId} createdAt={obj.createAt} deleteComment={deleteComment}/>)
                }
            </div>
        </Paper>
    )
}