let writting = document.querySelector(".writtingbox");
let btn = document.querySelector(".add");

btn.addEventListener("click",function (){
let newli = document.createElement("li");
newli.innerText = writting.value;
let check = document.createElement("button");
check.innerText = "done";
let del = document.createElement("button");
del.innerText = "remove";
del.addEventListener("click",function (){
    todotask.removeChild(newli);
    todotask.removeChild(check);
    todotask.removeChild(del);
})
check.addEventListener("click",function (){
    let newcompli = document.createElement("li");
    newcompli.innerText = newli.innerText;
    let completedtask = document.querySelector(".completed");
    completedtask.appendChild(newcompli);
    let dele = document.createElement("button");
    completedtask.appendChild(dele);
    todotask.removeChild(newli);
    todotask.removeChild(check);
    todotask.removeChild(del);
    dele.innerText = "remove";
    dele.addEventListener("click",function (){
        completedtask.removeChild(newcompli);
        completedtask.removeChild(dele);
    })
})
let todotask = document.querySelector(".todo")
todotask.appendChild(newli);
todotask.appendChild(check);
todotask.appendChild(del);
writting.value = "";
})


