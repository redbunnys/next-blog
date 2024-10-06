import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import slugify from 'slugify';

const ArticleContent = ({ article }) => {
    if (!article) {
        return <div>文章不存在</div>;
    }

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">{article.title}</h1>
            <div className="flex items-center mb-4 text-sm text-gray-600">
                <span className="mr-4">作者: {article.author || '匿名'}</span>
                <span className="mr-4">发布时间: {article.date}</span>
                <span>分类: {article.category}</span>
            </div>
            <div className="mb-4">
                {article.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{tag}
                    </span>
                ))}
            </div>
            {article.image && (
                <img src={article.image} alt={article.title} className="w-full h-auto rounded-lg mb-6" />
            )}
            {article.content ? (
                <ReactMarkdown 
                    className="prose prose-lg max-w-none"
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h2: ({node, ...props}) => {
                            const id = slugify(props.children[0], { lower: true });
                            return <h2 id={id} className="text-2xl font-bold mt-8 mb-4 scroll-mt-16" {...props} />;
                        },
                        h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4" {...props} />,
                        li: ({node, ...props}) => <li className="mb-2" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-4 italic" {...props} />,
                        code: ({node, inline, ...props}) => 
                            inline 
                                ? <code className="bg-gray-100 rounded px-1 py-0.5" {...props} />
                                : <code className="block bg-gray-100 rounded p-2 mb-4 overflow-x-auto" {...props} />,
                        img: ({node, ...props}) => <img className="max-w-full h-auto rounded-lg mb-4" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                        table: ({node, ...props}) => <table className="table-auto border-collapse mb-4" {...props} />,
                        th: ({node, ...props}) => <th className="border border-gray-300 px-4 py-2 bg-gray-100" {...props} />,
                        td: ({node, ...props}) => <td className="border border-gray-300 px-4 py-2" {...props} />,
                    }}
                >
                    {article.content}
                </ReactMarkdown>
            ) : (
                <p>文章内容不可用</p>
            )}
        </div>
    );
};

export default ArticleContent;