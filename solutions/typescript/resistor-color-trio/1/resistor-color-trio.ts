const PREFIX = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000] as const;
            //   0   1    2     3       4       5         6          7           8.            9      //

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'] as const;
            //     0          1        2         3           4          5         6         7         8          9     //

type Color = typeof COLORS[number];

export function decodedResistorValue([band1, band2, band3]: Color[]): string {
  const baseVal = (COLORS.indexOf(band1) * 10) + COLORS.indexOf(band2);
  const megatude = PREFIX[COLORS.indexOf(band3)];
  const rawValue = baseVal * megatude;
  let prettyValue;

  if (rawValue >= PREFIX[3] && rawValue < PREFIX[6]) {
    prettyValue = `${rawValue / PREFIX[3]} kiloohms`;
  } else if (rawValue >= PREFIX[6] && rawValue < PREFIX[9]) {
    prettyValue = `${rawValue / PREFIX[6]} megaohms`;
  } else if (rawValue >= PREFIX[9]) {
    prettyValue = `${rawValue / PREFIX[9]} gigaohms`;
  } else {
    prettyValue = `${rawValue} ohms`;
  }

  return prettyValue;
}
