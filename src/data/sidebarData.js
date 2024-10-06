export const tags = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python', 'Java', 'C#', 'C++'];

export const categories = [
    {
        name: '前端',
        children: [
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'JavaScript', children: [
                { name: 'React' },
                { name: 'Vue' },
                { name: 'Angular' }
            ] }
        ],
       
    },
    {
        name: '后端',
        children: [
            { name: 'c#' },
            { name: 'c++' },
           
        ]
    }
    // ... 其他类别
];

export const personalInfo = {
    name: 'Red',
    avatar: '/images/logo.png',  // 这里假设图片位于 public/images/ 目录下
    github: 'https://github.com/yinheduzhou',  // 假设的 GitHub 用户名
    qq: '123456789',  // 假设的 QQ 号码
    bilibili: 'https://space.bilibili.com/12345678',  // 假设的 Bilibili ID
    email: 'yinheduzhou@example.com'  // 假设的邮箱地址
};