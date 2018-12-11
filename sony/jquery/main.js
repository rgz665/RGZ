console.log("加载成功");
// 配置路径
require.config({
	paths: {
		"jquery":"jquery-1.11.1",
		"jquery-cookie":"jquery.cookie",
		"home":"home",
		"login":"login",
		"ajax":"ajax",
		"product":"product",
		"detail":"detail",
		"my":"my"
		// "product":"product",
		// "detail":"detail"
	},
	// 设置依赖关系
	shim: {
		"jquery-cookie":["jquery"]
	},
})
require(["home","login","ajax","product","detail","my"],function(home, login, ajax, product,detail,my){
	home.home();
	login.login();
	ajax.ajax();
	product.product();
	detail.detail();
	my.my();
})