let numBtn=document.querySelectorAll(".num");
let output=document.querySelector("input")
let string="";

Array.from(numBtn).forEach((numBtn)=>{
  numBtn.addEventListener("click",(e)=>{
    if(e.target.innerHTML == "="){
        string=eval(string);
        output.value=string;
    }
    else if(e.target.innerHTML == "AC"){
        string="";
        output.value=string;
    }
    else{
    console.log(e.target);
    string=string+e.target.innerHTML;
    output.value=string;
    }
  });
});