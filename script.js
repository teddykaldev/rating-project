let submit=document.getElementById("submitbtn");
let feedback=document.getElementById("feedbackContainer");
let thank=document.getElementById("thankYouContainer");
let btns=document.querySelectorAll(".btn");
let text=document.getElementById("text");

let rating="";
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
        for(let j=0;j<btns.length;j++){
            btns[j].classList.remove("selected");
        }
        this.classList.add("selected");

        rating=this.textContent;
    });
}

submit.addEventListener("click",function(){
    if(rating===""){
        alert("please select a rating.");
        return;
    }
    text.textContent=rating;
    feedback.style.display="none";
    thank.style.display="block";
});