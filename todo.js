let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
let li = document.getElementById("li");
btn.addEventListener("click", () => {
  if (inp.value.trim().length <= 0) {
    alert("Enter Your Task !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inp.value;
    ul.appendChild(li);
    inp.value = "";
    //delete button
    let dltbtn = document.createElement("button");
    dltbtn.textContent = "Delete";
    dltbtn.addEventListener("click", () => {
      ul.removeChild(li);
    });
    li.appendChild(dltbtn);
    inp.value = "";
    //edit button
    let editbtn = document.createElement("button");
    editbtn.textContent = "edit";
    editbtn.name = "editbtn";
    editbtn.addEventListener("click", () => {
      console.log("dqsdsqqdsqdsdqsdqs")
         let text = prompt("Edit Your Task"); 
         li.innerHTML = text;
    });
      li.appendChild(editbtn);
      
    inp.value = "";
 
  }
});
