/*
  # Create Blog Articles Table

  ## Summary
  Creates a table to store blog articles with full SEO support, including meta descriptions, slugs, and published status.

  ## Changes

  ### 1. New Tables
  - `blog_articles`
    - `id` (uuid, primary key) - Unique identifier for each article
    - `title` (text, not null) - Article title
    - `slug` (text, unique, not null) - URL-friendly identifier
    - `meta_description` (text) - SEO meta description
    - `content` (text, not null) - Full article content in markdown or HTML
    - `published` (boolean, default false) - Whether the article is published
    - `published_at` (timestamptz) - When the article was published
    - `created_at` (timestamptz, default now()) - When the article was created
    - `updated_at` (timestamptz, default now()) - When the article was last updated

  ### 2. Security
  - Enable Row Level Security on `blog_articles` table
  - Add policy allowing anyone to read published articles (public access)
  - Add policy allowing authenticated users to manage all articles (admin access)

  ### 3. Important Notes
  - The slug field is unique to ensure clean URLs
  - Public read access is only for published articles
  - Unpublished articles are only visible to authenticated users
*/

CREATE TABLE IF NOT EXISTS blog_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  meta_description text,
  content text NOT NULL,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published articles"
  ON blog_articles
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can view all articles"
  ON blog_articles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert articles"
  ON blog_articles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update articles"
  ON blog_articles
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete articles"
  ON blog_articles
  FOR DELETE
  TO authenticated
  USING (true);
