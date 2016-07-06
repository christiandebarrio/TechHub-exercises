(function($) {
  // do stuff
})(jQuery);

function selectSlot (slot) {

  var slot_selected = slot.currentTarget;

  $(slot_selected).toggleClass("selected");

  if($(".list-group-item.selected").size() > 1) {
    $("#bookButton").removeClass("disabled");
  } else {
    $("#bookButton").addClass("disabled");
  }
}


$(".list-group").on("click", ".list-group-item", selectSlot);