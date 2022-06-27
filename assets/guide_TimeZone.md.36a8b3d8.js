import{_ as s,c as n,o as a,a as e}from"./app.98b1dfca.js";const C=JSON.parse('{"title":"\u6821\u5BF9\u65F6\u533A","description":"","frontmatter":{},"headers":[],"relativePath":"guide/TimeZone.md"}'),p={name:"guide/TimeZone.md"},l=e(`<h1 id="\u6821\u5BF9\u65F6\u533A" tabindex="-1">\u6821\u5BF9\u65F6\u533A <a class="header-anchor" href="#\u6821\u5BF9\u65F6\u533A" aria-hidden="true">#</a></h1><p>linux\u5F00\u673A\u540E\u5148\u6821\u5BF9\u65F6\u533A</p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">apt-get update -y &amp;&amp; apt-get install curl -y</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo tzselect</span></span>
<span class="line"><span style="color:#A6ACCD;">//asia</span></span>
<span class="line"><span style="color:#A6ACCD;">//chia</span></span>
<span class="line"><span style="color:#A6ACCD;">//1</span></span>
<span class="line"><span style="color:#A6ACCD;">//1</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u66FF\u6362\u4EE5\u524D\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo cp /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5199\u5165cmos\u786C\u4EF6\u65F6\u949F</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo hwclock --systohc</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u67E5\u770B\u6267\u884C\u7ED3\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo date -R</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3),c=[l];function r(o,i,t,d,u,m){return a(),n("div",null,c)}var b=s(p,[["render",r]]);export{C as __pageData,b as default};
