import Cards from "./Cards";

import savana from "../../../public/animals-savana.svg";

import trustWallet from "../../../public/TrustWallet.png";
import uniswap from "../../../public/Uniswap_Logo_and_Wordmark.svg";
import metamask from "../../../public/metamask.png";
import pancake from "../../../public/pancakeSwap.png";
import okx from "../../../public/okx.png";
import okx2 from "../../../public/okxWallet.png";
import binance from "../../../public/binance-exchange.svg";
import binancechain from "../../../public/binance-chain.png";
import mexc from "../../../public/mexc.png";
import dxdx from "../../../public/dxdx.png";

export default function MeetTeam() {
  return (
    <div className="w-full h-[135rem] sm:h-[192rem] md 2xl:h-[120rem] relative mt-20 font-inter">
      <img
        alt="savana"
        className=" absolute bottom-0 object-fill w-full"
        src={savana}
      />
      <div className="lg:text-5xl text-3xl text-center font-['Cattino'] leading-[78px] capitalize text-green-400 w-full py-[6.94rem]">
        Meet The Team
      </div>
      <div className="flex justify-center mb-20">
        <Cards />
      </div>
      <div className="absolute w-full bottom-0 z-30 flex flex-col md:flex-row space-y-2 md:space-y-10 justify-center md:items-start md:justify-around gap-2 mb-5">
        <div className="space-y-4 2xl:space-y-8">
          <h3 className="text-center md:mb-12 pt-9 sm:text-xl lg:text-4xl 2xl:text-5xl text-green-500 font-medium">
            DEX LISTING
          </h3>
          <div className="flex justify-center gap-2 2xl:gap-6">
            <img
              className="w-32 lg:w-52 2xl:w-[20rem]"
              src={uniswap}
              alt="Logo Uniswap"
            />
            <img
              className="w-14 lg:w-24 2xl:w-[7rem]"
              src={okx2}
              alt="logo okx wallet"
            />
          </div>
          <div className="flex justify-center gap-2">
            <img
              className="w-24 lg:w-48 lg:h-14 2xl:w-[20rem]"
              src={pancake}
              alt="Logo PancakeSwap"
            />
            <img
              className="w-20 lg:w-36 lg:h-12 2xl:w-[10rem]"
              src={dxdx}
              alt="Logo PancakeSwap"
            />
          </div>
        </div>
        <div className="gap-2 md:pt-24 space-y-4 2xl:space-y-8">
          <div className="flex justify-center max-sm:items-center gap-2 2xl:gap-6">
            <img
              className="w-12 h-12 md:w-20 md:h-14 lg:w-24 2xl:w-[11rem] 2xl:h-28"
              src={binancechain}
              alt="Logo binance chain wallet"
            />
            <img
              className="md:h-8 w-24 lg:w-44 2xl:w-[18rem] 2xl:h-16 mt-5 2xl:mt-10"
              src={metamask}
              alt="Logo Metamask"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-28 lg:w-48 2xl:w-[23rem] mt-1"
              src={trustWallet}
              alt="Logo trust Wallet"
            />
          </div>
        </div>
        <div className="gap-2 space-y-4 2xl:space-y-8">
          <h3 className="text-center md:mb-12 sm:text-xl lg:text-4xl 2xl:text-5xl text-green-500 font-medium">
            CEX LISTING
          </h3>
          <div className="flex justify-center gap-2 2xl:gap-6">
            <img
              className="w-20  lg:w-40 2xl:w-[14rem]"
              src={mexc}
              alt="logo mexc global"
            />
            <img
              className="w-16 md:w-20 lg:w-28 2xl:w-[11rem]"
              src={okx}
              alt="Logo Okx Wallet"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-28 lg:w-56 2xl:w-[20rem]"
              src={binance}
              alt="Logo binance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
