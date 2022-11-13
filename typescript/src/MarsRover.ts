import * as option from "fp-ts/lib/Option";
import { pipe } from "fp-ts/function";
import { Option } from "fp-ts/es6/Option";

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

export class RoverState {
  private readonly _facingDirection: FacingDirection;
  private readonly _position: Coord;

  constructor(position: Coord, facingDirection: FacingDirection) {
    this._position = position;
    this._facingDirection = facingDirection;
  }

  nextState(roverCommand: RoverCommand): Option<RoverState> {
    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.NORTH) {
      return option.of(new RoverState(new Coord(0, 0), FacingDirection.WEST));
    }

    return option.none;
  }

  publishLocation() {
    return `${this._position.toString()}:${this._facingDirection}`;
  }
}

export class MarsRover {
  constructor(position: Coord = new Coord(0, 0),
              facingDirection: FacingDirection,
              roverState: RoverState) {
    this._position = position;
    this._facingDirection = facingDirection;
    this._roverState = roverState;
  }

  private readonly _facingDirection: FacingDirection;
  private readonly _position: Coord;
  private readonly _roverState: RoverState;

  rotate(roverCommand: RoverCommand): MarsRover {
    let nextState = this._roverState.nextState(roverCommand);
    return pipe(nextState,
      option.fold(
        () => this.rotateAppleSauce(roverCommand),
        (roverState) => MarsRover.of(new Coord(0, 0), FacingDirection.NORTH, roverState)
      ))
  }

  private rotateAppleSauce(roverCommand: RoverCommand) {
    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.NORTH) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.WEST, new RoverState(new Coord(0, 0), FacingDirection.WEST));
    }

    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.WEST) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.SOUTH, new RoverState(new Coord(0, 0), FacingDirection.SOUTH));
    }


    if (roverCommand === RoverCommand.TURN_RIGHT && this._facingDirection === FacingDirection.WEST) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.NORTH, new RoverState(new Coord(0, 0), FacingDirection.NORTH));
    }

    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.SOUTH) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.WEST, new RoverState(new Coord(0, 0), FacingDirection.WEST));
    }

    if (roverCommand === RoverCommand.TURN_RIGHT && this._facingDirection === FacingDirection.SOUTH) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.EAST, new RoverState(new Coord(0, 0), FacingDirection.EAST));
    }

    if (roverCommand === RoverCommand.TURN_LEFT && this._facingDirection === FacingDirection.EAST) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.NORTH, new RoverState(new Coord(0, 0), FacingDirection.NORTH));
    }

    if (roverCommand === RoverCommand.TURN_RIGHT && this._facingDirection === FacingDirection.EAST) {
      return MarsRover.of(new Coord(0, 0), FacingDirection.SOUTH, new RoverState(new Coord(0, 0), FacingDirection.SOUTH));
    }

    return MarsRover.of(new Coord(0, 0), FacingDirection.EAST, new RoverState(new Coord(0, 0), FacingDirection.EAST));
  }

  static of(position: Coord, facingDirection: FacingDirection, roverState: RoverState): MarsRover {
    return new MarsRover(position, facingDirection, roverState);
  }

  publishLocation() {
    return this._roverState.publishLocation();
  }
}

