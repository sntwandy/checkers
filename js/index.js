'use strict'

const square = document.querySelector('#square');
const container = document.querySelector('#container');
const board = []
const paintBoard = []

// Create the checker board array
const createCheckerBoard = () => {
  for (let row = 1; row < 9; row++) {
    let arr = []
    for (let col = 1; col < 9; col++) {
      arr.push({
        id: `${row}${col}`,
        movement: `${col % 2 === 0  ? row % 2 === 0 ? true : false : row % 2 !== 0 ? true : false}`
      })
    }
    board.push({
      ...arr
    })
  }
}

// Paint the checker board in the browser
const paintCheckerBoard = () => {
  for (let row = 1; row < 9; row++) {
    const rowContainer = document.createElement('div')
    rowContainer.id = 'container'
    rowContainer.className = `row${row}`
    for (let col = 1; col < 9; col++) {
      const node = document.createElement('div')
      col % 2 === 0 ? node.className = row % 2 == 0
        ? `brown square ${row}${col}`
        : `ligth-brown square ${row}${col}`
        : node.className = row % 2 !== 0
          ? `brown square ${row}${col}`
          : `ligth-brown square ${row}${col}`
      rowContainer.appendChild(node)
    }
    container.appendChild(rowContainer)
  }
}

createCheckerBoard()
paintCheckerBoard()

console.log(board)