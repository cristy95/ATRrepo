from dosql import *
import cgi
import simplejson as json

def index(req, stud_id):
    
    stud_id = cgi.escape(stud_id)
    x = doSql()
    rets = x.execqry("select * from get_parents_perid('" + stud_id + "');", False)
    result = []
    
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)
    

    return json.dumps(result)
