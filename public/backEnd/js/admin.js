// 该文件的功能是用来写首页的js交互的


// 1.进度条
// 不要让进度条显示圆圈
NProgress.configure({ showSpinner: false });

// 全局监听 当页面中某一个ajax请求发起的时候  让进图条开始
$(window).ajaxStart(function(){
  NProgress.start();
})

// 当ajax请求完成的时候 让进度条完成
$(window).ajaxComplete(function(){
  NProgress.done();
})

// 2.功能： 点击左侧的菜单按钮 让左侧的侧边栏消失 让右侧的内容占满全屏
$('[data-menu]').on('click',function(){
  // toggle()切换
  $('.lt_aside').toggle();
  $('.lt_section').toggleClass('menu');
})

// 3.功能： 点击分类管理 滑出 菜单
$('.lt_aside .menu').on('click','[href="javascript:;"]',function(){
  // console.log(1);
  var _this = $(this);

  var child = _this.siblings();
  // console.log(child);
  child.slideToggle();
})