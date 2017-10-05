export const getRandomPoint = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}