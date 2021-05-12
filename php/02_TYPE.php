<?php
	$txt1 = 'hello';
	$txt2 = "world";
	//连接：.
	$txt3 =$txt1 .' '. $txt2;
	echo $txt3 . '<br>'; //hello world
	//字符串中的字符
	
	echo $txt3[0] . '<br>'; //h
	echo strlen($txt3) . '<br>'; //11
	echo strpos($txt3,'ll') . '<br>'; //2
	
	//更多类型
	$int = 3;
	$float = 3.14;
	$bool = true;
	
	//数组
	//1.PHP数组分为 关联数组 和 数值数组
	
	//1）数值数组
	$numbers = array(1,2,3,4,5);
	echo $numbers[2] . '<br>'; //3
	//2)关联数组
	$person = array("name"=>"wyc","age"=>22);
	echo $person['name'] . '<br>'; //wyc
	
?>