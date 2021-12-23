import React from 'react'
import Input from '@material-ui/core/Input';

interface AddCommentFormProps {

}

export const AddCommentForm: React.FC<AddCommentFormProps> = () => {
    return (
        <div>
            <Input placeholder="Написать комментарий..." fullWidth/>
        </div>
    )
}
