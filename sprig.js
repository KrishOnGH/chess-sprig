/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Chess
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const selectedEmpty = "s"
const lightEmpty = "m"
const darkEmpty = "M"

const pawnWhiteLightSquare = "p"
const knightWhiteLightSquare = "n"
const bishopWhiteLightSquare = "b"
const rookWhiteLightSquare = "r"
const queenWhiteLightSquare = "q"
const kingWhiteLightSquare = "k"

const pawnWhiteDarkSquare = "P"
const knightWhiteDarkSquare = "N"
const bishopWhiteDarkSquare = "B"
const rookWhiteDarkSquare = "R"
const queenWhiteDarkSquare = "Q"
const kingWhiteDarkSquare = "K"

const pawnWhiteSelectedSquare = "1"
const knightWhiteSelectedSquare = "2"
const bishopWhiteSelectedSquare = "3"
const rookWhiteSelectedSquare = "4"
const queenWhiteSelectedSquare = "5"
const kingWhiteSelectedSquare = "6"

const pawnBlackLightSquare = "a"
const knightBlackLightSquare = "c"
const bishopBlackLightSquare = "e"
const rookBlackLightSquare = "f"
const queenBlackLightSquare = "g"
const kingBlackLightSquare = "h"

const pawnBlackDarkSquare = "A"
const knightBlackDarkSquare = "C"
const bishopBlackDarkSquare = "E"
const rookBlackDarkSquare = "F"
const queenBlackDarkSquare = "G"
const kingBlackDarkSquare = "H"

const pawnBlackSelectedSquare = "!"
const knightBlackSelectedSquare = "@"
const bishopBlackSelectedSquare = "#"
const rookBlackSelectedSquare = "$"
const queenBlackSelectedSquare = "%"
const kingBlackSelectedSquare = "^"

