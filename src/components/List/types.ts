import { TNullable } from "store/types";

export interface IListProps<T> {
  preloader: JSX.Element;
  emptyText?: JSX.Element;
  component: JSX.Element;
  data: TNullable<T[]>;
  loading: boolean;
}
