/**
 * Created by Administrator on 2020/6/7 0007.
 */
import '../public/js/base.js';

import '../css/product_detail.css';

/*设置详情页展开操作*/
$('.detail_show_more').click(function(){
  console.log(1);
  $('.detail_wrapper').addClass('detail_show');
})

/*产品跳转按钮*/
$('.page_go .link_more').each(function(){
  if(this.href.trim()&&this.href.trim()!=window.location.href){$(this).addClass('act');}
})

/*将最下方按钮组容器宽度设置为何详情页一致*/
function operate_wrapper_resize(){
  $('.operate_wrapper').css('width',$('.detail_content').css('width'));
}
$(function(){
  operate_wrapper_resize();
})

$(window).resize(function(){operate_wrapper_resize();});
