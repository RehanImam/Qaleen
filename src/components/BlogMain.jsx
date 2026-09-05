import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';
import BlogArticle from './BlogArticle';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogMain({ navigateTo }) {
  const [currentArticleSlug, setCurrentArticleSlug] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  // Parse URL to determine if we are in list view or article view
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const article = params.get('article');
    const category = params.get('category');
    
    setCurrentArticleSlug(article);
    setCurrentCategory(category);
  }, [window.location.search]); // Simple dependency, though in App.js it pushes state. 
  
  // A helper function to sync local state if the user navigates via App.js
  useEffect(() => {
    const handlePop = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentArticleSlug(params.get('article'));
      setCurrentCategory(params.get('category'));
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const handleCategorySelect = (categoryId) => {
    setCurrentCategory(categoryId || null);
    if (categoryId) {
      navigateTo('blog', { category: categoryId });
    } else {
      navigateTo('blog');
    }
  };

  const handleArticleClick = (slug) => {
    setCurrentArticleSlug(slug);
    navigateTo('blog', { article: slug });
  };

  const article = currentArticleSlug 
    ? BLOG_POSTS.find(p => p.slug === currentArticleSlug) 
    : null;

  if (article) {
    return (
      <BlogArticle 
        article={article} 
        navigateTo={navigateTo} 
        onBack={() => {
          setCurrentArticleSlug(null);
          navigateTo('blog');
        }} 
      />
    );
  }

  return (
    <BlogList 
      currentCategory={currentCategory} 
      onCategorySelect={handleCategorySelect} 
      onArticleClick={handleArticleClick} 
      navigateTo={navigateTo}
    />
  );
}