setLegend(
  [ pawnBlackDarkSquare, bitmap`
5555555555555555
5555555555555555
5555555005555555
5555550220555555
5555502002055555
5555502002055555
5555550220555555
5555502002055555
5555502002055555
5555502002055555
5555502002055555
5555020000205555
5550222222220555
5550000000000555
5550222222220555
5550000000000555` ],
  [ knightBlackDarkSquare, bitmap`
5555555022055555
5555505002005555
5555020000020555
5550202000002055
5502020002002055
5020000220002055
5020022020000205
5502200020000205
5550055020000205
5555550200000205
5555502000002055
5555020000002055
5555020000002055
5550000000000005
5550222222222205
5550000000000005` ],
  [ bishopBlackDarkSquare, bitmap`
5555555005555555
5555550220555555
5555555005555555
5555550220555555
5555502002055555
5555020000205555
5550200002020555
5550200020020555
5550200000020555
5555020000205555
5555022222205555
5555020000205555
5555502002055555
5555020000205555
5550222222220555
5550000000000555` ],
  [ rookBlackDarkSquare, bitmap`
5500002002000055
5502220220222055
5502022002202055
5502000000002055
5502222222222055
5550200000020555
5555020000205555
5555020000205555
5555020000205555
5555020000205555
5555020000205555
5550200000020555
5550222222220555
5502000000002055
5502222222222055
5500000000000055` ],
  [ queenBlackDarkSquare, bitmap`
5555555005555555
5555550220555555
0555550220555550
0055502002055500
0200502002050020
0222020000202220
0200200000020020
5020000000000205
5020000000000205
5020222222220205
5502000000002055
5502222222222055
5022000000002205
5020000000000205
5002222222222005
5550000000000555` ],
  [ kingBlackDarkSquare, bitmap`
5555550000555555
5555500220055555
5555502002055555
5550002002000555
5502220220222055
5020002002000205
0200000220000020
0200000220000020
0200000220000020
0200000000000020
5020222222220205
5502000000002055
5502222222222055
5502000000002055
5500222222220055
5550000000000555` ],
  
  [ pawnBlackLightSquare, bitmap`
7777777777777777
7777777777777777
7777777007777777
7777770220777777
7777702002077777
7777702002077777
7777770220777777
7777702002077777
7777702002077777
7777702002077777
7777702002077777
7777020000207777
7770222222220777
7770000000000777
7770222222220777
7770000000000777` ],
  [ knightBlackLightSquare, bitmap`
7777777022077777
7777707002007777
7777020000020777
7770202000002077
7702020002002077
7020000220002077
7020022020000207
7702200020000207
7770077020000207
7777770200000207
7777702000002077
7777020000002077
7777020000002077
7770000000000007
7770222222222207
7770000000000007` ],
  [ bishopBlackLightSquare, bitmap`
7777777007777777
7777770220777777
7777777007777777
7777770220777777
7777702002077777
7777020000207777
7770200002020777
7770200020020777
7770200000020777
7777020000207777
7777022222207777
7777020000207777
7777702002077777
7777020000207777
7770222222220777
7770000000000777` ],
  [ rookBlackLightSquare, bitmap`
7700002002000077
7702220220222077
7702022002202077
7702000000002077
7702222222222077
7770200000020777
7777020000207777
7777020000207777
7777020000207777
7777020000207777
7777020000207777
7770200000020777
7770222222220777
7702000000002077
7702222222222077
7700000000000077` ],
  [ queenBlackLightSquare, bitmap`
7777777007777777
7777770220777777
0777770220777770
0077702002077700
0200702002070020
0222020000202220
0200200000020020
7020000000000207
7020000000000207
7020222222220207
7702000000002077
7702222222222077
7022000000002207
7020000000000207
7002222222222007
7770000000000777` ],
  [ kingBlackLightSquare, bitmap`
7777770000777777
7777700220077777
7777702002077777
7770002002000777
7702220220222077
7020002002000207
0200000220000020
0200000220000020
0200000220000020
0200000000000020
7020222222220207
7702000000002077
7702222222222077
7702000000002077
7700222222220077
7770000000000777` ],
  
  [ pawnBlackSelectedSquare, bitmap`
3333333333333333
3333333333333333
3333333003333333
3333330220333333
3333302002033333
3333302002033333
3333330220333333
3333302002033333
3333302002033333
3333302002033333
3333302002033333
3333020000203333
3330222222220333
3330000000000333
3330222222220333
3330000000000333` ],
  [ knightBlackSelectedSquare, bitmap`
3333333022033333
3333303002003333
3333020000020333
3330202000002033
3302020002002033
3020000220002033
3020022020000203
3302200020000203
3330033020000203
3333330200000203
3333302000002033
3333020000002033
3333020000002033
3330000000000003
3330222222222203
3330000000000003` ],
  [ bishopBlackSelectedSquare, bitmap`
3333333003333333
3333330220333333
3333333003333333
3333330220333333
3333302002033333
3333020000203333
3330200002020333
3330200020020333
3330200000020333
3333020000203333
3333022222203333
3333020000203333
3333302002033333
3333020000203333
3330222222220333
3330000000000333` ],
  [ rookBlackSelectedSquare, bitmap`
3300002002000033
3302220220222033
3302022002202033
3302000000002033
3302222222222033
3330200000020333
3333020000203333
3333020000203333
3333020000203333
3333020000203333
3333020000203333
3330200000020333
3330222222220333
3302000000002033
3302222222222033
3300000000000033` ],
  [ queenBlackSelectedSquare, bitmap`
3333333003333333
3333330220333333
0333330220333330
0033302002033300
0200302002030020
0222020000202220
0200200000020020
3020000000000203
3020000000000203
3020222222220203
3302000000002033
3302222222222033
3022000000002203
3020000000000203
3002222222222003
3330000000000333` ],
  [ kingBlackSelectedSquare, bitmap`
3333330000333333
3333300220033333
3333302002033333
3330002002000333
3302220220222033
3020002002000203
0200000220000020
0200000220000020
0200000220000020
0200000000000020
3020222222220203
3302000000002033
3302222222222033
3302000000002033
3300222222220033
3330000000000333` ],
  
  [ pawnWhiteDarkSquare, bitmap`
5555555555555555
5555555555555555
5555555225555555
5555552002555555
5555520220255555
5555520220255555
5555552002555555
5555520220255555
5555520220255555
5555520220255555
5555520220255555
5555202222025555
5552000000002555
5552222222222555
5552000000002555
5552222222222555` ],
  [ knightWhiteDarkSquare, bitmap`
5555555200255555
5555525220225555
5555202222202555
5552020222220255
5520202220220255
5202222002220255
5202200202222025
5520022202222025
5552255202222025
5555552022222025
5555520222220255
5555202222220255
5555202222220255
5552222222222225
5552000000000025
5552222222222225` ],
  [ bishopWhiteDarkSquare, bitmap`
5555555225555555
5555552002555555
5555555225555555
5555552002555555
5555520220255555
5555202222025555
5552022220202555
5552022202202555
5552022222202555
5555202222025555
5555200000025555
5555202222025555
5555520220255555
5555202222025555
5552000000002555
5552222222222555` ],
  [ rookWhiteDarkSquare, bitmap`
5522220220222255
5520002002000255
5520200220020255
5520222222220255
5520000000000255
5552022222202555
5555202222025555
5555202222025555
5555202222025555
5555202222025555
5555202222025555
5552022222202555
5552000000002555
5520222222220255
5520000000000255
5522222222222255` ],
  [ queenWhiteDarkSquare, bitmap`
5555555225555555
5555552002555555
2555552002555552
2255520220255522
2022520220252202
2000202222020002
2022022222202202
5202222222222025
5202222222222025
5202000000002025
5520222222220255
5520000000000255
5200222222220025
5202222222222025
5220000000000225
5552222222222555` ],
  [ kingWhiteDarkSquare, bitmap`
5555552222555555
5555522002255555
5555520220255555
5552220220222555
5520002002000255
5202220220222025
2022222002222202
2022222002222202
2022222002222202
2022222222222202
5202000000002025
5520222222220255
5520000000000255
5520222222220255
5522000000002255
5552222222222555` ],
   
  [ pawnWhiteLightSquare, bitmap`
7777777777777777
7777777777777777
7777777227777777
7777772002777777
7777720220277777
7777720220277777
7777772002777777
7777720220277777
7777720220277777
7777720220277777
7777720220277777
7777202222027777
7772000000002777
7772222222222777
7772000000002777
7772222222222777` ],
  [ knightWhiteLightSquare, bitmap`
7777777200277777
7777727220227777
7777202222202777
7772020222220277
7720202220220277
7202222002220277
7202200202222027
7720022202222027
7772277202222027
7777772022222027
7777720222220277
7777202222220277
7777202222220277
7772222222222227
7772000000000027
7772222222222227` ],
  [ bishopWhiteLightSquare, bitmap`
7777777227777777
7777772002777777
7777777227777777
7777772002777777
7777720220277777
7777202222027777
7772022220202777
7772022202202777
7772022222202777
7777202222027777
7777200000027777
7777202222027777
7777720220277777
7777202222027777
7772000000002777
7772222222222777` ],
  [ rookWhiteLightSquare, bitmap`
7722220220222277
7720002002000277
7720200220020277
7720222222220277
7720000000000277
7772022222202777
7777202222027777
7777202222027777
7777202222027777
7777202222027777
7777202222027777
7772022222202777
7772000000002777
7720222222220277
7720000000000277
7722222222222277` ],
  [ queenWhiteLightSquare, bitmap`
7777777227777777
7777772002777777
2777772002777772
2277720220277722
2022720220272202
2000202222020002
2022022222202202
7202222222222027
7202222222222027
7202000000002027
7720222222220277
7720000000000277
7200222222220027
7202222222222027
7220000000000227
7772222222222777` ],
  [ kingWhiteLightSquare, bitmap`
7777772222777777
7777722002277777
7777720220277777
7772220220222777
7720002002000277
7202220220222027
2022222002222202
2022222002222202
2022222002222202
2022222222222202
7202000000002027
7720222222220277
7720000000000277
7720222222220277
7722000000002277
7772222222222777` ],

  [ pawnWhiteSelectedSquare, bitmap`
3333333333333333
3333333333333333
3333333223333333
3333332002333333
3333320220233333
3333320220233333
3333332002333333
3333320220233333
3333320220233333
3333320220233333
3333320220233333
3333202222023333
3332000000002333
3332222222222333
3332000000002333
3332222222222333` ],
  [ knightWhiteSelectedSquare, bitmap`
3333333200233333
3333323220223333
3333202222202333
3332020222220233
3320202220220233
3202222002220233
3202200202222023
3320022202222023
3332233202222023
3333332022222023
3333320222220233
3333202222220233
3333202222220233
3332222222222223
3332000000000023
3332222222222223` ],
  [ bishopWhiteSelectedSquare, bitmap`
3333333223333333
3333332002333333
3333333223333333
3333332002333333
3333320220233333
3333202222023333
3332022220202333
3332022202202333
3332022222202333
3333202222023333
3333200000023333
3333202222023333
3333320220233333
3333202222023333
3332000000002333
3332222222222333` ],
  [ rookWhiteSelectedSquare, bitmap`
3322220220222233
3320002002000233
3320200220020233
3320222222220233
3320000000000233
3332022222202333
3333202222023333
3333202222023333
3333202222023333
3333202222023333
3333202222023333
3332022222202333
3332000000002333
3320222222220233
3320000000000233
3322222222222233` ],
  [ queenWhiteSelectedSquare, bitmap`
3333333223333333
3333332002333333
2333332002333332
2233320220233322
2022320220232202
2000202222020002
2022022222202202
3202222222222023
3202222222222023
3202000000002023
3320222222220233
3320000000000233
3200222222220023
3202222222222023
3220000000000223
3332222222222333` ],
  [ kingWhiteSelectedSquare, bitmap`
3333332222333333
3333322002233333
3333320220233333
3332220220222333
3320002002000233
3202220220222023
2022222002222202
2022222002222202
2022222002222202
2022222222222202
3202000000002023
3320222222220233
3320000000000233
3320222222220233
3322000000002233
3332222222222333` ],
  
  [ selectedEmpty, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333` ],
  [ darkEmpty, bitmap`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555` ],
  [ lightEmpty, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777` ]
)

