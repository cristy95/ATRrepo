//define functions and global variables here..
var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

function fetchinfo(stud_id)
{
  $.ajax({
      url: siteloc + scriptloc + "student_info.py",
      data: {stud_id : stud_id,
             college : college,
             course : course,
             nameFirst : nameFirst,
             nameMid : nameMid,
             nameLast : nameLast,
             nickname : nickname,
             gender : gender,
             birthdate : birthdate,
             birthMonth : birthMonth,
             birthYear : birthYear,
             age : age,
             contactNum : contactNum,
             homeAddress : homeAddress},
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

function confirmKey(password)
{
  $.ajax({
	url: siteloc + scriptloc + "confirmKey.py",
	data: {password: password},
   	dataType: 'json',
	success: function (res) {
				if (res[0][0] == "None"){
					$('#wrongkey').empty();
					var feedback = "Incorrect password";
					$('#wrongkey').append(feedback);
					$('#wrongkey').css('color','#003300');
				}
				else{
					$('#wrongkey').empty();
					document.location.href = '/ATRrepo/admin.html';
				}
	}
	});
}

