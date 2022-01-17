import Link from "next/link";
import {Paper, Avatar, Typography, Button, Tabs, Tab} from "@material-ui/core";
import {
    SettingsOutlined as SettingsIcon,
    TextsmsOutlined as MessageIcon
} from "@mui/icons-material";
import {MainLayout} from "../../layouts/MainLayout";
import {Post} from "../../components/Post";
import React from "react";
import { useRouter } from 'next/router'
import { UserApi } from "../../utils/api/user";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PostItem, userItem } from "../../utils/api/types";

export default function Profile() {
    const router = useRouter()
    const userId = router.query.id;

    const [user, setUser] = React.useState<userItem>();
    const [news, setNews] = React.useState();
    const {posts} = useSelector((state : RootState ) => {
        return {
            posts: state.posts.data
        }
    });
    React.useEffect(() => {
        if(!router.isReady) return;
        const id = router.query.id;
        (async () => {
            const data = await UserApi.getMe(id);
            setUser(data)
        })()
    }, [router.isReady])

    React.useEffect(() => {
        const data = posts?.filter((item:any) => {
            return item.id == userId;
        })
        setNews(data)
    },[userId])
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
                <div className="d-flex justify-between">
                    <div>
                        <Avatar
                            style={{width: 120, height: 120, borderRadius: 6}}
                            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80"
                        />
                        <Typography style={{fontWeight: 'bold'}} className="mt-10" variant='h4'>
                            {user?.name} {user?.surname}
                        </Typography>
                    </div>
                    <div>
                        <Link href="/profile/settings">
                            <Button
                                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                                variant="contained">
                                <SettingsIcon/>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="d-flex md-10 mt-10">
                    <Typography style={{fontWeight: 'bold', color: '#35AB66'}} className="mr-15">
                        +208
                    </Typography>
                    <Typography>2 подписчика</Typography>
                </div>
                <Typography>На проекте с 15 сен 2016</Typography>

                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Статьи"/>
                </Tabs>
            </Paper>
            <div className="d-flex align-start">
                <div className="mr-20 flex">
                {
                    posts?.map((item:PostItem, i:number ) => {
                        return (
                            <Post 
                                title = {item.title} 
                                body = {item.body} 
                                id = {item.id} 
                                user = {item.user} 
                                createAt = {item.createAt} 
                                key = {i} 
                            />
                        )
                    })
                }
                </div>
            </div>
        </MainLayout>
    )
}
