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
    AccountCircleOutlined as UserIcon
} from "@material-ui/icons";

import styles from './Header.module.scss';
import { AuthDialog } from "../AuthDialog";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Header: React.FC = () => {
    const [authVisible, setAuthVisible] = React.useState(false);
    const {userData} = useSelector((state : RootState ) => {
        return {
            userData: state.user.data,
        }
    });
    const openAuthDialog = () => {
        setAuthVisible(true);
    };

    const closeAuthDialog = () => {
        setAuthVisible(false);
    };

    React.useEffect(() => {
        if (authVisible && userData) {
            setAuthVisible(false);
        }
    }, [authVisible, userData])
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
                <IconButton onClick={openAuthDialog}>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                { userData ? 
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
                    :
                    <div className={styles.loginButton} onClick={openAuthDialog}>
                        <UserIcon />
                        Войти
                    </div> 
                }
            </div>
            <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
        </Paper>
    )
}
