var siteloc = "localhost/ATRrepo";
var scriptloc = "/scripts/"

function fetch_honor_students(stud_id)
}
  $.ajax({
	url: siteloc + sriptloc + "gethonorstudents.py",
	data: {stud_id:stud_id},
	datatype: 'json',
	success: function(res){
		console.log(res);
		}
{
