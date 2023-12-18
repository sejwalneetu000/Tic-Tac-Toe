let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX,playerO

const winPatterns = [     //8winning patterns
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add ("hide"); 
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {    //CLICKED BUTTON
        if(turnO) {                   //O's turn
            box.innerText = "O";      //print O
            turnO = false;           //o's turn finish
        } else {                     //X's turn
            box.innerText = "X";    //print X
            turnO = true;           //0's turn again
        }
       box.disabled = true;       //cant click again

       checkwinner();
    });
});

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showwinner = () => {
    msg.innerText = "Congratulations, winner is ${winner} ";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);




