let btn1=document.getElementById("left");

let btn2=document.getElementById("right");
let change=document.querySelector("#val")
let l1=(event)=>{
    let val="0123456789ABCDEF";
    let code="#";
    for(let i=0;i<6;i++)
    {
           code+=(val[Math.floor(Math.random()*16)]);
    }
    return code
}
 let left=()=>{
    rbg1=l1();
    document.querySelectorAll(".main")[0].style.backgroundImage=`linear-gradient(to right,${rbg1},#444)`;
    change.innerHTML=`background-image: linear-gradient(to right,rgb(${rbg1}),rgb(152,63,198));`
    btn1.innerText=rbg1;
 }
 let right=()=>{
     rbg2=l1();
    document.querySelectorAll(".main")[0].style.backgroundImage=`linear-gradient(to right,${rbg1},${rbg2})`;
    change.innerHTML=`background-image: linear-gradient(to right,rgb(${rbg1}),rgb(${rbg2}));`
    btn2.innerText=rbg2;
 }
 btn2.addEventListener("click",right)
btn1.addEventListener("click",left);
