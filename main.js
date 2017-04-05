(function(){
	"use strict";
	var aside=$("aside");
	var mask=$(".mask");
	var toTop=$(".toTop");
	
	function showMenu(){
		$(".mask").fadeIn();
		aside.animate({"right":0},500);
	}
	function hideMenu(){
		mask.fadeOut();
		aside.animate({"right":-aside.width()},500);
	}
	$(".menu").on("click",showMenu);
	mask.on("click",hideMenu);
	toTop.on("click",function(){
		$("html,body").animate({"scrollTop":0},800)
	})
	$(window).on("scroll",function(){
		if($(window).scrollTop()>$(window).height()){
			toTop.fadeIn();
			$("nav").addClass("fix");
		}else{
			toTop.fadeOut();
			$("nav").removeClass("fix");

		}
	})
})()
