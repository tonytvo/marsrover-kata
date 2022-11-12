export class Position {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y:  number) {
    this.x = x;
    this.y = y;
  }
}

export enum FacingDirection {
  NORTH = "N",
  WEST = "W",
  EAST = "E",
  SOUTH = "S"
}

export enum MovingDirection {
  LEFT = "L",
  RIGHT = "R"
}

export class MarsRover {
  constructor(position: Position = new Position(0, 0), facingDirection: FacingDirection) {
    this._position = position;
    this._facingDirection = facingDirection;
  }

  private readonly _facingDirection: FacingDirection;
  private readonly _position: Position;

  rotate(movingDirection: MovingDirection): MarsRover {
    if (movingDirection === MovingDirection.LEFT && this._facingDirection === FacingDirection.NORTH) {
      return MarsRover.of(new Position(0, 0), FacingDirection.WEST);
    }

    if (movingDirection === MovingDirection.LEFT && this._facingDirection === FacingDirection.WEST) {
      return MarsRover.of(new Position(0, 0), FacingDirection.SOUTH);
    }

    return MarsRover.of(new Position(0, 0), FacingDirection.EAST);
  }

  static of(position: Position, facingDirection: FacingDirection): MarsRover {
    return new MarsRover(position, facingDirection);
  }
}
