var siteloc = "http://localhost/ATRrepo"
var scriptloc = "/scripts/"

var colleges = [];
var courses = [];
var entry = [];


function fetchcollege()
{
  $.ajax({
      url: siteloc + scriptloc + "getcollege.py",
      data: {},
      dataType: 'json',
      success: function (stud) {
                  console.log(stud);
                  if(stud[0] != "None")
                  {
                    for(i = 0; i < stud.length; i++)
		    {
			colleges[i] = stud[i];
			  }
  		}
		}
	});
}

function fetchcourses(college_id_fk)
{
  $.ajax({
      url: siteloc + scriptloc + "getcourses.py",
      data: {college_id_fk:college_id_fk},
      dataType: 'json',
      success: function (stud) {
                  console.log(stud);
                  if(stud[0] != "None")
                  {
			for(i=0; i < stud.length; i++)
			{
				courses[i] = entry;
			}


                    for(i = 0; i < stud.length; i++)
		    {
			for(j = 0; j < stud.length; j++)
				{
					courses[i][j] = stud[i][j];
				}
			  }
  		}
		}
	});
}
