import { useTranslation } from "react-i18next";

export default function Info() {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:h-[67.5rem] relative">
      <div className="flex flex-col justify-center items-center gap-12 mt-6 mb-6 mx-2">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="bg-white/10 flex flex-col justify-start gap-8 relative lg:max-w-[39.68rem] lg:h-[35.81rem] items-start px-2 py-2 lg:px-10 lg:py-12">
            <div className="text-xl lg:text-3xl font-['Cattino'] leading-[48px] text-[#40a072] ml-1 relative lg:w-3/5">
              {t("infoTitle1")}
            </div>
            <div className="lg:text-xl leading-5  sm:leading-5:sm:leading-[44px] text-[#e9e9e9] self-stretch ml-1 relative h-[48.63%]">
              {t("infoSubTitle1")}
            </div>
          </div>
          <div className="bg-white/10 flex flex-col justify-start gap-6 relative lg:max-w-[39.68rem] lg:h-[35.81rem] items-start py-2 lg:pt-12 lg:pb-20 px-2 lg:px-10">
            <div className="text-xl lg:text-3xl font-['Cattino'] leading-[48px] text-[#40a072] ml-2 relative lg:w-3/5">
              {t("infoTitle2")}
            </div>
            <div className="lg:text-xl leading-5 sm:leading-[44px] text-[#e9e9e9] self-stretch lg:mr-8 relative h-[72.36%]">
              {t("infoSubTitle2")}
            </div>
          </div>
        </div>
        <div className="bg-white/10 flex flex-col justify-start gap-5 relative lg:max-w-[82.5rem] lg:h-[411px] items-start px-2 py-2 lg:px-12 lg:py-10">
          <div className="text-xl lg:text-3xl font-['Cattino'] leading-[48px] text-[#40a072] relative lg:w-[356px]">
            {t("infoTitle3")}
          </div>
          <div className="text-base lg:text-xl leading-5 sm:leading-[44px] text-[#e9e9e9] self-stretch mr-1 relative h-[71.25%]">
            {t("infoSubTitle3")}
          </div>
        </div>
      </div>
    </div>
  );
}
