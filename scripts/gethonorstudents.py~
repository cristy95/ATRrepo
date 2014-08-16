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
        
<<<<<<< HEAD
	return = []
>>>>>>> bade025394925b4d29ea9dd484e1e4b73c569e4d
=======
	result = []
>>>>>>> 7e51be9c04d265776c70779383b67e7ead293e22
	for stud in studs:
		stringed = map(str, stud)
		##print stringed
		result.append(stringed)
	
	return json.dumps(result)
