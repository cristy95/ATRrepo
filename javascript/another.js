var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

var colleges = [];
var entry = [];
var temp;
var orig_html;
var orig_value;
var course_value;
var college_val;
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
	ans = ' <select  id="college_fk" >'+
		'<option>College</option>';
	for(i=0; i<colleges.length; i++){
	temp = [];
		if(i in colleges){

	var c = colleges[i][0];
	ans +=	'<option type="text" value=' + i+1 + ' onselect="display_courses();">' + c +'</option>';
	fetchcourses(i+1);
	courses[i] = temp;
		}
}
	
	ans += ' </select>';
	//display_courses();
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


function display_courses(){
jQuery(document).ready(function($){
	var $el = $("#college_fk");
	$el.data('oldval', $el.val());
	$('select').on('change', function(){
	console.log("heyooou");
		var $this = $(this);		
			console.log($this.val());
		   if($this.val()==1 && $this.data('oldval')!=1){
			console.log("heyou");
			var str='<select id="course_fk" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			i = 0;
			for(var st in courses[0]){
				if(st != 'undefined'){
				str +='<option value='+courses[0][i][0]+'>'+ courses[0][i][1]+'</option>';
				console.log(courses[0][i][0]);
				i++;
				}else{
				continue;
				}
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		} else if($this.val()==11 && $this.data('oldval')!=11){
			console.log("heyou2");
			var str='<select id="course_fk" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			i = 0;
			for(var st in courses[1]){
				if(st != 'undefined'){
				str +='<option value='+courses[1][i][0]+'>'+ courses[1][i][1]+'</option>';
				i++;
				}else{
				continue;
				}
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}else if($this.val()==21 && $this.data('oldval')!=21){
			console.log("heyou2");
			var str='<select id="course_fk" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			i = 0;
			for(var st in courses[2]){
				if(st != 'undefined'){
				str +='<option value='+courses[2][i][0]+'>'+ courses[2][i][1]+'</option>';
				console.log(courses[2][i][0]);
				i++;
				}else{
				continue;
				}
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}else if($this.val()==31 && $this.data('oldval')!=31){
			console.log("heyou2");
			var str='<select id="course_fk" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			i = 0;
			for(var st in courses[3]){
				if(st != 'undefined'){
				str +='<option value='+courses[3][i][0]+'>'+ courses[3][i][1]+'</option>';
				console.log(courses[3][i][0]);
				i++;
				}else{
				continue;
				}
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}else if($this.val()==41 && $this.data('oldval')!=41){
			console.log("heyou2");
			var str='<select id="course_fk" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			i = 0;
			for(var st in courses[4]){
				if(st != 'undefined'){
				str +='<option value='+courses[4][i][0]+'>'+ courses[4][i][1]+'</option>';
				i++;
				}else{
				continue;
				}
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}else if($this.val()==51 && $this.data('oldval')!=51){
			console.log("heyou2");
			var str='<select id="course_fk" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			i = 0;
			for(var st in courses[5]){
				if(st != 'undefined'){
				str +='<option value='+courses[5][i][0]+'>'+ courses[5][i][1]+'</option>';
				i++;
				}else{
				continue;
				}
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}else if($this.val()==61 && $this.data('oldval')!=61){
			console.log("heyou2");
			var str='<select id="course_fk" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			i = 0;
			for(var st in courses[6]){
				if(st != 'undefined'){
				str +='<option value='+courses[6][i][0]+'>'+ courses[6][i][1]+'</option>';
				i++;
				}else{
				continue;
				}
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}else if($this.val()==71 && $this.data('oldval')!=71){
			console.log("heyou2");
			var str='<select id="course_fk" type="int" name="course">';		
			orig_html = $("#getcourses").html();
			orig_value = $("#course_fk").val();
			i = 0;
			for(var st in courses[7]){
				if(st != 'undefined'){
				str +='<option value='+courses[7][i][0]+'>'+ courses[7][i][1]+'</option>';
				i++;
				}else{
				continue;
				}
			}
			str +="</select>";
			$("#getcourses").html(str);
			$this.data('oldval', $this.val());
		}
		else {//if($this.data('oldval')==colleges[1]&& $this.val()!=colleges[1]){
		console.log("haiya");
		course_value = $("#course_fk").val();
		$("#getcourses").html(orig_html);
		$("#course_fk").val(orig_value);
		$this.data('oldval', $this.val());

}

	});
});
}
