var siteloc = "http://localhost/ATRrepo";
var scriptloc = "/scripts/"


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
			ans = '<h3>TEMPLATE</h3>' 
				+ 'Name: ' + res[0][1] +  res[0][2] + res[0][3] + '<br>'
				+ 'Course: ' + res[0][18] + '<br>'
				+ 'College: ' + res[0][17] + '<br>'
				+ 'Adress: ' + res[0][7] + '<br>'
				+ 'Birthday: ' + res[0][4] + '&nbsp;' + res[0][6] + '&nbsp;' + res[0][5] + '<br>'
				+ 'Fathers Name: ' + res[0][8] + '&nbsp;' + res[0][9] + '&nbsp;' + res[0][10] + '<br>'
				+ 'Mothers Name: ' res[0][11] + '&nbsp;' + res[0][12] + '&nbsp;' + res[0][13] + '<br>'
				+ 'AD/Thesis: ' res[0][14] + '&nbsp;' + res[0][15] + '&nbsp;' + res[0][16] + '<br>';
			$("#target").html(ans);
		} //end if
	}
	});
}


/* display = '<div class="content">';
      display += '<p>&nbsp;ID No.:&nbsp;<u>' + res[0][0] + '</u></p>'
        + '<p>&nbsp;College:&nbsp;<u>'+ res[0][1] + '</u></p>'
        + '<p>&nbsp;Course:&nbsp;<u>'+res[0][2] + '</u></p>'
        + '<p><h2>&nbsp;Personal Information of Graduating Student</h2></p><br>'
        + '<div class = "column">'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][3] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][4] + '</u></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][5] + '</u></p>'
        + '<p>&nbsp;Nickname:&nbsp;<u>'+res[0][6] + '</u></p>'
        + '<p>&nbsp;Gender:&nbsp;<u>'+res[0][7] + '</u></p>'
        + '<p>&nbsp;Birth Date:&nbsp;<u>'+res[0][8] + '</u></p>'
        + '<p>&nbsp;Birth Month:&nbsp;<u>'+res[0][9] + '</u></p>'
        + '<p>&nbsp;Birth Year:&nbsp;<u>'+res[0][10] + '</u></p>'
        + '<p>&nbsp;Age:&nbsp;<u>'+res[0][11] + '</u></p>'
        + '<p>&nbsp;Contact Number:&nbsp;<u>'+res[0][12] + '</u></p>'
        + '<p>&nbsp;Home Address:&nbsp;<u>'+res[0][13] + '</u></p>'
        + '</div>'
        + '<p><h2>&nbsp;Family Background</h2></p>'
        + '<div class = "column">'
        + '<p><h3>&nbsp;Father</h3></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][14] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][15] + '</u></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][16] + '</u></p>'
        + '<p><h3>&nbsp;Mother</h3></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][17] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][18] + '</u></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][19] + '</u></p>'
        + '<p><br><h3>&nbsp;Guardian</h3></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][20] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][21] + '</u></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][22] + '</u></p>'
        + '<p><h3>&nbsp;Spouse</h3></p>'
        + '<p>&nbsp;First Name:&nbsp;<u>'+res[0][23] + '</u></p>'
        + '<p>&nbsp;Middle Name:&nbsp;<u>'+res[0][24] + '</u></p>'
        + '<p>&nbsp;Last Name:&nbsp;<u>'+res[0][25] + '</u></p>'
        + '</div>'
        + '<p><h2>&nbsp;Position held in official recognized Student Organization</h2></p><br><br>'
        + '<div class="column">'
        + '<p>&nbsp;Name of Organization:&nbsp;<u>'+res[0][26] + '</u></p>'
        + '<p>&nbsp;Position:&nbsp;<u>'+res[0][27] + '</u></p>'
        + '<p>&nbsp;Academic Year:&nbsp;<u>'+res[0][28] + '</u></p>'
        + '<p><h3>&nbsp;Academic Awards/Co-curricular Awards&nbsp;</h3></p>'
        + '<p&nbsp;>Academic Awards:&nbsp;<u>'+res[0][29] + '</u></p>'
        + '<p>&nbsp;Scholarship Grant:&nbsp;<u>'+res[0][30] + '</u></p>'
        + '</div>'
        + '<p><h2>&nbsp;Dissertation/SpecialProject/Thesis Title</h2></p><br>'
        + '<p>&nbsp;Dissertation:&nbsp;<u>'+res[0][31] + '</u></p>'
        + '<p>&nbsp;Special Project:&nbsp;<u>'+res[0][32] + '</u></p>'
        + '<p>&nbsp;Thesis:&nbsp;<u>'+res[0][33] + '</u></p>';
		
	*/	
