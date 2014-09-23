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
