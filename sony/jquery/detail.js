define(["jquery", "jquery-cookie"], function($){
	function detail(){
		$(function(){
			// 获取数据
			if($.cookie("detail")){
				$.ajax({
				url:"../data/detail.json",
				success:function(arr){
					$(".g_top").html("");
					var cArr = eval($.cookie("detail"));
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == cArr[0].id){
							$(".homeBackBox .b_left .now").html(arr[i].txt1);
							$(`<div class="g_top clear">
								<div class="g_left">
									<div class="g_pic small">
										<img src="${arr[i].img}" alt="" class="show">
										<img src="${arr[i].img}" alt="">
										<div class="mark"></div>
									</div>
									<div class="g_sel clear">
										<div class="g_prev"></div>
										<div class="con">
											<div class="g_one active"><img src="${arr[i].small1}" alt=""></div>
											<div class="g_one"><img src="${arr[i].small2}" alt=""></div>
										</div>
										<div class="g_next"></div>
									</div>
								</div>
								<div class="g_right">
									<div class="title">${arr[i].txt}<br>(${arr[i].txt1})</div>
									<div class ="content">商品描述
										<b>${arr[i].content}</b>
										${arr[i].content1}
									</div>
									<p>价格:RMB<i> ${arr[i].rmb}</i></p>
									<div class = "money"><i>尊享价</i><a href="">立即登录</a><i>了解对应的会员价格</i><img src="../images/details/67.jpg" alt=""></div>
									<div class="line"></div>
									<div class="standard clear">
										<i>规格</i>
										<div class ="s_btn">${arr[i].txt1}</div>
									</div>
									<div class='color clear'>
										<i>颜色</i>
										<div class="c_btn"><div class="block" style="background:${arr[i].bg}"></div><em>${arr[i].color}</em></div>
									</div>
									<div class="num clear">
										<i>数量</i>
										<div class="add clear">
											<div class ='sub'>-</div>
											<div class="icur">1</div>
											<div class="plus">+</div>
										</div>
									</div>
									<div class="line"></div>
									<div class = "joinbox clear">
										<div class="join" id="1"><img src="../images/details/button_cartaddition_big.png" alt=""></div>
										<div class="wish"><img src="../images/details/addwish.png" alt=""></div>
									</div>
								</div>
							</div>
							<div class="g_bottom clear">
								<span>${arr[i].txt1}</span>
								<div class="d_right clear">
									<div class="shop"><img src="../images/details/button_cartaddition_small.png" alt=""></div>
									<div class="text">评论</div>
									<div class="text">支持</div>
									<div class="text">详细参数</div>
									<div class="text active">概述</div>
								</div>
							 </div>
							 <div class="lens">
							 	<img src="${arr[i].img}" alt="" class="big"/>
							 </div>
							 `).appendTo($(".good"));
						}
					}
						
				}
			})

			}
			
			// 放大镜效果
			var mouseX = 0; //鼠标移动的位置X
			var mouseY = 0; //鼠标移动的位置Y
			var maxLeft = 0; //最右边
			var maxTop = 0; //最下边
			var markLeft = 0; //放大镜移动的左部距离
			var markTop = 0; //放大镜移动的顶部距离
			var perX = 0; //移动的X百分比
			var perY = 0; //移动的Y百分比
			var bigLeft = 0; //大图要移动left的距离
			var bigTop = 0; //大图要移动top的距离

			$(".good").on("mousemove", ".small", imgMouseMove).on("mouseleave",".small", cancle);
		
			//改变放大镜的位置
			function updataMark($mark){
			//通过判断，让小框只能在小图区域中移动 
				if(markLeft<0){
				markLeft = 0;
				}else if(markLeft>maxLeft){
				markLeft = maxLeft;
				}
				if(markTop<0){
				markTop = 0;
				}else if(markTop>maxTop){
				markTop = maxTop;
				}

				//获取放大镜的移动比例，即这个小框在区域中移动的比例
				perX = markLeft/$(".small").outerWidth();
				perY = markTop/$(".small").outerHeight();
				bigLeft = -perX*$(".big").outerWidth();
				bigTop = -perY*$(".big").outerHeight();


				//设定小框的位置
				$mark.css({"left":markLeft,"top":markTop,"display":"block"});
			}

				//改变大图的位置
			function updataBig(){
				$(".big").css({"display":"block","left":bigLeft,"top":bigTop});
			}

			//鼠标移出时
			function cancle(){
				$(".big").css({"display":"none"}); 
				$(".mark").css({"display":"none"});
				$(".lens").css({"display":"none"})
			}

			//鼠标小图上移动时
			function imgMouseMove(event){
				$(".lens").css({"display":"block"});
				// $(".big").css({"display":"block"}); 
				var $this = $(this);
				var $mark = $(this).children(".mark");
				//鼠标在小图的位置()
				mouseX = event.pageX-$this.offset().left - $mark.outerWidth()/2;
				mouseY = event.pageY-$this.offset().top - $mark.outerHeight()/2;
				//最大值
				maxLeft =$this.width()- $mark.outerWidth();
				maxTop =$this.height()- $mark.outerHeight();
				markLeft = mouseX;
				markTop = mouseY;
				updataMark($mark);
				updataBig();
			}
			

			
			
			
			// 滑动镜头数据
			$.ajax({
				url:"../data/detail.json",
				success: function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<li><img src="${arr[i].img_top}" alt="">
							<span>${arr[i].txt1}</span></li>`).appendTo($(".optionbox .option").find("ul"));
					}
				}

			})
			var iNow = 0;
			$(".optionbox").on("click", ".prev", function(){
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
			
			$(".optionbox").on("click", ".next", function(){
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
			$(".good").on("click", ".g_prev", function(){
				g_index--;
				if(g_index <= 0){
					g_index = 0;
				}
				$(".g_one").attr("class","g_one");
				$(".g_one").eq(g_index).attr("class", "g_one active");
			})
		
			$(".good").on("click", ".g_next", function(){
				g_index++;
				if(g_index >= $(".g_one").size()-1){
					g_index = $(".g_one").size()-1;
				}
				$(".g_one").attr("class","g_one");
				$(".g_one").eq(g_index).attr("class", "g_one active");
			})
			
			$(".good").on("click", ".g_one", function(){
				$(".g_one").attr("class", "g_one");
				$(this).attr("class", "g_one active");
				$(".g_pic").find("img").attr("class", "");
				$(".g_pic").find("img").eq($(this).index()).attr("class", "show");
			})
			


			// 数量增加
			var nums = 1;
			$(".good").on("click", ".add .sub", function(){
				nums--;
				if(nums <= 1){
					nums = 1;
				}
				$(".add .icur").html(nums);
			})
			$(".good").on("click", ".add .plus", function(){
				nums++;
				$(".add .icur").html(nums);
			})
			

			// 成功加入
			$(".good").on("click", ".join,.shop", function(){
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
						arr.push(obj);
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr, {expires:7});

					}
				}
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
	}
	return {
		detail:detail
	}
})
		
