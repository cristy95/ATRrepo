var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

function fetchstudstatus()
{
  $.ajax({
      url: siteloc + scriptloc + "getconfirm_perstudid.py",
      data: {stud_id:$("#searchvalue").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
              table = '<div class="table-responsive">';
            table += '<table class="table table-condensed">';
            table += '<thead>' +
                    '<tr>' +
                    '<th>ID No.</th>' +
                    '<th>Course</th>' +
                    '<th>College</th>'+
                    '<th>Status</th>' +
                    '</tr>' +
                     '</thead>';
            table += "<tbody>";      
            for (i = 0; i < res.length; i++)
            {
              row = res[i];
              table += "<tr>";
              for (j = 0; j < row.length; j++)
              {

                if (j <= 3){
                  table += '<td>' + row[j] + '</td>';
                }
                else if (j == 4){
                  table += '<td><button class="buttonlink" onclick="displayform(' + "'" + row[0] + "'" +','+ row[4] +','+ row[5] + ');">[more..]</button></td>'
                };
              }
              table += "</tr>";
            }
            table += "</tbody>";
            table += "</table>";
            table += "<br></div>";
            $("#target").html(table); 
          } 
          else{
            display = '<div class="table-responsive"><br><br><br>No Results Found.<br><br></div>'
            $("#target").html(display);
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
        + '<div class = "columnar">'
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
        + '<div class = "columnar">'
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
        + '<div class="columnar">'
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
      display += '<button class="confbutton" onclick="confirmform();">Confirm</button></div>';
            $("#target").html(display); 
          }
    }
  });
}

function confirmform(){
  $.ajax({
    url: siteloc + scriptloc + "addconfirmed.py",
    data: {stud_id:$("#stud_id").val(),
         course:$("#course").val(),
         college:$("#college").val()}, 
    dataType: 'json',
    success: function (res) {
      display = '<div class="content">';
      display = '<p><br><br><br><br>Successfully confirmed application.</p><br></div>'
      $("#target").html(display); 
      }
  });
}

function fetchperstatus()
{
  $.ajax({
      url: siteloc + scriptloc + "getconfirm_perstatus.py",
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
              table = '<div class="table-responsive">';
            table += '<table class="table table-condensed">';
            table += '<thead>' +
                    '<tr>' +
                    '<th>ID No.</th>' +
                    '<th>Course</th>' +
                    '<th>College</th>'+
                    '<th>Status</th>' +
                    '</tr>' +
                     '</thead>';
            table += "<tbody>";
            for (i = 0; i < res.length; i++)
            {
              row = res[i];
              table += "<tr>";
              for (j = 0; j < row.length; j++)
              {

                if (j <= 3){
                  table += '<td>' + row[j] + '</td>';
                }
                else if (j == 4){
                  table += '<td><button class="buttonlink" onclick="displayform(' + "'" + row[0] + "'" +','+ row[4] +','+ row[5] + ');">[more..]</button></td>'
                };
              }
              table += "</tr>";
            }
            table += "</tbody>";
            table += "</table>";
            table += "<br></div>";
            $("#target").html(table); 
          } 
          else{
            display = '<div class="table-responsive"><br><br><br>No Results Found.<br><br></div>'
            $("#target").html(display);
          }
              }
    });
}