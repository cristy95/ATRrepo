var siteloc = localhost;
var scriptloc = "/scripts/"

function fetchparents(stud_id)
{
   $.ajax({
       url: siteloc + scriptloc + "gradesheet.py",
       data: {stud_id:stud_id,
              father_nameFull:father_nameFull,
              mother_nameFull:mother_nameFull},
       dataType: 'json',
       success: function (par) {
                   console.log(par);
                   if(res[0][0] != "None")
                   {
			table = '<table border="1">';
			for(i=0; i<par.length; i++)
			{
				meh = par[i];
				table += "<tr>";
				for(j=0; j<meh.length; j++)
				{
					table += "<td>" + meh[j] + "</td>";
				}
				table += "</tr>";
			}
			table += "</table>";
			$("#target").html(table);
		} //end if