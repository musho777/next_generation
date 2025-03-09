import "../styles.css"
import { AuthForm } from "../../../components/authForm"
import { UIInput } from "../../../UI/UIInput"
import { UIButton } from "../../../UI/UIButton"
import { UISelect } from '../../../UI/UISelect'
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useUserContext } from "../../../context/UserProvider"
import MyModal from "../../../components/modal"
import { useNavigate } from "react-router-dom"
import { UIPhone } from "../../../UI/UIPhone"
export const Signup = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState("")
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("")
  const [country, setСountry] = useState("")
  const [confirm_password, setConfirm_Password] = useState()
  const [phone, setPhone] = useState("")
  const [phoneCode, setPhoneCode] = useState("+1")


  const { t } = useTranslation();
  const { registerUser, error, loading } = useUserContext();
  const [openModal, setOpenModal] = useState(false)
  const [errors, setErrors] = useState({});

  const navigation = useNavigate()



  const validate = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!lastName) errors.lastName = "Last name is required"
    if (!country) errors.country = "Country is required"
    if (!region) errors.region = "Regtion is required"
    if (!phone) errors.phone = "Phone is required"
    else if (!/^[0-9]+$/.test(phone)) {
      errors.phone = "Phone number must only contain digits";
    } else if (phone.length < 7) {
      errors.phone = "Phone number must have at least 7 digits";
    }
    if (!city) errors.city = "City, Village is required"
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
    const number = `${phoneCode} ${phone}`
    e.preventDefault();
    if (validate()) {
      registerUser({
        email,
        password,
        country,
        name,
        lastName,
        region,
        city,
        phone: number,
      }).then((e) => {
        setOpenModal(true)
      })
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
        <UIPhone
          error={errors.phone}
          phoneCode={phoneCode}
          setPhoneCode={(e) => setPhoneCode(e)}
          phone={phone}
          setPhone={(e) => setPhone(e)}
        />
        <UISelect
          value={country}
          setValue={(e) => setСountry(e)}
          error={errors.country}
          label={errors?.country ?? t("country")}
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
      <div className="error_message">{t(error)}</div>
      <div className="sign_up_button">
        <p>{t("register_as_a_donor")}</p>
        <div>
          <UIButton loading={loading} type="submit" title={t("sign_in")} full />
        </div>
      </div>
    </form>
    <MyModal isOpen={openModal} onClose={() => setOpenModal(false)} >
      <div>
        <UIButton onClick={() => navigation("/")} title={t("sign_in")} full />
      </div>
    </MyModal>
  </AuthForm>

}