import { IRequestHandler, ISingleRequestPayload } from "store/types";

export interface ISingleDayResponse {
  symbol: string;
  changePercent: number;
  priceDate: string;
  uClose: number;
  uOpen: number;
  uHigh: number;
  uLow: number;
}

export interface ISingleDay extends ISingleDayResponse {
  number: number;
}

export type TSingleDaySuccess = ISingleRequestPayload<null>;
export type TSingleDayCount = ISingleRequestPayload<number>;

export interface ISingleDayState {
  singleDay: Record<string, IRequestHandler<ISingleDay[]>>;
  productAddModalisOpen: boolean;
}
