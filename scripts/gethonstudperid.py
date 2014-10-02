from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, stud_id):
	stud_id = cgi.escape(stud_id)
	a = doSql()
	studs = a.execqry("select * from get_hon_stud('" + stud_id + "');", False)
	result = []

	for stud in studs:
		stringed = map(str, stud)
		result.append(stringed)
	
	return json.dumps(result)

