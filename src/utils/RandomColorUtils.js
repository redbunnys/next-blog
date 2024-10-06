const bgColors = [
    'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-indigo-100',
    'bg-purple-100', 'bg-pink-100', 'bg-gray-100', 'bg-teal-100', 'bg-orange-100',
    'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200', 'bg-indigo-200',
    'bg-purple-200', 'bg-pink-200', 'bg-gray-200', 'bg-teal-200', 'bg-orange-200'
];

const getRandomColor = () => {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
};

const getRandomColorRgb = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 30) + 70; // 70-100%
    const l = Math.floor(Math.random() * 20) + 70; // 70-90%
    return `hsl(${h}, ${s}%, ${l}%)`;
};

export {getRandomColor, getRandomColorRgb}