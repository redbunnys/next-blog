export const articles = [
    {
        id: '1',
        title: 'React 基础教程',
        excerpt: 'React 是一个用于构建用户界面的 JavaScript 库。本文将介绍 React 的基本概念和用法。本文将介绍 React 的基本概念和用法。本文将介绍 React 的基本概念和用法。',
        content: `
# React 基础教程

![React](https://w.wallhaven.cc/full/x6/wallhaven-x6mxll.png)

React 是一个用于构建用户界面的 JavaScript 库。本文将介绍 React 的基本概念和用法。

---

## 摘要

React 是一个用于构建用户界面的 JavaScript 库。本文将介绍 React 的基本概念和用法。

## 内容

这里是 React 基础教程的完整内容...

## 发布日期

2023-05-01

## 分类

React

## 标签

React, JavaScript, 前端
    `,
        date: '2023-05-01',
        category: 'React',
        tags: ['React', 'JavaScript', '前端'],
        image: 'https://w.wallhaven.cc/full/x6/wallhaven-x6mxll.png'
    },
    {
        id: '2',
        title: 'CSS 布局技巧',
        excerpt: '本文将介绍一些常用的 CSS 布局技巧，帮助你更好地设计网页。',
        content: `
# CSS 布局技巧

![CSS](/images/css.png)

本文将介绍一些常用的 CSS 布局技巧，帮助你更好地设计网页。

---

## 摘要

本文将介绍一些常用的 CSS 布局技巧，帮助你更好地设计网页。

## 内容

这里是 CSS 布局技巧的完整内容...

## 发布日期

2023-05-05

## 分类

CSS

## 标签

CSS, 前端, 设计
    `,
        date: '2023-05-05',
        category: 'CSS',
        tags: ['CSS', '前端', '设计'],
        image: '/images/css.png'
    },
    {
        id: '3',
        title: 'Node.js 入门指南',
        excerpt: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。本文将帮助你快速入门 Node.js。',
        content: 
        `
 ### 1. 制作待办事宜 \`Todo\` 列表

- [x] 🎉 通常 \`Markdown\` 解析器自带的基本功能；
- [x] 🍀 支持**流程图**、**甘特图**、**时序图**、**任务列表**；
- [x] 🏁 支持粘贴 HTML 自动转换为 Markdown；
- [x] 💃🏻 支持插入原生 Emoji、设置常用表情列表；
- [x] 🚑 支持编辑内容保存**本地存储**，防止意外丢失；
- [x] 📝 支持**实时预览**，主窗口大小拖拽，字符计数；
- [x] 🛠 支持常用快捷键(**Tab**)，及代码块添加复制
- [x] ✨ 支持**导出**携带样式的 PDF、PNG、JPEG 等；
- [x] ✨ 升级 Vditor，新增对 \`echarts\` 图表的支持；
- [x] 👏 支持检查并格式化 Markdown 语法，使其专业；
- [x] 🦑 支持五线谱、及[部分站点、视频、音频解析](https://github.com/b3log/vditor/issues/117?utm_source=hacpai.com#issuecomment-526986052)；
- [x] 🌟 增加对**所见即所得**编辑模式的支持(\`⌘-⇧-M\`)；    
        
        
        `,
        date: '2023-05-10',
        category: 'Node.js',
        tags: ['Node.js', 'JavaScript', '后端'],
        image: '/images/nodejs.png'
    },
    {
        id: '4',
        title: 'Python 数据分析基础',
        excerpt: 'Python 是数据分析中最流行的编程语言之一。本文将介绍使用 Python 进行数据分析的基础知识。',
        content: '这里是 Python 数据分析基础的完整内容...',
        date: '2023-05-15',
        category: 'Python',
        tags: ['Python', '数据分析', '后端'],
        image: '/images/python.png'
    },
    {
        id: '5',
        title: 'Vue.js 组件通信',
        excerpt: '组件是 Vue.js 的核心概念之一。本文将详细讲解 Vue.js 中各种组件通信的方式。',
        content: '这里是 Vue.js 组件通信的完整内容...',
        date: '2023-05-20',
        category: 'Vue',
        tags: ['Vue', 'JavaScript', '前端'],
        image: '/images/vue.png'
    },
    {
        id: '6',
        title: 'Java 多线程编程',
        excerpt: '多线程是 Java 中的重要概念。本文将介绍 Java 多线程编程的基础知识和常用技巧。',
        content: '这里是 Java 多线程编程的完整内容...',
        date: '2023-05-25',
        category: 'Java',
        tags: ['Java', '多线程', '后端'],
        image: '/images/java.png'
    },
    {
        id: '7',
        title: 'SQL 查询优化技巧',
        excerpt: '优化 SQL 查询可以显著提高数据库性能。本文将分享一些常用的 SQL 查询优化技巧。',
        content: '这里是 SQL 查询优化技巧的完整内容...',
        date: '2023-05-30',
        category: 'SQL',
        tags: ['SQL', '数据库', '后端'],
        image: '/images/sql.png'
    },
    {
        id: '8',
        title: 'Git 版本控制入门',
        excerpt: 'Git 是最流行的版本控制系统之一。本文将帮助你快速入门 Git 的基本用法。',
        content: '这里是 Git 版本控制入门的完整内容...',
        date: '2023-06-05',
        category: 'Git',
        tags: ['Git', '版本控制', '工具'],
        image: '/images/git.png'
    }
];

// 如果你之前有 initialArticles 和 additionalArticles，你可以这样导出：
export const initialArticles = articles.slice(0, 5); // 假设前5篇是初始文章
export const additionalArticles = articles.slice(5); // 剩下的是额外文章