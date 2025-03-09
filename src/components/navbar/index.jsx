import { useState } from 'react';
import './styles.css'
import myImage from '../../assets/images/logo.png';
import { useLocation } from 'react-router-dom';
import { MenuSvg, SignIn } from '../../assets/svg/svg';
export const Navbar = () => {
  const [language, setLanguage] = useState("en")
  const location = useLocation();
  return <div className="navbar">
    <div>
      <div className="logo">
        <img src={myImage} alt="logo" />
        <p>Next Generation <br /> Armenia</p>
      </div>
      <div className="navbar_links">
        <a
          href="/#Teachers"
          className={location.hash === "#Teachers" ? "navbar_active_link" : ""}
        >
          Teachers
        </a>
        <a
          href="/#Donors"
          className={location.hash === "#Donors" ? "navbar_active_link" : ""}
        >
          Donors
        </a>

        <a
          href="/#AboutUs"
          className={location.hash === "#AboutUs" ? "navbar_active_link" : ""}
        >
          About us
        </a>
        <a
          href="/#ContactUs"
          className={location.hash === "#ContactUs" ? "navbar_active_link" : ""}
        >
          Contact us
        </a>
        <a
          href="/#Blog"
          className={location.hash === "#Blog" ? "navbar_active_link" : ""}
        >
          Blog
        </a>
      </div>
      <div className="language">
        <p onClick={() => setLanguage("en")} className={language == "en" ? "activeLanguage" : ""}>Eng</p>
        <p onClick={() => setLanguage("am")} className={language == "am" ? "activeLanguage" : ""}>Հայ</p>
        <p onClick={() => setLanguage("ru")} className={language == "ru" ? "activeLanguage" : ""}>Рус</p>
      </div>
      <div className="sign_In">
        <SignIn />
        <p>Sign In</p>
      </div>
      <div className="menu">
        <MenuSvg />
      </div>
    </div>
  </div>
}