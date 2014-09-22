var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

function fetchstudstatus()
{
  $.ajax({
      url: siteloc + scriptloc + "getconfirm_perstudid.py",
      data: {stud_id:$("#stud_id").val(),},
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
                if (j == 0) {
                  table += '<td><a href = "search.html">' + row[j] + '</a></td>';
                }
                else {
                  table += '<td>' + row[j] + '</td>';
                };
              }
              table += "</tr>";
            }
            table += "</tbody>";
            table += "</table>";
            table += "</div>";
            $("#target").html(table); 
          } 
          else{
            display = '<div class="table-responsive"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Results Found.<br><br></div>'
            $("#target").html(display);
          }
              }
    });
}