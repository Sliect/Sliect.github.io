import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.Cz4QOLCt.js";const u=JSON.parse('{"title":"vue-cli","description":"","frontmatter":{},"headers":[],"relativePath":"zhaowa/10.vue-cli.md","filePath":"zhaowa/10.vue-cli.md"}'),e={name:"zhaowa/10.vue-cli.md"},t=n(`<h1 id="vue-cli" tabindex="-1">vue-cli <a class="header-anchor" href="#vue-cli" aria-label="Permalink to &quot;vue-cli&quot;">​</a></h1><ol><li>一个模板项目</li><li>给用户一个友好的交互</li><li>输出到目标目录</li></ol><p>minimist 库：解析node命令</p><p>package.json中bin 字段作用<br> 在执行该包安装的命令时，会在node_modules文件夹下的.bin目录中复制bin字段链接的执行文件</p><p>注册对象事件，在合适的时机执行实现逻辑</p><p>vite原理: 浏览器遇到script的type=&quot;module&quot;时会发起一个请求，拦截这个请求解析成浏览器能读懂的内容</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 1. 起一个 node 服务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 2. 模版项目的文件，就都走静态资源路径了</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 3. html 返回</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 4. html 返回之前呢，塞一个 client 进去，&lt;script src=&quot;/a/client&quot; type=&quot;module&quot;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 5. 写这个接口 /a/client -&gt; 内置的 client.js -&gt; HMR</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 6. server - websocket - client</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 7. 监听文件变更（三方库）-&gt; 封装一个数据结构（变更） -&gt; websocket -&gt; client</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 8. 其它文件 .css .jsx 的处理</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 9. css -&gt; js -&gt; createElement(&#39;style&#39;) -&gt; header</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 10. .jsx -&gt; .js (引用三方，本地) / 三方（缓存） + 本地（拼路径）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 11. plugin 系统等</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span></code></pre></div>`,7),l=[t];function p(c,h,o,k,r,d){return a(),i("div",null,l)}const _=s(e,[["render",p]]);export{u as __pageData,_ as default};
