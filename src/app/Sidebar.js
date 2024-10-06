'use client'
import React from 'react';
import PersonalInfo from '../components/PersonalInfo';
import TagList from '../components/TagList';
import Tree from '../components/Tree';
import SiteInfo from '../components/SiteInfo';
import { tags, categories, personalInfo } from '../data/sidebarData';

const Sidebar = () => {
    // 这里可以使用 useState 和 useEffect 来获取实际的访问量数据
    const totalVisits = 10000; // 示例数据，实际应该从后端获取
    const todayVisits = 100; // 示例数据，实际应该从后端获取
    const foundingDate = '2023-01-01'; // 示例数据，实际应该从配置文件或后端获取

    return (
        <aside className="flex flex-col h-full">
            <div className="p-2 flex-grow mt-4" >
                <PersonalInfo {...personalInfo} />
                <TagList title="标签列表" items={tags} />
                <Tree title="分类树" data={categories} />
                <SiteInfo 
                    totalVisits={totalVisits}
                    todayVisits={todayVisits}
                    foundingDate={foundingDate}
                />
            </div>
        </aside>
    );
};

export default React.memo(Sidebar);