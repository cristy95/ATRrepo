var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

var v_appli_id;
function add_personal_info()
{
  $.ajax({
      url: siteloc + scriptloc + "personal_info.py",
      data: {stud_id:$("#stud_id").val(),
		nameFirst:$("#nameFirst").val(),
  		nameMid:$("#nameMid").val(),
  		nameLast:$("#nameLast").val(),
  		nickname:$("#nickname").val(),
  		gender:$("#gender").val(),
  		birthdate:$("#birthdate").val(),
  		birthMonth:$("#birthMonth").val(),
  		birthYear:$("#birthYear").val(),
  		age:$("#age").val(),
  		contactNum:$("#contactNum").val(),
  		homeAddress:$("#homeAddress").val(),
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
  		spouse_nameLast:$("#spouse_nameLast ").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] == "None")
                  {
         		rets = 'SET'
           		 $("#target").html(rets); 
        	  } 
              }
    });
}


function add_application()
{
  $.ajax({
      url: siteloc + scriptloc + "addapplication.py",
      data: {stud_id:$("#stud_id").val(),
		course_fk:$("#course_fk").val(),
  		college_fk:$("#college_fk").val(),
  		organization_name:$("#organization_name").val(),
  		position:$("#position").val(),
  		academic_year:$("#academic_year").val(),
  		aa_ca:$("#aa_ca").val(),
  		scholar_grant:$("#scholar_grant").val(),
  		dissertation:$("#dissertation").val(),
  		special_project:$("#special_project").val(),
  		thesis_title:$("#thesis_title").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] == "None")
                  {
			v_appli_id=res[0][0];
         		rets = 'SET'
           		 $("#target").html(rets); 
			//add_pending_status(v_appli_id);
        	  }
              }
    });
}


function add_student_application()
{
	add_personal_info();
	add_application();
}


