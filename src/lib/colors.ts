type colorTypes = "rgb" | "hex" | "hsl";

interface Color {
  value: string,
  type: colorTypes
};

const getPathValue = (): string => {
  let value = window.location.pathname.replace(/^\//, "");

  return decodeURI(value);
}

const getHashValue = (): string => {
  return window.location.hash;
}

const getColorType = (value): colorTypes => {
  if(/^hsl/i.test(value)) return "hsl";
  if(/^rgb/i.test(value)) return "rgb";
  if(/^#/i.test(value)) return "hex";

  throw new Error("That's not a valid color!");
}

export const getColor = (): Color => {
  let color = getPathValue() || getHashValue();

  return {
    value: color,
    type: getColorType(color)
  }
}
