import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const Links = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return <div className="navbar_links">
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
}