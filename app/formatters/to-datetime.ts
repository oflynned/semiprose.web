export const toDatetime = (date: string) => {
  return Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};
