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

enum FacingDirection {
  NORTH = "N",
  WEST = "W",
  EAST = "E"
}

const NORTH_FACING = FacingDirection.NORTH;
const WEST_FACING = FacingDirection.WEST;
const EAST_FACING = FacingDirection.EAST;

export class MarsRover {
  constructor(position: Position = new Position(0, 0, NORTH_FACING)) {
    this._position = position;
  }

  private readonly _position: Position;

  rotate(direction: string): MarsRover {
    if (direction === "L") {
      return MarsRover.of(new Position(0, 0, WEST_FACING));
    }

    return MarsRover.of(new Position(0, 0, EAST_FACING));
  }

  static of(position: Position): MarsRover {
    return new MarsRover(position);
  }
}
