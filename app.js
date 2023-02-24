const scoreElements = document.querySelectorAll('.score1, .score2, .score3, .score4, .score5')
const SubmitScoreButton = document.querySelector('.card-submit')

console.log(SubmitScoreButton)


let scoreArray =[]
let clickState = 1
let submitScore = 0


for (let i = 1; i <= 5; i++) {
    scoreArray.push(document.querySelector(`.score${i}`))
    // do something with scoreElement
}


// change color when clicked
scoreElements.forEach(function(scoreElement,index) {
    console.log(submitScore)
    scoreElement.addEventListener('click', () => {    
        clickState = clickState+1
        
        if(clickState%2 === 0) {
            scoreArray[index].style.background = 'hsl(25, 97%, 53%)'
            submitScore = index+1     
            
        }
        if(clickState%2 === 1) {
            for (let i = 0; i <= 4; i++) {
                          
                scoreArray[i].style.background = '#262F38' 
            }                                
        }
    })   
})

SubmitScoreButton.addEventListener('click', () => {

    fetch('submit.html')
        .then(response => response.text())
        .then(data => {
            const body = document.querySelector('body')         
            body.innerHTML = data;          
            return body
        }) 
        .then(body => {
            document.querySelector('.submit-score').querySelector('p').textContent = `You selected ${submitScore} out of 5 `    
        })  
    })
    

    

