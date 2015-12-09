
var nsOptions =
{
    sliderId: "ninja-slider",
    transitionType: "slide", //"fade", "slide", "zoom", "kenburns 1.2" or "none"
    autoAdvance: true,
    delay: "default",
    transitionSpeed: "default",
    aspectRatio: "9:6",
    initSliderByCallingInitFunc: false,
    shuffle: false,
    startSlideIndex: 0, //0-based
    navigateByTap: true,
    pauseOnHover: false,
    keyboardNav: true,
    before: null,
    license: "mylicense"
};

var nslider = new NinjaSlider(nsOptions);

/* Ninja Slider v2015.10.26 Copyright www.menucool.com */
function NinjaSlider(a){"use strict";if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};var d="length",Z=function(e){var a=e.childNodes,c=[];if(a)for(var b=0,f=a[d];b<f;b++)a[b].nodeType==1&&c.push(a[b]);return c},Ab=function(c){var a=c.childNodes;if(a&&a[d]){var b=a[d];while(b--)a[b].nodeType!=1&&a[b][o].removeChild(a[b])}},B=function(a,c,b){if(a[r])a[r](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},cb=function(a){if(a&&a.stopPropagation)a.stopPropagation();else if(window.event)window.event.cancelBubble=true},bb=function(b){var a=b||window.event;if(a.preventDefault)a.preventDefault();else if(a)a.returnValue=false},Db=function(b){if(typeof b[e].webkitAnimationName!="undefined")var a="-webkit-";else a="";return a},yb=function(){var b=k.getElementsByTagName("head");if(b[d]){var a=k.createElement("style");b[0].appendChild(a);return a.sheet?a.sheet:a.styleSheet}else return 0},C=function(){return Math.random()},lb=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],jb=function(e,c){for(var b=[],a=0;a<e[d];a++)b[b[d]]=String[Y](e[N](a)-(c?c:3));return b.join("")},Ib=function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},kb=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],n=window.setTimeout,o="parentNode",i="className",e="style",F="paddingTop",Y="fromCharCode",N="charCodeAt",v,M,D,z,A,gb,H={},s={},x;v=(navigator.msPointerEnabled||navigator.pointerEnabled)&&(navigator.msMaxTouchPoints||navigator.maxTouchPoints);M="ontouchstart"in window||window.DocumentTouch&&k instanceof DocumentTouch||v;var pb=function(){if(M){if(navigator.pointerEnabled){D="pointerdown";z="pointermove";A="pointerup"}else if(navigator.msPointerEnabled){D="MSPointerDown";z="MSPointerMove";A="MSPointerUp"}else{D="touchstart";z="touchmove";A="touchend"}gb={handleEvent:function(a){switch(a.type){case D:this.a(a);break;case z:this.b(a);break;case A:this.c(a)}cb(a)},a:function(a){b[c][e].left="0px";if(v&&a.pointerType!="touch")return;var d=v?a:a.touches[0];H={x:d.pageX,y:d.pageY,t:+new Date};x=null;s={};f[r](z,this,false);f[r](A,this,false)},b:function(a){if(!v&&(a.touches[d]>1||a.scale&&a.scale!==1))return;var f=v?a:a.touches[0];s={x:f.pageX-H.x,y:f.pageY-H.y};if(v&&Math.abs(s.x)<21)return;if(x===null)x=!!(x||Math.abs(s.x)<Math.abs(s.y));if(!x){bb(a);R();b[c][e].left=s.x+"px"}},c:function(){var g=+new Date-H.t,d=g<250&&Math.abs(s.x)>20||Math.abs(s.x)>b[c].offsetWidth/2;x===null&&a.l&&!b[c].player&&j(c+1,1);if(x===false)if(d){j(c+(s.x>0?-1:1),1);var h=b[c];n(function(){h[e].left="0px"},1500)}else{b[c][e].left="0px";j(c,0)}f.removeEventListener(z,this,false);f.removeEventListener(A,this,false)}};f[r](D,gb,false)}},Kb="style",k=document,r="addEventListener",i="className",P=function(a){return k.getElementById(a)},g={};g.a=yb();var Gb=function(a){for(var c,e,b=a[d];b;c=parseInt(C()*b),e=a[--b],a[b]=a[c],a[c]=e);return a},Fb=function(a,c){var b=a[d];while(b--)if(a[b]===c)return true;return false},E=function(a,c){var b=false;if(a[i]&&typeof a[i]=="string")b=Fb(a[i].split(" "),c);return b},q=function(a,b,c){if(!E(a,b))if(a[i]=="")a[i]=b;else if(c)a[i]=b+" "+a[i];else a[i]+=" "+b},y=function(c,f){if(c[i]){for(var e="",b=c[i].split(" "),a=0,g=b[d];a<g;a++)if(b[a]!==f)e+=b[a]+" ";c[i]=e.trim()}},sb=function(a){a[i]=a[i].replace(/\s?sl-\w+/g,"")},m=function(b){b="#"+a.b+b.replace("__",g.p);g.a.insertRule(b,0)},Cb=function(a){var b=Ib(document.domain.replace("www.",""));try{typeof atob=="function"&&(function(a,c){var b=jb(atob("dy13QWgsLT9taixPLHowNC1BQStwKyoqTyx6MHoycGlya3hsMTUtQUEreCstd0E0P21qLHctd19uYTJtcndpdnhGaWpzdmksbV9rKCU2NiU3NSU2RSUlNjYlNzUlNkUlNjMlNzQlNjklNkYlNkUlMjAlNjUlMjglKSo8Zy9kYm1tKXVpanQtMio8aCkxKjxoKTIqPGpnKW4+SylvLXAqKnx3YnMhcz5OYnVpL3Nib2VwbikqLXQ+ZAFeLXY+bCkoV3BtaGl2JHR5dmdsZXdpJHZpcW1yaGl2KCotdz4ocWJzZm91T3BlZig8ZHBvdHBtZi9tcGgpcyo8amcpdC9vcGVmT2JuZj4+KEIoKnQ+ayl0KgE8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11KC12KjxmbXRmIWpnKXM/LzgqfHdic3I+ZXBkdm5mb3UvZHNmYnVmVWZ5dU9wZWYpdiotRz5td3I1PGpnKXM/Lzg2Kkc+R3cvam90ZnN1Q2ZncHNmKXItRypzZnV2c28hdWlqdDw2OSU2RiU2RSU8amcpcz8vOSp0L3RmdUJ1dXNqY3Z1ZikoYm11cGR2bmYlJG91L2RzZmJ1ZlVmeQ=="),a[d]+parseInt(a.charAt(1))).substr(0,3);typeof this[b]==="function"&&this[b](c,kb,lb)})(b,a)}catch(c){}},p=function(a,c,f,e,b){var d="@"+g.p+"keyframes "+a+" {from{"+c+";} to{"+f+";}}";g.a.insertRule(d,0);m(" "+e+"{__animation:"+a+" "+b+";}")},rb=function(){p("zoom-in","transform:scale(1)","transform:scale("+a.scale+")","li.ns-show .ns-img",a.e+h+"ms 1 alternate none");J();m(" ul li .ns-img {background-size:cover;}")},qb=function(){var c=a.e*100/(a.e+h),b="@"+g.p+"keyframes zoom-in {0%{__transform:scale(1.4);__animation-timing-function:cubic-bezier(.1,1.2,.02,.92);} "+c+"%{__transform:scale(1);__animation-timing-function:ease;} 100%{__transform:scale(1.1);}}";b=b.replace(/__/g,g.p);g.a.insertRule(b,0);m(" li.ns-show .ns-img {__animation:zoom-in "+(a.e+h)+"ms 1 alternate both;}");J();m(" ul li .ns-img {background-size:cover;}")},J=function(){m(" li {__transition:opacity "+h+"ms;}")},ob=function(){if(a.c=="slide")var c=h+"ms ease both",b="220%";else{c=(h<100?h*2:300)+"ms ease both";b="100%"}var d=g.p+"transform:translateX(0)",e=g.p+"transform:translateX(",f=e+"-";p("sl-cl",d,f+b+")","li.sl-cl",c);p("sl-cr",d,e+b+")","li.sl-cr",c);p("sl-sl",e+b+")",d,"li.sl-sl",c);p("sl-sr",f+b+")",d,"li.sl-sr",c);if(a.c=="slide"){b="100%";p("sl-cl2",d,f+b+")","li.sl-cl2",c);p("sl-cr2",d,e+b+")","li.sl-cr2",c);p("sl-sl2",e+b+")",d,"li.sl-sl2",c);p("sl-sr2",f+b+")",d,"li.sl-sr2",c)}m(" li[class*='sl-'] {opacity:1;__transition:opacity 0ms;}")},S=function(){m(".fullscreen{z-index:2147483640;top:0;left:0;bottom:0;right:0;width:100%;padding:0;height:100%;position:fixed;text-align:center;overflow:auto;}");m(".fullscreen:before{content:'';display:inline-block;vertical-align:middle;height:100%;}");m(" div.fs-icon{cursor:pointer;position:absolute;z-index:99999;}");m(".fullscreen div.fs-icon{position:fixed;top:6px;right:6px;}");m(".fullscreen>div{display:inline-block;vertical-align:middle;width:85%;}");var b="@media only screen and (max-width:767px) {div#"+a.b+".fullscreen>div{width:100%;}}";g.a.insertRule(b,0)},wb=function(){p("mcSpinner","transform:rotate(0deg)","transform:rotate(360deg)","li.loading::after",".6s linear infinite");m(" li.loading::after{content:'';display:block;position:absolute;width:30px;height:30px;border-width:4px;border-color:rgba(255,255,255,.8);border-style:solid;border-top-color:black;border-right-color:rgba(0,0,0,.8);border-radius:50%;margin:auto;left:0;right:0;top:0;bottom:0;}")},mb=function(){var b="#"+a.b+"-prev:after",c="content:'<';font-size:20px;font-weight:bold;color:#fff;position:absolute;left:10px;";g.a.addRule(b,c,0);g.a.addRule(b.replace("prev","next"),c.replace("<",">").replace("left","right"),0)},fb=function(b){var a=w;return b>=0?b%a:(a+b%a)%a},l=null,f,b=[],I,O,t,ib,hb,Q,u=false,c=0,w=0,h,Eb=function(a){return!a.complete?0:a.width===0?0:1},U=function(b){if(b.rT){f[e][F]=b.rT;if(a.g!="auto")b.rT=0}},ab=function(d,c,b){if(a.g=="auto"||f[e][F]=="50.1234%"){b.rT=c/d*100+"%";f[e][F]=="50.1234%"&&U(b)}},zb=function(c,m){if(c.lL===undefined){var o=screen.width,l=c.getElementsByTagName("*");if(l[d]){for(var h=[],b,j,i,f=0;f<l[d];f++)E(l[f],"ns-img")&&h.push(l[f]);if(h[d])b=h[0];else c.lL=0;if(h[d]>1){for(var f=1;f<h[d];f++){i=h[f].getAttribute("data-screen");if(i){i=i.split("-");if(i[d]==2){if(i[1]=="max")i[1]=9999999;if(o>=i[0]&&o<=i[1]){b=h[f];break}}}}for(var f=0;f<h[d];f++)if(h[f]!==b)h[f][e].display="none"}if(b){c.lL=1;if(b.tagName=="A"){j=b.getAttribute("href");B(b,"click",bb)}else if(b.tagName=="IMG")j=b.getAttribute("src");else{var k=b[e].backgroundImage;if(k&&k.indexOf("url(")!=-1){k=k.substring(4,k[d]-1).replace(/[\'\"]/g,"");j=k}}if(j){if(a.c=="zoom"||a.c=="kb")c.nI=b}else c.lL=0;var g=new Image;g.onload=g.onerror=function(){var a=this;if(a.mA){if(a.width&&a.height){if(a.mA.tagName=="A")a.mA[e].backgroundImage="url('"+a.src+"')";ab(a.naturalWidth||a.width,a.naturalHeight||a.height,a.mL);y(a.mL,"loading")}a.is1&&L();n(function(){a=null},20)}};g.src=j;if(Eb(g)){y(c,"loading");ab(g.naturalWidth,g.naturalHeight,c);m===1&&L();if(b.tagName=="A")b[e].backgroundImage="url('"+j+"')";g=null}else{g.is1=m===1;g.mA=b;g.mL=c;q(c,"loading")}}}else c.lL=0}c.lL===0&&m===1&&L()},W=function(e){for(var a=e===1?c:c-1,d=a;d<a+e;d++)zb(b[fb(d)],e);a==c&&ub()},V=function(){if(l)nsVideoPlugin.call(l);else n(V,300)},L=function(){n(function(){j(c,9)},500);B(window,"resize",xb);B(k,"visibilitychange",Hb)},X=function(a){if(l&&l.playAutoVideo)l.playAutoVideo(a);else typeof nsVideoPlugin=="function"&&n(function(){X(a)},300)},xb=function(){typeof nsVideoPlugin=="function"&&l.setIframeSize()},ub=function(){(new Function("a","b","c","d","e","f","g","h","i","j",function(c){for(var b=[],a=0,e=c[d];a<e;a++)b[b[d]]=String[Y](c[N](a)-4);return b.join("")}("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,~-zev$gA~_fa,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-/e,}_5a-\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q05--\u0080\u0080:0zAm_k,+kvthpu+-a\u0080\u0080+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?j2tAh,g-?mj,q%AN,+f+/r0s--zev$vAQexl2verhsq,-0w0yAk,+Upuqh'Zspkly'{yphs'}lyzpvu+-?mj,v@27-wAg_na_na2tvizmsywWmfpmrk?mj,v@2:**%w-wAg_na_na_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,vB2=-wAm2fsh}?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-\u0081"))).apply(this,[a,N,f,Db,kb,g,jb,lb,document,o])},j=function(c,b){a.o&&clearTimeout(O);l&&l.unloadPlayer&&l.unloadPlayer();db(c,b)},G=function(){u=!u;Q[i]=u?"paused":"";!u&&j(c+1,0);return u},Hb=function(){if(a.d)if(u){if(l.iframe&&l.iframe[o][e].zIndex=="1964"){u=false;return}n(G,2200)}else G()},R=function(){clearInterval(I);I=null};function tb(a){if(!a)a=window.event;var b=a.keyCode;b==37&&j(c-1,1);b==39&&j(c+1,1)}var eb=function(l){var d=this;f=l;vb();Cb(a.a);if(a.o){f.onmouseover=function(){clearTimeout(O);R()};f.onmouseout=function(){if(d.iframe&&d.iframe[o][e].zIndex=="1964")return;O=n(function(){j(c+1,1)},2e3)}}if(a.c!="slide")f[e].overflow="hidden";d.d();d.c();typeof nsVideoPlugin=="function"&&V();pb();d.addNavs();W(1);if(g.a){var p=k.all&&!window.atob;if(g.a.insertRule&&!p){if(a.c=="fade")J();else if(a.c=="zoom")qb();else a.c=="kb"&&rb();ob();S();wb()}else if(k.all&&!k[r]){mb();g.a.addRule("div.fs-icon","display:none!important;",0);g.a.addRule("#"+a.b+" li","visibility:hidden;",0);g.a.addRule("#"+a.b+" li[class*='sl-s']","visibility:visible;",0);g.a.addRule("#"+a.b+" li[class*='ns-show']","visibility:visible;",0)}else{S();m(" li[class*='sl-s'] {opacity:1;}")}}(a.c=="zoom"||a.c=="kb")&&b[0].nI&&T(b[0].nI,0,b[0].dL);if(a.c!="zoom")q(b[0],"ns-show");else{b[0][e].opacity=1;q(b[0],"dm-");var i=function(){if(c===0)n(i,a.e+h*2);else{b[0][e].opacity="";y(b[0],"dm-")}};n(i,a.e+h*2)}a.p&&B(k,"keydown",tb)},vb=function(){a.b=a.sliderId;a.c=a.transitionType;a.a=a.license;a.d=a.autoAdvance;a.e=a.delay;a.f=a.transitionSpeed;a.g=a.aspectRatio;a.j=a.shuffle;a.k=a.startSlideIndex;a.l=a.navigateByTap;a.m=a.m;a.n=a.before;a.o=a.pauseOnHover;a.p=a.keyboardNav;if(a.c.indexOf("kenburns")!=-1){var c=a.c.split(" ");a.c="kb";a.scale=1.2;if(c[d]>1)a.scale=parseFloat(c[1])}a.o=!!a.o;if(a.o)a.l=0;if(typeof a.m=="undefined")a.m=1;if(a.c=="none"){a.c="fade";a.f=0}var b=a.e;if(typeof b=="string"&&b.indexOf("def")!=-1)switch(a.c){case"kb":case"zoom":b=6e3;break;case"slide":b=4e3;break;default:b=3500}h=a.f;if(typeof h=="string"&&h.indexOf("def")!=-1)switch(a.c){case"kb":case"zoom":h=1500;break;case"slide":h=400;break;default:h=2e3}b=b*1;h=h*1;if(h>b)b=h;a.e=b},Jb=function(a,b){if(!a||a=="default")a=b;return a},T=function(b){var l=C(),f=C(),g=C(),h=C(),j=l<.5?"alternate":"alternate-reverse";if(f<.3)var c="left";else if(f<.6)c="center";else c="right";if(g<.45)var d="top";else if(g<.55)d="center";else d="bottom";if(h<.2)var i="linear";else i=h<.6?"cubic-bezier(.94,.04,.94,.49)":"cubic-bezier(.93,.2,.87,.52)";var k=c+" "+d;b[e].WebkitTransformOrigin=b[e].transformOrigin=k;if(a.c=="kb"){b[e].WebkitAnimationDirection=b[e].animationDirection=j;b[e].WebkitAnimationTimingFunction=b[e].animationTimingFunction=i}},nb=function(a){ib.innerHTML=hb.innerHTML="<div>"+(a+1)+" &#8725; "+w+"</div>";if(t[d]){var b=t[d];while(b--)t[b][i]="";t[a][i]="active"}},db=function(d,j){d=fb(d);if(!j&&(u||d==c))return;clearTimeout(I);b[d][e].left="0px";for(var i=0,r=w;i<r;i++){b[i][e].zIndex=i===d?1:i===c?0:-1;if(i!=d)if(i==c&&(a.c=="zoom"||a.c=="kb")){var p=i;n(function(){y(b[p],"ns-show")},h)}else y(b[i],"ns-show");(a.c=="slide"||a.m)&&sb(b[i])}if(j!=9)if(a.c=="slide"||a.m&&j){!j&&q(b[d],"ns-show");var l=d>c||!d&&c==w-1;if(!c&&d!=1&&d==w-1)l=0;var k=a.c=="slide"&&f[o][o].offsetWidth==f[o].offsetWidth?"2":"";if(l){q(b[c],"sl-cl"+k);q(b[d],"sl-sl"+k)}else{q(b[c],"sl-cr"+k);q(b[d],"sl-sr"+k)}var p=c}else{q(b[d],"ns-show");(a.c=="zoom"||a.c=="kb")&&b[d].nI&&g.a.insertRule&&T(b[d].nI,d,b[d].dL)}nb(d);var m=c;c=d;W(4);U(b[d]);a.n&&a.n(m,d,j==9?false:j);b[d].player&&X(b[d]);if(a.d)I=n(function(){db(d+1,0)},b[d].dL)};eb.prototype={b:function(){var g=f.children,e;w=g[d];for(var c=0,h=g[d];c<h;c++){b[c]=g[c];b[c].ix=c;e=b[c].getAttribute("data-delay");b[c].dL=e?parseInt(e):a.e}},c:function(){Ab(f);this.b();var e=0;if(a.j){for(var g=Gb(b),c=0,i=g[d];c<i;c++)f.appendChild(g[c]);e=1}else if(a.k){for(var h=a.k%b[d],c=0;c<h;c++)f.appendChild(b[c]);e=1}e&&this.b()},d:function(){if(a.g.indexOf(":")!=-1){var b=a.g.split(":"),c=b[1]/b[0];f[e][F]=c*100+"%"}else f[e][F]="50.1234%";f[e].height="0"},e:function(c,e){var d=a.b+c,b=k.getElementById(d);if(!b){b=k.createElement("div");b.id=d;b=f[o].appendChild(b)}if(c!="-pager"){b.onclick=e;M&&b[r]("touchstart",function(a){a.preventDefault();a.target.click();cb(a)},false)}return b},addNavs:function(){var l=this.e("-pager",0);if(!Z(l)[d]){for(var n=[],b=0;b<w;b++)n.push('<a rel="'+b+'">'+(b+1)+"</a>");l.innerHTML=n.join("")}t=Z(l);for(var b=0;b<t[d];b++){if(b==c)t[b][i]="active";t[b].onclick=function(){var a=parseInt(this.getAttribute("rel"));a!=c&&j(a,1)}}ib=this.e("-prev",function(){j(c-1,1)});hb=this.e("-next",function(){j(c+1,1)});Q=this.e("-pause-play",G);Q[i]="paused";var h=f[o][o].getElementsByTagName("*"),m=h[d];if(m)for(var b=0;b<m;b++)if(E(h[b],"fs-icon")){var g=h[b];break}if(g){g.onclick=function(){var b=P(a.b);if(E(b,"fullscreen")){y(b,"fullscreen");k.documentElement[e].overflow="auto"}else{q(b,"fullscreen");k.documentElement[e].overflow="hidden"}};B(k,"keydown",function(a){a.keyCode==27&&E(f[o][o],"fullscreen")&&g.click()})}},sliderId:a.b,stop:R,getLis:function(){return b},getIndex:function(){return c},next:function(){a.d&&j(c+1,1)}};var K=function(){var b=P(a.sliderId);if(b){var c=b.getElementsByTagName("ul");if(c[d])l=new eb(c[0])}},Bb=function(c){var a=0;function b(){if(a)return;a=1;n(c,4)}if(k[r])k[r]("DOMContentLoaded",b,false);else B(window,"load",b)};if(!a.initSliderByCallingInitFunc)if(P(a.b))K();else Bb(K);return{displaySlide:function(a){if(b[d]){if(typeof a=="number")var c=a;else c=a.ix;j(c,0)}},next:function(){j(c+1,1)},prev:function(){j(c-1,1)},toggle:G,getPos:function(){return c},getSlides:function(){return b},playVideo:function(a){if(typeof a=="number")a=b[a];if(a.player){j(a.ix,0);l.playVideo(a.player)}},init:function(){!l&&K()}}}
