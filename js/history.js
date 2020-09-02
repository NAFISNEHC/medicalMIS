var d;
var usr;
var id;
window.onload = function (){
	var paras = location.search;
	var result = paras.match(/[^\?&]*=[^&]*/g);
	paras = {};
	for(i in result){
		var temp = result[i].split('=');
		paras[temp[0]] = temp[1];
	}
	usr = paras.usr;
	$(".top ul li:nth-Child(4)").before("<span style='font-size:15px; position:absolute; margin-left:620px; margin-top:2px;'>" + usr + "</span>");
	id = find_id(usr);
	$.ajax({
		url: "./json/history.json",
		type: "GET",
		dataType: "jsonp",
		success: get_data
	});
	ap(id);
	$(".lbtn").bind("click", function (){
		window.location.replace("./Registration.html?usr=" + usr);
	})
}

function get_data(data){
	d = data;
}

function find_id(usr){
	for(var i=1; i<localStorage.length; i++){
		if(usr == JSON.parse(localStorage.getItem(localStorage.key(i))).usr)
			return i;
	}
}

function ap(id){
	for(var i=0; i<d.ad[id-1].adm.length; i++){
		var dis = d.ad[id-1].adm[i].dis;
		var dep = d.ad[id-1].adm[i].dep;
		var doc = d.ad[id-1].adm[i].doc;
		var date = d.ad[id-1].adm[i].date;
		$("#tbody tr:nth-child("+(i+2)+") td:nth-child(1)").text(dis);
		$("#tbody tr:nth-child("+(i+2)+") td:nth-child(2)").text(dep);
		$("#tbody tr:nth-child("+(i+2)+") td:nth-child(3)").text(doc);
		$("#tbody tr:nth-child("+(i+2)+") td:nth-child(4)").text(date);
		$("#tbody tr:nth-child("+(i+2)+") td:nth-child(4)").append("<button style='width:55px; height:20px; font-size:12px; padding:0; position:absolute; margin-left:60px; margin-top:-3px;' onclick='pres(this)'>查看药方</button>");
	}
}

function pres(obj){
	window.location.replace("./Prescription.html?type=" + obj.parentNode.parentNode.firstElementChild.innerHTML + "&usr=" + usr);
}