const playerOneObject = {
    name: 'player 1',
    score: 0,
    tag: document.getElementById('p1Score'),
    buttonEvent: document.getElementById('p1AddPoint').addEventListener('click', () => {addPoint(p1Object, p2Object)})
}

const playerTwoObject = {
    name: 'player 2',
    score: 0,
    tag: document.getElementById('p2Score'),
    buttonEvent: document.getElementById('p2AddPoint').addEventListener('click', () => {addPoint(p2Object, p1Object)})
}

let isGameOver = false
const winner = document.getElementById('winner')
const maxPoints = document.getElementById('point-counter')

function addPoint(player, opp){
    maxPoints.disabled = true
    if (player.score < maxPoints.value && !isGameOver){
        ++player.score
        player.tag.innerText = player.score + ' '
        if (player.score == maxPoints.value){
            isGameOver = true
            player.tag.style.color = '#198754'
            opp.tag.style.color = '#dc3545'
            document.querySelectorAll('[id*="Add"]').forEach((button) => button.disabled = true)
            winner.innerText = `${player.name} wins`
            winner.hidden = false
        }
    }
}

function resetGame(...players){
    for (i of players){
        i.score = 0
        i.tag.innerText = i.score + ' '
        i.tag.style.color = ''
    }
    document.querySelectorAll('[id*="Add"]').forEach((button) => button.disabled = false)
    maxPoints.disabled = false
    winner.hidden = true
    isGameOver = false
}


const resetButton = document.getElementById('reset').addEventListener('click', () => {resetGame(p1Object, p2Object)})

