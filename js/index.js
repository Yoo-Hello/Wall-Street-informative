$(function(){
	/*导航滑动*/
	/*banner*/
	var boxW=$('.bannerbox').width();
	var boxH=$('.bannerbox').height();
	var bannerbox=$('.bannerbox');
	//console.log($('.banner li').parent())
	$('.banner li').lunbo(boxW,boxH);
	var BTtime=function(){
		var titleText=$('.banner li').first().attr('value');
		$('.bannerTitle').html(titleText);
	}
	setInterval(BTtime,100)
})