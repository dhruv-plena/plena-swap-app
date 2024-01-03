import { BigNumber as BigNumberJs } from "bignumber.js";

export const parseAmountToWei = (amount: string, decimals: number) => {
  return new BigNumberJs(amount).shiftedBy(decimals).toFixed(0);
}
