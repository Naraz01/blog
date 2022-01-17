import axios from "axios";

export const PostApi = {
    getAll() {
        return axios.get('http://localhost:3001/posts').then(({data}) => data);
    },
    getNews(id: any) {
        return axios.get(`http://localhost:3001/posts/${id}?_embed=comments`).then(({data}) => data);
    },
    setPost(payload: any) {
        return axios.post('http://localhost:3001/posts/', payload).then(({data}) => data);
    },
    deletePost(payload: any) {
        return axios.delete('http://localhost:3001/posts/'+payload).then(({data}) => data);
    },
    updateTitle(id: any, text: any) {
        return axios.patch('http://localhost:3001/posts/'+id, {
            title: text,
        }).then(({data}) => data);
    },
    updateText(id: any, text: any) {
        return axios.patch('http://localhost:3001/posts/'+id, {
            body: text,
        }).then(({data}) => data);
    },
};

/*
type CreatePostDto = {
    title: string;
    body: OutputData['blocks'];
}
export const PostApi = (instance: AxiosInstance) => ({
    async getAll() {
        const { data } = await instance.get<PostItem>('/posts');
        return data;
    },
    async create(dto: CreatePostDto) {
        const { data } = await instance.post('/posts', dto);
        return data;
    }
});
*/

