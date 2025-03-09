import "../styles.css"
import { AuthForm } from "../../../components/authForm"
import { UIInput } from "../../../UI/UIInput"
import { UIButton } from "../../../UI/UIButton"
import { UISelect } from '../../../UI/UISelect'
import { useEffect, useState } from "react"
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


  const { t, i18n } = useTranslation();
  const { registerUser, error, loading } = useUserContext();
  const [openModal, setOpenModal] = useState(false)
  const [errors, setErrors] = useState({});

  const navigation = useNavigate()


  const countries = [
    { value: "USA", label: "United States" },
    { value: "ARM", label: "Armenia" },
    { value: "CAN", label: "Canada" },
    { value: "IND", label: "India" },
    { value: "AUS", label: "Australia" },
    { value: "UK", label: "United Kingdom" },
  ];

  const regions = [
    { value: "NA", label: "North America" },
    { value: "EU", label: "Europe" },
    { value: "AS", label: "Asia" },
    { value: "AF", label: "Africa" },
    { value: "OC", label: "Oceania" },
    { value: "SA", label: "South America" },
    { value: "ME", label: "Middle East" },
  ];

  const cities = [
    { value: "Yerevan", label: "Yerevan" },
    { value: "Paris", label: "Paris" },
    { value: "NewYork", label: "New York" },
    { value: "Tokyo", label: "Tokyo" },
    { value: "London", label: "London" },
    { value: "Sydney", label: "Sydney" },
  ];

  // const validate = () => {
  //   const errors = {};
  //   if (!name) errors.name = "Name is required";
  //   if (!lastName) errors.lastName = "Last name is required"
  //   if (!country) errors.country = "Country is required"
  //   if (!region) errors.region = "Regtion is required"
  //   if (!phone) errors.phone = "Phone is required"
  //   else if (!/^[0-9]+$/.test(phone)) {
  //     errors.phone = "Phone number must only contain digits";
  //   } else if (phone.length < 7) {
  //     errors.phone = "Phone number must have at least 7 digits";
  //   }
  //   if (!city) errors.city = "City, Village is required"
  //   if (!password) errors.password = "Password is required"
  //   else if (password.length < 8) {
  //     errors.password = "Password must have at least 8 characters";
  //   }
  //   if (!confirm_password) errors.confirm_password = "Confirm password is required"
  //   else if (password !== confirm_password) {
  //     errors.confirm_password = "Passwords do not match";
  //   }
  //   if (!email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = "Email is invalid";
  //   }
  //   setErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };


  const validate = () => {
    const errors = {};

    if (!name) errors.name = t("nameRequired");
    if (!lastName) errors.lastName = t("lastNameRequired");
    if (!country) errors.country = t("countryRequired");
    if (!region) errors.region = t("regionRequired");
    if (!phone) errors.phone = t("phoneRequired");
    else if (!/^[0-9]+$/.test(phone)) {
      errors.phone = t("phoneInvalid");
    } else if (phone.length < 7) {
      errors.phone = t("phoneLength");
    }
    if (!city) errors.city = t("cityRequired");
    if (!password) errors.password = t("passwordRequired");
    else if (password.length < 8) {
      errors.password = t("passwordLength");
    }
    if (!confirm_password) errors.confirm_password = t("confirmPasswordRequired");
    else if (password !== confirm_password) {
      errors.confirm_password = t("passwordMismatch");
    }
    if (!email) {
      errors.email = t("emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = t("emailInvalid");
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

  useEffect(() => {
    if (Object.values(errors).length > 0) {
      validate();
    }
  }, [i18n.language]);

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
          option={countries}
          setValue={(e) => setСountry(e)}
          error={errors.country}
          label={errors?.country ?? t("country")}
        />
        <UISelect
          value={region}
          option={regions}
          setValue={(e) => setRegion(e)}
          error={errors.region}
          label={errors.region ?? t("region")}
        />
        <UISelect
          value={city}
          option={cities}
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