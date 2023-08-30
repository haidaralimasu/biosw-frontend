import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import twitter from "../../../public/twitter.png";
import telegran from "../../../public/telegram.png";
import facebook from "../../../public/facebook.png";
import youtube from "../../../public/youtube.png";
import medium from "../../../public/medium.png";

import eth from "../../../public/img/WalletConnection/eth.png";
import bnb from "../../../public/img/WalletConnection/bnb.png";
import usdt from "../../../public/img/WalletConnection/usdt.png";
import biosw from "../../../public/BIOSW 1.svg";
import suricato from "../../../public/11 1-min.png";
import bird from "../../../public/img/WalletConnection/bird-01 1.png";
import useCountdown from "../../hooks/useCountdown";
import { notifyError, notifySuccess } from "../../notifications";

import BSCSale from "../../abis/BSCSale.json";
import USDT from "../../abis/USDT.json";
import ETHSale from "../../abis/ETHSale.json";

import { useTranslation } from "react-i18next";

import {
  useBNBToBIOSW,
  useUSDTToBIOSW,
  useUsdtPrice,
  useETHToBIOSW,
  useGetInvestmentByAddress,
  useTotalRaisedUSDT,
} from "../../hooks/useContract";

import { useEthers, BSCTestnet, Mainnet, Sepolia } from "@usedapp/core";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";
import {
  bioswBSCSale,
  bioswETHSale,
  bscRPCURL,
  ethusdtAddress,
  usdtAddress,
} from "../../config";
import { ethers } from "ethers";

