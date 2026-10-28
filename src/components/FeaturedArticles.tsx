import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { ArticlesData } from '../data/articles_data';
import { slugify } from '../utils/slugify';

const FeaturedArticles: React.FC = () => {
  const navigate = useNavigate();
  const sortedArticles = [...ArticlesData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Show first 3 articles as featured
  const featuredArticles = sortedArticles.slice(0, 3);

  const resolveImage = (img: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const src = img.startsWith('http') || img.startsWith('/') ? img : `${baseUrl}${img}`;
    return encodeURI(src);
  };

  const handleArticleClick = (id: number, title: string) => {
    navigate(`/article/${slugify(title)}/${id}`);
  };

  return (
    <section className="py-20 bg-[#f1f5f9] dark:bg-[#111b2b]" id="articles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Insights and thoughts on software development, technology trends, and best practices
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => handleArticleClick(article.id, article.title)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleArticleClick(article.id, article.title);
              }}
              role="button"
              tabIndex={0}
              className="cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={resolveImage(article.image)}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-sky-700 text-white dark:bg-sky-500 dark:text-slate-950 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/article/${slugify(article.title)}/${article.id}`}
                  className="inline-flex items-center gap-2 text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200 font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 bg-sky-700 dark:bg-sky-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-800 dark:hover:bg-sky-400 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;