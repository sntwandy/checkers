'use strict'

const board = []

const createCheckerBoard = () => {
  for (let i = 0; i < 64; i++) {
    i % 2 === 0 ?
    board.push({
      id: i,
      color: 'white'
    }) : board.push({
      id: i,
      color: 'black'
    })
  }
}

createCheckerBoard()
console.log(board)