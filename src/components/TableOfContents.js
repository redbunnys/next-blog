import React from 'react';
import slugify from 'slugify'; // 需要安装 slugify 包

const TableOfContents = ({ sections }) => {
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-[250px]">
            <h3 className="text-lg font-semibold mb-2">目录</h3>
            <ul className="space-y-2 text-sm">
                {sections.map((section, index) => {
                    const title = section.replace(/^## /, '');
                    const id = slugify(title, { lower: true });
                    return (
                        <li key={index}>
                            <a 
                                href={`#${id}`} 
                                className="text-blue-600 hover:underline"
                                onClick={(e) => handleClick(e, id)}
                            >
                                {title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TableOfContents;