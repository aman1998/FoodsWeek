import { EGender } from "../../store/types";

export const optionsActivaty = [
  { label: "Minimal (sedentary work)", value: "minimal" },
  { label: "Moderate (moderate activity level)", value: "moderate" },
  { label: "High (physically demanding work)", value: "high" },
  { label: "Very high (heavy physical labor)", value: 'very high"' },
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
