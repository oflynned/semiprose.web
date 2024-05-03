export const toCount = (count: number) => {
  return Intl.NumberFormat("en", { notation: "compact" }).format(count);
};
