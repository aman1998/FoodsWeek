import { IDaysState } from "../containers/DaysContainer/store/types";
import { ISingleDayState } from "../containers/SingleDayContainer/store/types";

export interface IApplicationState {
  stocks: IDaysState;
  singleDay: ISingleDayState;
}

export declare type IPayloadAction<P = void, T extends string = string, M = never, E = never> = {
  payload: P;
  type: T;
} & ([M] extends [never]
  ? Record<string, unknown>
  : {
      meta: M;
    }) &
  ([E] extends [never]
    ? Record<string, unknown>
    : {
        error: E;
      });

export type TNullable<T> = T | null;
export type TUndefinedly<T> = T | undefined;

export interface IRequestError {
  code: TUndefinedly<string>;
  status: TUndefinedly<number>;
  message: string;
}

export interface ISingleRequestPayload<T> {
  id: string;
  data: T;
}

export interface ISingleRequestErrorPayload {
  id: string;
  data: IRequestError;
}

export interface IRequestHandler<T> {
  fetching: boolean;
  data: TNullable<T>;
  error: TNullable<IRequestError>;
}
