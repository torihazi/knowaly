alter table boxes enable row level security;

-- 自分の box だけ CRUD できる
create policy "user boxes read/write"
  on boxes
  for all
  using  ( user_id = auth.uid() )
  with check ( user_id = auth.uid() );


alter table knowledges enable row level security;

-- 自分が所有する box に属する knowledges だけ CRUD
create policy "user knowledges read/write"
  on knowledges
  for all
  using (
    box_id in (
      select id from boxes where user_id = auth.uid()
    )
  )
  with check (
    box_id in (
      select id from boxes where user_id = auth.uid()
    )
  );
