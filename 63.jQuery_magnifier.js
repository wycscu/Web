
			(function($){
				$.fn.extend({
					magnifier:function(){
						this.each(function(){
							var that = this;
							$('.left',this).mousemove(function(evt){
								var x = evt.offsetX;
								var y = evt.offsetY;
								var float = $('.float',this);
								x = x - float.width()/2;
								y = y - float.height()/2;
								//溢出
								if(x<0){
									x=0;
								}
								if(y<0){
									y=0;
								}
								if(x > $(this).width()-float.width()){
									x=$(this).width()-float.width();
								}
								//由于已经选择了.left，这里只写this即可，否则会弹出
								if(y > $(this).height()-float.height()){
									y=$(this).height()-float.height();
								}
								
								
								float.css({
									left:x,
									top:y
								});
								
								$('.right',that).css({
									backgroundPosition:x * -4 + 'px ' + y * -4 + 'px',
									//注意这里第一个px后面需要加空格
								})
								
							}).mouseover(function(){
								$('.left .float, .right',that).show();
							}).mouseout(function(){
								$('.left .float, .right',that).hide();
							});
						
						
						})
						
					}
				})
			})(jQuery)