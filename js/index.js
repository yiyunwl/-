$(function(){
    // 搜索输入框
    $(".search-input input").focus(function(){
        $(".search-right_btn").css({"border":"1px solid #ff6700"});
        $(".search-right_btn button").css({"borderLeft":"1px solid #ff6700"});
        $(".search-input span").fadeOut(500);
        $(".search_select").hide().show();
    }).blur(function(){
        $(".search-right_btn").css({"border":"1px solid #e0e0e0"});
        $(".search-right_btn button").css({"borderLeft":"1px solid #e0e0e0"});
        $(".search-input span").fadeIn(500);
        $(".search_select ").show().hide();
    });;

    //公共封装方法 显示隐藏
    function change(u,m){
        var x = $(u);
        $(x).mouseover(function(){
            $(x).eq($(this).index()).addClass('active');
            $(m).eq(x.index($(this))).hide().show();
        }).mouseout(function(){
            $(x).eq($(this).index()).removeClass('active');
            $(m).eq(x.index($(this))).show().hide();
        });
    }

    // 导航
    change(".search-center_box>li",".nav_alert");

    // 侧边导航栏
    change(".category>ul>li",".cate_alert");

    //公共封装方法 点击切换
    function toggle(u,m){
        var x = $(u);
        $(x).click(function(){
            $(x).eq($(this).index()).addClass('active').siblings().removeClass('active');
            $(m).hide().eq(x.index($(this))).show();
        });
    }
    //家电 切换
    toggle("#appliances .union-top-right>ul>li",".homeElectic>ul.mobile-box");

    //搭配 切换
    toggle("#collocation .union-top-right>ul>li",".collocation>ul.mobile-box");

    // 配件 切换
    toggle("#parts .union-top-right>ul>li",".parts>ul.mobile-box");

    //周边切换
    toggle("#ambitus .union-top-right>ul>li",".ambitus>ul.mobile-box");

    //回到顶部  scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
    var scroll = $(window).scrollTop();
    if(scroll > 806){
        $("#toTop").show();
    }else{
        $("#toTop").hide();
    }
    $("#toTop").click(function(){
        $(window).scrollTop(0);
    });
});





// $(function(){
//     // 搜索输入框
//     $(".search-input input").focus(function(){
//         $(".search-right_btn").css({"border":"1px solid #ff6700"});
//         $(".search-right_btn button").css({"borderLeft":"1px solid #ff6700"});
//         $(".search-input span").fadeOut(500);
//         $(".search_select").hide().show();
//     }).blur(function(){
//         $(".search-right_btn").css({"border":"1px solid #e0e0e0"});
//         $(".search-right_btn button").css({"borderLeft":"1px solid #e0e0e0"});
//         $(".search-input span").fadeIn(500);
//         $(".search_select ").show().hide();
//     });;
//
//     //公共封装方法 显示隐藏
//     function change(u,m){
//         var x = $(u);
//         $(x).mouseover(function(){
//             $(x).eq($(this).index()).addClass('active');
//             $(m).eq(x.index($(this))).hide().show();
//         }).mouseout(function(){
//             $(x).eq($(this).index()).removeClass('active');
//             $(m).eq(x.index($(this))).show().hide();
//         });
//     }
//
//     // 导航
//     change(".search-center_box>li",".nav_alert");
//
//     // 侧边导航栏
//     change(".category>ul>li",".cate_alert");
//
//     //公共封装方法 点击切换
//     function toggle(u,m){
//         var x = $(u);
//         $(x).click(function(){
//             $(x).eq($(this).index()).addClass('active').siblings().removeClass('active');
//             $(m).hide().eq(x.index($(this))).show();
//         });
//     }
//     //家电 切换
//     toggle("#appliances .union-top-right>ul>li",".homeElectic>ul.mobile-box");
//
//     //搭配 切换
//     toggle("#collocation .union-top-right>ul>li",".collocation>ul.mobile-box");
//
//     // 配件 切换
//     toggle("#parts .union-top-right>ul>li",".parts>ul.mobile-box");
//
//     //周边切换
//     toggle("#ambitus .union-top-right>ul>li",".ambitus>ul.mobile-box");
//
//     //回到顶部
//     var scroll = $(window).scrollTop();
//     if(scroll > 806){
//         $("#toTop").show();
//     }else{
//         $("#toTop").hide();
//     }
//     $("#toTop").click(function(){
//         $(window).scrollTop(0);
//     });
//
//     //列表页 分类
//     toggle(".search-center_btn li",".search-filter-bottom");
//
//     //高级选项
//     change(".highChoose>li",".highBox");
//
//     //高级选项展示 展示前7条数据
//     $(".highChoose>li:gt(6)").hide();
//
//     //点击更多
//     $(".more").click(function(){
//         if($(".highChoose>li:gt(7)").is(':hidden')){
//             $(".more>.iconfont").css({"display":"inline-block","transform":"rotate(180deg)"})
//             $(".highChoose>li:gt(7)>.highBox").css("top","90px");
//             $(".highChoose>li:gt(7)").show();
//         }else{
//             $(".more>.iconfont").css({"display":"inline-block","transform":"rotate(0deg)"})
//             $(".highChoose>li:gt(7)").hide();
//         }
//     });
//
//     // 综合
//     toggle(".list-c-l>li",".list-content-bottom>ul");
//
//     //筛选 促销 分期 仅看有货
//     $(".forsale").click(function(){
//         if($(this).find('.iconfont').is(":hidden")){
//             $(this).find('.choose').addClass('active');
//             $(this).find('.iconfont').show();
//         }else{
//             $(this).find('.choose').removeClass('active');
//             $(this).find('.iconfont').hide();
//         }
//     });
//
//     //定位地址
//     change(".list-c-r>li:first-child",".addressBox");
//
//     //全部商品分类
//     var allShop = $(".search-center_box>li").eq(0);
//     $(allShop).mouseover(function(){
//         $("#banner").show();
//     }).mouseout(function(){
//         $("#banner").hide();
//     });
// });