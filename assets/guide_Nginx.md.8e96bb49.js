import{_ as s,c as n,o as a,a as e}from"./app.98b1dfca.js";const A=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nginx Proxy Manager","slug":"nginx-proxy-manager"},{"level":2,"title":"\u5B89\u88C5docker","slug":"\u5B89\u88C5docker"},{"level":2,"title":"\u5B89\u88C5docker-compose","slug":"\u5B89\u88C5docker-compose"},{"level":2,"title":"\u68C0\u67E5","slug":"\u68C0\u67E5"},{"level":2,"title":"\u90E8\u7F72","slug":"\u90E8\u7F72"},{"level":3,"title":"\u542F\u52A8","slug":"\u542F\u52A8"},{"level":2,"title":"\u8BBF\u95EE\u63A7\u5236\u9875\u9762","slug":"\u8BBF\u95EE\u63A7\u5236\u9875\u9762"}],"relativePath":"guide/Nginx.md"}'),p={name:"guide/Nginx.md"},l=e(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="nginx-proxy-manager" tabindex="-1">Nginx Proxy Manager <a class="header-anchor" href="#nginx-proxy-manager" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u63A8\u8350\u5B89\u88C5Nginx Proxy Manager</p><p>\u9700\u8981\u73AF\u5883</p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo apt install python3-pip</span></span>
<span class="line"><span style="color:#A6ACCD;">pip3 --version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5B89\u88C5docker" tabindex="-1">\u5B89\u88C5docker <a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u4F9D\u7136\u4F7F\u7528\u6211\u4EEC\u7684\u8001\u4F19\u8BA1-docker\uFF0C\u4F46\u8FD9\u6B21\u8981\u4F7F\u7528\u5230docker\u7684\u4F19\u8BA1:docker-compose\uFF0C\u4F7F\u7528docker-compose\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u7F16\u6392\u81EA\u5DF1\u7684\u5BB9\u5668\uFF0C\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684\u811A\u672C\u542F\u52A8\u590D\u6742\u7684\u7A0B\u5E8F\uFF0C\u81EA\u52A8\u5904\u7406\u4F9D\u8D56\u9879\u76EE\uFF0C\u4ECE\u800C\u7B80\u5316\u64CD\u4F5C\u3002</p><p>\u5728\u81EA\u5DF1\u7684Linux\uFF08Ubuntu/CentOS 7+\uFF09\u670D\u52A1\u5668\u4E0A\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5docker, \u5B89\u88C5\u5B8C\u6210\u540E\u6267\u884C\u7B2C\u4E8C\u6761\u547D\u4EE4\uFF0C\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8docker\u3002</p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get install -y docker.io</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable --now docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5B89\u88C5docker-compose" tabindex="-1">\u5B89\u88C5docker-compose <a class="header-anchor" href="#\u5B89\u88C5docker-compose" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo pip install docker-compose</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u68C0\u67E5" tabindex="-1">\u68C0\u67E5 <a class="header-anchor" href="#\u68C0\u67E5" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u67E5\u770Bdocker\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">docker -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># \u67E5\u770Bdocker-compose\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h2><p>\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\u7528\u4E8E\u5B58\u653ENginx Proxy Manager\u7684\u914D\u7F6E\u548C\u9879\u76EE\u6587\u4EF6</p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/docker/NginxProxyManager &amp;&amp; cd /opt/docker/NginxProxyManager</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA\u4E00\u4E2Adocker-compose.yml\u6587\u4EF6</p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vi docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7C98\u8D34\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">version: &#39;3&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  app:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: &#39;jc21/nginx-proxy-manager:latest&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: unless-stopped</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;80:80&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;81:81&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      - &#39;443:443&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./data:/data</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./letsencrypt:/etc/letsencrypt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6309\u4E0B\u952E\u76D8\u4E0A\u7684esc\u952E\uFF0C\u8F93\u5165:wq\u4FDD\u5B58\u9000\u51FA\u3002 \u8BF7\u6CE8\u610F\u6587\u4EF6\u95F4\u7684\u7F29\u8FDB\uFF0C\u5982\u679C\u7F29\u8FDB\u4E0D\u6B63\u786E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u7F16\u8F91\u597D\u540E\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E0A\u3002</p><h3 id="\u542F\u52A8" tabindex="-1">\u542F\u52A8 <a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u8BBF\u95EE\u63A7\u5236\u9875\u9762" tabindex="-1">\u8BBF\u95EE\u63A7\u5236\u9875\u9762 <a class="header-anchor" href="#\u8BBF\u95EE\u63A7\u5236\u9875\u9762" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u4F60\u7684ip:81,\u5982\u679C\u6709\u9632\u706B\u5899\uFF0C\u53EF\u4EE5\u4E34\u65F6\u653E\u901A81\u7684tcp\u7AEF\u53E3\u3002</p><p>\u521D\u59CB\u7684\u7528\u6237\u548C\u5BC6\u7801\u5982\u4E0B\uFF1A</p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Email: admin@example.com</span></span>
<span class="line"><span style="color:#A6ACCD;">Password: changeme</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,27),r=[l];function c(o,i,d,t,m,u){return a(),n("div",null,r)}var C=s(p,[["render",c]]);export{A as __pageData,C as default};