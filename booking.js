(function($) {
  function selectSlot (slot) {

    var slotClicked = $(slot.currentTarget);
    var allSlots = $(".list-group-item");
    var indexSlotClick = $(slotClicked).index();
    var indexFirstSlotSelected = allSlots.siblings(".selected").first().index();
    var indexLasttSlotSelected = allSlots.siblings(".selected").last().index();
    var indexInOut = [indexSlotClick, indexFirstSlotSelected].sort();

    if(isSelected(slotClicked)){
      select(slotClicked);
    } else {
      deselect(slotClicked);
    }

    isBookable();

    function slotsCount() {
      return allSlots.siblings(".selected").length;
    }

    function isSelected (slot) {
      return !$(slot).hasClass("selected");
    }

    function isSelectable (slot) {
      if(slotsCount() === 0){
        return true;
      } else {
        return  $(slot).prev().hasClass("selected") ||
        $(slot).next().hasClass("selected");
      }
    }

    function isDeselectable (slot) {
      if($(slot).prev().hasClass("selected") &&
       $(slot).next().hasClass("selected")) {
        return false;
      } else {
        return true;
      }
    }

    function select (slot) {
      if(slotsCount() === 0){
        $(slot).addClass("selected");
        if($(slot).next().length === 0){ 
          $(slot).prev().addClass("selected");
        } else {
          $(slot).next().addClass("selected");
        }
      } else {
        for(i = indexInOut[0]; i <= indexInOut[1]; i++){
          allSlots.eq(i).addClass("selected");
        }
      }
    }
    
    function deselect (slot) {
      if(indexSlotClick === indexFirstSlotSelected){
        allSlots.removeClass("selected");
      } else if(indexSlotClick === indexLasttSlotSelected &&
       slotsCount() > 2){
        slot.removeClass("selected");
      } else {
        $(slot).nextAll().removeClass("selected");
      }
    }

    function isBookable (){
      if(slotsCount() < 2){
        $("#bookButton").addClass("disabled");
      } else {
        $("#bookButton").removeClass("disabled");
      }
    }
  }

  $(".list-group").on("click", ".list-group-item", selectSlot);
  
})(jQuery);

