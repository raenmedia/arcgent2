/*
  # Create Waitlist Table

  ## Summary
  Creates a table to store email addresses for the waitlist feature, allowing users to sign up for early access.

  ## Changes

  ### 1. New Tables
  - `waitlist`
    - `id` (uuid, primary key) - Unique identifier for each waitlist entry
    - `email` (text, unique, not null) - Email address of the person joining the waitlist
    - `created_at` (timestamptz, default now()) - Timestamp when the entry was created
    - `status` (text, default 'pending') - Status of the waitlist entry (pending, invited, etc.)

  ### 2. Security
  - Enable Row Level Security on `waitlist` table
  - Add policy allowing anyone to insert their email (public access for signup)
  - Add policy restricting read access to authenticated users only (for admin purposes)

  ### 3. Important Notes
  - The email field is unique to prevent duplicate signups
  - Public insert access is intentionally allowed for waitlist signup
  - Read access is restricted for privacy protection
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON waitlist
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);
