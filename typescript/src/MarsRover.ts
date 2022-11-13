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

  static of(roverState: RoverState): MarsRover {
    return new MarsRover(roverState);
  }

  publishLocation() {
    return this._roverState.publishLocation();
  }

  executeSingleCommand(roverCommand: RoverCommand): MarsRover {
    return this.execute([roverCommand]);
  }

  execute(roverCommands: RoverCommand[]): MarsRover {
    const turnActions = this.getActionsForStateMonoid(roverCommands);
    const [, finalState] = S.sequenceArray(turnActions)(this._roverState);
    return MarsRover.of(finalState);
  }

  private getActionsForStateMonoid(roverCommands: RoverCommand[]) {
    const action = this.getRoverStateMonoid();
    const comandToRoverStateMonoid = (command: RoverCommand) => action(command);
    const actions = pipe(roverCommands, map(comandToRoverStateMonoid));
    return actions;
  }

  private getRoverStateMonoid() {
    return (roverCommand): S.State<RoverState, any> => (state: RoverState) => {
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
