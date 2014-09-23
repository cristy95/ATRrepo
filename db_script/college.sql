create table colleges
(
	college_id serial primary key,
	college_name text
);

create or replace
    function setcollege (p_college_name text)
    returns text as

$$
  declare
     v_college_name text;

  begin
    select into v_college_name college_name from colleges
        where college_name = p_college_name;

    if v_college_name isnull then
        insert into colleges(college_name) values (p_college_name);
    else
        return 'Unable to Set';
    end if;
    return 'Done';
  end;
$$
  language 'plpgsql';

-------------------------------------
create or replace function
    getcollege(in int, out text)
returns text as
$$
    select college_name from colleges
    where college_id = $1;
$$
    language 'sql';

