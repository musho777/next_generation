import { useEffect, useState } from 'react';
import './styles.css'
import myImage from '../../assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuSvg, SignIn } from '../../assets/svg/svg';
import { useTranslation } from 'react-i18next';
export const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()
  const currentLanguage = i18n.language;
  const [language, setLanguage] = useState("")
  useEffect(() => {
    if (currentLanguage) {
      setLanguage(currentLanguage.split('-')[0])
    }
  }, [currentLanguage])
  return <div className="navbar">
    <div>
      <div className="logo">
        <img src={myImage} alt="logo" />
        <p>Next Generation <br /> Armenia</p>
      </div>
      <div className="navbar_links">
        <a
          href="/#Teachers"
          className={(location.hash === "#Teachers" || location.hash === "") ? "navbar_active_link" : ""}
        >
          {t("teachers")}
        </a>
        <a
          href="/#Donors"
          className={location.hash === "#Donors" ? "navbar_active_link" : ""}
        >
          {t("donors")}
        </a>

        <a
          href="/#AboutUs"
          className={location.hash === "#AboutUs" ? "navbar_active_link" : ""}
        >
          {t("about_us")}
        </a>
        <a
          href="/#ContactUs"
          className={location.hash === "#ContactUs" ? "navbar_active_link" : ""}
        >
          {t("contact_us")}
        </a>
        <a
          href="/#Blog"
          className={location.hash === "#Blog" ? "navbar_active_link" : ""}
        >
          {t("blog")}
        </a>
      </div>
      <div className="language">
        <p onClick={() => {
          i18n.changeLanguage('en')
          setLanguage("en")
        }} className={language == "en" ? "activeLanguage" : ""}>Eng</p>
        <p onClick={() => {
          i18n.changeLanguage('am')

          setLanguage("am")
        }} className={language == "am" ? "activeLanguage" : ""}>Հայ</p>
        <p onClick={() => {
          i18n.changeLanguage('ru')
          setLanguage("ru")
        }} className={language == "ru" ? "activeLanguage" : ""}>Рус</p>
      </div>
      {location.pathname == "/signin" ?
        <div onClick={() => navigate("/")} className="sign_In">
          <SignIn />
          <p>{t("sign_in")}</p>
        </div> :
        <div onClick={() => navigate("/signin")} className="sign_In">
          <SignIn />
          <p>{t("sign")}</p>
        </div>
      }
      <div className="menu">
        <MenuSvg />
      </div>
    </div>
  </div>
}