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
  constructor(position: Position = new Position(0, 0, "N")) {
    this._position = position;
  }
  private _position: Position;

  position() {
    return this._position;
  }

  rotate(direction: string) {
    return null;
  }

  static of(position: Position) {
    return new MarsRover(position);
  }
}
