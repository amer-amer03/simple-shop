import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import LabelInput from "../LabelInput";
import ErrorMessage from "../ErrorMessage";
import BaseButton from "../BaseButton";
import { IRegistrationData, IUserData } from "../../interfaces/auth";
import { registerUser } from "../../store/actions/auth";
import { hideModal } from "../../store/actions/modal";
import { addNotification } from "../../store/actions/notification";
import BaseModal from "../BaseModal";
import BaseTypography from "../BaseTypography";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";

const passwordValidationRegex =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const Registration: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const schema = yup
    .object({
      name: yup.string().required(t<string>("auth.fieldRequired")),
      email: yup
        .string()
        .email(t<string>("auth.emailValid"))
        .required(t<string>("auth.fieldRequired")),
      phone: yup.string().required(t<string>("auth.fieldRequired")),
      password1: yup
        .string()
        .matches(passwordValidationRegex, t<string>("auth.passwordValid"))
        .required(t<string>("auth.fieldRequired")),
      password2: yup
        .string()
        .oneOf([yup.ref("password1"), null], t<string>("auth.passwordMatch")),
    })
    .required();

  const defaultValues: IRegistrationData = {
    name: "",
    email: "",
    phone: "",
    password1: "",
    password2: "",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IRegistrationData): void => {
    const userData: IUserData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password1,
    };
    dispatch(registerUser(userData));
    dispatch(hideModal());
    dispatch(addNotification(t<string>("auth.passwordMatch")));
  };
  const registrationBody = (
    <>
      <div>
        <Controller
          control={control}
          name="name"
          render={({ field: { ref, ...rest } }) => (
            <LabelInput
              label={t<string>("auth.fullName")}
              placeholder={t<string>("auth.enterName")}
              {...rest}
            />
          )}
        />
        {errors.name && (
          <span>{<ErrorMessage value={errors.name.message} />}</span>
        )}
      </div>
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
        {errors.email && (
          <span>{<ErrorMessage value={errors.email.message} />}</span>
        )}
      </div>
      <div>
        <Controller
          control={control}
          name="phone"
          render={({ field: { ref, ...rest } }) => (
            <LabelInput
              label={t<string>("auth.phoneNumber")}
              placeholder={t<string>("auth.enterNumber")}
              {...rest}
            />
          )}
        />
        {errors.phone && (
          <span>{<ErrorMessage value={errors.phone.message} />}</span>
        )}
      </div>
      <div>
        <Controller
          control={control}
          name="password1"
          render={({ field: { ref, ...rest } }) => (
            <LabelInput
              type="password"
              label={t<string>("auth.password")}
              placeholder={t<string>("auth.enterPassword")}
              {...rest}
            />
          )}
        />
        {errors.password1 && (
          <span>{<ErrorMessage value={errors.password1.message} />}</span>
        )}
      </div>
      <div>
        <Controller
          control={control}
          name="password2"
          render={({ field: { ref, ...rest } }) => (
            <LabelInput
              type="password"
              label={t<string>("auth.secondPassword")}
              placeholder={t<string>("auth.enterSecondPassword")}
              {...rest}
            />
          )}
        />
        {errors.password2 && (
          <span>{<ErrorMessage value={errors.password2.message} />}</span>
        )}
      </div>
      <div className={styles.tooltip}>
        <BaseTypography value={t<string>("auth.privacyPolicy")} />
        <span className={styles.tooltiptext}>
          <BaseTypography value={t<string>("auth.privacyPolicyText")} />
        </span>
      </div>
    </>
  );

  const registrationFooter = (
    <div className={styles.button}>
      <BaseButton type="submit"> {t<string>("auth.submit")} </BaseButton>
    </div>
  );
  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <BaseModal
        title={t<string>("header.registration")}
        body={registrationBody}
        footer={registrationFooter}
      />
    </form>
  );
};

export default Registration;
