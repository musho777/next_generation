import './styles.css'
import myImage from '../../assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuSvg, SignIn } from '../../assets/svg/svg';
import { useTranslation } from 'react-i18next';
import { Language } from './components/language';
import { Links } from './components/links';
export const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate()

  return <div className="navbar">
    <div>
      <div className="logo">
        <img src={myImage} alt="logo" />
        <p>Next Generation <br /> Armenia</p>
      </div>
      <Links />
      <Language />
      {location.pathname === "/signup" ?
        <div onClick={() => navigate("/")} className="sign_In">
          <SignIn />
          <p>{t("sign_in")}</p>
        </div> :
        <div onClick={() => navigate("/signup")} className="sign_In">
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