function edit_allinfo()
{
  $.ajax({
	url: siteloc + scriptloc + "get_allinfo.py",
	data:{stud_id:$("#stud_id").val(),
		college:$("#college").val(),
		course:$("#course").val()},
	dataType:'json',
	success: function (res){
			console.log(res);
			if(res[0][0] != 'None')
			{
				rets = '<html>'+
    '<head>'+
       ' <title>AUTOMATED TADMAN REGISTRATION</title>'+
        '<meta charset="utf-8">'+

	'<script src="javascript/jquery.js"></script>'+
       ' <script src="javascript/jquery.steps.js"></script>'+
        '<link href="jquery.steps.css" rel="stylesheet">'+
	'<link rel="stylesheet" href="css/bootstrap.min.css">'+
	'<link rel="stylesheet" href="css/bootstrap-theme.min.css">'+
	'<link rel="stylesheet" type="text/css" href="final.css"/>'+
       	'<script src="javascript/bootstrap.min.js"></script>'+
	'<script src="javascript/new.js"></script>'+
	'<script src="javascript/jqinit.js"></script>'+		

	'<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>'+
	'<link rel="stylesheet" type="text/css" href="formwizard.css" />'+
	'<script src="javascript/formwizard.js" type="text/javascript">'
		rets += '</script>'+

	'<script type="text/javascript">'+

	'var myform=new formtowizard({'+
		"formid: 'feedbackform',"+
		'persistsection: true,'+
		"validate: ['stud_id','nameFirst', 'nameLast', 'course_fk', 'college_fk'],"+
		"revealfx: ['fade', 500]"+
	'})'+

	'</script>'+
    '</head>'+
   ' <body class="body" onload="fetchcollege();">'+
       ' <script>'+
           ' $("#wizard").steps();'+
       ' </script>'+
      '  <div id="wizard"></div>'
				rets += '<h1 class="banner">INFORMATION SHEET FOR TADMAN REGISTRATION</h1>'+

			'<form class="form" id="feedbackform">'+

			'<fieldset class="sectionwrap">'+

		'<input type="text" id="stud_id" class="fill" placeholder="ID No." value="' + res[0][0] + '" required="">'+
		'<input type="text" id="course" class="fill" placeholder="Course" value="' + res[0][1] + '" required="">'+
		'<input type="text" id="college" class="fill" placeholder="College" value ="' + res[0][2] + '" required=""></br></br>'+

			'<legend>Basic Information</legend>'+
	'Name:<br /> <input id="nameLast" type="text" placeholder="Last Name" value="' + res[0][3] + '"/> <input id="nameFirst" type="text" placeholder="First Name" value="'+res[0][4]+'"/> <input id="nameMid" type="text" placeholder="Middle Name" value="'+res[0][5]+'"/><br />'+
	'Nickname:<br> <input id="nickname" type="text" placeholder="Nick Name" value="'+res[0][6]+'"/><br><br>'+
	'Birthday: <select id="birthdate">'+
		'<option type="int" value="'+res[0][7]+'">'+res[0][7]+'</option>'+
		'<option type="int" value="1">01</option>'+
		'<option type="int" value="2">02</option>'+
		'<option type="int" value="3">03</option>'+
		'<option type="int" value="4">04</option></select>'+
		'<select id="birthMonth">'+
		'<option type="int" value="'+res[0][8]+'">'+res[0][8]+'</option>'+
		'<option type="int" value="1">January</option>'+
		'<option type="int" value="2">February</option>'+
		'<option type="int" value="3">March</option>'+
		'<option type="int" value="4">April</option></select>'+
		'<select id="birthYear" >'+
		'<option type="int" value="'+res[0][9]+'">'+res[0][9]+'</option>'+
		'<option type="int" value="2014">2014</option>'+
		'<option type="int" value="2013">2013</option>'+
		'<option type="int" value="2012">2012</option>'+
		'<option type="int" value="2011">2011</option></select>'+
		'<br/><br>'+
	
	'Gender: <select id="gender">'+
		'<option type="text" value="'+res[0][10]+'">'+res[0][10]+'</option>'+
		'<option type="text" value="male">Male</option>'+
		'<option type="text" value="female">Female</option>'+
		'</select>'+
		'<br><br>'+
	'Age: <input id="age" type="int" size="6" placeholder="Age" value="'+res[0][33]+'"><br><br>'+
	'Contact Number: <br><input id="contactNum" type="text" placeholder="Contact Number" value="' + res[0][11] +'"/><br/>'+
	'Address: <br> <input id="homeAddress" type="text" placeholder="Address" value="'+ res[0][12] +'"/>'+
	'</fieldset>'+

'<fieldset class="sectionwrap">'+
'<legend>Family Background</legend>'+
	'Name of Father:<br> <input id="father_nameLast" type="text" placeholder="Last Name" value="' +res[0][13] +'"/> <input id="father_nameFirst" type="text" placeholder="First Name" value="' +res[0][14]+ '"/> <input id="father_nameMiddle" type="text" placeholder="Middle Name" value="' +res[0][15]+ '"/><br>'+
	'Name of Mother: <br> <input id="mother_nameLast" type="text" placeholder="Last Name" value="'+ res[0][16] + '"/> <input id="mother_nameFirst" type="text" placeholder="First Name" value="'+ res[0][17] + '"/> <input id="mother_nameMiddle" type="text" placeholder="Middle Name" value="'+res[0][18]+'"/><br>'+
	'Name of Gurdian (if applicable): <br> <input id="guardian_nameLast" type="text" placeholder="Last Name" value="'+res[0][19]+'"> <input id="guardian_nameFirst" type="text" placeholder="First Name" value="'+res[0][20]+'"/> <input id="guardian_nameMiddle" type="text" placeholder="Middle Name" value="'+res[0][21]+'"/><br>'+
	'Name of Spouse (if applicable): <br> <input id="spouse_nameLast" type="text" placeholder="Last Name" value="'+res[0][22]+'"/><input id="spouse_nameFirst" type="text" placeholder="First Name" value="' +res[0][23]+'"/><input id="spouse_nameMiddle" type="text" placeholder="Middle Name" value="'+res[0][24]+ '"/><br>'+
'</fieldset>'+

'<fieldset class="sectionwrap">'+
'<legend>Extra Curriculars</legend>'+
'<p>Positions held in Official Recognized Student</p>'+

'<br> &emsp; &emsp;&emsp; Position&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Organization&emsp;&emsp;&emsp;&emsp;&emsp;  Academic Year</br>'+
		'<input type="text" id="position" placeholder="Position" value="'+res[0][25]+'">'+
		'<input type="text" id="organization_name" placeholder="Organization" value="'+res[0][26]+'">'+
		'<input type="text" id="academic_year" placeholder="Academic Year" value="'+res[0][27]+'"></br><br>'+
'Academic Awards/Co-curricular Awards</br>'+
		'<input type="text" id="aa_ca" class="fill" placeholder="Specific Award" value="'+res[0][28]+'"></br>'+
		'<p></p>'+
		'Scholarship Grants</br>'+
		'<input type="text" id="scholar_grant" class="fill" placeholder="Scholarship Grant" value="'+res[0][29]+'">'+

'</fieldset>'+

'<fieldset class="sectionwrap">'+

'<legend>Dissertations</legend><br>'+
'Specify Dissertations (Input "NONE" if not available)</br>'+
		'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" id="dissertation" placeholder="Dissertation" size="50" value="'+res[0][30]+'"></br></br>'+
		'Specify Special Projects (Input "NONE" if not available)</br>'+
		'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" id="special_project" placeholder="Special Project" size="50" value="'+res[0][31]+'"></br></br>'+
		'Specify Thesis Title (Input "NONE" if not available)</br>'+
		'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <input type="text" id="thesis_title" placeholder="Thesis Title" size="50" value="'+res[0][32]+'"></br><br><br>'+

'<button  class="btn btn-lg btn-success"'+
		 'onclick="add_edition();">'+
			'Submit Form'+
	'</button>'+
'<p></p>'+



'<div id="target"></div>'+
	
'</fieldset>'+
'</form>'
					  $( "#target").html(rets); 
			}
			else{
			rets = '<div class="form1"><h3>No Result Found</h3>'+
				'<p>Please check your input values. Make sure that you have registered first. Maybe you can search first. :)</div>';
			$("#target").html(rets);
		}
	}
  });
}

