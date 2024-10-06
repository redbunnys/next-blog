import React from 'react';
import Link from 'next/link';
import { truncateString } from '../utils/stringUtils';

const ArticleCard = ({ article, isFirst }) => (
    <Link href={`/articles/${article.id}`} className={`block bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-3xl mb-5 flex flex-col md:flex-row h-full flex-grow transition-transform duration-300 hover:scale-[1.02] hover:z-10 ${isFirst ? 'mt-5' : ''}`}>
        <div className="flex-1 p-5 pl-10 h-full">
            <h2 className="text-2xl font-bold mb-2 text-left text-gray-800">{article.title}</h2>
            <div className="flex flex-wrap mb-2">
                {article.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{tag}</span>
                ))}
            </div>
            <div className="flex flex-row">
                <div className="mb-2 text-gray-600 line-clamp-2">{article.excerpt}</div>
            </div>
            <div className="flex flex-row">
                <div className="text-sm text-gray-500 mb-2">分类: {article.category}</div>
            </div>
            <div className="flex flex-row">
                <div className="text-sm text-gray-500">时间: {article.date}</div>
            </div>
        </div>
        {article.image && (
            <div className="w-full md:w-1/3 p-5 flex justify-end h-full">
                <img src={article.image} alt={article.title} className="rounded-lg w-auto h-36 object-cover" style={{ marginLeft: '10px' }} />
            </div>
        )}
    </Link>
);

export default ArticleCard;