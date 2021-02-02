import { adjectives, nouns, symbols } from "./dictionary";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const wait = (m) => new Promise((r) => setTimeout(r, m));

export const getRandomName = () => {
  const randomAdjective = capitalize(
    adjectives[Math.floor(Math.random() * adjectives.length)]
  );
  const randomNoun = capitalize(
    nouns[Math.floor(Math.random() * nouns.length)]
  );
  const randomSymbol = capitalize(
    symbols[Math.floor(Math.random() * symbols.length)]
  );
  const randomNumber = Math.floor(Math.random() * 1000000);

  return `${randomAdjective}${randomNoun}${randomSymbol}${randomNumber}`;
};
