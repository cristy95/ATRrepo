#Raphael Jose N. Balonga
#CSC-181

class Display():
  def show_form(studInfo):
    studInfo = {idNo,course,lastName,firstName,middleName,nickname,gender,age,birthDate,homeAddress,fatherName,motherName,guardian,spouse,project,organization,position,academicYear,awards,scholarshipGrants}
    print "ID No.: ", studInfo[idNo]
    print "Course: ", studInfo[course]
    print "Last Name: ", studInfo[lastName]
    print "First Name: ", studInfo[firstName]
    print "Middle Name: ", studInfo[middleName]
    print "Nickname: ", studInfo[nickname]
    print "Gender: ", studInfo[gender]
    print "Age: ", studInfo[age]
    print "Birthdate (mm,dd,yy): ", studInfo[birthDate]
    print "Home Address: ", studInfo[homeAddress]
    print "Name of Father: ", studInfo[fatherName]
    print "Maiden Name of Mother: ", studInfo[motherName]
    print "Name of Guardian (if applicable; n/a if none): ", studInfo[guardian]
    print "Name of Spouse (if applicable; n/a if none): ", studInfo[spouse]
    print "Dissertation/Special Project/Thesis Title: ", studInfo[project]
    print "Organization Name: ", studInfo[organization]
    print "Organization Position: ", studInfo[position]
    print "Organization Academic Year: ", studInfo[academicYear]
    print "Academic Awards/Co-curricular Awards: ", studInfo[awards]
    print "Scholarship Grants: ", studInfo[scholarshipGrants]

  def show_info_empty():
    idNo = raw_input('ID No.: ')
    course = raw_input('Course: ')
    college = raw_input('College: ')
    lastName = raw_input('Last Name: ')
    firstName = raw_input('First Name: ')
    middleName = raw_input('Middle Name: ')
    nickname = raw_input('Nickname: ')
    gender = raw_input('Gender: ')
    age = raw_input('Age: ')
    birthdate = raw_input('Birthdate (mm,dd,yy): ')
    homeAddress = raw_input('Home Address: ')
    fatherName = raw_input('Name of Father: ')
    motherName = raw_input('Maiden Name of Mother: ')
    guardian = raw_input('Name of Guardian (if applicable): ')
    spouse = raw_input('Name of Spouse(if applicable): ')
    project = raw_input('Dissertation/Special Project/Thesis Title: ')
    organization = raw_input('Organization Name: ')
    position = raw_input('Organization Position: ')
    academicYear = raw_input('Organization Academic Year: ')
    awards = raw_input('Academic Awards/Co-curricular Awards: ')
    scholarshipGrants = raw_input('Scholarship Grants: ')
    studInfo = {idNo,course,lastName,firstName,middleName,nickname,gender,age,birthDate,homeAddress,fatherName,motherName,guardian,spouse,project,organization,position,academicYear,awards,scholarshipGrants}
