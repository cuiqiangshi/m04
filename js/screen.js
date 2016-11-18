/*筛选*/
$(function(){
	$(".sort li>a").on("click",function(){
		if($(this).parent().hasClass("on")){
			$(this).parent().removeClass("on");
			$(this).siblings("dl").stop(false,true).slideUp(300);
		}else{
			$(this).parent().addClass("on");
			$(this).siblings("dl").stop(false,true).slideDown(300);
			}
		$(this).parent().siblings("li").find("dl").hide();
		$(this).parent().siblings("li").removeClass("on");
	});
	$('.sort li dl dd').on('click',function(){
		//var a= $(this).find("a").text();
		//$(this).parent().siblings("a").find(".sort-text").text(a);
		$(".sort li").find("dl").stop(false,true).slideUp(300);
		$(".sort li").removeClass("on");
		$(this).parent().find("dd").removeClass("on");
		$(this).addClass("on");
	});
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest("#sort-nav").length == 0){ 
			$(".sort li").find("dl").slideUp(300);
			}
	});
});
