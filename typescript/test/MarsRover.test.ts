import { describe, expect, test } from "@jest/globals";
import { FacingDirection, MovingDirection, MarsRover, Coord } from "../src/MarsRover";
import { MarsRoverFactory } from "../src/MarsRoverFactory";

describe("MarsRover", () => {

  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    let position = new Coord(0, 0);
    expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover())).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(position, FacingDirection.NORTH)));
  });

  test.each([
    [MovingDirection.RIGHT, FacingDirection.NORTH, FacingDirection.EAST],
    [MovingDirection.LEFT, FacingDirection.NORTH, FacingDirection.WEST],
    [MovingDirection.LEFT, FacingDirection.WEST, FacingDirection.SOUTH],
    [MovingDirection.RIGHT, FacingDirection.WEST, FacingDirection.NORTH],
    [MovingDirection.LEFT, FacingDirection.SOUTH, FacingDirection.WEST],
    [MovingDirection.RIGHT, FacingDirection.SOUTH, FacingDirection.EAST]
  ])("given the rover rotate %p from %p, it should point to %p",
    (movingDirection: MovingDirection, fromFacingDirection: FacingDirection, toFacingDirection: FacingDirection) => {
      expect(JSON.stringify(MarsRoverFactory.createMarsRoverFromFacingDirection(fromFacingDirection).rotate(movingDirection)))
        .toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFromFacingDirection(toFacingDirection)));
  });
});
