function swiped(){
  console.log("stuff");
  const checkbox = $(".checkboxSwipe"); // element

  if(checkbox.prop("checked")){ // if the checkbox is already checked
    console.log("should be checked");
    setTimeout(() => { // run this after 500 ms
      checkbox.prop("checked", false); // uncheck the checkbox..
      $(".btn-swipebox__success").show();
      $(".btn-swipebox__status").hide();
    }, 500);
  }else{
    console.log("should not currently be checked");

    checkbox.prop('checked', true);
  }
}


$('document').ready(function(){
  $(".btn-swipebox").on("change", function(){
    console.log("clicked");
    swiped();
  });

  document.getElementById("save-user-btn-text").addEventListener("click", function(){
      document.getElementById("click-text").innerHTML = "Succes";
  });

});