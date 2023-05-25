import { IRequestHandler } from "store/types";

export enum EDays {
  AAPL = "AAPL",
  AMZN = "AMZN",
  INTC = "INTC",
  MSFT = "MSFT",
  GOOG = "GOOG",
  FB = "FB",
  NFLX = "NFLX",
  NVDA = "NVDA",
  VZ = "VZ",
  JNJ = "JNJ",
  PG = "PG",
  XOM = "XOM",
}

export interface IDay {
  quote: {
    latestPrice: number;
    changePercent: number;
  };
  logo: {
    url: string;
  };
}

export interface IDayData {
  latestPrice: number;
  changePercent: number;
  logoUrl: string;
  type: EDays;
}

export type TDaysListResponse = Record<EDays, IDay>;

export interface IDaysState {
  stocks: IRequestHandler<IDayData[]>;
}
