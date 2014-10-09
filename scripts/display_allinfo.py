from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, stud_id, college, course):
    x = doSql()
    rets = x.execqry("select personal_info.stud_id, courses.course_name,\
			colleges.college_name, personal_info.nameLast, \
			personal_info.nameFirst, personal_info.nameMid, personal_info.nickname, \
			personal_info.birthdate, personal_info.birthMonth, \
			personal_info.birthYear, personal_info.gender, \
			personal_info.contactNum, personal_info.homeAddress, \
			personal_info.father_nameLast, personal_info.father_nameFirst, \
			personal_info.father_nameMiddle, personal_info.mother_nameLast, \
			personal_info.mother_nameFirst, personal_info.mother_nameMiddle, \
			personal_info.guardian_nameLast, personal_info.guardian_nameFirst, \
			personal_info.guardian_nameMiddle, personal_info.spouse_nameLast, \
			personal_info.spouse_nameFirst, personal_info.spouse_nameMiddle, \
			applications.position, applications.organization_name, \
			applications.academic_year, applications.aa_ca, \
			applications.scholar_grant, applications.dissertation, \
			applications.special_project, applications.thesis_title, \
			courses.course_id, colleges.college_id, personal_info.age from personal_info \
INNEr join applications on applications.stud_id = personal_info.stud_id \
Inner join colleges on colleges.college_id = applications.college_fk \
inner join courses on courses.course_id = applications.course_fk \
where personal_info.stud_id ='" + stud_id + "' and colleges.college_id =" + college + \
			" and courses.course_id =" + course + ";", False)
    result = []
    for ret in rets:
        stringed = map(str, ret)
        result.append(stringed)
    

    return json.dumps(result)
