from dosql import *
import cgi
import json

def index(req, stud_id):
	##cgi.escape(self)
	a = doSql()
	studs = a.execqry("select * from get_hon_stud_perid(" + stud_id + ");", False)
	result = []
	for stud in studs:
		stringed = map(str, stud)
		result.append(stringed)
	
	return json.dumps(result)

