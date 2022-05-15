interface IColor {
  red: number;
  green: number;
  blue: number;
}

export default class Color {
  color: IColor;

  constructor(color: IColor) {
    this.color = color;
  }
}
