export const toTime = (date: string) => {
  return Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(date));
};
