from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req):
	a = doSql()
	studs = a.execqry("select * from get_list_hs();", False)

	result = []
	for stud in studs:
		stringed = map(str, stud)
		result.append(stringed)
	
	return json.dumps(result)
