import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Article {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  content: string;
  published_at: string;
}

const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchArticle(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (article) {
      document.title = article.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.meta_description || '');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = article.meta_description || '';
        document.head.appendChild(meta);
      }
    }
  }, [article]);

  const fetchArticle = async (slug: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setError('Article not found');
      } else {
        setArticle(data);
      }
    } catch (error) {
      console.error('Error fetching article:', error);
      setError('Failed to load article');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-slate-500">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-500 mb-6">{error || 'Article not found'}</p>
          <Link to="/blog" className="text-slate-900 font-medium hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
      <article className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="bg-white rounded-xl border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Calendar className="w-4 h-4" />
            <time>{formatDate(article.published_at)}</time>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {article.meta_description && (
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {article.meta_description}
            </p>
          )}

          <div
            className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4 prose-li:text-slate-700 prose-strong:text-slate-900 prose-a:text-slate-900 prose-a:font-medium hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogArticle;
