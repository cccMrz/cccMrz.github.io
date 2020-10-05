alert("您终于来了！hyhy！")
var e, i;
 e = document.getElementById("control")
 i = 0;
 e.onclick = function(){
 	if (i == 0){
 		alert ("不存在的链接！请再试一次。");
 		i++;
 	}else if (i == 1){
 		alert("tan90°！请更换此设备。");
 		i++;
 	}else {
 		alert("您还在点啊，可是这里什么也没有了。");
 		i = 0;
 	}

 	return false;

 }