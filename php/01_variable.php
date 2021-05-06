<?php
	$num = 3;
	
	# $表示一个变量，可以直接赋值
    // 作用域分全局作用域和局部作用域，放在函数中即为局部，否则全局
	
	function func(){
		$x = 10;
		echo '变量为' .$x;
		echo '<br>';
		echo "或者这样输出：$x";
		$age = array("Jackie"=>"27");
		echo '<br>';
		echo "Jackie is " . $age['Jackie'] . " years old.";
	}
	
	func();
	echo '<br><p>使用echo输出字符串时候，无论单引号还是双引号都是一样的。</p><p>如果字符串中有变量，单引号会忽略，而双引号会把变量解析以后带入字符串。</p>';
?>