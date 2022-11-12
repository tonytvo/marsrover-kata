import { describe, expect, test } from "@jest/globals";
import { MarsRover, Position, FacingDirection } from "../src/MarsRover";
import { MarsRoverFactory } from "../src/MarsRoverFactory";

describe("MarsRover", () => {

  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    let position = new Position(0, 0, "N");
    expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover())).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(position)));
  });

  test("given the rover rotate right from north, it should point to east", () => {
    expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover().rotate("R"))).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(new Position(0, 0, FacingDirection.EAST))));
  });

  test("given the rover rotate left from north, it should point to west", () => {
    expect(JSON.stringify(MarsRoverFactory.createDefaultMarsRover().rotate("L"))).toEqual(JSON.stringify(MarsRoverFactory.createMarsRoverFrom(new Position(0, 0, FacingDirection.WEST))));
  });

});
