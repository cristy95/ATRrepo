from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, stud_id, dissertation, special_project, thesis_title):

  stud_id = cgi.escape(stud_id)
  dissertation = cgi.escape(dissertation)
  special_project = cgi.escape(special_project)
  thesis_title = cgi.escape(thesis_title)

  x = doSql()
  studs = x.execqry("select * from set_hon_stud('" + stud_id + "', '" + dissertation + "', '" + special_project + "', '" + thesis_title + "');", True)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
