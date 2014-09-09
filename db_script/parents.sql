create table parents(
  stud_id char(9) primary key,
  father_nameFirst text,
  father_nameMiddle text,
  father_nameLast text,
  mother_nameFirst text,
  mother_nameMiddle text,
  mother_nameLast text,
  guardian_nameFirst text,
  guardian_nameMiddle text,
  guardian_nameLast text,
  spouse_nameFirst text,
  spouse_nameMiddle text,
  spouse_nameLast text
);


--controller 


create or replace
   function addParents(p_stud_id int, p_father_nameFirst text, p_father_nameMiddle 
					   text, p_father_nameLast text, p_mother_nameFirst text, 
					   p_mother_nameMiddle text, p_mother_nameLast text, 
					   p_guardian_nameFirst text, p_guardian_nameMiddle text, 
					   p_guardian_nameLast text, p_spouse_nameFirst text, 
					   p_spouse_nameMiddle text, p_spouse_nameLast text)
   returns text as
 
$$
 declare
    v_stud_id char(9);
 begin
	select into v_stud_id stud_id from parents
		where v_stud_id = p_stud_id;
		
	if v_stud_id isnull then 
		insert into parents(stud_id, father_nameFirst, father_nameMiddle, father_nameLast, mother_nameFirst, mother_nameMiddle, mother_nameLast,
				    guardian_nameFirst, guardian_nameMiddle, guardian_nameLast, spouse_nameFirst, spouse_nameMiddle, spouse_nameLast) 
		values (p_stud_id, p_father_nameFirst, p_father_nameMiddle, p_father_nameLast, p_mother_nameFirst, p_mother_nameMiddle, p_mother_nameLast,
				p_guardian_nameFirst, p_guardian_nameMiddle, p_guardian_nameLast, p_spouse_nameFirst, p_spouse_nameMiddle, p_spouse_nameLast);
			
	else
		update parents
			set father_nameFirst = p_father_nameFirst
			where stud_id = p_stud_id;
		
		update parents
			set father_nameMiddle = p_father_nameMiddle
			where stud_id = p_stud_id;
		
		update parents
			set father_nameLast = p_father_nameLast
			where stud_id = p_stud_id;	
		
		update parents
			set mother_nameFirst = p_mother_nameFirst
			where stud_id = p_stud_id;
		
		update parents
			set mother_nameMiddle = p_mother_nameMiddle
			where stud_id = p_stud_id;
        
		update parents
			set mother_nameLast = p_mother_nameLast
			where stud_id = p_stud_id;
		
		update parents
			set guardian_nameFirst = p_guardian_nameFirst
			where stud_id = p_stud_id;
			
		update parents
			set guardian_nameMiddle = p_guardian_nameMiddle
			where stud_id = p_stud_id;
		
		update parents
			set guardian_nameLast = p_guardian_nameLast
			where stud_id = p_stud_id;
			
		update parents
			set spouse_nameFirst = p_spouse_nameFirst
			where stud_id = p_stud_id;
			
		update parents
			set spouse_nameMiddle = p_spouse_nameMiddle
			where stud_id = p_stud_id;
			
		update parents
			set spouse_nameLast = p_spouse_nameLast
			where stud_id = p_stud_id;
	end if;
	
	return 'OK';
 end
$$
  language 'plpgsql';
--view
create or replace function 
	get_parents_perid(in char(9), out char(9), out text, out text, out text, out text, out text, 
			  out text, out text, out text, out text, out text, out text, out text)
returns setof record as

$$
	select stud_id, father_nameFirst, father_nameMiddle, father_nameLast, 
		    mother_nameFirst, mother_nameMiddle, mother_nameLast, 
		    guardian_nameFirst, guardian_nameMiddle, guardian_nameLast, 
			spouse_nameFirst, spouse_nameMiddle, spouse_nameLast from parents
	where stud_id = $1;
$$

 language 'sql';

-- select * from  get_object_perid(1)