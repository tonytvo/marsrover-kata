import { RoverState } from "./RoverStateWest";

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

