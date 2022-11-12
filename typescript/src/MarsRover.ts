export class Position {
  private x: number;
  private y: number;
  private direction: FacingDirection;

  constructor(x: number, y:  number, direction: FacingDirection) {
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

export enum MovingDirection {
  LEFT = "L",
  RIGHT = "R"
}

export class MarsRover {
  constructor(position: Position = new Position(0, 0, FacingDirection.NORTH)) {
    this._position = position;
  }

  private readonly _position: Position;

  rotate(direction: string): MarsRover {
    if (direction === MovingDirection.LEFT) {
      return MarsRover.of(new Position(0, 0, FacingDirection.WEST));
    }

    return MarsRover.of(new Position(0, 0, FacingDirection.EAST));
  }

  static of(position: Position): MarsRover {
    return new MarsRover(position);
  }
}
