export const toPercentage = (percentage: number) => {
  return Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(percentage / 100);
};
