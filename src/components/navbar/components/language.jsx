import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Language = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [language, setLanguage] = useState("")
  useEffect(() => {
    if (currentLanguage) {
      setLanguage(currentLanguage.split('-')[0])
    }
  }, [currentLanguage])
  return <div className="language">
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
}