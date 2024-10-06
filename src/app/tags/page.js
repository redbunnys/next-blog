'use client';

import React from 'react';
import Link from 'next/link';
import { tags } from '../../data/sidebarData';

const TagsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">标签</h1>
            <div className="flex flex-wrap gap-4">
                {tags.map((tag, index) => (
                    <Link 
                        key={index}
                        href={`/tags/${encodeURIComponent(tag)}`}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition duration-300"
                    >
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TagsPage;