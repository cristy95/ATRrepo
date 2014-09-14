var siteloc = "http://localhost/ATRrepo";
var scriptloc = "/scripts/"



function addstudinfo()
{
	$.ajax({
      url: siteloc + scriptloc + "addallinfo.py",
      data: {stud_id : $("#stud_id").val(),
             college : $("#college").val(),
             course  : $("#course").val(),
             nameFirst : $("#nameFirst").val(),
             nameMid : $("#nameMid").val(),
             nameLast: $("#nameLast").val(),
             nickname: $("#nickname").val(),
             gender: $("#gender").val(),
             birthdate: $("#birthdate").val(),
             birthMonth: $("#birthMonth").val(),
             birthYear: $("#birthYear").val(),
             age : $("#age").val(),
             contactNum : $("#contactNum").val(),
             homeAddress : $("#homeAddress").val(),
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
		spouse_nameLast:$("#spouse_nameLast").val(),
	     org_Name:$("#org_Name").val(),
		org_Pos:$("#org_Pos").val(),
		org_AcYr:$("#org_AcYr").val(),
		stud_aA_cA:$("#stud_aA_cA").val(),
		stud_schGra:$("#stud_schGra").val(),
	    dissertation:$("#dissertation").val(),
		special_project:$("#special_project").val(),
		thesis_title:$("#thesis_title").val(),
	    status:$("#status").val()},      
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
			answer = 'SET'
			$("#target").html(answer); 
		  } // end if
              }
    });
}


