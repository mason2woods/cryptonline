var otext = document.getElementById("text"); //获取input框

ose = document.querySelector("#search"); //通过类名选择器 选择到search框

lis = document.getElementsByClassName("li1"); //获取所有的li

otext.onkeyup = function(){  //当在input框中键盘弹起发生事件

  ose.style.display = otext.value?"block":"none"; /*三目运算符,如果otext.value的值部位空,则block。*/

  var osc = document.createElement("script"); /*创建一个script标签*/

  osc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+otext.value+"&cb=houxiaowei";

  /*srcipt的src值引入百度的url,然后将otext文本框中输入的内容连接到url,在后面在运行自己的方法*/

  document.body.appendChild(osc);

  /*将创建好的script标签元素放入body中*/

  /*input框中按下回车根据input的值跳转页面*/

  if(event.keyCode==13){

    /*将百度作为连接,传入input的值,并跳入新的页面*/

    window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext.value

  }

}

var count = 0;

var search = 0;

var arr = ose.children; /*获取ose下的所有li*/

function houxiaowei(json){

  var jsonLength = 0; /*json长度的初始值*/

//          console.log(json.s);

  for(var x in json.s){  /*将循环的次数变成json的长度*/

    jsonLength++;

  }

//          console.log(jsonLength);

  for(var i=0;i<lis.length;i++){

    if(jsonLength==0){ /*如果遍历出的长度等于0,li的值为空*/

      arr[i].innerHTML = null;  

    }else{

      if(json.s[i]!=null){/*如果json[i]的值不等于空,则将它的值放入li中*/

        arr[i].innerHTML = json.s[i];

      }

    }

  }

  if(count==lis.length-1){

    count=0;

    search=0;

  }

  count++;

  search++;

}

/*单击li中的值显示在input框中*/

function iptShow(thisId){

  otext.value = arr[thisId].innerHTML;

  window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext.value

}

otext.onclick = function(e){

  ose.style.display = "block";

  var e = event || window.event;

  e.stopPropagation();  //阻止冒泡事件,除了IE8及以下不兼容,其他浏览器都兼容

  e.cancelBubble=true; //阻止冒泡事件,IE8及以下兼容

//        alert(e);

}

/*单击body中的任意地方隐藏li*/

document.body.onclick = function(){

  ose.style.display = "none";

}

/*单击百度btn的时候触发,并跳到新的连接*/

var btn = document.querySelector("#btn");

cookies = []; 

btn.onclick = function(){

  /*获取当前input的值*/

  var otext = document.getElementById("text").value;

  /*将百度作为连接,传入input的值,并跳入新的页面*/

  if(otext=="" || otext==null){

    window.location.href = "http://127.0.0.1:8020/%E7%99%BE%E5%BA%A6/%E7%99%BE%E5%BA%A6%E9%A6%96%E9%A1%B5.html?__hbt=1516599867084";

  }else{

    window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+otext

  }

}

/*加载页面input为空*/

function onloads(){

  var s = otext.value = null;

  $myId("text").focus();

}

function randomBack(){

  var randomBk = parseInt(Math.random()*545);

  document.body.style.background = "url(https://ss3.bdstatic.com/lPoZeXSm1A5BphGlnYG/skin/"+randomBk+".jpg?2)";

  document.body.style.backgroundSize = "100%";

}‘“