/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  
  // row = row || 0;
  // col = col || 0;


  for (var row = row || 0; row < n; row++) {
  // if(!board.hasRowConflictAt(row)){ // check
    for (var col = 0; col < n; col++){
      board.togglePiece(row,col); // check
      if(board.hasRowConflictAt(row) || board.hasColConflictAt(col)) {
        board.togglePiece(row,col);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var factorial = function (n) {
    if (n-1 < 1) {
      return n;
    } else {
      return n * factorial(n-1);
    }
  };


  var solutionCount = factorial(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

window.returnNRooksSolutions = function(n) {
  
  return undefined;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board ({'n': n});
  //define row and column
  var row = 0;
  var col = 0;
  //if n is even,
  if (n % 2 === 0){
    //col starts at one
    col = 1;
  }

  //define recursive function findToggle; input is row and column, output is boolean
  var findToggle = function(row, col) {
    //togglePiece
    board.togglePiece(row, col);
    //if hasNoQueenConflicts
    if (board.hasNoQueenConflicts()){
      //base case
      //if row is equal to (n-1)
      if (row === n -1){
        //return true
        return true;
      }
      //recursive case
      //else
      else {
        //increment row by one, 
        row++;
        //increment col by two
        col+=2;
        //if col is greater or equal to n
        if ()
          //set col equal to zero
        //if findToggle returns true  
          //return true  
        //else
          //increment col
          //call findToggle      
        
      }
    }
    //else
      //untoggle piece
      //return false

  };

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme
  //some number pattern
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
