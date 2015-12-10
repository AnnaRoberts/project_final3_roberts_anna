$(document).ready(function() {

    $(".accordion").accordion({
        firstChildExpand: true,
        multiExpand: false,
        slideSpeed: 500,
        dropDownIcon: "&#9660",
    });
});

$(function(){

    $("#slides").slidesjs({
    navigation: {
      active: true,
      effect: "slide"
      }
    });

    $("#slides-beer").slidesjs({
    navigation: {
      active: true,
      effect: "slide"
      }
     });

    $("#slides-dining").slidesjs({
    navigation: {
      active: true,
      effect: "slide"
    }
  });

});

$(document).ready(function() {

    // just words move
    //$(".fancy_title").lettering('words');

    //just letters

    $(".fancy_title").lettering();

});
