import React from 'react'
import {Button, Input, TextareaAutosize} from "@material-ui/core";
import styles from './WriteForm.module.scss';
import { PostApi } from '../../utils/api/post';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AddPost } from '../../store/ducks/posts/actionCreators';
import { useRouter } from 'next/router';

interface WriteFormProps {
    data?: string
}

export const WriteForm: React.FC<WriteFormProps> = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const [title, setTitle] = React.useState(''); 
    const [text, setText] = React.useState([]);
    const router = useRouter()

    const {userId} = useSelector((state : RootState ) => {
        return {
            userId: state.user.data?.id
        }
    });
    const dispatch = useDispatch();
    const onAddPost = async () => {
        setIsLoading(true)
        const post = {
            title,
            body: text,
            createAt: "Date",
            user: userId
        }
        const data = await PostApi.setPost(post)
        dispatch(AddPost(data))
        router.push(`/news/${data.id}`)
    }

    return (
        <div>
            <Input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                classes={{input: styles.titleField}} 
                placeholder="Заоловок"
                fullWidth
                multiline
            />
            <div className={styles.editor}>
                <Input
                    value={text}
                    onChange={(e:any) => setText(e.target.value)}
                    placeholder = 'Введите текст вашей статьи'
                    fullWidth
                    multiline
                    minRows='7'
                />
                {
                    /*
                    <Editor onChange={ arr => setBlocks(arr) }/>
                    */
                }
            </div>
            <Button disabled={isLoading} onClick = {onAddPost} variant="contained" color="primary">
                Опубликовать
            </Button>
        </div>
    )
}
