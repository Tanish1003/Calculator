let display=document.getElementById("inputBox")
let buttons=document.querySelectorAll("button");
let string="";
let buttonArray=Array.from(buttons);
buttonArray.forEach((btn)=>{
    
btn.addEventListener('click',ButtonClick)
})
function ButtonClick(event) {
    if(event.target.innerHTML==='delete')
    {
        string=string.substring(0,string.length-1);
        display.value=string;
    }
    else if(event.target.innerHTML==='AC'){
        string='';
        display.value=string;
    }
    else if(event.target.innerHTML==='=')
    {
        string =eval(string);
        display.value=string;
    }
    else
    {
    string +=event.target.innerHTML;
    display.value=string;
    }
    
    
}
