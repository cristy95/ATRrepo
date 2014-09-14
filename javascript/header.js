var siteloc = "http://localhost/ATRrepo";
var scriptloc = "/scripts/"

function getheader()
{
   $.ajax({
       
	   url: siteloc + scriptloc + "header.py",
       data: {stud_id:$("#stud_id").val(),
	    father_nameFirst:$("#nameFirst").val(),
	    father_nameFirst:$("#nameMid").val(),
	    father_nameFirst:$("#nameLast").val(),
	    father_nameFirst:$("#birthdate").val(),
	    father_nameFirst:$("#birthMonth").val(),
	    father_nameFirst:$("#birthYear").val(),
	    father_nameFirst:$("#homeAdress").val(),
		father_nameFirst:$("#father_nameFirst").val(),
		father_nameMiddle:$("#father_nameMiddle").val(),
		father_nameLast:$("#father_nameLast").val(),
		mother_nameFirst:$("#mother_nameFirst").val(),
		mother_nameMiddle:$("#mother_nameMiddle").val(),
		mother_nameLast:$("#mother_nameLast").val(),
		guardian_nameFirst:$("#guardian_nameFirst").val(),
		guardian_nameMiddle:$("#guardian_nameMiddle").val(),
		guardian_nameLast:$("#guardian_nameLast").val(),
		spouse_nameFirst:$("#spouse_nameFirst").val(),
		spouse_nameMiddle:$("#spouse_nameMiddle").val(),
		spouse_nameLast:$("#spouse_nameLast").val()},
		spouse_nameLast:$("#dissertation").val()},
		spouse_nameLast:$("#special_project").val()},
		spouse_nameLast:$("#thesis_title").val()},
		
       dataType: 'json',
       success: function (res) {
                   console.log(res);
                   if(res[0][0] != "None")
                   {
			
			answer = 'SET'
			$("#target").html(answer);
		} //end if
	}
	});
}