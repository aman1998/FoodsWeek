export const calculatePercentage = (value: number, total: number): number => {
  const difference = value - total;
  const percentage = (difference / total) * 100;
  return percentage;
};
