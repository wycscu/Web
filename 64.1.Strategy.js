function Strategy(){
	
}

Strategy.prototype.tactics = function(){
	console.log('基本策略');
}

function StrategyA(){
	
}

StrategyA.prototype = Object.create(Strategy.prototype);
StrategyA.prototype.tactics = function(){
	console.log('骚扰');
}

function StrategyB(){
	
}

StrategyB.prototype = Object.create(Strategy.prototype);
StrategyB.prototype.tactics = function(){
	console.log('猥琐发育');
}

function StrategyC(){
	
}

StrategyC.prototype = Object.create(Strategy.prototype);
StrategyC.prototype.tactics = function(){
	console.log('开团');
}