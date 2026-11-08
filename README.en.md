# Alignements (Lines)

A puzzle game on a 9 × 9 board: move the balls to form lines of five balls of the same colour. Every move that does not make a line brings three new balls. Hold out as long as you can before the board fills up.

*Version française : [README.md](README.md)*

## How to play

- **Click a ball** to select it, then **click an empty square** to send it there.
- The ball only moves if a **free path** leads to that square: it travels square by square, up, down, left or right (never diagonally), and cannot pass through other balls.
- The **next three colours** are shown above the board: plan where they might get in your way.
- **Escape** deselects the ball. When the board is full, one click starts a new game; the **New game** button restarts at any time.

## Rules

- A game starts with five balls placed at random, out of seven colours.
- A **line of five or more balls** of the same colour disappears, horizontally, vertically or **diagonally**.
- If your move makes a line, no new balls arrive: you get a free move.
- Otherwise three balls drop onto random empty squares; if they complete a line as they land, it disappears too.
- The game ends when no empty square is left.

## Scoring

A line is worth 2 points per ball, plus 4 points for every ball beyond the fifth: 10 points for five balls, 16 for six, 22 for seven. Long lines and crossings (two lines in one move) are therefore worth much more than lines of five made one at a time.

## Statistics

The **Records** panel keeps your best score, the current score, the total number of lines made and the number of games played.

## Data and sync

The best score and lines made are stored by NeoDex, backed up with the rest of your data and synced between your PCs when sync is on. The plugin needs no other permission and never connects to the Internet.

## Install

In NeoDex: **NeoStore → Discover → Alignements → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
