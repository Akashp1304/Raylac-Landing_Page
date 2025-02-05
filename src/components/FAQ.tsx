import { useState } from "react";
import { useTranslation } from "react-i18next";

const faqs = [
  { questionKey: "faq_q1", answerKey: "faq_a1" },
  { questionKey: "faq_q2", answerKey: "faq_a2" },
  { questionKey: "faq_q3", answerKey: "faq_a3" },
  { questionKey: "faq_q4", answerKey: "faq_a4" },
  { questionKey: "faq_q5", answerKey: "faq_a5" }
];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t("faq_title")}</h2>
        <div className="max-w-3xl mx-auto ">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 ">
              <button
                className="w-full text-left flex justify-between items-center bg-gradient-to-br from-blue-500 to-purple-700 text-white text-center py-20 py-4 px-6 bg-white shadow-sm rounded-lg hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-800 bg">{t(faq.questionKey)}</span>
                <span className="text-black">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <p className="text-white-800 px-6 py-4 bg-gradient-to-br from-blue-500 to-purple-700 text-white text-center py-20 text-white shadow-sm rounded-lg">
                  {t(faq.answerKey)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
