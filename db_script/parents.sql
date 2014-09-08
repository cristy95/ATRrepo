create table parents(
  stud_id char(9) primary key,
  father_nameFull text,
  mother_nameFull text
);


--controller 


create or replace
   function addParents(p_stud_id int, p_father_nameFull text, p_mother_nameFull text)
   returns text as
 
$$
 declare
    v_stud_id char(9);
 begin
	select into v_stud_id stud_id from parents
		where v_stud_id = p_stud_id;
		
	if v_stud_id isnull then 
		insert into parents(stud_id, father_nameFull, mother_nameFull) 
		values (p_stud_id, p_father_nameFull, p_mother_nameFull);
			
	else
		update parents
			set father_nameFull = p_father_nameFull
			where stud_id = p_stud_id;
		
		update parents
			set mother_nameFull = p_mother_nameFull
			where stud_id = p_stud_id;
	end if;
	
	return 'OK';
 end
$$
  language 'plpgsql';
--view
create or replace function 
	get_parents_perid(in char(9), out char(9), out text, out text)
returns setof record as

$$
	select stud_id, father_nameFull, mother_nameFull from parents
	where stud_id = $1;
$$

 language 'sql';

-- select * from  get_object_perid(1)