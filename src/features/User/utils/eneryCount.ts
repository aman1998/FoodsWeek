export const getFoodCaloriesByWeight = (calories: number, weight: number): number =>
  Math.round((calories / 100) * weight);
