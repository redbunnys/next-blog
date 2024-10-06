'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ArticleCard from '../../../components/ArticleCard';
import { articles } from '../../../data/articles';

const TagPage = () => {
    const { id } = useParams();
    const decodedTag = decodeURIComponent(id);
    const filteredArticles = articles.filter(article => article.tags.includes(decodedTag));

    return (
        <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">标签: {decodedTag}</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
            {filteredArticles.length === 0 && (
                <p className="text-gray-600 dark:text-gray-400">该标签下暂无文章。</p>
            )}
        </div>
    );
};

export default TagPage;