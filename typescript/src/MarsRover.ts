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

export class MarsRover {
  position() {
    return new Position(0, 0, "N");
  }
}
