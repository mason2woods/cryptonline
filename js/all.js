$(document).ready(function(){
	var defaultTime = stime = 10;

	/*倒计时*/
	startTimer()
	function startTimer() {
	stime--;
	if (0 >= stime) {
		$("#timer").fadeOut().fadeIn().html('..');
		stime = defaultTime;
		return
	};
	$("#timer").html(stime)
	};
	setInterval(startTimer,1000);

	/* 获取交易数据 */
	getMarket();
	function getMarket()
	{
		$.getJSON("http://api.btc126.com/alt.php?t="+Math.random(),function(data){
			for (var i = 0; i < data.length; i++) {
				var sitetag = '';
				var sitedata = data[i];
				var rate = data[0].last;
				if (sitedata.from == 'BTC') {
					sitetag = 'btc';
				} else if (sitedata.from == 'LTC') {
					sitetag = 'ltc';
				} else if (sitedata.from == 'BCH') {
					sitetag = 'bch';
				} else if (sitedata.from == 'ETH') {
					sitetag = 'eth';
				} else if (sitedata.from == 'ZEC') {
					sitetag = 'zec';
				} else if (sitedata.from == 'EOS') {
					sitetag = 'eos';
				} else if (sitedata.from == 'USDT') {
					sitetag = 'usdt';
				} else if (sitedata.from == 'GT') {
					sitetag = 'gt';
				} else if (sitedata.from == 'OKB') {
					sitetag = 'okb';
				} else if (sitedata.from == 'HT') {
					sitetag = 'ht';
				} else if (sitedata.from == 'BNB') {
					sitetag = 'bnb';
				}

				else {
					continue;
				}
				get_check(sitetag+"_high_price",sitedata.high * rate);
				get_check(sitetag+"_low_price",sitedata.low * rate);
				get_check(sitetag+"_buy_price",sitedata.buy * rate);
				get_check(sitetag+"_sell_price",sitedata.sell * rate);
				get_check(sitetag+"_latest_price",sitedata.last * rate);
				get_check2(sitetag+"_change",sitedata.change);
				$("#"+sitetag+"_vol").text(Number(sitedata.vol).toFixed(0));
			}
		  });
	}    
	setInterval(getMarket,defaultTime * 1000);	
});


function CommaFormatted(amount) {
    var delimiter = ","; // replace comma if desired
    var i = parseInt(amount);
    if(isNaN(i)) { return ''; }
    var minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while(n.length > 4)
    {
        var nn = n.substr(n.length-4);
        a.unshift(nn);
        n = n.substr(0,n.length-4);
    }
    if(n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    amount = n;
    amount = minus + amount;
    return amount+'万';
}

function CommaFormatteddd(amount) {
    var delimiter = ","; // replace comma if desired
    var i = parseInt(amount);
    if(isNaN(i)) { return ''; }
    var minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while(n.length > 3)
    {
        var nn = n.substr(n.length-3);
        a.unshift(nn);
        n = n.substr(0,n.length-3);
    }
    if(n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    amount = n;
    amount = minus + amount;
    return amount;
}

function get_check(st1,st2)
{
	var val1=$("#"+st1).text();
	val1=val1.replace("▲","");
	val1=val1.replace("▼",""); 
	val1=val1.replace(" 　",""); 	
	var val2=Number(st2).toFixed(2);
	
	//第二次比第一次大 就蓝色 小就是红色  黑色是默认的
	if(val2>val1&&val1>0)
	{
		val2=val2+"▲";
		$("#"+st1+"_b").css("color","blue");  
		$("#"+st1).css("color","blue");  
	}
	else if(val2<val1)
	{
		val2=val2+"▼";
		$("#"+st1+"_b").css("color","red");  
		$("#"+st1).css("color","red");  
	}else
	{
		val2=val2+"";
		$("#"+st1+"_b").css("color","");  
		$("#"+st1).css("color","");  
	}
	$("#"+st1).text(val2);

}

function get_check2(st1,st2)
{
	var val2=Number(st2).toFixed(2);
	
	//上涨就蓝色 下跌就是红色
	if(val2>0)
	{
		val2="+"+val2+"%";
		$("#"+st1+"_b").css("color","blue");  
		$("#"+st1).css("color","blue");  
	}
	else if(val2<0)
	{
		val2=val2+"%";
		$("#"+st1+"_b").css("color","red");  
		$("#"+st1).css("color","red");  
	}else
	{
		val2=val2+"";
		$("#"+st1+"_b").css("color","");  
		$("#"+st1).css("color","");  
	}
	$("#"+st1).text(val2);

}

function get_check3(st1,st2)
{
	var val1=$("#"+st1).text();
	val1=val1.replace(" %▲","");
	val1=val1.replace(" %▼",""); 
	val1=val1.replace(" 　",""); 
	var val2=Number(st2).toFixed(2);
	
	//第二次比第一次大 就蓝色 小就是红色  黑色是默认的
	if(val2>val1&&val1>0)
	{
		val2=val2+" %▲";
		$("#"+st1+"_b").css("color","blue");  
		$("#"+st1).css("color","blue");  
	}
	else if(val2<val1)
	{
		val2=val2+" %▼";
		$("#"+st1+"_b").css("color","red");  
		$("#"+st1).css("color","red");  
	}else
	{
		val2=val2+" 　";
		$("#"+st1+"_b").css("color","");  
		$("#"+st1).css("color","");  
	}
	$("#"+st1).text(val2);

}