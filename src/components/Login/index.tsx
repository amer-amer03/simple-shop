import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import LabelInput from "../LabelInput";
import ErrorMessage from "../ErrorMessage";
import BaseButton from "../BaseButton";
import { ILoginData } from "../../interfaces/auth";
import { useDispatch, useSelector } from "react-redux";
import { authUserSelector } from "../../store/selectors/auth";
import { loginUser } from "../../store/actions/auth";
import { hideModal } from "../../store/actions/modal";
import { addNotification } from "../../store/actions/notification";
import BaseModal from "../BaseModal";
import styles from "./index.module.scss";

const schema = yup
  .object({
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const userData = useSelector(authUserSelector);

  const defaultValues: ILoginData = {
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ILoginData) => {
    if (userData.email === data.email && userData.password === data.password) {
      dispatch(loginUser());
      dispatch(hideModal());
      dispatch(addNotification("You are logged in"));
    } else {
      dispatch(addNotification("Wrong email or password"));
    }
  };

  const loginBody = (
    <>
      <div>
        <Controller
          control={control}
          name="email"
          render={({ field: { ref, ...rest } }) => (
            <LabelInput
              label="Email"
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
    </>
  );

  const loginFooter = <BaseButton type="submit" value="submit" />;
  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <BaseModal title="login" body={loginBody} footer={loginFooter} />
    </form>
  );
};

export default Login;
