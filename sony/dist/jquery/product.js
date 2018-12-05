

		$(function(){
			$.ajax({
				url:"../data/product.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<div class="header">
								${arr[i].name}
							</div>`).appendTo($(".r_1").eq(i));
						for(var j = 0; j < arr[i].list.length; j++){
							$(`<div class="lens clear">
									<div class="tagnew">
										<img src="${arr[i].list[j].tagnew}" alt="">
									</div>
									<div class="tag clear">
										<div class="t_one"><img src="${arr[i].list[j].t_one}" alt=""></div>
										<div class="t_two"><img src="${arr[i].list[j].t_two}" alt=""></div>
									</div>
									<img src="${arr[i].list[j].img}" alt="">
									<div class="l_btn" style="background:${arr[i].list[j].bg}"></div>
									<div class="txt"><a href="#" title="${arr[i].list[j].txt}">${arr[i].list[j].txt}</a></div>
									<div class="money clear">
										<span class="rmb">RMB<i>${arr[i].list[j].rmb}</i></span>
										<em>对比</em>
										<div class="m_btn"></div>
									</div>
									<div class="border"></div>
									<div class="info clear">
										<strong class="a1"><img src="${arr[i].list[j].info_img}" alt=""></strong>						
										<strong class="a2"><img src="${arr[i].list[j].info_img1}" alt=""></strong>
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

			$("#screencon").find("li").click(function(){
				var txt = $(this).text();
				// 没有
				if($(this).find("span").html().length == 0){
					$(this).find("span").html(`<em></em>`);
					var str = $("#l_box").html();
					if(str.length == 0){
						$("#l_box").html(`<div class="condition">
								你的选择<a href="" id="reset">重置筛选</a>
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
			})

			$(".j_close").click(function(){
				$(".joinbox").css("display","none");
			})

			$(".b_three").click(function(){
				$(".joinbox").css("display","none");
			})
			$(".b_two").click(function(){
				$.cookie()
				location.assign("my.html");
				$(".joinbox").css("display","none");
			})



			
		})

	
