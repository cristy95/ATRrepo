from dosql import *
import cgi
import simplejson as json

def index(req, stud_id):
  stud_id = cgi.escape(stud_id)

  x = doSql()
  studs = x.execqry("select * from del_perinfo('" + stud_id + "');", True)
  delete(stud_id)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)
	
  return json.dumps(result)
  
  
def delete(stud_id):
  stud_id = cgi.escape(stud_id)

  x = doSql()
  studs = x.execqry("select * from del_app('" + stud_id + "');", True)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)
	
  return json.dumps(result)