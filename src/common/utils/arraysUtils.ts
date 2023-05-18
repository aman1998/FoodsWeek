import { TNullable } from "./../../store/types";

export const getMinValueObjectFromArray = <T>(arr: TNullable<T[]>, key: keyof T): TNullable<T> => {
  if (!Array.isArray(arr) || !arr.length || !arr.some(item => item[key])) return null;
  return arr.reduce((min, item) => (item[key] < min[key] ? item : min));
};

export const getMaxValueObjectFromArray = <T>(arr: TNullable<T[]>, key: keyof T): TNullable<T> => {
  if (!Array.isArray(arr) || !arr.length || !arr.some(item => item[key])) return null;
  return arr.reduce((min, item) => (item[key] > min[key] ? item : min));
};
