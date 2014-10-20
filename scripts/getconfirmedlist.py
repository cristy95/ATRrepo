from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req):
    z = doSql()
    confirm = z.execqry("select personal_info.nameLast, personal_info.nameFirst, applications.stud_id, \
        courses.course_name, colleges.college_name, applications.course_fk, \
        applications.college_fk from applications \
        INNER JOIN courses ON courses.course_id = applications.course_fk \
        INNER JOIN colleges ON colleges.college_id = applications.college_fk \
        INNER JOIN personal_info ON personal_info.stud_id = applications.stud_id \
        WHERE applications.status='Confirmed' order by stud_id;", False)

    result = []
    for con in confirm:
        stringed = map(str, con)
        result.append(stringed)

    return json.dumps(result)