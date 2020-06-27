/**
 * Created by Culbertli on 2020/5/30.
 */
import '../public/js/base.js';
import '../assets/common/swiper/css/swiper.min.css';

import '../css/main.css';

import '../public/js/ie.js';
//banner begin
let rodi_banner = new Swiper('#rodi_banner', {
  pagination: '.swiper-pagination',//可选选项，是否显示分页器
  paginationClickable: true,//可选选项，是否点击分页器滑动
  autoplayDisableOnInteraction : false,
  lazyLoading : true,//是否懒加载
  autoplay:3000,//the duration of css animation should be this time + 1
  lazyLoadingInPrevNext : true,//可选选项，设置为true允许将延迟加载应用到最接近的slide的图片
  speed:1000,//可选选项，翻一页切换的速率
  nextButton: '.swiper-button-next',//下一页
  prevButton: '.swiper-button-prev',//上一页
  loop: 1,//是否无限滚动

});



//banner over



//bs_case begin
let bc_swiper = new Swiper('#bc_swiper', {
  pagination: '.swiper-pagination',//可选选项，是否显示分页器
  paginationClickable: true,//可选选项，是否点击分页器滑动
  autoplayDisableOnInteraction : false,
  lazyLoading : true,//是否懒加载
  autoplay:3000,//the duration of css animation should be this time + 1
  lazyLoadingInPrevNext : true,//可选选项，设置为true允许将延迟加载应用到最接近的slide的图片
  speed:1000,//可选选项，翻一页切换的速率
  nextButton: '.swiper-button-next',//下一页
  prevButton: '.swiper-button-prev',//上一页
  loop: 1,//是否无限滚动

});
//bs_case over
