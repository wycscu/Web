<?php
	$x = array(1,2,3);
	$person = array("name"=>"wyc","age"=>20,"gender"=>"male");
	foreach($x as $value){
		echo $value .'<br>';
	}
	echo "每进行一次循环，当前数组元素的值就会被赋值给 \$value 变量（数组指针会逐一地移动），在进行下一次循环时，您将看到数组中的下一个值。".'<br>';
	
	foreach($person as $key=>$value){
		echo "key is " .$key . " ,value is " .$value. '.<br>';
	}
?>