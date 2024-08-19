$("#btn").on("click", () => {
  if ($("#inp").val().trim().length <= 0) {
    alert("Enter Your Task!");
  } else {
    let li = $("<li></li>").text($("#inp").val());

    //delete button
    let $dltbtn = $("<button></button>").text("Delete");
    $dltbtn.on("click", () => {
      $(li).remove();
    });
    li.append($dltbtn);

    //edit button
    let $editbtn = $("<button></button>").text("Edit");
    $editbtn.on("click", () => {
      let text = prompt("Edit Your Task");
      $(li).contents().first().replaceWith(text);
    });
    li.append($editbtn);
    $("#ul").append(li);
    $("#inp").val("");
  }
});
$inp.on("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    $("#btn").click();
  }
});
