import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-700 text-white text-center py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="max-w-2xl mx-auto md:text-left">
          <h1 className="text-5xl font-bold mb-6">{t("heroTitle")}</h1>
          <p className="text-lg mb-8">{t("heroDescription")}</p>
          
          {/* Download Buttons with Logos */}
          <div className="flex justify-center md:justify-start gap-4">
            <button className="flex items-center gap-3 bg-white text-blue-600 py-3 px-6 rounded-full font-semibold shadow-lg 
              transition-transform transform hover:scale-110 active:scale-95 hover:bg-blue-100">
              <FaApple size={24} /> {t("downloadIos")}
            </button>
            
            <button className="flex items-center gap-3 bg-white text-purple-600 py-3 px-6 rounded-full font-semibold shadow-lg 
              transition-transform transform hover:scale-110 active:scale-95 hover:bg-purple-100">
              <FaGooglePlay size={24} /> {t("downloadAndroid")}
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative flex justify-center gap-6">
          <Image
            src="/assets/App main screen.png"
            alt="App Main Screen 1"
            width={200}
            height={600}
            className="rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-1"
            style={{ backgroundColor: "transparent", borderRadius: "30px" }}
          />
          <Image
            src="/assets/Multi-address demo.png"
            alt="App Main Screen 2"
            width={200}
            height={600}
            className="rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:-rotate-1"
            style={{ backgroundColor: "transparent", borderRadius: "30px" }}
          />
        </div>

      </div>
    </section>
  );
}
