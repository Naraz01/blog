import React from 'react'
import { NextPage } from "next";
import {Post} from "../components/Post";
import {MainLayout} from "../layouts/MainLayout";
import { PostItem } from "../utils/api/types";
import { useDispatch, useSelector } from 'react-redux';
import { FetchPosts } from '../store/ducks/posts/actionCreators';
import { RootState } from '../store/store';
import { FetchUser } from '../store/ducks/user/actionCreators';

interface HomeProps {
    posts: PostItem[]
}

const Home: NextPage<HomeProps> = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector((state : RootState ) => {
        return {
            posts: state.posts.data
        }
    });
    React.useEffect(() => {
        dispatch(FetchPosts())
        dispatch(FetchUser(1))
    }, [])
    return (
        <MainLayout>
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
        </MainLayout>
    );
}
export default Home;
