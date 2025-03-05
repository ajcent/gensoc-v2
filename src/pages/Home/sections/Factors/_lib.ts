export const isEven = (count: number) => {
  return count % 2 === 0 ? true : false;
};

export const isDarkOrLight = (count: number) => {
  return isEven(count) ? ("dark" as const) : ("light" as const);
};
