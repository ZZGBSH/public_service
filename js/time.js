/**
 * Created with JetBrains WebStorm.
 * User: zzgbsh.
 * Date: 2015/12/2.
 * Time: 14:02.
 */
var t = null;
function time(id){
    var ele = document.getElementById(id);
    clearTimeout(t);//清除定时器
    var dt = new Date();
    var y = dt.getFullYear();
    var m = dt.getMonth()+1;
    if(parseInt(m)<10){
        m = '0'+m;
    }
    var d = dt.getDate();
    if(parseInt(d)<10){
        d = '0'+d;
    }
    var h=dt.getHours();
    if(parseInt(h)<10){
        h = '0'+h;
    }
    var min=dt.getMinutes();
    if(parseInt(min)<10){
        min = '0'+min;
    }
    //ele.innerHTML =  y +'.' + m +'.'+d+ '&nbsp;&nbsp;&nbsp;&nbsp;'+h+"."+min;
    t = setTimeout(time,1000); //设定定时器，循环执行
}

function timUp(intDiff){
    var second;
    var t = setInterval(function(){
            second=0;//时间默认值
        if(intDiff > 0){
            second = intDiff;
            if (second <= 9) second = '0' + second;
            $('#timeUp').html(second);
            intDiff--;
        }else{
            second = 0;
            $('#timeUp').html(second);
            clearInterval(t);
        }
    }, 1000);
}
