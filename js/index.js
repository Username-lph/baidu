$(document).ready(function(){
    $('#fullpage').fullpage({
        sectionsColor:["#399AE1","#48C079","#18A27E","#18A27E"],
        fixedElements:".dh",
        afterLoad:function(a,index){
            if(index==1){
                $(".ship").transition({x:8})
            }else if(index==2){
                $(".nz").eq(0).transition({x:-40,opacity:1})
                $(".z-box").eq(0).transition({x:40,opacity:1})
            }else if(index==3){
                $(".naone").transition({x:-40,opacity:1});
                $(".z-box").eq(1).transition({x:40,opacity:1})
            }else if(index==4){
                $(".bb").transition({x:-40,opacity:1});
                $(".z-box").eq(2).transition({x:40,opacity:1})
            };

        },
        onLeave:function(index){
            if(index==1){
                $(".ship").transition({delay:700});
                $(".ship").transition({x:0})

            }else if(index==2){
                $(".nz").eq(0).transition({delay:700});
                $(".nz").eq(0).transition({x:0,opacity:0})
                $(".z-box").eq(0).transition({x:0,opacity:0})
            }else if(index==3){
                $(".naone").transition({delay:700});
                $(".naone").transition({x:0,opacity:0})
                $(".z-box").eq(1).transition({x:0,opacity:0})
            }else if(index==4){
                $(".bb").transition({delay:700});
                $(".bb").transition({x:0,opacity:0})
                $(".z-box").eq(2).transition({x:0,opacity:0})
            };

        },
        navigation:true,
        navigationTooltips:["登录百度舆情","领先：数据收集与处理","全面：舆情分析与构架","专业：专业数据可视化"]

    })
    $(".next").click(function(){
        $.fn.fullpage.moveSectionDown();
    })
    $("input").focus(function(){
        $(this).val("").css({color:"#000"})
    })
})