import { describe, expect, test } from "@jest/globals";
import { MarsRover, Position } from "../src/MarsRover";


describe("MarsRover", () => {
  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    let position = new Position(0, 0, "N");
    expect(JSON.stringify(createDefaultMarsRover())).toEqual(JSON.stringify(createMarsRoverFrom(position)));
  });

  function createDefaultMarsRover() {
    return new MarsRover();
  }

  function createMarsRoverFrom(position: Position) {
    return MarsRover.of(position);
  }

  test("given the rover rotate right from north, it should point to east", () => {
    expect(JSON.stringify(createDefaultMarsRover().rotate("R"))).toEqual(JSON.stringify(createMarsRoverFrom(new Position(0, 0, "E"))));
  });

  test("given the rover rotate left from north, it should point to west", () => {
    expect(JSON.stringify(createDefaultMarsRover().rotate("L"))).toEqual(JSON.stringify(createMarsRoverFrom(new Position(0, 0, "W"))));
  });

});
