import rosto from "../../../public/rosto-menina.png";
import fox from "../../../public/fox.png";
import animals from "../../../public/animals.png";
import { useTranslation } from "react-i18next";


export default function Cards() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col 2xl:flex-row justify-between w-4/5 sm:w-2/3 2xl:w-full max-w-[1520px] items-center z-10 lg:mx-[7rem] xl:mx-14 gap-6">
      <div className="bg-[#203d41] flex flex-col justify-start sm:gap-6 items-stretch pt-8 sm:pb-16 px-8 2xl:h-[50rem] 2xl:w-[100rem]">
        <img
          alt="face"
          src={rosto}
          className="min-h-0 min-w-0 self-center mb-3"
        />
        <div className="text-3xl font-['Cattino'] leading-[42px] capitalize text-white justify-start ml-1 mr-4">
          {t('meetTheTeam-cards-name[0]')}
          <br />
          <div className="text-sm leading-[21px] capitalize text-white contents">
          {t('meetTheTeam-cards-title[0]')}
          </div>
        </div>
        <div className="sm:text-xl sm:leading-[44px] text-[#e9e9e9] self-stretch ml-3 h-[48.38%]">
        {t('meetTheTeam-cards-description[0]')}
        </div>
      </div>
      <div className="bg-[#203d41] flex flex-col justify-start gap-2 sm:gap-6 items-stretch pt-8 md:pb-16 px-8 2xl:h-[50rem] 2xl:w-[100rem]">
        <img 
          alt="fox"
          src={fox}
          className="min-h-0 min-w-0 self-center mb-3"
        />
        <div className="text-xl sm:text-3xl font-['Cattino'] sm:leading-[42px]  capitalize text-white justify-start ml-1 mr-4">
        {t('meetTheTeam-cards-name[1]')}
          <br />
          <div className="text-sm leading-[21px] capitalize text-white contents">
          {t('meetTheTeam-cards-title[1]')}
          </div>
        </div>
        <div className="sm:text-xl sm:leading-[44px] text-[#e9e9e9] h-[48.38%] mx-1">
        {t('meetTheTeam-cards-description[1]')}
        </div>
      </div>
      <div className="bg-[#203d41] flex flex-col justify-start gap-2 sm:gap-6 items-stretch pt-8 sm:pb-16 px-8 2xl:h-[50rem] 2xl:w-[100rem]">
        <img
          alt="animals"
          src={animals}
          className="min-h-0 min-w-0 self-center mb-6"
        />
        <div className="text-3xl font-['Cattino'] leading-[42px] capitalize text-white justify-start ml-1 mr-4">
        {t('meetTheTeam-cards-name[2]')}
          <br />
          <div className="text-sm leading-[21px] capitalize text-white contents">
          {t('meetTheTeam-cards-title[2]')}
          </div>
        </div>
        <div className="sm:text-xl sm:leading-[44px] text-[#e9e9e9] h-[48.38%] mx-1">
        {t('meetTheTeam-cards-description[2]')}
        </div>
      </div>
    </div>
  );
}
