function search() {
	var key = document.getElementById("input_content").value
	if(key == "") {
		alert("关键字不能为空！！！")
		return false
	}
	var baiduurl = "https://www.baidu.com/s?wd="
	var url = baiduurl + key
	window.location.href = url
}

function gohome() {
	//获取iframe的window对象  
	var iframe = document.getElementById('iframe').contentWindow;
	iframe.location.href = "phome.html"

}

function searchJump(next) {
	var nextInp = document.getElementById(next);
	var event = arguments.callee.caller.arguments[0] || window.event;
	if(event.keyCode == 13) { //判断是否按了回车，enter的keycode代码是13，想看其他代码请猛戳这里。
		search()
	}
}
//加载博客
function blog() {
	var iframe = document.getElementById('iframe').contentWindow;
	iframe.location.href = "pblog.html"
}
//加载技术
function technology() {
	var iframe = document.getElementById('iframe').contentWindow;
	iframe.location.href = "phome.html"
}
//加载交流
function discussion() {
	var iframe = document.getElementById('iframe').contentWindow;
	iframe.location.href = "pdiscussion.html"
}
//加载关于
function about() {
	var iframe = document.getElementById('iframe').contentWindow;
	iframe.location.href = "pabout.html"
}

function iFrameHeight() {
	var ifm = document.getElementById("iframe");
	var subWeb = document.frames ? document.frames["iframe"].document : ifm.contentDocument;
	if(ifm != null && subWeb != null) {
		ifm.height = subWeb.body.scrollHeight;
		ifm.width = subWeb.body.scrollWidth;
	}
}