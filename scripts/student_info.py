http://localhost/ATRrepo/scripts/addstudent.py?stud_id=2012-0001&college=scs&course=bscs&nameFirst=Cristy&nameMid=Conado&nameLast=Fuerzas&nickname=Kring2&gender=female&birthdate=7&birthMonth=12&birthYear=1995&age=18&contactNumber=0934&address=klklklkl

<<<<<<< HEAD
def addStudent(req, stud_id, stud_college, stud_course, stud_nameFirst, stud_nameMid, stud_nameLast, stud_nickname, stud_gender, stud_birthdate, stud_birthMonth, stud_birthYear, stud_age, stud_contactNum, stud_homeAddress):
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
=======
    
>>>>>>> 6915f74a9e25987270e94fe64b5682e6de3a48a1

stud_id=2012-0002&
college=SCS&
course=BSCS&
nameFirst=Jerina&
nameMid=Mabalhin&
nameLast=Ecleo&
nickname=Jeje&
gender=female&
birthdate=29&
birthMonth=1&
birthYear=1996&
age=18&
contactNum=09123456789&
homeAddress=klklklklkl
