import React from "react";
import Link from 'next/link';
import { Paper, Button, IconButton, Avatar } from "@material-ui/core";
import {
    SearchOutlined as SearchIcon,
    CreateOutlined as PenIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
} from "@material-ui/icons";

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <Paper classes={{ root: styles.root }} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <a>
                        <img height={35} className="mr-20" src="/static/img/logo.svg" alt="logo"/>
                    </a>
                </Link>

                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder="Поиск" />
                </div>
                <Link href="/write">
                    <a>
                        <Button variant="contained" className={styles.penButton}>
                            Новая запись
                        </Button>
                    </a>
                </Link>

            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <Link href="/profile/1">
                    <a className="d-flex align-center">
                        <Avatar
                            className={styles.avatar}
                            alt="Remy Sharp"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebjtQWN3xp5qSxf6M1zh7aUrKubA_bbdt-A&usqp=CAU"
                        />
                        <ArrowBottom />
                    </a>
                </Link>
            </div>
        </Paper>
    )
}
