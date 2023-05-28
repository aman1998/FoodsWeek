import { EGender, EHeightTypes, EWeightTypes } from "shared/libs/types/user";

export const optionsActivaty = [
  { label: "Minimal (sedentary work)", value: "minimal" },
  { label: "Moderate (moderate activity level)", value: "moderate" },
  { label: "High (physically demanding work)", value: "high" },
  { label: "Very high (heavy physical labor)", value: 'very high"' },
];

export const optionsUnitWeight = [
  { label: EWeightTypes.kg, value: EWeightTypes.kg },
  { label: EWeightTypes.pounds, value: EWeightTypes.pounds },
];

export const optionsUnitHeight = [
  { label: EHeightTypes.sm, value: EHeightTypes.sm },
  { label: EHeightTypes.feet, value: EHeightTypes.feet },
];

export const optionsGender = [
  { label: EGender.female, value: EGender.female },
  { label: EGender.male, value: EGender.male },
];
