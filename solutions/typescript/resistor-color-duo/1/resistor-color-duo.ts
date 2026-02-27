const resistValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

// const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']

export function decodedValue([band1, band2]: (keyof typeof resistValues)[]): number {
  return Number(`${resistValues[band1]}${resistValues[band2]}`);
  // return COLORS.indexOf(band1) * 10 + COLORS.indexOf(band2);
}
