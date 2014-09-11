from dosql import *
import cgi
import json

def index(req):
	##cgi.escape(self)
	a = doSql()
	studs = a.execqry("select * from get_list_hs();", False)

	result = []
	for stud in studs:
		stringed = map(str, stud)
		##print stringed
		result.append(stringed)
	
	return json.dumps(result)
