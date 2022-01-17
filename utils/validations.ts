import * as yup from "yup";

export const LoginSchema = yup.object({
    email: yup.string().email('Неверная почта').required('Почта обязательная'),
    password: yup.string().min(6, 'Пароль должна быть не менее 7 символов').required('Пароль обязательный'),
}).required();

export const RegisterFormSchema = yup
    .object()
    .shape({
        fullName: yup.string().required('Имя и фамилия обязательны'),
    }).concat(LoginSchema);
