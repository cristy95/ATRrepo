create table stud_info
(
 stud_id char(9) primary key,
 stud_college text,
 stud_course text,
 stud_nameFirst text,
 stud_nameMid text,
 stud_nameLast text,
 stud_nickname text,
 stud_gender text,
 stud_birthdate int,
 stud_birthMonth int,
 stud_birthYear int,
 stud_age text,
 stud_contactNum text,
 stud_homeAddress text

);


--controller

create or replace

 function addStudent(p_stud_id char(9), p_stud_college text, p_stud_course text, p_stud_nameFirst text, p_stud_nameMid text,
p_stud_nameLast text, p_stud_nickname text, p_stud_gender text, p_stud_birthdate int, p_stud_birthMonth int, p_stud_birthYear int,
p_stud_age text, p_stud_contactNum text, p_stud_homeAddress text)
 returns text as

$$

 declare
 v_stud_id char(9);
 begin
 select into v_stud_id stud_id from stud_info
 where stud_id = p_stud_id;


 if v_stud_id isnull then
 insert into addStudent(stud_id, stud_college, stud_course, stud_nameFirst, stud_nameMid, stud_nameLast, stud_nickname, stud_gender,
stud_birthdate, stud_birthMonth, stud_birthYear, stud_age, stud_contactNum, stud_homeAddress)
values (p_stud_id, p_stud_college, p_stud_course, p_stud_nameFirst, p_stud_nameMid,
p_stud_nameLast, p_stud_nickname, p_stud_gender, p_stud_birthdate, p_stud_birthMonth, p_stud_birthYear,
p_stud_age, p_stud_contactNum, p_stud_homeAddress);

 else
 update stud_info
 set stud_college = p_stud_college
 where stud_id = p_stud_id;
 update stud_info
 set stud_course = p_stud_course
 where stud_id = p_stud_id;
 update stud_info
 set stud_nameFirst = p_stud_nameFirst
 where stud_id = p_stud_id;
 update stud_info
 set stud_nameMid = p_stud_nameMid
 where stud_id = p_stud_id;
 update stud_info
 set stud_nameLast = p_stud_nameLast
 where stud_id = p_stud_id;
 update stud_info
 set stud_nickname = p_stud_nickname
 where stud_id = p_stud_id;
 update stud_info
 set stud_gender = p_stud_gender
 where stud_id = p_stud_id;
 update stud_info
 set stud_birthdate = p_stud_birthdate
 where stud_id = p_stud_id;
 update stud_info
 set stud_birthMonth = p_stud_birthMonth
 where stud_id = p_stud_id;
 update stud_info
 set stud_birthYear = p_stud_birthYear
 where stud_id = p_stud_id;
 update stud_info
 set stud_age = p_stud_age
 where stud_id = p_stud_id;
 update stud_info
 set stud_contactNum = p_stud_contactNum
 where stud_id = p_stud_id;
 update stud_info
 set stud_homeAddress = p_stud_homeAddress
 where stud_id = p_stud_id;
 end if;
 return 'OK';
 end;

$$
 language 'plpgsql'
--How to Use:
-- SELECT addStudent(idNum, 'scs')
--view

create or replace function
 get_stud_info_perid(in char(9), out char(9), out text, out text, out text, out text, out text, out text, out text, out int, out int, out int, out text, out text, out text)
returns setof record as

$$
 select stud_id, stud_college, stud_course, stud_nameFirst, stud_nameMid, stud_nameLast, stud_nickname, stud_gender,
stud_birthdate, stud_birthMonth, stud_birthYear, stud_age, stud_contactNum, stud_homeAddress from stud_info
 where stud_id = $1;
$$
 language 'sql'
