import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import LabelInput from "../LabelInput";
import ErrorMessage from "../ErrorMessage";
import BaseButton from "../BaseButton";
import { ILoginData } from "../../typescript/interfaces/login";
import styles from './index.module.scss';


const schema = yup.object({
    email: yup.string().required('This field is required'),
    password: yup.string().required('This field is required'),
}).required();

const Login = () => {
    const defaultValues: ILoginData = {
        email: '',
        password: '',
    };

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: ILoginData) => {

        const user = JSON.parse(localStorage.getItem('user') || '{}');

        if (user.email === data.email && user.password1 === data.password) {
            localStorage.setItem('isLogin', "true")
        }
    };

    return (
        <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { ref, ...rest } }) => (
                        <LabelInput
                            label='Email'
                            placeholder="Please enter your email address"
                            {...rest}
                        />
                    )}
                />
                {errors.email && <ErrorMessage value={errors.email.message} />}
            </div>

            <div>
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { ref, ...rest } }) => (
                        <LabelInput
                            label="Password"
                            type="password"
                            placeholder="Please enter a password"
                            {...rest}
                        />
                    )}
                />
                {errors.password && <ErrorMessage value={errors.password.message} />}
            </div>

            <BaseButton className={styles.button} type="submit" value="submit" />
        </form>
    )
}

export default Login
