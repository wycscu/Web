<?php
	$person = array("name"=>"wyc","age"=>20,"gender"=>"male","exes"=>
	array("xiaoli","xiaolv","xiaos"));
	$arg = $_GET['arg'];
	header('content-type: text/json');
	//header一定要使用，否则会自动解析，得到【..】字符串，这不是我们需要的结果
	$resp = json_encode($person[$arg]);

	echo $resp;
?>