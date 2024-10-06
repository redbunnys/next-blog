import React, { useState } from 'react';

const TreeNode = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="ml-4">
            <div className="flex items-center">
                <span className="w-4 mr-2">
                    {hasChildren && (
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 focus:outline-none">
                            {isOpen ? '▼' : '►'}
                        </button>
                    )}
                </span>
                <span className="text-gray-700">{node.name}</span>
            </div>
            {isOpen && hasChildren && (
                <div className="ml-4">
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Tree = ({ title, data }) => (
    <>
        <h2 className="text-lg font-bold mt-6 mb-4">{title}</h2>
        {data.map((node, index) => (
            <TreeNode key={index} node={node} />
        ))}
    </>
);

export default Tree;