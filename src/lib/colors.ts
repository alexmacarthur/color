type colorTypes = "rgb" | "hex" | "hsl";

interface Color {
  value: string,
  isValid: boolean
};

const getPathValue = (): string => {
  let value = window.location.pathname.replace(/^\//, "");

  return decodeURI(value);
}

const getHashValue = (): string => {
  return window.location.hash;
}

export const getColor = (givenValue: string = ""): Color => {
  let color = givenValue || getPathValue() || getHashValue();

  return {
    value: color,
    isValid: CSS.supports("color", color),
  };
}
