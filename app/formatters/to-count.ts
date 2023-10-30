export const toCount = (count: number) => {
  return Intl.NumberFormat("en-US", { notation: "compact" }).format(count);
};
