define(["jquery", "jquery-cookie"], function($){
	function ajax(){
		$(function(){
		// 侧边栏数据

			$.ajax({
				url:"../data/slidbar.json",
				success: function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<li class="o_1"><em>${arr[i].head}</em><img src="../images/home/arrow.png" alt="">
									<div class="two clear">
										<div class="top">
											<div class="left clear">
											</div>
											<div class="right"><img src="${arr[i].src}" alt=""></div>
											</div>`).appendTo($(".classify .one").find(".spe"));
						for(var j = 0; j < arr[i].list.length; j++){
							if(j == arr[i].list.length-1){
								$(`<div class="l_1">
													<p>${arr[i].list[j].title}</p>
													<ul class="d">
														
														
													</ul>
												</div><div class="bottom">
													索尼中国顾客咨询热线：<i>400 810 9000</i>
												</div>`).appendTo($(".o_1 .two .top .left").eq(i));
							}else{
								$(`<div class="l_1">
													<p>${arr[i].list[j].title}</p>
													<ul>
														
														
													</ul>
												</div>`).appendTo($(".o_1 .two .top .left").eq(i));
							}
							
							for(var k = 0; k < arr[i].list[j].content.length; k++){
									$(`<li class="clear"><i>${arr[i].list[j].content[k].txt}</i><img src="${arr[i].list[j].content[k].src}" alt=""></li>`)
									.appendTo($(".o_1").eq(i).find(".l_1 ul").eq(j));
							}
						}
					}
				}

			})
			// 侧边栏数据

			$.ajax({
				url:"../data/slidbar1.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<div class="net_one">
									
								</div>`).appendTo($(".net_top"));
						for(var j = 0; j < arr[i].one.length; j++){
							$(`<div class="net_1">
										<strong>${arr[i].one[j].title}</strong>
										<ul>
											
										</ul>
									</div>
									`).appendTo($(".net_one").eq(i));
							for(var k = 0; k < arr[i].one[j].list.length; k++){
								$(`<li>${arr[i].one[j].list[k]}</li>
											`).appendTo($(".net_one").eq(i).find(".net_1").eq(j));
							}
						}
					}
				}
			})

			$(".hover").mouseenter(function(){
				$(this).find(".shop_info").html("");
				updata();
			})
			// 购物车数据
			var updata = function(){

			var money = 0;
			var amount = 0;
			$.ajax({
				url:"../data/detail.json",
				success:function(arr){

					var cookie_arr = eval($.cookie("goods"));
		
					for(var k = 0; k < cookie_arr.length; k++){
						for(var i = 0; i < arr.length; i++){
									if(arr[i].id == cookie_arr[k].id){
										$(`<div class="order1 clear">
											<div class="o_pic"><img src="${arr[i].img}" alt=""></div>
											<div class="model">${arr[i].txt1}</div>
											<div class="num">X<i>${cookie_arr[k].num}</i></div>
											<div class="money">RMB<em>${arr[i].rmb * cookie_arr[k].num}</em></div>
											<div class="del" id="${arr[i].id}">删除</div>
											</div>`).appendTo($(".shop_info"));
										money += parseInt(cookie_arr[k].num) * parseInt(arr[i].rmb);
										amount += parseInt(cookie_arr[k].num);
									
									}
							
						}
					}

					$(".s_left i").html(money);
					$(".s_right button i").html(amount);
				}

			})


			$(".shop_info").on("click", ".del", function(){
				var index = $(this).parents(".order1").index();
				var m = $(this).attr("id");
				money -= parseInt($(this).parents(".order1").find(".money em").html());
				amount -= parseInt($(this).parents(".order1").find(".num i").html());
				$(".order1").eq(index).remove();
				var resarray = [];
				var arr = eval($.cookie("goods"));
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id != m){
						resarray.push(arr[i]);
					}
				}
				var cookieStr = JSON.stringify(resarray);
				$.cookie("goods", cookieStr, {expires:7});
				$(".s_left i").html(money);
				$(".s_right button i").html(amount);
			})

			$(".s_right button").click(function(){
				location.assign("my.html");
			})
			}


		})
	}
	return {
		ajax:ajax
	}
})
