from dosql import *
import cgi
import json

def index(req, stud_id, father_nameFull, mother_nameFull):
    stud_id = cgi.escape(stud_id)
    father_nameFull = cgi.escape(fater_nameFull)
    mother_nameFull = cgi.escape(mother_nameFull)
    x = doSql()
    parents = x.execqry("select * from get_listing('" + stud_id + "', '" + father_nameFull + "', '" + mother_nameFull + "');", False)
    result = []
    for par in parents:
        stringed = map(str, par)
        results.append(stringed)
    

    return json.dumps(result)