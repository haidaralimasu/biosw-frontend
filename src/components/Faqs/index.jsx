import { useTranslation } from "react-i18next";

export default function Faqs() {
  const { t } = useTranslation();

  return (
    <section className="">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-3xl my-10 font-['Cattino'] text-center font-semibold text-green-400 lg:text-5xl ">Frequently Asked Questions (FAQs)</h1>
        <h2 className="text-2xl font-['Cattino'] text-center font-semibold text-white  lg:text-3xl ">
          {t("faq-title")}
        </h2>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="inline-block p-3 text-white rounded-lg">
                <img className="w-6" src="meme-svg/12 1.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-1")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer1")}
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white rounded-lg">
            <img className="w-6" src="meme-svg/deer 1.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-2")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-2")}
              </p>
            </div>
          </div>

          <div>
          <div className="inline-block p-3 text-white rounded-lg">
            <img className="w-6" src="meme-svg/fox 1.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-3")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-3")}
              </p>
              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-3-tier1")}
              </p>
              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-3-tier2")}
              </p>
              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-3-tier3")}
              </p>
              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-3-tier4")}
              </p>
            </div>
          </div>

          <div>
          <div className="inline-block p-3 text-white rounded-lg">
            <img className="w-6" src="meme-svg/Group 100.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-4")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-4")}
              </p>
            </div>
          </div>
          <div>
          <div className="inline-block p-3 text-white rounded-lg">
            <img className="w-6" src="meme-svg/Group 109.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-5")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-5")}
              </p>
            </div>
          </div>

          <div>
          <div className="inline-block p-3 text-white rounded-lg">
            <img className="w-6" src="meme-svg/Group 110.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-6")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-6")}
              </p>
            </div>
          </div>

          <div>
          <div className="inline-block p-3 text-white rounded-lg">
            <img className="w-8" src="meme-svg/Group 111.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-7")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-7")}
              </p>
            </div>
          </div>
          <div>
          <div className="inline-block p-3 text-white rounded-lg">
            <img className="w-6" src="meme-svg/Group 112.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-8")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-8")}
              </p>
            </div>
          </div>
          <div>
          <div className="inline-block p-3 text-white rounded-lg">
            <img className="w-6" src="meme-svg/owle 1.svg" alt="porco espinho" />
            </div>

            <div>
              <h1 className="text-xl font-['Cattino'] font-semibold text-white ">
                {t("faq-question-9")}
              </h1>

              <p className="mt-2 font-semibold text-sm text-white ">
                {t("faq-answer-9")}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-center font-bold text-sm text-white ">
            {t("faq-text-finally")}
          </p>
        </div>
      </div>
    </section>
  );
}
