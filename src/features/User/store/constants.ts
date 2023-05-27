import { EWeekDays, TProductsByWeekDays, IProductsShortInfo } from "features/User/store/types";

const defaultNutrients = {
  totalCalories: 0,
  totalCarbohydrate: 0,
  totalProtein: 0,
  totalFat: 0,
};

const defaultWeekDayInfo = {
  nutrients: defaultNutrients,
  products: [],
};

export const defaultProductsByWeekDays: TProductsByWeekDays = {
  [EWeekDays.Monday]: defaultWeekDayInfo,
  [EWeekDays.Thursday]: defaultWeekDayInfo,
  [EWeekDays.Wednesday]: defaultWeekDayInfo,
  [EWeekDays.Tuesday]: defaultWeekDayInfo,
  [EWeekDays.Friday]: defaultWeekDayInfo,
  [EWeekDays.Sunday]: defaultWeekDayInfo,
  [EWeekDays.Saturday]: defaultWeekDayInfo,
};

export const defaultProductsInWeek: IProductsShortInfo[] = [
  { day: EWeekDays.Monday, nutrients: defaultNutrients },
  { day: EWeekDays.Tuesday, nutrients: defaultNutrients },
  { day: EWeekDays.Wednesday, nutrients: defaultNutrients },
  { day: EWeekDays.Thursday, nutrients: defaultNutrients },
  { day: EWeekDays.Friday, nutrients: defaultNutrients },
  { day: EWeekDays.Saturday, nutrients: defaultNutrients },
  { day: EWeekDays.Sunday, nutrients: defaultNutrients },
];
