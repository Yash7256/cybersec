(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30015,(e,t,r)=>{var s={229:function(e){var t,r,s,n=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var c=[],l=!1,d=-1;function u(){l&&s&&(l=!1,s.length?c=s.concat(c):d=-1,c.length&&x())}function x(){if(!l){var e=i(u);l=!0;for(var t=c.length;t;){for(s=c,c=[];++d<t;)s&&s[d].run();d=-1,t=c.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||i(x)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw Error("process.chdir is not supported")},n.umask=function(){return 0}}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}},o=!0;try{s[e](r,r.exports,a),o=!1}finally{o&&delete n[e]}return r.exports}a.ab="/ROOT/CyberSec-Main/node_modules/next/dist/compiled/process/",t.exports=a(229)},11199,(e,t,r)=>{"use strict";var s,n;t.exports=(null==(s=e.g.process)?void 0:s.env)&&"object"==typeof(null==(n=e.g.process)?void 0:n.env)?e.g.process:e.r(30015)},27154,(e,t,r)=>{"use strict";var s=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator,m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,b={};function j(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||m}function y(){}function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||m}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=j.prototype;var v=g.prototype=new y;v.constructor=g,f(v,j.prototype),v.isPureReactComponent=!0;var N=Array.isArray,w=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:s,type:e,key:o,ref:i,props:a,_owner:_.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var P=/\/+/g;function k(e,t){var r,s;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,s={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return s[e]})):t.toString(36)}function A(e,t,r){if(null==e)return e;var a=[],o=0;return!function e(t,r,a,o,i){var c,l,d,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var x=!1;if(null===t)x=!0;else switch(u){case"string":case"number":x=!0;break;case"object":switch(t.$$typeof){case s:case n:x=!0}}if(x)return i=i(x=t),t=""===o?"."+k(x,0):o,N(i)?(a="",null!=t&&(a=t.replace(P,"$&/")+"/"),e(i,r,a,"",function(e){return e})):null!=i&&(T(i)&&(c=i,l=a+(!i.key||x&&x.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+t,i={$$typeof:s,type:c.type,key:l,ref:c.ref,props:c.props,_owner:c._owner}),r.push(i)),1;if(x=0,o=""===o?".":o+":",N(t))for(var p=0;p<t.length;p++){var m=o+k(u=t[p],p);x+=e(u,r,a,m,i)}else if("function"==typeof(m=null===(d=t)||"object"!=typeof d?null:"function"==typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(t=m.call(t),p=0;!(u=t.next()).done;)m=o+k(u=u.value,p++),x+=e(u,r,a,m,i);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return x}(e,a,"","",function(e){return t.call(r,e,o++)}),a}function I(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var C={current:null},R={transition:null};r.Children={map:A,forEach:function(e,t,r){A(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=j,r.Fragment=a,r.Profiler=i,r.PureComponent=g,r.StrictMode=o,r.Suspense=u,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:R,ReactCurrentOwner:_},r.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=f({},e.props),a=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!S.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];n.children=c}return{$$typeof:s,type:e.type,key:a,ref:o,props:n,_owner:i}},r.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:d,render:e}},r.isValidElement=T,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},r.memo=function(e,t){return{$$typeof:x,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,t){return C.current.useCallback(e,t)},r.useContext=function(e){return C.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return C.current.useDeferredValue(e)},r.useEffect=function(e,t){return C.current.useEffect(e,t)},r.useId=function(){return C.current.useId()},r.useImperativeHandle=function(e,t,r){return C.current.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return C.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return C.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return C.current.useMemo(e,t)},r.useReducer=function(e,t,r){return C.current.useReducer(e,t,r)},r.useRef=function(e){return C.current.useRef(e)},r.useState=function(e){return C.current.useState(e)},r.useSyncExternalStore=function(e,t,r){return C.current.useSyncExternalStore(e,t,r)},r.useTransition=function(){return C.current.useTransition()},r.version="18.2.0"},18300,(e,t,r)=>{"use strict";t.exports=e.r(27154)},39740,(e,t,r)=>{"use strict";var s=e.r(18300),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var s,a={},l=null,d=null;for(s in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===a[s]&&(a[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:d,props:a,_owner:i.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},73748,(e,t,r)=>{"use strict";t.exports=e.r(39740)},81396,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},47910,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return s}});let s=e.r(81396)._(e.r(18300)).default.createContext({})},38940,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},45589,(e,t,r)=>{"use strict";function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}},73740,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let s=e.r(18300),n="u"<typeof window,a=n?()=>{}:s.useLayoutEffect,o=n?()=>{}:s.useEffect;function i(e){let{headManager:t,reduceComponentsToState:r}=e;function i(){if(t&&t.mountedInstances){let e=s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),i()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},36792,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={default:function(){return m},defaultHead:function(){return u}};for(var n in s)Object.defineProperty(r,n,{enumerable:!0,get:s[n]});let a=e.r(81396),o=e.r(45589),i=e.r(73748),c=o._(e.r(18300)),l=a._(e.r(73740)),d=e.r(47910);function u(){return[(0,i.jsx)("meta",{charSet:"utf-8"},"charset"),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function x(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(38940);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,s,n;return e.reduce(x,[]).reverse().concat(u().reverse()).filter((t=new Set,r=new Set,s=new Set,n={},e=>{let a=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)s.has(r)?a=!1:s.add(r);else{let t=e.props[r],s=n[r]||new Set;("name"!==r||!o)&&s.has(t)?a=!1:(s.add(t),n[r]=s)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return c.default.cloneElement(e,{key:r})})}let m=function({children:e}){let t=(0,c.useContext)(d.HeadManagerContext);return(0,i.jsx)(l.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},42127,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return g},NormalizeError:function(){return j},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return f},WEB_VITALS:function(){return a},execOnce:function(){return o},getDisplayName:function(){return u},getLocationOrigin:function(){return l},getURL:function(){return d},isAbsoluteUrl:function(){return c},isResSent:function(){return x},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return N}};for(var n in s)Object.defineProperty(r,n,{enumerable:!0,get:s[n]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...s)=>(r||(r=!0,t=e(...s)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>i.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=l();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function x(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let s=await e.getInitialProps(t);if(r&&x(r))return s;if(!s)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${s}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return s}let m="u">typeof performance,f=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class j extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class g extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function N(e){return JSON.stringify({message:e.message,stack:e.stack})}},75058,e=>{"use strict";var t=e.i(73748),r=e.i(1054),s=e.i(14052),n=e.i(18300),a=e.i(58112),o=e.i(92425),i=e.i(74307),c=e.i(2001);let l=[{label:"Home",href:"/"},{label:"Features",href:"/features"},{label:"Pricing",href:"/#pricing"},{label:"Docs",href:"/docs"},{label:"GitHub",href:"https://github.com"}],d=({children:e,delay:r=0})=>(0,t.jsx)(a.motion.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:r},viewport:{once:!0,amount:.2},children:e});function u(){let[e,a]=(0,n.useState)(!1),[u,x]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>x(window.scrollY>12);return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)("div",{className:"min-h-screen bg-[#070a18] text-white",children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:"CyberSec-CLI | API"}),(0,t.jsx)("meta",{name:"description",content:"Explore the CyberSec-CLI API for automation, streaming scans, and integrations."}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,t.jsx)("div",{className:"relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8",children:(0,t.jsxs)("div",{className:"relative rounded-[32px] border border-purple-500/40 bg-[#0b1024]/95 shadow-[0_0_60px_rgba(168,85,247,0.2)] overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0 rounded-[32px] bg-grid opacity-40"}),(0,t.jsx)("div",{className:"absolute inset-0 rounded-[32px] bg-dots opacity-30 animate-glow"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("header",{className:`sticky top-0 z-50 transition-all ${u?"backdrop-blur-xl bg-[#0b1024]/80 border-b border-white/10":"bg-transparent"}`,children:[(0,t.jsxs)("nav",{className:"max-w-7xl mx-auto px-6 py-3 flex items-center justify-between","aria-label":"Primary",children:[(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("div",{className:"h-52 w-52 grid place-items-center",children:(0,t.jsx)(s.default,{src:"/logo.png",alt:"CyberSec logo",width:200,height:200})})}),(0,t.jsx)("div",{className:"hidden lg:flex items-center gap-8 text-sm text-gray-300",children:l.map(e=>(0,t.jsx)("a",{href:e.href,className:"hover:text-white transition-colors",...e.href.startsWith("http")?{target:"_blank",rel:"noreferrer"}:{},children:e.label},e.label))}),(0,t.jsxs)("div",{className:"hidden lg:flex items-center gap-4",children:[(0,t.jsx)("a",{href:"/dashboard",className:"px-5 py-2 rounded-full border border-white/20 text-sm text-gray-200 hover:border-white/40 hover:text-white transition-all",children:"Dashboard"}),(0,t.jsx)("a",{href:"/#cta",className:"px-5 py-2 rounded-full text-sm font-semibold bg-purple-blue hover:shadow-glow transition-all",children:"Get Started"})]}),(0,t.jsx)("button",{type:"button",className:"lg:hidden p-2 rounded-md border border-white/10","aria-label":"Toggle navigation","aria-expanded":e,"aria-controls":"mobile-menu",onClick:()=>a(e=>!e),children:e?(0,t.jsx)(o.HiXMark,{className:"h-6 w-6"}):(0,t.jsx)(o.HiBars3,{className:"h-6 w-6"})})]}),e&&(0,t.jsx)("div",{id:"mobile-menu",className:"lg:hidden px-6 pb-6",children:(0,t.jsxs)("div",{className:"glass-panel rounded-2xl p-4 flex flex-col gap-3 text-gray-200",children:[l.map(e=>(0,t.jsx)("a",{href:e.href,className:"py-2 px-3 rounded-lg hover:bg-white/5",...e.href.startsWith("http")?{target:"_blank",rel:"noreferrer"}:{},children:e.label},e.label)),(0,t.jsxs)("div",{className:"pt-4 flex flex-col gap-3",children:[(0,t.jsx)("a",{href:"/dashboard",className:"px-4 py-2 rounded-full border border-white/20 text-center",children:"Dashboard"}),(0,t.jsx)("a",{href:"/#cta",className:"px-4 py-2 rounded-full text-center bg-purple-blue",children:"Get Started"})]})]})})]}),(0,t.jsxs)("main",{className:"relative overflow-hidden",children:[(0,t.jsx)("section",{className:"max-w-7xl mx-auto px-6 pt-20 pb-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("p",{className:"text-sm uppercase tracking-[0.4em] text-cyan-300",children:"API Documentation"}),(0,t.jsx)("h1",{className:"text-4xl md:text-5xl font-heading mt-4",children:"CyberSec-CLI API Documentation"}),(0,t.jsxs)("p",{className:"text-gray-300 mt-4 max-w-3xl mx-auto",children:["Version: ",(0,t.jsx)("span",{className:"text-cyan-300",children:"1.0.0"})," • Base URL:"," ",(0,t.jsx)("code",{className:"text-cyan-300",children:"http://localhost:8000/api/v1"})," • Authentication: API Key (Bearer Token)"]})]})})}),(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 py-8",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-6 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-xl font-heading",children:"Table of Contents"}),(0,t.jsxs)("div",{className:"mt-4 grid gap-2 text-sm text-gray-300",children:[(0,t.jsx)("a",{href:"#authentication",className:"hover:text-white",children:"1. Authentication"}),(0,t.jsx)("a",{href:"#rate-limiting",className:"hover:text-white",children:"2. Rate Limiting"}),(0,t.jsx)("a",{href:"#response-format",className:"hover:text-white",children:"3. Response Format"}),(0,t.jsx)("a",{href:"#error-codes",className:"hover:text-white",children:"4. Error Codes"}),(0,t.jsx)("a",{href:"#endpoints",className:"hover:text-white",children:"5. Endpoints"}),(0,t.jsx)("a",{href:"#scan-operations",className:"hover:text-white",children:"- Scan Operations"}),(0,t.jsx)("a",{href:"#results-management",className:"hover:text-white",children:"- Results Management"}),(0,t.jsx)("a",{href:"#ai-assistant",className:"hover:text-white",children:"- AI Assistant"}),(0,t.jsx)("a",{href:"#system-health",className:"hover:text-white",children:"- System & Health"}),(0,t.jsx)("a",{href:"#websocket-api",className:"hover:text-white",children:"6. WebSocket API"}),(0,t.jsx)("a",{href:"#sse",className:"hover:text-white",children:"7. Server-Sent Events (SSE)"}),(0,t.jsx)("a",{href:"#code-examples",className:"hover:text-white",children:"8. Code Examples"})]})]})})}),(0,t.jsx)("section",{id:"authentication",className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)(o.HiOutlineCloudArrowUp,{className:"h-7 w-7 text-cyberPurple"}),(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Authentication"})]}),(0,t.jsx)("p",{className:"text-sm text-gray-300 mt-3",children:"All API requests require authentication using an API key passed in the Authorization header."}),(0,t.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Getting an API Key"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}`})}),(0,t.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"Response:"}),(0,t.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`{
  "success": true,
  "data": {
    "user_id": "usr_abc123",
    "api_key": "sk_live_abc123xyz789",
    "expires_at": "2025-12-31T23:59:59Z"
  }
}`})}),(0,t.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Using API Keys"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`GET /api/v1/scans
Authorization: Bearer sk_live_abc123xyz789`})})]})})}),(0,t.jsx)("section",{id:"rate-limiting",className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)(o.HiOutlineBolt,{className:"h-7 w-7 text-cyberCyan"}),(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Rate Limiting"})]}),(0,t.jsxs)("div",{className:"mt-4 grid gap-3 text-sm text-gray-300",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"Free Tier:"})," 10 scans/day • 100 API requests/hour • 2 concurrent scans"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"Pro Tier:"})," Unlimited scans • 1000 API requests/hour • 10 concurrent scans"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"Enterprise Tier:"})," Unlimited everything • Custom rate limits"]})]}),(0,t.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Rate Limit Headers"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 998
X-RateLimit-Reset: 1640995200`})}),(0,t.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"When rate limited:"}),(0,t.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Retry after 3600 seconds.",
    "retry_after": 3600
  }
}`})})]})})}),(0,t.jsx)("section",{id:"response-format",className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Response Format"}),(0,t.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Success Response"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`{
  "success": true,
  "data": {
    // Response data here
  },
  "metadata": {
    "timestamp": "2024-02-06T12:00:00Z",
    "request_id": "req_abc123"
  }
}`})}),(0,t.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Error Response"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`{
  "success": false,
  "error": {
    "code": "INVALID_TARGET",
    "message": "Target hostname is invalid",
    "details": {
      "field": "target",
      "value": "invalid..host"
    }
  },
  "metadata": {
    "timestamp": "2024-02-06T12:00:00Z",
    "request_id": "req_abc123"
  }
}`})})]})})}),(0,t.jsx)("section",{id:"error-codes",className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Error Codes"}),(0,t.jsxs)("div",{className:"mt-6 grid gap-3 text-sm text-gray-300",children:[(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-cyan-300",children:"INVALID_API_KEY"}),(0,t.jsx)("span",{children:"401 • API key is missing or invalid"})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-cyan-300",children:"RATE_LIMIT_EXCEEDED"}),(0,t.jsx)("span",{children:"429 • Rate limit exceeded"})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-cyan-300",children:"INVALID_TARGET"}),(0,t.jsx)("span",{children:"400 • Target hostname/IP is invalid"})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-cyan-300",children:"SCAN_NOT_FOUND"}),(0,t.jsx)("span",{children:"404 • Scan ID not found"})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-cyan-300",children:"CONCURRENT_LIMIT_EXCEEDED"}),(0,t.jsx)("span",{children:"429 • Too many concurrent scans"})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-cyan-300",children:"INTERNAL_ERROR"}),(0,t.jsx)("span",{children:"500 • Server internal error"})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-cyan-300",children:"SCAN_TIMEOUT"}),(0,t.jsx)("span",{children:"504 • Scan operation timed out"})]}),(0,t.jsxs)("div",{className:"flex justify-between gap-4",children:[(0,t.jsx)("span",{className:"text-cyan-300",children:"INSUFFICIENT_PERMISSIONS"}),(0,t.jsx)("span",{children:"403 • Insufficient permissions"})]})]})]})})}),(0,t.jsx)("section",{id:"endpoints",className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Endpoints"}),(0,t.jsxs)("div",{id:"scan-operations",className:"mt-6",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold",children:"Scan Operations"}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-4",children:"Create New Scan"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`POST /api/v1/scans
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "target": "example.com",
  "scan_type": "tcp",
  "ports": "1-1000",
  "options": {
    "os_detection": true,
    "service_detection": true,
    "ssl_check": true,
    "fast_mode": false
  }
}`})}),(0,t.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"Response:"}),(0,t.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`{
  "success": true,
  "data": {
    "scan_id": "scan_abc123",
    "status": "queued",
    "target": "example.com",
    "created_at": "2024-02-06T12:00:00Z",
    "estimated_duration": 120,
    "websocket_url": "ws://localhost:8000/ws/scans/scan_abc123",
    "sse_url": "http://localhost:8000/api/v1/scans/scan_abc123/stream"
  }
}`})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Get Scan Status"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`GET /api/v1/scans/{scan_id}
Authorization: Bearer {api_key}`})}),(0,t.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"Response:"}),(0,t.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`{
  "success": true,
  "data": {
    "scan_id": "scan_abc123",
    "status": "running",
    "target": "example.com",
    "scan_type": "tcp",
    "progress": 45,
    "started_at": "2024-02-06T12:00:00Z",
    "estimated_completion": "2024-02-06T12:02:00Z",
    "results": {
      "open_ports": 12,
      "closed_ports": 433,
      "filtered_ports": 10
    }
  }
}`})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Get Scan Results"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`GET /api/v1/scans/{scan_id}/results
Authorization: Bearer {api_key}`})}),(0,t.jsx)("p",{className:"text-sm text-gray-300 mt-4",children:"Response:"}),(0,t.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`{
  "success": true,
  "data": {
    "scan_id": "scan_abc123",
    "target": "example.com",
    "scan_type": "tcp",
    "started_at": "2024-02-06T12:00:00Z",
    "completed_at": "2024-02-06T12:02:15Z",
    "duration": 135,
    "summary": {
      "total_ports_scanned": 1000,
      "open_ports": 12,
      "closed_ports": 978,
      "filtered_ports": 10
    }
  }
}`})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"List All Scans"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`GET /api/v1/scans
Authorization: Bearer {api_key}`})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Cancel Scan"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`DELETE /api/v1/scans/{scan_id}
Authorization: Bearer {api_key}`})})]}),(0,t.jsxs)("div",{id:"results-management",className:"mt-10",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold",children:"Results Management"}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-4",children:"Export Scan Results"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`GET /api/v1/scans/{scan_id}/export
Authorization: Bearer {api_key}`})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Delete Scan Results"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`DELETE /api/v1/scans/{scan_id}/results
Authorization: Bearer {api_key}`})})]}),(0,t.jsxs)("div",{id:"ai-assistant",className:"mt-10",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold",children:"AI Assistant"}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-4",children:"Ask Security Question"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`POST /api/v1/ai/ask
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "question": "What does an open SSH port on 22 mean for security?",
  "context": {
    "scan_id": "scan_abc123"
  }
}`})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Explain Security Concept"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`POST /api/v1/ai/explain
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "concept": "port scanning",
  "level": "beginner"
}`})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Generate Security Report"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`POST /api/v1/ai/report
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "scan_id": "scan_abc123",
  "report_type": "executive",
  "include_sections": ["summary", "vulnerabilities", "recommendations"]
}`})})]}),(0,t.jsxs)("div",{id:"system-health",className:"mt-10",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold",children:"System & Health"}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-4",children:"Health Check"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:"GET /api/v1/health"})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Get System Statistics"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`GET /api/v1/stats
Authorization: Bearer {api_key}`})}),(0,t.jsx)("h4",{className:"text-lg font-semibold mt-6",children:"Get User Profile"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`GET /api/v1/user/profile
Authorization: Bearer {api_key}`})})]})]})})}),(0,t.jsx)("section",{id:"websocket-api",className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"WebSocket API"}),(0,t.jsx)("p",{className:"text-sm text-gray-300 mt-2",children:"Real-time bidirectional communication for live scan updates."}),(0,t.jsx)("pre",{className:"mt-4 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`const ws = new WebSocket('ws://localhost:8000/ws/scans/scan_abc123?api_key=sk_live_abc123xyz789');

