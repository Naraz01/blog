import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import {Paper, Typography} from "@material-ui/core";

import styles from './Post.module.scss';
import {PostActions} from "../PostActions";

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
                <Link href="/news/test-123">
                    <a>
                        Кот прилёг отдознуть в английском парке минатюр и стал героем шуток
                    </a>
                </Link>
            </Typography>
            <Typography className="mt-10 md-15">
                Пока одни не могли соотнести размеры животного и окуружения, другие начали
            </Typography>
          
            <PostActions />
        </Paper>
    )
}
