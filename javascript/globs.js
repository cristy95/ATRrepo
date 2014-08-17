var siteloc = "http://localhost/ATRrepo";
var scriptloc = "/scripts/"

function fetch_honor_students()
{
  $.ajax({
	url: siteloc + scriptloc + "gethonorstudents.py",
	data: {}, 
	dataType: 'json',
	success: function(res){
		console.log(res);
		if(res[0][0] != "None")
                    {
                        for(i=0; i<res.length; i++)
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


function fetch_hon_stud_perid(stud_id)
{
  $.ajax({
	url: siteloc + scriptloc + "gethonstudperid.py",
	data: {stud_id:stud_id},
	dataType:'json',
	success:function(res){
		console.log(res);
		if(res[0][0] != "None")
                    {
                        for(i=0; i<res.length; i++)
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

--dar2 confirm
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

--dar2 list of confirmed
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

>>>>>>> bade025394925b4d29ea9dd484e1e4b73c569e4d
