import { ISRGB } from "../colorspaces/srgb";

export function parseRGB(value: string): ISRGB {
  return {
    red: 0,
    green: 0,
    blue: 0,
  };
}

export default function parse(value: string) {
  return parseRGB(value);
}
