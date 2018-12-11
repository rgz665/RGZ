<?php 
	header('content-type:text/html;charset="utf-8"');
	
	$type = $_GET["type"];
	$email = $_GET["email"];

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
	
	if($type == "email"){
		$sql = "select * from users where email = '{$email}'";
		//6、发送sql语句
		$res = mysql_query($sql);
		//7、处理结果
		$row = mysql_fetch_assoc($res);

		if($row){
			echo "1";
		}
	}

	//8、关闭数据
	mysql_close($link);


 ?>