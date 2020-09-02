window.onload = function (){
	var ad_string = "adm";
	var U_usr = /^[0-9a-zA-Z]+$/;
	var U_psw = /^[0-9a-zA-Z]+$/; 
	$("#rbtn").bind("click", function (){
		var $usr = $("#usr");
		var $psw = $("#psw");
		var u = $usr.val().toString();
		var p = $psw.val().toString();
		if(!U_usr.test(u) || u == "" || !U_psw.test(p) || p == ""){
			alert("Incorrect UserName or PassWord!");
		}
		else if(!check(u, p)){
			alert("PassWord error!");
		}
		else{
			window.location.replace("./History.html?usr="+u);
		}
	})
	$(".lbtn").bind("click", function (){
		alert("Please login user!");
	})
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

function check(usr, psw){
	for(var i=1; i<localStorage.length; i++){
		if(usr == JSON.parse(localStorage.getItem(localStorage.key(i))).usr && psw == JSON.parse(localStorage.getItem(localStorage.key(i))).psw)
			return true;
	}
	return false;
}