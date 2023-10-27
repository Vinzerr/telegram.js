import{_ as t,o as e,c as a,Q as s}from"./chunks/framework.e3a7507f.js";const g=JSON.parse('{"title":"ChatsManager","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/managers/ChatsManager.md","filePath":"documentation/managers/ChatsManager.md"}'),r={name:"documentation/managers/ChatsManager.md"},n=s('<h1 id="chatsmanager" tabindex="-1">ChatsManager <a class="header-anchor" href="#chatsmanager" aria-label="Permalink to &quot;ChatsManager&quot;">​</a></h1><p>The manager for all the chats your client handles such as fetching and getting cached chats.</p><p>extends <b><a href="./CachedManager.html">CachedManager</a></b></p><p>cached <b><a href="./../structures/Chat.html">Chat</a></b></p><h2 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ChatManager</span><span style="color:#E1E4E8;">(client: Client)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ChatManager</span><span style="color:#24292E;">(client: Client)</span></span></code></pre></div><details class="details custom-block"><summary>Properties</summary></details><details class="details custom-block"><summary>Methods</summary><ul><li><a href="#fetch">fetch</a></li></ul></details><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="fetch" tabindex="-1">fetch <a class="header-anchor" href="#fetch" aria-label="Permalink to &quot;fetch&quot;">​</a></h3><p>Fetch the chat with the id from the Telegram API.</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Optional</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">chat_id</td><td style="text-align:center;">number|string</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">The id of the chat.</td></tr></tbody></table><p>Return: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">Promise</a>&lt;<a href="./../structures/Chat.html">Chat</a>&gt;</p>',14),l=[n];function o(c,h,i,d,p,m){return e(),a("div",null,l)}const f=t(r,[["render",o]]);export{g as __pageData,f as default};