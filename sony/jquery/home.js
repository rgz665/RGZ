define(["jquery", "jquery-cookie"], function($){
	function home(){
		$(function(){


			// 点击侧边栏跳转镜头链接
			$(".spe").on("click", ".o_1", function(){
				if($(this).index() == 3){
					location.assign("product.html");
				}
			})


			






			




			// 轮播
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

		
			//放大动画
			$(".bigMax").hover(function(){
				$(this).stop().animate({
					width: 700,
					height:803,
					marginLeft: -50,
					marginTop: -50
				}, 1000,function(){

				})
					},function(){
						$(this).stop().animate({
							width: 600,
							height:703,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})
					$(".bigMin").hover(function(){
						$(this).stop().animate({
							width: 345,
							height:448,
							marginLeft: -25,
							marginTop: -25
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 295,
							height:398,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})
					$(".bigSm").hover(function(){
						$(this).stop().animate({
							width: 345,
							height:345,
							marginLeft: -25,
							marginTop: -25
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 295,
							height:295,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})
					$(".big").hover(function(){
						$(this).stop().animate({
							width: 395,
							height:244,
							marginLeft: -50,
							marginTop: -25
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 295,
							height:194,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})
					$(".bigSs").hover(function(){
						$(this).stop().animate({
							width: 156,
							height:136,
							marginLeft: -10,
							marginTop: -15
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 136,
							height:106,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})
					$(".bigL").hover(function(){
						$(this).stop().animate({
							width: 360,
							height:276,
							marginLeft: -20,
							marginTop: -10
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 320,
							height:256,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})


					$(".bigMm").hover(function(){
						$(this).stop().animate({
							width: 640,
							height:315,
							marginLeft: -20,
							marginTop: -10
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 600,
							height:295,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})
					$(".bigKk").hover(function(){
						$(this).stop().animate({
							width: 190,
							height:130,
							marginLeft: -10,
							marginTop: -5
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 170,
							height:120,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})
					$(".bigIi").hover(function(){
						$(this).stop().animate({
							width: 156,
							height:116,
							marginLeft: -10,
							marginTop: -5
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 136,
							height:106,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})
					$(".bigZz").hover(function(){
						$(this).stop().animate({
							width: 278,
							height:182,
							marginLeft: -10,
							marginTop: -5
						}, 1000,function(){

						})
					},function(){
						$(this).stop().animate({
							width: 258,
							height:172,
							marginLeft: 0,
							marginTop: 0
						}, 1000,function(){
							
						})
					})




			// 小轮播图

			var timer1 = null;
			var now = 0;
			$("#select").find("div").click(function(){
				now = $(this).index();
				tab1();
			})
			$("#s_next").click(function(){
				now++;
				tab1();
				if(now == $("#s_ban ul").find("li").size() / 2 - 1){
					$("#select").find("div").eq(0).attr("class", "active");
				}
			})
			$("#s_prev").click(function(){
				now--;
				if(now <= 0){
					now = 0;
				}
				tab1();
				if(now == $("#s_ban ul").find("li").size() / 2 - 1){
					$("#select").find("div").eq(0).attr("class", "active");
				}
			})
			function tab1(){
				// alert("2");
				$("#select").find("div").attr("class", "").eq(now).attr("class", "active");
				$("#s_ban").find("ul").stop().animate({left:-1210 * now}, 500, function(){
					if(now >= $("#s_ban ul").find("li").size() / 2 - 1){
						now = 0;
						$("#s_ban ul").css("left", 0);
					}
				})
			}

			timer1 = setInterval(timerInner1,2000);

			function timerInner1(){
				now++;
				tab1();
				if(now == $("#s_ban ul").find("li").size() / 2 - 1){
					$("#select").find("div").eq(0).attr("class", "active");
				}
			}

			$(".smallban").hover(function(){
				clearInterval(timer1);
			}, function(){
				timer1 = setInterval(timerInner1, 2000);
			})

			// 新品发布
			$.ajax({
				url:"../data/newproduct.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<div class="one">
							<p>${arr[i].head}</p>
							<p>${arr[i].txt}</p>
							<span>${arr[i].txt1}</span>
							<span>${arr[i].txt2}</span>
							<i>RMB<em>${arr[i].rmb}</em></i>
							<img src="${arr[i].img}" alt="">
						</div>`).appendTo($(".new_pro"));
					}
				}
			})



			// 引入首页数据
			$.ajax({
				url:"../data/home.json",
				success:function(arr){
					var i = 0;
					$(`<div class="audio clear">
			<p>便携式音频设备</p>
			<div class="link clear">
				<a href="">高解析度音频设备</a>
				<a href="">热门活动</a>
				<a href="">热门活动</a>
				<a href="">热门活动</a>
				<a href="">热门活动</a>
				<a href="">热门活动</a>
				<a href="">热门活动</a>
				<a href="">热门活动</a>
				<a href="">热门活动</a>
				<a href="">热门活动</a>
			</div>
			<div class='product clear'>
				<div class="left clear">
					<div class="one">
							<img src="${arr[i].audio1[i].img}" alt="" class="bigMax">
					</div>
				</div>
				<div class="right clear">
					<div class="m">
						<div class="two">
							<img src="${arr[i].audio2[i].img}" alt="" class="big">
							<img src="" alt="">
						</div>
						<div class="two">
							<img src="${arr[i].audio3[i].img}" alt="" class="big">
							<img src="${arr[i].audio3[i].iconHi}" alt="">
							<div class="text">
								<div>${arr[i].audio3[i].head}</div>
								<div>${arr[i].audio3[i].txt}</div>
								<i>${arr[i].audio3[i].rmb}</i>
							</div>

						</div>
						<div class='four'>
							<div class="text">
								<div>${arr[i].audio5[i].head}</div>
								<div>${arr[i].audio5[i].txt}</div>
								<i>${arr[i].audio5[i].rmb}</i>
							</div>
							<img src="${arr[i].audio5[i].img}" alt="" class="bigSm">
							<img src="../images/home/hires_40x40.png" alt="">
						</div>
					</div>
					<div class="b">
						<div class="text">
							<div>${arr[i].audio4[i].head}</div>
							<div>${arr[i].audio4[i].txt}</div>
							<i>${arr[i].audio4[i].rmb}</i>
						</div>
						<div class="three">
							<img src="${arr[i].audio4[i].img}" alt="" class="bigMin">
						</div>
						<div class='four'>
							<div class="text">
								<div>${arr[i].audio6[i].head}</div>
								<div>${arr[i].audio6[i].txt}</div>
								<i>${arr[i].audio6[i].rmb}</i>
							</div>
							<img src="${arr[i].audio6[i].img}" alt="" class="bigSm">
							<img src="${arr[i].audio6[i].iconHi}" alt="">
						</div>
					</div>
				</div>
			</div>
			<div class='product1 clear'>
				<div class="right clear">
					<div class="long">
						<div class="text">
							<div>${arr[i].audio7[i].head}</div>
							<div>${arr[i].audio7[i].txt}</div>
							<i>${arr[i].audio7[i].rmb}</i>
						</div>
						<img src="${arr[i].audio7[i].img}" alt="" class="bigMm">
					</div>
					<div class="m">
						<div class="two">
							<img src="${arr[i].audio8[i].img}" alt="" class="bigMin">
						</div>
					</div>
					<div class="b">
						<div class="three">
							<div class="text">
								<div>${arr[i].audio9[i].head}</div>
								<div>${arr[i].audio9[i].txt}</div>
								<i>${arr[i].audio9[i].rmb}</i>
							</div>
							<img src="${arr[i].audio9[i].img}" alt="" class="big">
						</div>
						<div class='four'>
							<div class="text">
								<div>${arr[i].audio10[i].head}</div>
								<div>${arr[i].audio10[i].txt}</div>
								<i>${arr[i].audio10[i].rmb}</i>
							</div>
							<img src="${arr[i].audio10[i].img}" alt="" class="bigSs">
						</div>
					</div>
				</div>
				<div class="left clear">
					<div class="one">
						<img src="${arr[i].audio11[i].img}" alt="" class="bigMax">
					</div>
				</div>
			</div>

			<div class="bottomlink">
				<span>装机必备:</span>
				<a href="">Music Center</a>
				<a href="">Music Center</a>
				<a href="">Music Center</a>
				<a href="">Music Center</a>
				<a href="">Music Center</a>
				<a href="">Music Center</a>
				<a href="">Music Center</a>
				<a href="">Music Center</a>
			</div>
		</div>`).appendTo($(".audiobox").eq(0));
				}
			})


			// 微影会
			$.ajax({
				url:"../data/share.json",
				success: function(arr){
					for(var i = 0; i < arr.length; i++){
						$(`<div class="first">
				<div class="one">
					<div class="top">
						${arr[i].tagnew}
					</div>
					<img src="${arr[i].img}" alt="">
				</div> 
				<div class="title">
					${arr[i].txt}
				</div>
			</div>`).appendTo($(".bottombox .bottom"));
					}
				}
			})
		})
	}
	return {
		home:home
	}
})
		

