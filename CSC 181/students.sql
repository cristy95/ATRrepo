create table students(

	stud_id char(9) primary key,
	stud_orgName text, --Organization Name
	stud_orgPos text, --Organization Postition
	stud_orgAcYr text, --Organization Academic Year
	stud_aA_cA text, --Academic Achievements/Co-curricular Awards
	stud_schGra text --Scholarship Grants

);

--controller

create or replace
	function addStudents(p_stud_id char(9), p_stud_orgName text, p_stud_orgPos text, p_stud_orgAcYr text, p_stud_aA_cA text, p_stud_schGra text)
	returns text as
$$
declare
	v_stud_id char(9);

begin
	select into v_stud_id stud_id from students
		where v_stud_id = p_stud_id;

	if v_stud_id isnull then
		insert into students(stud_id, stud_orgName, stud_orgPos, stud_orgAcYr, stud_aA_cA, stud_schGra) values (p_stud_id, p_stud_orgName, p_stud_orgPos, p_stud_orgAcYr, p_stud_aA_cA, p_stud_schGra);

	else
		update students
			set stud_orgName = p_stud_orgName
			where stud_id = p_stud_id;
		update students
			set stud_orgPos = p_stud_orgPos
			where stud_id = p_stud_id;
		update students
			set stud_orgAcYr = p_stud_orgAcYr
			where stud_id = p_stud_id;
		update students
			set stud_aA_cA = p_stud_aA_cA
			where stud_id = p_stud_id;
		update students
			set stud_schGra = p_stud_schGra
			where stud_id = p_stud_id;
	end if;
	return 'OK';
end
$$

--view

create or replace
	function get_students_perid(in char(9), out char(9), out text, out text, out text, out text, out text)
returns setof record as
$$
	select stud_id, stud_orgName, stud_orgPos, stud_orgAcYr, stud_aA_cA, stud_schGra from students
	where stud_id = $1;

$$
language 'sql';
-- How to use:
-- select * from get_students_perid(1);
