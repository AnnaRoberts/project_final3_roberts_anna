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
        width: 940,
        height: 528
    });
  $("#slides").slidesjs({
    navigation: {
      active: true,
      effect: "slide"
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    effect: {
      slide: {
        speed: 200
      },
      fade: {
        speed: 300,
        crossfade: true
      }
    }
  });
});

$(function(){


    $("#slides-beer").slidesjs({
        width: 940,
        height: 528
    });
  $("#slides-beer").slidesjs({
    navigation: {
      active: true,
      effect: "slide"
    }
  });
});

$(function(){
  $("#slides-beer").slidesjs({
    effect: {
      slide: {
        speed: 200
      },
      fade: {
        speed: 300,
        crossfade: true
      }
    }
  });
});

$(function(){


    $("#slides-dining").slidesjs({
        width: 940,
        height: 528
    });
  $("#slides-beer").slidesjs({
    navigation: {
      active: true,
      effect: "slide"
    }
  });
});

$(function(){
  $("#slides-dining").slidesjs({
    effect: {
      slide: {
        speed: 200
      },
      fade: {
        speed: 300,
        crossfade: true
      }
    }
  });
});
