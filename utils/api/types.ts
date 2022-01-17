import { OutputData } from "@editorjs/editorjs";

export type LoginDto = {
    email: string;
    password: string;
};

export type CreateUserDto = {
    fullName: string;
} & LoginDto;

export type ResponseCreateUser = {
    createAt: string;
    email: string;
    name: string;
    surname: string;
    location: string;
    status: string;
    id: number;
    updatedAt: string;
}

export type PostItem = {
    title: string;
    body: string;
    id: number;
    createAt: string;
    user: 1
}
export type userItem = {
    id: any;
    name: string;
    surname: string;
    location: string;
    status: string;
    email: string;
    password: string;
    createAt: string;
}
export type CommentItem = {
    id?: number,
    text: string,
    userId: number,
    postId: number,
    createAt: string,
}