var d;
var type;
var usr;
window.onload = function (){
	var paras = location.search;
	var result = paras.match(/[^\?&]*=[^&]*/g);
	paras = {};
	for(i in result){
		var temp = result[i].split('=');
		paras[temp[0]] = temp[1];
	}
	type = decodeURI(paras.type);
	usr = paras.usr;
	$(".top ul li:nth-Child(4)").before("<span style='font-size:15px; position:absolute; margin-left:620px; margin-top:2px;'>" + usr + "</span>");
	$(".lbtn").bind("click", function (){
		window.location.replace("./History.html?usr=" + usr);
	})
	$(".rbtn").bind("click", function (){
		window.location.replace("./Registration.html?usr=" + usr);
	})
	$.ajax({
		url: "./json/history.json",
		type: "GET",
		dataType: "jsonp",
		success: get_data
	});
	ap();
}

function get_data(data){
	d = data;
}

function ap(){
	for(var i=0; i<d.adm.length; i++){
		if(d.adm[i].dis == type)
		{
			$(".pres #s1").html($(".pres #s1").html() + "  <span style='color: black; font-weight: bold'>" + d.adm[i].dis + "</span>");
			$(".pres #s2").html($(".pres #s2").html() + "  <span style='color: black; font-weight: bold'>" + d.adm[i].doc + "</span>");
			$(".pres #content").html(d.adm[i].cont);
			return ;
		}
	}
}