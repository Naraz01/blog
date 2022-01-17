import React from 'react';
import {Button, TextField} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginSchema} from "../../../utils/validations";
import {FormField} from "../../../FormField";
import {CreateUserDto, LoginDto} from "../../../utils/api/types";
import {setCookie} from "nookies";
import Alert from '@material-ui/lab/Alert';
import { SetUser } from '../../../store/ducks/user/actionCreators';
import { useDispatch } from 'react-redux';
import { Api } from '../../../utils/api';

interface LoginFormProps {
    onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({onOpenRegister}) => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const dispatch = useDispatch()

    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginSchema),
    });

    const onSubmit = async (dto: LoginDto) => {
        try {
            const data = await Api().user.login(dto);
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
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField name='email' label='Почта' />
                <FormField name='password' label='Пароль'/>
                {errorMessage && <Alert severity="error">
                    {errorMessage}
                </Alert>}
                <div className="d-flex align-center justify-between">
                    <Button
                        disabled={!form.formState.isValid || form.formState.isSubmitting}
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Войти
                    </Button>
                    <Button
                        color="primary"
                        variant="text"
                        onClick={onOpenRegister}
                    >
                        Регистрация
                    </Button>
                </div>
            </form>
            </FormProvider>
        </div>
    )
};
