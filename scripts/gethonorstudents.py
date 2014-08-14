from dosql import *
import cgi
import json

def index(req, id_number):
	id_number = cgi.escape(id_number)
	a = doSql()
	studs = a.execqry("select * from get_hon_stud('" + id_number + "')")
	stringed = map(str, studs)
	
	return json.dumps(stringed)
