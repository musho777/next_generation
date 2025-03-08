import "./styles.css"
import { AuthForm } from "../../../components/authForm"
import { UIInput } from "../../../UI/UIInput"
import { UIButton } from "../../../UI/UIButton"
export const Signup = () => {
  return <AuthForm >
    <div className="sign_up">
      <div className="JC_SB">
        <UIInput />
        <UIInput />
      </div>
      <UIInput full />
      <UIInput full />
      <UIInput full />
      <UIInput full />
      <UIInput full />
      <UIInput full />
      <UIInput full />
    </div>
    <div className="sign_up_button">
      <p>Register as a Donor</p>
      <UIButton />
    </div>
  </AuthForm>

}