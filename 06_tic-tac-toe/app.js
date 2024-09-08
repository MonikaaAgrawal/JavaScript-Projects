let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

//deciding the upcoming btn should be alternate
let turn0 = true//player x, player0

//1D array
//let arr = ["apple", "banana", "litchi"]

//2D arrays
//let arr2 = [["apple", "banana"], ["potato", "mushroom"], ["pants", "shirts"]];

//winning patterns 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked")
        //box.innerText = ""    
        if(turn0){ //player 0 turn
            box.innerText = "0";
            box.style.color = "blue";
            turn0 = false;
        }
        else{ //player x turn
            box.innerText = "X"
            box.style.color = "red";
            turn0 = true
        }
        box.disabled = true;
        

        checkWinner(); //checks and keep track of who's winning
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () => {
    //checking at all the winning patterns and to that given no, if all the values are same then the player wins
    for(let pattern of winPatterns){
        //console.log(pattern)  //all the patterns are etting checked
        //finding the individual index of each array
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );  //boxes at that position

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText; 

        //now check if all the places are filled and same?
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                //console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        } 
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)