create table status
(
	status_id serial primary key,
	appli_id char(9),
	stat text
)


create or replace
    function setstatus (p_appli_id int, p_stat text)
    returns text as

$$
  declare
     v_appli_id int;

  begin
    select into v_appli_id appli_id from status
        where appli_id = p_appli_id;

    if v_appli_id isnull then
        insert into status(appli_id, stat) values (p_appli_id, p_stat);
    else
        return 'Unable to Set';
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
    select stud_id, status from status
    where stud_id = $1;
$$
    language 'sql';
