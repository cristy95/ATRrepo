from dosql import *
import cgi
import json

def index(req, stud_id, course_fk, college_fk, organization_name, position, academic_year,
					aa_ca, scholar_grant, dissertation, special_project, thesis_title):

  stud_id = cgi.escape(stud_id)
  course_fk = cgi.escape(course_fk)
  college_fk = cgi.escape(college_fk)
  organization_name = cgi.escape(organization_name)
  position = cgi.escape(position)
  academic_year = cgi.escape(academic_year)
  aa_ca = cgi.escape(aa_ca)
  scholar_grant = cgi.escape(scholar_grant)
  dissertation = cgi.escape(dissertation)
  special_project = cgi.escape(special_project)
  thesis_title = cgi.escape(thesis_title)

  x = doSql()
  student = x.execqry("select * from apply('" + stud_id + "', " + course_fk + ", " + college_fk + ", '" + organization_name + "', '" + position + "', '" + academic_year + "', '" + aa_ca + "', '" + scholar_grant + "', '" + dissertation + "', '" + special_project + "', '" + thesis_title + "', 'Pending');", True)

  result = []
  for stud in student:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
