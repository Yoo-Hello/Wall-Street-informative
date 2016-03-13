(function(){
	jQuery.fn.extend({
		lunbo:function(w,h){
			var boxW=$(this).length+1;
			//console.dir($(this).parent())
			$(this).parent().width(w*boxW)
			$(this).width(w).height(h);
			var $this=$(this)
			var mate=function(){
				// console.dir($(this))
				$this.eq(0).animate({marginLeft:-w},200,function(){
					$this.parent('ul').append($this.eq(0));
					$(this).css('marginLeft',0)
					$this=$this.parent().children();
				})
			}
			setInterval(mate,3000)
			
		}
	})
	// 需要给父容器添加overflow：hidden
})();