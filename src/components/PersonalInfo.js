import React from 'react';
import Image from 'next/image';
import { FaGithub, FaQq, FaPlay, FaEnvelope } from 'react-icons/fa';

const PersonalInfo = ({ name, avatar, github, qq, bilibili, email }) => (
    <div className="bg-gray-50 shadow rounded-lg p-4 flex flex-col items-center">
        <div className="mb-4">
            {avatar && (
                <img
                    src={avatar}
                    alt={name}
                    width={80}
                    height={80}
                    className="rounded-full"
                />
            )}
        </div>
        <h2 className="text-xl font-bold mb-4">{name}</h2>
        <div className="flex justify-center space-x-4">
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                    <FaGithub size={24} />
                </a>
            )}
            {qq && (
                <a href={`tencent://message/?uin=${qq}`} className="text-gray-600 hover:text-gray-800">
                    <FaQq size={24} />
                </a>
            )}
            {bilibili && (
                <a href={bilibili} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                    <FaPlay size={24} />
                </a>
            )}
            {email && (
                <a href={`mailto:${email}`} className="text-gray-600 hover:text-gray-800">
                    <FaEnvelope size={24} />
                </a>
            )}
        </div>
    </div>
);

export default PersonalInfo;