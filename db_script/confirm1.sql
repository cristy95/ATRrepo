create table confirm (
    stud_id char(9) primary key,
    status text
    
);


insert into confirm(stud_id, status)  values ('2012-0186', 'Pending');
insert into confirm(stud_id, status)  values ('2012-1531', 'Confirmed');

--controller

create or replace
    function setconfirm (p_stud_id char(9), p_status text)
    returns text as

$$
  declare
     v_stud_id char(9);

  begin
    select into v_stud_id stud_id from confirm
        where stud_id = p_stud_id;

    if v_stud_id isnull then
        insert into confirm(stud_id, status) values (p_stud_id, p_status);

    else
        update confirm
            set status = p_status
            where stud_id = p_stud_id;
    end if;

    return 'SET';
  end;
$$
  language 'plpgsql';


--view
create or replace function
    get_object_perstud_id(in char(9), out char(9), out text)
returns setof record as
$$
    select stud_id, status from confirm
    where stud_id = $1;
$$
    language 'sql';


--display confirmed
create or replace
    function getconfirmed (in text, out char(9), out text)
returns setof record as
$$
    select stud_id, status from confirm
    where status = $1;
$$
    language 'sql';

	create or replace
	function del_confirm(in char(9), out char(9))
		returns character as
$BODY$
	delete from confirm
		where stud_id = $1	
	returning stud_id;
$BODY$
language 'sql';
