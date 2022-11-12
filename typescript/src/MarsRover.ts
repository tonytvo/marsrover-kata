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

export enum FacingDirection {
  NORTH = "N",
  WEST = "W",
  EAST = "E"
}

export class MarsRover {
  constructor(position: Position = new Position(0, 0, FacingDirection.NORTH)) {
    this._position = position;
  }

  private readonly _position: Position;

  rotate(direction: string): MarsRover {
    if (direction === "L") {
      return MarsRover.of(new Position(0, 0, FacingDirection.WEST));
    }

    return MarsRover.of(new Position(0, 0, FacingDirection.EAST));
  }

  static of(position: Position): MarsRover {
    return new MarsRover(position);
  }
}
