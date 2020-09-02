var usr;
var d;
var i;
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
	$(".lbtn").bind("click", function (){
		window.location.replace("./History.html?usr=" + usr);
	})
	$("#id").html($("#id").html() + "<span style='color: black; font-weight: bold'>" + RondomPass(9) + "</span>");
	$("#yh").html($("#yh").html() + "<span style='color: black; font-weight: bold'>" + usr + "</span>");
	$.ajax({
		url: "./json/registration.json",
		type: "GET",
		dataType: "jsonp",
		success: get_data
	});
	$("#ks").bind("change", ap);
	i = ap();
	$("#sbtn").bind("click", function (){
		if($("#name input").val() != ""){
			alert("Registered successfully!");
			$("#ks select").attr("disabled", "disabled");
			$("#ys select").attr("disabled", "disabled");
			$("#date input").attr("disabled", "disabled");
			$("#name input").attr("disabled", "disabled");
			$("#price").html($("#price").html() + "<span style='color: black; font-weight: bold; font-size:30px; position: absolute; margin-top: -15px; margin-left: 5px;'>" + d.adm[i].pri + "</span>");
			$(".log").detach();
		}
		else{
			alert("The name cannot be empty!");
		}
	})
}

function RondomPass(number){
    var arr = new Array;
    var arr1 = new Array("0","1","2","3","4","5","6","7","8","9");
    
    for(var i=0;i<number;i++){
        var n = Math.floor(Math.random()*10);
        arr[i] =arr1[n] ;   
    }
    
    val = arr.join("")
    return val;    
}

function get_data(data){
	d = data;
}

function ap(){
	for(var i=0; i<d.adm.length; i++){
		if(d.adm[i].ks == $("#ks option:selected").val()){
			$("#ys select").empty();
			for(var j=0; j<d.adm[i].doc.length; j++){
				$("#ys select").html($("#ys select").html() + "<option value='"+ d.adm[i].doc[j] + "'>" + d.adm[i].doc[j] + "</option>")
			}
			return i;
		}
	}
}