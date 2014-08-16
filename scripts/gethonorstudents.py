from dosql import *
import cgi
import json

def index(req):
	##cgi.escape(self)
	a = doSql()
	studs = a.execqry("select * from get_list_hs();", False)
<<<<<<< HEAD
	result = []
=======
        
	return = []
>>>>>>> bade025394925b4d29ea9dd484e1e4b73c569e4d
	for stud in studs:
		stringed = map(str, stud)
		print stringed
		result.append(stringed)
	
	return json.dumps(result)
