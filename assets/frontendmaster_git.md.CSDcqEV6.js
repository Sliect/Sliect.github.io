import{_ as t,c as e,o as r,a4 as i}from"./chunks/framework.Cz4QOLCt.js";const x=JSON.parse('{"title":"git","description":"","frontmatter":{},"headers":[],"relativePath":"frontendmaster/git.md","filePath":"frontendmaster/git.md"}'),a={name:"frontendmaster/git.md"},o=i('<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h1><p>git merge bugFix // 在当前分支合并bugFix分支<br> git rebase bugFix // 当前分支master, 基于bugFix合并master分支，HEAD指向不变（即将当前分支master上的记录复制到bugFix上）。创造线性历史<br> git checkout xxx // xxx为节点，控制节点引用的跳转<br> git reset xxx // 本地撤销，并不进行提交<br> git revert xxx // 将撤销作为一个提交记录<br> git pull // fetch 和 merge 的缩写<br> git pull --rebase // git fetch 和 git rebase 的缩写</p><p>cnpm config set registry <a href="https://registry.npm.taobao.org" target="_blank" rel="noreferrer">https://registry.npm.taobao.org</a> 切换淘宝镜像源</p><p>如果远程库上的文件已存在，在 .gitignore 上忽略该文件将失效，需先将远程库上的文件删除后规则才会生效</p><p>如果远程库上的文件夹已存在，可以</p><ol><li>先提交一次最新的gitignore</li><li>再执行 git rm -r --cached path/to/folder</li><li>最后再提交一次</li></ol><p>可以修改当前分支的提交 git rebase -i HEAD~3 // 修改最近的三个提交，并进入vi 模式，输入 i 进行提交的编辑，按esc按钮退出编辑状态，输入 :wq 保存</p>',7),s=[o];function g(n,c,p,l,_,m){return r(),e("div",null,s)}const b=t(a,[["render",g]]);export{x as __pageData,b as default};
