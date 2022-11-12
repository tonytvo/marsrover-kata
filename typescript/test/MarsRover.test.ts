import { describe, expect, test } from "@jest/globals";
import { FacingDirection, MovingDirection, MarsRover, Position } from "../src/MarsRover";
import { MarsRoverFactory } from "../src/MarsRoverFactory";

describe("MarsRover", () => {

  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    let position = new Position(0, 0, FacingDirection.NORTH);
    expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover())).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(position)));
  });

  test.each([
    [MovingDirection.RIGHT, FacingDirection.EAST],
    [MovingDirection.LEFT, FacingDirection.WEST]
  ])("given the rover rotate from north, it should point to correct direction",
    (movingDirection: MovingDirection, facingDirection: FacingDirection) => {
      expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover().rotate(movingDirection))).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(new Position(0, 0, facingDirection))));
  });
});
