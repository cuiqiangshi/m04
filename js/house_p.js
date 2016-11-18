/* JS Document CJ*/
/*楼盘详情降价-报名弹窗*/
$(function() {
    var $h_order = $(".h_order"),
        $T_box = $(".h_order").find(".T_box"),
        $T_box1 = $(".h_order").find(".T_box.T_box1"),
        $T_box2 = $(".h_order").find(".T_box.T_box2"),
        WidowsH = $(window).height(),
        T_boxH, Tbox_Top, $over = $("html,body");
    $(".hico01").on("click", function() {
        $h_order.show();
        $T_box1.show();
        $T_box2.hide();
        T_boxH = $T_box1.innerHeight(), Tbox_Top = (WidowsH - T_boxH) / 2 + "px";
        $over.addClass("body_overlay");
        $T_box1.css({
            "top": Tbox_Top,
        })
    });
    $(".hico02").on("click", function() {
        $h_order.show();
        $T_box2.show();
        $T_box1.hide();
        T_boxH = $T_box2.innerHeight(), Tbox_Top = (WidowsH - T_boxH) / 2 + "px";
        $over.addClass("body_overlay");
        $T_box2.css({
            "top": Tbox_Top,
        })
    });
    $h_order.find(".close").click(function() {
        $h_order.hide();
        $T_box.hide();
        $over.removeClass("body_overlay");
    })
});
/*楼盘加载更多*/
$(function(){
	var slideHeight =6;
	var defHeight = $('#wrap1 li').length;
	if( defHeight<= slideHeight){
		$('#photo_more1').hide();
	}
	for(var i=slideHeight;i<defHeight;i++){
		$('#wrap1 li').eq(i).hide();
		
	}
	$('#photo_more1').click(function(){
		for(var g=slideHeight;g<defHeight;g++){
		$('#wrap1 li').eq(g).show();				
	}$('#photo_more1').hide();
	})
});
$(function(){
	var slideHeight =6;
	var defHeight = $('#wrap2 li').length;
	if( defHeight<= slideHeight){
		$('#photo_more2').hide();
	}
	for(var i=slideHeight;i<defHeight;i++){
		$('#wrap2 li').eq(i).hide();
		
	}
	$('#photo_more2').click(function(){
		for(var g=slideHeight;g<defHeight;g++){
		$('#wrap2 li').eq(g).show();				
	}$('#photo_more2').hide();
	})
});
$(function(){
	var slideHeight =5;
	var defHeight = $('#wrap3 li').length;
	if( defHeight<= slideHeight){
		$('#photo_more3').hide();
	}
	for(var i=slideHeight;i<defHeight;i++){
		$('#wrap3 li').eq(i).hide();
		
	}
	$('#photo_more3').click(function(){
		for(var g=slideHeight;g<defHeight;g++){
		$('#wrap3 li').eq(g).show();				
	}$('#photo_more3').hide();
	})
});
/*图片弹出*/
$(function(){
	$('.boxer').boxer({
		mobile: true,
		fixed: true,/*固定在显示器中间，关闭滚动条*/
	});
});
/*选项卡js*/
function setnav(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var set=document.getElementById("set_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  set.style.display=i==cursel?"block":"none";
  woper();
  woper2();
 };
};