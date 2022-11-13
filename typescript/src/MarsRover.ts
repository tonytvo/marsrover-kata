export class Coord {
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

export enum RoverCommand {
  TURN_LEFT = "L",
  TURN_RIGHT = "R"
}

export class MarsRover {
  constructor(position: Coord = new Coord(0, 0), facingDirection: FacingDirection) {
    this._position = position;
    this._facingDirection = facingDirection;
  }

  private readonly _facingDirection: FacingDirection;
  private readonly _position: Coord;

  rotate(roverCommand: RoverCommand): MarsRover {
    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.NORTH) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.WEST);
    }

    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.WEST) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.SOUTH);
    }

    if (roverCommand === RoverCommand.TURN_RIGHT && this._facingDirection === FacingDirection.WEST) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.NORTH);
    }

    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.SOUTH) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.WEST);
    }

    if (roverCommand === RoverCommand.TURN_RIGHT && this._facingDirection === FacingDirection.SOUTH) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.EAST);
    }

    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.EAST) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.NORTH);
    }

    if (roverCommand === RoverCommand.TURN_RIGHT && this._facingDirection === FacingDirection.EAST) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.SOUTH);
    }

    return MarsRover.of(new Coord(0, 0), FacingDirection.EAST);
  }

  static of(position: Coord, facingDirection: FacingDirection): MarsRover {
    return new MarsRover(position, facingDirection);
  }
}
