create table stud_info
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
 age text,
 contactNum text,
 homeAddress text

);


--controller

create or replace
 function regstudent(p_stud_id char(9), p_college text, p_course text, p_nameFirst text,
 p_nameMid text, p_nameLast text, p_nickname text, p_gender text, p_birthdate int,
 p_birthMonth int, p_birthYear int, p_age text, p_contactNum text, p_homeAddress text)
 returns text as

$$

 declare
 v_stud_id char(9);
 begin
 select into v_stud_id stud_id from stud_info
 where stud_id = p_stud_id;


 if v_stud_id isnull then
 insert into stud_info(stud_id, college, course, nameFirst, nameMid, nameLast, nickname, gender,
birthdate, birthMonth, birthYear, age, contactNum, homeAddress)
values (p_stud_id, p_college, p_course, p_nameFirst, p_nameMid,
p_nameLast, p_nickname, p_gender, p_birthdate, p_birthMonth, p_birthYear,
p_age, p_contactNum, p_homeAddress);

 else
 update stud_info
 set college = p_college, course = p_course, nameFirst = p_nameFirst,
 nameMid = p_nameMid, nameLast = p_nameLast, nickname = p_nickname, 
 gender = p_gender, birthdate = p_birthdate, birthMonth = p_birthMonth, 
 birthYear = p_birthYear, age = p_age, contactNum = p_contactNum, 
 homeAddress = p_homeAddress where stud_id = p_stud_id;
 end if;
 return 'OK';
 end;

$$
 language 'plpgsql';
--How to Use:
-- select * from regstudent('2012-0001','SCS','BSCS','Cristy','Conado','Fuerzas','Kring2','female',7,12,1995,'18','09123456789','klklklklkl');
--view

create or replace function
 get_stud_info_perid(in char(9), out char(9), out text, out text, out text, out text, out text, out text, out text, out int, out int, out int, out text, out text, out text)
returns setof record as

$$
 select stud_id, college, course, nameFirst, nameMid, nameLast, nickname, gender,
birthdate, birthMonth, birthYear, age, contactNum, homeAddress from allinfo
 where stud_id = $1;
$$
 language 'sql';
 
 create or replace
	function del_studinfo(in char(9), out char(9))
		returns character as
$BODY$
	delete from stud_info 
		where stud_id = $1	
	returning stud_id;
$BODY$
language 'sql';

