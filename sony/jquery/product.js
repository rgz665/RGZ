define(["jquery", "jquery-cookie"], function($){
	function product(){
		$(function(){
			$.ajax({
				url:"../data/product.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<div class="header">
								${arr[i].name}
							</div>`).appendTo($(".r_1").eq(i));
						for(var j = 0; j < arr[i].list.length; j++){
							$(`<div class="lens clear" id="${arr[i].list[j].id}">
									<div class="tagnew">
										<img src="${arr[i].list[j].tagnew}" alt="">
									</div>
									<div class="tag clear">
										<div class="t_one"><img src="${arr[i].list[j].t_one}" alt=""></div>
										<div class="t_two"><img src="${arr[i].list[j].t_two}" alt=""></div>
									</div>
									<img src="${arr[i].list[j].img}" alt="" class="btn_click" id="${arr[i].list[j].id}" style="z-index:99999;">
									<div class="l_btn" style="background:${arr[i].list[j].bg}"></div>
									<div class="txt"><a href="#" title="${arr[i].list[j].txt}">${arr[i].list[j].txt}</a></div>
									<div class="money clear">
										<span class="rmb">RMB<i>${arr[i].list[j].rmb}</i></span>
										<em>对比</em>
										<div class="m_btn"></div>
									</div>
									<div class="border" style="z-index:-9999"></div>
									<div class="info clear">
										<strong class="a1"><img src="${arr[i].list[j].info_img}" alt=""></strong>						
										<strong class="a2" id="${arr[i].list[j].id}"><img src="${arr[i].list[j].info_img1}" alt=""></strong>
										<a href="">${arr[i].list[j].a}</a>
									</div>
							</div>`).appendTo($(".r_1").eq(i));
						}
					}
				},	
				error:function(msg){
					alert(msg);
				}
			})

			// 点击链接
			$(document).on("click", ".lens .btn_click", function(){
				$.cookie("detail", null);
				var id = this.id;
				var first = $.cookie("detail") == null ? true : false;
				if(first){
					$.cookie("detail", `[{id:${id}}]`, {expires:7});
				}
				location.assign("detail.html");
			})

			// $(document).click(function(){
			// 	alert(1);
			// })

			// $(document).on("click", ".btn_click", function(){
			// 	alert(1);
			// })


			// $(document).click(function(){
			// 	alert(1);
			// })

			
			$("#screencon").find(".one").click(function(){

				if($(this).attr("id") == ""){
					$(this).next().hide();
					var str = $(this).text();
					$(this).html(str);
					$(this).append($('<img src="../images/product/shang.png" alt="">'));
					$(this).attr("id", "1");
				}else if($(this).attr("id") == 1){
					$(this).next().show();
					var str = $(this).text();
					$(this).html(str);
					$(this).append($('<img src="../images/product/stick_bar_arrow.png" alt="">'));
					$(this).attr("id", "");
				}
			})

			// 侧边筛选

			$("#screencon").find("li").click(function(){
				var txt = $(this).text();
				// 没有
				if($(this).find("span").html().length == 0){
					$(this).find("span").html(`<em></em>`);
					var str = $("#l_box").html();
					if(str.length == 0){
						$("#l_box").html(`<div class="condition">
								你的选择<strong id="reset">重置筛选</strong>
							</div>
							<div class="delet">
								<button class="btn">X</button>
								<span class ="txt">${txt}</span>
							</div>`);
					}else{
						$("#l_box").append($(`<div class="delet"><button class="btn">X</button><span class ="txt">${txt}</span></div>`));
					}
					// 有
				}else{
					$(this).find("span").html("");
					if($(".delet").size() == 1){
						$("#l_box").html("");
					}else{
						for(var i = 0; i < $(".delet").size(); i++){
							if($(this).text() == $(".delet").eq(i).find("span").text()){
								$(".delet").eq(i).remove();
							}
						}

					}
				}
			})

			$(".box").on("click", "#reset", function(){
				$(".box").html("");
				$("#screencon li").find("span").html("");
			})
			$(".box").on("click", ".btn", function(){
				if($(".box").find(".delet").size() == 1){
					$(".box").html("");
					for(var i =0; i < $("#screencon li").size(); i++){
						if($("#screencon li").eq(i).text() == $(this).next().text()){
							$("#screencon li").eq(i).find("span").html("");
						}
					}
				}else{
					$(this).parents(".delet").remove();
					for(var i =0; i < $("#screencon li").size(); i++){
						if($("#screencon li").eq(i).text() == $(this).next().text()){
							$("#screencon li").eq(i).find("span").html("");
						}
					}
				}
			})

			$(".r_1").on("click", ".a2", function(){
				$(".joinbox").css("display","block");
				var id = this.id;
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					$.cookie("goods", `[{id:${id}, num:1}]`, {expires:7});
				}else{
					var str = $.cookie("goods");
					var arr = eval(str);
					var same = false;
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == id){
							arr[i].num++;
							var cookieStr = JSON.stringify(arr);
							$.cookie("goods", cookieStr, {expires:7});
							same = true;
							break;
						}
					}

					if(!same){
						var obj = {id: id, num: 1};
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {expires:7});
					}
				}
			})

			$(".j_close").click(function(){
				$(".joinbox").css("display","none");
			})

			$(".b_three").click(function(){
				$(".joinbox").css("display","none");
			})
			$(".b_two").click(function(){
				location.assign("my.html");
				$(".joinbox").css("display","none");
			})



			// 轮播图
			var timer = null;
			var iNow  = 0;
			$("#ban").find("div").click(function(){
				iNow = $(this).index();
				tab();
			})
			$("#con").find("#next").click(function(){
				iNow++;
				tab();
				if(iNow == $("#con ul").find("li").size() - 1){
					$("#ban").find("div").eq(0).attr("class", "con_one active");
				}
			})
			$("#con").find("#prev").click(function(){
				iNow--;
				if(iNow <= 0){
					iNow = 0;
				}
				tab();
				if(iNow == $("#con ul").find("li").size() - 1){
					$("#ban").find("div").eq(0).attr("class", "con_one active");
				}
			})
			function tab(){
				// alert("2");
				$("#ban").find("div").attr("class", "con_one").eq(iNow).attr("class", "con_one active");
				$("#con").find("ul").stop().animate({left:-1423 * iNow}, 1000, function(){
					if(iNow == $("#con ul").find("li").size() - 1){
						iNow = 0;
						$("#con ul").css("left", 0);
					}
				})
			}

			timer = setInterval(timerInner,2000);

			function timerInner(){
				iNow++;
				tab();
				if(iNow == $("#con ul").find("li").size() - 1){
					$("#ban").find("div").eq(0).attr("class", "con_one active");
				}
			}

			$("#con").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})
			
		})

	}
	return {
		product: product
	}
})

		
	
