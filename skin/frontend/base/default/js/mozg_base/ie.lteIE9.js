/*

No IE 8, No checkout nativo não funciona o easter_egg do formulario em billing e não consegue avançar apos o preenchimento, com o script a seguir funciona os processos no checkout nativo

No checkout IWD_Opc no uso do script a seguir some o bloco dos métodos de pagamentos devido ao script DOMTokenList e do erro conhecido "jquery.html() does not work on ie8"

https://www.npmjs.com/package/fix-ie

*/


/* HTML5 Shiv 3.7.3 */
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);


/** add/removeEventListener */
/*!function(){if(!document.createElement("div").addEventListener){var e="_eventListeners",t=function(t,n){var r=this;e in r||(r[e]={}),r[e][t]||(r[e][t]=[]);var i,o=r[e][t];for(i in o)if(n===o[i][0])return;o.push([n,n=function(e){return function(t){return"target"in(t=t||window.event)||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){this.returnValue=!1}),e.call(r,t)}}(n)]),r.attachEvent("on"+t,n)},n=function(t,n){var r=this;e in r||(r[e]={}),r[e][t]||(r[e][t]=[]);var i,o=r[e][t];for(i in o)n===o[i][0]&&(r.detachEvent("on"+t,o[i][1]),delete o[i])};Object.defineProperty(Element.prototype,"addEventListener",{value:t}),Object.defineProperty(Element.prototype,"removeEventListener",{value:n}),document.addEventListener=window.addEventListener=t,document.removeEventListener=window.removeEventListener=n}}();*/

/** DOMTokenList */
/*!function(){var n,r,t,i,e=window,o=document,f=Object,c=!0,u=!1,a=" ",l="Element",s="create"+l,d="DOMTokenList",h="__defineGetter__",p="defineProperty",v="class",m="List",g=v+m,y="rel",w=y+m,L="div",_="length",b="contains",j="apply",S="HTML",k=("item "+b+" add remove toggle toString toLocaleString").split(a),E=k[2],A=k[3],C=k[4],M="prototype",N=p in f||h in f[M]||null,O=function(n,r,t,i){f[p]?f[p](n,r,{configurable:u===N?c:!!i,get:t}):n[h](r,t)},T=function(r,t){var i=this,e=[],o={},l=0,s=0,d=function(){if(l>=s)for(;l>s;++s)!function(n){O(i,n,function(){return h(),e[n]},u)}(s)},h=function(){var n,i,f=arguments,u=/\s+/;if(f[_])for(i=0;i<f[_];++i)if(u.test(f[i]))throw n=new SyntaxError('String "'+f[i]+'" '+b+" an invalid character"),n.code=5,n.name="InvalidCharacterError",n;for(""===(e=(""+r[t]).replace(/^\s+|\s+$/g,"").split(u))[0]&&(e=[]),o={},i=0;i<e[_];++i)o[e[i]]=c;l=e[_],d()};return h(),O(i,_,function(){return h(),l}),i[k[6]]=i[k[5]]=function(){return h(),e.join(a)},i.item=function(n){return h(),e[n]},i[b]=function(n){return h(),!!o[n]},i[E]=function(){h[j](i,n=arguments);for(var n,f,u=0,s=n[_];s>u;++u)f=n[u],o[f]||(e.push(f),o[f]=c);l!==e[_]&&(l=e[_]>>>0,r[t]=e.join(a),d())},i[A]=function(){h[j](i,n=arguments);for(var n,f={},u=0,s=[];u<n[_];++u)f[n[u]]=c,delete o[n[u]];for(u=0;u<e[_];++u)f[e[u]]||s.push(e[u]);e=s,l=s[_]>>>0,r[t]=e.join(a),d()},i[C]=function(r,t){return h[j](i,[r]),n!==t?t?(i[E](r),c):(i[A](r),u):o[r]?(i[A](r),u):(i[E](r),c)},function(n,r){if(r)for(var t=0;7>t;++t)r(n,k[t],{enumerable:u})}(i,f[p]),i},x=function(n,r,t){O(n[M],r,function(){var n,i=this,e=h+p+r;if(i[e])return n;if(i[e]=c,u===N){for(var f,a=x.mirror=x.mirror||o[s](L),l=a.childNodes,d=l[_],v=0;d>v;++v)if(l[v]._R===i){f=l[v];break}f||(f=a.appendChild(o[s](L))),n=T.call(f,i,t)}else n=new T(i,t);return O(i,r,function(){return n}),delete i[e],n},c)};if(e[d])r=o[s](L)[g],M=e[d][M],r[E][j](r,k),2>r[_]&&(t=M[E],i=M[A],M[E]=function(){for(var n=0,r=arguments;n<r[_];++n)t.call(this,r[n])},M[A]=function(){for(var n=0,r=arguments;n<r[_];++n)i.call(this,r[n])}),r[C](m,u)&&(M[C]=function(r,t){var i=this;return i[(t=n===t?!i[b](r):t)?E:A](r),!!t});else{if(N)try{O({},"support")}catch(D){N=u}T.polyfill=c,e[d]=T,x(e[l],g,v+"Name"),x(e[S+"Link"+l],w,y),x(e[S+"Anchor"+l],w,y),x(e[S+"Area"+l],w,y)}}();*/

