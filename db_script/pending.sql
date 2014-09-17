create table pending(
	stud_id char(9) primary key,
	status text
);

--controller
create or replace
	function set_pending(p_stud_id char(9), 
				p_status text
	returns text as

$BODY$
 declare
	v_stud_id char(9);
begin
	select into v_stud_id stud_id from pending
		where stud_id = p_stud_id;

	if v_stud_id isnull then
		insert into pending (stud_id, 
					status) 
		values (p_stud_id, p_status);
	else
		update pending
		set status = p_status
		where stud_id = p_stud_id;
	end if;
	
	return 'set';
end;
$BODY$
language 'plpgsql';

--view
create or replace 
	function get_pending(in char(9), out char(9), out text)
		returns setof record as
$$
	select stud_id, status 
	from honored_students
	where stud_id = $1;
$$
language 'sql';


create or replace
	function get_list_hs(out char(9), out text, out text, out text)
		returns setof record as
$$
	select * from honored_students;
$$
language 'sql';

create or replace
	function del_studid_hs(in char(9), out char(9))
		returns character as
$BODY$
	delete from honored_students 
		where stud_id = $1	
	returning stud_id;
$BODY$
language 'sql';
