import { toDate } from "~/formatters/to-date";

export const toApproximateTime = (timestamp: string) => {
  const time = new Date(timestamp);

  if (time.getMinutes() < 1) {
    return "Just now";
  }

  if (time.getMinutes() < 60) {
    return `${time.getMinutes()} minutes ago`;
  }

  if (time.getHours() < 24) {
    return `${time.getHours()} hours ago`;
  }

  if (time.getDate() < 7) {
    return `${time.getDate()} days ago`;
  }

  return toDate(timestamp);
};
