-- ATM10 Guide cloud sync setup
-- Run in Supabase SQL Editor.
-- The app must use only a publishable/anon key. Never expose service_role.

create table if not exists public.guide_sync (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.guide_sync enable row level security;
alter table public.guide_sync force row level security;

drop policy if exists "guide_sync_select_own" on public.guide_sync;
create policy "guide_sync_select_own"
on public.guide_sync
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "guide_sync_insert_own" on public.guide_sync;
create policy "guide_sync_insert_own"
on public.guide_sync
for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "guide_sync_update_own" on public.guide_sync;
create policy "guide_sync_update_own"
on public.guide_sync
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "guide_sync_delete_own" on public.guide_sync;
create policy "guide_sync_delete_own"
on public.guide_sync
for delete
to authenticated
using ((select auth.uid()) = user_id);

revoke all on table public.guide_sync from public;
revoke all on table public.guide_sync from anon;
grant usage on schema public to authenticated;
grant select, insert, update, delete on table public.guide_sync to authenticated;

create or replace function public.set_guide_sync_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists guide_sync_updated_at on public.guide_sync;
create trigger guide_sync_updated_at
before update on public.guide_sync
for each row execute function public.set_guide_sync_updated_at();

-- Verification queries (run after setup):
-- 1. Policies should list four rows, all restricted to {authenticated}.
select policyname, roles, cmd, qual, with_check
from pg_catalog.pg_policies
where schemaname = 'public' and tablename = 'guide_sync'
order by policyname;

-- 2. authenticated should have CRUD; anon should have no table privilege.
select
  has_table_privilege('authenticated', 'public.guide_sync', 'select,insert,update,delete') as authenticated_crud,
  has_table_privilege('anon', 'public.guide_sync', 'select,insert,update,delete') as anon_crud;
