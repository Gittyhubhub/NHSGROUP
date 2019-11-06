function swiped(){
  const checkbox = $(".checkboxSwipe"); // element

  if(checkbox.prop("checked")){ // if the checkbox is already checked
    console.log("you checked it");

    setTimeout(() => { // run this after 500 ms
      checkbox.prop("checked", false); // uncheck the checkbox..
      $(".btn-swipebox__success").show();
      $(".btn-swipebox__status").hide();
    }, 500);
  }
}