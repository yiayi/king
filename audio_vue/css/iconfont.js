(function(window){var svgSprite='<svg><symbol id="icon-kaishi" viewBox="0 0 1024 1024"><path d="M512 989.866667C248.081067 989.866667 34.133333 775.918933 34.133333 512S248.081067 34.133333 512 34.133333s477.866667 213.947733 477.866667 477.866667-213.947733 477.866667-477.866667 477.866667z m0-68.266667c226.2016 0 409.6-183.3984 409.6-409.6S738.2016 102.4 512 102.4 102.4 285.7984 102.4 512s183.3984 409.6 409.6 409.6z m-61.2352-137.352533A33.792 33.792 0 0 1 409.6 751.3088V272.725333a33.655467 33.655467 0 0 1 49.2544-30.0032 33.416533 33.416533 0 0 1 9.5232 6.690134l238.592 238.830933a34.065067 34.065067 0 0 1 0 47.9232l-238.592 238.865067a33.4848 33.4848 0 0 1-17.6128 9.250133z m26.350933-430.523734v316.893867l158.276267-158.446933-158.276267-158.446934z" fill="#333333" ></path></symbol><symbol id="icon-bofangqi-bofang" viewBox="0 0 1024 1024"><path d="M744.727273 551.563636L325.818182 795.927273c-30.254545 18.618182-69.818182-4.654545-69.818182-39.563637v-488.727272c0-34.909091 39.563636-58.181818 69.818182-39.563637l418.909091 244.363637c30.254545 16.290909 30.254545 62.836364 0 79.127272z"  ></path></symbol><symbol id="icon-bofangqi-zanting" viewBox="0 0 1024 1024"><path d="M442.181818 709.818182c0 37.236364-30.254545 69.818182-69.818182 69.818182s-69.818182-30.254545-69.818181-69.818182v-395.636364c0-37.236364 30.254545-69.818182 69.818181-69.818182s69.818182 30.254545 69.818182 69.818182v395.636364z m279.272727 0c0 37.236364-30.254545 69.818182-69.818181 69.818182s-69.818182-30.254545-69.818182-69.818182v-395.636364c0-37.236364 30.254545-69.818182 69.818182-69.818182s69.818182 30.254545 69.818181 69.818182v395.636364z"  ></path></symbol><symbol id="icon-caozuo-bofang-zanting" viewBox="0 0 1024 1024"><path d="M512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448z m0-64c212.064 0 384-171.936 384-384S724.064 128 512 128 128 299.936 128 512s171.936 384 384 384z m-128-543.936a31.968 31.968 0 1 1 64 0v319.872a31.968 31.968 0 1 1-64 0v-319.872z m192 0a31.968 31.968 0 1 1 64 0v319.872a31.968 31.968 0 1 1-64 0v-319.872z" fill="#000000" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)