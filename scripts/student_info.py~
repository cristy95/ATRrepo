from dosql import *
import cgi
import json

def addStudent(stud_id, stud_college, stud_course, stud_nameFirst, stud_nameMid, stud_nameLast, stud_nickname, stud_gender, stud_birthdate, stud_birthMonth, stud_birthYear, stud_age, stud_contactNum, stud_homeAddress):
  stud_id = cgi.escape(stud_id)
  stud_college = cgi.escape(stud_college)
  stud_course = cgi.escape(stud_course)
  stud_nameFirst = cgi.escape(stud_nameFirst)
  stud_nameMid = cgi.escape(stud_nameMid)
  stud_nameLast = cgi.escape(stud_nameLast)
  stud_nickname = cgi.escape(stud_nickname)
  stud_gender = cgi.escape(stud_gender)
  stud_birthdate = cgi.escape(stud_birthdate)
  stud_birthMonth = cgi.escape(stud_birthMonth)
  stud_birthYear = cgi.escape(stud_birthYear)
  stud_age = cgi.escape(stud_age)
  stud_contactNum = cgi.escape(stud_contactNum)
  stud_homeAddress = cgi.escape(stud_homeAddress)
  x = doSql()
  student = x.execqry("select * from get_stud_info_perid('" + stud_id + "', '" + stud_college + "', '" + stud_course + "', '" + stud_nameFirst + "', '" + stud_nameMid + "', '" + stud_nameLast + "','" + stud_nickname + "','" + stud_gender + "','" + stud_birthdate + "','" + stud_birthMonth + "', '" + stud_birthYear + "','" + stud_age + "','" + stud_contactNum + "','" + stud_homeAddress + "',);", False)
  result = []
  for student in students:
    stringed = map(str, student)
    result.append(stringed)

  return json.dumps(result)
