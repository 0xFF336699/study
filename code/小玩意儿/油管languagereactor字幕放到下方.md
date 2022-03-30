```// ==UserScript==
// @name         油管字幕放到视频下方
// @namespace    0xFF336699
// @version      0.1
// @description  油管字幕在视频上，看起来不舒服，挪到视频下方了。
// @author       You
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    // Your code here...
    let changed = false;
    let outerHtml;
    let root;
    let caption;
    later();
    function later(){
        setTimeout(()=>{
            checkCaption();
        }, 100 * 3);
    }
    function checkCaption(){
        if(changed)return;
        root = document.querySelector("#primary-inner");
        if(!root)return later();
        const uncle = document.querySelector("#primary-inner").querySelector("#info");
        if(!uncle)return later();
        caption = document.querySelector("#lln-bottom-panel");
        if(!caption)return later();
        if(!outerHtml){
            outerHtml = caption.interHTML;
        }
        const content = document.querySelector(".lln-youtube .lln-bottom-panel .lln-subs-wrap");
        if(!content)return later();
        const sub = document.querySelector(".lln-bottom-panel #lln-main-subs");
        if(!sub)return later();
        const subWrap = document.querySelector(".lln-bottom-panel .lln-subs-wrap");
        if(!subWrap)return later();
        const youtubebottommain = document.querySelector(".lln-youtube .lln-bottom-panel #lln-main-subs");
        if(!youtubebottommain)return later();
        const adj = document.querySelector(".lln-bottom-panel .lln-subs-font-adjust");
        if(!adj)return later();
        adj.setAttribute('style', 'padding-top:-15px');
        youtubebottommain.setAttribute('style', 'justify-content:flex-start');
        sub.setAttribute('style', 'justify-content:flex-start');
        document.querySelector("#lln-sub-view-wrap").parentElement.removeChild(document.querySelector("#lln-sub-view-wrap"));
        subWrap.setAttribute('style', 'padding-left: 20px;padding-right: 20px');
        content.setAttribute('style', 'padding-top:1px');
        caption.setAttribute('style', 'position:static;background-color:#000000;height:16rem');
        root.insertBefore(caption,uncle);
        changed = true;
    }
    function toFull(){
        var n = document.createElement("div");
        n.innerHTML = outerHtml;
        root.removeChild(caption);
        root.appendChild(n);
    }
    document.addEventListener("fullscreenchange", function() {
        if(document.fullscreen){
            toFull();
        }else{
            changed = false;
            checkCaption();
        }
    });
})();









```