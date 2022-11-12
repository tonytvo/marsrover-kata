export class Position {
  private x: number;
  private y: number;
  private direction: string;

  constructor(x: number, y:  number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
}

export class MarsRover {
  private _position = new Position(0, 0, "N");

  position() {
    return this._position;
  }

  rotate(direction: string) {
    return null;
  }
}
