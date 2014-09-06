var siteloc = "http://localhost/ATRrepo";
var scriptloc = "/scripts/"

//kring2
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
			 table = '<div class="table-responsive">';
				table += '<table class="table table-condensed">';
				table += "<thead>" +
					 "<tr>" +
						 "<th>ID No.</th>" +
						 "<th>Dissertation</th>" +
						 "<th>Special Project</th>" +
						 "<th>Thesis Title</th>" +
					 "</tr>" +
					 "</thead>";
			 table += "<tbody>";
			
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
					  table += "</tbody>";
					  table += "</table>";
					  table += "</div>";
					
					  $("#target").html(table); 
				  } // end if
		}
	});
}

//kring2
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

//dar2
function fetchconfirm(stud_id)
{
    $.ajax({
        url: siteloc + scriptloc + "getconfirm.py",
        data: { stud_id: stud_id },
        dataType: 'json',
        success: function (cons) {
                    console.log(cons);
                    if(cons[0][0] != "None")
                    {
			table = '<table border="1">';
                        for(i=0; i<cons.length; i++)
                        {
                              row = cons[i];
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

//dar2
function fetchconfirmlist(status)
{
    $.ajax({
        url: siteloc + scriptloc + "getconfirmlist.py",
        data: { status: status},
        dataType: 'json',
        success: function (cons) {
                    console.log(cons);
                    if(cons[0][0] != "None")
                    {
			table = '<table border="1">';
                        for(i=0; i<cons.length; i++)
                        {
                              row = cons[i];
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

//josh
function fetchstudents_perid(stud_id)
{
  $.ajax({
      url: siteloc + scriptloc + "get_students.py",
      data: {stud_id:stud_id},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
					  table = '<table border="1">';
					  for (i = 0; i < res.length; i++)
					  {
						  row = res[i];
						  table += "<tr>";
						  for (j = 0; j < row.length; j++)
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

//josh
function fetchstudents_list()
{
  $.ajax({
      url: siteloc + scriptloc + "get_students_list.py",
      data: {},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
					  table = '<table border="1">';
					  for (i = 0; i < res.length; i++)
					  {
						  row = res[i];
						  table += "<tr>";
						  for (j = 0; j < row.length; j++)
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

//pio
function fetchparents(stud_id)
{
   $.ajax({
       url: siteloc + scriptloc + "getparents.py",
       data: {stud_id:stud_id},
       dataType: 'json',
       success: function (res) {
                   console.log(res);
                   if(res[0][0] != "None")
                   {
			table = '<table border="1">';
			for(i=0; i<res.length; i++)
			{
				row = res[i];
				table += "<tr>";
				for(j=0; j<row.length; j++)
				{
					table += "<td>" + row[j] + "</td>";
				}
				table += "</tr>";
			}
			table += "</table>";
			$("#target").html(table);
		} //end if
	}
	});
}

//kring2
function addhonorstudent(stud_id, dissertation, special_project, thesis_title)
{
  $.ajax({
      url: siteloc + scriptloc + "addhonorstudent.py",
      data: {stud_id:stud_id,
             dissertation:dissertation,
	     special_project:special_project,
	     thesis_title:thesis_title},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res != 0)
                  {
		//	answer = '<div class="table-responsive"">';
		//	answer += '<table class"table table-condensed">';
		//	answer += '<thead>'+'<tr>'+'<th>Answer</th></tr></thead>' + '<tbody>'+'<tr>'+'<th>'+res+'</th>'+'</tr>'+'</tbody>';
		//	answer += '</table>'+'</div>';
			answer = "SET"
				  $("#target").html(answer); 
				  } // end if
              }
    });
}

