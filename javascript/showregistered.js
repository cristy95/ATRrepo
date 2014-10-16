var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

function showcolleges()
{
  $.ajax({
      url: siteloc + scriptloc + "getcollege.py",
      data: {},
      dataType: 'json',
      async:false, 
      success: function (stud) {
                  if(stud[0][0] != "None")
                  {
			str = '<div class="form1" >'+
				'<a href="1.html">' + stud[0] +
				'<br><a href="2.html">' + stud[1] + '</a>' + 
				'<br><a href="3.html">' + stud[2] + '</a>' +
				'<br><a href="4.html">' + stud[3] + '</a>' +
				'<br><a href="5.html">' + stud[4] + '</a>' +
				'<br><a href="6.html">' + stud[5] + '</a>' +
				'<br><a href="7.html">' + stud[6] + '</a>' +
				'<br><a href="8.html">' + stud[7] + '</a>' +
				'</div>';

			$("#showreg").html(str);
		  }
}
});
}

function showcourses(college_id_fk)
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
			str = '<div class=form1>'
			for(i = 0; i < stud.length; i++){
				str += '<a href="reg' + stud[i][0] + '.html">' + stud[i][1] + '</a><br>'
			}
			str += '</div>'
                    $("#showreg").html(str);
		}
  		}
	});
}

function showreg(college, course){
  $.ajax({
      url: siteloc + scriptloc + "getreg.py",
      data: {college:college,
		course:course},
      dataType: 'json',
      async:false,
      success: function (stud) {
                  console.log(stud);
                  if(stud[0][0] != "None")
                  {
              table = '<div class="table-responsive">';
            table += '<table class="table table-condensed">';
            table += '<thead>' +
                    '<tr>' +
                    '<th>ID No.</th>' +
                    '<th>First Name</th>' +
                    '<th>Middle Name</th>'+
                    '<th>Last Name</th>' +
		    '<th>Status</th>' +
                    '</tr>' +
                     '</thead>';
            table += "<tbody>";      
            for (i = 0; i < stud.length; i++)
            {
              row = stud[i];
              table += "<tr>";
              for (j = 0; j < row.length; j++)
              {

                if (j <= 3){
                  table += '<td>' + row[j] + '</td>';
                }
                else if (j == 4){
                  table += '<td>' + row[j] + '</td><td><button class="buttonlink" onclick="displayform(' + "'" + row[0] + "'" +','+ college +','+ course + ');">[more..]</button></td>'
                };
              }
              table += "</tr>";
            }
            table += "</tbody>";
            table += "</table>";
            table += "<br></div>";
            $("#showreg").html(table); 
          } 
          else{
            display = '<div class="table-responsive"><br><br><br>No Results Found.<br><br></div>'
            $("#showreg").html(display);
          }
	}
    });
}

function displayform(stud_id,course,college)
{
  $.ajax({
  url: siteloc + scriptloc + "display_allinfo.py",
  data: {stud_id:stud_id,
         course:course,
         college:college}, 
  dataType: 'json',
  success: function(res){
    console.log(res);
    if(res[0][0] != "None")
                    {
      display = '<div class="content"><br><br>';
      display += '<p>&nbsp;ID No.:&nbsp;<u>' + res[0][0] + '</u></p>'
        + '<p>&nbsp;Course:&nbsp;<u>'+ res[0][1] + '</u></p>'
        + '<p>&nbsp;College:&nbsp;<u>'+res[0][2] + '</u></p>'
        + '<p><h3>Personal Information of Graduating Student</h3></p><br>'
        + '<div class = "column">'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][3] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][4] + '</u></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][5] + '</u></p>'
        + '<p>&nbsp;Nickname:&nbsp;<u>'+res[0][6] + '</u></p>'
        + '<p>&nbsp;Birthdate(mm/dd/yy):&nbsp;<u>'+res[0][8] +'/'+ res[0][7] +'/'+ res[0][9] +'</u></p>'
        + '<p>&nbsp;Age:&nbsp;<u>'+res[0][35] + '</u></p>'
        + '<p>&nbsp;Gender:&nbsp;<u>'+res[0][10] + '</u></p>'
        + '<p>&nbsp;Contact Number:&nbsp;<u>'+res[0][11] + '</u></p>'
        + '<p>&nbsp;Home Address:&nbsp;<u>'+res[0][12] + '</u></p>'
        + '</div>'
        + '<p><h3>Family Background</h3></p>'
        + '<div class = "column">'
        + '<p><h4>Father</h4></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][13] + '</u></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][14] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][15] + '</u></p>'
        + '<p><h4>Mother</h4></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][16] + '</u></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][17] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][18] + '</u></p>'
        + '<p><br><h4>Guardian</h4></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][19] + '</u></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][20] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][21] + '</u></p>'
        + '<p><h4>Spouse</h4></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][22] + '</u></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][23] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][24] + '</u></p>'
        + '</div>'
        + '<p><h3>Position held in official recognized Student Organization</h3></p><br><br>'
        + '<div class="column">'
        + '<p>&nbsp;Position:&nbsp;<u>'+res[0][25] + '</u></p>'
        + '<p>&nbsp;Name of Organization:&nbsp;<u>'+res[0][26] + '</u></p>'
        + '<p>&nbsp;Academic Year:&nbsp;<u>'+res[0][27] + '</u></p>'
        + '<p><h4>Academic Awards/Co-curricular Awards&nbsp;</h4></p>'
        + '<p>&nbsp;Academic Awards:&nbsp;<u>'+res[0][28] + '</u></p>'
        + '<p>&nbsp;Scholarship Grant:&nbsp;<u>'+res[0][29] + '</u></p>'
        + '</div>'
        + '<p><h3>Dissertation/SpecialProject/Thesis Title</h3></p><br>'
        + '<p>&nbsp;Dissertation:&nbsp;<u>'+res[0][30] + '</u></p>'
        + '<p>&nbsp;Special Project:&nbsp;<u>'+res[0][31] + '</u></p>'
        + '<p>&nbsp;Thesis:&nbsp;<u>'+res[0][32] + '</u></p>'
        + '<input type="hidden" id="stud_id" value="' + res[0][0] + '"><input type="hidden" id="course" value="' + res[0][33] + '">'
        + '<input type="hidden" id="college" value="' + res[0][34] + '">'
            $("#showreg").html(display); 
          }
    }
  });
}
