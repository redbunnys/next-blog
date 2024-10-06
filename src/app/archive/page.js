import React from 'react';
import Link from 'next/link';
import { articles } from '@/data/articles';

function groupArticlesByYearAndMonth(articles) {
    const grouped = {};
    articles.forEach(article => {
        const date = new Date(article.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // JavaScript 月份从 0 开始，所以要加 1
        if (!grouped[year]) {
            grouped[year] = {};
        }
        if (!grouped[year][month]) {
            grouped[year][month] = [];
        }
        grouped[year][month].push(article);
    });
    return grouped;
}

export default function ArchivePage() {
    const groupedArticles = groupArticlesByYearAndMonth(articles);
    const years = Object.keys(groupedArticles).sort((a, b) => b - a);

    return (
        <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">文章归档</h1>
                <div className="space-y-6">
                    {years.map(year => (
                        <div key={year} className="mb-6">
                            <h2 className="text-2xl font-semibold mb-4">{year}年</h2>
                            {Object.entries(groupedArticles[year])
                                .sort(([a], [b]) => b - a)
                                .map(([month, monthArticles]) => (
                                    <div key={month} className="ml-6 mb-4">
                                        <h3 className="text-xl font-medium mb-2">{month}月</h3>
                                        <ul className="list-disc list-inside space-y-2">
                                            {monthArticles.map(article => (
                                                <li key={article.id}>
                                                    <Link href={`/articles/${article.id}`} className="hover:underline">
                                                        <span className="text-gray-500 mr-2">
                                                            {new Date(article.date).toLocaleDateString('zh-CN', { day: '2-digit' })}:
                                                        </span>
                                                        {article.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}