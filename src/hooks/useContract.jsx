import { bioswBSCSale } from "../config";
import BSCSale from "../abis/BSCSale.json";
import { useCall } from "@usedapp/core";
import { ethers } from "ethers";

const bscSaleInterface = new ethers.utils.Interface(BSCSale);

export const useUsdtPrice = () => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(bioswBSCSale, bscSaleInterface),
      method: "s_usdtPrice",
      args: [],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};

export const useTotalRaisedUSDT = () => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(bioswBSCSale, bscSaleInterface),
      method: "totalRaisedUSDT",
      args: [],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};

export const useBNBToBIOSW = (bnbAmount) => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(bioswBSCSale, bscSaleInterface),
      method: "BNB_BIOSW",
      args: [bnbAmount ? ethers.utils.parseUnits(bnbAmount, "ether") : "0"],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};

export const useETHToBIOSW = (ethAmount) => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(bioswBSCSale, bscSaleInterface),
      method: "ETH_BIOSW",
      args: [ethAmount ? ethers.utils.parseUnits(ethAmount, "ether") : "0"],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};

export const useUSDTToBIOSW = (usdt) => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(bioswBSCSale, bscSaleInterface),
      method: "USDT_BIOSW",
      args: [usdt ? usdt * 100000 : "0"],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};

export const useGetInvestmentByAddress = (user) => {
  const { value, error } =
    useCall({
      contract: new ethers.Contract(bioswBSCSale, bscSaleInterface),
      method: "s_investemetByAddress",
      args: [user],
    }) ?? {};
  if (error) {
    console.log(error.message);
    return undefined;
  }
  return value?.[0];
};
