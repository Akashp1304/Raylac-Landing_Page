import React from "react";
import { useTranslation } from "react-i18next";

const BigCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div
      className="bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 rounded-lg shadow-lg p-8 flex items-center space-x-6 h-[300px] transform transition-all hover:scale-105 hover:shadow-xl"
      style={{ borderRadius: "30px" }}
    >
      <div className="text-6xl">{icon}</div>
      <div className="text-white flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default function BigCards() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900">
          {t("big_cards_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <BigCard
            icon="🔔"
            title={t("big_card_1_title")}
            description={t("big_card_1_description")}
          />
          <BigCard
            icon="💰"
            title={t("big_card_2_title")}
            description={t("big_card_2_description")}
          />
        </div>
      </div>
    </section>
  );
}
