import { writable } from "svelte/store";
import type { Color } from "./types";

export const color = writable<Color>({value: null, isValid: null});
