import React from 'react';

const bgColors = [
    'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-indigo-100',
    'bg-purple-100', 'bg-pink-100', 'bg-gray-100', 'bg-teal-100', 'bg-orange-100',
    'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200', 'bg-indigo-200',
    'bg-purple-200', 'bg-pink-200', 'bg-gray-200', 'bg-teal-200', 'bg-orange-200'
];

const getRandomColor = () => {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
};

const TagList = ({ title, items }) => (
    <>
        <h2 className="text-lg font-bold mt-6 mb-4">{title}</h2>
        <div className="flex flex-wrap gap-2">
            {items.map((item, index) => {
                const bgColorClass = getRandomColor();
                return (
                    <span 
                        key={index} 
                        className={`text-xs text-gray-700 px-2 py-1 rounded shadow ${bgColorClass}`}
                    >
                        #{item}
                    </span>
                );
            })}
        </div>
    </>
);

export default TagList;