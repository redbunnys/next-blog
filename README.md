# 个人博客网站

这是一个使用 Next.js 和 React 构建的个人博客网站。该项目实现了一个功能丰富的博客系统，包括文章展示、目录导航、响应式设计等特性。

## 功能特性

- [x] **文章展示**
   - [x] 支持 Markdown 格式的文章内容
   - [x] 文章列表页面，展示所有文章的摘要
   - [x] 单篇文章详情页面，完整展示文章内容
   
   >渲染md有可能顶出，破坏布局

- [] **目录导航**
   - [ ] 自动生成文章目录
   - [ ] 支持点击目录项跳转到对应章节
   - [ ] 目录固定在页面左侧，方便浏览长文章

- [ ] **响应式设计**
   - [ ] 适配不同尺寸的设备，包括桌面、平板和手机

- [x] **Markdown 渲染**
   - [x] 支持常见的 Markdown 语法，包括标题、列表、引用、代码块等
   - [x] 使用 `react-markdown` 库实现 Markdown 到 HTML 的转换

- [x] **标签和分类**
   - [x] 文章支持多个标签
   - [x] 文章分类系统

- [x] **侧边栏**
   - [x] 个人信息展示
   - [x] 标签云
   - [x] 分类树
   - [x] 网站统计信息

- [x] **布局系统**
   - [x] 使 Flexbox 实现的灵活布局
   - [x] 页面头部、主体内容和页脚的结构化布局

- [ ] **样式定制**
   - [ ] 使用 Tailwind CSS 进行样式管理
   - [ ] 支持亮色/暗色主题（通过 CSS 变量实现）

- [x] **平滑滚动**
   - [x] 目录导航支持平滑滚动到对应章节

- [ ] **SEO 优化**
   - [ ] 使用语义化的 HTML 结构
   - [ ] 为每个页面设置适当的标题和元数据

- [x] **归档页面**
   - [x] 使用树形结构按年份和月份组织文章
   - [x] 按时间顺序从新到旧显示所有发布的文章
   - [x] 提供快速访问历史文章的方式
   - [x] 显示每篇文章的具体发布日期
   - [ ] UI为树形结构

## 技术栈

- Next.js
- React
- Tailwind CSS
- react-markdown
- rehype-raw
- remark-gfm
- slugify

## 项目结构
b