export class Position {
  private readonly x: number;
  private readonly y: number;
  private readonly direction: FacingDirection;

  constructor(x: number, y:  number, direction: FacingDirection) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  isWest() {
    return this.direction == FacingDirection.WEST;
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
  constructor(position: Position = new Position(0, 0, FacingDirection.NORTH), facingDirection: FacingDirection) {
    this._position = position;
    this._facingDirection = facingDirection;
  }

  private readonly _facingDirection: FacingDirection;
  private readonly _position: Position;

  rotate(movingDirection: MovingDirection): MarsRover {
    if (movingDirection === MovingDirection.LEFT && this._facingDirection === FacingDirection.NORTH) {
      return MarsRover.of(new Position(0, 0, FacingDirection.WEST), FacingDirection.WEST);
    }

    if (movingDirection === MovingDirection.LEFT && this._position.isWest()) {
      return MarsRover.of(new Position(0, 0, FacingDirection.SOUTH), FacingDirection.SOUTH);
    }

    return MarsRover.of(new Position(0, 0, FacingDirection.EAST), FacingDirection.EAST);
  }

  static of(position: Position, facingDirection: FacingDirection): MarsRover {
    return new MarsRover(position, facingDirection);
  }
}
