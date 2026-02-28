/*
  Introduction
  Your friend Yaʻqūb works the counter at a deli in town, slicing, weighing,
  and wrapping orders for a line of hungry customers that gets longer every day.
  Waiting customers are starting to lose track of who is next, so he wants
  numbered tickets they can use to track the order in which they arrive.

  To make the customers feel special, he does not want the ticket to have only
  a number on it. They shall get a proper English sentence with their name and
  number on it.

  Instructions:
  Given a name and a number, your task is to produce a sentence using that name
  and that number as an ordinal numeral. Yaʻqūb expects to use numbers from 1 up to 999.

  Rules:
  Numbers ending in 1 (unless ending in 11) → "st"
  Numbers ending in 2 (unless ending in 12) → "nd"
  Numbers ending in 3 (unless ending in 13) → "rd"
  All other numbers → "th"

  Examples:
  "Mary", 1 → "Mary, you are the 1st customer we serve today. Thank you!"
  "John", 12 → "John, you are the 12th customer we serve today. Thank you!"
  "Dahir", 162 → "Dahir, you are the 162nd customer we serve today. Thank you!"
*/


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
