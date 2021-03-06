create or replace function 
	get_header_perid(in char(9), out char(9), out text, out text, out text, 
	                 out int, out int, out int, out text, out text, out text, 
					 out text, out text, out text, out text, out text, out text, out text, out text, out text)
returns setof record as

$$

select personal_info.stud_id, personal_info.namefirst, personal_info.namemid,
	personal_info.namelast, personal_info.birthMonth, personal_info.birthYear, 
	personal_info.birthdate, personal_info.homeAddress, personal_info.father_nameFirst, 
	personal_info.father_nameMiddle, personal_info.father_nameLast, personal_info.mother_nameFirst, 
	personal_info.mother_nameMiddle, personal_info.mother_nameLast, applications.dissertation, 
	applications.special_project, applications.thesis_title, colleges.college_name,
	courses.course_name from personal_info
INNEr join applications on applications.stud_id = personal_info.stud_id
Inner join colleges on colleges.college_id = applications.college_fk
inner join courses on courses.course_id = applications.course_fk
where personal_info.stud_id = $1;
	   
$$

language 'sql';
