<!-- 头部（logo + 日期） -->
document.write ("<div class='head'>");
    document.write ("<div class='head_div'>");
        document.write ("<div class='head_left'>您好，欢迎来到<span>Cryptonline加密在线</span>！</div>");
		document.write ("<div class='head_left'> <span id='cg'></span> </div>");
		document.write ("<div class='head_left'> <span id='clock'></span> </div>");

    document.write ("</div>");
document.write ("</div>");
document.write ("<div class='clear'></div>");


document.write ("<div class='top'>");
		document.write ("<div class='date'>");
			document.write ("<iframe width='460' scrolling='no' height='90' frameborder='0' allowtransparency='true' src='https://i.tianqi.com/index.php?c=code&id=9' align='middle'></iframe>");
		document.write ("</div>");

		document.write ("<div class='clear'></div>");

	<!-- 头部（logo + 日期） end -->

	<!-- 搜索栏 -->
	document.write ("<div class='search'>");
			document.write ("<div class='sea'> ");
			// document.write ("<div class='sea_left'><p>AICoin</p></div>");
			  document.write ("<div class='container'>");
				  document.write ("<div class='bgDiv'>");
					document.write ("<input type='text' class='search-input-text' value='' autofocus placeholder='请输入BTC、ETH、BCH……'>");
					  document.write ("<input type='button' value='AICoin' class='search-input-button' id='btn'>");
						document.write ("<div class='suggest'>");
							 document.write ("<ul id='search-result'>");
							 document.write ("</ul>");
						document.write ("</div>");
				  document.write ("</div>");
			  document.write ("</div>");
		document.write ("</div>");
	document.write ("</div>");
	document.write ("<div class='search_bottom'></div>");
	document.write ("<div class='clear'></div>");
	
	// document.write ("<div class='price'>");
		// document.write ("<span id='btc126'>");
			// document.write ("<iframe id='myframe' name='myframe' width='100%' height='360px' frameborder='0' src='http://price.btc126.com/i.htm' scrolling='no' marginwidth='0' marginheight='0'></iframe>");
			// document.write ("<iframe id='myframe' name='myframe' width='100%' height='360px' frameborder='0' src='price.html' scrolling='no' marginwidth='0' marginheight='0'></iframe>");
		// document.write ("</span>");
	// document.write ("</div>");
	
	document.write ("</div>");
	document.write ("<div class='clear'>");
	<!-- 搜索栏 end -->

document.write ("</div>");
	

$(document).ready(function(){

	 $(".suspend").mouseover(function() {
        $(this).stop();
        $(this).animate({width: 160}, 400);
    })

    $(".suspend").mouseout(function() {
        $(this).stop();
        $(this).animate({width: 40}, 400);
    });
	
});