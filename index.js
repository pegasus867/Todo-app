// CURSOR IN TEXTBOX ON WEBPAGE LOAD

$(".textbox").focus();

// ADD TODO BY BUTTON CLICK

$(".addButton").click(function(){
  addItem();
});

// ADD TODO BY ENTER KEY

$(".textbox").keypress(function(event){
  if(event.key === "Enter"){
    addItem();
  }
});

//ALTERNATIVE CODE TO REMOVE BUTTON PART
  // $("list").on("click", ".removeButton", function(event){
  //   $(event.target).parent().remove();
  // });
// Taken from todo app made in cte class


// FUNCTION TO ADD TODO

function addItem(){
  var textboxValue = $(".textbox").val();
  if(textboxValue === ""){
    alert("Enter something in the textbox");
  }else{
    $(".list").append("<li class='item list-group-item'>" + textboxValue +"<button type='button' name='button' class='btn btn-outline-dark btn-sm fixed-right removeButton'>Remove</button></li>");
    $(".textbox").val("");
    $(".textbox").focus();
    // REMOVE TODO BY BUTTON CLICK
    // if we put this code outside addItem function then when the document loads it will assign the click function
    // to whatever removeButton elements available and wont assign it new items being added, hence if we put it in
    // addItem function then it will assign the click function everytime a button/Todo is added
    $(".removeButton").click(function(){
      $(this).parent().remove();
    });
  }
}
