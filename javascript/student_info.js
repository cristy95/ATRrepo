//define functions and global variables here..
var siteloc = "https:/localhost/ATRrepo"
var scriptloc = "/scripts/"

function fetchinfo(stud_id)
{
  $.ajax({
      url: siteloc + scriptloc + "student_info.py",
      data: {stud_id : stud_id,
             stud_college : stud_college,
             stud_course : stud_course,
             stud_nameFirst : stud_nameFirst,
             stud_nameMid : stud_nameMid,
             stud_nameLast : stud_nameLast,
             stud_nickname : stud_nickname,
             stud_gender : stud_gender,
             stud_birthdate : stud_birthdate,
             stud_birthMonth : stud_birthMonth,
             stud_birthYear : stud_birthYear,
             stud_age : stud_age,
             stud_contactNum : stud_contactNum,
             stud_homeAddress : stud_homeAddress},
      dataType: 'json',
      success: function (stud) {
                  console.log(stud);
                  if(stud[0][0] != "None")
                  {
                    table = '<table border = "1">';
                    for(i = 0; i < stud.length; i++)
		    {
			row = stud[i];
			table += "<tr>";
			for(j = 0; j < row.length; j++)
			{
			  table += "<td>" + row[j] + "</td>";
			}
			table += "</tr>";
		    }
		    table += "</table>";
		    $("#target").html(table);
		  }
  	}
});
}



