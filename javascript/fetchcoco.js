var siteloc = "http:/localhost/ATRrepo"
var scriptloc = "/scripts/"

function fetchinfo(){
	$.ajax({
		url: siteloc + scriptloc + "getcollege.py",
		data:{},
		dataType: 'json'
		success: function (stud) {
			console.log(stud);
			if (stud[0][0] != "None")
			{
			
			
			}
	}

}

