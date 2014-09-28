from dosql import *
import cgi
import json

def index(req):
	x = doSql()
	rets = x.execqry("select * from colleges")

	for ret in rets:
		stringed = map(str, ret)
		result.append(stringed)

	return json.dumps(result)
