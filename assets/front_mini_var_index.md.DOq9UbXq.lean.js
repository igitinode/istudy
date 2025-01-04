import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.C-Nz83Xi.js";const p="/assets/1735524581039_C1CCC9F1-7EBC-4365-A0DC-59D9360449E0.B-lTjp-H.png",c=JSON.parse('{"title":"Uniapp 中自定义环境变量及编译变量","description":"","frontmatter":{},"headers":[],"relativePath":"front/mini/var/index.md","filePath":"front/mini/var/index.md"}'),e={name:"front/mini/var/index.md"};function l(h,s,k,r,d,E){return t(),a("div",null,s[0]||(s[0]=[n('<h1 id="uniapp-中自定义环境变量及编译变量" tabindex="-1">Uniapp 中自定义环境变量及编译变量 <a class="header-anchor" href="#uniapp-中自定义环境变量及编译变量" aria-label="Permalink to &quot;Uniapp 中自定义环境变量及编译变量&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在我们进行跨端开发中，基本都会遇到因为环境导致的代码差异需要兼容，比如生产环境和测试环境需要调用不同的接口地址，又比如 H5 和小程序上需要运行不同的交互逻辑</p><p>本文主要讨论如何在 Uniapp 中使用自定义的环境变量及条件编译变量，达到一套代码兼容多端多环境的目的</p><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><p>在 Uniapp 中其实有内置的配置环境变量的方案，<a href="https://uniapp.dcloud.net.cn/collocation/package" target="_blank" rel="noreferrer">参考地址</a>;但是经过亲测后，发现 H5 中是可用的，但是小程序中是不可用的，具体报错如下 <img src="'+p+`" alt="alt text"></p><p>为了同时兼容两端，我们在此引用三方包 cross-env 来实现需求</p><h3 id="cross-env" tabindex="-1">Cross env <a class="header-anchor" href="#cross-env" aria-label="Permalink to &quot;Cross env&quot;">​</a></h3><h4 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h4><p>cross-env 是一个常用的 npm 包，用于在不同操作系统中设置环境变量，确保在跨平台时环境变量的设置方式一致。它特别有用，因为不同操作系统设置环境变量的方式不同</p><h4 id="使用步骤" tabindex="-1">使用步骤 <a class="header-anchor" href="#使用步骤" aria-label="Permalink to &quot;使用步骤&quot;">​</a></h4><ol><li><p>安装：npm install --save-dev cross-env</p></li><li><p>配置 script 脚本前加上 cross-env 运行脚本并注入环境变量</p><p>配置前</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node server.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>配置后</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cross-env TEST_VAR=dev node server.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cross-env TEST_VAR=test node server.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>3.访问环境变量</p></li></ol><p>一般来说，在完成上述配置后，我们便可以通过 process.env.TEST_VAR 来访问到环境变量了，但是 Uniapp 因为编译比较特殊，使用这种办法是访问不到的，而需要通过 vite.config(或者 vue.config)文件来中转</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TEST_VAR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TEST_VAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  define: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    TEST_VAR: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TEST_VAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>这样就能将 TEST_VAR 作为全局变量去进行使用了</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> baseUrlMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  dev: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://dev/api/xx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  test: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://test/api/xx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getBaseUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baseUrlMap[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TEST_VAR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="编译变量" tabindex="-1">编译变量 <a class="header-anchor" href="#编译变量" aria-label="Permalink to &quot;编译变量&quot;">​</a></h2><p>通过上述操作后，我们已经可以通过环境变量来进行一些差异化的适配开发了，那么编译变量又是什么作用呢？</p><p>环境变量一般定义在编译时，但是使用在运行时，但是如果我们需要在编译时去判断哪些代码需要在哪个环境下才编译到 dist 里，这个时候环境变量就无法实现了，Uniapp 提供了自定义编译变量来实现目的，<a href="https://uniapp.dcloud.net.cn/collocation/package.html" target="_blank" rel="noreferrer">参考文档</a></p><p>该文档中有具体的 HbuilderX 编译或者 Cli 编译时如何使用编译变量，在此不再赘述，最终我们将 cross-env 和这个方案相结合，就能同时实现环境变量及编译变量</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dev:h5-dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cross-env COMP_ENV=DEV uni -p h5-dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span></code></pre></div>`,21)]))}const g=i(e,[["render",l]]);export{c as __pageData,g as default};
