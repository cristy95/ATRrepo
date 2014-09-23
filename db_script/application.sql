create table applications
(
	appli_id serial primary key,
	stud_id char(9),
	course_fk int references courses (course_id),
	college_fk int references colleges (college_id),
	organization_name text,
	position text,
	academic_year text,
	aa_ca text,
	scholar_grant text,
	dissertation text,
	special_project text,
	thesis_title text,
	status text
)

create or replace
 function apply(p_stud_id char(9), p_course_fk int, p_college_fk int, p_organization_name text, 
			p_position text, p_academic_year text, p_aa_ca text, p_scholar_grant text, 
			p_dissertation text, p_special_project text, p_thesis_title text, p_status text)
 returns int as

$BODY$

declare
 	v_stud_id char(9);
	V_appli_id int;

begin
 	select into v_stud_id stud_id from applications
 		where stud_id = p_stud_id;
	
	if v_stud_id isnull then
		insert into applications(stud_id, course_fk, college_fk, organization_name, position, academic_year,
					aa_ca, scholar_grant, dissertation, special_project, thesis_title, status)
		values (p_stud_id, p_course_fk, p_college_fk, p_organization_name, 
			p_position, p_academic_year, p_aa_ca, p_scholar_grant,
			p_dissertation, p_special_project, p_thesis_title, p_status);
	else
 		update applications
		set college_fk = p_college_fk, course_fk = p_course_fk, organization_name = p_organization_name,
			position = p_position, academic_year = p_academic_year, aa_ca = p_aa_ca,
			scholar_grant = p_scholar_grant, dissertation = p_dissertation,
			special_project = p_special_project, thesis_title = p_thesis_title,
			status = p_status
           	where stud_id = p_stud_id;
    	end if;

	select into v_appli_id appli_id from applications
		where stud_id = p_stud_id;
	return v_appli_id;
end;
$BODY$
language 'plpgsql';

---------------------------------------------------------
create or replace function
 getstudinfoperid(in char(9), out int, out int, out text, out text, out text, out text, out text, out text, out text, out text)
returns setof record as

$$
 select college_fk, course_fk, organization_name, position, academic_year,
		aa_ca, scholar_grant, dissertation, special_project, thesis_title from applications
 where stud_id_fk = $1;
$$
 language 'sql';


