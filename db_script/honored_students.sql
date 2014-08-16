create table honored_students(
	stud_id char(9),
	dissertation text,
	special_project text,
	thesis_title text
);

--controller
create or replace
	function set_hon_stud(p_stud_id char(9), p_dissertation text, p_special_project text, p_thesis_title text)
		returns text as

$BODY$
 declare
	v_stud_id char(9);
begin
	select into v_stud_id stud_id from honored_students
		where stud_id = p_stud_id;
	if v_stud_id isnull then
		insert into honored_students(stud_id, dissertation, special_project, thesis_title) values (p_stud_id, p_dissertation, p_special_project, p_thesis_title);
	else
		update honored_students
			set dissertation = p_dissertation, set special_project = p_special_project, set thesis_title = p_thesis_title
			where stud_id = p_stud_id;
	end if;
	
	return 'set';
end;
$BODY$
language 'plpgsql';

--view
create or replace 
	function get_hon_stud(in char(9), out char(9), out text, out text, out text)
		returns setof record as
$$
	select stud_id, dissertation, special_project, thesis_title from honored_students
	where stud_id = $1;
$$
language 'sql';
<<<<<<< HEAD
=======

>>>>>>> 7e51be9c04d265776c70779383b67e7ead293e22

create or replace
	function get_list_hs(out char(9), out text, out text, out text)
		returns setof record as
$$
	select * from honored_students;
$$
language 'sql';