let level = 0
const screens = [
  map`
FcEhGeCf
aAaAaAaA
MmMmMmMm
mMmMmMmM
MmMmBmMm
mMmMmMmM
PpPpPpPp
rNbKqBnR`
]

setMap(screens[level])

function getSprite(x, y) {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
    return getTile(x, y)[0]['_type']
  } else {
    return '.'
  }
}

function darkOrLight(x, y) {
  if ((x+y) % 2 == 0) {
    return 'dark'
  } else {
    return 'light'
  }
}

function selectSquare(x, y) {
  let sprites = ['m', 'p', 'n', 'b', 'r', 'q', 'k', 'a', 'c', 'e', 'f', 'g', 'h']
  let correspondingSprites = ['s', '1', '2', '3', '4', '5', '6', '!', '@', '#', '$', '%', '^']

  // Invert X and Y into absolute position
  x = x - 1
  y = 8 - y

  let sprite = getSprite(x, y).toLowerCase()
  
  if (sprites.includes(sprite)) {
    let indexOfSprite = sprites.indexOf(sprite)
    let newSprite = correspondingSprites[indexOfSprite]

    clearTile(x, y)
    addSprite(x, y, newSprite)
  }
}

function unselectSquare(x, y) {
  const sprites = ['s', '1', '2', '3', '4', '5', '6', '!', '@', '#', '$', '%', '^'];
  const correspondingSprites = ['m', 'p', 'n', 'b', 'r', 'q', 'k', 'a', 'c', 'e', 'f', 'g', 'h'];

  // Invert X and Y into absolute position
  x = x - 1;
  y = 8 - y;
  
  let sprite = getSprite(x, y);
  
  if (sprites.includes(sprite)) {
    let indexOfSprite = sprites.indexOf(sprite);
    let newSprite = correspondingSprites[indexOfSprite];

    if (darkOrLight(x, y) == 'dark') {
      newSprite = newSprite.toUpperCase()
    }
  
    clearTile(x, y);
    addSprite(x, y, newSprite);
  }
}

