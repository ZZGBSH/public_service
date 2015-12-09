/**
 * Created by zzgbsh on 2015/12/7.
 */

/*
 * 打开详细页面
 */
function openDetail(cls){
    $(cls).on('click',function(){
        var _this = $(this);
        var $old = _this.parents('.pt-page');
        var $cur = $old.siblings('.pt-page');
        $old.addClass('pt-page-rotatePushLeft').addClass('pt-page-current');
        $cur.addClass('pt-page-rotatePullRight pt-page-delay180 pt-page-current');
        setTimeout(function(){
            $old.removeClass('pt-page-rotatePushLeft').removeClass('pt-page-current');
            $cur.removeClass('pt-page-rotatePullRight pt-page-delay180');
        },500);
        //$cur.delay(500).queue(function () {
        //    $old[0].className = $old[0].className.replace(/\bpt-page-\w+\b/g, '');
        //    $cur[0].className = $cur[0].className.replace(/\bpt-page-\w+\b/g, '');
        //    $cur.addClass('pt-page-current');
        //    $cur.dequeue();
        //});

    });
}

/*
 * 返回列表
 */
function backToList(cls){
    $(cls).on('click',function(){
        var _this = $(this);
        var $old = _this.parents('.pt-page');
        var $cur = $old.siblings('.pt-page');
        //$old.removeClass('pt-page-rotatePullRight pt-page-delay180 pt-page-current');
        $old.addClass('pt-page-rotatePushRight').addClass('pt-page-current');
        $cur.addClass('pt-page-rotatePullLeft pt-page-delay180 pt-page-current');

        setTimeout(function(){
            $old.removeClass('pt-page-rotatePushRight').removeClass('pt-page-current');
            $cur.removeClass('pt-page-rotatePullLeft pt-page-delay180');
        },1000);
        //$cur.delay(500).queue(function () {
        //    $old[0].className = $old[0].className.replace(/\bpt-page-\w+\b/g, '');
        //    $cur[0].className = $cur[0].className.replace(/\bpt-page-\w+\b/g, '');
        //    $cur.addClass('pt-page-current');
        //    $old.dequeue();
        //});
    })
}