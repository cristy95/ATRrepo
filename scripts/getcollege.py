from dosql import *
import cgi
import json

def index(req):
  x = doSql()
  rets = x.execqry("select college_name from colleges", 'False')
  result = []
  for ret in rets:
    stringed = map(str, ret)
    result.append(stringed)

  return json.dumps(result)
