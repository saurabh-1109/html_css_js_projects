let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msgcontainor=document.querySelector(".msg-containor")
let newbtn=document.querySelector("#new-btn")
let msg=document.querySelector("#msg")
let turn0=true;

const winpattern=[
    [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8],

];

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
});

});

const resetGame = () =>
{
    turn0=true;
    enableBoxes();
    msgcontainor.classList.add("hide");
}
const enableBoxes =()=>{
    
    for(let box of boxes){
        box.disabledBoxes=false;
        box.innerText="";
    }
}
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
const showwinner= (winner) =>{
    msg.innerText=`congrulation , Winner is  ${winner}`;
    msgcontainor.classList.remove("hide")
    disabledBoxes();
}
const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1v=boxes[pattern[0]].innerText;
        let pos2v=boxes[pattern[1]].innerText;
        let pos3v=boxes[pattern[2]].innerText;

        if(pos1v != "" && pos2v != "" && pos3v !=""){
            if(pos1v === pos2v && pos2v===pos3v){
            console.log("Winner",pos1v);
            showwinner(pos1v);
            }
        }
    }

}

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);