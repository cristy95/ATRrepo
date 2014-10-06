from dosql import *
import cgi
import json

def index(req, stud_id, college, course):
  stud_id = cgi.escape(stud_id)
  college = cgi.escape(college)
  course = cgi.escape(course)

  x = doSql()
  studs = x.execqry("select * from setcancelstatus('" + stud_id + "', " + course + ", " + college + ");", True)
  ##delete(stud_id)
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
