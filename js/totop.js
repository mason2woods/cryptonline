//返回顶部
$(function(){
	var $body = $(document.body);;
	var $bottomTools = $('.ToTop');
	var $qrTools = $('.To_tool');
	var qrImg = $('.To_img');
		$(window).scroll(function () {
			var scrollHeight = $(document).height();
			var scrollTop = $(window).scrollTop();
			var $footerHeight = $('.page-footer').outerHeight(true);
			var $windowHeight = $(window).innerHeight();
			scrollTop > 50 ? $("#scrollUp").fadeIn(200).css("display","block") : $("#scrollUp").fadeOut(200);			
			$bottomTools.css("bottom", scrollHeight - scrollTop - $footerHeight > $windowHeight ? 40 : $windowHeight + scrollTop + $footerHeight + 40 - scrollHeight);
		});
		$('#scrollUp').click(function (e) {
			e.preventDefault();
			$('html,body').animate({ scrollTop:0});
		});
		$qrTools.hover(function () {
			qrImg.fadeIn();
		}, function(){
			 qrImg.fadeOut();
		});
});

//右侧板块固定
jQuery(document).ready(function($) {
    $.fn.smartFloat = function() {
        var position = function(element) {
            var top = element.position().top,
            pos = element.css("position");
            $(window).scroll(function() {
                var scrolls = $(this).scrollTop();
                if (scrolls > top) {
                    if (window.XMLHttpRequest) {
                        element.css({
                            position: "fixed",
                            top: 76
                        });
                    } else {
                        element.css({
                            top: scrolls
                        });
                    }
                } else {
                    element.css({
                        position: "absolute",
                        top: top
                    });
                }
            });
        };
        return $(this).each(function() {
            position($(this));
        });
    };
    $("#suggested").smartFloat();
});

jQuery(document).ready(function() {   
    var a = $("#floatbox").offset();
    $(window).scroll(function() {
        var b = $(window).scrollTop();
        if (b > a.top) { 
           if((b - 420) < document.body.parentNode.scrollHeight)  
              $("#floatdiv").addClass("fixed");   
           else
              $("#floatdiv").addClass("fixed2");
        } else {   
            $("#floatdiv").removeClass("fixed");  
            $("#floatdiv").removeClass("fixed2"); 
        }   
    });   
});
