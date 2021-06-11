'use strict'

const square = document.querySelector('#square');
const container = document.querySelector('#container');
const board = []
const paintBoard = []

const createCheckerBoard = () => {
  for (let i = 0; i < 8; i++) {
    let arr = []
    for (let j = 0; j < 8; j++) {
      arr.push({
        id: `${i}${j}`,
      })
    }
    board.push({
      ...arr
    })
  }
}

const paintCheckerBoard = () => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const node = document.createElement('div')
      j % 2 === 0 ? node.className = i % 2 == 0 ? 'black square' : 'white square' : node.className = i % 2 !== 0 ? 'black square' : 'white square'
      container.appendChild(node)
    }
  }
}

createCheckerBoard()
paintCheckerBoard()