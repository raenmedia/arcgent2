import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  published_at: string;
}

const BlogList: React.FC = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_articles')
        .select('id, title, slug, meta_description, published_at')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
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
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-500">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Blog</h1>
        <p className="text-xl text-slate-600 mb-16">
          Insights on AI agents, process design, and automation best practices.
        </p>

        {articles.length === 0 ? (
          <p className="text-center text-slate-500">No articles published yet.</p>
        ) : (
          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="block bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <time>{formatDate(article.published_at)}</time>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-slate-700 transition-colors">
                  {article.title}
                </h2>
                {article.meta_description && (
                  <p className="text-slate-600 mb-4 line-clamp-3">{article.meta_description}</p>
                )}
                <div className="flex items-center gap-2 text-slate-900 font-medium">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
