import React from 'react';
import Link from 'next/link';
import {getRandomColor} from '../utils/RandomColorUtils'
import { FaRegCopyright, FaLink, FaEye, FaCalendarAlt } from 'react-icons/fa';



const SiteInfo = ({ totalVisits, todayVisits, foundingDate }) => {
    const friendlyLinks = [
        { name: '链接1', url: 'https://example1.com' },
        { name: '链接2', url: 'https://example2.com' },
        { name: '链接3', url: 'https://example3.com' },
        { name: '链接4', url: 'https://example4.com' },
        { name: '链接5', url: 'https://example5.com' },
    ];

    return (
        <div className="  p-1 mt-6 mb-4">
            <div className="space-y-4 text-sm">
                <div className="flex flex-col items-start">
                    <p className="text-gray-600 flex items-center">
                        <FaRegCopyright className="mr-2 text-gray-500" />
                        备案号：
                    </p>
                    <p className="text-gray-800 mt-2 ">粤ICP备XXXXXXXX号-X</p>
                </div>
                <div>
                    <p className="text-gray-600 mb-2 flex items-center">
                        <FaLink className="mr-2 text-gray-500" />
                        友情链接：
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {friendlyLinks.map((link, index) => (
                            <Link key={index} href={link.url} className={`${getRandomColor()} text-xs text-gray-700 px-2 py-1 rounded shadow hover:opacity-80 transition-opacity`}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="border-t pt-4">
                    <p className="text-gray-600 flex items-center">
                        <FaEye className="mr-2 text-gray-500" />
                        总访问量：<span className="text-gray-800 font-medium ml-1">{totalVisits}</span>
                    </p>
                    <p className="text-gray-600 flex items-center mt-2">
                        <FaEye className="mr-2 text-gray-500" />
                        今日访问：<span className="text-gray-800 font-medium ml-1">{todayVisits}</span>
                    </p>
                    <p className="text-gray-600 flex items-center mt-2">
                        <FaCalendarAlt className="mr-2 text-gray-500" />
                        建站时间：<span className="text-gray-800 font-medium ml-1">{foundingDate}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SiteInfo;