var siteloc = "http://localhost/ATRrepo";
var scriptloc = "/scripts/"


//Pio
function getheader()
{
   $.ajax({
       
	   url: siteloc + scriptloc + "header.py",
       data: {stud_id:$("#stud_id").val()},
       dataType: 'json',
       success: function (res) {
                   console.log(res);
                   if(res[0][0] != "None")
                   {
			ans = '<h1 class="banner">TEMPLATE</h1>' 

				+ '<div class="form">'
			    + '<div class="form">' + 'Name: ' + res[0][1] + '&nbsp;' + res[0][2] + '&nbsp;' + res[0][3] + '<br>' + '<br>'
				+ 'Course: ' + res[0][18] + '<br>' + '<br>'
				+ 'College: ' + res[0][17] + '<br>' + '<br>'
				+ 'Adress: ' + res[0][7] + '<br>' + '<br>'
				+ 'Birthday: ' + res[0][6] + '&nbsp;' + res[0][4] + '&nbsp;' + res[0][5] + '<br>' + '<br>'
				+ 'Fathers Name: ' + res[0][8] + '&nbsp;' + res[0][9] + '&nbsp;' + res[0][10] + '<br>' + '<br>'
				+ 'Mothers Name: ' + res[0][11] + '&nbsp;' + res[0][12] + '&nbsp;' + res[0][13] + '<br>' + '<br>'
				+ 'AD/Thesis: ' + res[0][14] + '&nbsp;' + res[0][15] + '&nbsp;' + res[0][16] + '<br>' + '<br>' + '</div>' + '</div>';
			$("#target").html(ans);
			 
			 else{
            display = '<div class="table-responsive">No Results Found<br><br></div>'
            $("#target").html(display);
          }
		} 
	}
	});
}

//lorie
function delperapp()
{
  $.ajax({
      url: siteloc + scriptloc + "delperapp.py",
      data: {stud_id:$("#stud_id").val(),
		college_fk:$("#college_fk").val(),
		course_fk:$("#course_fk").val()},
      dataType: 'json',
      success: function (res) {
                console.log(res);
                if(res[0][0] == "SET")
				{
			answer = 'Cancelled Application' + "<br>"
			$("#target").html(answer); 
				}
		else {
			answer = '<h3>'+res[0][0]+'</h3>';
			answer += '<p>Make sure that you enter the correct values</p>';
			$("#target").html(answer);	
		} 
        }
    });
}

//lorie
function searchstatus(srchterm)
{

  $.ajax({
      url: siteloc + scriptloc + "searchstatus.py",
      data: {stud_id:$("#srchterm").val()},
      dataType: 'json',
      success: function (res) {
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

                if (j <= 1){
                  table += '<td>' + row[j] + '</td>';
                };
              }
              table += "</tr>";
            }
            table += "</tbody>";
            table += "</table>";
            table += "<br></div>";
            $('#v').append(table); 
          } 
          else{
            display = '<div class="table-responsive">No Results Found<br><br></div>'
            $('#v').append(display);
          }
		 }
	});
}

//kring2
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

function confirmKey1(password)
{
  $.ajax({
	url: siteloc + scriptloc + "confirmKey.py",
	data: {password: password},
   	dataType: 'json',
	success: function (res) {
				if (res[0][0] == "None"){
					$('#wrongkey1').empty();
					var feedback = "Incorrect password";
					$('#wrongkey1').append(feedback);
					$('#wrongkey1').css('color','#003300');
				}
				else{
					$('#wrongkey1').empty();
					document.location.href = '/ATRrepo/confirming.html';
				}
	}
	});
}

function confirmKey2(password)
{
  $.ajax({
	url: siteloc + scriptloc + "confirmKey.py",
	data: {password: password},
   	dataType: 'json',
	success: function (res) {
				if (res[0][0] == "None"){
					$('#wrongkey2').empty();
					var feedback = "Incorrect password";
					$('#wrongkey2').append(feedback);
					$('#wrongkey2').css('color','#003300');
				}
				else{
					$('#wrongkey2').empty();
					document.location.href = '/ATRrepo/cancel.html';
				}
	}
	});
}

//lorie
function loadsearch(srchterm)
{
	$('#myModal2').modal('show');
  searchstatus(srchterm);

}

