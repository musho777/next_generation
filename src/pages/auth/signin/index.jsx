import { useState } from 'react';
import { AuthForm } from "../../../components/authForm"
import { UIButton } from "../../../UI/UIButton"
import { UIInput } from "../../../UI/UIInput"
import { useTranslation } from 'react-i18next';

export const Singin = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  console.log(t)

  const validateSignIn = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSignIn()) {
    }
  };

  return <AuthForm description={t("welcome_back")} title={t("sign_in")}>
    <form onSubmit={handleSubmit}>
      <div className="sign_up">
        <UIInput
          value={email}
          setValue={(e) => setEmail(e)}
          label={t("email")}
          error={errors.email}
        />
        <UIInput
          value={password}
          setValue={(e) => setPassword(e)}
          label={t("password")}
          type='password'
          error={errors.password}
        />
      </div>
      <div className="forgot_password">
        <a href="#">{t("forgot_password")}</a>
      </div>
      <div className="sign_in_button">
        <UIButton title={t("sign_in")} full />
      </div>
      <div className="sign_up_line" />
      <div className="login_type">
        <p>{t("register_as_a")}</p>
        <div className="login_type_button">
          <button>{t("teacher")}</button>
          <button>{t("donor")}</button>
        </div>
      </div>
    </form>
  </AuthForm>
}