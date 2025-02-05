import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "ja") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-4 py-2 rounded ${i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ja")}
        className={`px-4 py-2 rounded ${i18n.language === "ja" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
      >
        日本語
      </button>
    </div>
  );
}
