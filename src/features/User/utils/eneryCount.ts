export const getFoodEnergyCountByWeight = (energy: number, weight: number): number =>
  Math.round((energy / 100) * weight);
