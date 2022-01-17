import React from "react";
import { Typography, IconButton, MenuItem, Menu, Input } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';
import { UserApi } from "../../utils/api/user";
import { CommentApi } from "../../utils/api/comment";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface CommentPostProps {
    id: number;
    text: string;
    createdAt: string;
    user: any;
    post?:any;
    deleteComment: any;
};

export const Comment: React.FC<CommentPostProps> = ({user, text, createdAt, id, deleteComment}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [edit, setEdit] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(text);
    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [userPost, setUserPost] = React.useState<any>();

    const {userId} = useSelector((state : RootState ) => {
        return {
            userId: state.user.data?.id
        }
    });
    
    React.useEffect(() => {
        if(!user) return;
        (async () => {
            const data = await UserApi.getMe(user);
            setUserPost(data)
        })()
    }, [user])

    const onDeleteComment = async () => {
        try {
            await CommentApi.deleteComment(id);
            deleteComment(id)
            setAnchorEl(null);
        } catch(error) {
            console.log(error, 'delete')
            setAnchorEl(null);
        }
    }

    const onUpdateComment =  () => {
        setEdit(true)
        setAnchorEl(null);
    }
    
    const onChange = async (e: any) => {
        try {
            setInputValue(e)
            await CommentApi.updateComment(id, inputValue);
        } catch(error) {
            console.log(error, 'Update Comment')
        }
    }

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src="#"
                    alt="Avatar"
                />
                <b> {userPost && userPost.fullName} </b>
                <span>5 часов</span>
            </div>
            {
                edit ?
                <Input value = {inputValue} onChange={(e) => onChange(e.target.value)}/>
                    :
                <Typography className={styles.text}>
                    {text}
                </Typography>
            }
            
            <span className={styles.replyBtn}>
                Ответить
            </span>
            
                    <IconButton onClick={handleClick}>
                        <MoreIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        elevation={2}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={onDeleteComment}>Удалить</MenuItem>
                        <MenuItem onClick={onUpdateComment}>Редактировать</MenuItem>
                    </Menu>
        </div>
    )
}
