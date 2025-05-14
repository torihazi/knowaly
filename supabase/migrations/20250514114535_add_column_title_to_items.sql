alter table items add column title varchar(30);

update items set title = 'test';

alter table items
add constraint check_title_length check (char_length(title) >= 1 AND char_length(title) <= 30);

alter table items alter column title set not null;



