drop table if exists person cascade;
drop table if exists trip cascade;
drop table if exists team cascade;

create table person(
	 id serial primary key
	,lname varchar(50)
	,fname varchar(50)
	,pwd varchar(10)
	,imgurl text
);

create table trip(
	id serial primary key
	,leader_id int references person(id)
	,country varchar(50)
	,city varchar(50)
	,start_addr text
	,end_addr text
	,meet_date date
	,meet_time time
);

create table team(
	id serial primary key
	,trip_id int references trip(id)
	,person_id int references person(id)
)


