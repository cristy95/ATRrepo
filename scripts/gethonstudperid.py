from dosql import *
import cgi
import json

def index(req, stud_id):
	##cgi.escape(self)
	a = doSql()
<<<<<<< HEAD
	studs = a.execqry("select * from get_hon_stud_perid(" + stud_id + ");", False)
	result = []
=======
	studs = a.execqry("select * from get_hon_stud_perid('" + stud_id + "');", False)
	return = []
>>>>>>> bade025394925b4d29ea9dd484e1e4b73c569e4d
	for stud in studs:
		stringed = map(str, stud)
		result.append(stringed)
	
	return json.dumps(result)

