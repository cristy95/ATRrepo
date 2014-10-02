from dosql import *
import cgi
<<<<<<< HEAD
import json
=======
try:
    import json
except ImportError:
    import simplejson as json
>>>>>>> 85c83f0a60ca980155b966f7f3c5d8c3101d0751

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
