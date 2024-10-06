'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import Sidebar from './Sidebar';
import TableOfContents from '../components/TableOfContents';
import "./globals.css";  // 导入全局样式
import { HomeIcon, TagIcon, FolderIcon, ArchiveBoxIcon, MoonIcon, SunIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// 定义布局组件，接收 children 作为参数
const Layout = ({ children }) => {
    const [sections, setSections] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    useEffect(() => {
       

        const handleUpdateSections = (event) => {
            setSections(event.detail);
            console.log("Sections updated:", event.detail);
        };

        window.addEventListener('updateSections', handleUpdateSections);

        // 当路径改变时，不要重置 sections
        //  setSections([]);

        return () => {
            window.removeEventListener('updateSections', handleUpdateSections);
        };
    }, [pathname, sections]);

    // 修改判断逻辑，使用 includes 而不是 startsWith 目前目录需要重新设计
    // const isArticlePage = pathname.includes('/articles/');
    const isArticlePage = false;
   

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // 这里实现搜索逻辑
        // console.log('Searching for:', searchQuery);
        // 可以跳转到搜索结果页面或者在当前页面显示结果
    };

    return (
        <html lang="zh" className={theme}>
            <head>
                <meta charSet="utf-8" />
                <title>Your Site Title</title>
            </head>
            <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <header className="w-full bg-gray-100 dark:bg-gray-800 p-5 shadow">
                    <nav className="max-w-7xl mx-auto flex justify-between items-center">
                        <ul className="flex space-x-4 list-none p-0">
                            <NavItem href="/" icon={<HomeIcon className="w-5 h-5" />} text="首页" />
                            <NavItem href="/tags" icon={<TagIcon className="w-5 h-5" />} text="标签" />
                            <NavItem href="/categories" icon={<FolderIcon className="w-5 h-5" />} text="分类" />
                            <NavItem href="/archive" icon={<ArchiveBoxIcon className="w-5 h-5" />} text="归档" />
                        </ul>
                        <div className="flex items-center space-x-4">
                            <form onSubmit={handleSearch} className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="搜索..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="px-2 py-1 rounded-l-md border-2 border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                />
                                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-r-md hover:bg-blue-600 focus:outline-none">
                                    <MagnifyingGlassIcon className="w-5 h-5" />
                                </button>
                            </form>
                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        </div>
                    </nav>
                </header>
                <div className="flex flex-col min-h-screen w-full">
                    <div className="flex-1 flex justify-center">
                        <div className="flex w-full max-w-7xl px-2">
                            <div className="w-1/6 flex-shrink-0">
                                <div className="sticky top-4">
                                    <Sidebar />
                                </div>
                            </div>
                            <main className="flex-grow px-2">
                                {children}
                            </main>
                            <div className="w-1/6 flex-shrink-0 mt-4">
                                {isArticlePage && sections && sections.length > 0 && (
                                    <div className="sticky top-4">
                                        <TableOfContents sections={sections} />
                                        {console.log("TableOfContents rendered")}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};

const NavItem = ({ href, icon, text }) => (
    <li>
        <Link href={href} className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            {icon}
            <span>{text}</span>
        </Link>
    </li>
);

const ThemeToggle = ({ theme, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
        {theme === 'dark' ? (
            <SunIcon className="w-5 h-5 text-gray-200" />
        ) : (
            <MoonIcon className="w-5 h-5 text-gray-700" />
        )}
    </button>
);

export default Layout;
