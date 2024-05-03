import { toDate } from "./to-date.ts";

export const toApproximateTime = (timestamp: string) => {
  const now = new Date();
  const time = new Date(timestamp);
  const minsAgo = Math.floor((now.getTime() - time.getTime()) / 60_000);
  const hoursAgo = Math.floor(minsAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minsAgo < 1) {
    return "Just now";
  }

  if (minsAgo < 5) {
    return "A few minutes ago";
  }

  if (minsAgo < 60) {
    return `${minsAgo} minutes ago`;
  }

  if (hoursAgo < 24) {
    return `${time.getHours()} hours ago`;
  }

  if (daysAgo < 7) {
    return `${time.getDate()} days ago`;
  }

  return toDate(timestamp);
};
