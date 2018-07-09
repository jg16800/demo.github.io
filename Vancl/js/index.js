// JavaScript Document
$(function(){
	//顶部菜单效果
	$('.has_hide').mouseenter(function(){
		$(this).addClass('licur');
		$(this).find('.menu_a').addClass('cur');
		$(this).find('.hide_box').stop().show();
	});
	$('.has_hide').mouseleave(function(){
		$(this).removeClass('licur');
		$(this).find('.menu_a').removeClass('cur');
		$(this).find('.hide_box').stop().hide();
	});
	$('.hide_box li a').hover(function(){
		$(this).addClass('curr');
	},function(){
		$(this).removeClass('curr');
	});
	//搜索框商城选择效果
	$('.seoBox>ul>li').click(function(){
		$(this).addClass('scur').siblings().removeClass('scur');
	});
	//购物车效果
	$('.shopping').mouseenter(function(){
		$(this).addClass('scur');
		$(this).find('.hideShoppingBox').show();
	});
	$('.shopping').mouseleave(function(){
		$(this).removeClass('scur');
		$(this).find('.hideShoppingBox').hide();		
	});	
	//凡客旗下商城效果
	$('.vanclVall').mouseenter(function(){
		$(this).find('.vanclVall1').addClass('vcur');
		$(this).find("div").stop().show();
	});
	$('.vanclVall').mouseleave(function(){
		$(this).find('.vanclVall1').removeClass('vcur');
		$(this).find("div").stop().hide();
	});
	//下拉导航菜单效果
	$('.li1').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop1').show();
	});
	$('.li1').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop1').hide();
	});
	$('.li2').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop2').show();
	});
	$('.li2').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop2').hide();
	});
	$('.li3').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop3').show();
	});
	$('.li3').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop3').hide();
	});
	$('.li4').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop4').show();
	});
	$('.li4').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop4').hide();
	});
	$('.li5').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop5').show();
	});
	$('.li5').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop5').hide();
	});
	$('.li6').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop6').show();
	});
	$('.li6').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop6').hide();
	});
	$('.li7').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop7').show();
	});
	$('.li7').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop7').hide();
	});
	$('.li8').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop8').show();
	});
	$('.li8').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop8').hide();
	});
	$('.li9').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop9').show();
	});
	$('.li9').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop9').hide();
	});
	$('.li10').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop10').show();
	});
	$('.li10').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop10').hide();
	});
	$('.li11').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop11').show();
	});
	$('.li11').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop11').hide();
	});
	$('.li12').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop12').show();
	});
	$('.li12').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop12').hide();
	});
	$('.li13').mouseenter(function(){
		$(this).addClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.drop13').show();
	});
	$('.li13').mouseleave(function(){
		$(this).removeClass('nav_licur');
		$(this).find('.drop_arrow_naw').addClass('ncur');
		$(this).find('.vanclVall_hideBox').removeClass('.drop10').hide();
	});
	//轮播图效果
	var slide_num = 0;
	var timer = setInterval(autoRun,4000);
	//控制自动轮播的函数
	function autoRun(){
		slide_num++;
		slide_num = (slide_num==$(".slideshow a").length))?0:slide_num;//判断是否到最后，是就切换到第一张
		$('.slideshow a').eq(slide_num).fadeIn().siblings('a').hide();//显示对应图片，隐藏兄弟图片
		$('.num_list li').eq(slide_num).addClass('numcur').siblings('li').removeClass('numcur');//控制li的显示样式
	}
	//鼠标进入显示arrow
	$('.slideshow').mouseenter(function(){
		$(this).find('.arrow').show();
	});
	$('.slideshow').mouseleave(function(){
		$(this).find('.arrow').hide();
	});
	$('.arrow_right').click(function(){
		slide_num++;
		if(slide_num==$(".slideshow a").length){
			slide_num = 0;
		}
		$(".slideshow a").eq(slide_num).fadeIn().siblings('a').fadeOut();
		$('.num_list li').eq(slide_num).addClass('numcur').siblings('li').removeClass('numcur');
	});
	
	$(".arrow_left").click(function(){
		slide_num--;
		if(slide_num==-1){
			slide_num=$(".slideshow a").length-1;
		}
		$(".slideshow a").eq(slide_num).fadeIn().siblings("a").fadeOut();
		$('.num_list li').eq(slide_num).addClass('numcur').siblings('li').removeClass('numcur');
	});
	
	//鼠标移入触发事件
	$('.num_list li').mouseenter(function(){
		clearInterval(timer);
		slide_num = $(this).index();//鼠标移入获取下标
		$('.slideshow a').eq(slide_num).fadeIn().siblings('a').hide();//显示对应下标图片
		$('.num_list li').eq(slide_num).addClass('numcur').siblings('li').removeClass('numcur');
	});
	
	//鼠标离开效果
	$('.num_list li').mouseleave(function(){
		timer = setInterval(autoRun,4000);
	});
	
	//marquue滚动效果
	var ul_width = 0;
	$('.marquue_right ul.list1 li').each(function(){
		ul_width += $(this).width();//计算ul的宽度
	});
	$('.marquue_right ul').css('width',ul_width+'px');//将宽度加到ul里面
	$('.marquue_right ul.list2').css('left',ul_width+'px');//给第二个ul设置left值
	
	var change_left = 710 - ul_width*2;
	function marquue(obj){
		setInterval(function(){
			var old_left = obj.position().left;//获取object现在的left
			var new_left = old_left - 1;
			if(new_left<change_left){
				obj.css('left','710px');
				new_left = 710;
			}
			obj.css('left',new_left+'px');
		},20);
	}
	marquue($('.marquue_right ul.list1'));
	marquue($('.marquue_right ul.list2'));
	//所以商品分类点击效果
	$('.category_list').mouseenter(function(){
		$(this).find('.category_list_l').addClass('lcur');
		$(this).find('.category_list_r').addClass('rcur');
	});
	$('.category_list').mouseleave(function(){
		$(this).find('.category_list_l').removeClass('lcur');
		$(this).find('.category_list_r').removeClass('rcur');
	});
	
	
	//所以商品右边切换效果
	$('.tab_tittle li').mouseover(function(){
		$(this).addClass('tcur').siblings().removeClass('tcur');
		var cur = $(this).index();
		$('.category_r .con').eq(cur).show().siblings('.con').hide();
	});
})






































