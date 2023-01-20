import invert from "invert-color";
import type { Color } from "src/types";

const getPathValue = (): string => {
  let value = window.location.pathname.replace(/^\/(color\/)?/, "");

  return decodeURI(value);
};

const getHashValue = (): string => {
  return window.location.hash;
};

export const validateColor = (colorValue: string): boolean =>
  CSS.supports("color", colorValue);

export const getContrastingColor = (rgbaValue: string) => {
  let [r, g, b] = rgbaValue.split(",").map((p) => p.replace(/[^.\d]/g, ""));

  return invert([r, g, b] as any, true);
};

export const invertHex = (hexCode: string) => {
  return invert(hexCode);
};

export const getColor = (givenValue: string = ""): Color => {
  let color = givenValue || getPathValue() || getHashValue();

  return {
    value: color,
    isValid: validateColor(color),
  };
};