function unselectAllSquares() {
  const sprites = ['s', 's', '1', '2', '3', '4', '5', '6', '!', '@', '#', '$', '%', '^'];
  const correspondingSprites = ['d', 'l', 'p', 'n', 'b', 'r', 'q', 'k', 'a', 'c', 'e', 'f', 'g', 'h'];

  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      unselectSquare(x, y)
    }
  }
}

function checkPiece(x, y) {
  const spritesForWhite = ['p', 'n', 'b', 'r', 'q', 'k', '1', '2', '3', '4', '5', '6'];
  const correspondingNamesForWhite = ['Pawn', 'Knight', 'Bishop', 'Rook', 'Queen', 'King', 'Pawn', 'Knight', 'Bishop', 'Rook', 'Queen', 'King'];
  
  const spritesForBlack = ['a', 'c', 'e', 'f', 'g', 'h', '!', '@', '#', '$', '%', '^'];
  const correspondingNamesForBlack = ['Pawn', 'Knight', 'Bishop', 'Rook', 'Queen', 'King', 'Pawn', 'Knight', 'Bishop', 'Rook', 'Queen', 'King'];

  // Invert X and Y into absolute position
  x = x - 1
  y = 8 - y
  
  let sprite = getSprite(x, y).toLowerCase()

  if (spritesForWhite.includes(sprite)) {
    let indexOfSprite = spritesForWhite.indexOf(sprite);
    let name = correspondingNamesForWhite[indexOfSprite];
    return ["White", name]
  } else if (spritesForBlack.includes(sprite)) {
    let indexOfSprite = spritesForBlack.indexOf(sprite);
    let name = correspondingNamesForBlack[indexOfSprite];
    return ["Black", name]
  } else if (sprite == 'm') {
    return 'empty'
  } else {
    return 'out of board'
  }
}

