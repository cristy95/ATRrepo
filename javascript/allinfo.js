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

function editform()
{
  $.ajax({
	url: siteloc + scriptloc + "getstudinfo.py",
	data: {stud_id:$("#stud_id").val()}, 
	dataType: 'json',
	success: function(res){
		console.log(res);
		if(res[0][0] != "None")
                    {
			 rets = '<div class="edit">';
			rets += '<input type="character" value="'+res[0][0]+'" class="fill" id="stud_id" required="highly"></br>'
				+ '<input type="text" value="'+ res[0][1] +'" class="fill" id="college" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="course" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="nameFirst" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="nameMid" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="nameLast" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="nickname" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="gender" required="highly"></br>'
				+ '<input type="int" value="'+res[0][2]+'" class="fill" id="birthdate" required="highly"></br>'
				+ '<input type="int" value="'+res[0][2]+'" class="fill" id="birthMonth" required="highly"></br>'
				+ '<input type="int" value="'+res[0][2]+'" class="fill" id="birthYear" required="highly"></br>'
				+ '<input type="int" value="'+res[0][2]+'" class="fill" id="age" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="contactNum" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="homeAddress" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="father_nameFirst" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="father_nameMiddle" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="father_nameLast" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="mother_nameFirst" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="mother_nameMiddle" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="mother_nameLast" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="guardian_nameFirst" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="guardian_nameMiddle" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="guardian_nameLast" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="spouse_nameFirst" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="spouse_nameMiddle" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="spouse_nameLast" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="org_Name" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="org_Pos" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="org_AcYr" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="stud_aA_cA" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="stud_schGra" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="dissertation" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="special_project" required="highly"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="thesis_title" required="highly"></br>'
				+ '<input type="float" value="'+res[0][3]+'" class="fill" id="status" required="highly"></br>';
			rets += '<button onclick="additem();">Add Item</button>'  + '</div>';
					  $("#target").html(table); 
				  } // end if
		}
	});
}
