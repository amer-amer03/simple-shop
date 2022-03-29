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

const passwordValidationRegex =
  /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Must be valid email")
      .required("This field is required"),
    phone: yup.string().required("This field is required"),
    password1: yup
      .string()
      .matches(
        passwordValidationRegex,
        "Password must contain one uppercase, one lowercase, one number and one special case character"
      )
      .required("This field is required"),
    password2: yup
      .string()
      .oneOf([yup.ref("password1"), null], "Passwords must match"),
  })
  .required();

const Registration: FC = (): JSX.Element => {
  const dispatch = useDispatch();

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
  const onSubmit = (data: IRegistrationData) => {
    const userData: IUserData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password1,
    };
    dispatch(registerUser(userData));
    dispatch(hideModal());
    dispatch(addNotification("You have registered successfully"));
  };
  const registrationBody = (
    <>
      <div>
        <Controller
          control={control}
          name="name"
          render={({ field: { ref, ...rest } }) => (
            <LabelInput
              label="Full name"
              placeholder="Please enter your full name"
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
              label="Email"
              placeholder="Please enter your email address"
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
              label="Phone number"
              placeholder="Please enter your phone number"
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
              label="Password"
              type="password"
              placeholder="Please enter a password"
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
              label="Password"
              type="password"
              placeholder="Please enter a password"
              {...rest}
            />
          )}
        />
        {errors.password2 && (
          <span>{<ErrorMessage value={errors.password2.message} />}</span>
        )}
      </div>
      <div className={styles.tooltip}>
        Privacy policy
        <span className={styles.tooltiptext}>
          <BaseTypography
            value="By clicking submit you agree to our privacy policy and terms and
          conditions"
          />
        </span>
      </div>
    </>
  );

  const registrationFooter = (
    <div className={styles.button}>
      <BaseButton type="submit" value="submit" />
    </div>
  );
  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <BaseModal
        title="registration"
        body={registrationBody}
        footer={registrationFooter}
      />
    </form>
  );
};

export default Registration;
