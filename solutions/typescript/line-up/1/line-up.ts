const ORDINAL = ['th', 'st', 'nd', 'rd'] as const;

export function format(name: string, number: number): string {

  const message = (ordinal: string) => (`${name}, you are the ${number}${ordinal} customer we serve today. Thank you!`);
  const lastTwo = number % 100;
  const lastOne = lastTwo % 10;
  const commonUseOrdinal = lastOne <= 3 ? ORDINAL[lastOne] : 'th';

  // Cover the use case for 11, 12, 13 all should the 'th' (ex. 11th)
  if (lastTwo >= 11 && lastTwo <= 13) return message('th');

  return message(commonUseOrdinal);
}