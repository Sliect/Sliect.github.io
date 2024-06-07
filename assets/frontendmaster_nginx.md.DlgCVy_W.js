import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.Cz4QOLCt.js";const _=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[],"relativePath":"frontendmaster/nginx.md","filePath":"frontendmaster/nginx.md"}'),e={name:"frontendmaster/nginx.md"},i=p(`<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;nginx&quot;">​</a></h1><p>正向代理是代理客户端，反向代理是代理服务端</p><p>反向代理、负载均衡、动静分类、高可用(主服务器挂掉，自动切换到备份服务器)</p><p>Master进程管理多个Worker, Worker争抢任务进行工作</p><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    # 访问 http://example.com 时,Nginx 会自动寻找并返回 /var/www/html/frontend 目录下的 index.html 文件</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span>    server_name example.com;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root /var/www/html/frontend;</span></span>
<span class="line"><span>        index index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 访问 http://example.com/api 时,Nginx 会将请求转发到后端服务</span></span>
<span class="line"><span>    location /api {</span></span>
<span class="line"><span>        proxy_pass http://localhost:3000;</span></span>
<span class="line"><span>        proxy_http_version 1.1;</span></span>
<span class="line"><span>        proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>        proxy_set_header Connection &#39;upgrade&#39;;</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_cache_bypass $http_upgrade;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="language-conf vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">conf</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// ~ 表示区分大小写</span></span>
<span class="line"><span>location ~ .*\\.(html|jpg|css|js) {</span></span>
<span class="line"><span>  # root path;  #根目录</span></span>
<span class="line"><span>  # index vv.txt;  #设置默认页</span></span>
<span class="line"><span>  proxy_pass  http://mysvr;  #请求转向mysvr 定义的服务器列表</span></span>
<span class="line"><span>  deny 127.0.0.1;  #拒绝的ip</span></span>
<span class="line"><span>  allow 172.18.5.54; #允许的ip           </span></span>
<span class="line"><span>}</span></span></code></pre></div><p>命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检查配置文件是否有效</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quiet</span></span></code></pre></div><h2 id="全局块" tabindex="-1">全局块 <a class="header-anchor" href="#全局块" aria-label="Permalink to &quot;全局块&quot;">​</a></h2><p>配置影响Nginx全局的指令</p><h2 id="events块" tabindex="-1">events块 <a class="header-anchor" href="#events块" aria-label="Permalink to &quot;events块&quot;">​</a></h2><p>配置影响Nginx服务器或与用户的网络连接</p><h2 id="http块" tabindex="-1">http块 <a class="header-anchor" href="#http块" aria-label="Permalink to &quot;http块&quot;">​</a></h2><p>可以嵌套多个server，配置代理、缓存、日志定义等绝大多数功能和第三方模块的配置</p><h2 id="tips" tabindex="-1">tips <a class="header-anchor" href="#tips" aria-label="Permalink to &quot;tips&quot;">​</a></h2><p>host文件中可以设置域名到ip地址</p>`,16),t=[i];function l(h,o,r,c,d,g){return n(),a("div",null,t)}const x=s(e,[["render",l]]);export{_ as __pageData,x as default};
