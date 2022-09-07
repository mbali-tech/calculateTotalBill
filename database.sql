
create table users (
    id serial primary key,
    username text not null,
    plan_id integer not null
)
    
);

create table price_plan (
    id serial not null primary key ,
    plan_name text not null,
    sms_price int not null,
    call_price int not null
);