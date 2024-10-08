"use client"; // 标记为客户端组件

import React, { useState, useEffect, useRef } from 'react';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';

const Page = () => {
    const [displayedArticles, setDisplayedArticles] = useState(articles.slice(0, 5));
    const [loading, setLoading] = useState(false);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMoreArticles();
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

    const loadMoreArticles = () => {
        setLoading(true);
        setTimeout(() => {
            setDisplayedArticles(prevArticles => [
                ...prevArticles,
                ...articles.slice(prevArticles.length, prevArticles.length + 5)
            ]);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="  w-full flex  flex-col items-center">
            {displayedArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} isFirst={index === 0} />
            ))}
            <div ref={loadMoreRef} className="mt-5">
                {loading ? <p>加载中...</p> : <p>向下滚动以加载更多文章</p>}
            </div>
        </div>
    );
};

export default Page;