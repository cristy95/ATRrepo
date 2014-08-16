var siteloc = "localhost/ATRrepo";
var scriptloc = "/scripts/"

function fetch_honor_students()
{
  $.ajax({
	url: siteloc + scriptloc + "gethonorstudents.py",
	data: {},
	datatype: 'json',
	success: function(res){
		console.log(res);
		if(res[0][0] != "None")
                    {
			table = '<table border="1">';
                        for(i=0; i<res.length; i++)
                        {
                              row = res[i];
                              table += "<tr>";
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

function fetch_hon_stud_perid(String(stud_id))
{
  $.ajax({
	url: siteloc + scriptloc + "gethonstudperid.py",
	data: {stud_id:stud_id},
	datatype:'json',
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