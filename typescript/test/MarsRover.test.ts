import { describe, expect, test } from "@jest/globals";
import { MarsRover, Position } from "../src/MarsRover";


describe("MarsRover", () => {
  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    expect(JSON.stringify(new MarsRover())).toEqual(JSON.stringify(MarsRover.of(new Position(0, 0, "N"))));
  });

  test("given the rover rotate right from north, it should point to east", () => {
    expect(JSON.stringify(new MarsRover().rotate("R"))).toEqual(JSON.stringify(MarsRover.of(new Position(0, 0, "E"))));
  });

});
