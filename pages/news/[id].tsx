import React from "react";
import {MainLayout} from "../../layouts/MainLayout";
import {FullPost} from "../../components/FullPost";
import { PostComments } from "../../components/PostComments";
import { useRouter } from 'next/router'
import { PostApi } from "../../utils/api/post";

export default function Post() {
    const router = useRouter()
    const [news, setNews] = React.useState<any>();

    React.useEffect(() => {
        if(!router.isReady) return;
        const id = router.query.id;
        (async () => {
            const data = await PostApi.getNews(id);
            setNews(data)
        })()
    }, [router.isReady])
    
    if(!news) {
        return null
    }

    const addComment = (comment: any) => {
        let comments = [...news.comments, comment]
        let data = {...news}
        data.comments = comments;
        setNews(data)
    }

    const deleteComment = (commentId: number) => {
        let comments = news.comments.filter((item: any) => {
            return item.id != commentId;
        })
        let data = {...news}
        data.comments = comments;
        setNews(data)
    }

    const updateComment = () => {
        
    };

    return (
        <MainLayout>
            <FullPost 
                id = {news.id} 
                title = {news.title} 
                body = {news.body} 
                createAt = {news.createAt} 
                user = {news && news.user}
            />
            <PostComments
                comments = {news.comments}
                addComment = {addComment}
                newsId = {news.id}
                deleteComment = {deleteComment}
            />
        </MainLayout>
    )
}