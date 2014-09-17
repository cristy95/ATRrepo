from dosql import *
import cgi
import json

def index(req, stud_id, dissertation, special_project, thesis_title):

  stud_id = cgi.escape(stud_id)
  status = cgi.escape(status)


  x = doSql()
  studs = x.execqry("select * from set_pending('" + stud_id + "', '" + status + "');", True)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
