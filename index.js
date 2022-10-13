const bingoArray = []

window.onload = function () {
  createCells()
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
  return Math.floor(Math.random() * 76)
}
