var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

var colleges = [];
var entry = [];
var temp;
var courses1;
var courses2;
var courses3;
var courses4;
var courses5;
var courses6;
var courses7;
var courses8;
var courses = [courses1, courses2, courses3, courses4, courses5, courses6, courses7, courses8];


function fetchcollege()
{
  $.ajax({
      url: siteloc + scriptloc + "getcollege.py",
      data: {},
      dataType: 'json',
      async:false, 
      success: function (stud) {
                  console.log(stud);
                  if(stud[0][0] != "None")
                  {
                    for(i = 0; i < stud.length; i++)
		    {
			colleges[i] = stud[i];
			  }
  		}
	ans = ' <select  "id="college_fk" >'+
		'<option>College</option>';
	for(i=0; i<colleges.length; i++){
		if(i in colleges){

	var c = colleges[i][0];
	ans +=	'<option type="text" value=' + i+1 + '>' + c +'</option>';
	fetchcourses(i+1);
	courses[i] = temp;
		}
}
	
	ans += ' </select>';
	$("#getcoll").html(ans);
}
});
}


function fetchcourses(college_id_fk)
{
  $.ajax({
      url: siteloc + scriptloc + "getcourses.py",
      data: {college_id_fk:college_id_fk},
      dataType: 'json',
      async:false,
      success: function (stud) {
                  console.log(stud);
                  if(stud[0][0] != "None")
                  {
			j=0;
			temp = stud;
                    
		}
  		}
	});
}



