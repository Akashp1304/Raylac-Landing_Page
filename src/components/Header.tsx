import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(i18n.language);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <Image src="/assets/Raylac logo.png" alt="Raylac Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-blue-600">Raylac</h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-900 font-semibold hover:text-blue-600 no-underline transition duration-200">
            {t("home")}
          </Link>
          <Link href="/support" className="text-gray-900 font-semibold hover:text-blue-600 transition duration-200">
            {t("support")}
          </Link>

          {/* GitHub & Twitter Icons */}
          <a href="https://github.com/raylac" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition duration-200">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/raylac" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition duration-200">
            <FaTwitter className="w-6 h-6" />
          </a>

          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaGlobe className="w-6 h-6" />
              {t("language")}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 animate-fadeIn">
                <button
                  className={`w-full px-4 py-3 text-left transition duration-300 ${activeLang === "en" ? "bg-blue-500 text-white" : "hover:bg-blue-100 text-gray-900"}`}
                  onClick={() => changeLanguage("en")}
                >
                   English
                </button>
                <button
                  className={`w-full px-4 py-3 text-left transition duration-300 ${activeLang === "ja" ? "bg-blue-500 text-white" : "hover:bg-blue-100 text-gray-900"}`}
                  onClick={() => changeLanguage("ja")}
                >
                  日本語
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