ws.onopen = () => {
  console.log('Connected to scan stream');
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Scan update:', data);
};

ws.onerror = (error) => {
  console.error('WebSocket error:', error);
};

ws.onclose = () => {
  console.log('Disconnected from scan stream');
};`})})]})})}),(0,t.jsx)("section",{id:"sse",className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Server-Sent Events (SSE)"}),(0,t.jsx)("p",{className:"text-sm text-gray-300 mt-2",children:"One-way real-time updates, simpler than WebSockets."}),(0,t.jsx)("pre",{className:"mt-4 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`const eventSource = new EventSource('http://localhost:8000/api/v1/scans/scan_abc123/stream?api_key=sk_live_abc123xyz789');

eventSource.addEventListener('progress', (event) => {
  const data = JSON.parse(event.data);
  console.log('Progress:', data.progress);
});

eventSource.addEventListener('port_found', (event) => {
  const data = JSON.parse(event.data);
  console.log('Port found:', data.port);
});

eventSource.addEventListener('complete', (event) => {
  const data = JSON.parse(event.data);
  console.log('Scan complete');
  eventSource.close();
});

eventSource.onerror = (error) => {
  console.error('SSE error:', error);
  eventSource.close();
};`})})]})})}),(0,t.jsx)("section",{id:"code-examples",className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Code Examples"}),(0,t.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"Python Example"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`import requests
import json

