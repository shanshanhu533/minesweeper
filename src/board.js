export class Board{
  constructor(numberOfRows,numberOfColumns,numberOfBombs){
    this._numberOfRows=numberOfRows;
    this._numberOfColumns=numberOfColumns;
    this._numberOfBobms=numberOfBombs;
    this._numberOfTiles=numberOfRows * numberOfColumns;
    this._playerBoard=Board.generatePlayerBoard(numberOfRows,numberOfColumns);
    this._bombBoard=Board.generateBombBoard(numberOfRows,numberOfColumns,numberOfBombs);
  }

get playerBoard(){
  return this._playerBoard;
}

 flipTile (rowIndex,columnIndex){
  if (this._playerBoard[rowIndex][columnIndex]!==' ') {
    return'This tile has already been flipped!';
  } else if (this._bombBoard[rowIndex][columnIndex]==='B'){
      this._playerBoard[rowIndex][columnIndex]='B';
  } else {this._playerBoard[rowIndex][columnIndex] =this.getNumberOfNeighborBombs(
  rowIndex,columnIndex);
  }
  this._numberOfTiles--;
};

getNumberOfNeighborBombs (rowIndex,columnIndex) {
this._neighborOffsets =[
  [-1,-1],
  [-1,0],
  [-1,-1],
  [0,-1],
  [0,1],
  [1,-1],
  [1,0],
  [1,1]
];
 this._numberOfRows= this._bombBoard.length;
 this._numberOfColumns =this._bombBoard[0].length;
let numberOfBombs=0;
this._neighborOffsets.forEach(offset=>{
  const neighborRowIndex=rowIndex + offset[0];
  const neighborColumnIndex = columnIndex + offset[1];
  if (neighborRowIndex >=0 && neighborRowIndex < this._numberOfRows && neighborColumnIndex
  >=0 && neighborColumnIndex < this._numberOfColumns){
    if (this._bombBoard[neighborRowIndex][neighborColumnIndex]==='B'){
      numberOfBombs++;
    }
  }
  });
  return numberOfBombs;
};

hasSafeTiles(){
  return this._numberOfTiles!==this._numberOfBombs;

}
print(){console.log(this._playerBoard.map(row =>
row.join('|')).join('\n'));
}

static generatePlayerBoard (numberOfRows, numberOfColumns){
  let board = [];
  for (let i=0; i<numberOfRows; i++){
    let row =[    ];
    for (let j=0; j< numberOfColumns; j++){
    row.push(' ');
    }
    board.push(row);
    }
    return board;
};
static generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs){

  let board = [];
  for (let i=0; i<numberOfRows; i++){
    let row =[    ];
    for (let j=0; j< numberOfColumns; j++){
    row.push(null);
    }
    board.push(row);
    }

let numberOfBombsPlaced=0;
  while (numberOfBombsPlaced < numberOfBombs){
    let randomRowIndex= Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex=Math.floor(Math.random()*numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex]!=='B'){
    board[randomRowIndex][randomColumnIndex]='B';
    numberOfBombsPlaced++;}
  }

  return board;
};

}
