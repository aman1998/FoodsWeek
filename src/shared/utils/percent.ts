export const calculatePercentage = (actual: number, target: number): number => {
  const deviation = actual - target;
  const percentage = (deviation / target) * 100;
  return percentage;
};
