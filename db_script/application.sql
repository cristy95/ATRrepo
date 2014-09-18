create table applications
{
	appli_id serial primary key;
	stud_id_fk char(9) reference personal_info (stud_id)
	course_fk int reference course (course_id)
	college_fk int reference college (college_id)
	organization_name text;
	position text;
	academic_year text;
	aa_ca text;
	scholar_grant text;
	dissertation text;
	special_project text;
	thesis_title text;
}

create or replace
 function regstudent(p_stud_id char(9), p_course int, p_college int, p_organization_name text, 
			p_position text, p_academic_year text, p_aa_ca text, p_scholar_grant text, 
			p_dissertation text, p_special_project text, p_thesis_title text)
 returns text as

$BODY$

declare
 	v_stud_id char(9);

begin
 	select into v_stud_id stud_id from applications
 		where stud_id = p_stud_id;
	
	if v_stud_id isnull then
		insert into applications(stud_id, college, course, organization_name, position, academic_year,
					aa_ca, scholar_grant, dissertation, special_project, thesis_title)
		values (p_stud_id, p_course, p_college, p_organization_name, 
			p_position, p_academic_year, p_aa_ca, p_scholar_grant,
			p_dissertation, p_special_project, p_thesis_title);
	else
 		update applications
		set college = p_college, course = p_course, organization_name = p_organization_name,
			position = p_position, academic_year = p_academic_year, aa_ca = p_aa_ca,
			scholar_grant = p_scholar_grant, dissertation = p_dissertation,
			special_project = p_special_project = thesis_title = p_thesis_title
           	where stud_id = p_stud_id;
    	end if;
	return 'SET';
end;
$BODY$
language 'plpgsql';

---------------------------------------------------------
create or replace function
 getstudinfoperid(in char(9), out int, out int, out text, out text, out text, out text, out text, out text, out text, out text)
returns setof record as

$$
 select * from applications
 where stud_id = $1;
$$
 language 'sql';


