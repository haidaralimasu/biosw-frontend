import monkey from "../../../public/nature-monkey.png";
import rabit from "../../../public/rabit.png";
import lacoste from "../../../public/lacost.png";
import tartaruga from "../../../public/tartaruga.png";
import lion from "../../../public/lion.png";
import { useTranslation } from "react-i18next";

export default function HowToBuySection() {

  const { t } = useTranslation();

  return (
    <section id="howtobuy" className="w-full pb-10 xl:h-[165.875rem] relative my-[0%]">
      <img className="absolute bottom-0 w-full h-full object-fill" src={monkey} alt="monkey" />
      <h2 className="text-center pt-36 text-2xl lg:text-5xl font-['Cattino'] mb-10 lg:leading-[72px] text-green-300">How to Buy</h2>
      <h3 className="text-center text-xl lg:text-3xl font-['Cattino'] pb-10 lg:leading-[72px] text-[#ffffff]">{t('howToBuySubTitle')}</h3>
      <div className="flex justify-center">
        <div className="relative flex flex-col justify-center gap-10 max-w-[82.33rem] items-stretch mt-12">
          <img className="absolute top-2 md:-top-4 lg:top-8 right-1/4 w-20 md:w-28 2xl:top-0 2xl:w-40" src={rabit} alt="rabit" />
          <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-green-600 self-start lg:w-1/2">
            1. {t('howToBuy-title[0]')}
          </div>
          <div className="bg-white/10 flex flex-col justify-start lg:mb-16 lg:h-[302px] shrink-0 items-stretch lg:pt-16 pb-12 px-2 lg:px-12">
            <div className="text-base lg:text-3xl leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-1 h-full">
            {t('howToBuy-text[0]')}
            </div>
          </div>
          <div className="max-w-[82.33rem] relative">
          <img className="absolute top-6 md:-top-4 lg:top-8 right-1/4 w-20 md:w-28 2xl:top-0 2xl:w-40" src={tartaruga} alt="rabit" />
            <div className="text-2xl lg:text-5xl font-['Cattino'] mb-10 lg:leading-[72px] text-green-600 self-start lg:w-3/5">
              2. {t('howToBuy-title[1]')}
            </div>
            <div className="bg-white/10 flex flex-col justify-center lg:mb-16 lg:h-[339px] shrink-0 items-stretch px-2 lg:px-12">
              <div className="text-base lg:text-3xl leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-1 lg:h-[66.96%]">
              {t('howToBuy-text[1]')}
              </div>
            </div>
          </div>
          <div className="max-w-[82.33rem] relative">
          <img className="absolute top-10 md:-top-4 lg:top-8 right-1/4 w-24 md:w-36 2xl:top-0 2xl:w-40" src={lacoste} alt="rabit" />
            <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-green-600 mb-10 lg:mr-[426px]">
              3. {t('howToBuy-title[2]')}
            </div>
            <div className="bg-white/10 flex flex-col justify-start lg:mb-16 lg:h-[357px] shrink-0 items-stretch px-2 lg:px-12 lg:py-16">
              <div className="text-base lg:text-3xl leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-3 lg:h-[78.19%]">
              {t('howToBuy-text[2]')}
              </div>
            </div>
          </div>
          <div className="max-w-[82.33rem] relative">
          <img className="absolute top-4 md:-top-4 lg:top-8 right-1/4 w-20 md:w-28 2xl:top-0 2xl:w-40" src={lion} alt="rabit" />
          <div className="text-2xl lg:text-5xl font-['Cattino'] lg:leading-[72px] text-green-600 mb-10 ml-0 lg:mr-[426px]">
            4. {t('howToBuy-title[3]')}
          </div>
          <div className="bg-white/10 flex flex-col justify-center lg:h-[357px] shrink-0 items-stretch mx-0 lg:px-12">
            <div className="text-base lg:text-3xl leading-[30px] lg:leading-[56px] text-[#e9e9e9] mr-2 lg:h-[68.91%] px-2">
            {t('howToBuy-text[3]')}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
