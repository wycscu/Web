function getStyle(el,property){
	if(getComputedStyle){ //是否兼容IE8
		return getComputedStyle(el)[property];
	}else{
		return el.currentStyle[property];
	}
}




function animate(el,properties){
	clearInterval(el.timerId);
	//进入前先清楚
	el.timerId = setInterval(function(){
		
		for (var property in properties){
			var current;
			var target = properties[property];
			//var current = parseInt(getStyle(el,property));
			if(property ==='opacity') {
				current =Math.round(parseFloat(getStyle(el,'opacity'))*100) ;
			}else{
				current = parseInt(getStyle(el,property));
				
			}
			var speed = (target - current)/30;  //处理取整问题
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			//为了防止speed叠加，需要清除之前的setInterval函数
			if(property==='opacity'){
				el.style.opacity = (current + speed)/100;
			}else{
					el.style[property] = current + speed + 'px';
			}
			
		//	el.innerHTML = property + ':' + el.style[property];
		}
	
		
	
	},20)  //阻尼
}

//math.floor|math.ceil 向下/向上取整