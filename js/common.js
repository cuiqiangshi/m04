/* JS Document CJ*/
/*垂直导航栏控制*/
$(function(){
	$(".menubtn").click(function(){
		$(this).siblings("nav").toggle(100);
		return false;
	});
	$(document).click(function() {
      $("nav").hide();  
    });
});
/*设置图片高度*/
function autoimg(_width,_height){
	var imgwidth=$('.autoimg').width(),   
    width=_width,
    height=_height,
    bili=width/height,
    nn=imgwidth/bili;
	$('.autoimg').attr("height",nn+"px");
};
function autoimg2(_width,_height){
	var imgwidth=$('.autoimg2').width(),   
    width=_width,
    height=_height,
    bili=width/height,
    nn=imgwidth/bili;
	$('.autoimg2').attr("height",nn+"px");
};
function woper(){
	if($(".woper").length>0){
		var $wo=$(".woper"),
			woper=$wo.attr("data-woper").split(','),
			bili=woper[0]/woper[1],
			$img=$wo.find("img.op"),
			ww=$img.innerWidth();	
			$img.attr("height",Math.round(ww/bili));
	}
};
function woper2(){
	if($(".woper2").length>0){
		var $wo=$(".woper2"),
			woper=$wo.attr("data-woper").split(','),
			bili=woper[0]/woper[1],
			$img=$wo.find("img.op"),
			ww=$img.innerWidth();	
			$img.attr("height",Math.round(ww/bili));
	}
};
$(window).load(function() {woper();woper2();})
$(window).resize(function() {
	woper();
	woper2();
});