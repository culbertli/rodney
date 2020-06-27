/**
 * Created by Culbertli on 2020/6/3.
 */
import '../public/js/base.js';

import '../assets/common/swiper/css/swiper.min.css';
import '../css/brand.css';
let brand_swiper = new Swiper('.brand_swiper', {
  pagination: '.swiper-pagination',//可选选项，是否显示分页器
  paginationClickable: true,//可选选项，是否点击分页器滑动
  autoplayDisableOnInteraction : false,
  lazyLoading : true,//是否懒加载
  autoplay:4000,//the duration of css animation should be this time + 1
  lazyLoadingInPrevNext : true,//可选选项，设置为true允许将延迟加载应用到最接近的slide的图片
  speed:500,//可选选项，翻一页切换的速率
  nextButton: '.swiper-button-next',//下一页
  prevButton: '.swiper-button-prev',//上一页
  loop: 1,//是否无限滚动

});
