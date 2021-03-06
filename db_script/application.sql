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
);

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
 	select into v_appli_id appli_id from applications
 		where stud_id = p_stud_id and
			college_fk = p_college_fk and
			course_fk = p_course_fk;
	
	if v_appli_id isnull then
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
			special_project = p_special_project, thesis_title = p_thesis_title
           	where stud_id = p_stud_id;
    	end if;

	select into v_appli_id appli_id from applications
		where stud_id = p_stud_id;
	return v_appli_id;
end;
$BODY$
language 'plpgsql';

---------------------------------------------------------

--view per id
create or replace function
    get_status_perid(in char(9), out char(9), out int, out int, out text)
returns setof record as
$$
    select stud_id, course_fk, college_fk, status from applications
    where stud_id = $1;
$$
    language 'sql';

---------------------------------------------------------

--set status to confirmed
create or replace
    function setconfirm (p_stud_id char(9), p_course_fk int, p_college_fk int, p_status text)
    returns text as

$$
  declare
     v_stud_id char(9);
     v_course_fk int;
     v_college_fk int;

  begin
    select into v_stud_id stud_id, v_course_fk course_fk, v_college_fk college_fk from applications
        where stud_id = p_stud_id and course_fk = p_course_fk and college_fk = p_college_fk;
        
        update applications
            set status = p_status
            where stud_id = p_stud_id and course_fk = p_course_fk and college_fk = p_college_fk;
            
    return 'SET';
  end;
$$
  language 'plpgsql';
---------------------------------------------------------
create or replace
	function del_app(in char(9), out char(9))
		returns character as
$BODY$
	delete from applications
		where stud_id = $1	
	returning stud_id;
$BODY$
language 'sql';
---------------------------------------------------------
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

----------------------------------------------------------------
create or replace function
	setcancelstatus(p_stud_id char(9), p_course_fk int, p_college_fk int)
    returns text as

$$
  declare
     v_stud_id char(9);
     v_course_fk int;
     v_college_fk int;

  begin
    select into v_stud_id stud_id from applications
        where stud_id = p_stud_id and course_fk = p_course_fk and college_fk = p_college_fk;
        
    if v_stud_id isnull then
	  return 'STUDENT ID NOT FOUND!';
    else
	update applications
            set status = 'Cancelled'
            where stud_id = p_stud_id and course_fk = p_course_fk and college_fk = p_college_fk;
	return 'SET';
    end if;
	
  end;
$$
  language 'plpgsql';

-----------------------------------------------------------------
create or replace function
	searchstatus(in char(9), out char(9), out text)
returns setof record as

$$

select stud_id, status from applications
where stud_id = $1;

$$

language 'sql';
-------------------------------------------------------------------
----this is for the show students per course
create or replace function
	getreg(in int, in int, out char(9), out text, out text, out text, out text)
returns setof record as

$$

select personal_info.stud_id, personal_info.nameFirst, personal_info.nameMid, personal_info.nameLast, applications.status from personal_info
INNEr join applications on applications.stud_id = personal_info.stud_id
where college_fk = $1 and course_fk = $2;

$$

language 'sql';
