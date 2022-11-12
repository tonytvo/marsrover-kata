export class Position {
  private x: number;
  private y: number;
  private direction: FacingDirection;

  constructor(x: number, y:  number, direction: FacingDirection) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  isNorth() {
    return this.direction === FacingDirection.NORTH;
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
  constructor(position: Position = new Position(0, 0, FacingDirection.NORTH)) {
    this._position = position;
  }

  private readonly _position: Position;

  rotate(direction: MovingDirection): MarsRover {
    if (direction === MovingDirection.LEFT && this._position.isNorth()) {
      return MarsRover.of(new Position(0, 0, FacingDirection.WEST));
    }

    if (direction === MovingDirection.LEFT && this._position.isWest()) {
      return MarsRover.of(new Position(0, 0, FacingDirection.SOUTH));
    }

    return MarsRover.of(new Position(0, 0, FacingDirection.EAST));
  }

  static of(position: Position): MarsRover {
    return new MarsRover(position);
  }
}
