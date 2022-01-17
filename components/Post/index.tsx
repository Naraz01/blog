import React from 'react'
import Link from 'next/link';
import {IconButton, Menu, MenuItem, Paper, Typography} from "@material-ui/core";

import styles from './Post.module.scss';
import {PostActions} from "../PostActions";

interface PostProps {
    id: number;
    title: string;
    body: string;
    createAt: string;
    user: 1
}

export const Post: React.FC<PostProps> = ({id, title, body, createAt, user}) => {
    return (
        <Paper elevation={0} className="post-inner p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
                <Link href={`/news/${id}`}>
                    <a>
                        {title}
                    </a>
                </Link>
            </Typography>
            <Typography className="mt-10 md-15">
                {body}
            </Typography>
            <PostActions />
        </Paper>
    )
}
