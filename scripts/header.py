from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json
	
def index(req, stud_id):
  stud_id = cgi.escape(stud_id)

  x = doSql()
  student = x.execqry("select * from get_header_perid('" + stud_id + "');", False)
  result = []
  for stud in student:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