/** getComputedStyle */
window.getComputedStyle=window.getComputedStyle||function(t){if(!t)return null;var e=t.currentStyle,o=t.getBoundingClientRect(),n=document.createElement("div").style;for(var i in e)n[i]=e[i];return n.cssFloat=n.styleFloat,"auto"===n.width&&(n.width=o.right-o.left+"px"),"auto"===n.height&&(n.height=o.bottom-o.top+"px"),n};


/** ECMAScript extensions */
Array.prototype.every||(Array.prototype.every=function(r,t){var e,n;if(null==this)throw new TypeError("'this' is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError;for(arguments.length>1&&(e=t),n=0;n<i;){var f;if(n in o&&(f=o[n],!r.call(e,f,n,o)))return!1;n++}return!0}),Array.prototype.filter||(Array.prototype.filter=function(r){if(void 0===this||null===this)throw new TypeError;var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError;for(var n,o=[],i=arguments.length>=2?arguments[1]:void 0,f=0;f<e;f++)f in t&&r.call(i,n=t[f],f,t)&&o.push(n);return o}),Array.prototype.forEach||(Array.prototype.forEach=function(r,t){var e,n;if(null===this)throw new TypeError(" this is null or not defined");var o=Object(this),i=o.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(e=t),n=0;n<i;){var f;n in o&&(f=o[n],r.call(e,f,n,o)),n++}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(r,t){var e;if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return-1;var i=+t||0;if(Math.abs(i)===Infinity&&(i=0),i>=o)return-1;for(e=Math.max(i>=0?i:o-Math.abs(i),0);e<o;){if(e in n&&n[e]===r)return e;e++}return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(r){if(void 0===this||null===this)throw new TypeError;var t,e,n=Object(this),o=n.length>>>0;if(0===o)return-1;for(t=o-1,arguments.length>1&&((t=Number(arguments[1]))!=t?t=0:0!=t&&t!=1/0&&t!=-1/0&&(t=(t>0||-1)*Math.floor(Math.abs(t)))),e=t>=0?Math.min(t,o-1):o-Math.abs(t);e>=0;e--)if(e in n&&n[e]===r)return e;return-1}),Array.prototype.map||(Array.prototype.map=function(r,t){var e,n,o;if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),f=i.length>>>0;if("function"!=typeof r)throw new TypeError(r+" is not a function");for(arguments.length>1&&(e=t),n=new Array(f),o=0;o<f;){var a,l;o in i&&(a=i[o],l=r.call(e,a,o,i),n[o]=l),o++}return n}),Array.prototype.reduce||(Array.prototype.reduce=function(r){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var t,e=Object(this),n=e.length>>>0,o=0;if(2===arguments.length)t=arguments[1];else{for(;o<n&&!(o in e);)o++;if(o>=n)throw new TypeError("Reduce of empty array with no initial value");t=e[o++]}for(;o<n;o++)o in e&&(t=r(t,e[o],o,e));return t}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(r){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var t,e=Object(this),n=(e.length>>>0)-1;if(arguments.length>=2)t=arguments[1];else{for(;n>=0&&!(n in e);)n--;if(n<0)throw new TypeError("Reduce of empty array with no initial value");t=e[n--]}for(;n>=0;n--)n in e&&(t=r(t,e[n],n,e));return t}),Array.prototype.some||(Array.prototype.some=function(r){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof r)throw new TypeError;for(var t=Object(this),e=t.length>>>0,n=arguments.length>=2?arguments[1]:void 0,o=0;o<e;o++)if(o in t&&r.call(n,t[o],o,t))return!0;return!1});
Date.now                = Date.now                || function(){return +new Date};
String.prototype.trim   = String.prototype.trim   || function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");};
Object.defineProperties = Object.defineProperties || function(obj, props){for(var i in props) Object.defineProperty(obj, i, props[i]);};
Array.isArray           = Array.isArray           || function(obj){return "[object Array]" === Object.prototype.toString.call(obj)};
Number.isNaN            = Number.isNaN            || function(val){return val !== val};
String.prototype.repeat = String.prototype.repeat || function(num){return Array(num + 1).join(this)};


/** Store "constants" on the window object to flag specific versions of Explorer. */
/*(function(){
	var i      = 6,
	WIN        = window,
	DOC        = document,
	IE_VERSION = "IE_VERSION";

	function is(v){
		var div = DOC.createElement("div");
		div.innerHTML = "<!--[if " + v + "]><i></i><![endif]-->";
		return div.getElementsByTagName("i").length;
	}

	for(; i < 10; ++i) if(is("IE " + i))
		WIN["IS_IE" + i ] = true,
		WIN[ IE_VERSION ] = i;

	is("IEMobile") && (WIN.IS_IEMobile = true);

	// Might as well flag the root element with CSS classes while we're here.
	DOC.documentElement.classList.add("ie", "ie"+WIN[ IE_VERSION ]);
}());*/


/** Object.defineProperty patch */
/*(function(){try{Object.defineProperty({},"s",{value:!0})}catch(t){return!0}})()&&(window.IE8PP=function(t){if(t instanceof Element)return t;if("function"==typeof t)return function(){var e=document.createElement("s");for(var r in t.prototype)e[r]=t.prototype[r];return e.prototype=t.prototype,t.apply(e,arguments),e};var e=document.createElement("s");for(var r in t)e[r]=t[r];return e.prototype=t,e});*/


/** childElementCount, firstElementChild, lastElementChild, nextElementSibling, previousElementSibling */
/*!function(){var n={firstElementChild:function(){for(var n,e=this.children,t=0,i=e.length;t<i;++t)if(1===(n=e[t]).nodeType)return n;return null},lastElementChild:function(){for(var n,e=this.children,t=e.length-1;t>=0;--t)if(1===(n=e[t]).nodeType)return n;return null},nextElementSibling:function(){for(var n=this.nextSibling;n&&1!==n.nodeType;)n=n.nextSibling;return n},previousElementSibling:function(){for(var n=this.previousSibling;n&&1!==n.nodeType;)n=n.previousSibling;return n},childElementCount:function(){for(var n=0,e=this.children,t=0,i=e.length;t<i;++t)1===e[t].nodeType&&++n;return n}};for(var e in n)e in document.documentElement||Object.defineProperty(Element.prototype,e,{get:n[e]})}();*/

/** window{ pageXOffset, pageYOffset, innerWidth, innerHeight }, event{ pageX, pageY } */
/*"pageXOffset"in window||function(){var e=function(){return(document.documentElement||document.body.parentNode||document.body).scrollLeft},t=function(){return(document.documentElement||document.body.parentNode||document.body).scrollTop};Object.defineProperty(window,"pageXOffset",{get:e}),Object.defineProperty(window,"pageYOffset",{get:t}),Object.defineProperty(window,"scrollX",{get:e}),Object.defineProperty(window,"scrollY",{get:t})}(),"innerWidth"in window||(Object.defineProperty(window,"innerWidth",{get:function(){return(document.documentElement||document.body.parentNode||document.body).clientWidth}}),Object.defineProperty(window,"innerHeight",{get:function(){return(document.documentElement||document.body.parentNode||document.body).clientHeight}})),window.MouseEvent||"pageX"in Event.prototype||(Object.defineProperty(Event.prototype,"pageX",{get:function(){return this.clientX+window.pageXOffset}}),Object.defineProperty(Event.prototype,"pageY",{get:function(){return this.clientY+window.pageYOffset}}));*/

/** ChildNode.remove */
/*"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});*/

/** Node.textContent */
/*!function(){if(!("textContent"in Element.prototype)){for(var e,t="Element Text HTMLDocument HTMLCommentElement".split(" "),n={3:1,8:1,4:1,7:1},o={9:1,10:1,12:1},r={SCRIPT:1,STYLE:1},i=0;i<4;++i)(e=window[t[i]])&&Object.defineProperty(e.prototype,"textContent",{get:function(){return s(this)},set:function(e){var t=this.nodeType;if(n[t])this.nodeValue=e;else if(!o[t]){var i=this.nodeName;"STYLE"===i?this.styleSheet.cssText=e:r[i]?this.text=e:this.innerText=e}}});function s(e){var t=e.nodeType;if(n[t])return e.nodeValue;if(o[t])return null;var i=e.nodeName;if(i&&r[i])return e.innerHTML;for(var s="",u=e.childNodes,f=0,T=u.length;f<T;++f){var d=u[f];7!==d.nodeType&&8!==d.nodeType&&(s+=d.textContent)}return s}}}();*/
