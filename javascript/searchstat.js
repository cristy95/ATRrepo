var siteloc = "http://localhost/ATRrepo";
var scriptloc = "/scripts/"

//lorie
function searchstatus(srch-term)
{

  $("#form").load("searchresult.html")
  $.ajax({
      url: siteloc + scriptloc + "searchstatus.py",
      data: {stud_id:$("#srch-term").val()},
      dataType: 'json',
      success: function (res) {
                console.log(res);
                if(res[0][0] != "None")
				{
					$("h3").append(res);
				} 
        }
    });
}
