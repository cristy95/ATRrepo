from dosql import *
import cgi
import json

def index(req, stud_id, nameFirst, nameMid, nameLast, birthdate, birthMonth, birthYear, homeAdress, father_nameFirst, father_nameMiddle,father_nameLast, mother_nameFirst, mother_nameMiddle, mother_nameLast, dissertation, special_project, thesis_title):
  
  stud_id = cgi.escape(stud_id)
  nameFirst = cgi.escape(nameFirst)
  nameMid = cgi.escape(nameMid)
  nameLast = cgi.escape(nameLast)
  birthdate = cgi.escape(birthdate)
  birthMonth = cgi.escape(birthMonth)
  birthYear = cgi.escape(birthYear)
  homeAdress = cgi.escape(homeAdress)
  father_nameFirst = cgi.escape(father_nameFirst)
  father_nameMiddle = cgi.escape(father_nameMiddle)
  father_nameLast = cgi.escape(father_nameLast)
  mother_nameFirst = cgi.escape(mother_nameFirst)
  mother_nameMiddle = cgi.escape(mother_nameMiddle)
  mother_nameLast = cgi.escape(mother_nameLast)
  dissertation = cgi.escape(dissertation)
  special_project = cgi.escape(special_project)
  thesis_title = cgi.escape(thesis_title)

  x = doSql()
  student = x.execqry("select * from get_header_perid('" + stud_id + "', '" + nameFirst + "', '" + nameMid + "', '" + nameLast + "', '" + birthdate + "', '" + birthMonth + "', '" + birthYear + "', '" + homeAdress + "', '" + father_nameFirst + "', '" + father_nameMiddle + "', '" + father_nameLast + "', '" + mother_nameFirst + "', '" + mother_nameMiddle + "', '" + mother_nameLast + "', '" + guardian_nameFirst + "', '" + guardian_nameMiddle + "', '" + guardian_nameLast + "', '" + spouse_nameFirst + "', '" + spouse_nameMiddle + "', '" + spouse_nameLast + "', '" + dissertation + "', '" + special_project + "', '" + thesis_title + "');", True)
  result = []
  for stud in student:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
