
/*
Planet	Orbital period in Earth Years
  Mercury	0.2408467
  Venus	0.61519726
  Earth	1.0
  Mars	1.8808158
  Jupiter	11.862615
  Saturn	29.447498
  Uranus	84.016846
  Neptune	164.79132
 */

type Planet = 'mercury'
  |'venus'
  |'earth'
  |'mars'
  |'jupiter'
  |'saturn'
  |'uranus'
  |'neptune';

const ORBITAL_PERIODS: Record<Planet, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const EARTH_YEAR_SECONDS = 31557600;

export function age(planet: Planet, seconds: number): number {
  const spaceAge = parseFloat((seconds / (EARTH_YEAR_SECONDS * ORBITAL_PERIODS[planet])).toFixed(2));
  return spaceAge;
}
