import { RoverState } from "./RoverStateWest";
import * as S from "fp-ts/lib/State";
import { pipe } from "fp-ts/function";
import { map } from 'fp-ts/Array'

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
    const turn = this.getTurnStateMonoid();
    const [, finalState] = turn(roverCommand)(this._roverState);
    return MarsRover.of(finalState);
  }
  static of(roverState: RoverState): MarsRover {
    return new MarsRover(roverState);
  }

  publishLocation() {
    return this._roverState.publishLocation();
  }

  execute(roverCommands: RoverCommand[]): MarsRover {
    const turn = this.getTurnStateMonoid();

    const f = (command: RoverCommand) => turn(command);
    const turnActions = pipe(roverCommands, map(f));
    const [, finalState] = S.sequenceArray(turnActions)(this._roverState);
    return MarsRover.of(finalState);
  }

  private getTurnStateMonoid() {
    return (roverCommand): S.State<RoverState, RoverState> => (state: RoverState) => {
      switch (roverCommand) {
        case RoverCommand.TURN_LEFT:
          const roverState = state.turnLeft();
          return [roverState, roverState];
        case RoverCommand.TURN_RIGHT:
          const rightState = state.turnRight();
          return [rightState, rightState];
      }
      throw new Error("unimplemented rovercommand");
    };
  }
}

