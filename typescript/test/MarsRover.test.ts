import { describe, expect, test } from "@jest/globals";
import { FacingDirection, RoverCommand, MarsRover } from "../src/MarsRover";
import { MarsRoverFactory } from "../src/MarsRoverFactory";
import { Coord } from "../src/Coord";

describe("MarsRover", () => {

  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    let position = new Coord(0, 0);
    expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover())).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(position, FacingDirection.NORTH)));
  });

  test.each([
    [RoverCommand.TURN_RIGHT, FacingDirection.NORTH, FacingDirection.EAST],
    [RoverCommand.TURN_LEFT, FacingDirection.NORTH, FacingDirection.WEST],
    [RoverCommand.TURN_LEFT, FacingDirection.WEST, FacingDirection.SOUTH],
    [RoverCommand.TURN_RIGHT, FacingDirection.WEST, FacingDirection.NORTH],
    [RoverCommand.TURN_LEFT, FacingDirection.SOUTH, FacingDirection.WEST],
    [RoverCommand.TURN_RIGHT, FacingDirection.SOUTH, FacingDirection.EAST],
    [RoverCommand.TURN_LEFT, FacingDirection.EAST, FacingDirection.NORTH],
    [RoverCommand.TURN_RIGHT, FacingDirection.EAST, FacingDirection.SOUTH]
  ])("given the rover rotate %p from %p, it should point to %p",
    (movingDirection: RoverCommand, fromFacingDirection: FacingDirection, toFacingDirection: FacingDirection) => {
      expect(MarsRoverFactory.createMarsRoverFromFacingDirection(fromFacingDirection).rotate(movingDirection).publishLocation())
        .toEqual(MarsRoverFactory.createMarsRoverFromFacingDirection(toFacingDirection).publishLocation());
  });
});
