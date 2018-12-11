define(["jquery", "jquery-cookie"], function($){
	function my(){
		$(function(){
	var money = 0;
	var amount = 0;
	$(".pleaseshop").css("display","block");
	if($.cookie("goods")){
		$(".pleaseshop").css("display","none");
		$.ajax({
		url:"../data/product.json",
		success:function(arr){
			var cookie_arr = eval($.cookie("goods"));
			for(var k = 0; k < cookie_arr.length; k++){
				for(var i = 0; i < arr.length; i++){
					for(var j = 0; j < arr[i].list.length; j++){
							if(arr[i].list[j].id == cookie_arr[k].id){
								$(`<div class="info clear">
								<div class="clear"> 
									<div class="i_1">
										<div class="lens"><img src="${arr[i].list[j].img}" alt=""></div>
									</div>
									<div class="txt">${arr[i].list[j].txt}</div>
									<div class="rmb"><i>RMB</i><em>${arr[i].list[j].rmb}</em></div>
									<div class="num clear">
										<div class="add clear">
											<div class ='sub' id="${cookie_arr[k].id}" money="${arr[i].list[j].rmb}">-</div>
											<div class="icur" >${cookie_arr[k].num}</div>
											<div class="plus" id="${cookie_arr[k].id}" money="${arr[i].list[j].rmb}">+</div>
										</div>
									</div>
									<div class="add">
										<i>RMB</i>
										<em>${cookie_arr[k].num * arr[i].list[j].rmb}</em>
									</div>
									<div class="oper">
										<div class="hope">移入心愿单</div>
										<div class="delet">删除</div>
									</div>
								</div>
							 </div>`).appendTo($(".shopinfo"));
							money += parseInt(cookie_arr[k].num * arr[i].list[j].rmb);
							amount += parseInt(cookie_arr[k].num);
							$(".price").find("span i").html(money);
							$(".go i").html(amount);
							
							}
					}
				}
			}
		}

	})
	}
	
	
	$(".shopinfo").on("click", ".plus", function(){
		var str = $.cookie("goods");
		var arr = eval(str);

		// 总钱数的计算
		var dif = $(this).attr("money");
		money += parseInt(dif);
		$(".price").find("span i").html(money);

		amount++;
		$(".go i").html(amount);

		for(var i = 0; i < arr.length; i++){
			if(arr[i].id == $(this).attr("id")){
				arr[i].num++;
				$(this).siblings(".icur").html(arr[i].num);
				$(this).parents(".info").find(".add em").html($(this).attr("money") * arr[i].num);
				
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {expires:7});
			}
		}
		
	})
	$(".shopinfo").on("click", ".sub", function(){
		var str = $.cookie("goods");
		var arr = eval(str);

		var dif = $(this).attr("money");
		
		
		
		for(var i = 0; i < arr.length; i++){
			if(arr[i].id == $(this).attr("id")){
				arr[i].num--;
				if(arr[i].num <= 0){
			   		arr[i].num = 1;
		    	}else{
		    	 	amount--;
		    	 	money -= parseInt(dif);
		    	}
		    	$(".go i").html(amount);
		    	$(".price").find("span i").html(money);
				
				$(this).siblings(".icur").html(arr[i].num);
				$(this).parents(".info").find(".add em").html($(this).attr("money") * arr[i].num);

				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {expires:7});
			}
		}
		
	})

	$(".shopinfo").on("click", ".delet", function(){
		var index = $(this).parents(".info").index();
		var m = $(this).parents(".info").find(".sub").attr("id");
		$(".info").eq(index - 2).remove();
		if($(".info").size() == 0){
			$(".pleaseshop").css("display","block");
		}
		var resarray = [];
		var arr = $.cookie("goods");
		var newarr = JSON.parse(arr);
		for(var i = 0; i < newarr.length; i++){
			if(newarr[i].id != m){
				resarray.push(newarr[i]);
			}
		}
		var cookieStr = JSON.stringify(resarray);
		$.cookie("goods", cookieStr, {expires:7});


		var icur = $(this).parents(".info").find(".add .icur").text();
		amount -= parseInt(icur);
		$(".go i").html(amount);


		var icurmoney = $(this).parents(".info").find(".add em").text();
		money -= parseInt(icurmoney);
		$(".price").find("span i").html(money);


	})

	// 跳转首页
	$(".location").click(function(){
		location.assign("index.html");
	})
	

	
})
	}
	return {
		my:my
	}
})


