const ib=document.getElementById("ib");
const listcont=document.getElementById("list-cont");
function addtask()
{
    if(ib.value==='')
    {
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ib.value;
        listcont.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ib.value="";
}
listcont.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);

