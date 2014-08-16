var siteloc = "localhost/ATRrepo";
var scriptloc = "/scripts/"

function fetchconfirmlist(status)
{
    $.ajax({
        url: siteloc + scriptloc + "getconfirm.py",
        data: { status: status},
        dataType: 'json',
        success: function (cons) {
                    console.log(cons);
                    if(cons[0][0] != "None")
                    {
                        for(i=0; i<cons.length; i++)
                        {
                              row = cons[i];
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
