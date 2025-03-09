import "../styles.css"
import { AuthForm } from "../../../components/authForm"
import { UIInput } from "../../../UI/UIInput"
import { UIButton } from "../../../UI/UIButton"
import { UISelect } from '../../../UI/UISelect'
import { useState } from "react"
import { useTranslation } from "react-i18next"
export const Signup = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('')
  const [errors, setErrors] = useState({});
  const [city, setCity] = useState("")
  const [school, setSchool] = useState("")
  const [subject, setSubject] = useState("")
  const [grade, setGrade] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_Password] = useState()
  const { t } = useTranslation();



  const validate = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!lastName) errors.lastName = "Last name is required"
    if (!region) errors.region = "Regtion is required"
    if (!city) errors.city = "City, Village is required"
    if (!school) errors.school = "School is required"
    if (!subject) errors.subject = "Subject is required"
    if (!grade) errors.grade = "Grade is required"
    if (!password) errors.password = "Password is required"
    if (!confirm_password) errors.confirm_password = "Confirm password is required"
    else if (password !== confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
    }
  };

  return <AuthForm description={t("quick_and_easy")} title={t("sign_up")}>
    <form onSubmit={handleSubmit}>
      <div className="sign_up">
        <div className="JC_SB">
          <UIInput
            value={name}
            setValue={(e) => setName(e)}
            error={errors.name}
            label={errors.name ?? t("name")}
          />
          <UIInput
            value={lastName}
            setValue={(e) => setLastName(e)}
            error={errors.lastName}
            label={errors.lastName ?? t("last_name")}
          />
        </div>
        <UIInput
          value={email}
          setValue={(e) => setEmail(e)}
          error={errors.email}
          label={errors.email ?? t("email")}
          type="email"
        />
        <UISelect
          value={region}
          setValue={(e) => setRegion(e)}
          error={errors.region}
          label={errors.region ?? t("region")}
        />
        <UISelect
          value={city}
          setValue={(e) => setCity(e)}
          error={errors.city}
          label={errors.city ?? t("city")}
        />
        <UISelect
          value={school}
          setValue={(e) => setSchool(e)}
          error={errors.school}
          label={errors.school ?? t("school")}
        />
        <UISelect
          value={subject}
          setValue={(e) => setSubject(e)}
          error={errors.school}
          label={errors.school ?? t("subject")}
        />
        <UISelect
          value={grade}
          setValue={(e) => setGrade(e)}
          error={errors.grade}
          label={errors.grade ?? t("grade")}
        />
        <UISelect
          value={region}
          setValue={(e) => setRegion(e)}
          error={errors.region}
          label={errors.region ?? t("region")}
        />
        <UIInput
          value={password}
          setValue={(e) => setPassword(e)}
          error={errors.password}
          label={errors.password ?? t("password")}
          type="password"
        />
        <UIInput
          value={confirm_password}
          setValue={(e) => setConfirm_Password(e)}
          error={errors.confirm_password}
          label={errors.confirm_password ?? t("confirm_Password")}
          type="password"
        />
      </div>
      <div className="sign_up_button">
        <p>{t("register_as_a_donor")}</p>
        <UIButton title={"ok"} type="submit" />
      </div>
    </form>
  </AuthForm>

}