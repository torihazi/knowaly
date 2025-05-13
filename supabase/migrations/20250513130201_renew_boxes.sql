
alter table boxes rename to items;

alter table items drop column title;

alter table items rename column description to content;

