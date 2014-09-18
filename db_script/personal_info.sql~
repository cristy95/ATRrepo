create table personal_info
(
 stud_id char(9) primary key,
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
  	spouse_nameLast text
);


create or replace
 function regstudent(p_stud_id char(9), p_nameFirst text, 
			p_nameMid text, p_nameLast text, p_nickname text, p_gender text, 
			p_birthdate int, p_birthMonth int, p_birthYear int, p_age int, 
			p_contactNum text, p_homeAddress text, p_father_nameFirst text, 
			p_father_nameMiddle text, p_father_nameLast text, p_mother_nameFirst text,  				p_mother_nameMiddle text, p_mother_nameLast text, p_guardian_nameFirst text,
			p_guardian_nameMiddle text, p_guardian_nameLast text, p_spouse_nameFirst text, 
			p_spouse_nameMiddle text, p_spouse_nameLast text)
 returns text as

$BODY$

declare
 	v_stud_id char(9);

begin
 	select into v_stud_id stud_id from personal_info
 		where stud_id = p_stud_id;
	
	if v_stud_id isnull then
		insert into personal_info(stud_id, nameFirst, nameMid, nameLast, 
					nickname, gender, birthdate, birthMonth, birthYear, age, 
					contactNum, homeAddress, father_nameFirst, father_nameMiddle, 
					father_nameLast, mother_nameFirst, mother_nameMiddle, 
					mother_nameLast, guardian_nameFirst, guardian_nameMiddle, 						guardian_nameLast, spouse_nameFirst, spouse_nameMiddle, 					spouse_nameLast)
		values (p_stud_id, p_nameFirst, p_nameMid, p_nameLast, 
				p_nickname, p_gender, p_birthdate, p_birthMonth, p_birthYear, 
				p_age, p_contactNum, p_homeAddress, p_father_nameFirst, 
				p_father_nameMiddle, p_father_nameLast, p_mother_nameFirst, 					p_mother_nameMiddle, p_mother_nameLast,	p_guardian_nameFirst,
				p_guardian_nameMiddle, p_guardian_nameLast, p_spouse_nameFirst, 				p_spouse_nameMiddle, p_spouse_nameLast);
	else
 		update personal_info
		set nameFirst = p_nameFirst,
			nameMid = p_nameMid, nameLast = p_nameLast, nickname = p_nickname, 
			gender = p_gender, birthdate = p_birthdate, birthMonth = p_birthMonth, 
 			birthYear = p_birthYear, age = p_age, contactNum = p_contactNum, 
			homeAddress = p_homeAddress, father_nameFirst = p_father_nameFirst, 
			father_nameMiddle = p_father_nameMiddle, father_nameLast = p_father_nameLast,
			mother_nameFirst = p_mother_nameFirst, mother_nameMiddle = p_mother_nameMiddle,
			mother_nameLast = p_mother_nameLast, guardian_nameFirst = p_guardian_nameFirst,
			guardian_nameMiddle = p_guardian_nameMiddle, guardian_nameLast = p_guardian_nameLast,
			spouse_nameFirst = p_spouse_nameFirst, spouse_nameMiddle = p_spouse_nameMiddle,
			spouse_nameLast = p_spouse_nameLast
           	where stud_id = p_stud_id;
    	end if;
	return 'SET';
end;
$BODY$
language 'plpgsql';


------------------------------------

create or replace function
 getstudentinfo(in char(9), out char(9), out text, out text, out text, out text, out text, out int, out int, out int, out int, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text, out text)
returns setof record as

$$
 select * from personal_info
 where stud_id = $1;
$$
 language 'sql';


