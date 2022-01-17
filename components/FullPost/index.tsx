import React from 'react'
import { Button, IconButton, Input, Menu, MenuItem, Paper, Typography } from "@material-ui/core";
import {PostActions} from "../PostActions";
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './FullPost.module.scss';
import { UserApi } from '../../utils/api/user';
import { PostApi } from '../../utils/api/post';
import { useRouter } from 'next/router';

interface PostProps {
    id?: number;
    title: string;
    body: string;
    createAt: string;
    user: 1;
}
export const FullPost:React.FC<PostProps> = ({id, title, body, createAt, user}) => {
    const [userPost, setUserPost] = React.useState<any>()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [edit, setEdit] = React.useState(false);
    const [editTitle, setEditTitle] = React.useState(title); 
    const [editText, setEditText] = React.useState(body);

    const router = useRouter()

    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    React.useEffect(() => {
        if(!user) return;
        (async () => {
            const data = await UserApi.getMe(user);
            setUserPost(data)
            console.log(data)
        })()
    }, [user])
    
    React.useEffect(() => {
        PostApi.updateTitle(id, editTitle);
    }, [editTitle])

    React.useEffect(() => {
        PostApi.updateText(id, editText);
    }, [editText])
    
    const onUpdatePost =  () => {
        setEdit(true)
        setAnchorEl(null);
    }
    
    const onDeletePost = async () => {
        try {
            await PostApi.deletePost(id);
            setAnchorEl(null);
            router.push(`/`)

        } catch(error) {
            console.log(error, 'delete')
            setAnchorEl(null);
        }
    }
    return (
      <Paper elevation={0} className={styles.paper}>
          <div className="container">
                {
                    edit
                        ?
                    <Input 
                        value={editTitle} 
                        onChange={(e) => setEditTitle(e.target.value)}
                        classes={{input: styles.titleField}} 
                        fullWidth
                        multiline
                    />
                    :
                    <Typography variant="h4" className={styles.title}>
                        { editTitle }
                    </Typography>
                }
                <IconButton onClick={handleClick} className="post-panel">
                    <MoreIcon />
                </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={2}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={onDeletePost}>Удалить</MenuItem>
                <MenuItem onClick={onUpdatePost}>Редактировать</MenuItem>
            </Menu>
                <div>
                    {
                        edit
                            ?
                        <Input
                            value={editText}
                            onChange={(e:any) => setEditText(e.target.value)}
                            placeholder = 'Введите текст вашей статьи'
                            fullWidth
                            multiline
                        />
                            :
                        <Typography>
                            { editText }
                        </Typography>
                    }
                    <div style={{width: 250, marginLeft: -14}}>
                        <PostActions />
                    </div>
                    <div className="d-flex justify-between align-center mt-30 md-30">
                        <div className={styles.userInfo}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzu9XZtjP9cIqIlYdMgF1iDHFfzChH6wLKuQ&usqp=CAU"
                                alt="Avatar"
                            />
                            <b>{userPost && userPost.fullName}</b>
                        </div>
                    </div>
                </div>
          </div>
      </Paper>
  )
};
