import { TNullable } from "app/store/types";

export interface IListProps<T> {
  preloader: JSX.Element;
  emptyText?: JSX.Element;
  component: JSX.Element;
  data: TNullable<T[]>;
  loading: boolean;
}
