window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$("#srch-term").mousedown(function (e) {
	window.location.href = "ContactUs-Search.html";
    return false;  
});
/** Dropdown menu navigation STARTS**/
$('.nav.metismenu li a').click(function() {
	var location = $(this).attr('href');
	window.location.href = location;
	return false;
 });

 /** Dropdown menu navigation ENDS**/

/** Minimise navbar STARTS **/
$(document).ready(function() {
  if ($('body').hasClass("body-small")) {
    $('html').find(".body-small").addClass("mini-navbar");
  } else {
    $('body').removeClass("mini-navbar");
  }
});
var width = $(window).width();
$(window).on('refresh', function() {
	console.log("awww");
});	
$(window).on('resize', function() {
  if ($(this).width() != width) {
    width = $(this).width();
    if ($('body').hasClass("body-small")) {
      $('html').find(".body-small").addClass("mini-navbar");
    } else {
      $('body').removeClass("mini-navbar");
    }
  }
  if($(window).width() < 640){
	  $(".mobile-home").parent().css("display","block");
	  $("#sel1").parent().css("display","none");
  }else {
	  $(".mobile-home").parent().css("display","none");
	  $("#sel1").parent().css("display","block");
  }
});

/** Minimise navbar ENDS **/

/** Notice Section show/hide STARTS **/

$('.glyphicon-chevron-up').click(function(){
	$(this).parent().parent().find('.ibox-content').toggle();
	$(".glyphicon-chevron-down").css("display","inline-block");
	$(".glyphicon-chevron-up").css("display","none");
});
$('.glyphicon-chevron-down').click(function(){
	$(this).parent().parent().find('.ibox-content').toggle();
	$(".glyphicon-chevron-up").css("display","inline-block");
	$(".glyphicon-chevron-down").css("display","none");
});

/** Notice Section show/hide ENDS **/

/** Modal Window / Light box / Popup **/
/** STARTS **/
/*$(".dropdown").hover(function() {
  $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
  $(this).toggleClass('open');
  $('b', this).toggleClass("caret caret-up");
}, function() {
  $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
  $(this).toggleClass('open');
  $('b', this).toggleClass("caret caret-up");
});
$('.dropdown-toggle').dropdown();*/

// $("#myBtn").click(function() {
  // $('#myModal').modal('show');
// });
$(".y-btnGroup").click(function() {
  $('#y-btnGroupModal').modal('show');
});
// $("#bonusBtn").click(function() {
  // $('#bonusModal').modal('show');
// });
// $("#freePassBtn").click(function() {
  // $('#freePassModal').modal('show');
// });
// $("#freeZoneBtn").click(function() {
  // $('#freeZoneModal').modal('show');
// });
// $("#rollOverBtn").click(function() {
  // $('#rollOverModal').modal('show');
// });
// $("#changetoprinted").click(function() {
  // $('#changetoprintedModal').modal('show');
// });
$("table.protocolhis tbody tr").click(function() {
  $('#protocolhisModal').modal('show');
});
$(".alert.alert-danger button.close").on("click", function() {
  $(this).parent().toggle('hide');
});
/** ENDS **/