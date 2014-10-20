create table courses
(
	course_id int primary key,
	course_name text,
	college_id_fk int references colleges(college_id)
);

insert into courses(course_id,course_name,college_id_fk) values (1,'BS Computer Science',1);
insert into courses(course_id,course_name,college_id_fk) values (2,'BS Information Technology',1);
insert into courses(course_id,course_name,college_id_fk) values (3,'BS Information System',1);
insert into courses(course_id,course_name,college_id_fk) values (4,'BS Electronics and Computer Technology',1);
insert into courses(course_id,course_name,college_id_fk) values (5,'BS Chemical Engineering Technology',11);
insert into courses(course_id,course_name,college_id_fk) values (6,'BS Mathematics',21);
insert into courses(course_id,course_name,college_id_fk) values (7,'BS Physics',21);
insert into courses(course_id,course_name,college_id_fk) values (8,'BSE Mathematics',31);
insert into courses(course_id,course_name,college_id_fk) values (9,'BSE Physics',31);
insert into courses(course_id,course_name,college_id_fk) values (10,'BS Electrical Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (11,'BS Electronics and Communication Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (12,'BS Nursing',51);
insert into courses(course_id,course_name,college_id_fk) values (13,'BS Accountancy',61);
insert into courses(course_id,course_name,college_id_fk) values (14,'BSBA Business Economics',61);
insert into courses(course_id,course_name,college_id_fk) values (15,'AB English',71);
insert into courses(course_id,course_name,college_id_fk) values (16,'AB History',71);
insert into courses(course_id,course_name,college_id_fk) values (17,'AB Filipino',71);
insert into courses(course_id,course_name,college_id_fk) values (18,'AB Political Science',71);
insert into courses(course_id,course_name,college_id_fk) values (19,'BS Psychology',71);
insert into courses(course_id,course_name,college_id_fk) values (20,'BS Civil Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (21,'BS Ceramics Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (22,'BS Chemical Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (23,'BS Computer Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (24,'BS Mining Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (25,'BS Environmental Engineering Technology',41);
insert into courses(course_id,course_name,college_id_fk) values (26,'BS Mechanical Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (27,'BS Metallurgical Engineering',41);
insert into courses(course_id,course_name,college_id_fk) values (28,'BS Biology(Botany)',21);
insert into courses(course_id,course_name,college_id_fk) values (29,'BS Chemistry',21);
insert into courses(course_id,course_name,college_id_fk) values (30,'BS Biology(Zoology)',21);
insert into courses(course_id,course_name,college_id_fk) values (31,'BS Biology(Marine)',21);
insert into courses(course_id,course_name,college_id_fk) values (32,'BS Biology(General)',21);
insert into courses(course_id,course_name,college_id_fk) values (33,'BS Statistics',21);
insert into courses(course_id,course_name,college_id_fk) values (34,'BSE Biology',31);
insert into courses(course_id,course_name,college_id_fk) values (35,'BS Industrial Education(Drafting)',31);
insert into courses(course_id,course_name,college_id_fk) values (36,'BSE Chemistry',31);
insert into courses(course_id,course_name,college_id_fk) values (37,'BSE MAPEH',31);
insert into courses(course_id,course_name,college_id_fk) values (38,'BSE TLE',31);
insert into courses(course_id,course_name,college_id_fk) values (39,'BSE General Science',31);
insert into courses(course_id,course_name,college_id_fk) values (40,'BEE English',31);
insert into courses(course_id,course_name,college_id_fk) values (41,'BEE Science and Health',31);
insert into courses(course_id,course_name,college_id_fk) values (42,'BSTTE Industrial Technology',31);
insert into courses(course_id,course_name,college_id_fk) values (43,'BSTTE Drafting Technology',31);
insert into courses(course_id,course_name,college_id_fk) values (44,'BS Hotel and Restaurant Management',61);
insert into courses(course_id,course_name,college_id_fk) values (45,'BSBA Economics',61);
insert into courses(course_id,course_name,college_id_fk) values (46,'BSBA Entrepreneurial Marketing',61);
insert into courses(course_id,course_name,college_id_fk) values (47,'Diploma in Industrial Automation Maintenance Technology',11);
insert into courses(course_id,course_name,college_id_fk) values (48,'Diploma in Automotive Engineering Technology',11);
insert into courses(course_id,course_name,college_id_fk) values (49,'Diploma in Electrical Engineering Technology',11);
insert into courses(course_id,course_name,college_id_fk) values (50,'Diploma in Mechanical Engineering Technology',11);
insert into courses(course_id,course_name,college_id_fk) values (51,'Diploma in Civil Engineering Technology',11);
insert into courses(course_id,course_name,college_id_fk) values (52,'BS Industrial Automation and Mechatronics',11);
insert into courses(course_id,course_name,college_id_fk) values (53,'Material Science and Engineering Technology',11);
insert into courses(course_id,course_name,college_id_fk) values (54,'BS Engineering Technology Management',11);
insert into courses(course_id,course_name,college_id_fk) values (55,'Diploma in Industrial Automation & Control Engineering Technology',11);
insert into courses(course_id,course_name,college_id_fk) values (56,'Diploma in HVACR Engineering Technology',11);


create or replace
    function setcourse (p_course_name text, p_college_id_fk int)
    returns text as

$$
  declare
     v_course_name text;

  begin
    select into v_course_name course_name from courses
        where course_name = p_course_name;

    if v_course_name isnull then
        insert into courses(course_name, college_id_fk) values (p_course_name, p_college_id_fk);
    else
        return 'Unable to Set';
    end if;

    return 'Done';
  end;
$$
  language 'plpgsql';

-------------------------------------
create or replace function
    getcourse(in int, out text)
returns text as
$$
    select course_name from courses
    where course_id = $1;
$$
    language 'sql';



