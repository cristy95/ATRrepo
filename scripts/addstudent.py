from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, stud_id, college, course, nameFirst, nameMid, nameLast, nickname, gender, birthdate, birthMonth, birthYear, age, contactNum, homeAddress):
  stud_id = cgi.escape(stud_id)
  college = cgi.escape(college)
  course = cgi.escape(course)
  nameFirst = cgi.escape(nameFirst)
  nameMid = cgi.escape(nameMid)
  nameLast = cgi.escape(nameLast)
  nickname = cgi.escape(nickname)
  gender = cgi.escape(gender)
  birthdate = cgi.escape(birthdate)
  birthMonth = cgi.escape(birthMonth)
  birthYear = cgi.escape(birthYear)
  age = cgi.escape(age)
  contactNum = cgi.escape(contactNum)
  homeAddress = cgi.escape(homeAddress)
  x = doSql()
  student = x.execqry("select * from regstudent('" + stud_id + "', '" + college + "', '" + course + "', '" + nameFirst + "', '" + nameMid + "', '" + nameLast + "', '" + nickname + "', '" + gender + "', " + birthdate + ", " + birthMonth + ", " + birthYear + ", '" + age + "', '" + contactNum + "', '" + homeAddress + "');", True)
  result = []
  for stud in student:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
