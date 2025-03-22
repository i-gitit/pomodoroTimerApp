export function millisecondsToDisplayTime(milliseconds: number): string {
  let seconds = Math.round(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  const displaySeconds = seconds > 9 ? seconds : `0${seconds}`;
  const displayMinutes = minutes > 9 ? minutes : `0${minutes}`;

  return `${displayMinutes}:${displaySeconds}`;
}

export function minutesToMilliseconds(minutes : number) : number {
  return minutes * 60 * 1000;
}