create or replace function 
	get_header_perid(in char(9), out char(9), out text, out text, out text, 
	                 out int, out int, out int, out text, out text, out text, 
					 out text, out text, out text, out text, out text, out text, out text)
returns setof record as

$$

select stud_id, nameFirst, nameMid, nameLast, birthdate, birthMonth, birthYear, homeAdress, 
       father_nameFirst, father_nameMid, father_nameLast, mother_nameFirst, mother_nameMid, 
	   mother_nameLast, dissertation, special_project, thesis_title from allinfo
	   
	   where stud_id = $1;
	   
$$
