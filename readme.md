# Sprig Chess Game

Welcome to the best Sprig Chess game! This is an excellent classic 8x8 chess game designed for the Sprig Console by Hackclub. It's designed for two players and offers a unique multiplayer experience where the board flips to the current player's perspective.

## Features

- **Rules**: Enjoy the world's most favored strategy game with all the traditional piece movements and captures.
- **Pawn Promotion**: Pawns that reach the opposite end of the board can be promoted to a Queen.
- **Game-Ending Conditions**:
  - Checkmate: Win by putting the opponent's king in an inescapable check.
  - Stalemate: The game ends in a draw if a player has no legal moves but is not in check.
  - Insufficient Material: Automatically detects and ends the game in a draw when neither player has enough pieces to checkmate.
- **Undo Move**: Made a mistake? No worries! You can undo your last move(s).

## How to Play

1. Start the game on your Sprig Console.
2. White moves first. The board will be oriented from White's perspective.
3. Use the Sprig controls to select and move your pieces according to chess rules.
4. After each move, the board will flip, showing the new current player's perspective.
5. Continue playing until one player achieves checkmate or the game ends in a draw.

## Controls

- To select a piece, you can use the WASD buttons.
- If you wish to pick up a piece, simply press I.
- To place your selected piece, press L.
- If you made a mistake, you can undo the last move(s) by pressing K.

## Game Rules

This implementation follows most standard chess rules, excluding only:

- En passant captures
- Castling (both kingside and queenside)
- Pawn promotion to anything except Queen

For a full refresher on chess rules, visit [Chess.com's Rules](https://www.chess.com/learn-how-to-play-chess).

## Technical Details

This game is written in JavaScript and designed specifically for the Sprig Console environment. It leverages Sprig's game development capabilities to create an engaging chess experience.

## Contributing

Feel free to fork this project, make improvements, and submit pull requests! We welcome contributions that could enhance the game, such as:

- Adding a timer feature for timed matches
- Castling to both kingside and queenside
- En Passant
- Expanding pawn promotion options (to Rook, Bishop, or Knight)
- Implementing an AI opponent for single-player mode
- Enhancing the user interface

Your ideas and code can help make this chess game even better for the Sprig community!

## License

MIT License

Copyright (c) 2024 Krish Arora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments

- Thanks to Hackclub for creating the Sprig Console and fostering game development.
- Appreciation to all chess enthusiasts who continue to keep this timeless game alive and evolving.

Enjoy your time playing one of the world's oldest and most favored games, anywhere!
