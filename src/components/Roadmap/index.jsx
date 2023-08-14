import guaxinin from "../../../public/guaxinin.png";
import galho from "../../../public/galho.png";
import bananeira from "../../../public/bananeira.png";
import espinho from "../../../public/porco-espinho.png";
import viado from "../../../public/viado.png";
import urso from "../../../public/urso.png";
import estrada from "../../../public/estrada.png";
import { useTranslation } from "react-i18next";


export default function Roadmap() {
  const { t } = useTranslation();

  return (
    <div
      id="roadmap"
      className="w-full h-[60rem]   relative px-2 pb-20 lg:h-[80rem] xl:h-[120rem]"
    >

      <h2 className="font-['Cattino'] text-center relative top-60 text-3xl text-green-500 md:text-5xl md:top-52 xl:text-7xl xl:top-80">
        Roadmap
      </h2>

      <img
        className="absolute w-[10rem] top-40 right-0 lg:w-[20rem] xl:w-[25rem] 2xl:w-[40rem]"
        alt="raccoon"
        src={guaxinin}
      />
      <div className="absolute left-0 top-0 w-[14rem] h-[12rem]   lg:w-[24rem] lg:h-[20rem] xl:w-[30rem] xl:h-[30rem] 2xl:w-[40rem] 2xl:h-[40rem]">
        <img
          className="z-10 absolute bottom-0 right-0 h-[10rem] lg:h-[18rem] xl:h-[25rem] 2xl:h-[35rem]"
          src={viado}
          alt="fag"
        />
        <img
          className="absolute top-0 left-0 lg:w-[15rem] 2xl:w-[40rem]"
          src={galho}
          alt="tree branches"
        />
        <img
          className="absolute bottom-0 left-0 lg:w-[20rem] 2xl:w-[40rem]"
          src={bananeira}
          alt="banana tree"
        />
        <img
          className="z-10 absolute w-[2rem] top-6 right-4 lg:w-[4rem] lg:top-3 xl:w-[7rem] xl:top-5 2xl:w-[9rem] 2xl:right-8"
          src={espinho}
          alt="Hedgehog"
        />
      </div>
      <img className="absolute -bottom-56 w-[7rem] lg:w-[12rem] xl:w-[20rem]" src={urso} alt="bear" />

      <div className="flex w-full h-full justify-center items-end lg:pb-40 xl:pb-80">
        <div className="container z-30 flex items-center   relative w-full h-[35rem] xl:h-[50rem]">
          <div className="absolute w-full flex justify-center">
            <img className="flex justify-center" src={estrada} alt="road" />
          </div>

          <div className="absolute top-48 space-y-2 sm:top-32 lg:top-20">
            <div className="bg-green-500 w-24 rounded-md sm:w-36 lg:w-48 xl:w-80 xl:rounded-2xl">
              <h3 className="p-1 text-xs text-center font-['Cattino'] sm:text-sm lg:text-xl lg:p-2 xl:text-4xl">
                 {t('Discovery')}
              </h3>
            </div>
            <div className="text-[7px] text-start sm:text-xs lg:text-base xl:text-2xl">
              <p>{t('Pre-sale Website')}</p>
              <p>{t('Pre-sale Live')}</p>
              <p>{t('10,000 Telegram Community')}</p>
              <p>{t('Media/PR')}</p>
              <p>{t('Social Channel Live')}</p>
            </div>
          </div>
          <div className="absolute bottom-16 left-[15%] space-y-2 sm:-bottom-12 lg:-bottom-48">
            <div className="bg-green-500 w-24 rounded-md sm:w-36 lg:w-48 xl:w-80 xl:rounded-2xl">
              <h3 className="p-1 text-xs text-center font-['Cattino'] sm:text-sm lg:text-xl lg:p-2 xl:text-4xl">
                 {t('Protection')}
              </h3>
            </div>
            <div className="text-[7px] text-start sm:text-xs lg:text-base xl:text-2xl">
              <p>{t('1st donation to Biodiversity')}</p>
              <p>{t('30,000 telegram community')}</p>
              <p>{t('Ambassador Campaigns')}</p>
              <p>{t('Full Website Lives')}</p>
              <p>{t('1st Launch on DEX/Cexs')}</p>
              <p>{t('Chain Bridge added')}</p>
              <p>{t('Airdrop 500M')}</p>
            </div>
          </div>
          <div className="absolute top-24 left-[35%] space-y-2 sm:top-0 lg:-top-28">
            <div className="bg-green-500 w-24 rounded-md sm:w-36 lg:w-48 xl:w-80 xl:rounded-2xl">
              <h3 className="p-1 text-xs text-center font-['Cattino'] sm:text-sm lg:text-xl lg:p-2 xl:text-4xl">
                 {t('Restoration')}
              </h3>
            </div>
            <div className="text-[7px] text-start sm:text-xs lg:text-base xl:text-2xl">
              <p>{t('NFT Release')}</p>
              <p>{t('CrowdFunding Website Live')} </p>
              <p>{t('2nd Donation to Biodiversity')}</p>
              <p>{t('60,000 Holders')}</p>
              <p>{t('60,000 community')}</p>
              <p>{t('Partnership')}</p>
              <p>{t('2nd Launch on DEX/CEX')} </p>
              <p>{t('Airdrop 500M')}</p>
            </div>
          </div>
          <div className="absolute bottom-44 left-[50%] space-y-2 sm:bottom-20 lg:bottom-0">
            <div className="bg-green-500 w-24 rounded-md sm:w-36 lg:w-48 xl:w-80 xl:rounded-2xl">
              <h3 className="p-1 text-xs text-center font-['Cattino'] sm:text-sm lg:text-xl lg:p-2 xl:text-4xl">
                 {t('Sustainability')}
              </h3>
            </div>
            <div className="text-[7px] text-start sm:text-xs lg:text-base xl:text-2xl">
              <p>{t('NFT MarketPlace')}</p>
              <p>{t('Climate Change Initiative Launch (Flora &')}</p>
              <p>{t('Fauna) 50,000 volunteers')}</p>
              <p>{t('200,000 Holders')}</p>
              <p>{t('Partnership')}</p>
              <p>{t('BIOSwap Live')} </p>
              <p>{t('Staking Live')}</p>
            </div>
          </div>
          <div className="absolute top-28 right-0 space-y-2 sm:-top-8 lg:-top-40">
            <div className="bg-green-500 w-24 rounded-md sm:w-36 lg:w-48 xl:w-80 xl:rounded-2xl">
              <h3 className="p-1 text-xs text-center font-['Cattino'] sm:text-sm lg:text-xl lg:p-2 xl:text-4xl">
                 {t('Education')}
              </h3>
            </div>
            <div className="text-[7px] text-start sm:text-xs lg:text-base xl:text-2xl">
              <p>{t('Academy with AI tools')}</p>
              <p>{t('BIOS Gaming (P2E with cause)')}</p>
              <p>{t('ZOO on Metaverse Live')}</p>
              <p>{t('5% token to Charities')}</p>
              <p>{t('500,000 holders')}</p>
              <p>{t('100,000 Volunteers')}</p>
              <p>{t('1B Market Cap')}</p>
              <p>{t('BIOS Protocol ( Continued......')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
