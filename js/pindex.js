function search(){
	var key = document.getElementById("input_content").value
	if(key==""){
		alert("关键字不能为空！！！")
		return false
	}
	var baiduurl = "https://www.baidu.com/s?wd="
	var url = baiduurl+key
	window.location.href=url
}

function gohome(){
	 //获取iframe的window对象  
    var iframe = document.getElementById('iframe').contentWindow;
    iframe.location.href = "phome.html"
    
}


