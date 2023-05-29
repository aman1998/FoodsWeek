import { EActivityLevel, EGender, EHeightTypes, EWeightTypes } from "shared/libs/types/user";

// Функция для расчета расхода калорий за день
export const calculateDailyCalorieBurned = (
  gender: EGender,
  weightValue: number,
  weightType: EWeightTypes,
  heightValue: number,
  heightType: EHeightTypes,
  age: number,
  activityLevel: EActivityLevel
): number => {
  let height = heightValue;
  let weight = weightValue;

  if (heightType === EHeightTypes.feet) {
    height = Math.round(heightValue * 30.48); // пребразование фута в см
  }

  if (weightType === EWeightTypes.pounds) {
    weight = Math.round(weightValue * 0.453592); // пребразование фунта в кг
  }

  let bmr: number;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let calorieBurned: number;

  switch (activityLevel) {
    case "minimal":
      calorieBurned = bmr * 1.2;
      break;
    case "moderate":
      calorieBurned = bmr * 1.375;
      break;
    case "high":
      calorieBurned = bmr * 1.55;
      break;
    case "very high":
      calorieBurned = bmr * 1.725;
      break;
    default:
      throw new Error("Invalid activity level.");
  }

  return calorieBurned;
};

// Функция для расчета расхода калорий за неделю
export const calculateWeeklyCalorieBurned = (
  gender: EGender,
  weightValue: number,
  weightType: EWeightTypes,
  heightValue: number,
  heightType: EHeightTypes,
  age: number,
  activityLevel: EActivityLevel
): number => {
  const dailyCalorieBurned = calculateDailyCalorieBurned(
    gender,
    weightValue,
    weightType,
    heightValue,
    heightType,
    age,
    activityLevel
  );
  const weeklyCalorieBurned = dailyCalorieBurned * 7;

  return weeklyCalorieBurned;
};
