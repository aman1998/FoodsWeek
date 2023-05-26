const range = (size: number, startAt: number): number[] => Array.from(new Array(size), (_, index) => index + startAt);

export default range;
