import Table from "./Table";
import { useTranslation } from "react-i18next";


export default function TokenInfo() {
  const { t } = useTranslation();

  return (
    <div className="w-full lg:h-[110.87rem] overflow-hidden relative py-10 font-inter">
      <div className="whitespace-nowrap text-3xl lg:text-5xl font-['Cattino'] leading-[100px] text-green-400 relative w-full flex justify-center lg:mt-10">
        Token Information{" "}
      </div>
      <div className="flex flex-col md:flex-row justify-center max-lg:space-y-7 lg:space-x-64 lg:mt-24 px-4">
        <div>
          <div className="text-base sm:text-xl lg:text-4xl font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            {t('tokenInformation-name')} : BIOSW
          </div>
          <div className="text-base md:text-xl lg:text-4xl font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
          {t('tokenInformation-tokenSumbol')} : BIOSW{" "}
          </div>
          <div className="text-base md:text-xl lg:text-4xl font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
          {t('tokenInformation-blockchain')}
          </div>
        </div>
        <div className="">
          <div className="text-base md:text-xl lg:text-4xl font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
          {t('tokenInformation-tokenSales')}
          </div>
          <div className="text-base md:text-xl lg:text-4xl font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            100B BIOSW
          </div>
          <div className="text-base md:text-xl lg:text-4xl font-medium lg:leading-[84px] text-[#e9e9e9] relative w-full">
            {t('tokenInformation-presale')} : 70B
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[10%] lg:mt-32 w-full lg:mb-10">
        <Table />
      </div>
    </div>
  );
}
