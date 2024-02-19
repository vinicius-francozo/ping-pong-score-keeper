const p1Object = {
    score: 0,
    tag: document.getElementById('p1Score'),
    buttonEvent: document.getElementById('p1AddPoint').addEventListener('click', () => {addPoint(p1Object, p2Object)})
}

const p2Object = {
    score: 0,
    tag: document.getElementById('p2Score'),
    buttonEvent: document.getElementById('p2AddPoint').addEventListener('click', () => {addPoint(p2Object, p1Object)})
}

let isGameOver = false

function addPoint(player, opp){
    const maxPoints = document.getElementById('point-counter')
    console.log('teste')
    if (player.score < maxPoints.value && !isGameOver){
        ++player.score
        player.tag.innerText = player.score + ' '
        if (player.score == maxPoints.value){
            isGameOver = true
            player.tag.style.color = '#198754'
            opp.tag.style.color = '#dc3545'
            document.querySelectorAll('[id*="Add"]').forEach((button) => button.disabled = true)
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
    isGameOver = false
}


const resetButton = document.getElementById('reset').addEventListener('click', () => {resetGame(p1Object, p2Object)})

