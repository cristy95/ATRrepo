from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, stud_id):

  stud_id = cgi.escape(stud_id)

  x = doSql()
  studs = x.execqry("select * from del_studid_hs('" + stud_id + "');", True)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
