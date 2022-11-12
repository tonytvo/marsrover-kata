import { describe, expect, test } from "@jest/globals";
import { FacingDirection, MovingDirection, MarsRover, Position } from "../src/MarsRover";
import { MarsRoverFactory } from "../src/MarsRoverFactory";

describe("MarsRover", () => {

  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    let position = new Position(0, 0, FacingDirection.NORTH);
    expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover())).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(position, FacingDirection.NORTH)));
  });

  test.each([
    [MovingDirection.RIGHT, FacingDirection.NORTH, FacingDirection.EAST],
    [MovingDirection.LEFT, FacingDirection.NORTH, FacingDirection.WEST],
    [MovingDirection.LEFT, FacingDirection.WEST, FacingDirection.SOUTH]
  ])("given the rover rotate %p from %p, it should point to %p",
    (movingDirection: MovingDirection, fromFacingDirection: FacingDirection, toFacingDirection: FacingDirection) => {
      expect(JSON.stringify(MarsRoverFactory.createMarsRoverFromFacingDirection(fromFacingDirection).rotate(movingDirection)))
        .toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFromFacingDirection(toFacingDirection)));
  });
});
