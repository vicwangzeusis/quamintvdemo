$(document).ready(function(){
	$("#menu").click(function(){
		$(".menuList").animate({height:"400px"});
		$("#menuClose").show();
		$("#menu").hide();
	});
	$("#menuClose").click(function(){
		$(".menuList").animate({height:"0px"});
		$("#menuClose").hide();
		$("#menu").show();
	});
	$(".shangwuhezuo").click(function(){
		$(".menuList").animate({height:"0px"});
		$("#menuClose").hide();
		$("#menu").show();
	});
	 document.onscroll = function(){
		var opacity = self.pageYOffset/300;
		$(".contentMobile_bg").css("opacity",opacity)
	};
})