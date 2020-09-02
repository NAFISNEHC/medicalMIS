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
		else if(!check(u)){
			alert("The UserName already exists!");
		}
		else{
			var obj = {"usr" : u, "psw" : p};
			obj = JSON.stringify(obj);
			if(localStorage.length == 0)
				localStorage.setItem("adm0", "1");
			else
				localStorage.setItem(localStorage.key(0), (localStorage.getItem(localStorage.key(0))-1+2).toString());
			var temp = ad_string + localStorage.getItem(localStorage.key(0));
			localStorage.setItem(temp,obj);
			console.log(localStorage.getItem(localStorage.key(localStorage.getItem(localStorage.key(0)))));
			alert("Register success!");
			window.location.replace("./Login.html");
		}
	})
	$(".lbtn").bind("click", function (){
		alert("Please login user!");
		window.location.replace("./Login.html");
	})
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

function check(usr){
	for(var i=1; i<localStorage.length; i++){
		if(usr == JSON.parse(localStorage.getItem(localStorage.key(i))).usr)
			return false;
	}
	return true;
}