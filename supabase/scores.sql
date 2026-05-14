-- Leaderboard scores table
-- Run this once in Supabase SQL editor

create table if not exists scores (
  id         uuid primary key,
  name       text not null default 'Gaeilgeoir',
  xp         int  not null default 0,
  lessons    int  not null default 0,
  streak     int  not null default 0,
  updated_at timestamptz default now()
);

alter table scores enable row level security;

create policy "Anyone can read scores"
  on scores for select using (true);

create policy "Users can insert own score"
  on scores for insert with check (auth.uid() = id);

create policy "Users can update own score"
  on scores for update using (auth.uid() = id);
