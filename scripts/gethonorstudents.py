from dosql import *
import cgi
import json

def index(req):
	##cgi.escape(self)
	a = doSql()
	studs = a.execqry("select * from get_list_hs();")
	return = []
	for stud in studs:
		stringed = map(str, stud)
		result.append(stringed)
	
	return json.dumps(result)