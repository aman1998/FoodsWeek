// Определение типов данных
export type Gender = "male" | "female";
// export type ActivityLevel = "minimal" | "moderate" | "high" | "very high";

// Функция для расчета расхода калорий за день
export const calculateDailyCalorieExpenditure = (
  gender: Gender,
  weight: number,
  height: number,
  age: number,
  activityLevel: string
): number => {
  // let newHeight = height;

  // if (type !== "sm") {
  //   newHeight = Math.round(height * 30.48); // пребразование фута в см
  // }
  let bmr: number;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  let calorieExpenditure: number;

  switch (activityLevel) {
    case "minimal":
      calorieExpenditure = bmr * 1.2;
      break;
    case "moderate":
      calorieExpenditure = bmr * 1.375;
      break;
    case "high":
      calorieExpenditure = bmr * 1.55;
      break;
    case "very high":
      calorieExpenditure = bmr * 1.725;
      break;
    default:
      throw new Error("Invalid activity level.");
  }

  return calorieExpenditure;
};

// Функция для расчета расхода калорий за неделю
export const calculateWeeklyCalorieExpenditure = (
  gender: Gender,
  weight: number,
  height: number,
  age: number,
  activityLevel: string
): number => {
  const dailyCalorieExpenditure = calculateDailyCalorieExpenditure(gender, weight, height, age, activityLevel);
  const weeklyCalorieExpenditure = dailyCalorieExpenditure * 7;

  return weeklyCalorieExpenditure;
};
