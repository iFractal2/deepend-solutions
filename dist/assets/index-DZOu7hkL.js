(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},el={},Xa={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),dc=Symbol.for("react.portal"),fc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),xc=Symbol.for("react.memo"),wc=Symbol.for("react.lazy"),Mi=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Mi&&e[Mi]||e["@@iterator"],typeof e=="function"?e:null)}var Ga={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Za=Object.assign,Ja={};function ln(e,t,n){this.props=e,this.context=t,this.refs=Ja,this.updater=n||Ga}ln.prototype.isReactComponent={};ln.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ln.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qa(){}qa.prototype=ln.prototype;function Ao(e,t,n){this.props=e,this.context=t,this.refs=Ja,this.updater=n||Ga}var Bo=Ao.prototype=new qa;Bo.constructor=Ao;Za(Bo,ln.prototype);Bo.isPureReactComponent=!0;var Fi=Array.isArray,es=Object.prototype.hasOwnProperty,Wo={current:null},ts={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)es.call(t,r)&&!ts.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Kn,type:e,key:o,ref:i,props:l,_owner:Wo.current}}function kc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function Sc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $i=/\/+/g;function xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):t.toString(36)}function yr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Kn:case dc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+xl(i,0):r,Fi(l)?(n="",e!=null&&(n=e.replace($i,"$&/")+"/"),yr(l,t,n,"",function(c){return c})):l!=null&&(Vo(l)&&(l=kc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace($i,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Fi(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+xl(o,a);i+=yr(o,t,n,s,l)}else if(s=_c(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+xl(o,a++),i+=yr(o,t,n,s,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function tr(e,t,n){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Ec(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},xr={transition:null},Cc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Wo};function rs(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Vo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=ln;L.Fragment=fc;L.Profiler=hc;L.PureComponent=Ao;L.StrictMode=pc;L.Suspense=yc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cc;L.act=rs;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Za({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Wo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)es.call(t,s)&&!ts.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Kn,type:e.type,key:l,ref:o,props:r,_owner:i}};L.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};L.createElement=ns;L.createFactory=function(e){var t=ns.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:vc,render:e}};L.isValidElement=Vo;L.lazy=function(e){return{$$typeof:wc,_payload:{_status:-1,_result:e},_init:Ec}};L.memo=function(e,t){return{$$typeof:xc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};L.unstable_act=rs;L.useCallback=function(e,t){return se.current.useCallback(e,t)};L.useContext=function(e){return se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return se.current.useDeferredValue(e)};L.useEffect=function(e,t){return se.current.useEffect(e,t)};L.useId=function(){return se.current.useId()};L.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return se.current.useMemo(e,t)};L.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};L.useRef=function(e){return se.current.useRef(e)};L.useState=function(e){return se.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return se.current.useTransition()};L.version="18.3.1";Xa.exports=L;var I=Xa.exports;const Nc=cc(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=I,bc=Symbol.for("react.element"),zc=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,Lc=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tc={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Pc.call(t,r)&&!Tc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:bc,type:e,key:o,ref:i,props:l,_owner:Lc.current}}el.Fragment=zc;el.jsx=ls;el.jsxs=ls;Ka.exports=el;var p=Ka.exports,Yl={},os={exports:{}},xe={},is={exports:{}},as={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,z){var P=E.length;E.push(z);e:for(;0<P;){var H=P-1>>>1,G=E[H];if(0<l(G,z))E[H]=z,E[P]=G,P=H;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var z=E[0],P=E.pop();if(P!==z){E[0]=P;e:for(var H=0,G=E.length,qn=G>>>1;H<qn;){var gt=2*(H+1)-1,yl=E[gt],vt=gt+1,er=E[vt];if(0>l(yl,P))vt<G&&0>l(er,yl)?(E[H]=er,E[vt]=P,H=vt):(E[H]=yl,E[gt]=P,H=gt);else if(vt<G&&0>l(er,P))E[H]=er,E[vt]=P,H=vt;else break e}}return z}function l(E,z){var P=E.sortIndex-z.sortIndex;return P!==0?P:E.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],v=1,g=null,m=3,x=!1,h=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=E)r(c),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(c)}}function w(E){if(y=!1,f(E),!h)if(n(s)!==null)h=!0,gl(k);else{var z=n(c);z!==null&&vl(w,z.startTime-E)}}function k(E,z){h=!1,y&&(y=!1,d(j),j=-1),x=!0;var P=m;try{for(f(z),g=n(s);g!==null&&(!(g.expirationTime>z)||E&&!je());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var G=H(g.expirationTime<=z);z=e.unstable_now(),typeof G=="function"?g.callback=G:g===n(s)&&r(s),f(z)}else r(s);g=n(s)}if(g!==null)var qn=!0;else{var gt=n(c);gt!==null&&vl(w,gt.startTime-z),qn=!1}return qn}finally{g=null,m=P,x=!1}}var N=!1,C=null,j=-1,V=5,T=-1;function je(){return!(e.unstable_now()-T<V)}function sn(){if(C!==null){var E=e.unstable_now();T=E;var z=!0;try{z=C(!0,E)}finally{z?un():(N=!1,C=null)}}else N=!1}var un;if(typeof u=="function")un=function(){u(sn)};else if(typeof MessageChannel<"u"){var Di=new MessageChannel,uc=Di.port2;Di.port1.onmessage=sn,un=function(){uc.postMessage(null)}}else un=function(){b(sn,0)};function gl(E){C=E,N||(N=!0,un())}function vl(E,z){j=b(function(){E(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){h||x||(h=!0,gl(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return E()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var P=m;m=E;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(E,z,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,E){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=P+G,E={id:v++,callback:z,priorityLevel:E,startTime:P,expirationTime:G,sortIndex:-1},P>H?(E.sortIndex=P,t(c,E),n(s)===null&&E===n(c)&&(y?(d(j),j=-1):y=!0,vl(w,P-H))):(E.sortIndex=G,t(s,E),h||x||(h=!0,gl(k))),E},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(E){var z=m;return function(){var P=m;m=z;try{return E.apply(this,arguments)}finally{m=P}}}})(as);is.exports=as;var Rc=is.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=I,ye=Rc;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ss=new Set,Ln={};function Pt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)ss.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,Oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ui={},Ai={};function Dc(e){return Ql.call(Ai,e)?!0:Ql.call(Ui,e)?!1:Oc.test(e)?Ai[e]=!0:(Ui[e]=!0,!1)}function Mc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,t,n,r){if(t===null||typeof t>"u"||Mc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ho=/[\-:]([a-z])/g;function Yo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ho,Yo);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ho,Yo);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ho,Yo);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qo(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fc(t,n,l,r)&&(n=null),r||l===null?Dc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),cs=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ds=Symbol.for("react.offscreen"),Bi=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Bi&&e[Bi]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,wl;function yn(e){if(wl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wl=t&&t[1]||""}return`
`+wl+e}var _l=!1;function kl(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yn(e):""}function $c(e){switch(e.tag){case 5:return yn(e.type);case 16:return yn("Lazy");case 13:return yn("Suspense");case 19:return yn("SuspenseList");case 0:case 2:case 15:return e=kl(e.type,!1),e;case 11:return e=kl(e.type.render,!1),e;case 1:return e=kl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case Rt:return"Portal";case Kl:return"Profiler";case Ko:return"StrictMode";case Xl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cs:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case Xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Go:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Uc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ac(e){var t=fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rr(e){e._valueTracker||(e._valueTracker=Ac(e))}function ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=fs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hs(e,t){t=t.checked,t!=null&&Qo(e,"checked",t,!1)}function ql(e,t){hs(e,t);var n=dt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&eo(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eo(e,t,n){(t!=="number"||Pr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Ht(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(xn(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ms(e,t){var n=dt(t.value),r=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,vs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bc=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){Bc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function xs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ys(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Wc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(Wc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function lo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Zo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Yt=null,Qt=null;function Qi(e){if(e=Zn(e)){if(typeof io!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ol(t),io(e.stateNode,e.type,t))}}function ws(e){Yt?Qt?Qt.push(e):Qt=[e]:Yt=e}function _s(){if(Yt){var e=Yt,t=Qt;if(Qt=Yt=null,Qi(e),t)for(e=0;e<t.length;e++)Qi(t[e])}}function ks(e,t){return e(t)}function Ss(){}var Sl=!1;function Es(e,t,n){if(Sl)return e(t,n);Sl=!0;try{return ks(e,t,n)}finally{Sl=!1,(Yt!==null||Qt!==null)&&(Ss(),_s())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ao=!1;if(He)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{ao=!1}function Vc(e,t,n,r,l,o,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var Sn=!1,Lr=null,Tr=!1,so=null,Hc={onError:function(e){Sn=!0,Lr=e}};function Yc(e,t,n,r,l,o,i,a,s){Sn=!1,Lr=null,Vc.apply(Hc,arguments)}function Qc(e,t,n,r,l,o,i,a,s){if(Yc.apply(this,arguments),Sn){if(Sn){var c=Lr;Sn=!1,Lr=null}else throw Error(_(198));Tr||(Tr=!0,so=c)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ki(e){if(Lt(e)!==e)throw Error(_(188))}function Kc(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ki(l),e;if(o===r)return Ki(l),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Ns(e){return e=Kc(e),e!==null?js(e):null}function js(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=js(e);if(t!==null)return t;e=e.sibling}return null}var bs=ye.unstable_scheduleCallback,Xi=ye.unstable_cancelCallback,Xc=ye.unstable_shouldYield,Gc=ye.unstable_requestPaint,Y=ye.unstable_now,Zc=ye.unstable_getCurrentPriorityLevel,Jo=ye.unstable_ImmediatePriority,zs=ye.unstable_UserBlockingPriority,Rr=ye.unstable_NormalPriority,Jc=ye.unstable_LowPriority,Ps=ye.unstable_IdlePriority,tl=null,Fe=null;function qc(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:nd,ed=Math.log,td=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(ed(e)/td|0)|0}var or=64,ir=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=wn(a):(o&=i,o!==0&&(r=wn(o)))}else i=n&~l,i!==0?r=wn(i):o!==0&&(r=wn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Te(t),l=1<<n,r|=e[n],t&=~l;return r}function rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Te(o),a=1<<i,s=l[i];s===-1?(!(a&n)||a&r)&&(l[i]=rd(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ls(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function od(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Te(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function qo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Te(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rs,ei,Is,Os,Ds,co=!1,ar=[],rt=null,lt=null,ot=null,In=new Map,On=new Map,qe=[],id="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gi(e,t){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":In.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function fn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Zn(t),t!==null&&ei(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ad(e,t,n,r,l){switch(t){case"focusin":return rt=fn(rt,e,t,n,r,l),!0;case"dragenter":return lt=fn(lt,e,t,n,r,l),!0;case"mouseover":return ot=fn(ot,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return In.set(o,fn(In.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,On.set(o,fn(On.get(o)||null,e,t,n,r,l)),!0}return!1}function Ms(e){var t=wt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Cs(n),t!==null){e.blockedOn=t,Ds(e.priority,function(){Is(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);oo=r,n.target.dispatchEvent(r),oo=null}else return t=Zn(n),t!==null&&ei(t),e.blockedOn=n,!1;t.shift()}return!0}function Zi(e,t,n){wr(e)&&n.delete(t)}function sd(){co=!1,rt!==null&&wr(rt)&&(rt=null),lt!==null&&wr(lt)&&(lt=null),ot!==null&&wr(ot)&&(ot=null),In.forEach(Zi),On.forEach(Zi)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,sd)))}function Dn(e){function t(l){return pn(l,e)}if(0<ar.length){pn(ar[0],e);for(var n=1;n<ar.length;n++){var r=ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&pn(rt,e),lt!==null&&pn(lt,e),ot!==null&&pn(ot,e),In.forEach(t),On.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)Ms(n),n.blockedOn===null&&qe.shift()}var Kt=Xe.ReactCurrentBatchConfig,Or=!0;function ud(e,t,n,r){var l=O,o=Kt.transition;Kt.transition=null;try{O=1,ti(e,t,n,r)}finally{O=l,Kt.transition=o}}function cd(e,t,n,r){var l=O,o=Kt.transition;Kt.transition=null;try{O=4,ti(e,t,n,r)}finally{O=l,Kt.transition=o}}function ti(e,t,n,r){if(Or){var l=fo(e,t,n,r);if(l===null)Il(e,t,r,Dr,n),Gi(e,r);else if(ad(l,e,t,n,r))r.stopPropagation();else if(Gi(e,r),t&4&&-1<id.indexOf(e)){for(;l!==null;){var o=Zn(l);if(o!==null&&Rs(o),o=fo(e,t,n,r),o===null&&Il(e,t,r,Dr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Il(e,t,r,null,n)}}var Dr=null;function fo(e,t,n,r){if(Dr=null,e=Zo(r),e=wt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Cs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dr=e,null}function Fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case Jo:return 1;case zs:return 4;case Rr:case Jc:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var tt=null,ni=null,_r=null;function $s(){if(_r)return _r;var e,t=ni,n=t.length,r,l="value"in tt?tt.value:tt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return _r=l.slice(e,1<r?1-r:void 0)}function kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Ji(){return!1}function we(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sr:Ji,this.isPropagationStopped=Ji,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=we(on),Gn=B({},on,{view:0,detail:0}),dd=we(Gn),Cl,Nl,hn,nl=B({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(Cl=e.screenX-hn.screenX,Nl=e.screenY-hn.screenY):Nl=Cl=0,hn=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),qi=we(nl),fd=B({},nl,{dataTransfer:0}),pd=we(fd),hd=B({},Gn,{relatedTarget:0}),jl=we(hd),md=B({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=we(md),vd=B({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yd=we(vd),xd=B({},on,{data:0}),ea=we(xd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_d={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kd[e])?!!t[e]:!1}function li(){return Sd}var Ed=B({},Gn,{key:function(e){if(e.key){var t=wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_d[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cd=we(Ed),Nd=B({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ta=we(Nd),jd=B({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),bd=we(jd),zd=B({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=we(zd),Ld=B({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Td=we(Ld),Rd=[9,13,27,32],oi=He&&"CompositionEvent"in window,En=null;He&&"documentMode"in document&&(En=document.documentMode);var Id=He&&"TextEvent"in window&&!En,Us=He&&(!oi||En&&8<En&&11>=En),na=" ",ra=!1;function As(e,t){switch(e){case"keyup":return Rd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Od(e,t){switch(e){case"compositionend":return Bs(t);case"keypress":return t.which!==32?null:(ra=!0,na);case"textInput":return e=t.data,e===na&&ra?null:e;default:return null}}function Dd(e,t){if(Ot)return e==="compositionend"||!oi&&As(e,t)?(e=$s(),_r=ni=tt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function la(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Md[e.type]:t==="textarea"}function Ws(e,t,n,r){ws(r),t=Mr(t,"onChange"),0<t.length&&(n=new ri("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,Mn=null;function Fd(e){eu(e,0)}function rl(e){var t=Ft(e);if(ps(t))return e}function $d(e,t){if(e==="change")return t}var Vs=!1;if(He){var bl;if(He){var zl="oninput"in document;if(!zl){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),zl=typeof oa.oninput=="function"}bl=zl}else bl=!1;Vs=bl&&(!document.documentMode||9<document.documentMode)}function ia(){Cn&&(Cn.detachEvent("onpropertychange",Hs),Mn=Cn=null)}function Hs(e){if(e.propertyName==="value"&&rl(Mn)){var t=[];Ws(t,Mn,e,Zo(e)),Es(Fd,t)}}function Ud(e,t,n){e==="focusin"?(ia(),Cn=t,Mn=n,Cn.attachEvent("onpropertychange",Hs)):e==="focusout"&&ia()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Mn)}function Bd(e,t){if(e==="click")return rl(t)}function Wd(e,t){if(e==="input"||e==="change")return rl(t)}function Vd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Vd;function Fn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ql.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sa(e,t){var n=aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aa(n)}}function Ys(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ys(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qs(){for(var e=window,t=Pr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pr(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hd(e){var t=Qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ys(n.ownerDocument.documentElement,n)){if(r!==null&&ii(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=sa(n,o);var i=sa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yd=He&&"documentMode"in document&&11>=document.documentMode,Dt=null,po=null,Nn=null,ho=!1;function ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ho||Dt==null||Dt!==Pr(r)||(r=Dt,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nn&&Fn(Nn,r)||(Nn=r,r=Mr(po,"onSelect"),0<r.length&&(t=new ri("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dt)))}function ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mt={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Pl={},Ks={};He&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete Mt.animationend.animation,delete Mt.animationiteration.animation,delete Mt.animationstart.animation),"TransitionEvent"in window||delete Mt.transitionend.transition);function ll(e){if(Pl[e])return Pl[e];if(!Mt[e])return e;var t=Mt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ks)return Pl[e]=t[n];return e}var Xs=ll("animationend"),Gs=ll("animationiteration"),Zs=ll("animationstart"),Js=ll("transitionend"),qs=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){qs.set(e,t),Pt(t,[e])}for(var Ll=0;Ll<ca.length;Ll++){var Tl=ca[Ll],Qd=Tl.toLowerCase(),Kd=Tl[0].toUpperCase()+Tl.slice(1);pt(Qd,"on"+Kd)}pt(Xs,"onAnimationEnd");pt(Gs,"onAnimationIteration");pt(Zs,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Js,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qc(r,t,void 0,e),e.currentTarget=null}function eu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;da(l,a,c),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;da(l,a,c),o=s}}}if(Tr)throw e=so,Tr=!1,so=null,e}function M(e,t){var n=t[xo];n===void 0&&(n=t[xo]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var cr="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[cr]){e[cr]=!0,ss.forEach(function(n){n!=="selectionchange"&&(Xd.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cr]||(t[cr]=!0,Rl("selectionchange",!1,t))}}function tu(e,t,n,r){switch(Fs(t)){case 1:var l=ud;break;case 4:l=cd;break;default:l=ti}n=l.bind(null,t,n,e),l=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Il(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=wt(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}Es(function(){var c=o,v=Zo(n),g=[];e:{var m=qs.get(e);if(m!==void 0){var x=ri,h=e;switch(e){case"keypress":if(kr(n)===0)break e;case"keydown":case"keyup":x=Cd;break;case"focusin":h="focus",x=jl;break;case"focusout":h="blur",x=jl;break;case"beforeblur":case"afterblur":x=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=qi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=bd;break;case Xs:case Gs:case Zs:x=gd;break;case Js:x=Pd;break;case"scroll":x=dd;break;case"wheel":x=Td;break;case"copy":case"cut":case"paste":x=yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ta}var y=(t&4)!==0,b=!y&&e==="scroll",d=y?m!==null?m+"Capture":null:m;y=[];for(var u=c,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=Rn(u,d),w!=null&&y.push(Un(u,w,f)))),b)break;u=u.return}0<y.length&&(m=new x(m,h,null,n,v),g.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==oo&&(h=n.relatedTarget||n.fromElement)&&(wt(h)||h[Ye]))break e;if((x||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,x?(h=n.relatedTarget||n.toElement,x=c,h=h?wt(h):null,h!==null&&(b=Lt(h),h!==b||h.tag!==5&&h.tag!==6)&&(h=null)):(x=null,h=c),x!==h)){if(y=qi,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=ta,w="onPointerLeave",d="onPointerEnter",u="pointer"),b=x==null?m:Ft(x),f=h==null?m:Ft(h),m=new y(w,u+"leave",x,n,v),m.target=b,m.relatedTarget=f,w=null,wt(v)===c&&(y=new y(d,u+"enter",h,n,v),y.target=f,y.relatedTarget=b,w=y),b=w,x&&h)t:{for(y=x,d=h,u=0,f=y;f;f=Tt(f))u++;for(f=0,w=d;w;w=Tt(w))f++;for(;0<u-f;)y=Tt(y),u--;for(;0<f-u;)d=Tt(d),f--;for(;u--;){if(y===d||d!==null&&y===d.alternate)break t;y=Tt(y),d=Tt(d)}y=null}else y=null;x!==null&&fa(g,m,x,y,!1),h!==null&&b!==null&&fa(g,b,h,y,!0)}}e:{if(m=c?Ft(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var k=$d;else if(la(m))if(Vs)k=Wd;else{k=Ad;var N=Ud}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Bd);if(k&&(k=k(e,c))){Ws(g,k,n,v);break e}N&&N(e,m,c),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&eo(m,"number",m.value)}switch(N=c?Ft(c):window,e){case"focusin":(la(N)||N.contentEditable==="true")&&(Dt=N,po=c,Nn=null);break;case"focusout":Nn=po=Dt=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,ua(g,n,v);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":ua(g,n,v)}var C;if(oi)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Ot?As(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Us&&n.locale!=="ko"&&(Ot||j!=="onCompositionStart"?j==="onCompositionEnd"&&Ot&&(C=$s()):(tt=v,ni="value"in tt?tt.value:tt.textContent,Ot=!0)),N=Mr(c,j),0<N.length&&(j=new ea(j,e,null,n,v),g.push({event:j,listeners:N}),C?j.data=C:(C=Bs(n),C!==null&&(j.data=C)))),(C=Id?Od(e,n):Dd(e,n))&&(c=Mr(c,"onBeforeInput"),0<c.length&&(v=new ea("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:c}),v.data=C))}eu(g,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Rn(e,n),o!=null&&r.unshift(Un(e,o,l)),o=Rn(e,t),o!=null&&r.push(Un(e,o,l))),e=e.return}return r}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Rn(n,o),s!=null&&i.unshift(Un(n,s,a))):l||(s=Rn(n,o),s!=null&&i.push(Un(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Gd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function pa(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Zd,"")}function dr(e,t,n){if(t=pa(t),pa(e)!==t&&n)throw Error(_(425))}function Fr(){}var mo=null,go=null;function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yo=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,ha=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof ha<"u"?function(e){return ha.resolve(null).then(e).catch(ef)}:yo;function ef(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Dn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Dn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Me="__reactFiber$"+an,An="__reactProps$"+an,Ye="__reactContainer$"+an,xo="__reactEvents$"+an,tf="__reactListeners$"+an,nf="__reactHandles$"+an;function wt(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Me]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ma(e);e!==null;){if(n=e[Me])return n;e=ma(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Me]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ol(e){return e[An]||null}var wo=[],$t=-1;function ht(e){return{current:e}}function F(e){0>$t||(e.current=wo[$t],wo[$t]=null,$t--)}function D(e,t){$t++,wo[$t]=e.current,e.current=t}var ft={},oe=ht(ft),fe=ht(!1),Ct=ft;function Jt(e,t){var n=e.type.contextTypes;if(!n)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function $r(){F(fe),F(oe)}function ga(e,t,n){if(oe.current!==ft)throw Error(_(168));D(oe,t),D(fe,n)}function nu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(_(108,Uc(e)||"Unknown",l));return B({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Ct=oe.current,D(oe,e),D(fe,fe.current),!0}function va(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=nu(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,F(fe),F(oe),D(oe,e)):F(fe),D(fe,n)}var Ae=null,il=!1,Dl=!1;function ru(e){Ae===null?Ae=[e]:Ae.push(e)}function rf(e){il=!0,ru(e)}function mt(){if(!Dl&&Ae!==null){Dl=!0;var e=0,t=O;try{var n=Ae;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ae=null,il=!1}catch(l){throw Ae!==null&&(Ae=Ae.slice(e+1)),bs(Jo,mt),l}finally{O=t,Dl=!1}}return null}var Ut=[],At=0,Ar=null,Br=0,_e=[],ke=0,Nt=null,Be=1,We="";function yt(e,t){Ut[At++]=Br,Ut[At++]=Ar,Ar=e,Br=t}function lu(e,t,n){_e[ke++]=Be,_e[ke++]=We,_e[ke++]=Nt,Nt=e;var r=Be;e=We;var l=32-Te(r)-1;r&=~(1<<l),n+=1;var o=32-Te(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Be=1<<32-Te(t)+l|n<<l|r,We=o+e}else Be=1<<o|n<<l|r,We=e}function ai(e){e.return!==null&&(yt(e,1),lu(e,1,0))}function si(e){for(;e===Ar;)Ar=Ut[--At],Ut[At]=null,Br=Ut[--At],Ut[At]=null;for(;e===Nt;)Nt=_e[--ke],_e[ke]=null,We=_e[--ke],_e[ke]=null,Be=_e[--ke],_e[ke]=null}var ve=null,ge=null,$=!1,Le=null;function ou(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:Be,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function _o(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ko(e){if($){var t=ge;if(t){var n=t;if(!ya(e,t)){if(_o(e))throw Error(_(418));t=it(n.nextSibling);var r=ve;t&&ya(e,t)?ou(r,n):(e.flags=e.flags&-4097|2,$=!1,ve=e)}}else{if(_o(e))throw Error(_(418));e.flags=e.flags&-4097|2,$=!1,ve=e}}}function xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function fr(e){if(e!==ve)return!1;if(!$)return xa(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vo(e.type,e.memoizedProps)),t&&(t=ge)){if(_o(e))throw iu(),Error(_(418));for(;t;)ou(e,t),t=it(t.nextSibling)}if(xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?it(e.stateNode.nextSibling):null;return!0}function iu(){for(var e=ge;e;)e=it(e.nextSibling)}function qt(){ge=ve=null,$=!1}function ui(e){Le===null?Le=[e]:Le.push(e)}var lf=Xe.ReactCurrentBatchConfig;function mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wa(e){var t=e._init;return t(e._payload)}function au(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=ct(d,u),d.index=0,d.sibling=null,d}function o(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,w){return u===null||u.tag!==6?(u=Wl(f,d.mode,w),u.return=d,u):(u=l(u,f),u.return=d,u)}function s(d,u,f,w){var k=f.type;return k===It?v(d,u,f.props.children,w,f.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&wa(k)===u.type)?(w=l(u,f.props),w.ref=mn(d,u,f),w.return=d,w):(w=zr(f.type,f.key,f.props,null,d.mode,w),w.ref=mn(d,u,f),w.return=d,w)}function c(d,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Vl(f,d.mode,w),u.return=d,u):(u=l(u,f.children||[]),u.return=d,u)}function v(d,u,f,w,k){return u===null||u.tag!==7?(u=Et(f,d.mode,w,k),u.return=d,u):(u=l(u,f),u.return=d,u)}function g(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Wl(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nr:return f=zr(u.type,u.key,u.props,null,d.mode,f),f.ref=mn(d,null,u),f.return=d,f;case Rt:return u=Vl(u,d.mode,f),u.return=d,u;case Ze:var w=u._init;return g(d,w(u._payload),f)}if(xn(u)||cn(u))return u=Et(u,d.mode,f,null),u.return=d,u;pr(d,u)}return null}function m(d,u,f,w){var k=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:a(d,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:return f.key===k?s(d,u,f,w):null;case Rt:return f.key===k?c(d,u,f,w):null;case Ze:return k=f._init,m(d,u,k(f._payload),w)}if(xn(f)||cn(f))return k!==null?null:v(d,u,f,w,null);pr(d,f)}return null}function x(d,u,f,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(u,d,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case nr:return d=d.get(w.key===null?f:w.key)||null,s(u,d,w,k);case Rt:return d=d.get(w.key===null?f:w.key)||null,c(u,d,w,k);case Ze:var N=w._init;return x(d,u,f,N(w._payload),k)}if(xn(w)||cn(w))return d=d.get(f)||null,v(u,d,w,k,null);pr(u,w)}return null}function h(d,u,f,w){for(var k=null,N=null,C=u,j=u=0,V=null;C!==null&&j<f.length;j++){C.index>j?(V=C,C=null):V=C.sibling;var T=m(d,C,f[j],w);if(T===null){C===null&&(C=V);break}e&&C&&T.alternate===null&&t(d,C),u=o(T,u,j),N===null?k=T:N.sibling=T,N=T,C=V}if(j===f.length)return n(d,C),$&&yt(d,j),k;if(C===null){for(;j<f.length;j++)C=g(d,f[j],w),C!==null&&(u=o(C,u,j),N===null?k=C:N.sibling=C,N=C);return $&&yt(d,j),k}for(C=r(d,C);j<f.length;j++)V=x(C,d,j,f[j],w),V!==null&&(e&&V.alternate!==null&&C.delete(V.key===null?j:V.key),u=o(V,u,j),N===null?k=V:N.sibling=V,N=V);return e&&C.forEach(function(je){return t(d,je)}),$&&yt(d,j),k}function y(d,u,f,w){var k=cn(f);if(typeof k!="function")throw Error(_(150));if(f=k.call(f),f==null)throw Error(_(151));for(var N=k=null,C=u,j=u=0,V=null,T=f.next();C!==null&&!T.done;j++,T=f.next()){C.index>j?(V=C,C=null):V=C.sibling;var je=m(d,C,T.value,w);if(je===null){C===null&&(C=V);break}e&&C&&je.alternate===null&&t(d,C),u=o(je,u,j),N===null?k=je:N.sibling=je,N=je,C=V}if(T.done)return n(d,C),$&&yt(d,j),k;if(C===null){for(;!T.done;j++,T=f.next())T=g(d,T.value,w),T!==null&&(u=o(T,u,j),N===null?k=T:N.sibling=T,N=T);return $&&yt(d,j),k}for(C=r(d,C);!T.done;j++,T=f.next())T=x(C,d,j,T.value,w),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?j:T.key),u=o(T,u,j),N===null?k=T:N.sibling=T,N=T);return e&&C.forEach(function(sn){return t(d,sn)}),$&&yt(d,j),k}function b(d,u,f,w){if(typeof f=="object"&&f!==null&&f.type===It&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case nr:e:{for(var k=f.key,N=u;N!==null;){if(N.key===k){if(k=f.type,k===It){if(N.tag===7){n(d,N.sibling),u=l(N,f.props.children),u.return=d,d=u;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ze&&wa(k)===N.type){n(d,N.sibling),u=l(N,f.props),u.ref=mn(d,N,f),u.return=d,d=u;break e}n(d,N);break}else t(d,N);N=N.sibling}f.type===It?(u=Et(f.props.children,d.mode,w,f.key),u.return=d,d=u):(w=zr(f.type,f.key,f.props,null,d.mode,w),w.ref=mn(d,u,f),w.return=d,d=w)}return i(d);case Rt:e:{for(N=f.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=l(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Vl(f,d.mode,w),u.return=d,d=u}return i(d);case Ze:return N=f._init,b(d,u,N(f._payload),w)}if(xn(f))return h(d,u,f,w);if(cn(f))return y(d,u,f,w);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=l(u,f),u.return=d,d=u):(n(d,u),u=Wl(f,d.mode,w),u.return=d,d=u),i(d)):n(d,u)}return b}var en=au(!0),su=au(!1),Wr=ht(null),Vr=null,Bt=null,ci=null;function di(){ci=Bt=Vr=null}function fi(e){var t=Wr.current;F(Wr),e._currentValue=t}function So(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Vr=e,ci=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Vr===null)throw Error(_(308));Bt=e,Vr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var _t=null;function pi(e){_t===null?_t=[e]:_t.push(e)}function uu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,pi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ve(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function at(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Qe(e,n)}return l=r.interleaved,l===null?(t.next=t,pi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Qe(e,n)}function Sr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qo(e,n)}}function _a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hr(e,t,n,r){var l=e.updateQueue;Je=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?o=c:i.next=c,i=s;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==i&&(a===null?v.firstBaseUpdate=c:a.next=c,v.lastBaseUpdate=s))}if(o!==null){var g=l.baseState;i=0,v=c=s=null,a=o;do{var m=a.lane,x=a.eventTime;if((r&m)===m){v!==null&&(v=v.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var h=e,y=a;switch(m=t,x=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){g=h.call(x,g,m);break e}g=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,m=typeof h=="function"?h.call(x,g,m):h,m==null)break e;g=B({},g,m);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(c=v=x,s=g):v=v.next=x,i|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(v===null&&(s=g),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);bt|=i,e.lanes=i,e.memoizedState=g}}function ka(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(_(191,l));l.call(r)}}}var Jn={},$e=ht(Jn),Bn=ht(Jn),Wn=ht(Jn);function kt(e){if(e===Jn)throw Error(_(174));return e}function mi(e,t){switch(D(Wn,t),D(Bn,e),D($e,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}F($e),D($e,t)}function tn(){F($e),F(Bn),F(Wn)}function du(e){kt(Wn.current);var t=kt($e.current),n=no(t,e.type);t!==n&&(D(Bn,e),D($e,n))}function gi(e){Bn.current===e&&(F($e),F(Bn))}var U=ht(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function vi(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var Er=Xe.ReactCurrentDispatcher,Fl=Xe.ReactCurrentBatchConfig,jt=0,A=null,K=null,Z=null,Qr=!1,jn=!1,Vn=0,of=0;function ne(){throw Error(_(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function xi(e,t,n,r,l,o){if(jt=o,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?cf:df,e=n(r,l),jn){o=0;do{if(jn=!1,Vn=0,25<=o)throw Error(_(301));o+=1,Z=K=null,t.updateQueue=null,Er.current=ff,e=n(r,l)}while(jn)}if(Er.current=Kr,t=K!==null&&K.next!==null,jt=0,Z=K=A=null,Qr=!1,t)throw Error(_(300));return e}function wi(){var e=Vn!==0;return Vn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?A.memoizedState=Z=e:Z=Z.next=e,Z}function Ne(){if(K===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=Z===null?A.memoizedState:Z.next;if(t!==null)Z=t,K=e;else{if(e===null)throw Error(_(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?A.memoizedState=Z=e:Z=Z.next=e}return Z}function Hn(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Ne(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=K,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,c=o;do{var v=c.lane;if((jt&v)===v)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=g,i=r):s=s.next=g,A.lanes|=v,bt|=v}c=c.next}while(c!==null&&c!==o);s===null?i=r:s.next=a,Ie(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,A.lanes|=o,bt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ul(e){var t=Ne(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Ie(o,t.memoizedState)||(de=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fu(){}function pu(e,t){var n=A,r=Ne(),l=t(),o=!Ie(r.memoizedState,l);if(o&&(r.memoizedState=l,de=!0),r=r.queue,_i(gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Yn(9,mu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(_(349));jt&30||hu(n,t,l)}return l}function hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mu(e,t,n,r){t.value=n,t.getSnapshot=r,vu(t)&&yu(e)}function gu(e,t,n){return n(function(){vu(t)&&yu(e)})}function vu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function yu(e){var t=Qe(e,1);t!==null&&Re(t,e,1,-1)}function Sa(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t.queue=e,e=e.dispatch=uf.bind(null,A,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xu(){return Ne().memoizedState}function Cr(e,t,n,r){var l=De();A.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Ne();r=r===void 0?null:r;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,r!==null&&yi(r,i.deps)){l.memoizedState=Yn(t,n,o,r);return}}A.flags|=e,l.memoizedState=Yn(1|t,n,o,r)}function Ea(e,t){return Cr(8390656,8,e,t)}function _i(e,t){return al(2048,8,e,t)}function wu(e,t){return al(4,2,e,t)}function _u(e,t){return al(4,4,e,t)}function ku(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Su(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,ku.bind(null,t,e),n)}function ki(){}function Eu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cu(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nu(e,t,n){return jt&21?(Ie(n,t)||(n=Ls(),A.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function af(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{O=n,Fl.transition=r}}function ju(){return Ne().memoizedState}function sf(e,t,n){var r=ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bu(e))zu(t,n);else if(n=uu(e,t,n,r),n!==null){var l=ae();Re(n,e,r,l),Pu(n,t,r)}}function uf(e,t,n){var r=ut(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bu(e))zu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Ie(a,i)){var s=t.interleaved;s===null?(l.next=l,pi(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=uu(e,t,l,r),n!==null&&(l=ae(),Re(n,e,r,l),Pu(n,t,r))}}function bu(e){var t=e.alternate;return e===A||t!==null&&t===A}function zu(e,t){jn=Qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qo(e,n)}}var Kr={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},cf={readContext:Ce,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ea,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,ku.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sf.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Sa,useDebugValue:ki,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Sa(!1),t=e[0];return e=af.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,l=De();if($){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),J===null)throw Error(_(349));jt&30||hu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ea(gu.bind(null,r,o,e),[e]),r.flags|=2048,Yn(9,mu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=De(),t=J.identifierPrefix;if($){var n=We,r=Be;n=(r&~(1<<32-Te(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},df={readContext:Ce,useCallback:Eu,useContext:Ce,useEffect:_i,useImperativeHandle:Su,useInsertionEffect:wu,useLayoutEffect:_u,useMemo:Cu,useReducer:$l,useRef:xu,useState:function(){return $l(Hn)},useDebugValue:ki,useDeferredValue:function(e){var t=Ne();return Nu(t,K.memoizedState,e)},useTransition:function(){var e=$l(Hn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:pu,useId:ju,unstable_isNewReconciler:!1},ff={readContext:Ce,useCallback:Eu,useContext:Ce,useEffect:_i,useImperativeHandle:Su,useInsertionEffect:wu,useLayoutEffect:_u,useMemo:Cu,useReducer:Ul,useRef:xu,useState:function(){return Ul(Hn)},useDebugValue:ki,useDeferredValue:function(e){var t=Ne();return K===null?t.memoizedState=e:Nu(t,K.memoizedState,e)},useTransition:function(){var e=Ul(Hn)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:fu,useSyncExternalStore:pu,useId:ju,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var sl={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ut(e),o=Ve(r,l);o.payload=t,n!=null&&(o.callback=n),t=at(e,o,l),t!==null&&(Re(t,e,l,r),Sr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ut(e),o=Ve(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=at(e,o,l),t!==null&&(Re(t,e,l,r),Sr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ut(e),l=Ve(n,r);l.tag=2,t!=null&&(l.callback=t),t=at(e,l,r),t!==null&&(Re(t,e,r,n),Sr(t,e,r))}};function Ca(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,r)||!Fn(l,o):!0}function Lu(e,t,n){var r=!1,l=ft,o=t.contextType;return typeof o=="object"&&o!==null?o=Ce(o):(l=pe(t)?Ct:oe.current,r=t.contextTypes,o=(r=r!=null)?Jt(e,l):ft),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Na(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Co(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},hi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ce(o):(o=pe(t)?Ct:oe.current,l.context=Jt(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&sl.enqueueReplaceState(l,l.state,null),Hr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function No(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,t,n){n=Ve(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gr||(Gr=!0,Do=r),No(e,t)},n}function Ru(e,t,n){n=Ve(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){No(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){No(e,t),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ja(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=jf.bind(null,e,t,n),t.then(e,e))}function ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ve(-1,1),t.tag=2,at(n,t,1))),n.lanes|=1),e)}var hf=Xe.ReactCurrentOwner,de=!1;function ie(e,t,n,r){t.child=e===null?su(t,null,n,r):en(t,e.child,n,r)}function Pa(e,t,n,r,l){n=n.render;var o=t.ref;return Xt(t,l),r=xi(e,t,n,r,o,l),n=wi(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):($&&n&&ai(t),t.flags|=1,ie(e,t,r,l),t.child)}function La(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Pi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Iu(e,t,o,r,l)):(e=zr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(i,r)&&e.ref===t.ref)return Ke(e,t,l)}return t.flags|=1,e=ct(o,r),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Fn(o,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ke(e,t,l)}return jo(e,t,n,r,l)}function Ou(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(Vt,me),me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(Vt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,D(Vt,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,D(Vt,me),me|=r;return ie(e,t,l,n),t.child}function Du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jo(e,t,n,r,l){var o=pe(n)?Ct:oe.current;return o=Jt(t,o),Xt(t,l),n=xi(e,t,n,r,o,l),r=wi(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ke(e,t,l)):($&&r&&ai(t),t.flags|=1,ie(e,t,n,l),t.child)}function Ta(e,t,n,r,l){if(pe(n)){var o=!0;Ur(t)}else o=!1;if(Xt(t,l),t.stateNode===null)Nr(e,t),Lu(t,n,r),Co(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=pe(n)?Ct:oe.current,c=Jt(t,c));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Na(t,i,r,c),Je=!1;var m=t.memoizedState;i.state=m,Hr(t,r,i,l),s=t.memoizedState,a!==r||m!==s||fe.current||Je?(typeof v=="function"&&(Eo(t,n,v,r),s=t.memoizedState),(a=Je||Ca(t,n,a,r,m,s,c))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,cu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ze(t.type,a),i.props=c,g=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ce(s):(s=pe(n)?Ct:oe.current,s=Jt(t,s));var x=n.getDerivedStateFromProps;(v=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==g||m!==s)&&Na(t,i,r,s),Je=!1,m=t.memoizedState,i.state=m,Hr(t,r,i,l);var h=t.memoizedState;a!==g||m!==h||fe.current||Je?(typeof x=="function"&&(Eo(t,n,x,r),h=t.memoizedState),(c=Je||Ca(t,n,c,r,m,h,s)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,h,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,h,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return bo(e,t,n,r,o,l)}function bo(e,t,n,r,l,o){Du(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&va(t,n,!1),Ke(e,t,o);r=t.stateNode,hf.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=en(t,e.child,null,o),t.child=en(t,null,a,o)):ie(e,t,a,o),t.memoizedState=r.state,l&&va(t,n,!0),t.child}function Mu(e){var t=e.stateNode;t.pendingContext?ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ga(e,t.context,!1),mi(e,t.containerInfo)}function Ra(e,t,n,r,l){return qt(),ui(l),t.flags|=256,ie(e,t,n,r),t.child}var zo={dehydrated:null,treeContext:null,retryLane:0};function Po(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fu(e,t,n){var r=t.pendingProps,l=U.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(U,l&1),e===null)return ko(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=dl(i,r,0,null),e=Et(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Po(n),t.memoizedState=zo,e):Si(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return mf(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ct(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=ct(a,o):(o=Et(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Po(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=zo,r}return o=e.child,e=o.sibling,r=ct(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Si(e,t){return t=dl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ui(r),en(t,e.child,null,n),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Al(Error(_(422))),hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=dl({mode:"visible",children:r.children},l,0,null),o=Et(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&en(t,e.child,null,i),t.child.memoizedState=Po(i),t.memoizedState=zo,o);if(!(t.mode&1))return hr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=Al(o,r,void 0),hr(e,t,i,r)}if(a=(i&e.childLanes)!==0,de||a){if(r=J,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Qe(e,l),Re(r,e,l,-1))}return zi(),r=Al(Error(_(421))),hr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=bf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ge=it(l.nextSibling),ve=t,$=!0,Le=null,e!==null&&(_e[ke++]=Be,_e[ke++]=We,_e[ke++]=Nt,Be=e.id,We=e.overflow,Nt=t),t=Si(t,r.children),t.flags|=4096,t)}function Ia(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),So(e.return,t,n)}function Bl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function $u(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ie(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ia(e,n,t);else if(e.tag===19)Ia(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=ct(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ct(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:Mu(t),qt();break;case 5:du(t);break;case 1:pe(t.type)&&Ur(t);break;case 4:mi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Fu(e,t,n):(D(U,U.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $u(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Ou(e,t,n)}return Ke(e,t,n)}var Uu,Lo,Au,Bu;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lo=function(){};Au=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,kt($e.current);var o=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),o=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),o=[];break;case"textarea":l=to(e,l),r=to(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fr)}ro(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ln.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&M("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vf(e,t,n){var r=t.pendingProps;switch(si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&$r(),re(t),null;case 3:return r=t.stateNode,tn(),F(fe),F(oe),vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&($o(Le),Le=null))),Lo(e,t),re(t),null;case 5:gi(t);var l=kt(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)Au(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return re(t),null}if(e=kt($e.current),fr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Me]=t,r[An]=o,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<_n.length;l++)M(_n[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":Wi(r,o),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},M("invalid",r);break;case"textarea":Hi(r,o),M("invalid",r)}ro(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",""+a]):Ln.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&M("scroll",r)}switch(n){case"input":rr(r),Vi(r,o,!0);break;case"textarea":rr(r),Yi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Fr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Me]=t,e[An]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(i=lo(n,r),n){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<_n.length;l++)M(_n[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":Wi(e,r),l=Jl(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),M("invalid",e);break;case"textarea":Hi(e,r),l=to(e,r),M("invalid",e);break;default:l=r}ro(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?xs(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&vs(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Tn(e,s):typeof s=="number"&&Tn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ln.hasOwnProperty(o)?s!=null&&o==="onScroll"&&M("scroll",e):s!=null&&Qo(e,o,s,i))}switch(n){case"input":rr(e),Vi(e,r,!1);break;case"textarea":rr(e),Yi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ht(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Fr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=kt(Wn.current),kt($e.current),fr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Me]=t,(o=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Me]=t,t.stateNode=r}return re(t),null;case 13:if(F(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ge!==null&&t.mode&1&&!(t.flags&128))iu(),qt(),t.flags|=98560,o=!1;else if(o=fr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[Me]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),o=!1}else Le!==null&&($o(Le),Le=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):zi())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return tn(),Lo(e,t),e===null&&$n(t.stateNode.containerInfo),re(t),null;case 10:return fi(t.type._context),re(t),null;case 17:return pe(t.type)&&$r(),re(t),null;case 19:if(F(U),o=t.memoizedState,o===null)return re(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)gn(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yr(e),i!==null){for(t.flags|=128,gn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&Y()>rn&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!$)return re(t),null}else 2*Y()-o.renderingStartTime>rn&&n!==1073741824&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Y(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return bi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function yf(e,t){switch(si(t),t.tag){case 1:return pe(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),F(fe),F(oe),vi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gi(t),null;case 13:if(F(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(U),null;case 4:return tn(),null;case 10:return fi(t.type._context),null;case 22:case 23:return bi(),null;case 24:return null;default:return null}}var mr=!1,le=!1,xf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function To(e,t,n){try{n()}catch(r){W(e,t,r)}}var Oa=!1;function wf(e,t){if(mo=Or,e=Qs(),ii(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,v=0,g=e,m=null;t:for(;;){for(var x;g!==n||l!==0&&g.nodeType!==3||(a=i+l),g!==o||r!==0&&g.nodeType!==3||(s=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===e)break t;if(m===n&&++c===l&&(a=i),m===o&&++v===r&&(s=i),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},Or=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,b=h.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:ze(t.type,y),b);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){W(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return h=Oa,Oa=!1,h}function bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&To(t,n,o)}l=l.next}while(l!==r)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[An],delete t[xo],delete t[tf],delete t[nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Da(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fr));else if(r!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var q=null,Pe=!1;function Ge(e,t,n){for(n=n.child;n!==null;)Hu(e,t,n),n=n.sibling}function Hu(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:le||Wt(n,t);case 6:var r=q,l=Pe;q=null,Ge(e,t,n),q=r,Pe=l,q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),Dn(e)):Ol(q,n.stateNode));break;case 4:r=q,l=Pe,q=n.stateNode.containerInfo,Pe=!0,Ge(e,t,n),q=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&To(n,t,i),l=l.next}while(l!==r)}Ge(e,t,n);break;case 1:if(!le&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}Ge(e,t,n);break;case 21:Ge(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ge(e,t,n),le=r):Ge(e,t,n);break;default:Ge(e,t,n)}}function Ma(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xf),t.forEach(function(r){var l=zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,Pe=!1;break e;case 3:q=a.stateNode.containerInfo,Pe=!0;break e;case 4:q=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(q===null)throw Error(_(160));Hu(o,i,l),q=null,Pe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){W(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),Oe(e),r&4){try{bn(3,e,e.return),ul(3,e)}catch(y){W(e,e.return,y)}try{bn(5,e,e.return)}catch(y){W(e,e.return,y)}}break;case 1:be(t,e),Oe(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(be(t,e),Oe(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{Tn(l,"")}catch(y){W(e,e.return,y)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hs(l,o),lo(a,i);var c=lo(a,o);for(i=0;i<s.length;i+=2){var v=s[i],g=s[i+1];v==="style"?xs(l,g):v==="dangerouslySetInnerHTML"?vs(l,g):v==="children"?Tn(l,g):Qo(l,v,g,c)}switch(a){case"input":ql(l,o);break;case"textarea":ms(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Ht(l,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ht(l,!!o.multiple,o.defaultValue,!0):Ht(l,!!o.multiple,o.multiple?[]:"",!1))}l[An]=o}catch(y){W(e,e.return,y)}}break;case 6:if(be(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(_(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(y){W(e,e.return,y)}}break;case 3:if(be(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(y){W(e,e.return,y)}break;case 4:be(t,e),Oe(e);break;case 13:be(t,e),Oe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ni=Y())),r&4&&Ma(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(le=(c=le)||v,be(t,e),le=c):be(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(S=e,v=e.child;v!==null;){for(g=S=v;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:bn(4,m,m.return);break;case 1:Wt(m,m.return);var h=m.stateNode;if(typeof h.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){W(r,n,y)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){$a(g);continue}}x!==null?(x.return=m,S=x):$a(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{l=g.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,s=g.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ys("display",i))}catch(y){W(e,e.return,y)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(y){W(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:be(t,e),Oe(e),r&4&&Ma(e);break;case 21:break;default:be(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Tn(l,""),r.flags&=-33);var o=Da(e);Oo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Da(e);Io(e,a,i);break;default:throw Error(_(161))}}catch(s){W(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _f(e,t,n){S=e,Qu(e)}function Qu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||mr;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||le;a=mr;var c=le;if(mr=i,(le=s)&&!c)for(S=l;S!==null;)i=S,s=i.child,i.tag===22&&i.memoizedState!==null?Ua(l):s!==null?(s.return=i,S=s):Ua(l);for(;o!==null;)S=o,Qu(o),o=o.sibling;S=l,mr=a,le=c}Fa(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):Fa(e)}}function Fa(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ka(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ka(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Dn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}le||t.flags&512&&Ro(t)}catch(m){W(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function $a(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ua(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(s){W(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){W(t,l,s)}}var o=t.return;try{Ro(t)}catch(s){W(t,o,s)}break;case 5:var i=t.return;try{Ro(t)}catch(s){W(t,i,s)}}}catch(s){W(t,t.return,s)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var kf=Math.ceil,Xr=Xe.ReactCurrentDispatcher,Ei=Xe.ReactCurrentOwner,Ee=Xe.ReactCurrentBatchConfig,R=0,J=null,Q=null,ee=0,me=0,Vt=ht(0),X=0,Qn=null,bt=0,cl=0,Ci=0,zn=null,ce=null,Ni=0,rn=1/0,Ue=null,Gr=!1,Do=null,st=null,gr=!1,nt=null,Zr=0,Pn=0,Mo=null,jr=-1,br=0;function ae(){return R&6?Y():jr!==-1?jr:jr=Y()}function ut(e){return e.mode&1?R&2&&ee!==0?ee&-ee:lf.transition!==null?(br===0&&(br=Ls()),br):(e=O,e!==0||(e=window.event,e=e===void 0?16:Fs(e.type)),e):1}function Re(e,t,n,r){if(50<Pn)throw Pn=0,Mo=null,Error(_(185));Xn(e,n,r),(!(R&2)||e!==J)&&(e===J&&(!(R&2)&&(cl|=n),X===4&&et(e,ee)),he(e,r),n===1&&R===0&&!(t.mode&1)&&(rn=Y()+500,il&&mt()))}function he(e,t){var n=e.callbackNode;ld(e,t);var r=Ir(e,e===J?ee:0);if(r===0)n!==null&&Xi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Xi(n),t===1)e.tag===0?rf(Aa.bind(null,e)):ru(Aa.bind(null,e)),qd(function(){!(R&6)&&mt()}),n=null;else{switch(Ts(r)){case 1:n=Jo;break;case 4:n=zs;break;case 16:n=Rr;break;case 536870912:n=Ps;break;default:n=Rr}n=tc(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(jr=-1,br=0,R&6)throw Error(_(327));var n=e.callbackNode;if(Gt()&&e.callbackNode!==n)return null;var r=Ir(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jr(e,r);else{t=r;var l=R;R|=2;var o=Gu();(J!==e||ee!==t)&&(Ue=null,rn=Y()+500,St(e,t));do try{Cf();break}catch(a){Xu(e,a)}while(!0);di(),Xr.current=o,R=l,Q!==null?t=0:(J=null,ee=0,t=X)}if(t!==0){if(t===2&&(l=uo(e),l!==0&&(r=l,t=Fo(e,l))),t===1)throw n=Qn,St(e,0),et(e,r),he(e,Y()),n;if(t===6)et(e,r);else{if(l=e.current.alternate,!(r&30)&&!Sf(l)&&(t=Jr(e,r),t===2&&(o=uo(e),o!==0&&(r=o,t=Fo(e,o))),t===1))throw n=Qn,St(e,0),et(e,r),he(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:xt(e,ce,Ue);break;case 3:if(et(e,r),(r&130023424)===r&&(t=Ni+500-Y(),10<t)){if(Ir(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yo(xt.bind(null,e,ce,Ue),t);break}xt(e,ce,Ue);break;case 4:if(et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Te(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kf(r/1960))-r,10<r){e.timeoutHandle=yo(xt.bind(null,e,ce,Ue),r);break}xt(e,ce,Ue);break;case 5:xt(e,ce,Ue);break;default:throw Error(_(329))}}}return he(e,Y()),e.callbackNode===n?Ku.bind(null,e):null}function Fo(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(St(e,t).flags|=256),e=Jr(e,t),e!==2&&(t=ce,ce=n,t!==null&&$o(t)),e}function $o(e){ce===null?ce=e:ce.push.apply(ce,e)}function Sf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Ie(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Ci,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),r=1<<n;e[n]=-1,t&=~r}}function Aa(e){if(R&6)throw Error(_(327));Gt();var t=Ir(e,0);if(!(t&1))return he(e,Y()),null;var n=Jr(e,t);if(e.tag!==0&&n===2){var r=uo(e);r!==0&&(t=r,n=Fo(e,r))}if(n===1)throw n=Qn,St(e,0),et(e,t),he(e,Y()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,ce,Ue),he(e,Y()),null}function ji(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(rn=Y()+500,il&&mt())}}function zt(e){nt!==null&&nt.tag===0&&!(R&6)&&Gt();var t=R;R|=1;var n=Ee.transition,r=O;try{if(Ee.transition=null,O=1,e)return e()}finally{O=r,Ee.transition=n,R=t,!(R&6)&&mt()}}function bi(){me=Vt.current,F(Vt)}function St(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jd(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:tn(),F(fe),F(oe),vi();break;case 5:gi(r);break;case 4:tn();break;case 13:F(U);break;case 19:F(U);break;case 10:fi(r.type._context);break;case 22:case 23:bi()}n=n.return}if(J=e,Q=e=ct(e.current,null),ee=me=t,X=0,Qn=null,Ci=cl=bt=0,ce=zn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}_t=null}return e}function Xu(e,t){do{var n=Q;try{if(di(),Er.current=Kr,Qr){for(var r=A.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Qr=!1}if(jt=0,Z=K=A=null,jn=!1,Vn=0,Ei.current=null,n===null||n.return===null){X=1,Qn=t,Q=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=ee,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,v=a,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var m=v.alternate;m?(v.updateQueue=m.updateQueue,v.memoizedState=m.memoizedState,v.lanes=m.lanes):(v.updateQueue=null,v.memoizedState=null)}var x=ba(i);if(x!==null){x.flags&=-257,za(x,i,a,o,t),x.mode&1&&ja(o,c,t),t=x,s=c;var h=t.updateQueue;if(h===null){var y=new Set;y.add(s),t.updateQueue=y}else h.add(s);break e}else{if(!(t&1)){ja(o,c,t),zi();break e}s=Error(_(426))}}else if($&&a.mode&1){var b=ba(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),za(b,i,a,o,t),ui(nn(s,a));break e}}o=s=nn(s,a),X!==4&&(X=2),zn===null?zn=[o]:zn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Tu(o,s,t);_a(o,d);break e;case 1:a=s;var u=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(st===null||!st.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Ru(o,a,t);_a(o,w);break e}}o=o.return}while(o!==null)}Ju(n)}catch(k){t=k,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Gu(){var e=Xr.current;return Xr.current=Kr,e===null?Kr:e}function zi(){(X===0||X===3||X===2)&&(X=4),J===null||!(bt&268435455)&&!(cl&268435455)||et(J,ee)}function Jr(e,t){var n=R;R|=2;var r=Gu();(J!==e||ee!==t)&&(Ue=null,St(e,t));do try{Ef();break}catch(l){Xu(e,l)}while(!0);if(di(),R=n,Xr.current=r,Q!==null)throw Error(_(261));return J=null,ee=0,X}function Ef(){for(;Q!==null;)Zu(Q)}function Cf(){for(;Q!==null&&!Xc();)Zu(Q)}function Zu(e){var t=ec(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Ju(e):Q=t,Ei.current=null}function Ju(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=vf(n,t,me),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function xt(e,t,n){var r=O,l=Ee.transition;try{Ee.transition=null,O=1,Nf(e,t,n,r)}finally{Ee.transition=l,O=r}return null}function Nf(e,t,n,r){do Gt();while(nt!==null);if(R&6)throw Error(_(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(od(e,o),e===J&&(Q=J=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,tc(Rr,function(){return Gt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ee.transition,Ee.transition=null;var i=O;O=1;var a=R;R|=4,Ei.current=null,wf(e,n),Yu(n,e),Hd(go),Or=!!mo,go=mo=null,e.current=n,_f(n),Gc(),R=a,O=i,Ee.transition=o}else e.current=n;if(gr&&(gr=!1,nt=e,Zr=l),o=e.pendingLanes,o===0&&(st=null),qc(n.stateNode),he(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Gr)throw Gr=!1,e=Do,Do=null,e;return Zr&1&&e.tag!==0&&Gt(),o=e.pendingLanes,o&1?e===Mo?Pn++:(Pn=0,Mo=e):Pn=0,mt(),null}function Gt(){if(nt!==null){var e=Ts(Zr),t=Ee.transition,n=O;try{if(Ee.transition=null,O=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Zr=0,R&6)throw Error(_(331));var l=R;for(R|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(S=c;S!==null;){var v=S;switch(v.tag){case 0:case 11:case 15:bn(8,v,o)}var g=v.child;if(g!==null)g.return=v,S=g;else for(;S!==null;){v=S;var m=v.sibling,x=v.return;if(Wu(v),v===c){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var h=o.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,S=d;break e}S=o.return}}var u=e.current;for(S=u;S!==null;){i=S;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,S=f;else e:for(i=u;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(k){W(a,a.return,k)}if(a===i){S=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,S=w;break e}S=a.return}}if(R=l,mt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(tl,e)}catch{}r=!0}return r}finally{O=n,Ee.transition=t}}return!1}function Ba(e,t,n){t=nn(n,t),t=Tu(e,t,1),e=at(e,t,1),t=ae(),e!==null&&(Xn(e,1,t),he(e,t))}function W(e,t,n){if(e.tag===3)Ba(e,e,n);else for(;t!==null;){if(t.tag===3){Ba(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=nn(n,e),e=Ru(t,e,1),t=at(t,e,1),e=ae(),t!==null&&(Xn(t,1,e),he(t,e));break}}t=t.return}}function jf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(X===4||X===3&&(ee&130023424)===ee&&500>Y()-Ni?St(e,0):Ci|=n),he(e,t)}function qu(e,t){t===0&&(e.mode&1?(t=ir,ir<<=1,!(ir&130023424)&&(ir=4194304)):t=1);var n=ae();e=Qe(e,t),e!==null&&(Xn(e,t,n),he(e,n))}function bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),qu(e,n)}var ec;ec=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,gf(e,t,n);de=!!(e.flags&131072)}else de=!1,$&&t.flags&1048576&&lu(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nr(e,t),e=t.pendingProps;var l=Jt(t,oe.current);Xt(t,n),l=xi(null,t,r,e,l,n);var o=wi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(o=!0,Ur(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,hi(t),l.updater=sl,t.stateNode=l,l._reactInternals=t,Co(t,r,e,n),t=bo(null,t,r,!0,o,n)):(t.tag=0,$&&o&&ai(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Lf(r),e=ze(r,e),l){case 0:t=jo(null,t,r,e,n);break e;case 1:t=Ta(null,t,r,e,n);break e;case 11:t=Pa(null,t,r,e,n);break e;case 14:t=La(null,t,r,ze(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),jo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Ta(e,t,r,l,n);case 3:e:{if(Mu(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,l=o.element,cu(e,t),Hr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=nn(Error(_(423)),t),t=Ra(e,t,r,n,l);break e}else if(r!==l){l=nn(Error(_(424)),t),t=Ra(e,t,r,n,l);break e}else for(ge=it(t.stateNode.containerInfo.firstChild),ve=t,$=!0,Le=null,n=su(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qt(),r===l){t=Ke(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return du(t),e===null&&ko(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,vo(r,l)?i=null:o!==null&&vo(r,o)&&(t.flags|=32),Du(e,t),ie(e,t,i,n),t.child;case 6:return e===null&&ko(t),null;case 13:return Fu(e,t,n);case 4:return mi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=en(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Pa(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,D(Wr,r._currentValue),r._currentValue=i,o!==null)if(Ie(o.value,i)){if(o.children===l.children&&!fe.current){t=Ke(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Ve(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?s.next=s:(s.next=v.next,v.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),So(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(_(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),So(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=Ce(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),La(e,t,r,l,n);case 15:return Iu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Nr(e,t),t.tag=1,pe(r)?(e=!0,Ur(t)):e=!1,Xt(t,n),Lu(t,r,l),Co(t,r,l,n),bo(null,t,r,!0,e,n);case 19:return $u(e,t,n);case 22:return Ou(e,t,n)}throw Error(_(156,t.tag))};function tc(e,t){return bs(e,t)}function Pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new Pf(e,t,n,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return Pi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Go)return 14}return 2}function ct(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Pi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case It:return Et(n.children,l,o,t);case Ko:i=8,l|=8;break;case Kl:return e=Se(12,n,t,l|2),e.elementType=Kl,e.lanes=o,e;case Xl:return e=Se(13,n,t,l),e.elementType=Xl,e.lanes=o,e;case Gl:return e=Se(19,n,t,l),e.elementType=Gl,e.lanes=o,e;case ds:return dl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:i=10;break e;case cs:i=9;break e;case Xo:i=11;break e;case Go:i=14;break e;case Ze:i=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Se(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Et(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function dl(e,t,n,r){return e=Se(22,e,r,t),e.elementType=ds,e.lanes=n,e.stateNode={isHidden:!1},e}function Wl(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Li(e,t,n,r,l,o,i,a,s){return e=new Tf(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Se(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hi(o),e}function Rf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nc(e){if(!e)return ft;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(pe(n))return nu(e,n,t)}return t}function rc(e,t,n,r,l,o,i,a,s){return e=Li(n,r,!0,e,l,o,i,a,s),e.context=nc(null),n=e.current,r=ae(),l=ut(n),o=Ve(r,l),o.callback=t??null,at(n,o,l),e.current.lanes=l,Xn(e,l,r),he(e,r),e}function fl(e,t,n,r){var l=t.current,o=ae(),i=ut(l);return n=nc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ve(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=at(l,t,i),e!==null&&(Re(e,l,i,o),Sr(e,l,i)),i}function qr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ti(e,t){Wa(e,t),(e=e.alternate)&&Wa(e,t)}function If(){return null}var lc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ri(e){this._internalRoot=e}pl.prototype.render=Ri.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));fl(e,t,null,null)};pl.prototype.unmount=Ri.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){fl(null,e,null,null)}),t[Ye]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Os();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&Ms(e)}};function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Va(){}function Of(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=qr(i);o.call(c)}}var i=rc(t,r,e,0,null,!1,!1,"",Va);return e._reactRootContainer=i,e[Ye]=i.current,$n(e.nodeType===8?e.parentNode:e),zt(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=qr(s);a.call(c)}}var s=Li(e,0,!1,null,null,!1,!1,"",Va);return e._reactRootContainer=s,e[Ye]=s.current,$n(e.nodeType===8?e.parentNode:e),zt(function(){fl(t,s,n,r)}),s}function ml(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=qr(i);a.call(s)}}fl(t,i,e,l)}else i=Of(n,t,e,l,r);return qr(i)}Rs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wn(t.pendingLanes);n!==0&&(qo(t,n|1),he(t,Y()),!(R&6)&&(rn=Y()+500,mt()))}break;case 13:zt(function(){var r=Qe(e,1);if(r!==null){var l=ae();Re(r,e,1,l)}}),Ti(e,1)}};ei=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=ae();Re(t,e,134217728,n)}Ti(e,134217728)}};Is=function(e){if(e.tag===13){var t=ut(e),n=Qe(e,t);if(n!==null){var r=ae();Re(n,e,t,r)}Ti(e,t)}};Os=function(){return O};Ds=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};io=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(_(90));ps(r),ql(r,l)}}}break;case"textarea":ms(e,n);break;case"select":t=n.value,t!=null&&Ht(e,!!n.multiple,t,!1)}};ks=ji;Ss=zt;var Df={usingClientEntryPoint:!1,Events:[Zn,Ft,ol,ws,_s,ji]},vn={findFiberByHostInstance:wt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mf={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ns(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||If,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{tl=vr.inject(Mf),Fe=vr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Df;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ii(t))throw Error(_(200));return Rf(e,t,null,n)};xe.createRoot=function(e,t){if(!Ii(e))throw Error(_(299));var n=!1,r="",l=lc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Li(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,$n(e.nodeType===8?e.parentNode:e),new Ri(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Ns(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return zt(e)};xe.hydrate=function(e,t,n){if(!hl(t))throw Error(_(200));return ml(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Ii(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=lc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=rc(t,null,e,1,n??null,l,!1,o,i),e[Ye]=t.current,$n(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pl(t)};xe.render=function(e,t,n){if(!hl(t))throw Error(_(200));return ml(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!hl(e))throw Error(_(40));return e._reactRootContainer?(zt(function(){ml(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};xe.unstable_batchedUpdates=ji;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ml(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(e){console.error(e)}}oc(),os.exports=xe;var Ff=os.exports,Ha=Ff;Yl.createRoot=Ha.createRoot,Yl.hydrateRoot=Ha.hydrateRoot;const $f="/assets/covers_1-Bilzja99.jpg",Uf="/assets/covers_2-BT7UyD4u.jpg",Af="/assets/covers_3-BhlbF_JE.jpg",Bf="/assets/covers_4-BtZpn4z4.jpeg",Wf="/assets/covers_5-Ct50DjMu.jpg",Vf="/assets/covers_6-D0YfUzyB.webp",Hf="/assets/lsi_bg-F9yxOnlA.png",Yf="/assets/maintenance_1-BnOiItKK.jpeg",Qf="/assets/poolwerx_logo-BlzSZuv5.png",Kf="/assets/rails_1-DrPdm0DO.webp",Xf="/assets/rails_2-BQXIYE4N.jpg",Gf="/assets/rails_3-DWWpjLPV.webp",Zf="/assets/rails_4-8kee2nsv.jpg",Jf="/assets/rails_5-BFEYZXc_.jpg",qf="/assets/rails_6-DqVrbRIs.webp",ep="/assets/remodel_1-aopZKJuD.jpg",tp="/assets/remodel_2-Cv9IQwgA.jpeg",np="/assets/remodel_3-DeCRPW46.webp",rp="/assets/remodel_4-u4C8xWMo.jpg",lp="/assets/remodel_5-OkE6wqFP.jpg",op="/assets/remodel_6-CcysA5j6.jpg",ip="/assets/repair_1-bGpKeWuz.jpeg",ap="/assets/retail_1-DKqkMBZg.jpeg",sp="/assets/splash-BH1EmpT0.png",up="/assets/storefront-DeCm8y0i.jpg",cp="/assets/tile_1-DTQvpEZH.jpeg",dp="/assets/tile_2-Q98rzYM3.jpg",fp="/assets/tile_3-LCMHspyv.jpeg",pp="/assets/tile_4-DEMq79F7.jpg",hp="/assets/tile_5-DOZbAYIe.jpg",mp="/assets/tile_6-DqjqDINr.jpg",gp="/assets/turf_1-BJShw0OI.jpg",vp="/assets/turf_3-CLdLTwGd.jpg",yp="/assets/turf_4-Oo7Le6dY.webp",xp="/assets/turf_5-S1vBjnc-.jpg",wp="/assets/turf_6-CqtUVhFd.jpg",_p="/assets/waterfeatures_1-Dt_Ee8ud.jpeg",kp="/assets/waterfeatures_2-CpAOGRso.webp",Sp="/assets/waterfeatures_4-By2LwMNP.webp",Ep="/assets/waterfeatures_5-v5ldaVY7.jpg",Cp="/assets/waterfeatures_6-C092ks8j.jpg",ic=Object.assign({"/src/assets/images/covers_1.jpg":$f,"/src/assets/images/covers_2.jpg":Uf,"/src/assets/images/covers_3.jpg":Af,"/src/assets/images/covers_4.jpeg":Bf,"/src/assets/images/covers_5.jpg":Wf,"/src/assets/images/covers_6.webp":Vf,"/src/assets/images/lsi_bg.png":Hf,"/src/assets/images/maintenance_1.jpeg":Yf,"/src/assets/images/poolwerx_logo.png":Qf,"/src/assets/images/rails_1.webp":Kf,"/src/assets/images/rails_2.jpg":Xf,"/src/assets/images/rails_3.webp":Gf,"/src/assets/images/rails_4.jpg":Zf,"/src/assets/images/rails_5.jpg":Jf,"/src/assets/images/rails_6.webp":qf,"/src/assets/images/remodel_1.jpg":ep,"/src/assets/images/remodel_2.jpeg":tp,"/src/assets/images/remodel_3.webp":np,"/src/assets/images/remodel_4.jpg":rp,"/src/assets/images/remodel_5.jpg":lp,"/src/assets/images/remodel_6.jpg":op,"/src/assets/images/repair_1.jpeg":ip,"/src/assets/images/retail_1.jpeg":ap,"/src/assets/images/splash.png":sp,"/src/assets/images/storefront.jpg":up,"/src/assets/images/tile_1.jpeg":cp,"/src/assets/images/tile_2.jpg":dp,"/src/assets/images/tile_3.jpeg":fp,"/src/assets/images/tile_4.jpg":pp,"/src/assets/images/tile_5.jpg":hp,"/src/assets/images/tile_6.jpg":mp,"/src/assets/images/turf_1.jpg":gp,"/src/assets/images/turf_3.jpg":vp,"/src/assets/images/turf_4.webp":yp,"/src/assets/images/turf_5.jpg":xp,"/src/assets/images/turf_6.jpg":wp,"/src/assets/images/waterfeatures_1.jpeg":_p,"/src/assets/images/waterfeatures_2.webp":kp,"/src/assets/images/waterfeatures_4.webp":Sp,"/src/assets/images/waterfeatures_5.jpg":Ep,"/src/assets/images/waterfeatures_6.jpg":Cp}),Uo=Object.entries(ic).reduce((e,[t,n])=>{const l=(t.split("/").pop()||"").replace(/\.[^.]+$/,""),o=(l.split("_")[0]||l).toLowerCase();return(e[o]??(e[o]=[])).push(n),e},{});function Ya(e){const t=e.match(/_(\d+)(?:\.[a-z]+)?$/i);return t?parseInt(t[1],10):0}for(const e in Uo)Uo[e].sort((t,n)=>Ya(t)-Ya(n));function ac(e){return Uo[e==null?void 0:e.toLowerCase()]??[]}function Oi(e){const t=ac(e);return t.length?t[0]:null}function Np(e){const t=String(e).toLowerCase();for(const[n,r]of Object.entries(ic))if((n.split("/").pop()||"").replace(/\.[^.]+$/,"").toLowerCase()===t)return r;return null}function Hl(e,t=window.location.hash,n=window.location.search){const r=(e||"").toLowerCase(),l=(t||"").toLowerCase(),o=(n||"").toLowerCase();return["/understanding-winter-chemistry","/understanding-winter-chemisty"].some(s=>r.includes(s)||l.includes(s))||o.includes("page=winter")||o.includes("winter")?"winter":"home"}function jp(){const[e,t]=I.useState(()=>Hl(window.location.pathname));I.useEffect(()=>{const x=()=>t(Hl(window.location.pathname)),h=()=>t(Hl(window.location.pathname));return window.addEventListener("popstate",x),window.addEventListener("hashchange",h),()=>{window.removeEventListener("popstate",x),window.removeEventListener("hashchange",h)}},[]),I.useEffect(()=>{const x=new IntersectionObserver(h=>h.forEach(y=>y.isIntersecting&&y.target.classList.add("is-visible")),{threshold:.15});return document.querySelectorAll(".fade-on-view").forEach(h=>x.observe(h)),()=>x.disconnect()},[]);const n=[{key:"remodeling",title:"Remodeling",prefix:"remodel"},{key:"tile",title:"Tile",prefix:"tile"},{key:"features",title:"Water Features",prefix:"waterfeatures"},{key:"rails",title:"Handrails / Fences",prefix:"rails"},{key:"turf",title:"Turf",prefix:"turf"},{key:"covers",title:"Pool Covers",prefix:"covers"}],r={remodeling:{start:"#2d7a78",end:"#4bb4b0"},tile:{start:"#67cae9",end:"#92e9f6"},features:{start:"#42e9c0",end:"#79f2d4"},rails:{start:"#378aa3",end:"#61c6c0"},turf:{start:"#1f6d7f",end:"#49aca2"},covers:{start:"#aef3ef",end:"#d6fcfb"}},l=I.useMemo(()=>({remodeling:"We handle every aspect of pool remodeling, from surface to structure. Our resurfacing and replastering services include standard plaster, quartz, and premium pebble finishes...",tile:"We specialize in waterline and accent tile replacement or repair, using chemical-resistant materials designed to withstand the harsh pool environment...",features:"We install custom water and lighting features that bring movement, sound, and atmosphere to your pool...",rails:"We provide core-drilled stainless steel rails and safety fencing to enhance both accessibility and protection around your pool...",turf:"We install premium low-maintenance turf systems that transform the space around your pool into a clean, green, and usable surface all year long...",covers:"We offer both automatic and manual pool covers custom-sized to fit your pool perfectly..."}),[]),[o,i]=I.useState(null),[a,s]=I.useState(null),c=I.useRef({}),v=I.useRef(null),g=x=>{const h=()=>{const y=c.current[x];if(!y){i(x);return}const b=y.getBoundingClientRect();s({x:b.x,y:b.y,w:b.width,h:b.height}),i(x)};if(v.current)try{v.current.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(h,350)}catch{h()}else h()},m=()=>i(null);return e==="winter"?p.jsx(bp,{}):p.jsxs("div",{style:{fontFamily:"Oswald, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",color:"#1a2b3c",margin:0},children:[p.jsx("style",{children:sc}),p.jsx("div",{className:"topbar",children:p.jsxs("div",{className:"container topbar__inner",children:[p.jsx("div",{className:"topbar__text",children:"Take a listen to The Deep End Pool Podcast!"}),p.jsxs("div",{className:"topbar__buttons",children:[p.jsx("a",{className:"topbar__btn",href:"https://thedeependpoolpodcast.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"Check out our podcast",children:"Our Podcast"}),p.jsx("a",{className:"topbar__btn",href:"https://www.youtube.com/@deependfrank/featured",target:"_blank",rel:"noopener noreferrer","aria-label":"Check out our YouTube channel",children:"Our YouTube"})]})]})}),p.jsxs("header",{className:"hero fade-on-view",children:[p.jsx("img",{className:"hero-img",src:"/images/topimage.png",alt:"Deep End Pool Solutions"}),p.jsx("div",{className:"hero-subtitle",children:"Serving the Dallas/Fort Worth Market"}),p.jsx("div",{className:"hero-strip",children:p.jsxs("div",{className:"container",children:[p.jsx("a",{href:"/LSIcalc.html",className:"lsi-calc-button","aria-label":"Calculate your pool's LSI",children:"Calculate Your Pool's LSI"}),p.jsxs("div",{className:"strip-phone",children:[p.jsx("div",{className:"strip-phone-text",children:"Call us for a free estimate!"}),p.jsx("a",{href:"tel:+18175643400",className:"strip-phone-number",children:"817-564-3400"})]}),p.jsx("div",{className:"strip-title",children:"Here's what we do…"})]})})]}),p.jsx("div",{className:"section-divider",role:"separator","aria-hidden":"true"}),p.jsxs("section",{ref:v,className:"section section--video fade-on-view",children:[p.jsxs("div",{className:"video-bg","aria-hidden":"true",children:[p.jsx("video",{className:"video-bg__media",src:"/videos/whatwedo.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto"}),p.jsx("div",{className:"video-bg__scrim"})]}),p.jsxs("div",{className:"container",children:[p.jsx("div",{className:`grid ${o?"grid--collapsed":""}`,children:n.map(x=>p.jsx(zp,{data:x,theme:r[x.key],refFn:h=>c.current[x.key]=h,hidden:!!o&&o!==x.key,onOpen:()=>g(x.key)},x.key))}),o&&p.jsx(Tp,{service:n.find(x=>x.key===o),theme:r[o],summary:l[o],fromRect:a,onClose:m})]})]}),p.jsx("div",{className:"section-divider",role:"separator","aria-hidden":"true"}),p.jsx("section",{className:"section section--resources fade-on-view",id:"resources",children:p.jsx("div",{className:"container",children:p.jsx(Lp,{})})}),p.jsx("div",{className:"section-divider",role:"separator","aria-hidden":"true"}),p.jsx("section",{className:"contact-section fade-on-view",id:"contact",children:p.jsxs("div",{className:"container",children:[p.jsx("h2",{className:"contact-title",children:"Contact us"}),p.jsxs("div",{className:"facebook-section",children:[p.jsx("h3",{className:"facebook-title",children:"Join Our Pool Community!"}),p.jsx("p",{className:"facebook-description",children:"Connect with other pool owners, get expert tips, and stay updated with the latest pool care advice."}),p.jsxs("a",{href:"https://www.facebook.com/groups/760287595187311/",target:"_blank",rel:"noopener noreferrer",className:"facebook-button","aria-label":"Join our Facebook group",children:[p.jsx("svg",{className:"facebook-icon",viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),"Join the DFW Pool Owners Group"]})]}),p.jsxs("div",{className:"contact-lines",children:[p.jsxs("div",{className:"contact-block",children:[p.jsx("div",{className:"contact-label",children:"E-mail:"}),p.jsx("a",{className:"contact-value",href:"mailto:deepend.service@deependpoolsolutions.com",children:"deepend.service@deependpoolsolutions.com"})]}),p.jsxs("div",{className:"contact-block",children:[p.jsx("div",{className:"contact-label",children:"Phone:"}),p.jsx("a",{className:"contact-value",href:"tel:+18175643400",children:"817 564 3400"})]}),p.jsx("p",{className:"contact-note",children:"Contact us with your inquiry and we'll help you on your project journey!"})]})]})})]})}function bp(){const e=Np("lsi_bg"),[t,n]=I.useState(""),r=l=>{l.preventDefault();const o=encodeURIComponent("Pool Issue: "+(t||"Help with winter chemistry")),i=encodeURIComponent(`Describe your issue (photos welcome):

${t}

My contact info:
- Name:
- Phone:
- City:
`);window.location.href=`mailto:deepend.service@deependpoolsolutions.com?subject=${o}&body=${i}`};return p.jsxs("div",{style:{fontFamily:"Oswald, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",color:"#112434",background:"#ffffff"},children:[p.jsx("style",{children:sc}),p.jsxs("section",{className:"winter-hero",children:[p.jsx("div",{className:"winter-hero__bg"}),p.jsxs("div",{className:"container winter-hero__inner",children:[p.jsx("h1",{className:"winter-hero__title",children:"Deep End Support"}),p.jsx("p",{className:"winter-hero__dek",children:"Tell us what’s going on, and we’ll guide you to a fix."})]})]}),p.jsx("div",{className:"container winter-lead fade-on-view",children:p.jsxs("figure",{className:"winter-lead__figure",children:[p.jsxs("div",{className:"winter-lead__img",role:"img","aria-label":"Winter chemistry visual",children:[e?p.jsx("img",{className:"winter-lead__photo",src:e,alt:"LSI background"}):null,p.jsx("div",{className:"winter-lead__scrim"})]}),p.jsx("figcaption",{className:"winter-lead__cap",children:"Recently had your water tested? Get a free comprehensive analysis right at home!"})]})}),p.jsxs("section",{className:"container winter-search fade-on-view",children:[p.jsx("h2",{className:"winter-search__headline",children:"What's your problem!?"}),p.jsx("p",{className:"winter-search__sub",children:"We can help..."}),p.jsxs("form",{className:"winter-search__form",onSubmit:r,role:"search","aria-label":"Describe your pool issue",children:[p.jsxs("div",{className:"winter-search__field",children:[p.jsx("input",{type:"text",value:t,onChange:l=>n(l.target.value),placeholder:"e.g., pH keeps drifting up, heater scaling, plaster dust, metals, cloudy water...","aria-label":"Describe your issue"}),p.jsx("button",{type:"submit","aria-label":"Send",children:"Get help"})]}),p.jsxs("div",{className:"winter-search__chips","aria-hidden":"true",children:[p.jsx("span",{onClick:()=>n("Low LSI / etching risk in cold water"),children:"LSI/etching"}),p.jsx("span",{onClick:()=>n("White scale forming on tile line or heater"),children:"Scale"}),p.jsx("span",{onClick:()=>n("SWG stopped producing chlorine in cold temps"),children:"SWG & cold"}),p.jsx("span",{onClick:()=>n("How to set pH/TA/CH for winter balance"),children:"Target levels"}),p.jsx("span",{onClick:()=>n("Stain or metal issues over the winter"),children:"Stains/Metals"})]})]})]}),p.jsx("footer",{className:"winter-footer",children:p.jsx("div",{className:"container winter-footer__inner",children:p.jsxs("p",{className:"winter-footer__txt",children:["Prefer to chat? Email ",p.jsx("a",{href:"mailto:deepend.service@deependpoolsolutions.com",children:"deepend.service@deependpoolsolutions.com"})," or call ",p.jsx("a",{href:"tel:+18175643400",children:"817-564-3400"}),"."]})})})]})}function zp({data:e,theme:t,refFn:n,hidden:r,onOpen:l}){const[o,i]=I.useState(null);return I.useEffect(()=>{i(Oi(e.prefix||e.key))},[e.prefix,e.key]),p.jsxs("a",{className:`service ${r?"service--hidden":""}`,href:"#",ref:n,onClick:a=>{a.preventDefault(),l()},"aria-label":`Open ${e.title}`,children:[p.jsxs("div",{className:"service__thumb",children:[o&&p.jsx("img",{src:o,alt:`${e.title} preview`,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:0},onError:a=>{a.currentTarget.style.display="none"}}),p.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"50%",background:`linear-gradient(to top, ${t.end}f0 0%, ${t.end}cc 30%, transparent 100%)`,zIndex:1}})]}),p.jsxs("div",{className:"service__title",style:{position:"absolute",bottom:0,left:0,right:0,zIndex:2,padding:"18px 20px",fontWeight:800,color:"#fff",textShadow:"0 2px 8px rgba(0,0,0,.5), 0 1px 3px rgba(0,0,0,.3)",fontSize:"clamp(17px, 2.6vw, 22px)",background:"linear-gradient(to top, rgba(0,0,0,.4) 0%, rgba(0,0,0,.2) 100%)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsx("span",{children:e.title}),p.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.9,transition:"transform 0.3s ease"},className:"service__arrow",children:p.jsx("polyline",{points:"9 18 15 12 9 6"})})]})]})}function Pp({title:e,body:t,prefix:n,tint:r=["#0b63c8","#13909e"],active:l,setActive:o}){const[i,a]=I.useState(null);I.useEffect(()=>a(Oi(n)),[n]);const s=l===n,c=()=>o(g=>g===n?null:n),v=g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),c())};return p.jsxs("article",{className:`rcard ${s?"rcard--open":""}`,onClick:c,onKeyDown:v,tabIndex:0,role:"button","aria-expanded":s,"aria-label":`${e} details`,children:[p.jsxs("div",{className:"rcard__media","aria-hidden":"true",children:[i?p.jsx("img",{src:i,alt:""}):p.jsx("div",{className:"rcard__ph",children:"Image coming soon"}),p.jsx("div",{className:"rcard__tint",style:{background:`linear-gradient(135deg, ${r[0]}, ${r[1]})`}})]}),p.jsxs("div",{className:"rcard__cover",children:[p.jsx("h4",{className:"rcard__title",children:e}),p.jsx("p",{className:"rcard__text",children:t})]})]})}function Lp(){const[e,t]=I.useState(null),n=I.useRef(null),r=I.useRef([]),l=[{title:"Retail",key:"retail",text:"If you're looking for chemicals, parts, or pool toys, we've got you covered! Our retail department is fully stocked with top-quality products...",tint:["#13909e","#22c1d6"]},{title:"Repair",key:"repair",text:"Trouble with your pool equipment? No problem! Our expert repair team specializes in all types of pool equipment...",tint:["#0b63c8","#13909e"]},{title:"Maintenance",key:"maintenance",text:"Keeping your pool healthy and inviting takes consistent care, and that's where our maintenance team shines...",tint:["#0a1040","#0b63c8"]}];I.useEffect(()=>{const i=n.current;if(!i)return;const a=()=>{const c=document.createElement("div");c.className="ambient-bubble";const v=Math.random()*40+10;c.style.width=`${v}px`,c.style.height=`${v}px`,c.style.left=`${Math.random()*100}%`;const g=Math.random()*4+4;c.style.animationDuration=`${g}s`,c.style.animationDelay=`${Math.random()*2}s`,c.style.opacity=Math.random()*.4+.1,i.appendChild(c),setTimeout(()=>{c.remove()},(g+2)*1e3)};for(let c=0;c<15;c++)setTimeout(()=>a(),c*400);const s=setInterval(a,800);return()=>{clearInterval(s)}},[]),I.useEffect(()=>{const i=n.current;if(!i)return;let a=0;const s=50,c=v=>{const g=Date.now();if(g-a<s)return;a=g;const m=i.getBoundingClientRect(),x=v.clientX-m.left,h=v.clientY-m.top,y=document.createElement("div");y.className="cursor-bubble";const b=Math.random()*8+4;y.style.width=`${b}px`,y.style.height=`${b}px`,y.style.left=`${x}px`,y.style.top=`${h}px`,i.appendChild(y),r.current.push(y),setTimeout(()=>{y.remove(),r.current=r.current.filter(d=>d!==y)},1500)};return i.addEventListener("mousemove",c),()=>{i.removeEventListener("mousemove",c),r.current.forEach(v=>v.remove()),r.current=[]}},[]);const o=Oi("poolwerx");return p.jsxs("div",{className:"resources",ref:n,children:[p.jsx("h3",{className:"resources-title",children:"You've reached The Deep End..."}),p.jsx("div",{className:"resources-cards",children:l.map(i=>p.jsx(Pp,{title:i.title,body:i.text,prefix:i.key,tint:i.tint,active:e,setActive:t},i.key))}),p.jsxs("p",{className:"resources-cta",children:["For more information regarding your Retail/Repair/Maintenance needs:",p.jsx("br",{}),p.jsx("a",{className:"resources-cta-link",href:"https://www.poolwerx.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"Click here for more information regarding Retail, Repair, and Maintenance",children:"poolwerx.com"}),p.jsx("br",{}),p.jsx("span",{className:"resources-cta-sub",children:"972-962-9119"}),p.jsx("br",{}),p.jsx("span",{className:"resources-cta-sub",children:"deepend@poolwerx.com"})]}),p.jsxs("div",{className:"locations-section",children:[p.jsx("h3",{className:"locations-title",children:"Come visit one of our locations!"}),p.jsxs("div",{className:"locations-buttons",children:[p.jsx("a",{href:"https://www.poolwerx.com/locations/texas/poolwerx-north-richland-hills/",target:"_blank",rel:"noopener noreferrer",className:"location-btn",children:"North Richland Hills"}),p.jsx("a",{href:"https://www.poolwerx.com/locations/texas/poolwerx-roanoke/",target:"_blank",rel:"noopener noreferrer",className:"location-btn",children:"Roanoke"}),p.jsx("a",{href:"https://www.poolwerx.com/locations/texas/poolwerx-denton/",target:"_blank",rel:"noopener noreferrer",className:"location-btn",children:"Lantana"}),p.jsx("a",{href:"https://www.poolwerx.com/locations/texas/poolwerx-flower-mound/",target:"_blank",rel:"noopener noreferrer",className:"location-btn",children:"Flower Mound"})]})]}),p.jsxs("div",{className:"poweredby",children:[p.jsx("div",{className:"poweredby__text",children:"Powered by:"}),o?p.jsx("div",{className:"poweredby__chip",children:p.jsx("img",{className:"poweredby__logo",src:o,alt:"Poolwerx"})}):null]})]})}function Tp({service:e,theme:t,summary:n,fromRect:r,onClose:l}){const o=I.useRef(null),[i,a]=I.useState([]),[s,c]=I.useState(0),v=I.useRef(null),g=I.useRef(0),m=I.useRef(0);I.useEffect(()=>{const h=ac(e.prefix);a(h.length?h:[])},[e.prefix]),I.useEffect(()=>{if(i.length)return v.current=setInterval(()=>c(h=>(h+1)%i.length),3500),()=>{v.current&&clearInterval(v.current)}},[i]),I.useEffect(()=>{const h=y=>{y.key==="ArrowLeft"?c(b=>(b-1+i.length)%i.length):y.key==="ArrowRight"?c(b=>(b+1)%i.length):y.key==="Escape"&&l()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[i.length,l]),I.useLayoutEffect(()=>{const h=o.current;if(!h||!r)return;const y=h.getBoundingClientRect(),b={x:r.x,y:r.y,w:r.w,h:r.h},d=b.w/y.width,u=b.h/y.height,f=b.x-y.x,w=b.y-y.y,k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if("animate"in h&&!k){h.animate([{opacity:0,backdropFilter:"blur(0px)"},{opacity:1,backdropFilter:"blur(10px)"}],{duration:400,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"both"}),h.style.transformOrigin="top left";const C=h.querySelector(".expanded");C?C.animate([{transform:`translate(${f}px, ${w}px) scale(${d}, ${u})`,opacity:.8,borderRadius:"16px"},{transform:"translate(0, 0) scale(1, 1)",opacity:1,borderRadius:"16px"}],{duration:450,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"both"}):h.animate([{transform:`translate(${f}px, ${w}px) scale(${d}, ${u})`},{transform:"translate(0, 0) scale(1, 1)"}],{duration:450,easing:"cubic-bezier(0.16, 1, 0.3, 1)",fill:"both"});const j=h.querySelector(".expanded");j&&j.animate([{opacity:0,transform:"translateY(6px)"},{opacity:1,transform:"translateY(0)"}],{duration:260,delay:90,easing:"cubic-bezier(.2,.8,.2,1)",fill:"both"})}else h.classList.add("flip-fallback-in"),requestAnimationFrame(()=>h.classList.add("flip-fallback-in--play"))},[r]);const x=()=>{const h=o.current;if(!h||!r)return l();const y=h.getBoundingClientRect(),b={x:r.x,y:r.y,w:r.w,h:r.h},d=b.w/y.width,u=b.h/y.height,f=b.x-y.x,w=b.y-y.y,k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if("animate"in h&&!k){h.animate([{opacity:1,backdropFilter:"blur(10px)"},{opacity:0,backdropFilter:"blur(0px)"}],{duration:300,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"});const C=h.querySelector(".expanded");C?C.animate([{transform:"scale(1)",opacity:1},{transform:"scale(0.95)",opacity:0}],{duration:300,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"}).finished.finally(l).catch(l):(h.style.transformOrigin="top left",h.animate([{transform:"translate(0,0) scale(1,1)"},{transform:`translate(${f}px, ${w}px) scale(${d}, ${u})`}],{duration:300,easing:"cubic-bezier(0.4, 0, 1, 1)",fill:"forwards"}).finished.finally(l).catch(l))}else h.classList.remove("flip-fallback-in--play"),setTimeout(l,220)};return p.jsx("div",{ref:o,className:"expanded-overlay",onClick:h=>{h.target===h.currentTarget&&x()},children:p.jsxs("div",{className:"expanded",style:{background:`linear-gradient(160deg, ${t.start} 0%, ${t.end} 100%)`,color:"#fff"},onClick:h=>h.stopPropagation(),children:[p.jsx("button",{className:"close","aria-label":"Close",onClick:x,children:"×"}),p.jsx("div",{className:"expanded__header",children:p.jsx("h3",{children:e.title})}),p.jsxs("div",{className:"expanded__content",children:[i.length>0?p.jsxs("div",{className:"slider","data-count":`${s+1} / ${i.length}`,onTouchStart:h=>{g.current=h.touches[0].clientX},onTouchMove:h=>{m.current=h.touches[0].clientX},onTouchEnd:()=>{const h=g.current-m.current;Math.abs(h)>50&&(h>0?c(b=>(b+1)%i.length):c(b=>(b-1+i.length)%i.length)),g.current=0,m.current=0},children:[p.jsx("ul",{className:"slider__track",style:{transform:`translate3d(${-s*100}%,0,0)`},children:i.map((h,y)=>p.jsx("li",{className:"slider__slide",children:p.jsx("img",{src:h,alt:`${e.title} ${y+1}`,draggable:"false"})},`${h}-${y}`))}),p.jsx("button",{className:"nav prev","aria-label":"Previous",onClick:()=>c(h=>(h-1+i.length)%i.length),children:"❮"}),p.jsx("button",{className:"nav next","aria-label":"Next",onClick:()=>c(h=>(h+1)%i.length),children:"❯"})]}):p.jsx("div",{className:"slider",style:{display:"grid",placeItems:"center",padding:16},children:p.jsx("div",{className:"slider__slide",style:{width:"100%"},children:p.jsx("div",{style:{width:"100%",height:"100%",display:"grid",placeItems:"center",aspectRatio:"16/9",background:"#eef3f8",color:"#4a5b6a"},children:"No images available"})})}),p.jsxs("div",{className:"expanded__text",children:[p.jsx("p",{children:n}),p.jsx("p",{style:{color:"#607185",fontSize:"clamp(13px, 1.8vw, 15px)",fontStyle:"italic"},children:"Images show examples of our work; your project may vary. Please contact us with an inquiry. We accommodate."})]})]})]})})}const sc=`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300..700&display=swap');

:root{
  --container: 1180px;
  --border: rgba(0,0,0,.10);

  --bg: #ffffff;
  --fg: #1a2b3c;

  --strip: #d4e8f7;
  --strip-border: #1c5aa3;

  --hero-bg: #ffffff;
  --hero-max-w: 500px;

  --expanded-border: rgba(0,0,0,.12);
  --expanded-shadow: 0 18px 40px rgba(0,0,0,.18);

  --topbar-bg-1: #0c1550;
  --topbar-bg-2: #0a1040;
  --brand-blue: #0b63c8;
  --brand-deep: #091728;
  --brand-navy: #0a1040;
  --brand-teal: #13909e;

  --cover-closed: clamp(56px, 7.2vw, 74px);
  --cover-open: 78%;

  --cover-bg: linear-gradient(180deg, rgba(9,23,40,.92), rgba(9,23,40,.96));
  --text-soft: #d8e6f3;
}

*{box-sizing:border-box}
html,body,#root{height:100%}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:
    radial-gradient(1200px 700px at 15% -10%, rgba(28, 90, 163, 0.08) 0%, transparent 65%),
    radial-gradient(900px 500px at 85% 5%, rgba(19, 144, 158, 0.06) 0%, transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfd 100%);
  color:var(--fg);
  font-family: 'Oswald', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container{ max-width: var(--container); margin:0 auto; padding:0 20px }

/* =============== TOPBAR =============== */
.topbar{
  background: linear-gradient(135deg, var(--topbar-bg-1) 0%, var(--topbar-bg-2) 100%);
  color:#e8efff;
  font-size: 14px;
  letter-spacing: .02em;
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 100;
}
.topbar__inner{ position: relative; padding: 6px 0; min-height: 36px; }
.topbar__text{
  width: 100%; text-align: center; font-weight: 600; line-height: 1.2;
  padding: 6px 160px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.topbar__buttons{
  position: absolute; right: 0; top: 50%; transform: translateY(-50%);
  display: flex; gap: 8px;
}
.topbar__btn{
  text-decoration: none; color:#e8efff; border: 2px solid #ffffff;
  padding: 6px 10px; border-radius: 8px; font-weight: 700;
  transition: all .12s ease;
  background: transparent; white-space: nowrap;
}
.topbar__btn:hover{ background: rgba(255,255,255,.06); border-color:#fff; transform: translateY(-1px); }
@media (max-width: 560px){
  .topbar__inner{ padding: 8px 0 52px; }
  .topbar__text{ padding: 6px 10px; }
  .topbar__buttons{ right: 10px; left: 10px; top: auto; bottom: 6px; transform: none; justify-content: center; }
  .topbar__btn{ flex: 1; text-align:center; }
}

/* HERO */
.hero{
  margin:0;
  padding:20px 0 0;
  background: var(--hero-bg);
  text-align:center;
}
.hero-img{
  width:100%;
  max-width: var(--hero-max-w);
  height:auto;
  display:inline-block;
  margin:0 auto;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.08));
  transition: transform 0.3s ease;
}
.hero-img:hover{
  transform: scale(1.02);
}
.hero-subtitle {
  text-align:center;
  margin:12px 0 16px;
  font-size: clamp(18px, 2.8vw, 24px);
  font-weight:600;
  color:#067796;
  opacity: 0;
  animation: fadeInUp 0.6s ease 0.2s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Blue strip section */
.hero-strip{
  position: relative;
  background: linear-gradient(180deg, var(--strip) 0%, rgba(212, 232, 247, 0.7) 100%);
  border-top:4px solid var(--strip-border);
  box-shadow: 0 4px 16px rgba(28, 90, 163, 0.12);
}
.hero-strip > .container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 16px 20px 18px;
  gap: 8px;
}
.strip-title{
  font-size: clamp(18px, 2.6vw, 22px);
  font-weight: 800;
  color: var(--brand-teal);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.strip-subtitle{ text-align:center; font-size: clamp(14px, 2.2vw, 18px); font-weight: 600; color: #0f2732; line-height: 1.2; }
.strip-subtitle a{ color:#c1121f; text-decoration: underline; font-style: italic; font-weight: 700; }

/* LSI Calculator Button */
.lsi-calc-button {
  display: inline-block;
  padding: 14px 36px;
  font-size: clamp(15px, 2.2vw, 18px);
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border: none;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(30, 60, 114, 0.35), 0 2px 6px rgba(30, 60, 114, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.lsi-calc-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.lsi-calc-button:hover::before {
  left: 100%;
}

.lsi-calc-button:hover {
  background: linear-gradient(135deg, #2a5298 0%, #3a62b8 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 20px rgba(30, 60, 114, 0.45), 0 4px 10px rgba(30, 60, 114, 0.25);
}

.lsi-calc-button:active {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 4px 12px rgba(30, 60, 114, 0.35);
}

/* Phone Number in Strip */
.strip-phone {
  text-align: center;
  margin: 12px 0 8px;
}

.strip-phone-text {
  font-size: clamp(15px, 2.3vw, 19px);
  font-weight: 700;
  color: #c1121f;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.strip-phone-number {
  display: inline-block;
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 800;
  color: #c1121f;
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 2px 8px;
  border-radius: 4px;
}

.strip-phone-number:hover {
  background: rgba(193, 18, 31, 0.1);
  transform: scale(1.05);
}

/* Sections */
.section{ position:relative; padding: clamp(22px, 5vw, 56px) 0 }

/* Section video bg */
.section--video{ overflow:hidden }
.video-bg{ position:absolute; inset:0; z-index:0 }
.video-bg__media{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter: brightness(.95) saturate(1.05); }
.video-bg__scrim{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,.88) 60%, rgba(255,255,255,1)); }
.section--video > .container{ position:relative; z-index:1 }

/* Divider */
.section-divider{
  position: relative;
  width: 100%;
  height: 6px;
  margin: 0;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--brand-blue) 20%,
    var(--brand-blue) 80%,
    transparent 100%
  );
  box-shadow: 0 2px 8px rgba(11, 99, 200, 0.25);
  overflow: hidden;
}

.section-divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Fade-in */
.fade-on-view{
  opacity:0;
  transform:translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-on-view.is-visible{
  opacity:1;
  transform:translateY(0);
}

/* GRID */
.grid{
  display:grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  transition: opacity .25s ease;
}
@media(max-width:1050px){ .grid{ grid-template-columns: repeat(2, 1fr); gap: 20px; } }
@media(max-width:560px){ .grid{ grid-template-columns: 1fr; gap: 18px; } }
.grid--collapsed{ opacity:.04; pointer-events:none }

/* Modern Service Cards */
.service{
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 16px rgba(0,0,0,.08),
    0 2px 8px rgba(0,0,0,.04),
    0 1px 3px rgba(0,0,0,.02);
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
}

.service::before{
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(28, 90, 163, 0.04) 0%, rgba(19, 144, 158, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  pointer-events: none;
}

.service::after{
  content: 'View Details';
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  color: #1a2b3c;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  opacity: 0;
  transform: translateY(-8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  letter-spacing: 0.3px;
}

.service:hover::before{
  opacity: 1;
}

.service:hover::after{
  opacity: 1;
  transform: translateY(0);
}

.service:hover{
  transform: translateY(-10px);
  box-shadow:
    0 20px 40px rgba(0,0,0,.12),
    0 8px 20px rgba(0,0,0,.08),
    0 4px 10px rgba(0,0,0,.04);
}

.service:active{
  transform: translateY(-8px);
  transition: all 0.15s ease;
}

.service--hidden{
  opacity:0;
  pointer-events:none;
}

.service__thumb{
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
}

.service__thumb img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1) saturate(1.05);
}

.service:hover .service__thumb img{
  transform: scale(1.12);
  filter: brightness(1.05) saturate(1.1);
}

.service__title{
  position: relative;
  transition: all 0.3s ease;
  letter-spacing: -0.3px;
  line-height: 1.3;
}

.service:hover .service__arrow{
  transform: translateX(4px);
}

.service:hover .service__title{
  background: linear-gradient(to top, rgba(0,0,0,.5) 0%, rgba(0,0,0,.3) 100%);
}

/* Mobile optimizations for cards */
@media (max-width: 560px) {
  .service{
    border-radius: 14px;
  }

  .service::after{
    font-size: 12px;
    padding: 6px 12px;
    top: 12px;
    right: 12px;
  }

  .service__title{
    font-size: 18px !important;
  }

  .service__arrow{
    width: 20px;
    height: 20px;
  }
}

@media (hover: none) {
  /* On touch devices, show the "View Details" badge always */
  .service::after{
    opacity: 0.9;
    transform: translateY(0);
  }
}

/* ----------- FLIP Overlay ----------- */
.expanded-overlay{
  position: fixed;
  inset:0;
  display:grid;
  align-items:start;
  justify-items:center;
  padding: clamp(10px, 4vh, 24px) 12px;
  background: rgba(0,0,0,.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 50;
  pointer-events:none;
  animation: overlayFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes overlayFadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

.expanded{
  pointer-events: auto;
  width: min(1100px, 96vw);
  border:1px solid var(--expanded-border);
  border-radius:16px;
  box-shadow: 0 20px 60px rgba(0,0,0,.25), 0 8px 24px rgba(0,0,0,.15);
  overflow:hidden;
  position:relative;
  pointer-events:auto;
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.94);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Smooth content reveal */
.expanded__header,
.expanded__content {
  animation: contentFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s backwards;
}

@keyframes contentFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 560px){
  .expanded{
    width:100%;
    border-radius:12px;
    max-height: 90vh;
    overflow-y: auto;
  }
  .expanded__header{
    padding: 20px 20px 14px;
  }
  .expanded__content{
    padding: 20px;
    gap: 16px;
  }
}
.close{
  position: absolute;
  top: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.95);
  color: #1a2b3c;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font-weight: 300;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.close:hover{
  background: #ffffff;
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 3px 12px rgba(0, 0, 0, 0.18);
  color: #c1121f;
}

.close:active{
  transform: rotate(90deg) scale(1.05);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
}

@media (max-width: 560px){
  .close{
    width: 44px;
    height: 44px;
    font-size: 26px;
    line-height: 44px;
    top: 12px;
    right: 12px;
  }
}
.expanded__header{
  padding: 28px 28px 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 251, 252, 0.95) 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.expanded__header h3{
  margin:0;
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 800;
  color: #1a2b3c;
  letter-spacing: -0.5px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  line-height: 1.2;
}
.expanded__content{
  display:grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
  padding: 24px;
  background: #ffffff;
}
@media(max-width:900px){
  .expanded__content{
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
.slider{
  position:relative;
  overflow:hidden;
  border:none;
  border-radius:12px;
  background:#f8f9fb;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06);
}

/* Image counter badge */
.slider::after{
  content: attr(data-count);
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 5;
  pointer-events: none;
}
.slider__track{
  display:flex;
  margin:0;
  padding:0;
  list-style:none;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slider__slide{
  min-width:100%;
  aspect-ratio:16/9;
  background:#f1f5fb;
  position:relative;
}
.slider__slide img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}
@media (hover: hover) {
  .slider__slide:hover img{
    transform: scale(1.02);
  }
}
.nav{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  background:rgba(255, 255, 255, 0.95);
  color:#1a2b3c;
  border:none;
  width:48px;
  height:48px;
  border-radius:50%;
  cursor:pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0,0,0,.15), 0 2px 6px rgba(0,0,0,.1);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  z-index: 10;
}
.nav:hover{
  background:#ffffff;
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 6px 20px rgba(0,0,0,.25), 0 3px 10px rgba(0,0,0,.15);
  color: var(--brand-blue);
}
.nav:active{
  transform: translateY(-50%) scale(1.05);
}
.prev{ left:12px }
.next{ right:12px }

@media (max-width: 560px) {
  .nav{
    width: 44px;
    height: 44px;
    font-size: 18px;
  }
  .prev{ left:8px }
  .next{ right:8px }
}

.expanded__text{
  border:none;
  border-radius:12px;
  padding: 20px;
  max-height: 400px;
  overflow:auto;
  background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
  line-height: 1.7;
}
@media (max-width: 900px){
  .expanded__text{
    max-height: 300px;
  }
}
@media (max-width: 560px){
  .expanded__text{
    max-height: 280px;
    padding: 16px;
  }
}
.expanded__text p{
  margin:0 0 14px;
  line-height:1.7;
  color: #2d3748;
  font-size: clamp(14px, 2vw, 16px);
}
.expanded__text p:last-child{
  margin-bottom: 0;
}

/* Smooth scrollbar for modal text */
.expanded__text::-webkit-scrollbar{
  width: 8px;
}
.expanded__text::-webkit-scrollbar-track{
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
}
.expanded__text::-webkit-scrollbar-thumb{
  background: rgba(28, 90, 163, 0.3);
  border-radius: 8px;
  transition: background 0.2s ease;
}
.expanded__text::-webkit-scrollbar-thumb:hover{
  background: rgba(28, 90, 163, 0.5);
}

/* ------------------- CONTACT SECTION ------------------- */
.contact-section{
  background: linear-gradient(180deg, var(--strip) 0%, rgba(212, 232, 247, 0.6) 100%);
  border-top: 4px solid var(--strip-border);
  padding: clamp(36px, 6vw, 72px) 0;
  box-shadow: inset 0 4px 12px rgba(28, 90, 163, 0.08);
}
.contact-title{
  margin:0 0 14px;
  font-size: clamp(24px,3.2vw,34px);
  color:#0f2732;
  text-align:center;
  font-weight: 800;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Facebook Section */
.facebook-section{
  text-align: center;
  margin: 32px auto 40px;
  padding: 36px 28px;
  max-width: 680px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  border-radius: 20px;
  border: 3px solid rgba(24, 119, 242, 0.25);
  box-shadow: 0 8px 28px rgba(24, 119, 242, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.facebook-section:hover{
  transform: translateY(-2px);
  box-shadow: 0 12px 36px rgba(24, 119, 242, 0.18);
  border-color: rgba(24, 119, 242, 0.35);
}

.facebook-title{
  margin: 0 0 12px;
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  color: #1877f2;
  letter-spacing: -0.3px;
}

.facebook-description{
  margin: 0 0 24px;
  font-size: clamp(15px, 2.2vw, 17px);
  line-height: 1.6;
  color: #2f4750;
  font-weight: 500;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.facebook-button{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  font-size: clamp(16px, 2.3vw, 19px);
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #1877f2 0%, #0c62d6 100%);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(24, 119, 242, 0.35);
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
}

.facebook-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transition: left 0.6s ease;
}

.facebook-button:hover::before {
  left: 100%;
}

.facebook-button:hover{
  background: linear-gradient(135deg, #0c62d6 0%, #0a4fb8 100%);
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 32px rgba(24, 119, 242, 0.5);
}

.facebook-button:active{
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 6px 18px rgba(24, 119, 242, 0.4);
}

.facebook-icon{
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.contact-lines{ max-width: 720px; margin: 0 auto; text-align:center; padding: 0 8px; }
.contact-block{ margin: 10px auto 14px; }
.contact-label{ display:block; font-weight:700; color:#0f2732; margin-bottom:6px; font-size: clamp(18px, 2.6vw, 20px); }
.contact-value{ display:block; text-decoration:none; border-bottom: 1px dashed rgba(15,39,50,.25); color:#0f2732; font-weight:700; font-size: clamp(18px, 2.6vw, 22px); margin:0 auto; width:fit-content; }
.contact-value:hover{ border-bottom-color: rgba(15,39,50,.55) }
.contact-note{ margin-top:6px; color:#2f4750; font-size: clamp(14px, 2vw, 16px); }

/* -------- Additional Resources (CARD GRID) -------- */
.section--resources{
  position:relative;
  overflow:hidden;
  background: linear-gradient(180deg,
    rgba(212, 232, 247, 0.3) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(212, 232, 247, 0.3) 100%
  );
}
.section--resources > .container{ position:relative; z-index:1; }

/* Bubbles Animation */
.resources{
  position: relative;
}

.ambient-bubble{
  position: absolute;
  bottom: -60px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
  border-radius: 50%;
  pointer-events: none;
  animation: floatUp linear forwards;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5),
              0 2px 8px rgba(11, 99, 200, 0.2);
  z-index: 0;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-120vh) translateX(calc(var(--drift, 0) * 1px));
    opacity: 0;
  }
}

.ambient-bubble::before{
  content: '';
  position: absolute;
  top: 10%;
  left: 15%;
  width: 40%;
  height: 40%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8), transparent);
  border-radius: 50%;
  filter: blur(3px);
}

.cursor-bubble{
  position: absolute;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(200, 220, 240, 0.5));
  border-radius: 50%;
  pointer-events: none;
  animation: cursorBubbleFloat 1.5s ease-out forwards;
  box-shadow: 0 1px 4px rgba(11, 99, 200, 0.3);
  z-index: 0;
}

@keyframes cursorBubbleFloat {
  0% {
    transform: translate(0, 0) scale(0.5);
    opacity: 0.8;
  }
  100% {
    transform: translate(
      calc((var(--random-x, 0.5) - 0.5) * 40px),
      calc(-80px - var(--random-y, 0) * 40px)
    ) scale(1.2);
    opacity: 0;
  }
}

/* Add random drift to ambient bubbles */
.ambient-bubble:nth-child(3n) {
  --drift: -30;
}
.ambient-bubble:nth-child(3n+1) {
  --drift: 30;
}
.ambient-bubble:nth-child(3n+2) {
  --drift: 15;
}

/* Add random variables to cursor bubbles */
.cursor-bubble:nth-child(odd) {
  --random-x: 0.8;
  --random-y: 0.3;
}
.cursor-bubble:nth-child(even) {
  --random-x: 0.2;
  --random-y: 0.7;
}
.cursor-bubble:nth-child(4n) {
  --random-x: 0.5;
  --random-y: 0.5;
}

.resources-title{ text-align:center; color:#0f2732; font-size: clamp(20px, 2.8vw, 26px); margin: 0 0 18px; font-weight:800; position: relative; z-index: 2; }

/* Card grid */
.resources-cards{ display:grid; gap: clamp(16px, 2.2vw, 24px); grid-template-columns: repeat(3, 1fr); position: relative; z-index: 2; }
@media (max-width: 1050px){ .resources-cards{ grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px){ .resources-cards{ grid-template-columns: 1fr; } }

/* Card (fixed size; only cover animates) */
.rcard{
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: 0 12px 30px rgba(0,0,0,.18);
  background:#0f1118;
  color:#e6eef8;
  cursor:pointer;
  transition: transform .18s ease, box-shadow .18s ease;
  outline:none;
  height: clamp(260px, 38vw, 360px);
}
.rcard:hover{ transform: translateY(-3px); box-shadow: 0 16px 36px rgba(0,0,0,.22); }
.rcard:focus-visible{ box-shadow: 0 0 0 3px #7dd3fc, 0 12px 30px rgba(0,0,0,.22); }

/* Full image behind */
.rcard__media{ position:absolute; inset:0; z-index:0; overflow:hidden; }
.rcard__media img{ width:100%; height:100%; object-fit:cover; display:block; filter: contrast(1.05) saturate(1.08); }
.rcard__ph{ display:grid; place-items:center; height:100%; color:#9fb3c8; background:#1e2736; font-weight:700; }
.rcard__tint{ position:absolute; inset:0; opacity:.48; mix-blend-mode: screen; }

/* Sliding black cover */
.rcard__cover{
  position:absolute; left:0; right:0; bottom:0;
  height: var(--cover-closed);
  background: var(--cover-bg);
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 14px 18px 16px;
  z-index:1;
  transition: height .28s ease;
  will-change: height;
}
.rcard__cover::before{
  content:"";
  position:absolute; left:0; right:0;
  top:-44px;
  height:44px;
  background: var(--cover-bg);
  border-top: none;
  clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
  pointer-events: none;
}
.rcard:hover .rcard__cover,
.rcard--open .rcard__cover{ height: var(--cover-open); }

.rcard__title{
  margin: 2px 0 8px;
  font-size: clamp(18px, 2.4vw, 20px);
  font-weight: 800;
  letter-spacing: .2px;
  color:#fff;
  transition: transform .22s ease, color .22s ease;
  position:relative; z-index:1;
}
.rcard:hover .rcard__title,
.rcard--open .rcard__title{
  transform: translateY(-2px);
  color:#ffffff;
}

/* Text reveal inside the cover */
.rcard__text{
  margin:0;
  color: var(--text-soft);
  line-height:1.55;
  max-height:0;
  overflow:hidden;
  opacity:0;
  transition: max-height .28s ease, opacity .22s ease;
  flex: 1 1 auto;
  min-height:0;
  position:relative; z-index:1;
}
.rcard:hover .rcard__text,
.rcard--open .rcard__text{
  max-height: none;
  overflow: hidden;
  opacity:1;
  -webkit-overflow-scrolling: touch;
}
@media (max-width: 640px){
  :root{ --cover-open: 92%; }
  .rcard__cover{ padding: 12px 14px 14px; }
  .rcard__title{ margin: 2px 0 6px; }
}

/* CTA & Powered by */
.resources-cta{ margin-top: clamp(18px, 3vw, 26px); color:#0f2732; font-weight:700; text-align:center; font-size: clamp(16px, 2.4vw, 20px); position: relative; z-index: 2; }
.resources-cta-link{ color:#fff; text-decoration: underline; font-style: italic; font-weight:700; }
.resources-cta-sub{ color:#ffffff; }

/* Locations Section */
.locations-section{
  margin-top: clamp(32px, 5vw, 48px);
  text-align: center;
  padding: 28px 20px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  position: relative;
  z-index: 2;
}

.locations-title{
  margin: 0 0 24px;
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.3px;
}

.locations-buttons{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  max-width: 800px;
  margin: 0 auto;
}

.location-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 700;
  color: #1a2b3c;
  background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%);
  border: 2px solid rgba(28, 90, 163, 0.2);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 1.3;
}

.location-btn:hover{
  background: linear-gradient(135deg, #1c5aa3 0%, #0b63c8 100%);
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(28, 90, 163, 0.35);
  border-color: #1c5aa3;
}

.location-btn:active{
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(28, 90, 163, 0.3);
}

@media (max-width: 560px){
  .locations-buttons{
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .location-btn{
    padding: 12px 16px;
    font-size: 14px;
  }
}

.poweredby{ margin-top: 24px; text-align: center; position: relative; z-index: 2; }
.poweredby__text{ color:#0f2732; font-weight: 700; font-size: clamp(14px, 2.2vw, 16px); margin-bottom: 6px; }
.poweredby__chip{
  display:inline-flex; align-items:center; justify-content:center;
  padding: 10px 16px; border-radius: 12px; background: rgba(255,255,255,.10);
  backdrop-filter: blur(8px) saturate(1.15); -webkit-backdrop-filter: blur(8px) saturate(1.15);
  box-shadow: 0 8px 24px rgba(0,0,0,.18);
}
.poweredby__logo{ display:block; width: clamp(80px, 24vw, 160px); height:auto;
  filter: drop-shadow(0 1px 0 rgba(255,255,255,.95)) drop-shadow(0 6px 16px rgba(0,0,0,.22)); }

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  *, *::before, *::after{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
  .ambient-bubble, .cursor-bubble{ display: none !important; }
}

/* ================= WINTER PAGE STYLES & FLAIR ================= */
.winter-hero{
  position: relative;
  background: linear-gradient(180deg, #071a2e, #0a1040);
  color: #e9f3ff;
  padding: clamp(36px, 7vw, 80px) 0 clamp(22px, 5vw, 36px);
  border-bottom: 4px solid var(--brand-blue);
  overflow:hidden;
}
.winter-hero__bg{
  position:absolute; inset:0;
  background:
    radial-gradient(1200px 400px at 30% 0%, rgba(19,144,158,.30), transparent 60%),
    radial-gradient(900px 360px at 75% 20%, rgba(11,99,200,.30), transparent 60%);
  opacity:.9; pointer-events:none;
  animation: bg-pan 24s ease-in-out infinite alternate;
}
.winter-hero__bg::before,
.winter-hero__bg::after{
  content:"";
  position:absolute; width:480px; height:480px; border-radius:50%;
  filter: blur(50px);
  background: radial-gradient(closest-side, rgba(19,144,158,.28), transparent 70%);
  top: -120px; left: -120px; pointer-events:none;
  animation: orb-float 26s ease-in-out infinite;
}
.winter-hero__bg::after{
  width:420px; height:420px; top: auto; bottom: -160px; left: auto; right: -120px;
  background: radial-gradient(closest-side, rgba(11,99,200,.28), transparent 70%);
  animation-duration: 30s;
}
@keyframes bg-pan {
  0% { background-position: 0% 0%, 100% 0%; }
  100% { background-position: 20% 10%, 80% 20%; }
}
@keyframes orb-float {
  0%,100% { transform: translateY(0) translateX(0) scale(1); }
  50% { transform: translateY(-15px) translateX(10px) scale(1.03); }
}

.winter-hero__inner{ position:relative; z-index:1; }
.winter-hero__title{
  margin:0 0 8px; font-size: clamp(26px, 4.2vw, 44px); font-weight:800; letter-spacing:.2px;
  text-shadow: 0 6px 20px rgba(0,0,0,.25);
}
.winter-hero__dek{
  margin: 0; max-width: 880px; font-size: clamp(16px, 2.2vw, 20px); line-height:1.4; color:#cfe5ff;
}

/* Lead visual */
.winter-lead{ padding: clamp(16px, 3vw, 28px) 0; }
.winter-lead__figure{ margin:0; border-radius:14px; overflow:hidden; border:1px solid rgba(0,0,0,.08); box-shadow: 0 14px 34px rgba(0,0,0,.16); }
.winter-lead__img{
  position:relative; width:100%; height: 220px; overflow:hidden;
  background: linear-gradient(135deg, #0a1040, #0b63c8 60%, #13909e);
}
.winter-lead__photo{
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  filter: blur(2.5px) saturate(1.05) brightness(.98);
  transform: scale(1.03);
}
.winter-lead__scrim{
  position:absolute; inset:0;
  background: linear-gradient(0deg, rgba(0,0,0,.18), rgba(0,0,0,.06));
  pointer-events:none;
}
.winter-lead__cap{ margin:0; padding:12px 14px; font-size:14px; color:#2a3e4f; background:#f7fbff; border-top:1px solid rgba(0,0,0,.06); }

/* Search hero */
.winter-search{ text-align:center; padding: clamp(10px, 3.2vw, 20px) 0 clamp(24px, 4vw, 36px); }
.winter-search__headline{
  margin: 6px 0 2px; font-weight: 800; letter-spacing: .3px;
  font-size: clamp(22px, 4vw, 40px); color:#0a2b4c;
}
.winter-search__sub{
  margin: 0 0 14px; color:#4d6a7d; font-size: clamp(14px, 2vw, 18px);
}
.winter-search__form{ max-width: 860px; margin: 0 auto; }
.winter-search__field{
  display:flex; gap:10px; align-items:center; background:#ffffff;
  border:1px solid rgba(0,0,0,.10); border-radius: 999px; padding: 8px 8px 8px 14px;
  box-shadow: 0 8px 26px rgba(0,0,0,.08);
}
.winter-search__field input{
  flex:1; border:none; outline:none; font: inherit; font-size: clamp(14px, 2vw, 18px);
  padding: 10px 8px; color:#0f2732; background:transparent;
}
.winter-search__field button{
  border:none; outline:none; cursor:pointer; font-weight:800; letter-spacing:.2px;
  padding: 10px 16px; border-radius: 999px; background: linear-gradient(135deg, #0b63c8, #13909e);
  color:#fff; box-shadow: 0 8px 22px rgba(11,99,200,.28); transition: transform .15s ease, box-shadow .15s ease;
}
.winter-search__field button:hover{ transform: translateY(-1px); box-shadow: 0 12px 28px rgba(11,99,200,.34); }

.winter-search__chips{
  display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-top:12px; user-select:none;
}
.winter-search__chips span{
  font-size: 13px; color:#0a2b4c; background:#eaf6ff; border:1px solid #cfe9ff;
  padding:6px 10px; border-radius:999px; cursor:pointer; transition: transform .12s ease, background .12s ease;
}
.winter-search__chips span:hover{ transform: translateY(-1px); background:#e2f2ff; }

/* Footer */
.winter-footer{
  background:#0a1040; color:#d8e6f3; border-top:4px solid var(--brand-blue);
  margin-top: clamp(22px, 4vw, 40px); padding: 18px 0;
}
.winter-footer__txt{ margin:0; text-align:center; font-weight:700; }

/* Animations used in hero bg */
@keyframes metric-pop {
  from { transform: translateY(6px); opacity: .0; }
  to   { transform: translateY(0); opacity: 1; }
}
`;console.log("Booting React…");const Qa=document.getElementById("root");Qa?Yl.createRoot(Qa).render(p.jsx(Nc.StrictMode,{children:p.jsx(jp,{})})):console.error("No #root element found in index.html");
