from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, password):
  x = doSql()
  rets = x.execqry("select * from confirmKey('" +  password + "');", 'False')
  result = []
  for ret in rets:
    stringed = map(str, ret)
    result.append(stringed)

  return json.dumps(result)
