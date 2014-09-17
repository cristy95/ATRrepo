create table status
{
	status_id serial primary key;
	stud_id_fk char(9) reference personal_info (stud_id);
	status text;
}


create or replace
    function setstatus (p_stud_id_fk char(9), p_status text)
    returns text as

$$
  declare
     v_stud_id_fk text;

  begin
    select into v_stud_id_fk stud_id_fk from status
        where stud_id_fk = p_stud_id_fk;

    if v_stud_id_fk isnull then
        insert into status(status) values (p_status);
    else
        return 'Unable to Set'
    end if;

    return 'Done';
  end;
$$
  language 'plpgsql';

-------------------------------------
create or replace function
    getstatus(in char, out char, out text)
returns text as
$$
    select * from status
    where status_id_fk = $1;
$$
    language 'sql';