function checkPossibleMoves(x, y) {
  let piece = checkPiece(x, y)

  if (piece == 'empty') {
    return 'empty'
  }
  
  let pieceColor = piece[0]
  let pieceName = piece[1]
  let possibleMoves = []

  if (pieceName == 'Pawn') {
    // Check Forward Piece
    let forwardPiece = checkPiece(x, y-1)
    if (forwardPiece == 'empty') {
      possibleMoves.push([x, y-1])
    }

    // Check Two Forward Piece if at Start
    if (y == 7) {
      let twoForwardPiece = checkPiece(x, y-2)
      if (twoForwardPiece == 'empty') {
        possibleMoves.push([x, y-2])
      }
    }

    // Check diagonal captures
    let rightDiagonalPiece = checkPiece(x-1, y-1)
    if (rightDiagonalPiece != 'empty' && rightDiagonalPiece != 'out of board' && rightDiagonalPiece[0] != pieceColor) {
      possibleMoves.push([x-1, y-1])
    }

    // Check diagonal captures
    let leftDiagonalPiece = checkPiece(x+1, y-1)
    if (leftDiagonalPiece != 'empty' && leftDiagonalPiece != 'out of board' && leftDiagonalPiece[0] != pieceColor) {
      possibleMoves.push([x+1, y-1])
    }
  } else if (pieceName == 'Knight') {
    // Check Top Middle Right
    let topMiddleRight = checkPiece(x+1, y+2)
    if (topMiddleRight != 'out of board' && (topMiddleRight == 'empty' || topMiddleRight[0] != pieceColor)) {
      possibleMoves.push([x+1, y+2])
    }
    
    // Check Top Middle Left
    let topMiddleLeft = checkPiece(x-1, y+2)
    if (topMiddleLeft != 'out of board' && (topMiddleLeft == 'empty' || topMiddleLeft[0] != pieceColor)) {
      possibleMoves.push([x-1, y+2])
    }
    
    // Check Top Right
    let topRight = checkPiece(x+2, y+1)
    if (topRight != 'out of board' && (topRight == 'empty' || topRight[0] != pieceColor)) {
      possibleMoves.push([x+2, y+1])
    }

    // Check Top Left
    let topLeft = checkPiece(x-2, y+1)
    if (topLeft != 'out of board' && (topLeft == 'empty' || topLeft[0] != pieceColor)) {
      possibleMoves.push([x-2, y+1])
    }

    // Check Bottom Middle Right
    let bottomMiddleRight = checkPiece(x+1, y-2)
    if (bottomMiddleRight != 'out of board' && (bottomMiddleRight == 'empty' || bottomMiddleRight[0] != pieceColor)) {
      possibleMoves.push([x+1, y-2])
    }

    // Check Bottom Middle Left
    let bottomMiddleLeft = checkPiece(x-1, y-2)
    if (bottomMiddleLeft != 'out of board' && (bottomMiddleLeft == 'empty' || bottomMiddleLeft[0] != pieceColor)) {
      possibleMoves.push([x-1, y-2])
    }

    // Check Bottom Right
    let bottomRight = checkPiece(x+2, y-1)
    if (bottomRight != 'out of board' && (bottomRight == 'empty' || bottomRight[0] != pieceColor)) {
      possibleMoves.push([x+2, y-1])
    }

    // Check Bottom Left
    let bottomLeft = checkPiece(x-2, y-1)
    if (bottomLeft != 'out of board' && (bottomLeft == 'empty' || bottomLeft[0] != pieceColor)) {
      possibleMoves.push([x-2, y-1])
    }
  } else if (pieceName == 'Bishop') {
    // Top Right Diagonal
    for (let i = 1; i <= 7; i++) {
      let squarex = x+i
      let squarey = y+i
      let square = checkPiece(squarex, squarey)
      if (square != 'out of board') {
        if (square == 'empty') {
          possibleMoves.push([squarex, squarey])
        } else if (square[0] != pieceColor) {
          possibleMoves.push([squarex, squarey])
          break
        } else {
          break
        }
      }
    }

    // Top Left Diagonal
    for (let i = 1; i <= 7; i++) {
      let squarex = x-i
      let squarey = y+i
      let square = checkPiece(squarex, squarey)
      if (square != 'out of board') {
        if (square == 'empty') {
          possibleMoves.push([squarex, squarey])
        } else if (square[0] != pieceColor) {
          possibleMoves.push([squarex, squarey])
          break
        } else {
          break
        }
      }
    }

    // Bottom Right Diagonal
    for (let i = 1; i <= 7; i++) {
      let squarex = x+i
      let squarey = y-i
      let square = checkPiece(squarex, squarey)
      if (square != 'out of board') {
        if (square == 'empty') {
          possibleMoves.push([squarex, squarey])
        } else if (square[0] != pieceColor) {
          possibleMoves.push([squarex, squarey])
          break
        } else {
          break
        }
      }
    }

    // Bottom Left Diagonal
    for (let i = 1; i <= 7; i++) {
      let squarex = x-i
      let squarey = y-i
      let square = checkPiece(squarex, squarey)
      if (square != 'out of board') {
        if (square == 'empty') {
          possibleMoves.push([squarex, squarey])
        } else if (square[0] != pieceColor) {
          possibleMoves.push([squarex, squarey])
          break
        } else {
          break
        }
      }
    }
  }

  return possibleMoves
}

let selectedX = 5
let selectedY = 4
selectSquare(selectedX, selectedY)

onInput("w", () => {
  if (selectedY < 8) {
    selectedY++
    unselectAllSquares()
    selectSquare(selectedX, selectedY)
  }
})

onInput("a", () => {
  if (selectedX > 1) {
    selectedX--
    unselectAllSquares()
    selectSquare(selectedX, selectedY)
  }
})

onInput("s", () => {
  if (selectedY > 1) {
    selectedY--
    unselectAllSquares()
    selectSquare(selectedX, selectedY)
  }
})

onInput("d", () => {
  if (selectedX < 8) {
    selectedX++
    unselectAllSquares()
    selectSquare(selectedX, selectedY)
  }
})

console.log(checkPossibleMoves(5, 4))

afterInput(() => {
  
})