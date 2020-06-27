/**
 * Created by Culbertli on 2020/5/30.
 */
//css
import '../../assets/common/bootstrap/css/bootstrap.min.css';
import '../../assets/common/lib/css/animate.css';
//js
import '../../assets/common/bootstrap/js/bootstrap.min.js';
import '../../assets/common/lib/js/isScroll.js';
let sW=$(document.body).width();
//nav begin
if(sW>776){
  $('#rodi_top_nav .nav_item').mouseenter(function(){
    if($(this).hasClass('dropdown')){$(this).addClass('open');}
    $(this).find('a:first-child span').addClass('nav_font_move');
  })
  $('#rodi_top_nav .nav_item').mouseleave(function(){
    if($(this).hasClass('dropdown')){$(this).removeClass('open');}
    $(this).find('a:first-child span').removeClass('nav_font_move');
  })
}
//nav over
$(document).scroll(function(){
  var scroH = $(document).scrollTop();  //滚动高度
  if(scroH>0){//导航
    $('#rodi_top_nav').addClass('navNoGetTop');
  }else{
    $('#rodi_top_nav').removeClass('navNoGetTop');
  }
  if(scroH<200){//置顶按钮
    $('.toTop_btn').slideUp(50);
  }else{
    $('.toTop_btn').slideDown(100);
  }
})
$(function(){
  $(".xS").xScroll();
});
/*按钮功能*/
if($(document).scrollTop()<200){//置顶按钮初始化
  $('.toTop_btn').hide();
}
$('.toTop_btn').click(function(){//置顶按钮设置
  $('html , body').animate({scrollTop: 0},800);
})

$('.call_btn').click(function(){//电话按钮设置
  window.location.href = "tel:"+$('#call_link').text().trim();

})
$('.kefu_btn').click(function(){//客服按钮设置
  window.location.href = $('#kefu_link').text().trim();
})
$('.qq_btn').click(function(){//QQ按钮设置
  window.location.href = $('#qq_link').text().trim();
})
$(function (){
  $("[data-toggle='popover_wechat']").popover({
    animation:true,//淡入淡出
    html:true,//content中插入html代码
    container:"body",
    content:"<img src='"+ $('#wechat_qr_url').text().trim() +"' style='width:100px'>",//插入图片的路径 及 样式
  });
});
$(function (){
  $("[data-toggle='popover_phone']").popover({
    animation:true,//淡入淡出
    html:true,//content中插入html代码
    container:"body",
    content:"<h4>"+$('#call_link').text().trim()+"</h4>",//插入图片的路径 及 样式
  });
  /*分页*/
  $('.page_index li').each(function(){
    if($(this).find('a').length<1){this.style.padding='0 10px';console.log(this);}
  });
});
