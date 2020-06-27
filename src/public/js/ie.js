/**
 * Created by Culbertli on 2020/6/17.
 */
//ie处理
if(!!window.ActiveXObject || "ActiveXObject" in window){
  //财富板块 开始
  $('.wealth .wealth_content li:nth-child(odd)').each(function(ind){$(this).attr('style','margin:0 2px 2px 0;-ms-grid-row:'+(ind+1));})
  //财富板块 结束
  $('.wealth .wealth_content li:nth-child(even)').each(function(ind){$(this).attr('style','margin:0 0 2px 0;-ms-grid-row:'+(ind+1));})
}
