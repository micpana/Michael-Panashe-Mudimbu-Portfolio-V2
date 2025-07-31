import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { ArticlesData } from '../data/articles_data';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = ArticlesData.find(a => a.id === parseInt(id || '0'));

  if (!article) {
    return (
      <>
        <Helmet>
          <title>Article Not Found - Michael Panashe Mudimbu</title>
          <meta name="description" content="The article you're looking for doesn't exist." />
        </Helmet>
        <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Article Not Found
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-200"
            >
              <ArrowLeft size={18} />
              Back to Articles
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - Michael Panashe Mudimbu</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <meta property="og:title" content={`${article.title} - Michael Panashe Mudimbu`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.image} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content="Michael Panashe Mudimbu" />
        <meta property="article:section" content={article.category} />
        <meta property="article:tag" content={article.tags.join(', ')} />
        <link rel="canonical" href={`https://michaelmudimbu.netlify.app/article/${article.id}`} />
      </Helmet>
      <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ArrowLeft size={18} />
              Back to Articles
            </Link>
          </div>

          {/* Article Header */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
            {/* Featured Image */}
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-blue-600 text-white font-medium rounded-full">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Tags */}
              <div className="flex items-center gap-2 mb-8">
                <Tag size={16} className="text-gray-500 dark:text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                {article.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim().startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.trim().startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.trim().startsWith('1. ') || paragraph.trim().startsWith('- ')) {
                    return (
                      <li key={index} className="text-gray-600 dark:text-gray-300 mb-2 ml-6">
                        {paragraph.replace(/^[1-9]\. |^- /, '')}
                      </li>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Author Info */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MPM
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Michael Panashe Mudimbu
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Software Developer & Tech Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              More Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {ArticlesData
                .filter(a => a.id !== article.id && a.category === article.category)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/article/${relatedArticle.id}`}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                  >
                    <div className="flex gap-4">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetail;