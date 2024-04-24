const button = document.getElementById("button"); 
const text = document.getElementById("text");

if(button && text){
    document.addEventListener('click',()=>{
        text.textContent = "Text Changed!";
    })
}