from dosql import *
import cgi
import json

def index(req, stud_id, college, course, nameFirst, nameMid, nameLast, nickname, gender, birthdate, birthMonth, birthYear, age, contactNum, homeAddress, father_nameFirst, father_nameMiddle, father_nameLast, mother_nameFirst, mother_nameMiddle, mother_nameLast, guardian_nameFirst, guardian_nameMiddle, guardian_nameLast, spouse_nameFirst, spouse_nameMiddle, spouse_nameLast, organization_name, position, academic_year, aa_ca, scholar_grant, dissertation, special_project, thesis_title):
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
  organization_name = cgi.escape(organization_name)
  position = cgi.escape(position)
  academic_year = cgi.escape(academic_year)
  aa_ca = cgi.escape(aa_ca)
  scholar_grant = cgi.escape(scholar_grant)
  dissertation = cgi.escape(dissertation)
  special_project = cgi.escape(special_project)
  thesis_title = cgi.escape(thesis_title)

  x = doSql()
  y = doSql()

  student1 = y.execqry("select * from addpersonalinfo('" + stud_id +  "', '" + nameFirst + "', '" + nameMid + "', '" + nameLast + "', '" + nickname + "', '" + gender + "', " + birthdate + ", " + birthMonth + ", " + birthYear + ", " + age + ", '" + contactNum + "', '" + homeAddress + "', '" + father_nameFirst + "', '" + father_nameMiddle + "', '" + father_nameLast + "', '" + mother_nameFirst + "', '" + mother_nameMiddle + "', '" + mother_nameLast + "', '" + guardian_nameFirst + "', '" + guardian_nameMiddle + "', '" + guardian_nameLast + "', '" + spouse_nameFirst + "', '" + spouse_nameMiddle + "', '" + spouse_nameLast + "');", True)


  student = x.execqry("select * from apply('" + stud_id + "', " + course + ", " + college + ", '" + organization_name + "', '" + position + "', '" + academic_year + "', '" + aa_ca + "', '" + scholar_grant + "', '" + dissertation + "', '" + special_project + "', '" + thesis_title + "', 'Pending');", True)

  result = []
  for stud in student:
    stringed = map(str, stud)
    result.append(stringed)

  return json.dumps(result)
