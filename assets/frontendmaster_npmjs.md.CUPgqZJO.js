import{_ as p,c as e,o as a,a4 as n}from"./chunks/framework.Cz4QOLCt.js";const f=JSON.parse('{"title":"npmjs","description":"","frontmatter":{},"headers":[],"relativePath":"frontendmaster/npmjs.md","filePath":"frontendmaster/npmjs.md"}'),o={name:"frontendmaster/npmjs.md"},t=n('<h1 id="npmjs" tabindex="-1">npmjs <a class="header-anchor" href="#npmjs" aria-label="Permalink to &quot;npmjs&quot;">​</a></h1><h2 id="npm-机制" tabindex="-1">npm 机制 <a class="header-anchor" href="#npm-机制" aria-label="Permalink to &quot;npm 机制&quot;">​</a></h2><p>设计哲学：优点是局部安装，减轻版本兼容的压力，缺点是可能要多次安装</p><h3 id="npm-install-的安装流程" tabindex="-1">npm install 的安装流程 <a class="header-anchor" href="#npm-install-的安装流程" aria-label="Permalink to &quot;npm install 的安装流程&quot;">​</a></h3><ol><li>检查 config</li><li>有无 lock 文件？</li><li>若有则查看与 package.json 声明版本是否一致？<br> 3.1 若版本一致则检查缓存<br> 3.2 若版本不一致,且 lock 文件和 package.json 兼容则按 lock 文件安装;不兼容则按 package.json 安装，且更新 lock 文件</li><li>若没有则获取包信息并构建依赖树</li><li>检查缓存？（同 3.1） 5.1 若无缓存则下载包资源并添加到缓存 5.2 若有缓存则到步骤 6</li><li>解压到 node_modules</li><li>生成 lock 文件</li></ol><h2 id="npm-缓存机制" tabindex="-1">npm 缓存机制 <a class="header-anchor" href="#npm-缓存机制" aria-label="Permalink to &quot;npm 缓存机制&quot;">​</a></h2><p>npm 全局环境下有个 _cacache 目录，目录下有 content-v2, index-v5, tmp 三个子目录</p><ul><li>npm cache clean --force 命令会删除 _cacache 目录</li><li>content-v2 下面存着二进制文件，修改其扩展名即可解压成 npm 包资源</li><li>index-v5 存着 content-v2 里文件的索引</li><li>lock 文件中存储的信息会生成一个唯一的 key 对应 index-v5 目录下的缓存记录，若发现缓存资源则根据索引找到 npm 包资源，并解压到相应项目的 node_modules 下面</li></ul><h2 id="npm-link" tabindex="-1">npm link <a class="header-anchor" href="#npm-link" aria-label="Permalink to &quot;npm link&quot;">​</a></h2><ol><li>在当前项目 foo 中执行 npm link, 将当前项目 foo 链接到全局环境</li><li>进入项目 bar 中执行 npm link foo, foo 会被链接到 bar/node_modules 下面</li><li>foo 中的修改会被直接映射到 bar 项目, 方便调试</li><li>在 bar 项目下执行 npm unlink foo 解除对 foo 模块的依赖</li><li>在 foo 项目下执行 npm unlink 解除全局环境上 foo 的软链</li></ol><h2 id="npx" tabindex="-1">npx <a class="header-anchor" href="#npx" aria-label="Permalink to &quot;npx&quot;">​</a></h2><p>可以直接执行 node_modules/.bin 文件夹下的文件，且会在执行模块时优先安装依赖，在安装执行后便删除此依赖，避免全局安装模块带来的问题</p><h2 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;yarn&quot;">​</a></h2><p>npm dedupe 会优化重构 node_modules 结构, yarn 在安装依赖得时候会自动执行 dedupe 命令</p><h2 id="npmjs-依赖库" tabindex="-1">npmjs 依赖库 <a class="header-anchor" href="#npmjs-依赖库" aria-label="Permalink to &quot;npmjs 依赖库&quot;">​</a></h2><p>react-scripts create react app, 用 react-scripts start 启动</p><p>fast-deep-equal 对象深比较</p><p>copy-to-clipboard 复制</p><p>husky git 提交前的钩子</p><p>pretty-quick 快速 pretty</p><p>react-use-gesture 鼠标和手势库，配合 react-spring 动画库一起使用</p><p>puppeteer Puppeteer 是一个 Node 库，它提供了高级 API 来通过 DevTools 协议控制 Chrome 或 Chromium</p><p>pdf-merge 合并 pdf</p><p>commitizen git 提交规范</p><p>minimist 解析 node 命令传参，pnpm 才会给脚本后自动加上参数</p><p>esbuild go 语言实现的构建工具</p><p>nrm 管理多个 npm 源</p><p>concurrently 同时执行多个 node 命令</p><p>pnpm 包管理工具</p><p>nodemon 监听 js 变化后自动运行</p><p>commander 命令行的解决方案</p><p>enquirer 命令行选择交互</p><p>mousetrap 键盘交互监听</p><p>speed-measure-webpack-plugin 速度分析插件作用</p><p>@ebay/nice-modal-react 全局弹窗</p><p>eruda 调试栏</p><p>patch-package 保留依赖修复操作</p><p>zustand 状态管理库</p><p>fast-glob 文件目录操作</p><p>execa nodejs 执行 bin 命令</p><p>chalk 终端字符串样式</p><p>semver 版本计算</p><p>@dnd-kit/core 拖动</p><p>figlet 终端字符串图形</p><p>cli-progress 终端进度条</p><p>jsonwebtoken jwt鉴权</p><p>passport 身份认证</p><p>winston nojs日志记录</p><p>pm2 生产环境进程管理和监控</p><p>react-grid-layout 栅格布局</p><p>allotment 拖动分配面板大小</p><p>@monaco-editor/react 在线编辑器</p><p>@typescript/ata 自动下载用到的类型包</p><p>dompurify 预防xss攻击</p><p>he html转译</p><p>click-to-react-component 点击浏览器元素，打开vscode源码文件</p><p>@floating-ui 浮动元素定位</p><p>react-intl 国际化</p>',58),l=[t];function i(r,s,c,m,d,h){return a(),e("div",null,l)}const k=p(o,[["render",i]]);export{f as __pageData,k as default};
