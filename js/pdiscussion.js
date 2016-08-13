function changhint(mess,hint,maxleng){
	if(mess.value.length>maxleng){
		mess.value = mess.value.substring(0,maxleng);
	}else{
		var length = mess.value.length;
		hint.innerHTML = length + "/" +maxleng;
	}
}
