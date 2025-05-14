alter table items
rename constraint boxes_user_id_fkey to items_user_id_fkey;

alter table items
rename constraint boxes_pkey to items_pkey;