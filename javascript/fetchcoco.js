var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

var colleges = [];
var entry = [];
var orig_html;
var orig_value;
var course_value;
var college_val;
var courses = [courses1, courses2, courses3, courses4, courses5, courses6, courses7, courses8];
var courses1 = [""];
var courses2 = [""];
var courses3 = [];
var courses4 = [];
var courses5 = [];
var courses6 = [];
var courses7 = [];
var courses8 = [];

function vow(){
$.merge(courses1, fetchcourses(1));
}

//function looper(obj){

/*	courses1 = _.union(courses1, fetchcourses(1));
	courses2 = _.union(courses2, fetchcourses(2));
	courses3 = _.union(courses3, fetchcourses(3));
	courses4 = _.union(courses4, fetchcourses(4));
	courses5 = _.union(courses5, fetchcourses(5));
	courses6 = _.union(courses6, fetchcourses(6));
	courses7 = _.union(courses7, fetchcourses(7));
	courses8 = _.union(courses8, fetchcourses(8));
*/
	
//}


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
}
}
	
	display_courses();
//	console.log(courses[1]);
//	looper(courses);
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
                    for(i = 0; i < stud.length; i++)
{
			for(j = 0; j < stud.length; j++)
				{
					courses[i][j] = stud[i];
				}
			  }
  		}
		}
	});
}

function display_courses() {

	$("#college_fk").html();
	$('select').on('change', function(){
	cur_val = 0;
	prev_val = null;

		if((cur_val == 1) && (prev_val!=1)) {
		var str = 'select id="course_fk">';

		orig_html = $("#getcourses").html();
		orig_value = $("#course_fk").val();

		for(var st in courses1){
			if(st == 1){
				str += '<option value=' +st[0] + '>' + courses1[1] + '</option>';
			}
		str += '</select>';
		$("#getcourses").html(str);
		prev_val = cur_val;
		}
		}
		else if ((prev_val==1) && (cur_val != 1)){
			courses2 = $("#course_fk").val();
			$("#getcourses").html(orig_html);
			$("#course_fk").val(orig_value);
			prev_val = cur_val;
}


});
}




/*
function display_courses(){
jQuery(document).ready(function($){
//	looper(courses);
	var $el = $("#college_fk");
	$el.data('oldval', $el.val());
	$('select').on('change', function(){
	console.log("heyooou")
		var $this = $(this);
	
		    if($this.value==colleges[1] && $this.data('oldval')!=colleges[1]){
			var str='<select id="course_id" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			for(var st in courses1){
			    if(st == 1)
				str +='<option value='+st[0]+'>'+courses1[1]+'</option>';
			    else
				str +='<option value='+st[0]+'>'+courses1[1]+'</option>';
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}
		else if($this.data('oldval')==colleges[1]&& $this.val()!=colleges[1]){
		course_value = $("#course_fk").val();
		$("#getcourses").html(orig_html);
		$("#course_fk").val(orig_value);
		$this.data('oldval', $this.val());

}

	});
});
}*/
