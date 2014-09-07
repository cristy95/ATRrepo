create table orgs(

	stud_id char(9) primary key,
	org_Name text, --Organization Name
	org_Pos text, --Organization Position
	org_AcYr text, --Organization Academic Year
	stud_aA_cA text, --Academic Achievements/Co-curricular Awards
	stud_schGra text --Scholarship Grants

);

--controller

create or replace
	function addOrgs(p_stud_id char(9), p_org_Name text, p_org_Pos text, p_org_AcYr text,\
	p_stud_aA_cA text, p_stud_schGra text)
	
	returns text as
$$
declare
	v_stud_id char(9);

begin
	select into v_stud_id stud_id from orgs
		where v_stud_id = p_stud_id;

	if v_stud_id isnull then
		insert into orgs(stud_id, org_Name, org_Pos, org_AcYr, stud_aA_cA, stud_schGra)\
		values (p_stud_id, p_org_Name, p_org_Pos, p_org_AcYr, p_stud_aA_cA, p_stud_schGra);

	else
		update orgs
			set org_Name = p_org_Name
			where stud_id = p_stud_id;
		update orgs
			set org_Pos = p_org_Pos
			where stud_id = p_stud_id;
		update orgs
			set org_AcYr = p_org_AcYr
			where stud_id = p_stud_id;
		update orgs
			set stud_aA_cA = p_stud_aA_cA
			where stud_id = p_stud_id;
		update orgs
			set stud_schGra = p_stud_schGra
			where stud_id = p_stud_id;
	end if;
	return 'OK';
end
$$

--view

create or replace
	function get_orgs_perid(in char(9), out char(9), out text, out text, out text,\
	out text, out text)
	
returns setof record as
$$
	select stud_id, org_Name, org_Pos, org_AcYr, stud_aA_cA, stud_schGra from orgs
	where stud_id = $1;

$$

language 'sql';

create or replace
	function get_orgs(out char(9), out text, out text, out text, out text, out text)
	
returns setof record as
$$
	select * from orgs;

$$

-- How to use:
-- select * from get_orgs_perid(1);
-- select * from get_orgs();