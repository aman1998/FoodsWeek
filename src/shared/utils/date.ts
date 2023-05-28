import range from "./range";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const today = new Date();
export const day = today.getDay();
export const month = today.getMonth();
export const year = today.getFullYear();
export const currentDayOfWeek = daysOfWeek[day];

const getDateOptions = (dates: number[]) => dates.map(item => ({ label: String(item), value: item }));

export const days = range(31, 1);
export const daysSelectOptions = getDateOptions(days);

export const years = range(96, year - 96).reverse();

export const yearsSelectOptions = getDateOptions(years);

export const birthdayYears = range(80, year - 96).reverse();
// можно только 16+
export const birthdayYearsSelectOptions = getDateOptions(birthdayYears);

export const uniqueIDWitdhDate = Date.now().toString(36) + Math.random().toString(36).substring(2);

export const generateUUID = (): string => {
  // Public Domain/MIT
  let d = new Date().getTime(); //Timestamp
  let d2 = (typeof performance !== "undefined" && performance.now && performance.now() * 1000) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

export const getIntervalDates = (
  startMonth: string,
  startYear: string,
  endMonth?: string,
  endYear?: string
): string => {
  if (!endMonth || !endYear) return `${startMonth} ${startYear} - н.в.`;
  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};

export const getIntervalYears = (startYear: string, endYear?: string): string => {
  if (!endYear) return `${startYear} - н.в.`;
  return `${startYear} - ${endYear}`;
};
