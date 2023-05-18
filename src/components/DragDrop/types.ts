import { ReactNode } from "react";

export interface IDragDropProps<T> {
  handleNewList: (value: T[]) => void;
  data: T[];
  renderItem: (value: T) => ReactNode;
  className?: string;
}
