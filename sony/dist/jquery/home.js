define(["jquery"],function($){
	function home(){
		$(function(){
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
		})

	}
	return {
		home:home
	}
})