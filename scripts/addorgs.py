from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, stud_id, org_Name, org_Pos, org_AcYr, stud_aA_cA, stud_schGra):
    stud_id = cgi.escape(stud_id)
    org_Name = cgi.escape(org_Name)
    org_Pos = cgi.escape(org_Pos)
    org_AcYr = cgi.escape(org_AcYr)
    stud_aA_cA = cgi.escape(stud_aA_cA)
    stud_schGra = cgi.escape(stud_schGra)
    
    x = doSql()
    studs = x.execqry("select * from addOrgs('" + stud_id + "', '" + org_Name + "', '" + org_Pos + "', '" + org_AcYr + "', '" + stud_aA_cA + "', '" + stud_schGra + "');", True)
    result = []
  
    for stud in studs:
        stringed = map(str, stud)
        result.append(stringed)
		
    return json.dumps(result)