API_KEY = "sk_live_abc123xyz789"
BASE_URL = "http://localhost:8000/api/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

response = requests.post(
    f"{BASE_URL}/scans",
    headers=headers,
    json={
        "target": "example.com",
        "scan_type": "tcp",
        "ports": "1-1000",
        "options": {
            "service_detection": True,
            "ssl_check": True
        }
    }
)

scan_data = response.json()
scan_id = scan_data["data"]["scan_id"]
print(f"Scan started: {scan_id}")`})}),(0,t.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"JavaScript / Node.js Example"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`const axios = require('axios');

const API_KEY = 'sk_live_abc123xyz789';
const BASE_URL = 'http://localhost:8000/api/v1';

const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};

async function scanTarget(target) {
  const scanResponse = await axios.post(\`\${BASE_URL}/scans\`, {
    target,
    scan_type: 'tcp',
    ports: '1-1000',
    options: {
      service_detection: true,
      ssl_check: true
    }
  }, { headers });

  const scanId = scanResponse.data.data.scan_id;
  console.log(\`Scan started: \${scanId}\`);
}`})}),(0,t.jsx)("h3",{className:"text-lg font-semibold mt-6",children:"cURL Examples"}),(0,t.jsx)("pre",{className:"mt-3 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`curl -X POST http://localhost:8000/api/v1/scans \\
  -H "Authorization: Bearer sk_live_abc123xyz789" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target": "example.com",
    "scan_type": "tcp",
    "ports": "1-1000"
  }'`})})]})})}),(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Best Practices"}),(0,t.jsxs)("div",{className:"mt-4 space-y-4 text-sm text-gray-300",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"1. Always Handle Errors"}),(0,t.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`try:
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
except requests.exceptions.HTTPError as e:
    print(f"HTTP Error: {e.response.status_code}")
    print(f"Details: {e.response.json()}")`})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"2. Use Streaming for Long-Running Scans"}),(0,t.jsx)("p",{className:"mt-2",children:"Use WebSocket or SSE instead of polling for better performance and real-time updates."})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"3. Implement Exponential Backoff"}),(0,t.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`import time

retries = 0
max_retries = 5
backoff = 1

while retries < max_retries:
    try:
        response = requests.get(url, headers=headers)
        break
    except Exception as e:
        retries += 1
        time.sleep(backoff)
        backoff *= 2`})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"4. Cache Results When Possible"}),(0,t.jsx)("pre",{className:"mt-2 text-xs bg-[#0b122b] border border-white/10 rounded-xl p-4 overflow-x-auto",children:(0,t.jsx)("code",{children:`response = requests.get(
    f"{BASE_URL}/scans?target=example.com&status=completed&sort=created_at&order=desc&per_page=1",
    headers=headers
)`})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"5. Secure Your API Keys"}),(0,t.jsxs)("div",{className:"mt-2 space-y-2",children:[(0,t.jsx)("div",{children:"- Never commit API keys to version control"}),(0,t.jsx)("div",{children:"- Use environment variables or secure vaults"}),(0,t.jsx)("div",{children:"- Rotate keys regularly"}),(0,t.jsx)("div",{children:"- Use different keys for development/production"})]})]})]})]})})}),(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 py-10",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Changelog"}),(0,t.jsxs)("div",{className:"mt-4 text-sm text-gray-300",children:[(0,t.jsx)("span",{className:"text-cyan-300 font-semibold",children:"v1.0.0 (2024-02-06)"}),(0,t.jsxs)("div",{className:"mt-2 space-y-2",children:[(0,t.jsx)("div",{children:"- Initial API release"}),(0,t.jsx)("div",{children:"- REST API endpoints for scan operations"}),(0,t.jsx)("div",{children:"- WebSocket and SSE support"}),(0,t.jsx)("div",{children:"- AI assistant endpoints"}),(0,t.jsx)("div",{children:"- Export functionality"})]})]})]})})}),(0,t.jsx)("section",{className:"max-w-5xl mx-auto px-6 pb-20",children:(0,t.jsx)(d,{children:(0,t.jsxs)("div",{className:"glass-panel rounded-3xl p-8 border border-white/10",children:[(0,t.jsx)("h2",{className:"text-2xl font-heading",children:"Support"}),(0,t.jsxs)("div",{className:"mt-4 text-sm text-gray-300 space-y-2",children:[(0,t.jsxs)("div",{children:["Documentation: ",(0,t.jsx)("code",{className:"text-cyan-300",children:"https://docs.cybersec-cli.com"})]}),(0,t.jsxs)("div",{children:["API Status: ",(0,t.jsx)("code",{className:"text-cyan-300",children:"https://status.cybersec-cli.com"})]}),(0,t.jsxs)("div",{children:["GitHub: ",(0,t.jsx)("code",{className:"text-cyan-300",children:"https://github.com/Yash7256/CyberSec-CLI"})]}),(0,t.jsxs)("div",{children:["Email: ",(0,t.jsx)("code",{className:"text-cyan-300",children:"support@cybersec-cli.com"})]})]}),(0,t.jsx)("div",{className:"mt-6 text-xs text-gray-400",children:"© 2024 CyberSec-CLI | API Documentation v1.0.0"})]})})})]}),(0,t.jsxs)("footer",{className:"border-t border-white/10 bg-transparent",children:[(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("div",{className:"h-52 w-52 grid place-items-center",children:(0,t.jsx)(s.default,{src:"/logo.png",alt:"CyberSec logo",width:200,height:200})})}),(0,t.jsx)("p",{className:"text-sm text-gray-400 mt-4",children:"CyberSec-CLI helps teams uncover vulnerabilities faster with AI-powered scanning."}),(0,t.jsxs)("div",{className:"flex items-center gap-3 mt-6",children:[(0,t.jsx)("a",{className:"p-2 rounded-full border border-white/10",href:"https://github.com","aria-label":"GitHub",children:(0,t.jsx)(i.FiGithub,{})}),(0,t.jsx)("a",{className:"p-2 rounded-full border border-white/10",href:"https://twitter.com","aria-label":"Twitter",children:(0,t.jsx)(i.FiTwitter,{})}),(0,t.jsx)("a",{className:"p-2 rounded-full border border-white/10",href:"https://discord.com","aria-label":"Discord",children:(0,t.jsx)(c.FaDiscord,{})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-sm uppercase tracking-[0.2em] text-gray-400",children:"Product"}),(0,t.jsxs)("ul",{className:"mt-4 space-y-2 text-sm text-gray-300",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/features",children:"Features"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/api-docs",children:"API"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/#pricing",children:"Pricing"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/docs",children:"Docs"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-sm uppercase tracking-[0.2em] text-gray-400",children:"Resources"}),(0,t.jsxs)("ul",{className:"mt-4 space-y-2 text-sm text-gray-300",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/#blog",children:"Blog"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/#community",children:"Community"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/#support",children:"Support"})})]})]})]}),(0,t.jsx)("div",{className:"border-t border-white/10 text-center text-xs text-gray-400 py-6",children:"(c) 2024 CyberSec-CLI - Made with care by security professionals"})]})]})]})})]})}e.s(["default",()=>u])},20108,(e,t,r)=>{let s="/api-docs";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(75058)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})},60175,e=>{e.v(t=>Promise.all(["static/chunks/7902f26c66c0155c.js"].map(t=>e.l(t))).then(()=>t(67124)))},33487,e=>{e.v(t=>Promise.all(["static/chunks/5c42d4702b06b409.js"].map(t=>e.l(t))).then(()=>t(81811)))}]);