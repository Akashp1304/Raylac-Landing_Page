

import FeatureCard from "./FeatureCard";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🔗",
      title: t("multi_chain_support"),
      description: t("multi_chain_description"),
    },
    {
      icon: "👀",
      title: t("watch_addresses"),
      description: t("watch_addresses_description"),
    },
    {
      icon: "🔐",
      title: t("enhanced_security"),
      description: t("enhanced_security_description"),
    },
    {
      icon: "⚙️",
      title: t("eip_7702_ready"),
      description: t("eip_7702_description"),
    },
    {
      icon: "🖼️",
      title: t("nfts"),
      description: t("nfts_description"),
    },
    {
      icon: "💱",
      title: t("l2_tokens_activity"),
      description: t("l2_tokens_activity_description"),
    },
    {
      icon: "🕵️‍♂️",
      title: t("impersonation_mode"),
      description: t("impersonation_mode_description"),
    },
    {
      icon: "🔑",
      title: t("hardware_wallets"),
      description: t("hardware_wallets_description"),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900">
          {t("features_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
