var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

var colleges = [];
var courses = [courses1, courses2, courses3, courses4, courses5, courses6, courses7, courses8];
var entry = [];
var orig_html;
var orig_value;
var course_value;
var college_val;
var courses1 = [];
var courses2 = [];
var courses3 = [];
var courses4 = [];
var courses5 = [];
var courses6 = [];
var courses7 = [];
var courses8 = [];


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
	ans = ' <select id="college_fk">'+
		'<option>College</option>';
	for(i=0; i<colleges.length; i++){
if(i in colleges){

	var c = colleges[i][0];
	ans +=	'<option type="text" value=' + i+1 + '>' +c +'</option>';
}
}
	courses1 = fetchcourses(1);
	courses2 = fetchcourses(2);
	courses3 = fetchcourses(3);
	courses4 = fetchcourses(4);
	courses5 = fetchcourses(5);
	courses6 = fetchcourses(6);
	courses7 = fetchcourses(7);
	courses8 = fetchcourses(8);
	ans += ' </select>';
	$("#getcoll").html(ans);
	display_courses();
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
			for(i=0; i < stud.length; i++)
			{
				courses[i] = entry;
			}


                    for(i = 0; i < stud.length; i++)
		    {
			for(j = 0; j < stud.length; j++)
				{
					courses[i][j] = stud[i][j];
				}
			  }
  		}
		}
	});
}

/*function makedd_college(){
	ans = ' <select id="course_fk">'+
		'<option>College</option>';
	for(i=0; i<colleges.length; i++){
	ans +=	'<option type="text" value=' + i+1 + '>' +colleges[i] +'</option>';
}
	ans += ' </select>';
	$("#getcourses").html(ans);
}*/

function display_courses(){

jQuery(document).ready(function($){
	var $el = $("#getcourses");
	$el.data('oldval', $el.val());
	$el.change(function(){
		console.log("heyooou")
		var $this = $(this);
		
		for(var a=0; a<colleges.length; a++){
	
		    if(this.value==colleges[a] && $this.data('oldval')!=colleges[a]){
			var str='<select id="college" type="int"name="loc_college" >';		
			orig_html = $("#getcollege").html();
			orig_value = $("#college").val();
			for(var st in courses[a]){
			    if(st == course_value)
				str +='<option value="'+st+'"selected="selected">'+courses[st]+'</option>';
			    else
				str +='<option value="'+st+'">'+courses[st]+'</option>';
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}
		else if($this.data('oldval')==colleges[a]&& $this.val()!=colleges[a]){
		course_value = $("#college").val();
		$("#getcourses").html(orig_html);
		$("#college").val(orig_value);
		$this.data('oldval', $this.val());

}
}
	});
});
}
