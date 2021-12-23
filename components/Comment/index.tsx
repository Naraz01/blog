import React from "react";
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
    text: string;
    createdAt: string;
    user: {
        fullname: string;
        avatarUrl: string
    }
};

export const Comment: React.FC<CommentPostProps> = ({user, text, createdAt}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src={user.avatarUrl}
                    alt="Avatar"
                />
                <b> {user.fullname} </b>
                <span>5 часов</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
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
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    )
}
