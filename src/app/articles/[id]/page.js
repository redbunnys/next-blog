'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { articles } from '../../../data/articles';
import ArticleContent from '../../../components/ArticleContent';

const ArticlePage = () => {
    const params = useParams();
    const id = params.id;
    const article = articles.find(article => parseInt(article.id) === parseInt(id));
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (article) {
            setIsLoaded(true);
        }
    }, [article]);

    useEffect(() => {
        if (article) {
            const extractedSections = extractSectionsFromContent(article.content);
            window.dispatchEvent(new CustomEvent('updateSections', { detail: extractedSections }));
        }
    }, [article]);

    function extractSectionsFromContent(content) {
        // 这只是一个简单的实现示例，你可能需要根据实际情况调整
        const lines = content.split('\n');
        const sections = [];
        
        for (const line of lines) {
            if (line.startsWith('## ')) {
                sections.push({
                    title: line.substring(3).trim(),
                    id: line.substring(3).trim().toLowerCase().replace(/\s+/g, '-')
                });
            }
        }
        
        return sections;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <ArticleContent article={article} />
        </div>
    );
};

export default ArticlePage;