import axios from "axios";

export const UserApi = {
    getUser() {
        return axios.get('http://localhost:3001/users').then(({data}) => data);
    },
    getMe(id: any) {
        return axios.get(`http://localhost:3001/users/${id}`).then(({data}) => data);
    }
};
/*
export const UserApi = (instance: AxiosInstance) => ({
    async register(dto: CreateUserDto): Promise<ResponseCreateUser> {
        const { data } = await instance.post('/auth/register', dto);
        return data;
    },
    async login(dto: LoginDto) {
        const { data } = await instance.post('/auth/login', dto);
        return data;
    },
    async getMe(id: number) {
        const { data } = await instance.get('/users/'+id);
        return data;
    }
});
*/
