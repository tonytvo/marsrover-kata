import { describe, test, expect } from "@jest/globals";
import { MarsRover, Position } from "../src/MarsRover";


describe("MarsRover", () => {
  test("given the rover is created, it should have starting point of 0, 0, N", () => {
    let marsRover = new MarsRover();
    expect(JSON.stringify(marsRover)).toEqual(JSON.stringify(MarsRover.of(new Position(0, 0, "N"))));
  });

  test.skip("given the rover rotate right from north, it should point to east", () => {
    let marsRover = new MarsRover();
    expect(JSON.stringify(marsRover.rotate("R"))).toEqual(JSON.stringify(new Position(0, 0, "E")));
  });

});
