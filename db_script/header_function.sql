create or replace function 
	get_header_perid(in char(9), out char(9), out text, out text, out text, 
	                 out int, out int, out int, out text, out text, out text, 
					 out text, out text, out text, out text, out text, out text, out text)
returns setof record as

$$

select stud_id, nameFirst, nameMid, nameLast, birthdate, birthMonth, birthYear, homeAddress, 
       father_nameFirst, father_nameMiddle, father_nameLast, mother_nameFirst, mother_nameMiddle, 
	   mother_nameLast, dissertation, special_project, thesis_title from allinfo
	   
	   where stud_id = $1;
	   
$$

language 'sql';