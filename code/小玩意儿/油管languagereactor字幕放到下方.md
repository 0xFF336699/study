// ==UserScript==
// @name         油管字幕放到视频下方
// @namespace    0xFF336699
// @version      0.1.5
// @description  油管字幕在视频上，看起来不舒服，挪到视频下方了。字幕插件地址 https://chrome.google.com/webstore/detail/language-reactor/hoombieeljmmljlkjmnheibnpciblicm
// @author       0xFF336699
// @match        https://www.youtube.com/*
// @match        https://www.youtube.com
// @license      GPL-3.0 License
// @run-at document-start
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant unsafeWindow
// @grant GM_registerMenuCommand
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==
(function() {
    'use strict';
    // Your code here...
    let changed = false;
    let outerHtml;
    let root;
    let bottomParent;
    let caption;
    let uncle;
    let videoCationsShell;
    let lastLlnVisibility = undefined;
    GM_registerMenuCommand("点击单词时打开bing查词窗口 打开/关闭", onSwitchOpenBing, "H");
    function onSwitchOpenBing(){
        let v = GM_getValue("openBing");
        v = !!!v;
        GM_setValue("openBing",v);
        alert(`点击单词时直接打开bing翻译窗口已${v ? "启用" : "停用"}`);
    }
    later();
    function later(){
        setTimeout(()=>{
            checkCaption();
        }, 100 * 3);
    }
    function laterCheckVideo(){
        setTimeout(laterCheckVideo, 1000);
        if(document.fullscreen){
            return;
        }
        let v = document.querySelector("video");
        if(!v){
            return;
        }
        v.setAttribute('style', 'position:static');
        let top = v.style.top;
        let t = document.querySelector("#tttt");
        if(!t){
            t = document.createElement("div");
            videoCationsShell = t;
            t.setAttribute('id', 'tttt');
            v.parentNode.appendChild(t);
        }
        let c = document.getElementsByClassName("lln-vertical-view lln-events-added");
        if(!c || c.length == 0)return;
        let d = c[0];
        let visibility = window.getComputedStyle(d, null).getPropertyValue("visibility");
        checkChangeParent(visibility);

    }
    function checkChangeParent(visibility){
        if(visibility == lastLlnVisibility){
            return
        }
        if(!bottomParent){
            return;
        }
        if(!videoCationsShell){
            return;
        }
        if(document.fullscreen){
            return;
        }
        lastLlnVisibility = visibility;
        if(lastLlnVisibility == "visible"){
            if(caption.parentNode == bottomParent){
                bottomParent.removeChild(caption);
            }
            videoCationsShell.appendChild(caption);
        }else{
            if(caption.parentNode == videoCationsShell){
                videoCationsShell.removeChild(caption);
            }
            bottomParent.insertBefore(caption,uncle.nextSibling);
        }

    }
    laterCheckVideo();
    function checkCaption(){
        if(changed)return;
        root = document.querySelector("#primary-inner");
        if(!root)return later();
        var player = document.querySelector("#primary-inner").querySelector("#player");
        uncle = player
        if(!uncle)return later();
        caption = document.querySelector("#lln-bottom-panel");
        if(!caption)return later();
        if(!outerHtml){
            var br = document.createElement('br');
            br.setAttribute(
                'style',
                'background-color:"#FFFFFF";height:"1px";width:"100%";',
            )
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
        caption.setAttribute('style', 'position:static;background-color:#6F6F6F;height:16rem');
        bottomParent = uncle.parentNode;
        bottomParent.insertBefore(caption,uncle.nextSibling);
        changed = true;
        lastLlnVisibility = undefined;
    }
    function toFull(){
        var n = document.createElement("div");
        n.innerHTML = outerHtml;
        if(caption.parentNode == bottomParent){
            bottomParent.removeChild(caption);
        }
        if(caption.parentNode == videoCationsShell){
            videoCationsShell.removeChild(caption);
        }

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
    function addWordMouseListner(){
        $(document).on("click", "span.lln-word.lln-hover-tooltip.top", function(e){

            let v = GM_getValue("openBing");
         if(!v){
             return;
         }
            if(isFullScreen())return;
            var word = e.target.innerText;
            var arr = word.split(/[\s\n]/);
            word = arr[arr.length-1];
            var reg = /[^\x00-\x7F]+/
            if(reg.test(word))return;
            if(!word)return;
            var url = `https://dictionary.cambridge.org/dictionary/english-chinese-simplified/` + word;
            url = `https://www.bing.com/dict/search?q=` + word;
            var win = window.open(url, "Dictionary", "width=750,height=2090  top=0 left=1330");
            setTimeout(function(){
                var evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("mouseup", true, true);
            },50);
        });
    }
    function isFullScreen() {
        return !! (
            document.fullscreen ||
            document.mozFullScreen ||
            document.webkitIsFullScreen ||
            document.webkitFullScreen ||
            document.msFullScreen
        );
    }
    // 窗口的大小和在屏幕中的位置，具体可以根据自己的显示器调整。
    let wo = window.open;
    //window.open = open;
    let win
    function open(){
        console.log('win open', arguments);
        if(arguments[0].indexOf('youtube.com') > -1){
            return wo.apply(window, arguments);
        }
        //arguments[2] = `width=750,height=2090 top=0 left=${window.outerWidth + -13}`;
        let left = Math.min(screen.width - 750, window.outerWidth + -13);
        arguments[1] = "Dictionary";
        arguments[2] = `width=750,height=${window.outerHeight} top=0 left=${left}`;
        var w;
        try{
            w = wo.apply(window, arguments);
            if(w){
                win = w;
            }
        }catch(e){

        }
        return w;
    }
    window.onbeforeunload = function(){
        if(!win)return;
        win.close();
    }
    function onFullScreenClick(){
        const llnCloseVV = document.querySelector("#llnCloseVV");
        if(!llnCloseVV)return;
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true);
        var bl = llnCloseVV.dispatchEvent(evt);
    }

    document.addEventListener("fullscreenchange", function (e) {
        if (document.fullscreenElement) {
            onFullScreenClick();
        } else {
            onFullScreenExit();
        }
    })
    function onFullScreenExit(){
        const sidebar = document.querySelector(".lln-vv-toggle-in-sidebar");
        if(!sidebar)return;
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true);
        sidebar.dispatchEvent(evt);
    }
    function addSubClick(){
     $(document).on("click", ".lln-vertical-view-sub .lln-word", function(e){

            let v = GM_getValue("openBing");
         if(!v){
             return;
         }
            var word = e.target.innerText;
            var arr = word.split(/[\s\n]/);
            word = arr[arr.length-1];
            console.log('word is333', word);
            var reg = /[^\x00-\x7F]+/
            if(reg.test(word))return;
            if(!word)return;
            var url = `https://www.bing.com/dict/search?q=` + word;
            let left = Math.min(screen.width - 750, window.outerWidth + -13);
            arguments[2] = `width=750,height=${window.outerHeight} top=0 left=${left}`;
            //var win = window.open(url, "Dictionary", "width=750,height=2090 top=0 left=1330");
            var win = window.open(url, "Dictionary", `width=750,height=${window.outerHeight} top=0 left=${left}`);
            setTimeout(function(){
                var evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("mouseup", true, true);
            },50);
     })
    }

        window.open = open;
        addWordMouseListner();
        addSubClick();
})();









