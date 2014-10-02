from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, stud_id):
    stud_id = cgi.escape(stud_id)
    z = doSql()
    confirm = z.execqry("select applications.stud_id, courses.course_name, colleges.college_name, \
    					applications.status, applications.course_fk, \
    					applications.college_fk from applications\
    					INNER JOIN courses ON courses.course_id = applications.course_fk\
    					INNER JOIN colleges ON colleges.college_id = applications.college_fk\
    					WHERE applications.stud_id='" + stud_id + "';", False)

    result = []
    for con in confirm:
        stringed = map(str, con)
        result.append(stringed)

    return json.dumps(result)
    
