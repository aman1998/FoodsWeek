import { ISingleDay } from "features/User/store/types";

export const getMinCount = (stonks: ISingleDay[]): number =>
  stonks.reduce((acc, item, index) => {
    const min = Math.min(item.uClose, item.uHigh, item.uLow, item.uOpen);
    if (index === 0) {
      acc = min;
    }
    if (min < acc && index !== 0) {
      acc = min;
    }
    return acc;
  }, 0);
