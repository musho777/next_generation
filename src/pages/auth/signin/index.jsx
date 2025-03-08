import { useState } from 'react';
import { AuthForm } from "../../../components/authForm"
import { UIButton } from "../../../UI/UIButton"
import { UIInput } from "../../../UI/UIInput"

export const Singin = () => {
  const [login, setLogin] = useState("")
  return <AuthForm>
    <div className="sign_up">
      <UIInput label="Ваше имя" full />
      <UIInput full />
    </div>
    <div className="forgot_password">
      <a href="#">Forgot Password?</a>
    </div>
    <div className="sign_in_button">
      <UIButton label="Ваше имя" full />
    </div>
    <div className="sign_up_line" />
    <div className="login_type">
      <p>Register as a</p>
      <div className="login_type_button">
        <button>Teacher</button>
        <button>Donor</button>
      </div>
    </div>
  </AuthForm>
}