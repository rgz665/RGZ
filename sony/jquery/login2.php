<?php 
	header('content-type:text/html;charset="utf-8"');

	$phone = $_POST["user"];
	$email = $_POST["user"];
	$password = $_POST["password"];

	// 1链接数据库
	$link = mysql_connect("localhost", "root", "123456");
	//2、判断数据库是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出整个php程序
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择数据库
	mysql_select_db("sony");

	//5、准备sql语句
	$sql = "select * from users where phone='{$phone}'";
	$sql1 = "select * from users where email='{$email}'";
		//6、发送sql语句
	$res = mysql_query($sql);
	$res1 = mysql_query($sql1);
		//7、处理结果
	$row = mysql_fetch_assoc($res);
	$row1 = mysql_fetch_assoc($res1);


	if($row){
		$sql2 = "select * from users where phone='{$phone}' AND password='{$password}'";
		$res2 = mysql_query($sql2);
		$row2 = mysql_fetch_assoc($res2);
		if($row2){
			echo '登陆成功';
		}
	}

	if($row1){
		$sql3 = "select * from users where email='{$email}' AND password='{$password}'";
		$res3 = mysql_query($sql3);
		$row3 = mysql_fetch_assoc($res3);
		if($row3){
			echo '登陆成功';
		}
	}



	//8、关闭数据
	mysql_close($link);


 ?>