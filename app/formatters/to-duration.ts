export const toDuration = (mins: number) => {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  if (hours > 0) {
    return `${hours} hours and ${minutes} minutes to read`;
  }

  return `${minutes} minutes to read`;
};
