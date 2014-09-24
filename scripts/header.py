from dosql import *
import cgi
import simplejson as json

def index(req, stud_id):
  
  stud_id = cgi.escape(stud_id)

  x = doSql()
  student = x.execqry("select * from get_header_perid('" + stud_id + "');", True)
  result = []
  for stud in student:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
