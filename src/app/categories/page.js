'use client';

import React from 'react';
import Link from 'next/link';
import { categories } from '../../data/sidebarData';

const CategoriesPage = () => {
    const renderCategories = (categories, level = 0) => {
        return categories.map((category, index) => (
            <div key={index} className={`ml-${level * 4}`}>
                <Link 
                    href={`/categories/${encodeURIComponent(category.name)}`}
                    className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition duration-300 block mb-4"
                >
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                        {category.name}
                        <span className="text-sm font-normal ml-2 text-gray-600 dark:text-gray-400">
                            ({category.articleCount}篇文章)
                        </span>
                    </h2>
                </Link>
                {category.children && renderCategories(category.children, level + 1)}
            </div>
        ));
    };

    return (
        <div className="container mx-auto px-4 p bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">分类</h1>
            <div className="space-y-4">
                {renderCategories(categories)}
            </div>
        </div>
    );
};

export default CategoriesPage;