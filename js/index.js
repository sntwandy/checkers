'use strict'

const square = document.querySelector('#square');
const container = document.querySelector('#container');
const board = []
const paintBoard = []
let starGame = false

// Create the checker board array
const createCheckerBoard = () => {
  for (let row = 1; row < 9; row++) {
    let arr = []
    for (let col = 1; col < 9; col++) {
      arr.push({
        id: `${row}${col}`,
        movement: `${col % 2 === 0  ? row % 2 === 0 ? true : false : row % 2 !== 0 ? true : false}`,
        occupiedBy: 'none'
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
    rowContainer.className = `container row${row}`
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

// Add each piece in the right place of the checker board
const addPiece = (row, col, color) => {
  const piece = document.createElement('div')
  piece.addEventListener('click', (e) => {
    possibleMoves(e.target.parentElement.classList[2])
  })
  piece.className = color
  const container = document.getElementsByClassName(`${row}${col}`)
  row % 2 !== 0 ? col % 2 !== 0 && (
    container[0].appendChild(piece),
    board[row - 1][col - 1].occupiedBy = color
  )
  : col % 2 === 0 && (
    container[0].appendChild(piece),
    board[row - 1][col - 1].occupiedBy = color
  )
}

// Initialize the Game with each piece
const initializePieces = () => {
  if (!starGame) {
    let row = 1
    let col = 1
    let color = 'white'
    const logicPieces = () => {
      row >= 6 && (color='red')
      if (row > 3 && row < 6 || row > 8) {
        row++
        row < 9 && logicPieces()
      } else {
        addPiece(row, col, color)
        col++
        col > 8 && (col = 1, row++)
        logicPieces()
      }
    }
    row < 9 && logicPieces()
    starGame = true
  }
  console.log(board)
  possibleMoves()
}

// Posibles Movements to each piece and movements valid to each color
const possibleMoves = (pieceId) => {

  let color = 'white'
  const row = parseInt(pieceId.split('')[0])
  const col = parseInt(pieceId.split('')[1])

  board[row - 1][col - 1].occupiedBy === 'red' ? (color='red') : (color='white')


  if (color === 'white') {
    if (col >= 2 && col <= 7) {
      let moveOne = col - 1
      let moveSec = col + 1

      const node = document.getElementsByClassName(`square ${row + 1}${moveOne}`)
      const node2 = document.getElementsByClassName(`square ${row + 1}${moveSec}`)
      node[0].id = node[0].childNodes.length ? 'borderRed' : 'borderGreen'
      node2[0].id = node[0].childNodes.length ? 'borderRed' : 'borderGreen'
      setTimeout(() => {
        node[0].id = ''
        node2[0].id = ''
      }, 1000)
    } else {
      let moveOne = col === 8 ? col - 1 : col + 1
      const node = document.getElementsByClassName(`square ${row + 1}${moveOne}`)
      node[0].id = node[0].childNodes.length ? 'borderRed' : 'borderGreen'
      setTimeout(() => {
        node[0].id = ''
      }, 1000)
    }
  } else {
    if (col >= 2 && col <= 7) {
      let moveOne = col - 1
      let moveSec = col + 1
      const node = document.getElementsByClassName(`square ${row - 1}${moveOne}`)
      const node2 = document.getElementsByClassName(`square ${row - 1}${moveSec}`)
      node[0].id = node[0].childNodes.length ? 'borderRed' : 'borderGreen'
      node2[0].id = node2[0].childNodes.length ? 'borderRed' : 'borderGreen'
      setTimeout(() => {
        node[0].id = ''
        node2[0].id = ''
      }, 1000)
    } else {
      let moveOne = col === 8 ? col - 1 : col + 1
      const node = document.getElementsByClassName(`square ${row - 1}${moveOne}`)
      node[0].id = node[0].childNodes.length ? 'borderRed' : 'borderGreen'
      setTimeout(() => {
        node[0].id = ''
      }, 1000)
    }
  }
}

createCheckerBoard()
paintCheckerBoard()