create table boxes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  title text not null,
  description text,
  created_at timestamp with time zone not null default current_timestamp,
  updated_at timestamp with time zone not null default current_timestamp
);

create table knowledges (
  id uuid primary key default gen_random_uuid(),
  box_id uuid references boxes(id) on delete cascade,
  title text not null,
  content text not null, -- Markdownでも可
  created_at timestamp with time zone not null default current_timestamp,
  updated_at timestamp with time zone not null default current_timestamp
);
