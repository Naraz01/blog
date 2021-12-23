import React from "react";
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';

export const comments = [
    {
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebjtQWN3xp5qSxf6M1zh7aUrKubA_bbdt-A&usqp=CAU'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсьь туда спать ещё на часок.',
        post: {
            title: 'Какая у вас дома ванна?'
        },
        id: 1,
        createdAt: new Date().toString(),
    },
    {
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebjtQWN3xp5qSxf6M1zh7aUrKubA_bbdt-A&usqp=CAU'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсьь туда спать ещё на часок.',
        post: {
            title: 'Какая у вас дома ванна?'
        },
        id: 2,
        createdAt: new Date().toString(),
    },
    {
        user: {
            fullname: 'Вася Пупкин',
            avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebjtQWN3xp5qSxf6M1zh7aUrKubA_bbdt-A&usqp=CAU'
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсьь туда спать ещё на часок.',
        post: {
            title: 'Какая у вас дома ванна?'
        },
        id: 3,
        createdAt: new Date().toString(),
    },
];

interface CommentItemProps {
    user: {
        fullname: string;
    };
    text: string;
    post: {
        title: string;
    };
}

const CommentItem: React.FC<CommentItemProps> = ({user, text, post}) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img src="#" />
                <a href='#'>
                    <b>{user.fullname}</b>
                </a>
            </div>
            <p className={styles.text}>{text}</p>
            <a href="#">
                <span className={styles.postTitle}>{post.title}</span>
            </a>
        </div>
    )
};

export const SideComments = () => {
    return (
        <div className={styles.root}>
            <h3>
                Коментарии <ArrowRightIcon />
            </h3>
            {
                comments.map((obj) => (
                   <CommentItem key={obj.id} { ...obj } />
                ))
            }
        </div>
    )
}











