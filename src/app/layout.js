import React from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import "./globals.css";  // 导入全局样式

// 定义布局组件，接收 children 作为参数
const Layout = ({ children }) => {
    return (
        <html lang="zh">
            <meta></meta>
            <body>
                {/* 整体页面容器 */}
                <div className="flex flex-col items-center w-full mx-auto min-h-screen">
                    {/* 页面头部 */}
                    <header className="w-full bg-gray-100 p-5 shadow">
                        <nav>
                            {/* 导航菜单 */}
                            <ul className="flex space-x-4 list-none p-0">
                                <li><Link href="/">首页</Link></li>
                                <li><Link href="/articles">文章</Link></li>
                                <li><Link href="/categories">分类</Link></li>
                            </ul>
                        </nav>
                    </header>
                    {/* 主要内容区域 */}
                    <div className="flex flex-1 flex-row max-w-[1024px] w-full">
                        {/* 主内容 */}
                        <main className="flex-1 p-2">
                            {children}
                        </main>
                        {/* 侧边栏容器 */}
                        <div className="w-1/4 relative">
                            {/* 使侧边栏固定并在滚动时保持位置 */}
                            <div className="sticky top-4 mt-2">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default Layout;
