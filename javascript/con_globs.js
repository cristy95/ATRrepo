var siteloc = "localhost/ATRrepo";
var scriptloc = "/scripts/"

function fetchconfirm(stud_id)
{
    $.ajax({
        url: siteloc + scriptloc + "getconfirm.py",
        data: { stud_id: stud_id },
        dataType: 'json',
        success: function (cons) {
                    console.log(cons);
                    if(res[0][0] != "None")
                    {
                        for(i=0; i<cons.length; i++)
                        {
                              row = res[i];
                              table += "<table><tr>";
                              for (j=0; j<row.length; j++)
                              {
                                  table += "<td>" + row[j] + "</td>";
						  }
						  table += "</tr>";
					  }
					  table += "</table>";
					  $("#target").html(table); 
				  } // end if
              }
    });
}
