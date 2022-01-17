import React from 'react'
import Input from '@material-ui/core/Input'
import styles from './AddCommentForm.module.scss'
import Button from '@material-ui/core/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { CommentApi } from '../../utils/api/comment'

interface AddCommentFormProps {
    newsId: number,
    addComment: any,
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({newsId, addComment}) => {
    const [clicked, setClicked] = React.useState(false)
    const [text, setText] = React.useState('');
    const {userId} = useSelector((state : RootState ) => {
        return {
            userId: state.user.data?.id
        }
    });
    const onAddComment = async () => {
        let comment = {
            text: text,
            userId: userId,
            postId: newsId,
            createAt: "Date"
        }
        const data = await CommentApi.setComment(comment)
        addComment(data)
        setClicked(false);
        setText('')
    }
    return (
        <div className={styles.form}>
            <Input 
                onChange={e => setText(e.target.value)}
                value={text}
                onFocus={() => setClicked(true)}
                minRows={clicked ? 5 : 1}
                classes={{ root: styles.fielRoot }}
                placeholder="Написать комментарий..."
                fullWidth
                multiline
            />
            { clicked && <Button onClick={onAddComment} className={styles.addButton} variant="contained">
                Опубликовать
            </Button> }
        </div>
    )
}
