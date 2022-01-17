import axios from "axios";
import { GetServerSideProps, NextPageContext } from "next";
import { UserApi } from "./user";
import { PostApi } from "./post";

export type ApiReturnType = {
    user: ReturnType<typeof UserApi>
}

export const Api = (): ApiReturnType => {
    const instance = axios.create({
        baseURL: 'http://localhost:3001'
    });

    return {
        user: UserApi(instance),
    }
}