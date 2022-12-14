# Mars Rover

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot.

'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

Here's the summary of the rules that could be implemented:
- You are given the initial starting point (0, 0, N) of a rover
- 0, 0, are X, Y co-ordinates on a grid of (10, 10)
- N is the direction it is facing (i.e. N, S, E, W)
- M allows the rover to move one point in the current direction
- the rover receives a char array of commands, e.g. RMMLM and returns the finishing point after the moves e.g. 2:1:N
- the rover wraps around if it reaches the end of the grid
- the grid may have obstacles. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle e.g. 0:2:2:N

Apply Object Calisthenics and Functional-Calisthenics as much as possible
- https://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf
- https://blog.ninjaferret.co.uk/2015/06/05/Introducing-Functional-Calisthenics.html
- https://www.codurance.com/publications/2017/10/12/functional-calisthenics

## Input:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

## Output:

The output for each rover should be its final co-ordinates and heading.

Test Input:

5 5

1 2 N

LMLMLMLMM

3 3 E

MMRMMRMRRM

Expected Output:

1 3 N

5 1 E

### Acknowledgements
This kata is described on [Google code](https://code.google.com/archive/p/marsrovertechchallenge/)

# References
- https://www.youtube.com/watch?v=24vzFAvOzo0
- https://github.com/emilybache/MarsRover-Kata
- https://github.com/emilybache/MarsRover-Sample-Tests
- https://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf
- https://blog.ninjaferret.co.uk/2015/06/05/Introducing-Functional-Calisthenics.html
- https://www.codurance.com/publications/2017/10/12/functional-calisthenics