
		$(function(){
			var iNow = 0;
			$(".prev").click(function(){
				iNow++;
				if(iNow >= 0){
					$(".prev").html(`<img src="../images/details/111.png" alt="">`);
				}else{
					$(".prev").html(`<img src="../images/details/op.png" alt="">`);
				}	
				if(iNow >= 0){
					iNow = 0;
				}
				$(".option").find("ul").animate({left:1120 * iNow}, 1000, function(){
				})
			})
			$(".next").click(function(){
				iNow--;
				if(iNow == 0){
					$(".prev").html(`<img src="../images/details/111.png" alt="">`);
				}else{
					$(".prev").html(`<img src="../images/details/op.png" alt="">`);
				}
				$(".option").find("ul").animate({left:1120 * iNow}, 1000, function(){
				})
			})

			var i = 2;
			$(".slipup").click(function(){
				if(i % 2 == 0){
					$(".option").animate({height:0}, 2000, function(){

					})
					// $(this).css("background-image" "url(../images/details/trigger_v_slide.gif)");
					i++;
				}else{
					$(".option").animate({height:156}, 2000, function(){

					})
					i++;
				}
				
			})

			var g_index = 0;
			$(".g_prev").click(function(){
				g_index--;
				if(g_index <= 0){
					g_index = 0;
				}
				$(".g_one").attr("class","g_one");
				$(".g_one").eq(g_index).attr("class", "g_one active");
			})
			$(".g_next").click(function(){
				g_index++;
				if(g_index >= $(".g_one").size()-1){
					g_index = $(".g_one").size()-1;
				}
				$(".g_one").attr("class","g_one");
				$(".g_one").eq(g_index).attr("class", "g_one active");
			})

			$(".g_one").click(function(){
				$(".g_one").attr("class", "g_one");
				$(this).attr("class", "g_one active");
				$(".g_pic").find("img").attr("class", "");
				$(".g_pic").find("img").eq($(this).index()).attr("class", "show");
			})


			// 数量增加
			var nums = 1;
			$(".add .sub").click(function(){
				nums--;
				if(nums <= 1){
					nums = 1;
				}
				$(".add .icur").html(nums);

			})
			$(".add .plus").click(function(){
				nums++;
				$(".add .icur").html(nums);
				
			})

			// 成功加入
			$(".join,shop").click(function(){
				$(".success").css("display", "block");
				var id = this.id;
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					$.cookie("goods", `[{id:${id}, num:${$(".add .icur").text()}}]`, {expires:7});
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
						arr.push(arr);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {expires:7});

					}
				}

			})
			$(".shop").click(function(){
				$(".success").css("display", "block");
			})

			$(".success .left").click(function(){
				$(".success").css("display", "none");
			})

			$(".success .right").click(function(){
				location.assign("my.html");
				$(".success").css("display", "none");
			})
			$(".success .top").find("img").click(function(){
				$(".success").css("display", "none");
			})
			
		})
