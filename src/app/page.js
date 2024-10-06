"use client"; // 标记为客户端组件

import React, { useState, useEffect, useRef } from 'react';
import ArticleCard from '../components/ArticleCard';
import { loadMoreArticles } from '../utils/articleUtils';
import { initialArticles } from '../data/articles';

const Page = () => {
    const [articles, setArticles] = useState(initialArticles);
    const [loading, setLoading] = useState(false);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMoreArticles(setArticles, setLoading);
            }
        });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [loadMoreRef]);

    return (
        <div className="layout mt-5 w-full flex flex-col items-center">
            {articles.map((article, index) => (
                <ArticleCard key={article.id} article={article} isFirst={index === 0} />
            ))}
            <div ref={loadMoreRef} className="mt-5">
                {loading ? <p>加载中...</p> : <p>向下滚动以加载更多文章</p>}
            </div>
        </div>
    );
};

export default Page;