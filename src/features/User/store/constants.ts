import { EWeekDays, TProductsByWeekDays } from "features/User/store/types";

export const userProductsByWeekDaysDefault: TProductsByWeekDays = {
  [EWeekDays.Monday]: { totalEnergyByDay: 0, products: [] },
  [EWeekDays.Thursday]: { totalEnergyByDay: 0, products: [] },
  [EWeekDays.Wednesday]: { totalEnergyByDay: 0, products: [] },
  [EWeekDays.Tuesday]: { totalEnergyByDay: 0, products: [] },
  [EWeekDays.Friday]: { totalEnergyByDay: 0, products: [] },
  [EWeekDays.Sunday]: { totalEnergyByDay: 0, products: [] },
  [EWeekDays.Saturday]: { totalEnergyByDay: 0, products: [] },
};
