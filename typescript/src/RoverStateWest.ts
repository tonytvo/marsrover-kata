import { Coord } from "./Coord";

export interface RoverState {
  publishLocation(): string;

  turnLeft(): RoverState;

  turnRight(): RoverState;
}

export class RoverStateNorth implements RoverState {
  private readonly _position: Coord;

  constructor(position: Coord) {
    this._position = position;
  }

  publishLocation() {
    return `${this._position.toString()}:N`;
  }

  turnLeft() {
    return new RoverStateWest(new Coord(0, 0));
  }

  turnRight() {
    return new RoverStateEast(new Coord(0, 0));
  }
}

export class RoverStateSouth implements RoverState {
  private readonly _position: Coord;

  constructor(position: Coord) {
    this._position = position;
  }

  publishLocation() {
    return `${this._position.toString()}:S`;
  }

  turnLeft() {
    return new RoverStateEast(new Coord(0, 0));
  }

  turnRight() {
    return new RoverStateWest(new Coord(0, 0));
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
    return new RoverStateSouth(new Coord(0, 0));
  }

  turnRight() {
    return new RoverStateNorth(new Coord(0, 0));
  }
}

export class RoverStateEast implements RoverState {
  private readonly _position: Coord;

  constructor(position: Coord) {
    this._position = position;
  }

  publishLocation() {
    return `${this._position.toString()}:E`;
  }

  turnLeft() {
    return new RoverStateNorth(new Coord(0, 0));
  }

  turnRight() {
    return new RoverStateSouth(new Coord(0, 0));
  }
}
