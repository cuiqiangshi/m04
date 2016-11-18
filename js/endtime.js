/* JS Document CJ*/
$(function() {
    $.fn.extend({
        manhuaCountDown : function(isDay) {
            var $this = $(this);
            var dstr = $this.attr("data");
            var end_time = new Date(dstr).getTime();//月份是实际月份-1
            var sys_second = (end_time-new Date().getTime())/1000;
            var day,hour,minute,second;
            var timer = setInterval(function(){
                sys_second -= 1;
                if (sys_second >= 0) {
                    day = Math.floor((sys_second / 3600) / 24);
                    hour = Math.floor((sys_second / 3600) % 24);
                    minute = Math.floor((sys_second / 60) % 60);
                    second = Math.floor(sys_second % 60);
                    if(isDay){
                        day = "<strong>"+day+"</strong>"+"天";//计算天
                    }else{
                        day = "";
                    }
                    hour = "<strong>"+(hour<10?"0"+hour:hour)+"</strong>"+"时";//计算小时
                    minute = "<strong>"+(minute<10?"0"+minute:minute)+"</strong>"+"分";//计算分
                    second = "<strong>"+(second<10?"0"+second:second)+"</strong>"+"秒";// 计算秒
                    $this.html(day+hour+minute+second);
                } else {
                    $this.addClass('on').text("已过期");
                    clearInterval(timer);
                }
            }, 1000);
        }
    })
});
/*时间调用*/
$(function(){
	var $end=$(".endtime");
	for(var i=0;i<$end.length;i++){
		$end.eq(i).manhuaCountDown(true);
	}
});