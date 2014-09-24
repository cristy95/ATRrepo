create table courses
(
	course_id int primary key,
	course_name text,
	college_id_fk int references colleges(college_id)
)


create or replace
    function setcourse (p_course_name text, p_college_id_fk int)
    returns text as

$$
  declare
     v_course_name text;

  begin
    select into v_course_name course_name from courses
        where course_name = p_course_name;

    if v_course_name isnull then
        insert into courses(course_name, college_id_fk) values (p_course_name, p_college_id_fk);
    else
        return 'Unable to Set';
    end if;

    return 'Done';
  end;
$$
  language 'plpgsql';

-------------------------------------
create or replace function
    getcourse(in int, out text)
returns text as
$$
    select course_name from courses
    where course_id = $1;
$$
    language 'sql';



