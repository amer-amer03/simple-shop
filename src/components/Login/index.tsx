import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FC } from "react";
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
import { useTranslation } from "react-i18next";

const Login: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userData = useSelector(authUserSelector);

  const schema = yup
    .object({
      email: yup.string().required(t<string>("auth.fieldRequired")),
      password: yup.string().required(t<string>("auth.fieldRequired")),
    })
    .required();

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

  const onSubmit = (data: ILoginData): void => {
    if (userData.email === data.email && userData.password === data.password) {
      dispatch(loginUser());
      dispatch(hideModal());
      dispatch(addNotification(t<string>("notifications.loggedIn")));
    } else {
      dispatch(addNotification(t<string>("notifications.wrongEmail")));
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
              label={t<string>("auth.email")}
              placeholder={t<string>("auth.enterEmail")}
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
              type="password"
              label={t<string>("auth.password")}
              placeholder={t<string>("auth.enterPassword")}
              {...rest}
            />
          )}
        />
        {errors.password && <ErrorMessage value={errors.password.message} />}
      </div>
    </>
  );

  const loginFooter = (
    <BaseButton type="submit"> {t<string>("auth.submit")} </BaseButton>
  );

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <BaseModal
        title={t<string>("header.login")}
        body={loginBody}
        footer={loginFooter}
      />
    </form>
  );
};

export default Login;
