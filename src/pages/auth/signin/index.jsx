import { useState } from 'react';
import { AuthForm } from "../../../components/authForm";
import { UIButton } from "../../../UI/UIButton";
import { UIInput } from "../../../UI/UIInput";
import { useTranslation } from 'react-i18next';

export const Singin = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const mockUser = {
    email: "test@example.com",
    password: "password123",
  };

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

  const mockLoginRequest = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === mockUser.email && password === mockUser.password) {
          resolve({
            message: "Login successful",
            token: "mock-jwt-token-123456",
          });
        } else {
          reject({ message: "invalid_credentials" });
        }
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (validateSignIn()) {
      setIsLoading(true);
      try {
        const response = await mockLoginRequest(email, password);
        console.log(response.message); // Handle successful login response
        // Redirect to another page or update state here
      } catch (error) {
        setErrorMessage(error.message); // Handle error
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <AuthForm description={t("welcome_back")} title={t("sign_in")}>
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
            type="password"
            error={errors.password}
          />
        </div>
        <div className="forgot_password">
          <a href="#">{t("forgot_password")}</a>
        </div>
        <div className="error_message">{t(errorMessage)}</div>
        <div className="sign_in_button">
          <UIButton loading={isLoading} type="submit" title={t("sign_in")} full disabled={isLoading} />
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
  );
};
