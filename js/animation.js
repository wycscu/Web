function getStyle(el,property){
	if(getComputedStyle){ //是否兼容IE8
		return getComputedStyle(el)[property];
	}else{
		return el.currentStyle[property];
	}
}




function animate(el,property,target){
	setInterval(function(){
		var current = parseInt(getStyle(el,property));
		var speed = (target - current)/30;  //处理取整问题
		speed = speed>0?Math.ceil(speed):Math.floor(speed);
		el.style[property] = current + speed + 'px';
		el.innerHTML = el.style[property];
	},20)  //阻尼
}

//math.floor|math.ceil 向下/向上取整