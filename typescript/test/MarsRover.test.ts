import { describe, expect, test } from "@jest/globals";
import { FacingDirection, RoverCommand, MarsRover, Coord } from "../src/MarsRover";
import { MarsRoverFactory } from "../src/MarsRoverFactory";

describe("MarsRover", () => {

  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    let position = new Coord(0, 0);
    expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover())).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(position, FacingDirection.NORTH)));
  });

  test.each([
    [RoverCommand.RIGHT, FacingDirection.NORTH, FacingDirection.EAST],
    [RoverCommand.LEFT, FacingDirection.NORTH, FacingDirection.WEST],
    [RoverCommand.LEFT, FacingDirection.WEST, FacingDirection.SOUTH],
    [RoverCommand.RIGHT, FacingDirection.WEST, FacingDirection.NORTH],
    [RoverCommand.LEFT, FacingDirection.SOUTH, FacingDirection.WEST],
    [RoverCommand.RIGHT, FacingDirection.SOUTH, FacingDirection.EAST],
    [RoverCommand.LEFT, FacingDirection.EAST, FacingDirection.NORTH],
    [RoverCommand.RIGHT, FacingDirection.EAST, FacingDirection.SOUTH]
  ])("given the rover rotate %p from %p, it should point to %p",
    (movingDirection: RoverCommand, fromFacingDirection: FacingDirection, toFacingDirection: FacingDirection) => {
      expect(JSON.stringify(MarsRoverFactory.createMarsRoverFromFacingDirection(fromFacingDirection).rotate(movingDirection)))
        .toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFromFacingDirection(toFacingDirection)));
  });
});
