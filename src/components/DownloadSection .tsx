import { useTranslation } from "react-i18next";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function DownloadSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-700 text-white py-16 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("Download Raylac to Get Started")}</h2>
        {/* <p className="text-lg mb-8">{t("downloadDescription")}</p> */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://play.google.com/store/apps/details?id=raylac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-blue-600 py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105 no-underline decoration-none"
          >
            <FaGooglePlay size={24} /> {t("downloadAndroid")}
          </a>
          <a
            href="https://apps.apple.com/app/raylac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-purple-600 py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105 no-underline decoration-none"
          >
            <FaApple size={24} /> {t("downloadIos")}
          </a>
        </div>
      </div>
    </section>
  );
}
