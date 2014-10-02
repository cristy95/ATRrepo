from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json
	
def index(req, stud_id, course, college):
    stud_id =  cgi.escape(stud_id)
    course = cgi.escape(course)
    college = cgi.escape(college)
    x = doSql()

    studs = x.execqry("select * from setconfirm('" + stud_id + "','" + course + "','" + college + "', 'Confirmed');", True)
    result = []

    for stud in studs:
        stringed = map(str, stud)
        result.append(stringed)

    return json.dumps(result)
