const bingoArray = []

window.onload = function () {
  createCells()
  createUserBoard()
}

const createCells = function () {
  const bingoNode = document.getElementById("bingo")
  for (let i = 0; i < 76; i++) {
    const bingoCellNode = document.createElement("div")
    bingoCellNode.className = "cell"
    const h3 = document.createElement("h3")
    h3.innerText = i + 1
    bingoCellNode.appendChild(h3)
    bingoNode.appendChild(bingoCellNode)
  }
}

function generateRandomNumber() {
  const randomNo = Math.floor(Math.random() * 76) + 1

  const cell = document.querySelectorAll(".cell")
  console.log(cell[randomNo - 1])
  cell[randomNo - 1].style.backgroundColor = "blue"
}

const createUserBoard = function () {
  const userNode = document.getElementById("userBoard")
  for (let i = 0; i < 24; i++) {
    const userBoardNode = document.createElement("div")
    userBoardNode.className = "box"
    const h3 = document.createElement("h3")
    h3.innerText = i + 1
    userBoardNode.appendChild(h3)
    userNode.appendChild(userBoardNode)
  }
}
