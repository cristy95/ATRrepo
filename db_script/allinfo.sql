create table allinfo
(
 stud_id char(9) primary key,
 college text,
 course text,
 nameFirst text,
 nameMid text,
 nameLast text,
 nickname text,
 gender text,
 birthdate int,
 birthMonth int,
 birthYear int,
 age int,
 contactNum text,
 homeAddress text,
	father_nameFirst text,
	father_nameMiddle text,
	father_nameLast text,
	mother_nameFirst text,
	mother_nameMiddle text,
 	mother_nameLast text,
  	guardian_nameFirst text,
  	guardian_nameMiddle text,
  	guardian_nameLast text,
  	spouse_nameFirst text,
  	spouse_nameMiddle text,
  	spouse_nameLast text,
 org_Name text, 
 org_Pos text, 
 org_AcYr text, 
 stud_aA_cA text, 
 stud_schGra text,
 dissertation text,
 special_project text,
 thesis_title text
);


create or replace
 function regstudent(p_stud_id char(9), p_college text, p_course text, p_nameFirst text, 
			p_nameMid text, p_nameLast text, p_nickname text, p_gender text, 
			p_birthdate int, p_birthMonth int, p_birthYear int, p_age int, 
			p_contactNum text, p_homeAddress text, p_father_nameFirst text, 
			p_father_nameMiddle text, p_father_nameLast text, p_mother_nameFirst text,  				p_mother_nameMiddle text, p_mother_nameLast text, p_guardian_nameFirst text,
			p_guardian_nameMiddle text, p_guardian_nameLast text, p_spouse_nameFirst text, 
			p_spouse_nameMiddle text, p_spouse_nameLast text, p_org_Name text, 
			p_org_Pos text, p_org_AcYr text, p_stud_aA_cA text, p_stud_schGra text, 
			p_dissertation text, p_special_project text, p_thesis_title text)
 returns text as

$BODY$

declare
 	v_stud_id char(9);

begin
 	select into v_stud_id stud_id from allinfo
 		where stud_id = p_stud_id;
	
	if v_stud_id isnull then
		insert into allinfo(stud_id, college, course, nameFirst, nameMid, nameLast, 
					nickname, gender, birthdate, birthMonth, birthYear, age, 
					contactNum, homeAddress, father_nameFirst, father_nameMiddle, 
					father_nameLast, mother_nameFirst, mother_nameMiddle, 
					mother_nameLast, guardian_nameFirst, guardian_nameMiddle, 						guardian_nameLast, spouse_nameFirst, spouse_nameMiddle, 					spouse_nameLast, org_Name, org_Pos, org_AcYr, stud_aA_cA, 
					stud_schGra, dissertation, special_project, 
					thesis_title)
		values (p_stud_id, p_college, p_course, p_nameFirst, p_nameMid, p_nameLast, 
				p_nickname, p_gender, p_birthdate, p_birthMonth, p_birthYear, 
				p_age, p_contactNum, p_homeAddress, p_father_nameFirst, 
				p_father_nameMiddle, p_father_nameLast, p_mother_nameFirst, 					p_mother_nameMiddle, p_mother_nameLast,	p_guardian_nameFirst,
				p_guardian_nameMiddle, p_guardian_nameLast, p_spouse_nameFirst, 				p_spouse_nameMiddle, p_spouse_nameLast, p_org_Name, p_org_Pos, 
				p_org_AcYr, p_stud_aA_cA, p_stud_schGra, p_dissertation, 
				p_special_project, p_thesis_title);
	else
 		update allinfo
		set college = p_college, course = p_course, nameFirst = p_nameFirst,
			nameMid = p_nameMid, nameLast = p_nameLast, nickname = p_nickname, 
			gender = p_gender, birthdate = p_birthdate, birthMonth = p_birthMonth, 
 			birthYear = p_birthYear, age = p_age, contactNum = p_contactNum, 
			homeAddress = p_homeAddress, father_nameFirst = p_father_nameFirst, 
			father_nameMiddle = p_father_nameMiddle, father_nameLast = p_father_nameLast,
			mother_nameFirst = p_mother_nameFirst, mother_nameMiddle = p_mother_nameMiddle,
			mother_nameLast = p_mother_nameLast, guardian_nameFirst = p_guardian_nameFirst,
			guardian_nameMiddle = p_guardian_nameMiddle, guardian_nameLast = p_guardian_nameLast,
			spouse_nameFirst = p_spouse_nameFirst, spouse_nameMiddle = p_spouse_nameMiddle,
			spouse_nameLast = p_spouse_nameLast, org_Name = p_org_Name,
			org_Pos = p_org_Pos, org_AcYr = p_org_AcYr, stud_aA_cA = p_stud_aA_cA,
			stud_schGra = p_stud_schGra, dissertation = p_dissertation, 
			special_project = p_special_project, thesis_title = p_thesis_title
           	where stud_id = p_stud_id;
    	end if;
	return 'SET';
end;
$BODY$
language 'plpgsql';

--------------------------------------------
create or replace
	function del_studinfo(in char(9), out char(9))
		returns character as
$BODY$
	delete from allinfo 
		where stud_id = $1	
	returning stud_id;
$BODY$
language 'sql';

---------------------------------------------
--view

create or replace function
 getstudinfoperid(in char(9), out char(9), out text, out text, out text, out text, out text, out text, out text, out int, out int, out int, out int, out text,
 	out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text,
 	out text, out text, out text, out text, out text)
returns setof record as

$$
 select * from allinfo
 where stud_id = $1;
$$
 language 'sql';

