import React from 'react';

const UserInfo = () => {
    return (
        <aside> {/* 移除所有样式 */}
            <div className="p-5"> {/* 添加样式到内部 div */}
                <div className='bg-gray-50 shadow rounded-lg'>   
                    <h2 className="text-lg font-bold mb-4">个人信息</h2>
                    <p>姓名: 张三</p>
                    <p>职业: 前端开发工程师</p>
                    <p>邮箱: zhangsan@example.com</p>
                    <p>个人网站: <a href="https://example.com" className="text-blue-500 hover:underline">example.com</a></p>
                </div>
            </div>
        </aside>
    );
};

export default UserInfo;
