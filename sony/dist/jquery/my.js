$(function(){
	$.ajax({
		url:"../data/product.json",
		success:function(arr){
			var cookie_arr = eval($.cookie("goods"));
			for(var i = 0; i < arr.length; i++){
				for(var j = 0; j < arr[i].list.length; j++){
					for(var k = 0; k < cookie_arr.length; k++){
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
										<div class ='sub' id="${cookie_arr[k].id}">-</div>
										<div class="icur" >${cookie_arr[k].num}</div>
										<div class="plus" id="${cookie_arr[k].id}">+</div>
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
						}
						
					}
				}
			}
			

		}
	})

	$(".shopinfo").on("click", ".plus", function(){
		var str = $.cookie("goods");
		var arr = eval(str);
		for(var i = 0; i < arr.length; i++){
			if(arr[i].id == $(this).attr("id")){
				arr[i].num++;
				// $.ajax({
				// 	url:"../data/product.json",
				// 	success:function(arr){
				// 		var cookie_arr = eval($.cookie("goods"));
				// 		for(var i = 0; i < arr.length; i++){
				// 			for(var j = 0; j < arr[i].list.length; j++){
				// 				for(var k = 0; k < cookie_arr.length; k++){
				// 					if(arr[i].list[j].id == cookie_arr[k].id){
				// 						$(`<div class="info clear">
				// 						<div class="clear"> 
				// 							<div class="i_1">
				// 								<div class="lens"><img src="${arr[i].list[j].img}" alt=""></div>
				// 							</div>
				// 							<div class="txt">${arr[i].list[j].txt}</div>
				// 							<div class="rmb"><i>RMB</i><em>${arr[i].list[j].rmb}</em></div>
				// 							<div class="num clear">
				// 								<div class="add clear">
				// 									<div class ='sub' id="${cookie_arr[k].id}">-</div>
				// 									<div class="icur" >${cookie_arr[k].num}</div>
				// 									<div class="plus" id="${cookie_arr[k].id}">+</div>
				// 								</div>
				// 							</div>
				// 							<div class="add">
				// 								<i>RMB</i>
				// 								<em>${cookie_arr[k].num * arr[i].list[j].rmb}</em>
				// 							</div>
				// 							<div class="oper">
				// 								<div class="hope">移入心愿单</div>
				// 								<div class="delet">删除</div>
				// 							</div>
				// 						</div>
				// 					</div>`).appendTo($(".shopinfo"));
				// 					}
									
				// 				}
				// 			}
				// 		}
						

				// 	}
				// })

				// $(".add em").html(arr[i].num * );
				$(".icur").html(arr[i].num);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {expires:7});
			}
		}
		
	})
	$(".shopinfo").on("click", ".sub", function(){
		var str = $.cookie("goods");
		var arr = eval(str);
		for(var i = 0; i < arr.length; i++){
			if(arr[i].id == $(this).attr("id")){
				arr[i].num--;
				if(arr[i].num <= 1){
					arr[i].num = 1;
				}
				$(".icur").html(arr[i].num);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {expires:7});
			}
		}
		
	})
})