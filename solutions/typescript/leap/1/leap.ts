export function isLeap(year: number): boolean {
  const yearMod4 = year % 4 === 0;
  const yearMod100 = year % 100 !== 0;
  const yearMod400 = year % 400 === 0;

  return (yearMod4 && yearMod100) || yearMod400;
}
