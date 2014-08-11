create table confirm (
    stud_id char(9),
    status text
    
);

--controller

create or replace
    function setconfirm (stud_id char(9), status text)
    return text as
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
            where idNo = p_stud_id;
    end if;

    return 'Confirmed';
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