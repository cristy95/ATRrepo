from dosql import *
import cgi
import json

def addStudent(req, stud_id, college, course, nameFirst, nameMid, nameLast, nickname, gender, birthdate, birthMonth, birthYear, age, contactNum, homeAddress):
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
  student = x.execqry("select * from get_stud_info_perid('" + stud_id + "', '" + college + "', '" + course + "', '" + nameFirst + "', '" + nameMid + "', '" + nameLast + "','" + nickname + "','" + gender + "','" + birthdate + "','" + birthMonth + "', '" + birthYear + "','" + age + "','" + contactNum + "','" + homeAddress + "',);", False)
  result = []
  for student in students:
    stringed = map(str, student)
    result.append(stringed)

  return json.dumps(result)
