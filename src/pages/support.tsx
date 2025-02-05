import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaTelegramPlane, FaDiscord, FaQuestionCircle } from "react-icons/fa";

export default function Support() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 to-purple-800 text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center max-w-lg w-full border border-white/20 transform transition-all hover:scale-105">
          <h1 className="text-4xl font-bold mb-4">{t("support_title")}</h1>
          <p className="text-lg text-gray-300 mb-6">{t("support_description")}</p>


          <div className="mb-6">
            <h2 className="text-lg font-semibold">{t("email")}</h2>
            <a
              href="mailto:support@raylac.com"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
            >
              <FaEnvelope /> support@raylac.com
            </a>
          </div>

       
          <div className="mb-6">
            <h2 className="text-lg font-semibold">{t("telegram")}</h2>
            <a
              href="https://t.me/dantehrnai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
            >
              <FaTelegramPlane /> @dantehrnai
            </a>
          </div>

         
         
        </div>

        
        <div className="mt-6">
          <a
            href="https://t.me/raylac_support"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105"
          >
            💬 {t("live_chat")}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
