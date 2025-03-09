import { useState } from 'react';
import { AuthForm } from "../../../components/authForm"
import { UIButton } from "../../../UI/UIButton"
import { UIInput } from "../../../UI/UIInput"

export const Singin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})


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

  return <AuthForm>
    <form onSubmit={handleSubmit}>
      <div className="sign_up">
        <UIInput
          value={email}
          setValue={(e) => setEmail(e)}
          label="Email"
          error={errors.email}
        />
        <UIInput
          value={password}
          setValue={(e) => setPassword(e)}
          label="Password"
          type='password'
          error={errors.password}
        />
      </div>
      <div className="forgot_password">
        <a href="#">Forgot Password?</a>
      </div>
      <div className="sign_in_button">
        <UIButton full label="Ваше имя" />
      </div>
      <div className="sign_up_line" />
      <div className="login_type">
        <p>Register as a</p>
        <div className="login_type_button">
          <button>Teacher</button>
          <button>Donor</button>
        </div>
      </div>
    </form>
  </AuthForm>
}