from dosql import *
import cgi
import json

def index(req, college_id_fk):
  x = doSql()
  rets = x.execqry("select course_id, course_name from courses \
			where college_id_fk = " + college_id_fk , 'False')

  result = []
  for ret in rets:
    stringed = map(str, ret)
    result.append(stringed)

  return json.dumps(result)
