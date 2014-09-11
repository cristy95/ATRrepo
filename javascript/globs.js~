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
function fetch_hon_stud_perid()
{
  $.ajax({
	url: siteloc + scriptloc + "gethonstudperid.py",
	data: {stud_id:$("#stud_id").val()},
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
function fetchorgs_perid(stud_id)
{
  $.ajax({
      url: siteloc + scriptloc + "get_orgs.py",
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
function fetchorgs_list()
{
  $.ajax({
      url: siteloc + scriptloc + "get_orgs_list.py",
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
				  }
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
function addhonorstudent()
{
  $.ajax({
      url: siteloc + scriptloc + "addhonorstudent.py",
      data: {stud_id:$("#stud_id").val(),
             dissertation:$("#dissertation").val(),
             special_project:$("#special_project").val(),
	     thesis_title:$("#thesis_title").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
			answer = 'SET'
			$("#target").html(answer); 
		  } // end if
              }
    });
}

//josh
function addorgs()
{
  $.ajax({
      url: siteloc + scriptloc + "addorgs.py",
      data: {stud_id:$("#stud_id").val(),
             org_Name:$("#org_Name").val(),
             org_Pos:$("#org_Pos").val(),
			 org_AcYr:$("#org_AcYr").val(),
			 stud_aA_cA:$("#stud_aA_cA").val(),
			 stud_schGra:$("#stud_schGra").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
			answer = 'SET'
			$("#target").html(answer); 
		  }
              }
    });
}

//lorie
function addstudinfo()
{
	$.ajax({
      url: siteloc + scriptloc + "addstudent.py",
      data: {stud_id : $("#stud_id").val(),
             college : $("#college").val(),
             course  : $("#course").val(),
             nameFirst : $("#nameFirst").val(),
             nameMid : $("#nameMid").val(),
             nameLast: $("#nameLast").val(),
             nickname: $("#nickname").val(),
             gender: $("#gender").val(),
             birthdate: $("#birthdate").val(),
             birthMonth: $("#birthMonth").val(),
             birthYear: $("#birthYear").val(),
             age : $("#age").val(),
             contactNum : $("#contactNum").val(),
             homeAddress : $("#homeAddress").val()},      
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
			answer = 'SET'
			$("#target").html(answer); 
		  } // end if
              }
    });
}

//Pio

function getparents_perid(stud_id)
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

//Pio
function addparents()
{
   $.ajax({
       
	   url: siteloc + scriptloc + "addparents.py",
       data: {stud_id:$("#stud_id").val(),
		father_nameFirst:$("#father_nameFirst").val(),
		father_nameMiddle:$("#father_nameMiddle").val(),
		father_nameLast:$("#father_nameLast").val(),
		mother_nameFirst:$("#mother_nameFirst").val(),
		mother_nameMiddle:$("#mother_nameMiddle").val(),
		mother_nameLast:$("#mother_nameLast").val(),
		guardian_nameFirst:$("#guardian_nameFirst").val(),
		guardian_nameMiddle:$("#guardian_nameMiddle").val(),
		guardian_nameLast:$("#guardian_nameLast").val(),
		spouse_nameFirst:$("#spouse_nameFirst").val(),
		spouse_nameMiddle:$("#spouse_nameMiddle").val(),
		spouse_nameLast:$("#spouse_nameLast").val()},
       dataType: 'json',
       success: function (res) {
                   console.log(res);
                   if(res[0][0] != "None")
                   {
			
			answer = 'SET'
			$("#target").html(answer);
		} //end if
	}
	});
}

//kring2
function del_stud_hs()
{
  $.ajax({
      url: siteloc + scriptloc + "delete_stud_hs.py",
      data: {stud_id:$("#stud_id").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
			answer = 'DELETED' + "<br>"
			answer += res[0][0]
			$("#target").html(answer); 
		  } // end if
              }
    });
}
