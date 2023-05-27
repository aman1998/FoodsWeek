import { ITotalNutrients } from "features/User/store/types";

export interface IDayCardProps extends ITotalNutrients {
  title: string;
  link: string;
}
