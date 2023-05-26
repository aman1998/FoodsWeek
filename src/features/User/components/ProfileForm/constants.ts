import { EGender } from "../../store/types";

export const optionsActivaty = [
  { label: "Минимальный (сидячая работа)", value: 1 },
  { label: "Средний (много хожу)", value: 2 },
  { label: "Повышенный (физический труд)", value: 3 },
  { label: "Высокий (тяжелый физический труд)", value: 4 },
];

export const optionsUnitWeight = [
  { label: "sm", value: "sm" },
  { label: "ft", value: "ft" },
];

export const optionsUnitHeight = [
  { label: "kg", value: "kg" },
  { label: "ft", value: "ft" },
];

export const optionsGender = [
  { label: EGender.female, value: EGender.female },
  { label: EGender.male, value: EGender.male },
];
