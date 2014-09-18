from dosql import *
import cgi
import json

def index(req, stud_id):

  stud_id = cgi.escape(stud_id)

  x = doSql()
  studs = x.execqry("select * from del_studinfo('" + stud_id + "');", True)
  delconfirm(stud_id)
  delorgs(stud_id)
  delparents(stud_id)
  delhonorstud(stud_id)
  
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)
	
  return json.dumps(result)

  
def delconfirm(stud_id):
  stud_id = cgi.escape(stud_id)

  x = doSql()
  studs = x.execqry("select * from del_confirm('" + stud_id + "');", True)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)
	
  return json.dumps(result)
  
def delhonorstud(stud_id):
  stud_id = cgi.escape(stud_id)

  x = doSql()
  studs = x.execqry("select * from del_studid_hs('" + stud_id + "');", True)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)
	
  return json.dumps(result)
  
def delparents(stud_id):
  stud_id = cgi.escape(stud_id)

  x = doSql()
  studs = x.execqry("select * from del_parents('" + stud_id + "');", True)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)
	
  return json.dumps(result)
  
def delorgs(stud_id):
  stud_id = cgi.escape(stud_id)

  x = doSql()
  studs = x.execqry("select * from del_orgs('" + stud_id + "');", True)
  result = []

  for stud in studs:
    stringed = map(str, stud)
    result.append(stringed)
	
  return json.dumps(result)
