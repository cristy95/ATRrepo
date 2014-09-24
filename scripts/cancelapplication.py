from dosql import *
import cgi
import simplejson as json

def index(req, stud_id):
	stud_id = cgi.escape(stud_id)
	a = doSql()
	studhs = a.execqry("select * from del_studid_hs('" + stud_id + "');", True)
	result = []

	for stud in studhs:
		stringed = map(str, stud)
		result.append(stringed)
	
	return json.dumps(result)

