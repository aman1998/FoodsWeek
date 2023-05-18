import { TNullable } from "../../../../store/types";

import { ISingleDay } from "../../store/types";

export interface IDayTableProps {
  stockReports: TNullable<ISingleDay[]>;
  handleNewList: (values: ISingleDay[]) => void;
  id: string;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  page: number;
}
