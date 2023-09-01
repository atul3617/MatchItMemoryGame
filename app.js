document.addEventListener('DOMContentLoaded',()=>{
//card for the game
const cardArray=[
    {
        name:'done',
        img:'images/done.png'
    },
    {
        name:'facebook',
        img:'images/facebook.png'
    },
    {
        name:'done',
        img:'images/done.png'
    },
    {
        name:'facebook',
        img:'images/facebook.png'
    },
    {
        name:'google',
        img:'images/google.png'
    },
    {
        name:'google',
        img:'images/google.png'
    },
    {
        name:'tele',
        img:'images/tele.png'
    },
    {
        name:'whatsapp',
        img:'images/whatsapp.png'
    },
    {
        name:'tele',
        img:'images/tele.png'
    },
    {
        name:'whatsapp',
        img:'images/whatsapp.png'
    },
    {
        name:'snap',
        img:'images/snap.png'
    },
    {
        name:'snap',
        img:'images/snap.png'
    },
    {
        name:'mlogo',
        img:'images/mlogo.png'
    },
    {
        name:'mlogo',
        img:'images/mlogo.png'
    },
    {
        name:'blank',
        img:'images/blank.png'
    },    {
        name:'blank',
        img:'images/blank.png'
    }
] 

cardArray.sort(()=>0.5 - Math.random())

const grid=document.querySelector('.grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardsChosenId=[]
let cardsWon=[]

// game board

function createBoard(){
for (let i = 0; i < cardArray.length; i++) {
    const card=document.createElement('img')
    card.setAttribute('src','images/pwd.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click',flipCard)
    grid.appendChild(card)
 }
}
// check for match
function checkForMatch(){
 const cards =document.querySelectorAll('img')
    const optionOneId=cardsChosenId[0]
    const optionTwoId=cardsChosenId[1]

      if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/pwd.png')
      cards[optionTwoId].setAttribute('src', 'images/pwd.png')
      alert('You have clicked the same image!')
      }
   else if(cardsChosen[0] === cardsChosen[1]){
        alert(`it's a match`)
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/pwd.png')
        cards[optionTwoId].setAttribute('src','images/pwd.png')
        alert('try again')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Hurray! you found them all'
    }
}

// flip your card
function flipCard() {
    let cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}
createBoard()
})