function add_edition()
{
  $.ajax({
      url: siteloc + scriptloc + "edit_allinfo.py",
      data: {stud_id:$("#stud_id").val(),
		college:$("#college").val(),
  		course:$("#course").val(),
		nameFirst:$("#nameFirst").val(),
  		nameMid:$("#nameMid").val(),
  		nameLast:$("#nameLast").val(),
  		nickname:$("#nickname").val(),
  		gender:$("#gender").val(),
  		birthdate:$("#birthdate").val(),
  		birthMonth:$("#birthMonth").val(),
  		birthYear:$("#birthYear").val(),
		age:$("#age").val(),
  		contactNum:$("#contactNum").val(),
  		homeAddress:$("#homeAddress").val(),
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
  		spouse_nameLast:$("#spouse_nameLast ").val(),
  		organization_name:$("#organization_name").val(),
  		position:$("#position").val(),
  		academic_year:$("#academic_year").val(),
  		aa_ca:$("#aa_ca").val(),
  		scholar_grant:$("#scholar_grant").val(),
  		dissertation:$("#dissertation").val(),
  		special_project:$("#special_project").val(),
  		thesis_title:$("#thesis_title").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
         		rets = '&nbsp;&nbsp;<br><h4>Done Editing!<br><br>'
           		 $("#target").html(rets); 
        	  } 
              }
    });
}

function confirmKey(password)
{
  $.ajax({
	url: siteloc + scriptloc + "confirmKey.py",
	data: {password: password},
   	dataType: 'json',
	success: function (res) {
				if (res[0][0] != "N"){
					$('#incorrectGP').empty();
					document.location.href = '/ATRrepo/admin.html';
				}
				else{
					$('#incorrectGP').empty();
					$('#incorrectGP').append("Incorrect password");
					$('#incorrectGP').css('color','#FF0000');
				}
	}
	});
}
