import React from 'react';
import {Button, TextField} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormSchema } from "../../../utils/validations";
import { FormField } from '../../../FormField';
import {UserApi} from "../../../utils/api/user";
import {CreateUserDto, LoginDto} from "../../../utils/api/types";
import {setCookie} from "nookies";
import Alert from "@material-ui/lab/Alert/Alert";
import { SetUser, SetUserLoadingState } from '../../../store/ducks/user/actionCreators';
import { useDispatch } from 'react-redux';
import { Api } from '../../../utils/api';

interface RegisterFormProps {
    onOpenRegister?: () => void;
    onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({onOpenRegister, onOpenLogin}) => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const dispatch = useDispatch()

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema),
    });
    const onSubmit = async (dto: CreateUserDto) => {
        try {
            const data = await Api().user.register(dto);
            setCookie(null, 'rtoken', data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            setErrorMessage('')
            dispatch(SetUser(data))
        } catch (err) {
            console.warn('register error', err);
            if (err.response) {
                setErrorMessage(err.response.data.message);
            }
        }
    };

    return (
        <div>
            <FormProvider {...form}>
                <FormField name='fullName' label='Имя и фамилия' />
                <FormField name='email' label='Почта' />
                <FormField name='password' label='Пароль'/>
                {errorMessage && <Alert severity="error">
                    {errorMessage}
                </Alert>}
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="d-flex align-center justify-between">
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            onClick={onOpenRegister}
                        >
                            Зарегистрироваться
                        </Button>
                        <Button color="primary" variant="text" onClick={onOpenLogin}>
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
};
