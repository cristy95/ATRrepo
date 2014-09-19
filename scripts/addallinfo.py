from dosql import *
import cgi
import json

def index(req, stud_id, college, course, nameFirst, nameMid, nameLast, nickname, gender, birthdate, birthMonth, birthYear, age, contactNum, homeAddress, father_nameFirst, father_nameMiddle,father_nameLast, mother_nameFirst, mother_nameMiddle, mother_nameLast, guardian_nameFirst, guardian_nameMiddle, guardian_nameLast, spouse_nameFirst, spouse_nameMiddle, spouse_nameLast, org_Name, org_Pos, org_AcYr, stud_aA_cA, stud_schGra, dissertation, special_project, thesis_title):
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
  father_nameFirst = cgi.escape(father_nameFirst)
  father_nameMiddle = cgi.escape(father_nameMiddle)
  father_nameLast = cgi.escape(father_nameLast)
  mother_nameFirst = cgi.escape(mother_nameFirst)
  mother_nameMiddle = cgi.escape(mother_nameMiddle)
  mother_nameLast = cgi.escape(mother_nameLast)
  guardian_nameFirst = cgi.escape(guardian_nameFirst)
  guardian_nameMiddle = cgi.escape(guardian_nameMiddle)
  guardian_nameLast = cgi.escape(guardian_nameLast)
  spouse_nameFirst = cgi.escape(spouse_nameFirst)
  spouse_nameMiddle = cgi.escape(spouse_nameMiddle)
  spouse_nameLast = cgi.escape(spouse_nameLast)
  org_Name = cgi.escape(org_Name)
  org_Pos = cgi.escape(org_Pos)
  org_AcYr = cgi.escape(org_AcYr)
  stud_aA_cA = cgi.escape(stud_aA_cA)
  stud_schGra = cgi.escape(stud_schGra)
  dissertation = cgi.escape(dissertation)
  special_project = cgi.escape(special_project)
  thesis_title = cgi.escape(thesis_title)

  x = doSql()
  student = x.execqry("select * from regstudent('" + stud_id + "', '" + college + "', '" + course + "', '" + nameFirst + "', '" + nameMid + "', '" + nameLast + "', '" + nickname + "', '" + gender + "', " + birthdate + ", " + birthMonth + ", " + birthYear + ", " + age + ", '" + contactNum + "', '" + homeAddress +  "', '" + father_nameFirst + "', '" + father_nameMiddle + "', '" + father_nameLast + "', '" + mother_nameFirst + "', '" + mother_nameMiddle + "', '" + mother_nameLast + "', '" + guardian_nameFirst + "', '" + guardian_nameMiddle + "', '" + guardian_nameLast + "', '" + spouse_nameFirst + "', '" + spouse_nameMiddle + "', '" + spouse_nameLast + "', '" + org_Name + "', '" + org_Pos + "', '" + org_AcYr + "', '" + stud_aA_cA + "', '" + stud_schGra +  "', '" + dissertation + "', '" + special_project + "', '" + thesis_title + "');", True)

  result = []
  for stud in student:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
