'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ArticleCard from '../../../components/ArticleCard';
import { articles } from '../../../data/articles';
import { categories } from '../../../data/sidebarData';

const CategoryPage = () => {
    const { id } = useParams();
    const decodedCategory = decodeURIComponent(id);
    
    // 递归查找分类及其子分类
    const findCategory = (categories, name) => {
        for (let category of categories) {
            if (category.name === name) {
                return category;
            }
            if (category.children) {
                const found = findCategory(category.children, name);
                if (found) return found;
            }
        }
        return null;
    };

    const category = findCategory(categories, decodedCategory);

    // 递归获取所有子分类名称
    const getAllSubCategories = (category) => {
        let names = [category.name];
        if (category.children) {
            category.children.forEach(child => {
                names = names.concat(getAllSubCategories(child));
            });
        }
        return names;
    };

    const categoryNames = category ? getAllSubCategories(category) : [];

    const filteredArticles = articles.filter(article => 
        categoryNames.includes(article.category)
    );

    return (
        <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">分类: {decodedCategory}</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
            {filteredArticles.length === 0 && (
                <p className="text-gray-600 dark:text-gray-400">该分类下暂无文章。</p>
            )}
        </div>
    );
};

export default CategoryPage;