export default function CardPayment() {
  const [day, hour, minute, second] = useCountdown("Sep 11, 2023 00:00:00");

  const { t } = useTranslation();

  const [bnbAmountToPay, setBNBAmountToPay] = useState(0);
  const [usdtAmountToPay, setUsdtAmountToPay] = useState(0);
  const [ethAmountToPay, setETHAmountToPay] = useState(0);

  const [paymentMode, setPaymentMode] = useState("bnb");

  const { account, activate, deactivate, chainId, switchNetwork } = useEthers();
  const usdtPrice = useUsdtPrice();
  const formattedUsdtPrice = usdtPrice ? usdtPrice.toString() : 0;
  const bnbToBiosw = useBNBToBIOSW(bnbAmountToPay.toString());
  const formattedBNBToBIOSW = bnbToBiosw ? bnbToBiosw.toString() : 0;
  const usdtToBiosW = useUSDTToBIOSW(usdtAmountToPay.toString());
  const formattedUsdtToBiosw = usdtToBiosW ? usdtToBiosW.toString() : 0;
  const ethToBiosw = useETHToBIOSW(ethAmountToPay.toString());
  const formattedETHToBIOSW = ethToBiosw ? ethToBiosw.toString() : 0;

  const bscSaleInterface = new ethers.utils.Interface(BSCSale);
  const busdtInterface = new ethers.utils.Interface(USDT);
  const ethSaleInterface = new ethers.utils.Interface(ETHSale);

  const totalRaisedUSDT = useTotalRaisedUSDT();
  const formattedTotalRaisedUSDT = totalRaisedUSDT
    ? totalRaisedUSDT.toString()
    : 0;

  const investmentByAddress = useGetInvestmentByAddress(
    account ? account.toString() : ethers.constants.AddressZero
  );

  const formattedInvestmentByAddress = investmentByAddress
    ? investmentByAddress.toString()
    : 0;

  const handleChangeBNB_BIOSW = (event) => {
    setBNBAmountToPay(event.target.value);
  };
  const handleChangeUSDT_BIOSW = (event) => {
    setUsdtAmountToPay(event.target.value);
  };

  const handleChangeETHBIOSW = (event) => {
    setETHAmountToPay(event.target.value);
  };

  const activateProvider = async () => {
    const providerOptions = {
      injected: {
        display: {
          name: "Metamask",
          description: "Connect with the provider in your Browser",
        },
        package: null,
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          bridge: "https://bridge.walletconnect.org",
          rpc: bscRPCURL,
        },
      },
    };

    const web3Modal = new Web3Modal({
      providerOptions,
    });
    try {
      const provider = await web3Modal.connect();
      await activate(provider);
    } catch (error) {
      console.log(error);
    }
  };

  const buyTokenBusdt = async () => {
    if (chainId != BSCTestnet.chainId) {
      await switchNetwork(BSCTestnet.chainId);
    }

    try {
      // const provider = new ethers.providers.JsonRpcProvider(bscRPCURL);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(account);

      try {
        const busdtContract = new ethers.Contract(
          usdtAddress,
          busdtInterface,
          signer
        );

        let approveTx = await busdtContract.approve(
          bioswBSCSale,
          usdtAmountToPay.toString() * 1000000
        );

        await approveTx.wait();
        await notifySuccess(
          "USDT Is Approved Please Confirm Next Transaction !"
        );
      } catch (error) {
        console.log(error);
        await notifyError("Something Went Wrong While Approving USDT !");
      }

      const contract = new ethers.Contract(
        bioswBSCSale,
        bscSaleInterface,
        signer
      );

      let tx = await contract.buyTokensUSDT(
        usdtAmountToPay.toString() * 1000000,
        "0x8B0831ee2AcDb005B856282561f15e0b358E8e52"
      );

      await tx.wait();
      await notifySuccess("Successfully Purchased Tokens");
    } catch (error) {
      console.log(error);
      await notifyError("Something Went Wrong While Buying Tokens With BNB");
    }
  };

  const buyTokenNative = async () => {
    if (chainId != BSCTestnet.chainId) {
      await switchNetwork(BSCTestnet.chainId);
    }

    try {
      // const provider = new ethers.providers.JsonRpcProvider(bscRPCURL);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(account);
      const contract = new ethers.Contract(
        bioswBSCSale,
        bscSaleInterface,
        signer
      );

      let tx = await contract.buyTokensNative(
        "0x8B0831ee2AcDb005B856282561f15e0b358E8e52",
        {
          value: ethers.utils.parseUnits(bnbAmountToPay, "ether"),
        }
      );

      await tx.wait();
      await notifySuccess("Successfully Purchased Tokens");
    } catch (error) {
      console.log(error);
      await notifyError("Something Went Wrong While Buying Tokens With BUSDT");
    }
  };

  const buyTokenETH = async () => {
    if (chainId != Sepolia.chainId) {
      await switchNetwork(Sepolia.chainId);
    }

    try {
      // const provider = new ethers.providers.JsonRpcProvider(bscRPCURL);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(account);
      const contract = new ethers.Contract(
        bioswETHSale,
        ethSaleInterface,
        signer
      );

      let tx = await contract.buyTokensNative({
        value: ethers.utils.parseUnits(ethAmountToPay, "ether"),
      });

      await tx.wait();
      await notifySuccess("Successfully Purchased Tokens");
    } catch (error) {
      console.log(error);
      await notifyError("Something Went Wrong While Buying Tokens With ETH");
    }
  };

  const buyTokenUsdt = async () => {
    if (chainId != Sepolia.chainId) {
      await switchNetwork(Sepolia.chainId);
    }

    try {
      // const provider = new ethers.providers.JsonRpcProvider(bscRPCURL);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(account);

      try {
        const busdtContract = new ethers.Contract(
          ethusdtAddress,
          busdtInterface,
          signer
        );

        let approveTx = await busdtContract.approve(
          bioswETHSale,
          usdtAmountToPay.toString() * 1000000
        );

        await approveTx.wait();
        await notifySuccess(
          "USDT Is Approved Please Confirm Next Transaction !"
        );
      } catch (error) {
        console.log(error);
        await notifyError("Something Went Wrong While Approving USDT !");
      }

      const contract = new ethers.Contract(
        bioswETHSale,
        ethSaleInterface,
        signer
      );

      let tx = await contract.buyTokensUSDT(
        usdtAmountToPay.toString() * 1000000
      );

      await tx.wait();
      await notifySuccess("Successfully Purchased Tokens");
    } catch (error) {
      console.log(error);
      await notifyError("Something Went Wrong While Buying Tokens With USDT");
    }
  };

  return (
    <div className="relative z-30 w-4/5 h-100 mb-10 md:w-3/5 xl:w-2/4 xl:h-4/5 2xl:w-2/5 2xl:h-3/5 lg:ml-[30%] bg-gray-900 bg-opacity-90 shadow-md rounded-sm p-4 flex justify-center items-center">
      <div className="space-y-4 lg:space-y-4 flex flex-col ">
        <div className="flex justify-center">
          <h2 className="text-3xl 2xl:text-5xl mb-10 font-['Cattino'] text-[#40A072]">
            {t("walletTitle")}
          </h2>
        </div>
        <div className="group-one flex flex-row space-x-4">
          <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
            <p>{day}</p>
            <p>{t("walletCountdown-days")}</p>
          </div>
          <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
            <p>{hour}</p>
            <p>{t("walletCountdown-hours")}</p>
          </div>
          <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
            <p>{minute}</p>
            <p>{t("walletCountdown-minutes")}</p>
          </div>
          <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
            <p>{second}</p>
            <p>{t("walletCountdown-seconds")}</p>
          </div>
        </div>

        <p>{t("walletCountdown-bars")}$0.00008</p>

        <div className="group-two flex w-full h-5 rounded-md border border-gray-500 hover:border-green-300 bg-gray-700">
          <div
            style={{
              width:
                ((formattedTotalRaisedUSDT / 10000000000000) * 100).toString() +
                "%",
            }}
            className="bg-green-600 border-0 rounded-md text-sm px-4"
          ></div>
        </div>
        <div className="group-tree flex justify-center text-xs">
          {/* NOTE: TARGET AMOUNT SHOULD CHANGE LATER */}
          <p>
            BNB {t("wallet-raised")} ${formattedTotalRaisedUSDT / 1000000} /
            $10000000
          </p>
        </div>
        <div className="group-four flex justify-center items-center">
          <div className="border border-gray-500 hover:border-green-300 h-0 w-1/4"></div>
          <div className="mx-4 text-[10px]">
            1 BIOSW = ${formattedUsdtPrice / 100000}
          </div>
          <div className="border border-gray-500 hover:border-green-300 h-0 w-1/4"></div>
        </div>
        <div className="group-five flex flex-row space-x-4 text-[6px] lg:text-[8px]">
          <div
            onClick={() => {
              setPaymentMode("eth");
              setBNBAmountToPay(0);
              setUsdtAmountToPay(0);
            }}
            className="w-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2 lg:p-0"
          >
            <img className="w-1/2 lg:w-[2rem] lg:p-1" src={eth} alt="eth" />
            <div className="flex flex-col justify-center items-center w-1/2 leading-3">
              <p>ETH</p>
            </div>
          </div>
          <div
            onClick={() => {
              setPaymentMode("usdt");
              setBNBAmountToPay(0);
              setUsdtAmountToPay(0);
            }}
            className="w-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2 lg:p-0"
          >
            <img className="w-1/2 lg:w-[2rem] lg:p-1" src={usdt} alt="usdt" />
            <div className="flex flex-col justify-center items-center w-1/2 leading-3">
              <p>USDT</p>
              <p>ERC20</p>
            </div>
          </div>
          <div
            onClick={() => {
              setPaymentMode("bnb");
              setBNBAmountToPay(0);
              setUsdtAmountToPay(0);
            }}
            className="w-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2 lg:p-0"
          >
            <img className="w-1/2 lg:w-[2rem] lg:p-1" src={bnb} alt="bnb" />
            <div className="flex flex-col justify-center items-center w-1/2 leading-3">
              <p>BNB</p>
            </div>
          </div>
          <div
            onClick={() => {
              setPaymentMode("busdt");
              setBNBAmountToPay(0);
              setUsdtAmountToPay(0);
            }}
            className="w-1/4 flex flex-row justify-between text-center rounded-md h-[10%] border border-gray-300 hover:border-green-500 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent p-2 lg:p-0"
          >
            <img className="w-1/2 lg:w-[2rem] lg:p-1" src={usdt} alt="usdt" />
            <div className="flex flex-col justify-center items-center w-1/2 leading-3">
              <p>USDT</p>
              <p>BEP20</p>
            </div>
          </div>
        </div>
        <div className="group-six text-xs flex flex-col justify-center items-center space-y-2">
          <p>
            BIOSW {t("wallet-balance")}{" "}
            {ethers.utils.formatEther(formattedInvestmentByAddress)}
          </p>
          <div className="border border-gray-500 hover:border-green-300 w-full"></div>
        </div>
        <div className="group-seven flex items-center justify-between">
          <div className="flex flex-col w-[45%] h-[20%]">
            <div className="flex flex-row justify-between px-1 text-[6px] sm:text-[8px]">
              <p>{t("walletInput-pay")}</p>
              <p>{t("walletInput-max")}</p>
            </div>

            {paymentMode == "bnb" ? (
              <>
                {" "}
                <div className="flex flex-row justify-between h-[10%] p-1  border border-gray-500 hover:border-green-300 rounded-md">
                  <input
                    onChange={handleChangeBNB_BIOSW}
                    className="w-3/5 bg-transparent border-0 "
                    type="number"
                  />
                  <img className="" src={bnb} alt="bnb" />
                </div>
              </>
            ) : null}

            {paymentMode == "eth" ? (
              <>
                {" "}
                <div className="flex flex-row justify-between h-[10%] p-1  border border-gray-500 hover:border-green-300 rounded-md">
                  <input
                    onChange={handleChangeETHBIOSW}
                    className="w-3/5 bg-transparent border-0 "
                    type="number"
                  />
                  <img className="" src={eth} alt="bnb" />
                </div>
              </>
            ) : null}

            {paymentMode == "usdt" ? (
              <>
                {" "}
                <div className="flex flex-row justify-between h-[10%] p-1  border border-gray-500 hover:border-green-300 rounded-md">
                  <input
                    onChange={handleChangeUSDT_BIOSW}
                    className="w-3/5 bg-transparent border-0 "
                    type="number"
                  />
                  <img className="" src={usdt} alt="bnb" />
                </div>
              </>
            ) : null}

            {paymentMode == "busdt" ? (
              <>
                {" "}
                <div className="flex flex-row justify-between h-[10%] p-1  border border-gray-500 hover:border-green-300 rounded-md">
                  <input
                    onChange={handleChangeUSDT_BIOSW}
                    className="w-3/5 bg-transparent border-0 "
                    type="number"
                  />
                  <img className="" src={usdt} alt="bnb" />
                </div>
              </>
            ) : null}
          </div>
          <div className="relative flex flex-col w-[45%] h-[20%]">
            <div className="flex flex-row justify-between px-1 text-[6px] sm:text-[8px]">
              <p>{t("walletInput-receive")}</p>
              <p>{t("walletInput-max")}</p>
            </div>

            {paymentMode == "eth" ? (
              <div className="flex justify-between h-[10%] p-1 border border-gray-500 hover:border-green-300 rounded-md">
                <input
                  placeholder={ethers.utils.formatEther(formattedETHToBIOSW)}
                  disabled
                  className="w-3/5 bg-transparent border-0"
                  type="number"
                />
                <img className="" src={biosw} alt="Bios" />
              </div>
            ) : null}

            {paymentMode == "bnb" ? (
              <div className="flex justify-between h-[10%] p-1 border border-gray-500 hover:border-green-300 rounded-md">
                <input
                  placeholder={ethers.utils.formatEther(formattedBNBToBIOSW)}
                  disabled
                  className="w-3/5 bg-transparent border-0"
                  type="number"
                />
                <img className="" src={biosw} alt="Bios" />
              </div>
            ) : null}

            {paymentMode == "usdt" ? (
              <div className="flex justify-between h-[10%] p-1 border border-gray-500 hover:border-green-300 rounded-md">
                <input
                  placeholder={ethers.utils.formatEther(formattedUsdtToBiosw)}
                  disabled
                  className="w-3/5 bg-transparent border-0"
                  type="number"
                />
                <img className="" src={biosw} alt="Bios" />
              </div>
            ) : null}

            {paymentMode == "busdt" ? (
              <div className="flex justify-between h-[10%] p-1 border border-gray-500 hover:border-green-300 rounded-md">
                <input
                  placeholder={ethers.utils.formatEther(formattedUsdtToBiosw)}
                  disabled
                  className="w-3/5 bg-transparent border-0"
                  type="number"
                />
                <img className="" src={biosw} alt="Bios" />
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 text-[8px]">
          <p>{t("wallet-info")}</p>
          {account ? (
            <>
              {paymentMode == "bnb" ? (
                <Button
                  onClick={() => buyTokenNative()}
                  className="p-4 text-center rounded-md"
                  color="green"
                >
                  {/* {t("walletButton")} */}
                  Buy Now
                </Button>
              ) : null}

              {paymentMode == "busdt" ? (
                <Button
                  onClick={() => buyTokenBusdt()}
                  className="p-4 text-center rounded-md"
                  color="green"
                >
                  {/* {t("walletButton")} */}
                  Buy Now
                </Button>
              ) : null}

              {paymentMode == "usdt" ? (
                <Button
                  onClick={() => buyTokenUsdt()}
                  className="p-4 text-center rounded-md"
                  color="green"
                >
                  {/* {t("walletButton")} */}
                  Buy Now
                </Button>
              ) : null}

              {paymentMode == "eth" ? (
                <Button
                  onClick={() => buyTokenETH()}
                  className="p-4 text-center rounded-md"
                  color="green"
                >
                  {/* {t("walletButton")} */}
                  Buy Now
                </Button>
              ) : null}

              <Button
                onClick={() => deactivate()}
                className="p-4 text-center rounded-md"
                color="green"
              >
                Disconnect [{account ? account.toString() : null}]
              </Button>
            </>
          ) : (
            <Button
              onClick={() => activateProvider()}
              className="p-4 text-center rounded-md"
              color="green"
            >
              {t("walletButton")}
            </Button>
          )}
          <p className="flex justify-center pt-0 text-sm">
            {t("wallet-listing")}
          </p>{" "}
        </div>
        <ul className="flex justify-center gap-3">
          <li>
            <a href="https://t.me/+SHC0-kzuABk0NGQ5">
              <img alt="Logo Telegran" src={telegran} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbiosworld23">
              <img alt="Logo Twitter" src={twitter} />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@biosworld23">
              <img alt="Logo medium" src={medium} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/biosworld">
              <img alt="Logo Discord" src={facebook} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCIN-JdOQFvMN82zxhLY6lkQ">
              <img alt="Logo Discord" src={youtube} />
            </a>
          </li>
        </ul>
      </div>
      <img
        className="absolute top-[-15%] -right-[25%] w-[55%] "
        src={bird}
        alt="bird"
      />
      <img
        className="absolute -right-[40%] -bottom-[10%] w-[50%] xl:-right-1/4 xl:w-1/3"
        src={suricato}
        alt="meerkat"
      />
    </div>
  );
}
