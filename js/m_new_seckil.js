var seckillSwiper = new Swiper ('.swiper-container', {
	//自动播放
	autoplay: 3000,
   	//循环加载 start->end->start
   	loop : true,
	//恢复自动切换效果 默认是true
	autoplayDisableOnInteraction : false,
	//分页
   	pagination: '.swiper-pagination',
   	//鼠标点击哪个切换哪个
   	paginationClickable:true,
}); 