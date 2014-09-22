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
		thesis_title:$("#thesis_title").val()},      
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
			answer = 'SUCCESS'
			$("#target").html(answer); 
		  } // end if
              }
    });
}

function editform()
{
  $.ajax({
	url: siteloc + scriptloc + "getstudinfoperid.py",
	data: {stud_id:$("#stud_id").val()}, 
	dataType: 'json',
	success: function(res){
		console.log(res);
		if(res[0][0] != "None")
                    {
			rets = '<head><title>AUTOMATED TADMAN REGISTRATION</title>' +
				'<meta charset="utf-8"/>' +
				'<link rel="stylesheet" type="text/css" href="fill1.css" type="text/css" />'+
                		'<link rel="stylesheet" href="css/bootstrap.min.css">'+
				'<link rel="stylesheet" href="css/bootstrap-theme.min.css">'+
				'<script src="javascript/jquery.js"></script>'+
       				'<script src="javascript/bootstrap.min.js"></script>'+
				'<script src="javascript/allinfo.js"></script>'+
	      			'  <script src="javascript/jqinit.js"></script>	'+	

				'<meta name="viewport" content="width-device-width, initial-scale-1.0"> '+
		
				'</head>'
			 rets += '<div class="edit">';
			rets +='</br></br>'
			rets += '<input type="character" value="'+res[0][0]+'" class="fill" id="stud_id" required="highly" placeholder="Student Id"></br>'
				+'<input type="text" value="'+ res[0][1] +'" class="fill" id="college" required="highly" placeholder="College"></br>'
				+ '<input type="text" value="'+res[0][2]+'" class="fill" id="course" required="highly" placeholder="Course"></br>'
				+ 'Personal Information of Graduating Student</br>'
				+ '<input type="text" value="'+res[0][3]+'" class="fill" id="nameFirst" required="highly" placeholder="First Name"></br>'
				+ '<input type="text" value="'+res[0][4]+'" class="fill" id="nameMid" required="highly" placeholder="Middle Name"></br>'
				+ '<input type="text" value="'+res[0][5]+'" class="fill" id="nameLast" required="highly" placeholder="Last Name"></br>'
				+ '<input type="text" value="'+res[0][6]+'" class="fill" id="nickname" required="highly" placeholder="Nickname"></br>'
				+ '<input type="text" value="'+res[0][7]+'" class="fill" id="gender" required="highly" placeholder="Gender"></br>'
				+ '<input type="int" value="'+res[0][8]+'" class="fill" id="birthdate" required="highly" placeholder="Birth Date"></br>'
				+ '<input type="int" value="'+res[0][9]+'" class="fill" id="birthMonth" required="highly" placeholder="Birth Month"></br>'
				+ '<input type="int" value="'+res[0][10]+'" class="fill" id="birthYear" required="highly" placeholder="Birth Year"></br>'
				+ '<input type="int" value="'+res[0][11]+'" class="fill" id="age" required="highly" placeholder="Age"></br>'
				+ '<input type="text" value="'+res[0][12]+'" class="fill" id="contactNum" required="highly" placeholder="Contact Number"></br>'
				+ '<input type="text" value="'+res[0][13]+'" class="fill" id="homeAddress" required="highly" placeholder="Home Address"></br>'				
				+ 'Family Background'
				+'Father</br>'
				+ '<input type="text" value="'+res[0][14]+'" class="fill" id="father_nameFirst" required="highly" placeholder="First Name"></br>'
				+ '<input type="text" value="'+res[0][15]+'" class="fill" id="father_nameMiddle" required="highly" placeholder="Middle Name"></br>'
				+ '<input type="text" value="'+res[0][16]+'" class="fill" id="father_nameLast" required="highly" placeholder="Last Name"></br>'
				+'Mother</br>'
				+ '<input type="text" value="'+res[0][17]+'" class="fill" id="mother_nameFirst" required="highly" placeholder="First Name"></br>'
				+ '<input type="text" value="'+res[0][18]+'" class="fill" id="mother_nameMiddle" required="highly" placeholder="Middle Name"></br>'
				+ '<input type="text" value="'+res[0][19]+'" class="fill" id="mother_nameLast" required="highly" placeholder="Last Name"></br>'
				+'Guardian</br>'
				+ '<input type="text" value="'+res[0][20]+'" class="fill" id="guardian_nameFirst" required="highly" placeholder="First Name"></br>'
				+ '<input type="text" value="'+res[0][21]+'" class="fill" id="guardian_nameMiddle" required="highly" placeholder="Middle Name"></br>'
				+ '<input type="text" value="'+res[0][22]+'" class="fill" id="guardian_nameLast" required="highly" placeholder="Last Name"></br>'
				+'Spouse</br>'
				+ '<input type="text" value="'+res[0][23]+'" class="fill" id="spouse_nameFirst" required="highly" placeholder="First Name"></br>'
				+ '<input type="text" value="'+res[0][24]+'" class="fill" id="spouse_nameMiddle" required="highly" placeholder="Middle Name"></br>'
				+ '<input type="text" value="'+res[0][25]+'" class="fill" id="spouse_nameLast" required="highly" placeholder="Last Name"></br></br>'
				+ 'Position held in official recognized Student Organization:'
				+ '<input type="text" value="'+res[0][26]+'" class="fill" id="org_Name" required="highly" placeholder="Name of Organization"></br>'
				+ '<input type="text" value="'+res[0][27]+'" class="fill" id="org_Pos" required="highly" placeholder="Position"></br>'
				+ '<input type="text" value="'+res[0][28]+'" class="fill" id="org_AcYr" required="highly" placeholder="Academic Year"></br>'
				+ 'Academic Awards/Co-curricular Awards'
				+ '<input type="text" value="'+res[0][29]+'" class="fill" id="stud_aA_cA" required="highly" placeholder="Academic Awards"></br>'
				+ '<input type="text" value="'+res[0][30]+'" class="fill" id="stud_schGra" required="highly" placeholder="Scholarship Grant"></br>'
				+ 'Dissertation/SpecialProject/Thesis Title'
				+ '<input type="text" value="'+res[0][31]+'" class="fill" id="dissertation" required="highly" placeholder="Dissertation"></br>'
				+ '<input type="text" value="'+res[0][32]+'" class="fill" id="special_project" required="highly" placeholder="Special Project"></br>'
				+ '<input type="text" value="'+res[0][33]+'" class="fill" id="thesis_title" required="highly" placeholder="Thesis Title"></br>';
			rets += '<button onclick="addstudinfo();">Edit Registration</button>'  + '</div>';
					  $("#target").html(rets); 
				  } // end if
		}
	});
}

function settoPending()
{
  $.ajax({
      url: siteloc + scriptloc + "settoPending.py",
      data: {stud_id:$("#stud_id").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
              }
    });
}
