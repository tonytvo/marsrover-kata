export class Coord {
  private readonly x: number;
  private readonly y: number;

  constructor(x: number, y:  number) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `${this.x}:${this.y}`
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

export interface RoverState {
  publishLocation(): string;
  turnLeft(): RoverState;
  turnRight(): RoverState;
}

export class RoverStateNorth implements RoverState {
  private readonly _facingDirection: FacingDirection;
  private readonly _position: Coord;

  constructor(position: Coord, facingDirection: FacingDirection) {
    this._position = position;
    this._facingDirection = facingDirection;
  }

  publishLocation() {
    return `${this._position.toString()}:${this._facingDirection}`;
  }

  turnLeft() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.WEST);
  }

  turnRight() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.EAST);
  }
}

export class RoverStateWest implements RoverState {
  private readonly _position: Coord;

  constructor(position: Coord) {
    this._position = position;
  }

  publishLocation() {
    return `${this._position.toString()}:W`;
  }

  turnLeft() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.SOUTH);
  }

  turnRight() {
    return new RoverStateNorth(new Coord(0, 0), FacingDirection.NORTH);
  }
}

export class RoverStateLegacy implements RoverState {
  private readonly _facingDirection: FacingDirection;
  private readonly _position: Coord;

  constructor(position: Coord, facingDirection: FacingDirection) {
    this._position = position;
    this._facingDirection = facingDirection;
  }

  publishLocation() {
    return `${this._position.toString()}:${this._facingDirection}`;
  }

  turnLeft() {
    if (this._facingDirection === FacingDirection.SOUTH) {
      return new RoverStateWest(new Coord(0, 0));
    }

    if (this._facingDirection === FacingDirection.EAST) {
      return new RoverStateNorth(new Coord(0, 0), FacingDirection.NORTH);
    }

    throw new Error('should not get here');
  }

  turnRight() {
    if (this._facingDirection === FacingDirection.SOUTH) {
      return new RoverStateNorth(new Coord(0, 0), FacingDirection.EAST);
    }

    if (this._facingDirection === FacingDirection.EAST) {
      return new RoverStateNorth(new Coord(0, 0), FacingDirection.SOUTH);
    }

    return new RoverStateNorth(new Coord(0, 0), FacingDirection.EAST);
  }
}

export class MarsRover {
  constructor(roverState: RoverState) {
    this._roverState = roverState;
  }

  private readonly _roverState: RoverState;

  rotate(roverCommand: RoverCommand): MarsRover {
    switch (roverCommand) {
      case RoverCommand.TURN_LEFT:
        return MarsRover.of(this._roverState.turnLeft());
      case RoverCommand.TURN_RIGHT:
        return MarsRover.of(this._roverState.turnRight());
    }
  }
  static of(roverState: RoverState): MarsRover {
    return new MarsRover(roverState);
  }

  publishLocation() {
    return this._roverState.publishLocation();
  }
}

