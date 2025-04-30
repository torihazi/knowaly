create table if not exists users (
  id uuid primary key references auth.users(id) on delete cascade,
  username varchar(30) not null,
  email varchar(255) unique not null,
  avatar_url text,
  created_at timestamp with time zone not null default current_timestamp,
  updated_at timestamp with time zone not null default current_timestamp
);

create index on users (email);

alter table users enable row level security;

create policy "Users can view their own profiles" on users for select using (auth.uid() = id);

create policy "Users can update their own profiles" on users for update using (auth.uid() = id);

