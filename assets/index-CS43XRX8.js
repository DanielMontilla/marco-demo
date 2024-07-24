var nf=Object.defineProperty;var rf=(s,e,t)=>e in s?nf(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ca=(s,e,t)=>rf(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function fn(){}function jc(s){return s()}function vl(){return Object.create(null)}function sr(s){s.forEach(jc)}function Kc(s){return typeof s=="function"}function ko(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}function sf(s){return Object.keys(s).length===0}function Zc(s,...e){if(s==null){for(const n of e)n(void 0);return fn}const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Zr(s,e,t){s.$$.on_destroy.push(Zc(e,t))}function vr(s,e,t){return s.set(t),e}function Re(s,e){s.appendChild(e)}function zo(s,e,t){s.insertBefore(e,t||null)}function Ws(s){s.parentNode&&s.parentNode.removeChild(s)}function af(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function qe(s){return document.createElement(s)}function _l(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function jt(s){return document.createTextNode(s)}function ot(){return jt(" ")}function of(){return jt("")}function Ct(s,e,t,n){return s.addEventListener(e,t,n),()=>s.removeEventListener(e,t,n)}function Fe(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function si(s){return s===""?null:+s}function lf(s){return Array.from(s.childNodes)}function Hn(s,e){e=""+e,s.data!==e&&(s.data=e)}function It(s,e){s.value=e??""}function xl(s,e,t){for(let n=0;n<s.options.length;n+=1){const i=s.options[n];if(i.__value===e){i.selected=!0;return}}(!t||e!==void 0)&&(s.selectedIndex=-1)}function cf(s){const e=s.querySelector(":checked");return e&&e.__value}let Dr;function br(s){Dr=s}function uf(){if(!Dr)throw new Error("Function called outside component initialization");return Dr}function ff(s){uf().$$.on_mount.push(s)}const Wi=[],Xa=[];let Ki=[];const Sl=[],hf=Promise.resolve();let Ya=!1;function df(){Ya||(Ya=!0,hf.then(Jc))}function Os(s){Ki.push(s)}const ua=new Set;let Mi=0;function Jc(){if(Mi!==0)return;const s=Dr;do{try{for(;Mi<Wi.length;){const e=Wi[Mi];Mi++,br(e),pf(e.$$)}}catch(e){throw Wi.length=0,Mi=0,e}for(br(null),Wi.length=0,Mi=0;Xa.length;)Xa.pop()();for(let e=0;e<Ki.length;e+=1){const t=Ki[e];ua.has(t)||(ua.add(t),t())}Ki.length=0}while(Wi.length);for(;Sl.length;)Sl.pop()();Ya=!1,ua.clear(),br(s)}function pf(s){if(s.fragment!==null){s.update(),sr(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(Os)}}function mf(s){const e=[],t=[];Ki.forEach(n=>s.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ki=e}const ws=new Set;let ci;function gf(){ci={r:0,c:[],p:ci}}function vf(){ci.r||sr(ci.c),ci=ci.p}function Tr(s,e){s&&s.i&&(ws.delete(s),s.i(e))}function qa(s,e,t,n){if(s&&s.o){if(ws.has(s))return;ws.add(s),ci.c.push(()=>{ws.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}else n&&n()}function yl(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function _f(s){s&&s.c()}function Qc(s,e,t){const{fragment:n,after_update:i}=s.$$;n&&n.m(e,t),Os(()=>{const r=s.$$.on_mount.map(jc).filter(Kc);s.$$.on_destroy?s.$$.on_destroy.push(...r):sr(r),s.$$.on_mount=[]}),i.forEach(Os)}function $c(s,e){const t=s.$$;t.fragment!==null&&(mf(t.after_update),sr(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function xf(s,e){s.$$.dirty[0]===-1&&(Wi.push(s),df(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function eu(s,e,t,n,i,r,a=null,o=[-1]){const l=Dr;br(s);const c=s.$$={fragment:null,ctx:[],props:r,update:fn,not_equal:i,bound:vl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:vl(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(s,e.props||{},(f,h,...d)=>{const g=d.length?d[0]:h;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&xf(s,f)),h}):[],c.update(),u=!0,sr(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=lf(e.target);c.fragment&&c.fragment.l(f),f.forEach(Ws)}else c.fragment&&c.fragment.c();e.intro&&Tr(s.$$.fragment),Qc(s,e.target,e.anchor),Jc()}br(l)}class tu{constructor(){ca(this,"$$");ca(this,"$$set")}$destroy(){$c(this,1),this.$destroy=fn}$on(e,t){if(!Kc(t))return fn;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!sf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Sf="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Sf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="166",Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yf=0,Ml=1,Mf=2,nu=1,Ef=2,wn=3,Pn=0,Nt=1,cn=2,Xn=0,Zi=1,El=2,bl=3,Tl=4,bf=5,oi=100,Tf=101,Af=102,wf=103,Cf=104,Rf=200,Pf=201,Uf=202,Lf=203,ja=204,Ka=205,Df=206,If=207,Nf=208,Ff=209,Of=210,Bf=211,kf=212,zf=213,Gf=214,Hf=0,Vf=1,Wf=2,Bs=3,Xf=4,Yf=5,qf=6,jf=7,iu=0,Kf=1,Zf=2,Yn=0,Jf=1,Qf=2,$f=3,eh=4,th=5,nh=6,ih=7,ru=300,er=301,tr=302,Za=303,Ja=304,Xs=306,Qa=1e3,ui=1001,$a=1002,nn=1003,rh=1004,Jr=1005,Kt=1006,fa=1007,fi=1008,Un=1009,su=1010,au=1011,Ir=1012,Ho=1013,di=1014,Cn=1015,Gr=1016,Vo=1017,Wo=1018,nr=1020,ou=35902,lu=1021,cu=1022,un=1023,uu=1024,fu=1025,Ji=1026,ir=1027,hu=1028,Xo=1029,du=1030,Yo=1031,qo=1033,Cs=33776,Rs=33777,Ps=33778,Us=33779,eo=35840,to=35841,no=35842,io=35843,ro=36196,so=37492,ao=37496,oo=37808,lo=37809,co=37810,uo=37811,fo=37812,ho=37813,po=37814,mo=37815,go=37816,vo=37817,_o=37818,xo=37819,So=37820,yo=37821,Ls=36492,Mo=36494,Eo=36495,pu=36283,bo=36284,To=36285,Ao=36286,sh=3200,mu=3201,ah=0,oh=1,Wn="",pn="srgb",qn="srgb-linear",jo="display-p3",Ys="display-p3-linear",ks="linear",dt="srgb",zs="rec709",Gs="p3",Ti=7680,Al=519,lh=512,ch=513,uh=514,gu=515,fh=516,hh=517,dh=518,ph=519,wl=35044,Cl="300 es",Rn=2e3,Hs=2001;class vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rl=1234567;const Ar=Math.PI/180,Nr=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function Ko(s,e){return(s%e+e)%e}function mh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function gh(s,e,t){return s!==e?(t-s)/(e-s):0}function wr(s,e,t){return(1-t)*s+t*e}function vh(s,e,t,n){return wr(s,e,1-Math.exp(-t*n))}function _h(s,e=1){return e-Math.abs(Ko(s,e*2)-e)}function xh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Sh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function yh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Mh(s,e){return s+Math.random()*(e-s)}function Eh(s){return s*(.5-Math.random())}function bh(s){s!==void 0&&(Rl=s);let e=Rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Th(s){return s*Ar}function Ah(s){return s*Nr}function wh(s){return(s&s-1)===0&&s!==0}function Ch(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ph(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*f,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*f,o*c);break;case"ZXZ":s.set(l*f,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Uh={DEG2RAD:Ar,RAD2DEG:Nr,generateUUID:_i,clamp:wt,euclideanModulo:Ko,mapLinear:mh,inverseLerp:gh,lerp:wr,damp:vh,pingpong:_h,smoothstep:xh,smootherstep:Sh,randInt:yh,randFloat:Mh,randFloatSpread:Eh,seededRandom:bh,degToRad:Th,radToDeg:Ah,isPowerOfTwo:wh,ceilPowerOfTwo:Ch,floorPowerOfTwo:Rh,setQuaternionFromProperEuler:Ph,normalize:Bt,denormalize:Xi};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,n,i,r,a,o,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=i[0],p=i[3],m=i[6],T=i[1],y=i[4],M=i[7],D=i[2],C=i[5],w=i[8];return r[0]=a*v+o*T+l*D,r[3]=a*p+o*y+l*C,r[6]=a*m+o*M+l*w,r[1]=c*v+u*T+f*D,r[4]=c*p+u*y+f*C,r[7]=c*m+u*M+f*w,r[2]=h*v+d*T+g*D,r[5]=h*p+d*y+g*C,r[8]=h*m+d*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=h*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new nt;function vu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lh(){const s=Fr("canvas");return s.style.display="block",s}const Pl={};function _u(s){s in Pl||(Pl[s]=!0,console.warn(s))}function Dh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ul=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qr={[qn]:{transfer:ks,primaries:zs,toReference:s=>s,fromReference:s=>s},[pn]:{transfer:dt,primaries:zs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ys]:{transfer:ks,primaries:Gs,toReference:s=>s.applyMatrix3(Ll),fromReference:s=>s.applyMatrix3(Ul)},[jo]:{transfer:dt,primaries:Gs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ll),fromReference:s=>s.applyMatrix3(Ul).convertLinearToSRGB()}},Ih=new Set([qn,Ys]),lt={enabled:!0,_workingColorSpace:qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ih.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Qr[e].toReference,i=Qr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Qr[s].primaries},getTransfer:function(s){return s===Wn?ks:Qr[s].transfer}};function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function da(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ai;class Nh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Fr("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fh=0;class xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(pa(i[a].image)):r.push(pa(i[a]))}else r=pa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;class Ft extends vi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=ui,i=ui,r=Kt,a=fi,o=un,l=Un,c=Ft.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=_i(),this.name="",this.source=new xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qa:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qa:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=ru;Ft.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(d+1)/2,D=(m+1)/2,C=(u+h)/4,w=(f+v)/4,b=(g+p)/4;return y>M&&y>D?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=C/n,r=w/n):M>D?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=C/i,r=b/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=w/r,i=b/r),this.set(n,i,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bh extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Bh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Su extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kh extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let p=1-o;const m=l*h+c*d+u*g+f*v,T=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const D=Math.sqrt(y),C=Math.atan2(D,m*T);p=Math.sin(p*C)/D,o=Math.sin(o*C)/D}const M=o*T;if(l=l*p+h*M,c=c*p+d*M,u=u*p+g*M,f=f*p+v*M,p===1-o){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),h=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=i+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new Q,Dl=new mi;class ar{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),es.subVectors(this.max,_r),wi.subVectors(e.a,_r),Ci.subVectors(e.b,_r),Ri.subVectors(e.c,_r),Fn.subVectors(Ci,wi),On.subVectors(Ri,Ci),Qn.subVectors(wi,Ri);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!ga(t,wi,Ci,Ri,es)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,wi,Ci,Ri,es))?!1:(ts.crossVectors(Fn,On),t=[ts.x,ts.y,ts.z],ga(t,wi,Ci,Ri,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],an=new Q,$r=new ar,wi=new Q,Ci=new Q,Ri=new Q,Fn=new Q,On=new Q,Qn=new Q,_r=new Q,es=new Q,ts=new Q,$n=new Q;function ga(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){$n.fromArray(s,r);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zh=new ar,xr=new Q,va=new Q;class qs{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(va)),this.expandByPoint(xr.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new Q,_a=new Q,ns=new Q,Bn=new Q,xa=new Q,is=new Q,Sa=new Q;class yu{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_a.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(_a);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=Bn.dot(this.direction),l=-Bn.dot(ns),c=Bn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(_a).addScaledVector(ns,h),d}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,r){xa.subVectors(t,e),is.subVectors(n,e),Sa.crossVectors(xa,is);let a=this.direction.dot(Sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors(Bn,is));if(l<0)return null;const c=o*this.direction.dot(xa.cross(Bn));if(c<0||l+c>a)return null;const u=-o*Bn.dot(Sa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,i,r,a,o,l,c,u,f,h,d,g,v,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,f,h,d,g,v,p)}set(e,t,n,i,r,a,o,l,c,u,f,h,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gh,e,Hh)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),kn.crossVectors(n,Yt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),kn.crossVectors(n,Yt)),kn.normalize(),rs.crossVectors(Yt,kn),i[0]=kn.x,i[4]=rs.x,i[8]=Yt.x,i[1]=kn.y,i[5]=rs.y,i[9]=Yt.y,i[2]=kn.z,i[6]=rs.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],T=n[3],y=n[7],M=n[11],D=n[15],C=i[0],w=i[4],b=i[8],S=i[12],_=i[1],U=i[5],L=i[9],N=i[13],O=i[2],z=i[6],k=i[10],X=i[14],Y=i[3],q=i[7],j=i[11],I=i[15];return r[0]=a*C+o*_+l*O+c*Y,r[4]=a*w+o*U+l*z+c*q,r[8]=a*b+o*L+l*k+c*j,r[12]=a*S+o*N+l*X+c*I,r[1]=u*C+f*_+h*O+d*Y,r[5]=u*w+f*U+h*z+d*q,r[9]=u*b+f*L+h*k+d*j,r[13]=u*S+f*N+h*X+d*I,r[2]=g*C+v*_+p*O+m*Y,r[6]=g*w+v*U+p*z+m*q,r[10]=g*b+v*L+p*k+m*j,r[14]=g*S+v*N+p*X+m*I,r[3]=T*C+y*_+M*O+D*Y,r[7]=T*w+y*U+M*z+D*q,r[11]=T*b+y*L+M*k+D*j,r[15]=T*S+y*N+M*X+D*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+r*l*f-i*c*f-r*o*h+n*c*h+i*o*d-n*l*d)+v*(+t*l*d-t*c*h+r*a*h-i*a*d+i*c*u-r*l*u)+p*(+t*c*f-t*o*d-r*a*f+n*a*d+r*o*u-n*c*u)+m*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],T=f*p*c-v*h*c+v*l*d-o*p*d-f*l*m+o*h*m,y=g*h*c-u*p*c-g*l*d+a*p*d+u*l*m-a*h*m,M=u*v*c-g*f*c+g*o*d-a*v*d-u*o*m+a*f*m,D=g*f*l-u*v*l-g*o*h+a*v*h+u*o*p-a*f*p,C=t*T+n*y+i*M+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=T*w,e[1]=(v*h*r-f*p*r-v*i*d+n*p*d+f*i*m-n*h*m)*w,e[2]=(o*p*r-v*l*r+v*i*c-n*p*c-o*i*m+n*l*m)*w,e[3]=(f*l*r-o*h*r-f*i*c+n*h*c+o*i*d-n*l*d)*w,e[4]=y*w,e[5]=(u*p*r-g*h*r+g*i*d-t*p*d-u*i*m+t*h*m)*w,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*m-t*l*m)*w,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*d+t*l*d)*w,e[8]=M*w,e[9]=(g*f*r-u*v*r-g*n*d+t*v*d+u*n*m-t*f*m)*w,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*m+t*o*m)*w,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*d-t*o*d)*w,e[12]=D*w,e[13]=(u*v*i-g*f*i+g*n*h-t*v*h-u*n*p+t*f*p)*w,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*p-t*o*p)*w,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,v=a*u,p=a*f,m=o*f,T=l*c,y=l*u,M=l*f,D=n.x,C=n.y,w=n.z;return i[0]=(1-(v+m))*D,i[1]=(d+M)*D,i[2]=(g-y)*D,i[3]=0,i[4]=(d-M)*C,i[5]=(1-(h+m))*C,i[6]=(p+T)*C,i[7]=0,i[8]=(g+y)*w,i[9]=(p-T)*w,i[10]=(1-(h+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),o=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/r,u=1/a,f=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Rn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(o===Rn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hs)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Rn){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(a-r),h=(t+e)*c,d=(n+i)*u;let g,v;if(o===Rn)g=(a+r)*f,v=-2*f;else if(o===Hs)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new Q,on=new _t,Gh=new Q(0,0,0),Hh=new Q(1,1,1),kn=new Q,rs=new Q,Yt=new Q,Il=new _t,Nl=new mi;class Ln{constructor(e=0,t=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vh=0;const Fl=new Q,Ui=new mi,En=new _t,ss=new Q,Sr=new Q,Wh=new Q,Xh=new mi,Ol=new Q(1,0,0),Bl=new Q(0,1,0),kl=new Q(0,0,1),zl={type:"added"},Yh={type:"removed"},Li={type:"childadded",child:null},ya={type:"childremoved",child:null};class Jt extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new Q,t=new Ln,n=new mi,i=new Q(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new nt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Ol,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(kl,e)}translateOnAxis(e,t){return Fl.copy(e).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ol,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Sr,ss,this.up):En.lookAt(ss,Sr,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(En),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yh),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,Wh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jt.DEFAULT_UP=new Q(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new Q,bn=new Q,Ma=new Q,Tn=new Q,Di=new Q,Ii=new Q,Gl=new Q,Ea=new Q,ba=new Q,Ta=new Q;class gn{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),bn.subVectors(n,t),Ma.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(bn),l=ln.dot(Ma),c=bn.dot(bn),u=bn.dot(Ma),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),bn.subVectors(e,t),ln.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),ln.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Di.subVectors(i,n),Ii.subVectors(r,n),Ea.subVectors(e,n);const l=Di.dot(Ea),c=Ii.dot(Ea);if(l<=0&&c<=0)return t.copy(n);ba.subVectors(e,i);const u=Di.dot(ba),f=Ii.dot(ba);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Di,a);Ta.subVectors(e,r);const d=Di.dot(Ta),g=Ii.dot(Ta);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ii,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Gl.subVectors(r,i),o=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(Gl,o);const m=1/(p+v+h);return a=v*m,o=h*m,t.copy(n).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},as={h:0,s:0,l:0};function Aa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Ko(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Aa(a,r,e+1/3),this.g=Aa(a,r,e),this.b=Aa(a,r,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,t=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=Eu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return lt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(wt(Dt.r*255,0,255))*65536+Math.round(wt(Dt.g*255,0,255))*256+Math.round(wt(Dt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,r=Dt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=pn){lt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(as);const n=wr(zn.h,as.h,t),i=wr(zn.s,as.s,t),r=wr(zn.l,as.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new st;st.NAMES=Eu;let qh=0;class js extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Zi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ka,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Or extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new Q,os=new Ie;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _u("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}}class bu extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tu extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jh=0;const en=new _t,wa=new Jt,Ni=new Q,qt=new ar,yr=new ar,At=new Q;class _n extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?Tu:bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(qt.min,yr.min),qt.expandByPoint(At),At.addVectors(qt.max,yr.max),qt.expandByPoint(At)):(qt.expandByPoint(yr.min),qt.expandByPoint(yr.max))}qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),At.add(Ni)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<n.count;b++)o[b]=new Q,l[b]=new Q;const c=new Q,u=new Q,f=new Q,h=new Ie,d=new Ie,g=new Ie,v=new Q,p=new Q;function m(b,S,_){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,_),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,_),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const U=1/(d.x*g.y-g.x*d.y);isFinite(U)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(U),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(U),o[b].add(v),o[S].add(v),o[_].add(v),l[b].add(p),l[S].add(p),l[_].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let b=0,S=T.length;b<S;++b){const _=T[b],U=_.start,L=_.count;for(let N=U,O=U+L;N<O;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new Q,M=new Q,D=new Q,C=new Q;function w(b){D.fromBufferAttribute(i,b),C.copy(D);const S=o[b];y.copy(S),y.sub(D.multiplyScalar(D.dot(S))).normalize(),M.crossVectors(C,S);const U=M.dot(l[b])<0?-1:1;a.setXYZW(b,y.x,y.y,y.z,U)}for(let b=0,S=T.length;b<S;++b){const _=T[b],U=_.start,L=_.count;for(let N=U,O=U+L;N<O;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new Q,r=new Q,a=new Q,o=new Q,l=new Q,c=new Q,u=new Q,f=new Q;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new _t,ei=new yu,ls=new qs,Vl=new Q,Fi=new Q,Oi=new Q,Bi=new Q,Ca=new Q,cs=new Q,us=new Ie,fs=new Ie,hs=new Ie,Wl=new Q,Xl=new Q,Yl=new Q,ds=new Q,ps=new Q;class Zt extends Jt{constructor(e=new _n,t=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Ca.fromBufferAttribute(f,e),a?cs.addScaledVector(Ca,u):cs.addScaledVector(Ca.sub(t),u))}t.add(cs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),ei.copy(e.ray).recast(e.near),!(ls.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ls,Vl)===null||ei.origin.distanceToSquared(Vl)>(e.far-e.near)**2))&&(Hl.copy(r).invert(),ei.copy(e.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),y=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let M=T,D=y;M<D;M+=3){const C=o.getX(M),w=o.getX(M+1),b=o.getX(M+2);i=ms(this,m,e,n,c,u,f,C,w,b),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const T=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);i=ms(this,a,e,n,c,u,f,T,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=T,D=y;M<D;M+=3){const C=M,w=M+1,b=M+2;i=ms(this,m,e,n,c,u,f,C,w,b),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const T=p,y=p+1,M=p+2;i=ms(this,a,e,n,c,u,f,T,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Kh(s,e,t,n,i,r,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Pn,o),l===null)return null;ps.copy(o),ps.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ps);return c<t.near||c>t.far?null:{distance:c,point:ps.clone(),object:s}}function ms(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Fi),s.getVertexPosition(l,Oi),s.getVertexPosition(c,Bi);const u=Kh(s,e,t,n,Fi,Oi,Bi,ds);if(u){i&&(us.fromBufferAttribute(i,o),fs.fromBufferAttribute(i,l),hs.fromBufferAttribute(i,c),u.uv=gn.getInterpolation(ds,Fi,Oi,Bi,us,fs,hs,new Ie)),r&&(us.fromBufferAttribute(r,o),fs.fromBufferAttribute(r,l),hs.fromBufferAttribute(r,c),u.uv1=gn.getInterpolation(ds,Fi,Oi,Bi,us,fs,hs,new Ie)),a&&(Wl.fromBufferAttribute(a,o),Xl.fromBufferAttribute(a,l),Yl.fromBufferAttribute(a,c),u.normal=gn.getInterpolation(ds,Fi,Oi,Bi,Wl,Xl,Yl,new Q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Q,materialIndex:0};gn.getNormal(Fi,Oi,Bi,f.normal),u.face=f}return u}class Hr extends _n{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(f,2));function g(v,p,m,T,y,M,D,C,w,b,S){const _=M/w,U=D/b,L=M/2,N=D/2,O=C/2,z=w+1,k=b+1;let X=0,Y=0;const q=new Q;for(let j=0;j<k;j++){const I=j*U-N;for(let V=0;V<z;V++){const se=V*_-L;q[v]=se*T,q[p]=I*y,q[m]=O,c.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[m]=C>0?1:-1,u.push(q.x,q.y,q.z),f.push(V/w),f.push(1-j/b),X+=1}}for(let j=0;j<b;j++)for(let I=0;I<w;I++){const V=h+I+z*j,se=h+I+z*(j+1),F=h+(I+1)+z*(j+1),B=h+(I+1)+z*j;l.push(V,se,B),l.push(se,F,B),Y+=6}o.addGroup(d,Y,S),d+=Y,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function rr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(s){const e={};for(let t=0;t<s.length;t++){const n=rr(s[t]);for(const i in n)e[i]=n[i]}return e}function Zh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Au(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Zo={clone:rr,merge:kt};var Jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wu extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new Q,ql=new Ie,jl=new Ie;class tn extends wu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,ql,jl),t.subVectors(jl,ql)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,zi=1;class $h extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(ki,zi,e,t);i.layers=this.layers,this.add(i);const r=new tn(ki,zi,e,t);r.layers=this.layers,this.add(r);const a=new tn(ki,zi,e,t);a.layers=this.layers,this.add(a);const o=new tn(ki,zi,e,t);o.layers=this.layers,this.add(o);const l=new tn(ki,zi,e,t);l.layers=this.layers,this.add(l);const c=new tn(ki,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cu extends Ft{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ed extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Cu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hr(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Xn});r.uniforms.tEquirect.value=t;const a=new Zt(i,r),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=Kt),new $h(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ra=new Q,td=new Q,nd=new nt;class Vn{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ra.subVectors(n,t).cross(td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ra),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nd.getNormalMatrix(e),i=this.coplanarPoint(Ra).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new qs,gs=new Q;class Ru{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],v=i[10],p=i[11],m=i[12],T=i[13],y=i[14],M=i[15];if(n[0].setComponents(l-r,h-c,p-d,M-m).normalize(),n[1].setComponents(l+r,h+c,p+d,M+m).normalize(),n[2].setComponents(l+a,h+u,p+g,M+T).normalize(),n[3].setComponents(l-a,h-u,p-g,M-T).normalize(),n[4].setComponents(l-o,h-f,p-v,M-y).normalize(),t===Rn)n[5].setComponents(l+o,h+f,p+v,M+y).normalize();else if(t===Hs)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(gs.x=i.normal.x>0?e.max.x:e.min.x,gs.y=i.normal.y>0?e.max.y:e.min.y,gs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function id(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(s.bindBuffer(c,o),f.count===-1&&h.length===0&&s.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const v=h[d];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}f.count!==-1&&(s.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class xi extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const T=m*h-a;for(let y=0;y<c;y++){const M=y*f-r;g.push(M,-T,0),v.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){const y=T+c*m,M=T+c*(m+1),D=T+1+c*(m+1),C=T+1+c*m;d.push(y,M,C),d.push(M,D,C)}this.setIndex(d),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:rd,alphahash_pars_fragment:sd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:ud,aomap_pars_fragment:fd,batching_pars_vertex:hd,batching_vertex:dd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:vd,bumpmap_pars_fragment:_d,clipping_planes_fragment:xd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Md,color_fragment:Ed,color_pars_fragment:bd,color_pars_vertex:Td,color_vertex:Ad,common:wd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Ud,emissivemap_fragment:Ld,emissivemap_pars_fragment:Dd,colorspace_fragment:Id,colorspace_pars_fragment:Nd,envmap_fragment:Fd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Bd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Zd,envmap_vertex:zd,fog_vertex:Gd,fog_pars_vertex:Hd,fog_fragment:Vd,fog_pars_fragment:Wd,gradientmap_pars_fragment:Xd,lightmap_pars_fragment:Yd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:jd,lights_pars_begin:Kd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:$d,lights_phong_pars_fragment:ep,lights_physical_fragment:tp,lights_physical_pars_fragment:np,lights_fragment_begin:ip,lights_fragment_maps:rp,lights_fragment_end:sp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:up,map_pars_fragment:fp,map_particle_fragment:hp,map_particle_pars_fragment:dp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:vp,morphnormal_vertex:_p,morphtarget_pars_vertex:xp,morphtarget_vertex:Sp,normal_fragment_begin:yp,normal_fragment_maps:Mp,normal_pars_fragment:Ep,normal_pars_vertex:bp,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Pp,opaque_fragment:Up,packing:Lp,premultiplied_alpha_fragment:Dp,project_vertex:Ip,dithering_fragment:Np,dithering_pars_fragment:Fp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Hp,skinbase_vertex:Vp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:Yp,specularmap_fragment:qp,specularmap_pars_fragment:jp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:$p,uv_pars_vertex:em,uv_vertex:tm,worldpos_vertex:nm,background_vert:im,background_frag:rm,backgroundCube_vert:sm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:um,distanceRGBA_vert:fm,distanceRGBA_frag:hm,equirect_vert:dm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:vm,meshbasic_frag:_m,meshlambert_vert:xm,meshlambert_frag:Sm,meshmatcap_vert:ym,meshmatcap_frag:Mm,meshnormal_vert:Em,meshnormal_frag:bm,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:wm,meshphysical_frag:Cm,meshtoon_vert:Rm,meshtoon_frag:Pm,points_vert:Um,points_frag:Lm,shadow_vert:Dm,shadow_frag:Im,sprite_vert:Nm,sprite_frag:Fm},ke={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},mn={basic:{uniforms:kt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:kt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:kt([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:kt([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:kt([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new st(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:kt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:kt([ke.points,ke.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:kt([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:kt([ke.common,ke.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:kt([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:kt([ke.sprite,ke.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:kt([ke.common,ke.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:kt([ke.lights,ke.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};mn.physical={uniforms:kt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const vs={r:0,b:0,g:0},ni=new Ln,Om=new _t;function Bm(s,e,t,n,i,r,a){const o=new st(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function v(T){let y=!1;const M=g(T);M===null?m(o,l):M&&M.isColor&&(m(M,1),y=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(T,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===Xs)?(u===void 0&&(u=new Zt(new Hr(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:rr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ni.copy(y.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Om.makeRotationFromEuler(ni)),u.material.toneMapped=lt.getTransfer(M.colorSpace)!==dt,(f!==M||h!==M.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Zt(new xi(2,2),new Dn({name:"BackgroundMaterial",uniforms:rr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=lt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,y){T.getRGB(vs,Au(s)),n.buffers.color.setClear(vs.r,vs.g,vs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(o,l)},render:v,addToRenderList:p}}function km(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,a=!1;function o(_,U,L,N,O){let z=!1;const k=f(N,L,U);r!==k&&(r=k,c(r.object)),z=d(_,N,L,O),z&&g(_,N,L,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,M(_,U,L,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function u(_){return s.deleteVertexArray(_)}function f(_,U,L){const N=L.wireframe===!0;let O=n[_.id];O===void 0&&(O={},n[_.id]=O);let z=O[U.id];z===void 0&&(z={},O[U.id]=z);let k=z[N];return k===void 0&&(k=h(l()),z[N]=k),k}function h(_){const U=[],L=[],N=[];for(let O=0;O<t;O++)U[O]=0,L[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:L,attributeDivisors:N,object:_,attributes:{},index:null}}function d(_,U,L,N){const O=r.attributes,z=U.attributes;let k=0;const X=L.getAttributes();for(const Y in X)if(X[Y].location>=0){const j=O[Y];let I=z[Y];if(I===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(I=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(I=_.instanceColor)),j===void 0||j.attribute!==I||I&&j.data!==I.data)return!0;k++}return r.attributesNum!==k||r.index!==N}function g(_,U,L,N){const O={},z=U.attributes;let k=0;const X=L.getAttributes();for(const Y in X)if(X[Y].location>=0){let j=z[Y];j===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(j=_.instanceColor));const I={};I.attribute=j,j&&j.data&&(I.data=j.data),O[Y]=I,k++}r.attributes=O,r.attributesNum=k,r.index=N}function v(){const _=r.newAttributes;for(let U=0,L=_.length;U<L;U++)_[U]=0}function p(_){m(_,0)}function m(_,U){const L=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;L[_]=1,N[_]===0&&(s.enableVertexAttribArray(_),N[_]=1),O[_]!==U&&(s.vertexAttribDivisor(_,U),O[_]=U)}function T(){const _=r.newAttributes,U=r.enabledAttributes;for(let L=0,N=U.length;L<N;L++)U[L]!==_[L]&&(s.disableVertexAttribArray(L),U[L]=0)}function y(_,U,L,N,O,z,k){k===!0?s.vertexAttribIPointer(_,U,L,O,z):s.vertexAttribPointer(_,U,L,N,O,z)}function M(_,U,L,N){v();const O=N.attributes,z=L.getAttributes(),k=U.defaultAttributeValues;for(const X in z){const Y=z[X];if(Y.location>=0){let q=O[X];if(q===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),q!==void 0){const j=q.normalized,I=q.itemSize,V=e.get(q);if(V===void 0)continue;const se=V.buffer,F=V.type,B=V.bytesPerElement,ee=F===s.INT||F===s.UNSIGNED_INT||q.gpuType===Ho;if(q.isInterleavedBufferAttribute){const W=q.data,oe=W.stride,Se=q.offset;if(W.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye,W.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye);s.bindBuffer(s.ARRAY_BUFFER,se);for(let ye=0;ye<Y.locationSize;ye++)y(Y.location+ye,I/Y.locationSize,F,j,oe*B,(Se+I/Y.locationSize*ye)*B,ee)}else{if(q.isInstancedBufferAttribute){for(let W=0;W<Y.locationSize;W++)m(Y.location+W,q.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let W=0;W<Y.locationSize;W++)p(Y.location+W);s.bindBuffer(s.ARRAY_BUFFER,se);for(let W=0;W<Y.locationSize;W++)y(Y.location+W,I/Y.locationSize,F,j,I*B,I/Y.locationSize*W*B,ee)}}else if(k!==void 0){const j=k[X];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(Y.location,j);break;case 3:s.vertexAttrib3fv(Y.location,j);break;case 4:s.vertexAttrib4fv(Y.location,j);break;default:s.vertexAttrib1fv(Y.location,j)}}}}T()}function D(){b();for(const _ in n){const U=n[_];for(const L in U){const N=U[L];for(const O in N)u(N[O].object),delete N[O];delete U[L]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const U=n[_.id];for(const L in U){const N=U[L];for(const O in N)u(N[O].object),delete N[O];delete U[L]}delete n[_.id]}function w(_){for(const U in n){const L=n[U];if(L[_.id]===void 0)continue;const N=L[_.id];for(const O in N)u(N[O].object),delete N[O];delete L[_.id]}}function b(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:p,disableUnusedAttributes:T}}function zm(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(s.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,n,h[v])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==un&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const w=C===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!w)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:M,maxSamples:D}}function Hm(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Vn,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const T=r?0:n,y=T*4;let M=m.clippingState||null;l.value=M,M=u(g,h,y,d);for(let D=0;D!==y;++D)M[D]=t[D];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=d;y!==v;++y,M+=4)a.copy(f[y]).applyMatrix4(T,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Vm(s){let e=new WeakMap;function t(a,o){return o===Za?a.mapping=er:o===Ja&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Za||o===Ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ed(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wm extends wu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qi=4,Kl=[.125,.215,.35,.446,.526,.582],li=20,Pa=new Wm,Zl=new st;let Ua=null,La=0,Da=0,Ia=!1;const ai=(1+Math.sqrt(5))/2,Gi=1/ai,Jl=[new Q(-ai,Gi,0),new Q(ai,Gi,0),new Q(-Gi,0,ai),new Q(Gi,0,ai),new Q(0,ai,-Gi),new Q(0,ai,Gi),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ua=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,La,Da),this._renderer.xr.enabled=Ia,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Gr,format:un,colorSpace:qn,depthBuffer:!1},i=$l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(r)),this._blurMaterial=Ym(r,e,t)}return i}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,Pa)}_sceneToCubeUV(e,t,n,i){const o=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Zl),u.toneMapping=Yn,u.autoClear=!1;const d=new Or({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Zt(new Hr,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(Zl),v=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):T===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;_s(i,T*y,m>2?y:0,y,y),u.setRenderTarget(i),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===er||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Pa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jl[(i-r-1)%Jl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zt(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*li-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const m=[];let T=0;for(let w=0;w<li;++w){const b=w/v,S=Math.exp(-b*b/2);m.push(S),w===0?T+=S:w<p&&(T+=2*S)}for(let w=0;w<m.length;w++)m[w]=m[w]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const M=this._sizeLods[i],D=3*M*(i>y-qi?i-y+qi:0),C=4*(this._cubeSize-M);_s(t,D,C,3*M,2*M),l.setRenderTarget(t),l.render(f,Pa)}}function Xm(s){const e=[],t=[],n=[];let i=s;const r=s-qi+1+Kl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-qi?l=Kl[a-s+qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,p=2,m=1,T=new Float32Array(v*g*d),y=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let C=0;C<d;C++){const w=C%3*2/3-1,b=C>2?0:-1,S=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];T.set(S,v*g*C),y.set(h,p*g*C);const _=[C,C,C,C,C,C];M.set(_,m*g*C)}const D=new _n;D.setAttribute("position",new hn(T,v)),D.setAttribute("uv",new hn(y,p)),D.setAttribute("faceIndex",new hn(M,m)),e.push(D),i>qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $l(s,e,t){const n=new pi(s,e,t);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ym(s,e,t){const n=new Float32Array(li),i=new Q(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ec(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function tc(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qm(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Za||l===Ja,u=l===er||l===tr;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Ql(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Ql(s)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&_u("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Km(s,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}h.removeEventListener("dispose",a),delete i[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],s.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const T=d.array;v=d.version;for(let y=0,M=T.length;y<M;y+=3){const D=T[y+0],C=T[y+1],w=T[y+2];h.push(D,C,C,w,w,D)}}else if(g!==void 0){const T=g.array;v=g.version;for(let y=0,M=T.length/3-1;y<M;y+=3){const D=y+0,C=y+1,w=y+2;h.push(D,C,C,w,w,D)}}else return;const p=new(vu(h)?Tu:bu)(h,1);p.version=v;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Zm(s,e,t){let n;function i(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){s.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,h*a,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function f(h,d,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/a,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,v,0,g);let m=0;for(let T=0;T<g;T++)m+=d[T];for(let T=0;T<v.length;T++)t.update(m,n,v[T])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Jm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qm(s,e,t){const n=new WeakMap,i=new St;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let _=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let D=o.attributes.position.count*M,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*C*4*f),b=new Su(w,D,C,f);b.type=Cn,b.needsUpdate=!0;const S=M*4;for(let U=0;U<f;U++){const L=m[U],N=T[U],O=y[U],z=D*C*4*U;for(let k=0;k<L.count;k++){const X=k*S;g===!0&&(i.fromBufferAttribute(L,k),w[z+X+0]=i.x,w[z+X+1]=i.y,w[z+X+2]=i.z,w[z+X+3]=0),v===!0&&(i.fromBufferAttribute(N,k),w[z+X+4]=i.x,w[z+X+5]=i.y,w[z+X+6]=i.z,w[z+X+7]=0),p===!0&&(i.fromBufferAttribute(O,k),w[z+X+8]=i.x,w[z+X+9]=i.y,w[z+X+10]=i.z,w[z+X+11]=O.itemSize===4?i.w:1)}}h={count:f,texture:b,size:new Ie(D,C)},n.set(o,h),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function $m(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Uu extends Ft{constructor(e,t,n,i,r,a,o,l,c,u=Ji){if(u!==Ji&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ji&&(n=di),n===void 0&&u===ir&&(n=nr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lu=new Ft,nc=new Uu(1,1),Du=new Su,Iu=new kh,Nu=new Cu,ic=[],rc=[],sc=new Float32Array(16),ac=new Float32Array(9),oc=new Float32Array(4);function or(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ic[i];if(r===void 0&&(r=new Float32Array(i),ic[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ks(s,e){let t=rc[e];t===void 0&&(t=new Int32Array(e),rc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function eg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function rg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;oc.set(n),s.uniformMatrix2fv(this.addr,!1,oc),Tt(t,n)}}function sg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;ac.set(n),s.uniformMatrix3fv(this.addr,!1,ac),Tt(t,n)}}function ag(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;sc.set(n),s.uniformMatrix4fv(this.addr,!1,sc),Tt(t,n)}}function og(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function ug(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function fg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function mg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(nc.compareFunction=gu,r=nc):r=Lu,t.setTexture2D(e||r,i)}function gg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Iu,i)}function vg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nu,i)}function _g(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Du,i)}function xg(s){switch(s){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return fg;case 36294:return hg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return _g}}function Sg(s,e){s.uniform1fv(this.addr,e)}function yg(s,e){const t=or(e,this.size,2);s.uniform2fv(this.addr,t)}function Mg(s,e){const t=or(e,this.size,3);s.uniform3fv(this.addr,t)}function Eg(s,e){const t=or(e,this.size,4);s.uniform4fv(this.addr,t)}function bg(s,e){const t=or(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Tg(s,e){const t=or(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ag(s,e){const t=or(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wg(s,e){s.uniform1iv(this.addr,e)}function Cg(s,e){s.uniform2iv(this.addr,e)}function Rg(s,e){s.uniform3iv(this.addr,e)}function Pg(s,e){s.uniform4iv(this.addr,e)}function Ug(s,e){s.uniform1uiv(this.addr,e)}function Lg(s,e){s.uniform2uiv(this.addr,e)}function Dg(s,e){s.uniform3uiv(this.addr,e)}function Ig(s,e){s.uniform4uiv(this.addr,e)}function Ng(s,e,t){const n=this.cache,i=e.length,r=Ks(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Lu,r[a])}function Fg(s,e,t){const n=this.cache,i=e.length,r=Ks(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Iu,r[a])}function Og(s,e,t){const n=this.cache,i=e.length,r=Ks(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nu,r[a])}function Bg(s,e,t){const n=this.cache,i=e.length,r=Ks(t,i);bt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Du,r[a])}function kg(s){switch(s){case 5126:return Sg;case 35664:return yg;case 35665:return Mg;case 35666:return Eg;case 35674:return bg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return wg;case 35667:case 35671:return Cg;case 35668:case 35672:return Rg;case 35669:case 35673:return Pg;case 5125:return Ug;case 36294:return Lg;case 36295:return Dg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xg(t.type)}}class Gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kg(t.type)}}class Hg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function lc(s,e){s.seq.push(e),s.map[e.id]=e}function Vg(s,e,t){const n=s.name,i=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),a=Na.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){lc(t,c===void 0?new zg(o,s,e):new Gg(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Hg(o),lc(t,f)),t=f}}}class Ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Vg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function cc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Wg=37297;let Xg=0;function Yg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function qg(s){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(s);let n;switch(e===t?n="":e===Gs&&t===zs?n="LinearDisplayP3ToLinearSRGB":e===zs&&t===Gs&&(n="LinearSRGBToLinearDisplayP3"),s){case qn:case Ys:return[n,"LinearTransferOETF"];case pn:case jo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function uc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Yg(s.getShaderSource(e),a)}else return i}function jg(s,e){const t=qg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Kg(s,e){let t;switch(e){case Jf:t="Linear";break;case Qf:t="Reinhard";break;case $f:t="OptimizedCineon";break;case eh:t="ACESFilmic";break;case nh:t="AgX";break;case ih:t="Neutral";break;case th:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function Jg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Er(s){return s!==""}function fc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(s){return s.replace($g,tv)}const ev=new Map;function tv(s,e){let t=tt[e];if(t===void 0){const n=ev.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wo(t)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(s){return s.replace(nv,iv)}function iv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ef?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function av(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function ov(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case iu:e="ENVMAP_BLENDING_MULTIPLY";break;case Kf:e="ENVMAP_BLENDING_MIX";break;case Zf:e="ENVMAP_BLENDING_ADD";break}return e}function lv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=rv(t),c=sv(t),u=av(t),f=ov(t),h=lv(t),d=Zg(t),g=Jg(r),v=i.createProgram();let p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`)):(p=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),m=[pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,jg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),a=wo(a),a=fc(a,t),a=hc(a,t),o=wo(o),o=fc(o,t),o=hc(o,t),a=dc(a),o=dc(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=T+p+a,M=T+m+o,D=cc(i,i.VERTEX_SHADER,y),C=cc(i,i.FRAGMENT_SHADER,M);i.attachShader(v,D),i.attachShader(v,C),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(U){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(D).trim(),O=i.getShaderInfoLog(C).trim();let z=!0,k=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,D,C);else{const X=uc(i,D,"vertex"),Y=uc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+L+`
`+X+`
`+Y)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||O==="")&&(k=!1);k&&(U.diagnostics={runnable:z,programLog:L,vertexShader:{log:N,prefix:p},fragmentShader:{log:O,prefix:m}})}i.deleteShader(D),i.deleteShader(C),b=new Ds(i,v),S=Qg(i,v)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,Wg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}let uv=0;class fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hv(e),t.set(e,n)),n}}class hv{constructor(e){this.id=uv++,this.code=e,this.usedTimes=0}}function dv(s,e,t,n,i,r,a){const o=new Mu,l=new fv,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,_,U,L,N){const O=L.fog,z=N.geometry,k=S.isMeshStandardMaterial?L.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),Y=X&&X.mapping===Xs?X.image.height:null,q=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const j=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,I=j!==void 0?j.length:0;let V=0;z.morphAttributes.position!==void 0&&(V=1),z.morphAttributes.normal!==void 0&&(V=2),z.morphAttributes.color!==void 0&&(V=3);let se,F,B,ee;if(q){const Be=mn[q];se=Be.vertexShader,F=Be.fragmentShader}else se=S.vertexShader,F=S.fragmentShader,l.update(S),B=l.getVertexShaderID(S),ee=l.getFragmentShaderID(S);const W=s.getRenderTarget(),oe=N.isInstancedMesh===!0,Se=N.isBatchedMesh===!0,ye=!!S.map,xe=!!S.matcap,A=!!X,he=!!S.aoMap,ce=!!S.lightMap,pe=!!S.bumpMap,$=!!S.normalMap,Te=!!S.displacementMap,ae=!!S.emissiveMap,de=!!S.metalnessMap,P=!!S.roughnessMap,x=S.anisotropy>0,G=S.clearcoat>0,J=S.dispersion>0,ie=S.iridescence>0,ne=S.sheen>0,Ce=S.transmission>0,fe=x&&!!S.anisotropyMap,ge=G&&!!S.clearcoatMap,Ae=G&&!!S.clearcoatNormalMap,me=G&&!!S.clearcoatRoughnessMap,Ee=ie&&!!S.iridescenceMap,ze=ie&&!!S.iridescenceThicknessMap,Pe=ne&&!!S.sheenColorMap,ve=ne&&!!S.sheenRoughnessMap,Me=!!S.specularMap,Ne=!!S.specularColorMap,Ye=!!S.specularIntensityMap,E=Ce&&!!S.transmissionMap,K=Ce&&!!S.thicknessMap,H=!!S.gradientMap,re=!!S.alphaMap,be=S.alphaTest>0,we=!!S.alphaHash,Le=!!S.extensions;let Qe=Yn;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Qe=s.toneMapping);const Ze={shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:F,defines:S.defines,customVertexShaderID:B,customFragmentShaderID:ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Se,batchingColor:Se&&N._colorsTexture!==null,instancing:oe,instancingColor:oe&&N.instanceColor!==null,instancingMorph:oe&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:qn,alphaToCoverage:!!S.alphaToCoverage,map:ye,matcap:xe,envMap:A,envMapMode:A&&X.mapping,envMapCubeUVHeight:Y,aoMap:he,lightMap:ce,bumpMap:pe,normalMap:$,displacementMap:h&&Te,emissiveMap:ae,normalMapObjectSpace:$&&S.normalMapType===oh,normalMapTangentSpace:$&&S.normalMapType===ah,metalnessMap:de,roughnessMap:P,anisotropy:x,anisotropyMap:fe,clearcoat:G,clearcoatMap:ge,clearcoatNormalMap:Ae,clearcoatRoughnessMap:me,dispersion:J,iridescence:ie,iridescenceMap:Ee,iridescenceThicknessMap:ze,sheen:ne,sheenColorMap:Pe,sheenRoughnessMap:ve,specularMap:Me,specularColorMap:Ne,specularIntensityMap:Ye,transmission:Ce,transmissionMap:E,thicknessMap:K,gradientMap:H,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:be,alphaHash:we,combine:S.combine,mapUv:ye&&v(S.map.channel),aoMapUv:he&&v(S.aoMap.channel),lightMapUv:ce&&v(S.lightMap.channel),bumpMapUv:pe&&v(S.bumpMap.channel),normalMapUv:$&&v(S.normalMap.channel),displacementMapUv:Te&&v(S.displacementMap.channel),emissiveMapUv:ae&&v(S.emissiveMap.channel),metalnessMapUv:de&&v(S.metalnessMap.channel),roughnessMapUv:P&&v(S.roughnessMap.channel),anisotropyMapUv:fe&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(S.sheenRoughnessMap.channel),specularMapUv:Me&&v(S.specularMap.channel),specularColorMapUv:Ne&&v(S.specularColorMap.channel),specularIntensityMapUv:Ye&&v(S.specularIntensityMap.channel),transmissionMapUv:E&&v(S.transmissionMap.channel),thicknessMapUv:K&&v(S.thicknessMap.channel),alphaMapUv:re&&v(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&($||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(ye||re),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:V,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Le&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&S.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function m(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)_.push(U),_.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(T(_,S),y(_,S),_.push(s.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function T(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function y(S,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.doubleSided&&o.enable(10),_.flipSided&&o.enable(11),_.useDepthPacking&&o.enable(12),_.dithering&&o.enable(13),_.transmission&&o.enable(14),_.sheen&&o.enable(15),_.opaque&&o.enable(16),_.pointsUvs&&o.enable(17),_.decodeVideoTexture&&o.enable(18),_.alphaToCoverage&&o.enable(19),S.push(o.mask)}function M(S){const _=g[S.type];let U;if(_){const L=mn[_];U=Zo.clone(L.uniforms)}else U=S.uniforms;return U}function D(S,_){let U;for(let L=0,N=u.length;L<N;L++){const O=u[L];if(O.cacheKey===_){U=O,++U.usedTimes;break}}return U===void 0&&(U=new cv(s,_,S,r),u.push(U)),U}function C(S){if(--S.usedTimes===0){const _=u.indexOf(S);u[_]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:D,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:b}}function pv(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function mv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function mc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,g,v,p){let m=s[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},s[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=p),e++,m}function o(f,h,d,g,v,p){const m=a(f,h,d,g,v,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(f,h,d,g,v,p){const m=a(f,h,d,g,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||mv),n.length>1&&n.sort(h||mc),i.length>1&&i.sort(h||mc)}function u(){for(let f=e,h=s.length;f<h;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function gv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new gc,s.set(n,[a])):i>=r.length?(a=new gc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function vv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new st};break;case"SpotLight":t={position:new Q,direction:new Q,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function _v(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xv=0;function Sv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yv(s){const e=new vv,t=_v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Q);const i=new Q,r=new _t,a=new _t;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,T=0,y=0,M=0,D=0,C=0,w=0;c.sort(Sv);for(let S=0,_=c.length;S<_;S++){const U=c[S],L=U.color,N=U.intensity,O=U.distance,z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=L.r*N,f+=L.g*N,h+=L.b*N;else if(U.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(U.sh.coefficients[k],N);w++}else if(U.isDirectionalLight){const k=e.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,Y=t.get(U);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=U.shadow.matrix,T++}n.directional[d]=k,d++}else if(U.isSpotLight){const k=e.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(L).multiplyScalar(N),k.distance=O,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,n.spot[v]=k;const X=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,X.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[v]=X.matrix,U.castShadow){const Y=t.get(U);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=z,M++}v++}else if(U.isRectAreaLight){const k=e.get(U);k.color.copy(L).multiplyScalar(N),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),n.rectArea[p]=k,p++}else if(U.isPointLight){const k=e.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity),k.distance=U.distance,k.decay=U.decay,U.castShadow){const X=U.shadow,Y=t.get(U);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=U.shadow.matrix,y++}n.point[g]=k,g++}else if(U.isHemisphereLight){const k=e.get(U);k.skyColor.copy(U.color).multiplyScalar(N),k.groundColor.copy(U.groundColor).multiplyScalar(N),n.hemi[m]=k,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const b=n.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==v||b.rectAreaLength!==p||b.hemiLength!==m||b.numDirectionalShadows!==T||b.numPointShadows!==y||b.numSpotShadows!==M||b.numSpotMaps!==D||b.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,b.directionalLength=d,b.pointLength=g,b.spotLength=v,b.rectAreaLength=p,b.hemiLength=m,b.numDirectionalShadows=T,b.numPointShadows=y,b.numSpotShadows=M,b.numSpotMaps=D,b.numLightProbes=w,n.version=xv++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const y=c[m];if(y.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function vc(s){const e=new yv(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mv(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new vc(s),e.set(i,[o])):r>=a.length?(o=new vc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Fu extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ou extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tv(s,e,t){let n=new Ru;const i=new Ie,r=new Ie,a=new St,o=new Fu({depthPacking:mu}),l=new Ou,c={},u=t.maxTextureSize,f={[Pn]:Nt,[Nt]:Pn,[cn]:cn},h=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Ev,fragmentShader:bv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu;let m=this.type;this.render=function(C,w,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=s.getRenderTarget(),_=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Xn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=m!==wn&&this.type===wn,O=m===wn&&this.type!==wn;for(let z=0,k=C.length;z<k;z++){const X=C[z],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const q=Y.getFrameExtents();if(i.multiply(q),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/q.x),i.x=r.x*q.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/q.y),i.y=r.y*q.y,Y.mapSize.y=r.y)),Y.map===null||N===!0||O===!0){const I=this.type!==wn?{minFilter:nn,magFilter:nn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new pi(i.x,i.y,I),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const j=Y.getViewportCount();for(let I=0;I<j;I++){const V=Y.getViewport(I);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),L.viewport(a),Y.updateMatrices(X,I),n=Y.getFrustum(),M(w,b,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===wn&&T(Y,b),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(S,_,U)};function T(C,w){const b=e.update(v);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pi(i.x,i.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(w,null,b,h,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(w,null,b,d,v,null)}function y(C,w,b,S){let _=null;const U=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)_=U;else if(_=b.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const L=_.uuid,N=w.uuid;let O=c[L];O===void 0&&(O={},c[L]=O);let z=O[N];z===void 0&&(z=_.clone(),O[N]=z,w.addEventListener("dispose",D)),_=z}if(_.visible=w.visible,_.wireframe=w.wireframe,S===wn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:f[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,b.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=s.properties.get(_);L.light=b}return _}function M(C,w,b,S,_){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===wn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);const N=e.update(C),O=C.material;if(Array.isArray(O)){const z=N.groups;for(let k=0,X=z.length;k<X;k++){const Y=z[k],q=O[Y.materialIndex];if(q&&q.visible){const j=y(C,q,S,_);C.onBeforeShadow(s,C,w,b,N,j,Y),s.renderBufferDirect(b,null,N,j,C,Y),C.onAfterShadow(s,C,w,b,N,j,Y)}}}else if(O.visible){const z=y(C,O,S,_);C.onBeforeShadow(s,C,w,b,N,z,null),s.renderBufferDirect(b,null,N,z,C,null),C.onAfterShadow(s,C,w,b,N,z,null)}}const L=C.children;for(let N=0,O=L.length;N<O;N++)M(L[N],w,b,S,_)}function D(C){C.target.removeEventListener("dispose",D);for(const b in c){const S=c[b],_=C.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}function Av(s){function e(){let E=!1;const K=new St;let H=null;const re=new St(0,0,0,0);return{setMask:function(be){H!==be&&!E&&(s.colorMask(be,be,be,be),H=be)},setLocked:function(be){E=be},setClear:function(be,we,Le,Qe,Ze){Ze===!0&&(be*=Qe,we*=Qe,Le*=Qe),K.set(be,we,Le,Qe),re.equals(K)===!1&&(s.clearColor(be,we,Le,Qe),re.copy(K))},reset:function(){E=!1,H=null,re.set(-1,0,0,0)}}}function t(){let E=!1,K=null,H=null,re=null;return{setTest:function(be){be?ee(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(be){K!==be&&!E&&(s.depthMask(be),K=be)},setFunc:function(be){if(H!==be){switch(be){case Hf:s.depthFunc(s.NEVER);break;case Vf:s.depthFunc(s.ALWAYS);break;case Wf:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case Xf:s.depthFunc(s.EQUAL);break;case Yf:s.depthFunc(s.GEQUAL);break;case qf:s.depthFunc(s.GREATER);break;case jf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}H=be}},setLocked:function(be){E=be},setClear:function(be){re!==be&&(s.clearDepth(be),re=be)},reset:function(){E=!1,K=null,H=null,re=null}}}function n(){let E=!1,K=null,H=null,re=null,be=null,we=null,Le=null,Qe=null,Ze=null;return{setTest:function(Be){E||(Be?ee(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(Be){K!==Be&&!E&&(s.stencilMask(Be),K=Be)},setFunc:function(Be,Ke,$e){(H!==Be||re!==Ke||be!==$e)&&(s.stencilFunc(Be,Ke,$e),H=Be,re=Ke,be=$e)},setOp:function(Be,Ke,$e){(we!==Be||Le!==Ke||Qe!==$e)&&(s.stencilOp(Be,Ke,$e),we=Be,Le=Ke,Qe=$e)},setLocked:function(Be){E=Be},setClear:function(Be){Ze!==Be&&(s.clearStencil(Be),Ze=Be)},reset:function(){E=!1,K=null,H=null,re=null,be=null,we=null,Le=null,Qe=null,Ze=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,v=null,p=null,m=null,T=null,y=null,M=null,D=null,C=new st(0,0,0),w=0,b=!1,S=null,_=null,U=null,L=null,N=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=k>=2);let Y=null,q={};const j=s.getParameter(s.SCISSOR_BOX),I=s.getParameter(s.VIEWPORT),V=new St().fromArray(j),se=new St().fromArray(I);function F(E,K,H,re){const be=new Uint8Array(4),we=s.createTexture();s.bindTexture(E,we),s.texParameteri(E,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(E,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<H;Le++)E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY?s.texImage3D(K,0,s.RGBA,1,1,re,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(K+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return we}const B={};B[s.TEXTURE_2D]=F(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=F(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[s.TEXTURE_2D_ARRAY]=F(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=F(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ee(s.DEPTH_TEST),r.setFunc(Bs),pe(!1),$(Ml),ee(s.CULL_FACE),he(Xn);function ee(E){c[E]!==!0&&(s.enable(E),c[E]=!0)}function W(E){c[E]!==!1&&(s.disable(E),c[E]=!1)}function oe(E,K){return u[E]!==K?(s.bindFramebuffer(E,K),u[E]=K,E===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=K),E===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=K),!0):!1}function Se(E,K){let H=h,re=!1;if(E){H=f.get(K),H===void 0&&(H=[],f.set(K,H));const be=E.textures;if(H.length!==be.length||H[0]!==s.COLOR_ATTACHMENT0){for(let we=0,Le=be.length;we<Le;we++)H[we]=s.COLOR_ATTACHMENT0+we;H.length=be.length,re=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,re=!0);re&&s.drawBuffers(H)}function ye(E){return d!==E?(s.useProgram(E),d=E,!0):!1}const xe={[oi]:s.FUNC_ADD,[Tf]:s.FUNC_SUBTRACT,[Af]:s.FUNC_REVERSE_SUBTRACT};xe[wf]=s.MIN,xe[Cf]=s.MAX;const A={[Rf]:s.ZERO,[Pf]:s.ONE,[Uf]:s.SRC_COLOR,[ja]:s.SRC_ALPHA,[Of]:s.SRC_ALPHA_SATURATE,[Nf]:s.DST_COLOR,[Df]:s.DST_ALPHA,[Lf]:s.ONE_MINUS_SRC_COLOR,[Ka]:s.ONE_MINUS_SRC_ALPHA,[Ff]:s.ONE_MINUS_DST_COLOR,[If]:s.ONE_MINUS_DST_ALPHA,[Bf]:s.CONSTANT_COLOR,[kf]:s.ONE_MINUS_CONSTANT_COLOR,[zf]:s.CONSTANT_ALPHA,[Gf]:s.ONE_MINUS_CONSTANT_ALPHA};function he(E,K,H,re,be,we,Le,Qe,Ze,Be){if(E===Xn){g===!0&&(W(s.BLEND),g=!1);return}if(g===!1&&(ee(s.BLEND),g=!0),E!==bf){if(E!==v||Be!==b){if((p!==oi||y!==oi)&&(s.blendEquation(s.FUNC_ADD),p=oi,y=oi),Be)switch(E){case Zi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case El:s.blendFunc(s.ONE,s.ONE);break;case bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Zi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case El:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}m=null,T=null,M=null,D=null,C.set(0,0,0),w=0,v=E,b=Be}return}be=be||K,we=we||H,Le=Le||re,(K!==p||be!==y)&&(s.blendEquationSeparate(xe[K],xe[be]),p=K,y=be),(H!==m||re!==T||we!==M||Le!==D)&&(s.blendFuncSeparate(A[H],A[re],A[we],A[Le]),m=H,T=re,M=we,D=Le),(Qe.equals(C)===!1||Ze!==w)&&(s.blendColor(Qe.r,Qe.g,Qe.b,Ze),C.copy(Qe),w=Ze),v=E,b=!1}function ce(E,K){E.side===cn?W(s.CULL_FACE):ee(s.CULL_FACE);let H=E.side===Nt;K&&(H=!H),pe(H),E.blending===Zi&&E.transparent===!1?he(Xn):he(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),r.setFunc(E.depthFunc),r.setTest(E.depthTest),r.setMask(E.depthWrite),i.setMask(E.colorWrite);const re=E.stencilWrite;a.setTest(re),re&&(a.setMask(E.stencilWriteMask),a.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),a.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ae(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function pe(E){S!==E&&(E?s.frontFace(s.CW):s.frontFace(s.CCW),S=E)}function $(E){E!==yf?(ee(s.CULL_FACE),E!==_&&(E===Ml?s.cullFace(s.BACK):E===Mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),_=E}function Te(E){E!==U&&(z&&s.lineWidth(E),U=E)}function ae(E,K,H){E?(ee(s.POLYGON_OFFSET_FILL),(L!==K||N!==H)&&(s.polygonOffset(K,H),L=K,N=H)):W(s.POLYGON_OFFSET_FILL)}function de(E){E?ee(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function P(E){E===void 0&&(E=s.TEXTURE0+O-1),Y!==E&&(s.activeTexture(E),Y=E)}function x(E,K,H){H===void 0&&(Y===null?H=s.TEXTURE0+O-1:H=Y);let re=q[H];re===void 0&&(re={type:void 0,texture:void 0},q[H]=re),(re.type!==E||re.texture!==K)&&(Y!==H&&(s.activeTexture(H),Y=H),s.bindTexture(E,K||B[E]),re.type=E,re.texture=K)}function G(){const E=q[Y];E!==void 0&&E.type!==void 0&&(s.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ce(){try{s.texSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ae(){try{s.texStorage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ze(){try{s.texImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Pe(E){V.equals(E)===!1&&(s.scissor(E.x,E.y,E.z,E.w),V.copy(E))}function ve(E){se.equals(E)===!1&&(s.viewport(E.x,E.y,E.z,E.w),se.copy(E))}function Me(E,K){let H=l.get(K);H===void 0&&(H=new WeakMap,l.set(K,H));let re=H.get(E);re===void 0&&(re=s.getUniformBlockIndex(K,E.name),H.set(E,re))}function Ne(E,K){const re=l.get(K).get(E);o.get(K)!==re&&(s.uniformBlockBinding(K,re,E.__bindingPointIndex),o.set(K,re))}function Ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},Y=null,q={},u={},f=new WeakMap,h=[],d=null,g=!1,v=null,p=null,m=null,T=null,y=null,M=null,D=null,C=new st(0,0,0),w=0,b=!1,S=null,_=null,U=null,L=null,N=null,V.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ee,disable:W,bindFramebuffer:oe,drawBuffers:Se,useProgram:ye,setBlending:he,setMaterial:ce,setFlipSided:pe,setCullFace:$,setLineWidth:Te,setPolygonOffset:ae,setScissorTest:de,activeTexture:P,bindTexture:x,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:Ee,texImage3D:ze,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:Ae,texStorage3D:me,texSubImage2D:ne,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:ge,scissor:Pe,viewport:ve,reset:Ye}}function _c(s,e,t,n){const i=wv(n);switch(t){case lu:return s*e;case uu:return s*e;case fu:return s*e*2;case hu:return s*e/i.components*i.byteLength;case Xo:return s*e/i.components*i.byteLength;case du:return s*e*2/i.components*i.byteLength;case Yo:return s*e*2/i.components*i.byteLength;case cu:return s*e*3/i.components*i.byteLength;case un:return s*e*4/i.components*i.byteLength;case qo:return s*e*4/i.components*i.byteLength;case Cs:case Rs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Us:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(s,16)*Math.max(e,8)/4;case eo:case no:return Math.max(s,8)*Math.max(e,8)/2;case ro:case so:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case co:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ho:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case po:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _o:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ls:case Mo:case Eo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pu:case bo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case To:case Ao:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wv(s){switch(s){case Un:case su:return{byteLength:1,components:1};case Ir:case au:case Gr:return{byteLength:2,components:1};case Vo:case Wo:return{byteLength:2,components:4};case di:case Ho:case Cn:return{byteLength:4,components:1};case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Cv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,x){return d?new OffscreenCanvas(P,x):Fr("canvas")}function v(P,x,G){let J=1;const ie=de(P);if((ie.width>G||ie.height>G)&&(J=G/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(J*ie.width),Ce=Math.floor(J*ie.height);f===void 0&&(f=g(ne,Ce));const fe=x?g(ne,Ce):f;return fe.width=ne,fe.height=Ce,fe.getContext("2d").drawImage(P,0,0,ne,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ne+"x"+Ce+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==nn&&P.minFilter!==Kt}function m(P){s.generateMipmap(P)}function T(P,x,G,J,ie=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=x;if(x===s.RED&&(G===s.FLOAT&&(ne=s.R32F),G===s.HALF_FLOAT&&(ne=s.R16F),G===s.UNSIGNED_BYTE&&(ne=s.R8)),x===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ne=s.R8UI),G===s.UNSIGNED_SHORT&&(ne=s.R16UI),G===s.UNSIGNED_INT&&(ne=s.R32UI),G===s.BYTE&&(ne=s.R8I),G===s.SHORT&&(ne=s.R16I),G===s.INT&&(ne=s.R32I)),x===s.RG&&(G===s.FLOAT&&(ne=s.RG32F),G===s.HALF_FLOAT&&(ne=s.RG16F),G===s.UNSIGNED_BYTE&&(ne=s.RG8)),x===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ne=s.RG8UI),G===s.UNSIGNED_SHORT&&(ne=s.RG16UI),G===s.UNSIGNED_INT&&(ne=s.RG32UI),G===s.BYTE&&(ne=s.RG8I),G===s.SHORT&&(ne=s.RG16I),G===s.INT&&(ne=s.RG32I)),x===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),x===s.RGBA){const Ce=ie?ks:lt.getTransfer(J);G===s.FLOAT&&(ne=s.RGBA32F),G===s.HALF_FLOAT&&(ne=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ne=Ce===dt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function y(P,x){let G;return P?x===null||x===di||x===nr?G=s.DEPTH24_STENCIL8:x===Cn?G=s.DEPTH32F_STENCIL8:x===Ir&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===di||x===nr?G=s.DEPTH_COMPONENT24:x===Cn?G=s.DEPTH_COMPONENT32F:x===Ir&&(G=s.DEPTH_COMPONENT16),G}function M(P,x){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function D(P){const x=P.target;x.removeEventListener("dispose",D),w(x),x.isVideoTexture&&u.delete(x)}function C(P){const x=P.target;x.removeEventListener("dispose",C),S(x)}function w(P){const x=n.get(P);if(x.__webglInit===void 0)return;const G=P.source,J=h.get(G);if(J){const ie=J[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(P),Object.keys(J).length===0&&h.delete(G)}n.remove(P)}function b(P){const x=n.get(P);s.deleteTexture(x.__webglTexture);const G=P.source,J=h.get(G);delete J[x.__cacheKey],a.memory.textures--}function S(P){const x=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ie=0;ie<x.__webglFramebuffer[J].length;ie++)s.deleteFramebuffer(x.__webglFramebuffer[J][ie]);else s.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)s.deleteFramebuffer(x.__webglFramebuffer[J]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=P.textures;for(let J=0,ie=G.length;J<ie;J++){const ne=n.get(G[J]);ne.__webglTexture&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(G[J])}n.remove(P)}let _=0;function U(){_=0}function L(){const P=_;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),_+=1,P}function N(P){const x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function O(P,x){const G=n.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(G,P,x);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+x)}function z(P,x){const G=n.get(P);if(P.version>0&&G.__version!==P.version){se(G,P,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+x)}function k(P,x){const G=n.get(P);if(P.version>0&&G.__version!==P.version){se(G,P,x);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+x)}function X(P,x){const G=n.get(P);if(P.version>0&&G.__version!==P.version){F(G,P,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+x)}const Y={[Qa]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[$a]:s.MIRRORED_REPEAT},q={[nn]:s.NEAREST,[rh]:s.NEAREST_MIPMAP_NEAREST,[Jr]:s.NEAREST_MIPMAP_LINEAR,[Kt]:s.LINEAR,[fa]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},j={[lh]:s.NEVER,[ph]:s.ALWAYS,[ch]:s.LESS,[gu]:s.LEQUAL,[uh]:s.EQUAL,[dh]:s.GEQUAL,[fh]:s.GREATER,[hh]:s.NOTEQUAL};function I(P,x){if(x.type===Cn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===fa||x.magFilter===Jr||x.magFilter===fi||x.minFilter===Kt||x.minFilter===fa||x.minFilter===Jr||x.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Y[x.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Y[x.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Y[x.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,q[x.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,q[x.minFilter]),x.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,j[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===nn||x.minFilter!==Jr&&x.minFilter!==fi||x.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function V(P,x){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",D));const J=x.source;let ie=h.get(J);ie===void 0&&(ie={},h.set(J,ie));const ne=N(x);if(ne!==P.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ie[ne].usedTimes++;const Ce=ie[P.__cacheKey];Ce!==void 0&&(ie[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(x)),P.__cacheKey=ne,P.__webglTexture=ie[ne].texture}return G}function se(P,x,G){let J=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=s.TEXTURE_3D);const ie=V(P,x),ne=x.source;t.bindTexture(J,P.__webglTexture,s.TEXTURE0+G);const Ce=n.get(ne);if(ne.version!==Ce.__version||ie===!0){t.activeTexture(s.TEXTURE0+G);const fe=lt.getPrimaries(lt.workingColorSpace),ge=x.colorSpace===Wn?null:lt.getPrimaries(x.colorSpace),Ae=x.colorSpace===Wn||fe===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let me=v(x.image,!1,i.maxTextureSize);me=ae(x,me);const Ee=r.convert(x.format,x.colorSpace),ze=r.convert(x.type);let Pe=T(x.internalFormat,Ee,ze,x.colorSpace,x.isVideoTexture);I(J,x);let ve;const Me=x.mipmaps,Ne=x.isVideoTexture!==!0,Ye=Ce.__version===void 0||ie===!0,E=ne.dataReady,K=M(x,me);if(x.isDepthTexture)Pe=y(x.format===ir,x.type),Ye&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,Pe,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Pe,me.width,me.height,0,Ee,ze,null));else if(x.isDataTexture)if(Me.length>0){Ne&&Ye&&t.texStorage2D(s.TEXTURE_2D,K,Pe,Me[0].width,Me[0].height);for(let H=0,re=Me.length;H<re;H++)ve=Me[H],Ne?E&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ve.width,ve.height,Ee,ze,ve.data):t.texImage2D(s.TEXTURE_2D,H,Pe,ve.width,ve.height,0,Ee,ze,ve.data);x.generateMipmaps=!1}else Ne?(Ye&&t.texStorage2D(s.TEXTURE_2D,K,Pe,me.width,me.height),E&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ee,ze,me.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,me.width,me.height,0,Ee,ze,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,K,Pe,Me[0].width,Me[0].height,me.depth);for(let H=0,re=Me.length;H<re;H++)if(ve=Me[H],x.format!==un)if(Ee!==null)if(Ne){if(E)if(x.layerUpdates.size>0){const be=_c(ve.width,ve.height,x.format,x.type);for(const we of x.layerUpdates){const Le=ve.data.subarray(we*be/ve.data.BYTES_PER_ELEMENT,(we+1)*be/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,we,ve.width,ve.height,1,Ee,Le,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,me.depth,Ee,ve.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Pe,ve.width,ve.height,me.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?E&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,me.depth,Ee,ze,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,Pe,ve.width,ve.height,me.depth,0,Ee,ze,ve.data)}else{Ne&&Ye&&t.texStorage2D(s.TEXTURE_2D,K,Pe,Me[0].width,Me[0].height);for(let H=0,re=Me.length;H<re;H++)ve=Me[H],x.format!==un?Ee!==null?Ne?E&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,ve.width,ve.height,Ee,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,H,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?E&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ve.width,ve.height,Ee,ze,ve.data):t.texImage2D(s.TEXTURE_2D,H,Pe,ve.width,ve.height,0,Ee,ze,ve.data)}else if(x.isDataArrayTexture)if(Ne){if(Ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,K,Pe,me.width,me.height,me.depth),E)if(x.layerUpdates.size>0){const H=_c(me.width,me.height,x.format,x.type);for(const re of x.layerUpdates){const be=me.data.subarray(re*H/me.data.BYTES_PER_ELEMENT,(re+1)*H/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,re,me.width,me.height,1,Ee,ze,be)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ee,ze,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Ee,ze,me.data);else if(x.isData3DTexture)Ne?(Ye&&t.texStorage3D(s.TEXTURE_3D,K,Pe,me.width,me.height,me.depth),E&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ee,ze,me.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Ee,ze,me.data);else if(x.isFramebufferTexture){if(Ye)if(Ne)t.texStorage2D(s.TEXTURE_2D,K,Pe,me.width,me.height);else{let H=me.width,re=me.height;for(let be=0;be<K;be++)t.texImage2D(s.TEXTURE_2D,be,Pe,H,re,0,Ee,ze,null),H>>=1,re>>=1}}else if(Me.length>0){if(Ne&&Ye){const H=de(Me[0]);t.texStorage2D(s.TEXTURE_2D,K,Pe,H.width,H.height)}for(let H=0,re=Me.length;H<re;H++)ve=Me[H],Ne?E&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,Ee,ze,ve):t.texImage2D(s.TEXTURE_2D,H,Pe,Ee,ze,ve);x.generateMipmaps=!1}else if(Ne){if(Ye){const H=de(me);t.texStorage2D(s.TEXTURE_2D,K,Pe,H.width,H.height)}E&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,ze,me)}else t.texImage2D(s.TEXTURE_2D,0,Pe,Ee,ze,me);p(x)&&m(J),Ce.__version=ne.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function F(P,x,G){if(x.image.length!==6)return;const J=V(P,x),ie=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const ne=n.get(ie);if(ie.version!==ne.__version||J===!0){t.activeTexture(s.TEXTURE0+G);const Ce=lt.getPrimaries(lt.workingColorSpace),fe=x.colorSpace===Wn?null:lt.getPrimaries(x.colorSpace),ge=x.colorSpace===Wn||Ce===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let re=0;re<6;re++)!Ae&&!me?Ee[re]=v(x.image[re],!0,i.maxCubemapSize):Ee[re]=me?x.image[re].image:x.image[re],Ee[re]=ae(x,Ee[re]);const ze=Ee[0],Pe=r.convert(x.format,x.colorSpace),ve=r.convert(x.type),Me=T(x.internalFormat,Pe,ve,x.colorSpace),Ne=x.isVideoTexture!==!0,Ye=ne.__version===void 0||J===!0,E=ie.dataReady;let K=M(x,ze);I(s.TEXTURE_CUBE_MAP,x);let H;if(Ae){Ne&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,K,Me,ze.width,ze.height);for(let re=0;re<6;re++){H=Ee[re].mipmaps;for(let be=0;be<H.length;be++){const we=H[be];x.format!==un?Pe!==null?Ne?E&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,Me,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,we.width,we.height,Pe,ve,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,Me,we.width,we.height,0,Pe,ve,we.data)}}}else{if(H=x.mipmaps,Ne&&Ye){H.length>0&&K++;const re=de(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,K,Me,re.width,re.height)}for(let re=0;re<6;re++)if(me){Ne?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee[re].width,Ee[re].height,Pe,ve,Ee[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Me,Ee[re].width,Ee[re].height,0,Pe,ve,Ee[re].data);for(let be=0;be<H.length;be++){const Le=H[be].image[re].image;Ne?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Le.width,Le.height,Pe,ve,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,Me,Le.width,Le.height,0,Pe,ve,Le.data)}}else{Ne?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,ve,Ee[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Me,Pe,ve,Ee[re]);for(let be=0;be<H.length;be++){const we=H[be];Ne?E&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Pe,ve,we.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,Me,Pe,ve,we.image[re])}}}p(x)&&m(s.TEXTURE_CUBE_MAP),ne.__version=ie.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function B(P,x,G,J,ie,ne){const Ce=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),ge=T(G.internalFormat,Ce,fe,G.colorSpace);if(!n.get(x).__hasExternalTextures){const me=Math.max(1,x.width>>ne),Ee=Math.max(1,x.height>>ne);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ne,ge,me,Ee,x.depth,0,Ce,fe,null):t.texImage2D(ie,ne,ge,me,Ee,0,Ce,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),$(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ie,n.get(G).__webglTexture,0,pe(x)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ie,n.get(G).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(P,x,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),x.depthBuffer){const J=x.depthTexture,ie=J&&J.isDepthTexture?J.type:null,ne=y(x.stencilBuffer,ie),Ce=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=pe(x);$(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,ne,x.width,x.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,ne,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ne,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,P)}else{const J=x.textures;for(let ie=0;ie<J.length;ie++){const ne=J[ie],Ce=r.convert(ne.format,ne.colorSpace),fe=r.convert(ne.type),ge=T(ne.internalFormat,Ce,fe,ne.colorSpace),Ae=pe(x);G&&$(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ge,x.width,x.height):$(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ge,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ge,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function W(P,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O(x.depthTexture,0);const J=n.get(x.depthTexture).__webglTexture,ie=pe(x);if(x.depthTexture.format===Ji)$(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(x.depthTexture.format===ir)$(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function oe(P){const x=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");W(x.__webglFramebuffer,P)}else if(G){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=s.createRenderbuffer(),ee(x.__webglDepthbuffer[J],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),ee(x.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(P,x,G){const J=n.get(P);x!==void 0&&B(J.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&oe(P)}function ye(P){const x=P.texture,G=n.get(P),J=n.get(x);P.addEventListener("dispose",C);const ie=P.textures,ne=P.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=x.version,a.memory.textures++),ne){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let ge=0;ge<x.mipmaps.length;ge++)G.__webglFramebuffer[fe][ge]=s.createFramebuffer()}else G.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)G.__webglFramebuffer[fe]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let fe=0,ge=ie.length;fe<ge;fe++){const Ae=n.get(ie[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&$(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ge=ie[fe];G.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Ae=r.convert(ge.format,ge.colorSpace),me=r.convert(ge.type),Ee=T(ge.internalFormat,Ae,me,ge.colorSpace,P.isXRRenderTarget===!0),ze=pe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Ee,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ee(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),I(s.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)B(G.__webglFramebuffer[fe][ge],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else B(G.__webglFramebuffer[fe],P,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(x)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,ge=ie.length;fe<ge;fe++){const Ae=ie[fe],me=n.get(Ae);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),I(s.TEXTURE_2D,Ae),B(G.__webglFramebuffer,P,Ae,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),p(Ae)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,J.__webglTexture),I(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)B(G.__webglFramebuffer[ge],P,x,s.COLOR_ATTACHMENT0,fe,ge);else B(G.__webglFramebuffer,P,x,s.COLOR_ATTACHMENT0,fe,0);p(x)&&m(fe),t.unbindTexture()}P.depthBuffer&&oe(P)}function xe(P){const x=P.textures;for(let G=0,J=x.length;G<J;G++){const ie=x[G];if(p(ie)){const ne=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ce=n.get(ie).__webglTexture;t.bindTexture(ne,Ce),m(ne),t.unbindTexture()}}}const A=[],he=[];function ce(P){if(P.samples>0){if($(P)===!1){const x=P.textures,G=P.width,J=P.height;let ie=s.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=n.get(P),fe=x.length>1;if(fe)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[ge]);const Ae=n.get(x[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,G,J,0,0,G,J,ie,s.NEAREST),l===!0&&(A.length=0,he.length=0,A.push(s.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.resolveDepthBuffer===!1&&(A.push(ne),he.push(ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,he)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,A))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[ge]);const Ae=n.get(x[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const x=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function pe(P){return Math.min(i.maxSamples,P.samples)}function $(P){const x=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Te(P){const x=a.render.frame;u.get(P)!==x&&(u.set(P,x),P.update())}function ae(P,x){const G=P.colorSpace,J=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==qn&&G!==Wn&&(lt.getTransfer(G)===dt?(J!==un||ie!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function de(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=Se,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=B,this.useMultisampledRTT=$}function Rv(s,e){function t(n,i=Wn){let r;const a=lt.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===Vo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return s.BYTE;if(n===au)return s.SHORT;if(n===Ir)return s.UNSIGNED_SHORT;if(n===Ho)return s.INT;if(n===di)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Gr)return s.HALF_FLOAT;if(n===lu)return s.ALPHA;if(n===cu)return s.RGB;if(n===un)return s.RGBA;if(n===uu)return s.LUMINANCE;if(n===fu)return s.LUMINANCE_ALPHA;if(n===Ji)return s.DEPTH_COMPONENT;if(n===ir)return s.DEPTH_STENCIL;if(n===hu)return s.RED;if(n===Xo)return s.RED_INTEGER;if(n===du)return s.RG;if(n===Yo)return s.RG_INTEGER;if(n===qo)return s.RGBA_INTEGER;if(n===Cs||n===Rs||n===Ps||n===Us)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===so||n===ao)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ro||n===so)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===lo||n===co||n===uo||n===fo||n===ho||n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===So||n===yo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===co)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===Mo||n===Eo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ls)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pu||n===bo||n===To||n===Ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ls)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Pv extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ft,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dn({vertexShader:Lv,fragmentShader:Dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Zt(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nv extends vi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=new Iv,p=t.getContextAttributes();let m=null,T=null;const y=[],M=[],D=new Ie;let C=null;const w=new tn;w.layers.enable(1),w.viewport=new St;const b=new tn;b.layers.enable(2),b.viewport=new St;const S=[w,b],_=new Pv;_.layers.enable(1),_.layers.enable(2);let U=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let B=y[F];return B===void 0&&(B=new Fa,y[F]=B),B.getTargetRaySpace()},this.getControllerGrip=function(F){let B=y[F];return B===void 0&&(B=new Fa,y[F]=B),B.getGripSpace()},this.getHand=function(F){let B=y[F];return B===void 0&&(B=new Fa,y[F]=B),B.getHandSpace()};function N(F){const B=M.indexOf(F.inputSource);if(B===-1)return;const ee=y[B];ee!==void 0&&(ee.update(F.inputSource,F.frame,c||a),ee.dispatchEvent({type:F.type,data:F.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",z);for(let F=0;F<y.length;F++){const B=M[F];B!==null&&(M[F]=null,y[F].disconnect(B))}U=null,L=null,v.reset(),e.setRenderTarget(m),d=null,h=null,f=null,i=null,T=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const B={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new pi(d.framebufferWidth,d.framebufferHeight,{format:un,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let B=null,ee=null,W=null;p.depth&&(W=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=p.stencil?ir:Ji,ee=p.stencil?nr:di);const oe={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(oe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new pi(h.textureWidth,h.textureHeight,{format:un,type:Un,depthTexture:new Uu(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(F){for(let B=0;B<F.removed.length;B++){const ee=F.removed[B],W=M.indexOf(ee);W>=0&&(M[W]=null,y[W].disconnect(ee))}for(let B=0;B<F.added.length;B++){const ee=F.added[B];let W=M.indexOf(ee);if(W===-1){for(let Se=0;Se<y.length;Se++)if(Se>=M.length){M.push(ee),W=Se;break}else if(M[Se]===null){M[Se]=ee,W=Se;break}if(W===-1)break}const oe=y[W];oe&&oe.connect(ee)}}const k=new Q,X=new Q;function Y(F,B,ee){k.setFromMatrixPosition(B.matrixWorld),X.setFromMatrixPosition(ee.matrixWorld);const W=k.distanceTo(X),oe=B.projectionMatrix.elements,Se=ee.projectionMatrix.elements,ye=oe[14]/(oe[10]-1),xe=oe[14]/(oe[10]+1),A=(oe[9]+1)/oe[5],he=(oe[9]-1)/oe[5],ce=(oe[8]-1)/oe[0],pe=(Se[8]+1)/Se[0],$=ye*ce,Te=ye*pe,ae=W/(-ce+pe),de=ae*-ce;B.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(de),F.translateZ(ae),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const P=ye+ae,x=xe+ae,G=$-de,J=Te+(W-de),ie=A*xe/x*P,ne=he*xe/x*P;F.projectionMatrix.makePerspective(G,J,ie,ne,P,x),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function q(F,B){B===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(B.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;v.texture!==null&&(F.near=v.depthNear,F.far=v.depthFar),_.near=b.near=w.near=F.near,_.far=b.far=w.far=F.far,(U!==_.near||L!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),U=_.near,L=_.far,w.near=U,w.far=L,b.near=U,b.far=L,w.updateProjectionMatrix(),b.updateProjectionMatrix(),F.updateProjectionMatrix());const B=F.parent,ee=_.cameras;q(_,B);for(let W=0;W<ee.length;W++)q(ee[W],B);ee.length===2?Y(_,w,b):_.projectionMatrix.copy(w.projectionMatrix),j(F,_,B)};function j(F,B,ee){ee===null?F.matrix.copy(B.matrixWorld):(F.matrix.copy(ee.matrixWorld),F.matrix.invert(),F.matrix.multiply(B.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(B.projectionMatrix),F.projectionMatrixInverse.copy(B.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Nr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let I=null;function V(F,B){if(u=B.getViewerPose(c||a),g=B,u!==null){const ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let W=!1;ee.length!==_.cameras.length&&(_.cameras.length=0,W=!0);for(let Se=0;Se<ee.length;Se++){const ye=ee[Se];let xe=null;if(d!==null)xe=d.getViewport(ye);else{const he=f.getViewSubImage(h,ye);xe=he.viewport,Se===0&&(e.setRenderTargetTextures(T,he.colorTexture,h.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(T))}let A=S[Se];A===void 0&&(A=new tn,A.layers.enable(Se),A.viewport=new St,S[Se]=A),A.matrix.fromArray(ye.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(ye.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(xe.x,xe.y,xe.width,xe.height),Se===0&&(_.matrix.copy(A.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),W===!0&&_.cameras.push(A)}const oe=i.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const Se=f.getDepthInformation(ee[0]);Se&&Se.isValid&&Se.texture&&v.init(e,Se,i.renderState)}}for(let ee=0;ee<y.length;ee++){const W=M[ee],oe=y[ee];W!==null&&oe!==void 0&&oe.update(W,B,c||a)}I&&I(F,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}const se=new Pu;se.setAnimationLoop(V),this.setAnimationLoop=function(F){I=F},this.dispose=function(){}}}const ii=new Ln,Fv=new _t;function Ov(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Au(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,T,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,T,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Nt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Nt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=e.get(m),y=T.envMap,M=T.envMapRotation;y&&(p.envMap.value=y,ii.copy(M),ii.x*=-1,ii.y*=-1,ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),p.envMapRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(ii)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const M=y.program;n.uniformBlockBinding(T,M)}function c(T,y){let M=i[T.id];M===void 0&&(g(T),M=u(T),i[T.id]=M,T.addEventListener("dispose",p));const D=y.program;n.updateUBOMapping(T,D);const C=e.render.frame;r[T.id]!==C&&(h(T),r[T.id]=C)}function u(T){const y=f();T.__bindingPointIndex=y;const M=s.createBuffer(),D=T.__size,C=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,D,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const y=i[T.id],M=T.uniforms,D=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let C=0,w=M.length;C<w;C++){const b=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,_=b.length;S<_;S++){const U=b[S];if(d(U,C,S,D)===!0){const L=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let O=0;for(let z=0;z<N.length;z++){const k=N[z],X=v(k);typeof k=="number"||typeof k=="boolean"?(U.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,L+O,U.__data)):k.isMatrix3?(U.__data[0]=k.elements[0],U.__data[1]=k.elements[1],U.__data[2]=k.elements[2],U.__data[3]=0,U.__data[4]=k.elements[3],U.__data[5]=k.elements[4],U.__data[6]=k.elements[5],U.__data[7]=0,U.__data[8]=k.elements[6],U.__data[9]=k.elements[7],U.__data[10]=k.elements[8],U.__data[11]=0):(k.toArray(U.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(T,y,M,D){const C=T.value,w=y+"_"+M;if(D[w]===void 0)return typeof C=="number"||typeof C=="boolean"?D[w]=C:D[w]=C.clone(),!0;{const b=D[w];if(typeof C=="number"||typeof C=="boolean"){if(b!==C)return D[w]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function g(T){const y=T.uniforms;let M=0;const D=16;for(let w=0,b=y.length;w<b;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let _=0,U=S.length;_<U;_++){const L=S[_],N=Array.isArray(L.value)?L.value:[L.value];for(let O=0,z=N.length;O<z;O++){const k=N[O],X=v(k),Y=M%D;Y!==0&&D-Y<X.boundary&&(M+=D-Y),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=X.storage}}}const C=M%D;return C>0&&(M+=D-C),T.__size=M,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class kv{constructor(e={}){const{canvas:t=Lh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Yn,this.toneMappingExposure=1;const y=this;let M=!1,D=0,C=0,w=null,b=-1,S=null;const _=new St,U=new St;let L=null;const N=new st(0);let O=0,z=t.width,k=t.height,X=1,Y=null,q=null;const j=new St(0,0,z,k),I=new St(0,0,z,k);let V=!1;const se=new Ru;let F=!1,B=!1;const ee=new _t,W=new Q,oe=new St,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function xe(){return w===null?X:1}let A=n;function he(R,Z){return t.getContext(R,Z)}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",be,!1),A===null){const Z="webgl2";if(A=he(Z,R),A===null)throw he(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ce,pe,$,Te,ae,de,P,x,G,J,ie,ne,Ce,fe,ge,Ae,me,Ee,ze,Pe,ve,Me,Ne,Ye;function E(){ce=new jm(A),ce.init(),Me=new Rv(A,ce),pe=new Gm(A,ce,e,Me),$=new Av(A),Te=new Jm(A),ae=new pv,de=new Cv(A,ce,$,ae,pe,Me,Te),P=new Vm(y),x=new qm(y),G=new id(A),Ne=new km(A,G),J=new Km(A,G,Te,Ne),ie=new $m(A,J,G,Te),ze=new Qm(A,pe,de),Ae=new Hm(ae),ne=new dv(y,P,x,ce,pe,Ne,Ae),Ce=new Ov(y,ae),fe=new gv,ge=new Mv(ce),Ee=new Bm(y,P,x,$,ie,h,l),me=new Tv(y,ie,pe),Ye=new Bv(A,Te,pe,$),Pe=new zm(A,ce,Te),ve=new Zm(A,ce,Te),Te.programs=ne.programs,y.capabilities=pe,y.extensions=ce,y.properties=ae,y.renderLists=fe,y.shadowMap=me,y.state=$,y.info=Te}E();const K=new Nv(y,A);this.xr=K,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(z,k,!1))},this.getSize=function(R){return R.set(z,k)},this.setSize=function(R,Z,le=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,k=Z,t.width=Math.floor(R*X),t.height=Math.floor(Z*X),le===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(z*X,k*X).floor()},this.setDrawingBufferSize=function(R,Z,le){z=R,k=Z,X=le,t.width=Math.floor(R*le),t.height=Math.floor(Z*le),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(_)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,Z,le,ue){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,Z,le,ue),$.viewport(_.copy(j).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(I)},this.setScissor=function(R,Z,le,ue){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,Z,le,ue),$.scissor(U.copy(I).multiplyScalar(X).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(R){$.setScissorTest(V=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(R=!0,Z=!0,le=!0){let ue=0;if(R){let te=!1;if(w!==null){const Ue=w.texture.format;te=Ue===qo||Ue===Yo||Ue===Xo}if(te){const Ue=w.texture.type,De=Ue===Un||Ue===di||Ue===Ir||Ue===nr||Ue===Vo||Ue===Wo,Ge=Ee.getClearColor(),_e=Ee.getClearAlpha(),He=Ge.r,je=Ge.g,Xe=Ge.b;De?(d[0]=He,d[1]=je,d[2]=Xe,d[3]=_e,A.clearBufferuiv(A.COLOR,0,d)):(g[0]=He,g[1]=je,g[2]=Xe,g[3]=_e,A.clearBufferiv(A.COLOR,0,g))}else ue|=A.COLOR_BUFFER_BIT}Z&&(ue|=A.DEPTH_BUFFER_BIT),le&&(ue|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",be,!1),fe.dispose(),ge.dispose(),ae.dispose(),P.dispose(),x.dispose(),ie.dispose(),Ne.dispose(),Ye.dispose(),ne.dispose(),K.dispose(),K.removeEventListener("sessionstart",$e),K.removeEventListener("sessionend",at),it.stop()};function H(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=Te.autoReset,Z=me.enabled,le=me.autoUpdate,ue=me.needsUpdate,te=me.type;E(),Te.autoReset=R,me.enabled=Z,me.autoUpdate=le,me.needsUpdate=ue,me.type=te}function be(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function we(R){const Z=R.target;Z.removeEventListener("dispose",we),Le(Z)}function Le(R){Qe(R),ae.remove(R)}function Qe(R){const Z=ae.get(R).programs;Z!==void 0&&(Z.forEach(function(le){ne.releaseProgram(le)}),R.isShaderMaterial&&ne.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,le,ue,te,Ue){Z===null&&(Z=Se);const De=te.isMesh&&te.matrixWorld.determinant()<0,Ge=jn(R,Z,le,ue,te);$.setMaterial(ue,De);let _e=le.index,He=1;if(ue.wireframe===!0){if(_e=J.getWireframeAttribute(le),_e===void 0)return;He=2}const je=le.drawRange,Xe=le.attributes.position;let et=je.start*He,Je=(je.start+je.count)*He;Ue!==null&&(et=Math.max(et,Ue.start*He),Je=Math.min(Je,(Ue.start+Ue.count)*He)),_e!==null?(et=Math.max(et,0),Je=Math.min(Je,_e.count)):Xe!=null&&(et=Math.max(et,0),Je=Math.min(Je,Xe.count));const ct=Je-et;if(ct<0||ct===1/0)return;Ne.setup(te,ue,Ge,le,_e);let We,Ve=Pe;if(_e!==null&&(We=G.get(_e),Ve=ve,Ve.setIndex(We)),te.isMesh)ue.wireframe===!0?($.setLineWidth(ue.wireframeLinewidth*xe()),Ve.setMode(A.LINES)):Ve.setMode(A.TRIANGLES);else if(te.isLine){let Oe=ue.linewidth;Oe===void 0&&(Oe=1),$.setLineWidth(Oe*xe()),te.isLineSegments?Ve.setMode(A.LINES):te.isLineLoop?Ve.setMode(A.LINE_LOOP):Ve.setMode(A.LINE_STRIP)}else te.isPoints?Ve.setMode(A.POINTS):te.isSprite&&Ve.setMode(A.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Ve.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Ve.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Oe=te._multiDrawStarts,ht=te._multiDrawCounts,rt=te._multiDrawCount,Ot=_e?G.get(_e).bytesPerElement:1,Sn=ae.get(ue).currentProgram.getUniforms();for(let Et=0;Et<rt;Et++)Sn.setValue(A,"_gl_DrawID",Et),Ve.render(Oe[Et]/Ot,ht[Et])}else if(te.isInstancedMesh)Ve.renderInstances(et,ct,te.count);else if(le.isInstancedBufferGeometry){const Oe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,ht=Math.min(le.instanceCount,Oe);Ve.renderInstances(et,ct,ht)}else Ve.render(et,ct)};function Ze(R,Z,le){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=Nt,R.needsUpdate=!0,Mt(R,Z,le),R.side=Pn,R.needsUpdate=!0,Mt(R,Z,le),R.side=cn):Mt(R,Z,le)}this.compile=function(R,Z,le=null){le===null&&(le=R),p=ge.get(le),p.init(Z),T.push(p),le.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),R!==le&&R.traverseVisible(function(te){te.isLight&&te.layers.test(Z.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights();const ue=new Set;return R.traverse(function(te){const Ue=te.material;if(Ue)if(Array.isArray(Ue))for(let De=0;De<Ue.length;De++){const Ge=Ue[De];Ze(Ge,le,te),ue.add(Ge)}else Ze(Ue,le,te),ue.add(Ue)}),T.pop(),p=null,ue},this.compileAsync=function(R,Z,le=null){const ue=this.compile(R,Z,le);return new Promise(te=>{function Ue(){if(ue.forEach(function(De){ae.get(De).currentProgram.isReady()&&ue.delete(De)}),ue.size===0){te(R);return}setTimeout(Ue,10)}ce.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Be=null;function Ke(R){Be&&Be(R)}function $e(){it.stop()}function at(){it.start()}const it=new Pu;it.setAnimationLoop(Ke),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(R){Be=R,K.setAnimationLoop(R),R===null?it.stop():it.start()},K.addEventListener("sessionstart",$e),K.addEventListener("sessionend",at),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(Z),Z=K.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,Z,w),p=ge.get(R,T.length),p.init(Z),T.push(p),ee.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),se.setFromProjectionMatrix(ee),B=this.localClippingEnabled,F=Ae.init(this.clippingPlanes,B),v=fe.get(R,m.length),v.init(),m.push(v),K.enabled===!0&&K.isPresenting===!0){const Ue=y.xr.getDepthSensingMesh();Ue!==null&&ft(Ue,Z,-1/0,y.sortObjects)}ft(R,Z,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Y,q),ye=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ye&&Ee.addToRenderList(v,R),this.info.render.frame++,F===!0&&Ae.beginShadows();const le=p.state.shadowsArray;me.render(le,R,Z),F===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=v.opaque,te=v.transmissive;if(p.setupLights(),Z.isArrayCamera){const Ue=Z.cameras;if(te.length>0)for(let De=0,Ge=Ue.length;De<Ge;De++){const _e=Ue[De];yt(ue,te,R,_e)}ye&&Ee.render(R);for(let De=0,Ge=Ue.length;De<Ge;De++){const _e=Ue[De];gt(v,R,_e,_e.viewport)}}else te.length>0&&yt(ue,te,R,Z),ye&&Ee.render(R),gt(v,R,Z);w!==null&&(de.updateMultisampleRenderTarget(w),de.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(y,R,Z),Ne.resetDefaultState(),b=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],F===!0&&Ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ft(R,Z,le,ue){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){ue&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ee);const De=ie.update(R),Ge=R.material;Ge.visible&&v.push(R,De,Ge,le,oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){const De=ie.update(R),Ge=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),oe.copy(De.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(ee)),Array.isArray(Ge)){const _e=De.groups;for(let He=0,je=_e.length;He<je;He++){const Xe=_e[He],et=Ge[Xe.materialIndex];et&&et.visible&&v.push(R,De,et,le,oe.z,Xe)}}else Ge.visible&&v.push(R,De,Ge,le,oe.z,null)}}const Ue=R.children;for(let De=0,Ge=Ue.length;De<Ge;De++)ft(Ue[De],Z,le,ue)}function gt(R,Z,le,ue){const te=R.opaque,Ue=R.transmissive,De=R.transparent;p.setupLightsView(le),F===!0&&Ae.setGlobalState(y.clippingPlanes,le),ue&&$.viewport(_.copy(ue)),te.length>0&&Pt(te,Z,le),Ue.length>0&&Pt(Ue,Z,le),De.length>0&&Pt(De,Z,le),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function yt(R,Z,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new pi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Gr:Un,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const Ue=p.state.transmissionRenderTarget[ue.id],De=ue.viewport||_;Ue.setSize(De.z,De.w);const Ge=y.getRenderTarget();y.setRenderTarget(Ue),y.getClearColor(N),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),ye?Ee.render(le):y.clear();const _e=y.toneMapping;y.toneMapping=Yn;const He=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),F===!0&&Ae.setGlobalState(y.clippingPlanes,ue),Pt(R,le,ue),de.updateMultisampleRenderTarget(Ue),de.updateRenderTargetMipmap(Ue),ce.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Xe=0,et=Z.length;Xe<et;Xe++){const Je=Z[Xe],ct=Je.object,We=Je.geometry,Ve=Je.material,Oe=Je.group;if(Ve.side===cn&&ct.layers.test(ue.layers)){const ht=Ve.side;Ve.side=Nt,Ve.needsUpdate=!0,pt(ct,le,ue,We,Ve,Oe),Ve.side=ht,Ve.needsUpdate=!0,je=!0}}je===!0&&(de.updateMultisampleRenderTarget(Ue),de.updateRenderTargetMipmap(Ue))}y.setRenderTarget(Ge),y.setClearColor(N,O),He!==void 0&&(ue.viewport=He),y.toneMapping=_e}function Pt(R,Z,le){const ue=Z.isScene===!0?Z.overrideMaterial:null;for(let te=0,Ue=R.length;te<Ue;te++){const De=R[te],Ge=De.object,_e=De.geometry,He=ue===null?De.material:ue,je=De.group;Ge.layers.test(le.layers)&&pt(Ge,Z,le,_e,He,je)}}function pt(R,Z,le,ue,te,Ue){R.onBeforeRender(y,Z,le,ue,te,Ue),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.transparent===!0&&te.side===cn&&te.forceSinglePass===!1?(te.side=Nt,te.needsUpdate=!0,y.renderBufferDirect(le,Z,ue,te,R,Ue),te.side=Pn,te.needsUpdate=!0,y.renderBufferDirect(le,Z,ue,te,R,Ue),te.side=cn):y.renderBufferDirect(le,Z,ue,te,R,Ue),R.onAfterRender(y,Z,le,ue,te,Ue)}function Mt(R,Z,le){Z.isScene!==!0&&(Z=Se);const ue=ae.get(R),te=p.state.lights,Ue=p.state.shadowsArray,De=te.state.version,Ge=ne.getParameters(R,te.state,Ue,Z,le),_e=ne.getProgramCacheKey(Ge);let He=ue.programs;ue.environment=R.isMeshStandardMaterial?Z.environment:null,ue.fog=Z.fog,ue.envMap=(R.isMeshStandardMaterial?x:P).get(R.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",we),He=new Map,ue.programs=He);let je=He.get(_e);if(je!==void 0){if(ue.currentProgram===je&&ue.lightsStateVersion===De)return zt(R,Ge),je}else Ge.uniforms=ne.getUniforms(R),R.onBeforeCompile(Ge,y),je=ne.acquireProgram(Ge,_e),He.set(_e,je),ue.uniforms=Ge.uniforms;const Xe=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ae.uniform),zt(R,Ge),ue.needsLights=dn(R),ue.lightsStateVersion=De,ue.needsLights&&(Xe.ambientLightColor.value=te.state.ambient,Xe.lightProbe.value=te.state.probe,Xe.directionalLights.value=te.state.directional,Xe.directionalLightShadows.value=te.state.directionalShadow,Xe.spotLights.value=te.state.spot,Xe.spotLightShadows.value=te.state.spotShadow,Xe.rectAreaLights.value=te.state.rectArea,Xe.ltc_1.value=te.state.rectAreaLTC1,Xe.ltc_2.value=te.state.rectAreaLTC2,Xe.pointLights.value=te.state.point,Xe.pointLightShadows.value=te.state.pointShadow,Xe.hemisphereLights.value=te.state.hemi,Xe.directionalShadowMap.value=te.state.directionalShadowMap,Xe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Xe.spotShadowMap.value=te.state.spotShadowMap,Xe.spotLightMatrix.value=te.state.spotLightMatrix,Xe.spotLightMap.value=te.state.spotLightMap,Xe.pointShadowMap.value=te.state.pointShadowMap,Xe.pointShadowMatrix.value=te.state.pointShadowMatrix),ue.currentProgram=je,ue.uniformsList=null,je}function vt(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Ds.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function zt(R,Z){const le=ae.get(R);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function jn(R,Z,le,ue,te){Z.isScene!==!0&&(Z=Se),de.resetTextureUnits();const Ue=Z.fog,De=ue.isMeshStandardMaterial?Z.environment:null,Ge=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qn,_e=(ue.isMeshStandardMaterial?x:P).get(ue.envMap||De),He=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,je=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Xe=!!le.morphAttributes.position,et=!!le.morphAttributes.normal,Je=!!le.morphAttributes.color;let ct=Yn;ue.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ct=y.toneMapping);const We=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ve=We!==void 0?We.length:0,Oe=ae.get(ue),ht=p.state.lights;if(F===!0&&(B===!0||R!==S)){const Ut=R===S&&ue.id===b;Ae.setState(ue,R,Ut)}let rt=!1;ue.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ht.state.version||Oe.outputColorSpace!==Ge||te.isBatchedMesh&&Oe.batching===!1||!te.isBatchedMesh&&Oe.batching===!0||te.isBatchedMesh&&Oe.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Oe.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Oe.instancing===!1||!te.isInstancedMesh&&Oe.instancing===!0||te.isSkinnedMesh&&Oe.skinning===!1||!te.isSkinnedMesh&&Oe.skinning===!0||te.isInstancedMesh&&Oe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Oe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Oe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Oe.instancingMorph===!1&&te.morphTexture!==null||Oe.envMap!==_e||ue.fog===!0&&Oe.fog!==Ue||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ae.numPlanes||Oe.numIntersection!==Ae.numIntersection)||Oe.vertexAlphas!==He||Oe.vertexTangents!==je||Oe.morphTargets!==Xe||Oe.morphNormals!==et||Oe.morphColors!==Je||Oe.toneMapping!==ct||Oe.morphTargetsCount!==Ve)&&(rt=!0):(rt=!0,Oe.__version=ue.version);let Ot=Oe.currentProgram;rt===!0&&(Ot=Mt(ue,Z,te));let Sn=!1,Et=!1,Kn=!1;const ut=Ot.getUniforms(),$t=Oe.uniforms;if($.useProgram(Ot.program)&&(Sn=!0,Et=!0,Kn=!0),ue.id!==b&&(b=ue.id,Et=!0),Sn||S!==R){ut.setValue(A,"projectionMatrix",R.projectionMatrix),ut.setValue(A,"viewMatrix",R.matrixWorldInverse);const Ut=ut.map.cameraPosition;Ut!==void 0&&Ut.setValue(A,W.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&ut.setValue(A,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&ut.setValue(A,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Et=!0,Kn=!0)}if(te.isSkinnedMesh){ut.setOptional(A,te,"bindMatrix"),ut.setOptional(A,te,"bindMatrixInverse");const Ut=te.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ut.setValue(A,"boneTexture",Ut.boneTexture,de))}te.isBatchedMesh&&(ut.setOptional(A,te,"batchingTexture"),ut.setValue(A,"batchingTexture",te._matricesTexture,de),ut.setOptional(A,te,"batchingIdTexture"),ut.setValue(A,"batchingIdTexture",te._indirectTexture,de),ut.setOptional(A,te,"batchingColorTexture"),te._colorsTexture!==null&&ut.setValue(A,"batchingColorTexture",te._colorsTexture,de));const Zn=le.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&ze.update(te,le,Ot),(Et||Oe.receiveShadow!==te.receiveShadow)&&(Oe.receiveShadow=te.receiveShadow,ut.setValue(A,"receiveShadow",te.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&($t.envMap.value=_e,$t.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Z.environment!==null&&($t.envMapIntensity.value=Z.environmentIntensity),Et&&(ut.setValue(A,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&Qt($t,Kn),Ue&&ue.fog===!0&&Ce.refreshFogUniforms($t,Ue),Ce.refreshMaterialUniforms($t,ue,X,k,p.state.transmissionRenderTarget[R.id]),Ds.upload(A,vt(Oe),$t,de)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Ds.upload(A,vt(Oe),$t,de),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&ut.setValue(A,"center",te.center),ut.setValue(A,"modelViewMatrix",te.modelViewMatrix),ut.setValue(A,"normalMatrix",te.normalMatrix),ut.setValue(A,"modelMatrix",te.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Ut=ue.uniformsGroups;for(let Gt=0,Qs=Ut.length;Gt<Qs;Gt++){const Jn=Ut[Gt];Ye.update(Jn,Ot),Ye.bind(Jn,Ot)}}return Ot}function Qt(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function dn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,Z,le){ae.get(R.texture).__webglTexture=Z,ae.get(R.depthTexture).__webglTexture=le;const ue=ae.get(R);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Z){const le=ae.get(R);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,le=0){w=R,D=Z,C=le;let ue=!0,te=null,Ue=!1,De=!1;if(R){const _e=ae.get(R);_e.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(A.FRAMEBUFFER,null),ue=!1):_e.__webglFramebuffer===void 0?de.setupRenderTarget(R):_e.__hasExternalTextures&&de.rebindTextures(R,ae.get(R.texture).__webglTexture,ae.get(R.depthTexture).__webglTexture);const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(De=!0);const je=ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[Z])?te=je[Z][le]:te=je[Z],Ue=!0):R.samples>0&&de.useMultisampledRTT(R)===!1?te=ae.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?te=je[le]:te=je,_.copy(R.viewport),U.copy(R.scissor),L=R.scissorTest}else _.copy(j).multiplyScalar(X).floor(),U.copy(I).multiplyScalar(X).floor(),L=V;if($.bindFramebuffer(A.FRAMEBUFFER,te)&&ue&&$.drawBuffers(R,te),$.viewport(_),$.scissor(U),$.setScissorTest(L),Ue){const _e=ae.get(R.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,_e.__webglTexture,le)}else if(De){const _e=ae.get(R.texture),He=Z||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.__webglTexture,le||0,He)}b=-1},this.readRenderTargetPixels=function(R,Z,le,ue,te,Ue,De){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Ge=Ge[De]),Ge){$.bindFramebuffer(A.FRAMEBUFFER,Ge);try{const _e=R.texture,He=_e.format,je=_e.type;if(!pe.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ue&&le>=0&&le<=R.height-te&&A.readPixels(Z,le,ue,te,Me.convert(He),Me.convert(je),Ue)}finally{const _e=w!==null?ae.get(w).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(R,Z,le,ue,te,Ue,De){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&De!==void 0&&(Ge=Ge[De]),Ge){$.bindFramebuffer(A.FRAMEBUFFER,Ge);try{const _e=R.texture,He=_e.format,je=_e.type;if(!pe.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=R.width-ue&&le>=0&&le<=R.height-te){const Xe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.bufferData(A.PIXEL_PACK_BUFFER,Ue.byteLength,A.STREAM_READ),A.readPixels(Z,le,ue,te,Me.convert(He),Me.convert(je),0),A.flush();const et=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);await Dh(A,et,4);try{A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Ue)}finally{A.deleteBuffer(Xe),A.deleteSync(et)}return Ue}}finally{const _e=w!==null?ae.get(w).__webglFramebuffer:null;$.bindFramebuffer(A.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(R,Z=null,le=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1]);const ue=Math.pow(2,-le),te=Math.floor(R.image.width*ue),Ue=Math.floor(R.image.height*ue),De=Z!==null?Z.x:0,Ge=Z!==null?Z.y:0;de.setTexture2D(R,0),A.copyTexSubImage2D(A.TEXTURE_2D,le,0,0,De,Ge,te,Ue),$.unbindTexture()},this.copyTextureToTexture=function(R,Z,le=null,ue=null,te=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,R=arguments[1],Z=arguments[2],te=arguments[3]||0,le=null);let Ue,De,Ge,_e,He,je;le!==null?(Ue=le.max.x-le.min.x,De=le.max.y-le.min.y,Ge=le.min.x,_e=le.min.y):(Ue=R.image.width,De=R.image.height,Ge=0,_e=0),ue!==null?(He=ue.x,je=ue.y):(He=0,je=0);const Xe=Me.convert(Z.format),et=Me.convert(Z.type);de.setTexture2D(Z,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,Z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,Z.unpackAlignment);const Je=A.getParameter(A.UNPACK_ROW_LENGTH),ct=A.getParameter(A.UNPACK_IMAGE_HEIGHT),We=A.getParameter(A.UNPACK_SKIP_PIXELS),Ve=A.getParameter(A.UNPACK_SKIP_ROWS),Oe=A.getParameter(A.UNPACK_SKIP_IMAGES),ht=R.isCompressedTexture?R.mipmaps[te]:R.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,ht.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ht.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ge),A.pixelStorei(A.UNPACK_SKIP_ROWS,_e),R.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,te,He,je,Ue,De,Xe,et,ht.data):R.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,te,He,je,ht.width,ht.height,Xe,ht.data):A.texSubImage2D(A.TEXTURE_2D,te,He,je,Ue,De,Xe,et,ht),A.pixelStorei(A.UNPACK_ROW_LENGTH,Je),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ct),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ve),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Oe),te===0&&Z.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,le=null,ue=null,te=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,R=arguments[2],Z=arguments[3],te=arguments[4]||0);let Ue,De,Ge,_e,He,je,Xe,et,Je;const ct=R.isCompressedTexture?R.mipmaps[te]:R.image;le!==null?(Ue=le.max.x-le.min.x,De=le.max.y-le.min.y,Ge=le.max.z-le.min.z,_e=le.min.x,He=le.min.y,je=le.min.z):(Ue=ct.width,De=ct.height,Ge=ct.depth,_e=0,He=0,je=0),ue!==null?(Xe=ue.x,et=ue.y,Je=ue.z):(Xe=0,et=0,Je=0);const We=Me.convert(Z.format),Ve=Me.convert(Z.type);let Oe;if(Z.isData3DTexture)de.setTexture3D(Z,0),Oe=A.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)de.setTexture2DArray(Z,0),Oe=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,Z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,Z.unpackAlignment);const ht=A.getParameter(A.UNPACK_ROW_LENGTH),rt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Ot=A.getParameter(A.UNPACK_SKIP_PIXELS),Sn=A.getParameter(A.UNPACK_SKIP_ROWS),Et=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ct.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ct.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,_e),A.pixelStorei(A.UNPACK_SKIP_ROWS,He),A.pixelStorei(A.UNPACK_SKIP_IMAGES,je),R.isDataTexture||R.isData3DTexture?A.texSubImage3D(Oe,te,Xe,et,Je,Ue,De,Ge,We,Ve,ct.data):Z.isCompressedArrayTexture?A.compressedTexSubImage3D(Oe,te,Xe,et,Je,Ue,De,Ge,We,ct.data):A.texSubImage3D(Oe,te,Xe,et,Je,Ue,De,Ge,We,Ve,ct),A.pixelStorei(A.UNPACK_ROW_LENGTH,ht),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ot),A.pixelStorei(A.UNPACK_SKIP_ROWS,Sn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Et),te===0&&Z.generateMipmaps&&A.generateMipmap(Oe),$.unbindTexture()},this.initRenderTarget=function(R){ae.get(R).__webglFramebuffer===void 0&&de.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?de.setTextureCube(R,0):R.isData3DTexture?de.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?de.setTexture2DArray(R,0):de.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){D=0,C=0,w=null,$.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jo?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Ys?"display-p3":"srgb"}}class zv extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gv extends hn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],h=n[i+1]-u,d=(a-u)/h;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Ie:new Q);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Q,i=[],r=[],a=[],o=new Q,l=new _t;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new Q)}r[0]=new Q,a[0]=new Q;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(wt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(wt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qo extends xn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ie){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hv extends Qo{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $o(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,i(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Ss=new Q,Oa=new $o,Ba=new $o,ka=new $o;class Vv extends xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Q){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Ss.subVectors(i[0],i[1]).add(i[0]),c=Ss);const f=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Oa.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,p),Ba.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,p),ka.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Ba.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),ka.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Oa.calc(l),Ba.calc(l),ka.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Q().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xc(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Wv(s,e){const t=1-s;return t*t*e}function Xv(s,e){return 2*(1-s)*s*e}function Yv(s,e){return s*s*e}function Cr(s,e,t,n){return Wv(s,e)+Xv(s,t)+Yv(s,n)}function qv(s,e){const t=1-s;return t*t*t*e}function jv(s,e){const t=1-s;return 3*t*t*s*e}function Kv(s,e){return 3*(1-s)*s*s*e}function Zv(s,e){return s*s*s*e}function Rr(s,e,t,n,i){return qv(s,e)+jv(s,t)+Kv(s,n)+Zv(s,i)}class Bu extends xn{constructor(e=new Ie,t=new Ie,n=new Ie,i=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ie){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,i.x,r.x,a.x,o.x),Rr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jv extends xn{constructor(e=new Q,t=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Q){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,i.x,r.x,a.x,o.x),Rr(e,i.y,r.y,a.y,o.y),Rr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ku extends xn{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qv extends xn{constructor(e=new Q,t=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zu extends xn{constructor(e=new Ie,t=new Ie,n=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ie){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,i.x,r.x,a.x),Cr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $v extends xn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Cr(e,i.x,r.x,a.x),Cr(e,i.y,r.y,a.y),Cr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gu extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(xc(o,l.x,c.x,u.x,f.x),xc(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ie().fromArray(i))}return this}}var Co=Object.freeze({__proto__:null,ArcCurve:Hv,CatmullRomCurve3:Vv,CubicBezierCurve:Bu,CubicBezierCurve3:Jv,EllipseCurve:Qo,LineCurve:ku,LineCurve3:Qv,QuadraticBezierCurve:zu,QuadraticBezierCurve3:$v,SplineCurve:Gu});class e_ extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Co[i.type]().fromJSON(i))}return this}}class Ro extends e_{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ku(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new zu(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Bu(this.currentPoint.clone(),new Ie(e,t),new Ie(n,i),new Ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Qo(e,t,n,i,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Is extends Ro{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Ro().fromJSON(i))}return this}}const t_={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Hu(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,f,h,d;if(n&&(r=a_(s,e,r,t)),s.length>80*t){o=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)f=s[g],h=s[g+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return Br(r,a,t,o,l,d,0),a}};function Hu(s,e,t,n,i){let r,a;if(i===v_(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Sc(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Sc(r,s[r],s[r+1],a);return a&&Zs(a,a.next)&&(zr(a),a=a.next),a}function gi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Zs(t,t.next)||mt(t.prev,t,t.next)===0)){if(zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Br(s,e,t,n,i,r,a){if(!s)return;!a&&r&&f_(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?i_(s,n,i,r):n_(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),zr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=r_(gi(s),e,t),Br(s,e,t,n,i,r,2)):a===2&&s_(s,e,t,n,i,r):Br(gi(s),e,t,n,i,r,1);break}}}function n_(s){const e=s.prev,t=s,n=s.next;if(mt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=i<r?i<a?i:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,h=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&ji(i,o,r,l,a,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function i_(s,e,t,n){const i=s.prev,r=s,a=s.next;if(mt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,u=i.y,f=r.y,h=a.y,d=o<l?o<c?o:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,v=o>l?o>c?o:c:l>c?l:c,p=u>f?u>h?u:h:f>h?f:h,m=Po(d,g,e,t,n),T=Po(v,p,e,t,n);let y=s.prevZ,M=s.nextZ;for(;y&&y.z>=m&&M&&M.z<=T;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&ji(o,u,l,f,c,h,y.x,y.y)&&mt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==i&&M!==a&&ji(o,u,l,f,c,h,M.x,M.y)&&mt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&ji(o,u,l,f,c,h,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=T;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==i&&M!==a&&ji(o,u,l,f,c,h,M.x,M.y)&&mt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function r_(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Zs(i,r)&&Vu(i,n,n.next,r)&&kr(i,r)&&kr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),zr(n),zr(n.next),n=s=r),n=n.next}while(n!==s);return gi(n)}function s_(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&p_(a,o)){let l=Wu(a,o);a=gi(a,a.next),l=gi(l,l.next),Br(a,e,t,n,i,r,0),Br(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function a_(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Hu(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(d_(c));for(i.sort(o_),r=0;r<i.length;r++)t=l_(i[r],t);return t}function o_(s,e){return s.x-e.x}function l_(s,e){const t=c_(s,e);if(!t)return e;const n=Wu(t,s);return gi(n,n.next),gi(t,t.next)}function c_(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const h=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,i=t.x<t.next.x?t:t.next,h===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,f;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ji(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),kr(t,s)&&(f<u||f===u&&(t.x>i.x||t.x===i.x&&u_(i,t)))&&(i=t,u=f)),t=t.next;while(t!==o);return i}function u_(s,e){return mt(s.prev,s,e.prev)<0&&mt(e.next,s,s.next)<0}function f_(s,e,t,n){let i=s;do i.z===0&&(i.z=Po(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,h_(i)}function h_(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Po(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function d_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ji(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function p_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!m_(s,e)&&(kr(s,e)&&kr(e,s)&&g_(s,e)&&(mt(s.prev,s,e.prev)||mt(s,e.prev,e))||Zs(s,e)&&mt(s.prev,s,s.next)>0&&mt(e.prev,e,e.next)>0)}function mt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Zs(s,e){return s.x===e.x&&s.y===e.y}function Vu(s,e,t,n){const i=Ms(mt(s,e,t)),r=Ms(mt(s,e,n)),a=Ms(mt(t,n,s)),o=Ms(mt(t,n,e));return!!(i!==r&&a!==o||i===0&&ys(s,t,e)||r===0&&ys(s,n,e)||a===0&&ys(t,s,n)||o===0&&ys(t,e,n))}function ys(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ms(s){return s>0?1:s<0?-1:0}function m_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Vu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function kr(s,e){return mt(s.prev,s,s.next)<0?mt(s,e,s.next)>=0&&mt(s,s.prev,e)>=0:mt(s,e,s.prev)<0||mt(s,s.next,e)<0}function g_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Wu(s,e){const t=new Uo(s.i,s.x,s.y),n=new Uo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sc(s,e,t,n){const i=new Uo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Uo(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function v_(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class $i{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return $i.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];yc(e),Mc(n,e);let a=e.length;t.forEach(yc);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Mc(n,t[l]);const o=t_.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function yc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class el extends _n{constructor(e=new Is([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new vn(i,3)),this.setAttribute("uv",new vn(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:__;let y,M=!1,D,C,w,b;m&&(y=m.getSpacedPoints(u),M=!0,h=!1,D=m.computeFrenetFrames(u,!1),C=new Q,w=new Q,b=new Q),h||(p=0,d=0,g=0,v=0);const S=o.extractPoints(c);let _=S.shape;const U=S.holes;if(!$i.isClockWise(_)){_=_.reverse();for(let A=0,he=U.length;A<he;A++){const ce=U[A];$i.isClockWise(ce)&&(U[A]=ce.reverse())}}const N=$i.triangulateShape(_,U),O=_;for(let A=0,he=U.length;A<he;A++){const ce=U[A];_=_.concat(ce)}function z(A,he,ce){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(he,ce)}const k=_.length,X=N.length;function Y(A,he,ce){let pe,$,Te;const ae=A.x-he.x,de=A.y-he.y,P=ce.x-A.x,x=ce.y-A.y,G=ae*ae+de*de,J=ae*x-de*P;if(Math.abs(J)>Number.EPSILON){const ie=Math.sqrt(G),ne=Math.sqrt(P*P+x*x),Ce=he.x-de/ie,fe=he.y+ae/ie,ge=ce.x-x/ne,Ae=ce.y+P/ne,me=((ge-Ce)*x-(Ae-fe)*P)/(ae*x-de*P);pe=Ce+ae*me-A.x,$=fe+de*me-A.y;const Ee=pe*pe+$*$;if(Ee<=2)return new Ie(pe,$);Te=Math.sqrt(Ee/2)}else{let ie=!1;ae>Number.EPSILON?P>Number.EPSILON&&(ie=!0):ae<-Number.EPSILON?P<-Number.EPSILON&&(ie=!0):Math.sign(de)===Math.sign(x)&&(ie=!0),ie?(pe=-de,$=ae,Te=Math.sqrt(G)):(pe=ae,$=de,Te=Math.sqrt(G/2))}return new Ie(pe/Te,$/Te)}const q=[];for(let A=0,he=O.length,ce=he-1,pe=A+1;A<he;A++,ce++,pe++)ce===he&&(ce=0),pe===he&&(pe=0),q[A]=Y(O[A],O[ce],O[pe]);const j=[];let I,V=q.concat();for(let A=0,he=U.length;A<he;A++){const ce=U[A];I=[];for(let pe=0,$=ce.length,Te=$-1,ae=pe+1;pe<$;pe++,Te++,ae++)Te===$&&(Te=0),ae===$&&(ae=0),I[pe]=Y(ce[pe],ce[Te],ce[ae]);j.push(I),V=V.concat(I)}for(let A=0;A<p;A++){const he=A/p,ce=d*Math.cos(he*Math.PI/2),pe=g*Math.sin(he*Math.PI/2)+v;for(let $=0,Te=O.length;$<Te;$++){const ae=z(O[$],q[$],pe);W(ae.x,ae.y,-ce)}for(let $=0,Te=U.length;$<Te;$++){const ae=U[$];I=j[$];for(let de=0,P=ae.length;de<P;de++){const x=z(ae[de],I[de],pe);W(x.x,x.y,-ce)}}}const se=g+v;for(let A=0;A<k;A++){const he=h?z(_[A],V[A],se):_[A];M?(w.copy(D.normals[0]).multiplyScalar(he.x),C.copy(D.binormals[0]).multiplyScalar(he.y),b.copy(y[0]).add(w).add(C),W(b.x,b.y,b.z)):W(he.x,he.y,0)}for(let A=1;A<=u;A++)for(let he=0;he<k;he++){const ce=h?z(_[he],V[he],se):_[he];M?(w.copy(D.normals[A]).multiplyScalar(ce.x),C.copy(D.binormals[A]).multiplyScalar(ce.y),b.copy(y[A]).add(w).add(C),W(b.x,b.y,b.z)):W(ce.x,ce.y,f/u*A)}for(let A=p-1;A>=0;A--){const he=A/p,ce=d*Math.cos(he*Math.PI/2),pe=g*Math.sin(he*Math.PI/2)+v;for(let $=0,Te=O.length;$<Te;$++){const ae=z(O[$],q[$],pe);W(ae.x,ae.y,f+ce)}for(let $=0,Te=U.length;$<Te;$++){const ae=U[$];I=j[$];for(let de=0,P=ae.length;de<P;de++){const x=z(ae[de],I[de],pe);M?W(x.x,x.y+y[u-1].y,y[u-1].x+ce):W(x.x,x.y,f+ce)}}}F(),B();function F(){const A=i.length/3;if(h){let he=0,ce=k*he;for(let pe=0;pe<X;pe++){const $=N[pe];oe($[2]+ce,$[1]+ce,$[0]+ce)}he=u+p*2,ce=k*he;for(let pe=0;pe<X;pe++){const $=N[pe];oe($[0]+ce,$[1]+ce,$[2]+ce)}}else{for(let he=0;he<X;he++){const ce=N[he];oe(ce[2],ce[1],ce[0])}for(let he=0;he<X;he++){const ce=N[he];oe(ce[0]+k*u,ce[1]+k*u,ce[2]+k*u)}}n.addGroup(A,i.length/3-A,0)}function B(){const A=i.length/3;let he=0;ee(O,he),he+=O.length;for(let ce=0,pe=U.length;ce<pe;ce++){const $=U[ce];ee($,he),he+=$.length}n.addGroup(A,i.length/3-A,1)}function ee(A,he){let ce=A.length;for(;--ce>=0;){const pe=ce;let $=ce-1;$<0&&($=A.length-1);for(let Te=0,ae=u+p*2;Te<ae;Te++){const de=k*Te,P=k*(Te+1),x=he+pe+de,G=he+$+de,J=he+$+P,ie=he+pe+P;Se(x,G,J,ie)}}}function W(A,he,ce){l.push(A),l.push(he),l.push(ce)}function oe(A,he,ce){ye(A),ye(he),ye(ce);const pe=i.length/3,$=T.generateTopUV(n,i,pe-3,pe-2,pe-1);xe($[0]),xe($[1]),xe($[2])}function Se(A,he,ce,pe){ye(A),ye(he),ye(pe),ye(he),ye(ce),ye(pe);const $=i.length/3,Te=T.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);xe(Te[0]),xe(Te[1]),xe(Te[3]),xe(Te[1]),xe(Te[2]),xe(Te[3])}function ye(A){i.push(l[A*3+0]),i.push(l[A*3+1]),i.push(l[A*3+2])}function xe(A){r.push(A.x),r.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return x_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Co[i.type]().fromJSON(i)),new el(n,e.options)}}const __={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Ie(r,a),new Ie(o,l),new Ie(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[i*3],d=e[i*3+1],g=e[i*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ie(a,1-l),new Ie(c,1-f),new Ie(h,1-g),new Ie(v,1-m)]:[new Ie(o,1-l),new Ie(u,1-f),new Ie(d,1-g),new Ie(p,1-m)]}};function x_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}const Vs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class S_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const y_=new S_;class Vr{constructor(e){this.manager=e!==void 0?e:y_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class M_ extends Error{constructor(e,t){super(e),this.response=t}}class E_ extends Vr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:n,onError:i});return}An[e]=[],An[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=An[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,g=d!==0;let v=0;const p=new ReadableStream({start(m){T();function T(){f.read().then(({done:y,value:M})=>{if(y)m.close();else{v+=M.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let C=0,w=u.length;C<w;C++){const b=u[C];b.onProgress&&b.onProgress(D)}m.enqueue(M),T()}},y=>{m.error(y)})}}});return new Response(p)}else throw new M_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Vs.add(e,c);const u=An[e];delete An[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=An[e];if(u===void 0)throw this.manager.itemError(e),c;delete An[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class b_ extends Vr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Fr("img");function l(){u(),Vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class T_ extends Vr{constructor(e){super(e)}load(e,t,n,i){const r=new Ft,a=new b_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class A_ extends _n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ec{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w_{constructor(){this.type="ShapePath",this.color=new st,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ro,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const T=[];for(let y=0,M=m.length;y<M;y++){const D=m[y],C=new Is;C.curves=D.curves,T.push(C)}return T}function n(m,T){const y=T.length;let M=!1;for(let D=y-1,C=0;C<y;D=C++){let w=T[D],b=T[C],S=b.x-w.x,_=b.y-w.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(w=T[C],S=-S,b=T[D],_=-_),m.y<w.y||m.y>b.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const U=_*(m.x-w.x)-S*(m.y-w.y);if(U===0)return!0;if(U<0)continue;M=!M}}else{if(m.y!==w.y)continue;if(b.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=b.x)return!0}}return M}const i=$i.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Is,l.curves=o.curves,c.push(l),c;let u=!i(r[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],g=0,v;h[g]=void 0,d[g]=[];for(let m=0,T=r.length;m<T;m++)o=r[m],v=o.getPoints(),a=i(v),a=e?!a:a,a?(!u&&h[g]&&g++,h[g]={s:new Is,p:v},h[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:v[0]});if(!h[0])return t(r);if(h.length>1){let m=!1,T=0;for(let y=0,M=h.length;y<M;y++)f[y]=[];for(let y=0,M=h.length;y<M;y++){const D=d[y];for(let C=0;C<D.length;C++){const w=D[C];let b=!0;for(let S=0;S<h.length;S++)n(w.p,h[S].p)&&(y!==S&&T++,b?(b=!1,f[S].push(w)):m=!0);b&&f[y].push(w)}}T>0&&m===!1&&(d=f)}let p;for(let m=0,T=h.length;m<T;m++){l=h[m].s,c.push(l),p=d[m];for(let y=0,M=p.length;y<M;y++)l.holes.push(p[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);class bc extends el{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}const Tc={type:"change"},za={type:"start"},Ac={type:"end"},Es=new yu,wc=new Vn,C_=Math.cos(70*Uh.DEG2RAD);class R_ extends vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",ge),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ge),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Tc),n.update(),r=i.NONE},this.update=function(){const E=new Q,K=new mi().setFromUnitVectors(e.up,new Q(0,1,0)),H=K.clone().invert(),re=new Q,be=new mi,we=new Q,Le=2*Math.PI;return function(Ze=null){const Be=n.object.position;E.copy(Be).sub(n.target),E.applyQuaternion(K),o.setFromVector3(E),n.autoRotate&&r===i.NONE&&L(_(Ze)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ke=n.minAzimuthAngle,$e=n.maxAzimuthAngle;isFinite(Ke)&&isFinite($e)&&(Ke<-Math.PI?Ke+=Le:Ke>Math.PI&&(Ke-=Le),$e<-Math.PI?$e+=Le:$e>Math.PI&&($e-=Le),Ke<=$e?o.theta=Math.max(Ke,Math.min($e,o.theta)):o.theta=o.theta>(Ke+$e)/2?Math.max(Ke,o.theta):Math.min($e,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let at=!1;if(n.zoomToCursor&&C||n.object.isOrthographicCamera)o.radius=j(o.radius);else{const it=o.radius;o.radius=j(o.radius*c),at=it!=o.radius}if(E.setFromSpherical(o),E.applyQuaternion(H),Be.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&C){let it=null;if(n.object.isPerspectiveCamera){const ft=E.length();it=j(ft*c);const gt=ft-it;n.object.position.addScaledVector(M,gt),n.object.updateMatrixWorld(),at=!!gt}else if(n.object.isOrthographicCamera){const ft=new Q(D.x,D.y,0);ft.unproject(n.object);const gt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),at=gt!==n.object.zoom;const yt=new Q(D.x,D.y,0);yt.unproject(n.object),n.object.position.sub(yt).add(ft),n.object.updateMatrixWorld(),it=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(it).add(n.object.position):(Es.origin.copy(n.object.position),Es.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Es.direction))<C_?e.lookAt(n.target):(wc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Es.intersectPlane(wc,n.target))))}else if(n.object.isOrthographicCamera){const it=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),it!==n.object.zoom&&(n.object.updateProjectionMatrix(),at=!0)}return c=1,C=!1,at||re.distanceToSquared(n.object.position)>a||8*(1-be.dot(n.object.quaternion))>a||we.distanceToSquared(n.target)>a?(n.dispatchEvent(Tc),re.copy(n.object.position),be.copy(n.object.quaternion),we.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ee),n.domElement.removeEventListener("pointerdown",de),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",x),n.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ge),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Ec,l=new Ec;let c=1;const u=new Q,f=new Ie,h=new Ie,d=new Ie,g=new Ie,v=new Ie,p=new Ie,m=new Ie,T=new Ie,y=new Ie,M=new Q,D=new Ie;let C=!1;const w=[],b={};let S=!1;function _(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function U(E){const K=Math.abs(E*.01);return Math.pow(.95,n.zoomSpeed*K)}function L(E){l.theta-=E}function N(E){l.phi-=E}const O=function(){const E=new Q;return function(H,re){E.setFromMatrixColumn(re,0),E.multiplyScalar(-H),u.add(E)}}(),z=function(){const E=new Q;return function(H,re){n.screenSpacePanning===!0?E.setFromMatrixColumn(re,1):(E.setFromMatrixColumn(re,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(H),u.add(E)}}(),k=function(){const E=new Q;return function(H,re){const be=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;E.copy(we).sub(n.target);let Le=E.length();Le*=Math.tan(n.object.fov/2*Math.PI/180),O(2*H*Le/be.clientHeight,n.object.matrix),z(2*re*Le/be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(H*(n.object.right-n.object.left)/n.object.zoom/be.clientWidth,n.object.matrix),z(re*(n.object.top-n.object.bottom)/n.object.zoom/be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(E,K){if(!n.zoomToCursor)return;C=!0;const H=n.domElement.getBoundingClientRect(),re=E-H.left,be=K-H.top,we=H.width,Le=H.height;D.x=re/we*2-1,D.y=-(be/Le)*2+1,M.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function I(E){f.set(E.clientX,E.clientY)}function V(E){q(E.clientX,E.clientX),m.set(E.clientX,E.clientY)}function se(E){g.set(E.clientX,E.clientY)}function F(E){h.set(E.clientX,E.clientY),d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const K=n.domElement;L(2*Math.PI*d.x/K.clientHeight),N(2*Math.PI*d.y/K.clientHeight),f.copy(h),n.update()}function B(E){T.set(E.clientX,E.clientY),y.subVectors(T,m),y.y>0?X(U(y.y)):y.y<0&&Y(U(y.y)),m.copy(T),n.update()}function ee(E){v.set(E.clientX,E.clientY),p.subVectors(v,g).multiplyScalar(n.panSpeed),k(p.x,p.y),g.copy(v),n.update()}function W(E){q(E.clientX,E.clientY),E.deltaY<0?Y(U(E.deltaY)):E.deltaY>0&&X(U(E.deltaY)),n.update()}function oe(E){let K=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),K=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),K=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),K=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),K=!0;break}K&&(E.preventDefault(),n.update())}function Se(E){if(w.length===1)f.set(E.pageX,E.pageY);else{const K=Ne(E),H=.5*(E.pageX+K.x),re=.5*(E.pageY+K.y);f.set(H,re)}}function ye(E){if(w.length===1)g.set(E.pageX,E.pageY);else{const K=Ne(E),H=.5*(E.pageX+K.x),re=.5*(E.pageY+K.y);g.set(H,re)}}function xe(E){const K=Ne(E),H=E.pageX-K.x,re=E.pageY-K.y,be=Math.sqrt(H*H+re*re);m.set(0,be)}function A(E){n.enableZoom&&xe(E),n.enablePan&&ye(E)}function he(E){n.enableZoom&&xe(E),n.enableRotate&&Se(E)}function ce(E){if(w.length==1)h.set(E.pageX,E.pageY);else{const H=Ne(E),re=.5*(E.pageX+H.x),be=.5*(E.pageY+H.y);h.set(re,be)}d.subVectors(h,f).multiplyScalar(n.rotateSpeed);const K=n.domElement;L(2*Math.PI*d.x/K.clientHeight),N(2*Math.PI*d.y/K.clientHeight),f.copy(h)}function pe(E){if(w.length===1)v.set(E.pageX,E.pageY);else{const K=Ne(E),H=.5*(E.pageX+K.x),re=.5*(E.pageY+K.y);v.set(H,re)}p.subVectors(v,g).multiplyScalar(n.panSpeed),k(p.x,p.y),g.copy(v)}function $(E){const K=Ne(E),H=E.pageX-K.x,re=E.pageY-K.y,be=Math.sqrt(H*H+re*re);T.set(0,be),y.set(0,Math.pow(T.y/m.y,n.zoomSpeed)),X(y.y),m.copy(T);const we=(E.pageX+K.x)*.5,Le=(E.pageY+K.y)*.5;q(we,Le)}function Te(E){n.enableZoom&&$(E),n.enablePan&&pe(E)}function ae(E){n.enableZoom&&$(E),n.enableRotate&&ce(E)}function de(E){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",x)),!ve(E)&&(ze(E),E.pointerType==="touch"?Ae(E):G(E)))}function P(E){n.enabled!==!1&&(E.pointerType==="touch"?me(E):J(E))}function x(E){switch(Pe(E),w.length){case 0:n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",x),n.dispatchEvent(Ac),r=i.NONE;break;case 1:const K=w[0],H=b[K];Ae({pointerId:K,pageX:H.x,pageY:H.y});break}}function G(E){let K;switch(E.button){case 0:K=n.mouseButtons.LEFT;break;case 1:K=n.mouseButtons.MIDDLE;break;case 2:K=n.mouseButtons.RIGHT;break;default:K=-1}switch(K){case Ei.DOLLY:if(n.enableZoom===!1)return;V(E),r=i.DOLLY;break;case Ei.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;se(E),r=i.PAN}else{if(n.enableRotate===!1)return;I(E),r=i.ROTATE}break;case Ei.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;I(E),r=i.ROTATE}else{if(n.enablePan===!1)return;se(E),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(za)}function J(E){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;F(E);break;case i.DOLLY:if(n.enableZoom===!1)return;B(E);break;case i.PAN:if(n.enablePan===!1)return;ee(E);break}}function ie(E){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(E.preventDefault(),n.dispatchEvent(za),W(ne(E)),n.dispatchEvent(Ac))}function ne(E){const K=E.deltaMode,H={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(K){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return E.ctrlKey&&!S&&(H.deltaY*=10),H}function Ce(E){E.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(E){E.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function ge(E){n.enabled===!1||n.enablePan===!1||oe(E)}function Ae(E){switch(Me(E),w.length){case 1:switch(n.touches.ONE){case bi.ROTATE:if(n.enableRotate===!1)return;Se(E),r=i.TOUCH_ROTATE;break;case bi.PAN:if(n.enablePan===!1)return;ye(E),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;A(E),r=i.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(E),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(za)}function me(E){switch(Me(E),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ce(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pe(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(E),n.update();break;default:r=i.NONE}}function Ee(E){n.enabled!==!1&&E.preventDefault()}function ze(E){w.push(E.pointerId)}function Pe(E){delete b[E.pointerId];for(let K=0;K<w.length;K++)if(w[K]==E.pointerId){w.splice(K,1);return}}function ve(E){for(let K=0;K<w.length;K++)if(w[K]==E.pointerId)return!0;return!1}function Me(E){let K=b[E.pointerId];K===void 0&&(K=new Ie,b[E.pointerId]=K),K.set(E.pageX,E.pageY)}function Ne(E){const K=E.pointerId===w[0]?w[1]:w[0];return b[K]}n.domElement.addEventListener("contextmenu",Ee),n.domElement.addEventListener("pointerdown",de),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",ie,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}class P_{constructor(e,t={}){this.enabled=!0;const n=t.defaultThickness!==void 0?t.defaultThickness:.003,i=new st().fromArray(t.defaultColor!==void 0?t.defaultColor:[0,0,0]),r=t.defaultAlpha!==void 0?t.defaultAlpha:1,a=t.defaultKeepAlive!==void 0?t.defaultKeepAlive:!1,o={},l=60,c={},u={},f={outlineThickness:{value:n},outlineColor:{value:i},outlineAlpha:{value:r}},h=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),d=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function g(){return new Dn({type:"OutlineEffect",uniforms:Zo.merge([ke.fog,ke.displacementmap,f]),vertexShader:h,fragmentShader:d,side:Nt})}function v(b){let S=o[b.uuid];return S===void 0&&(S={material:g(),used:!0,keepAlive:a,count:0},o[b.uuid]=S),S.used=!0,S.material}function p(b){const S=v(b);return c[S.uuid]=b,C(S,b),S}function m(b){const S=b.geometry,_=S!==void 0&&S.attributes.normal!==void 0;return b.isMesh===!0&&b.material!==void 0&&_===!0}function T(b){if(m(b)!==!1){if(Array.isArray(b.material))for(let S=0,_=b.material.length;S<_;S++)b.material[S]=p(b.material[S]);else b.material=p(b.material);u[b.uuid]=b.onBeforeRender,b.onBeforeRender=M}}function y(b){if(m(b)!==!1){if(Array.isArray(b.material))for(let S=0,_=b.material.length;S<_;S++)b.material[S]=c[b.material[S].uuid];else b.material=c[b.material.uuid];b.onBeforeRender=u[b.uuid]}}function M(b,S,_,U,L){const N=c[L.uuid];N!==void 0&&D(L,N)}function D(b,S){const _=S.userData.outlineParameters;b.uniforms.outlineAlpha.value=S.opacity,_!==void 0&&(_.thickness!==void 0&&(b.uniforms.outlineThickness.value=_.thickness),_.color!==void 0&&b.uniforms.outlineColor.value.fromArray(_.color),_.alpha!==void 0&&(b.uniforms.outlineAlpha.value=_.alpha)),S.displacementMap&&(b.uniforms.displacementMap.value=S.displacementMap,b.uniforms.displacementScale.value=S.displacementScale,b.uniforms.displacementBias.value=S.displacementBias)}function C(b,S){if(b.name==="invisible")return;const _=S.userData.outlineParameters;b.fog=S.fog,b.toneMapped=S.toneMapped,b.premultipliedAlpha=S.premultipliedAlpha,b.displacementMap=S.displacementMap,_!==void 0?(S.visible===!1?b.visible=!1:b.visible=_.visible!==void 0?_.visible:!0,b.transparent=_.alpha!==void 0&&_.alpha<1?!0:S.transparent,_.keepAlive!==void 0&&(o[S.uuid].keepAlive=_.keepAlive)):(b.transparent=S.transparent,b.visible=S.visible),(S.wireframe===!0||S.depthTest===!1)&&(b.visible=!1),S.clippingPlanes&&(b.clipping=!0,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.clipShadows=S.clipShadows),b.version=S.version}function w(){let b;b=Object.keys(c);for(let S=0,_=b.length;S<_;S++)c[b[S]]=void 0;b=Object.keys(u);for(let S=0,_=b.length;S<_;S++)u[b[S]]=void 0;b=Object.keys(o);for(let S=0,_=b.length;S<_;S++){const U=b[S];o[U].used===!1?(o[U].count++,o[U].keepAlive===!1&&o[U].count>l&&delete o[U]):(o[U].used=!1,o[U].count=0)}}this.render=function(b,S){if(this.enabled===!1){e.render(b,S);return}const _=e.autoClear;e.autoClear=this.autoClear,e.render(b,S),e.autoClear=_,this.renderOutline(b,S)},this.renderOutline=function(b,S){const _=e.autoClear,U=b.matrixWorldAutoUpdate,L=b.background,N=e.shadowMap.enabled;b.matrixWorldAutoUpdate=!1,b.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,b.traverse(T),e.render(b,S),b.traverse(y),w(),b.matrixWorldAutoUpdate=U,b.background=L,e.autoClear=_,e.shadowMap.enabled=N},this.autoClear=e.autoClear,this.domElement=e.domElement,this.shadowMap=e.shadowMap,this.clear=function(b,S,_){e.clear(b,S,_)},this.getPixelRatio=function(){return e.getPixelRatio()},this.setPixelRatio=function(b){e.setPixelRatio(b)},this.getSize=function(b){return e.getSize(b)},this.setSize=function(b,S,_){e.setSize(b,S,_)},this.setViewport=function(b,S,_,U){e.setViewport(b,S,_,U)},this.setScissor=function(b,S,_,U){e.setScissor(b,S,_,U)},this.setScissorTest=function(b){e.setScissorTest(b)},this.setRenderTarget=function(b){e.setRenderTarget(b)}}}class U_ extends Vr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new E_(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=r.parse(JSON.parse(o));t&&t(l)},n,i)}parse(e){return new L_(e)}}class L_{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=D_(e,t,this.data);for(let r=0,a=i.length;r<a;r++)n.push(...i[r].toShapes());return n}}function D_(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,a=[];let o=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)o=0,l-=r;else{const f=I_(u,i,o,l,t);o+=f.offsetX,a.push(f.path)}}return a}function I_(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const a=new w_;let o,l,c,u,f,h,d,g;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let p=0,m=v.length;p<m;)switch(v[p++]){case"m":o=v[p++]*e+t,l=v[p++]*e+n,a.moveTo(o,l);break;case"l":o=v[p++]*e+t,l=v[p++]*e+n,a.lineTo(o,l);break;case"q":c=v[p++]*e+t,u=v[p++]*e+n,f=v[p++]*e+t,h=v[p++]*e+n,a.quadraticCurveTo(f,h,c,u);break;case"b":c=v[p++]*e+t,u=v[p++]*e+n,f=v[p++]*e+t,h=v[p++]*e+n,d=v[p++]*e+t,g=v[p++]*e+n,a.bezierCurveTo(f,h,d,g,c,u);break}}return{offsetX:r.ha*e,path:a}}function N_(){var s=Object.create(null);function e(i,r){var a=i.id,o=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=s[h.id].value),h}),c=n("<"+o+">.init",c),u&&(u=n("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function t(i,r){var a,o=i.id,l=i.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=s[o].getTransferables&&s[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(d){console.error(d),r(d)}}}function n(i,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(i){var r=i.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function F_(s){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,n=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var Xu=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Xu=function(){return s},s},O_=0,B_=0,Ga=!1,Pr=Object.create(null),Ur=Object.create(null),Lo=Object.create(null);function lr(s){if((!s||typeof s.init!="function")&&!Ga)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,n=s.getTransferables,i=s.workerId;if(!Xu())return F_(s);i==null&&(i="#default");var r="workerModule"+ ++O_,a=s.name||r,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Ga=!0,c=lr({workerId:i,name:"<"+a+"> function dependency: "+c.name,init:`function(){return (
`+Ns(c)+`
)}`}),Ga=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!o){o=Cc(i,"registerModule",l.workerModuleData);var f=function(){o=null,Ur[i].delete(f)};(Ur[i]||(Ur[i]=new Set)).add(f)}return o.then(function(h){var d=h.isCallable;if(d)return Cc(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:a,dependencies:e,init:Ns(t),getTransferables:n&&Ns(n)},l}function k_(s){Ur[s]&&Ur[s].forEach(function(e){e()}),Pr[s]&&(Pr[s].terminate(),delete Pr[s])}function Ns(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function z_(s){var e=Pr[s];if(!e){var t=Ns(N_);e=Pr[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,a=Lo[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Lo[r],a(i)}}return e}function Cc(s,e,t){return new Promise(function(n,i){var r=++B_;Lo[r]=function(a){a.success?n(a.result):i(new Error("Error in worker "+e+" call: "+a.error))},z_(s).postMessage({messageId:r,action:e,data:t})})}function Yu(){var s=function(e){function t(q,j,I,V,se,F,B,ee){var W=1-B;ee.x=W*W*q+2*W*B*I+B*B*se,ee.y=W*W*j+2*W*B*V+B*B*F}function n(q,j,I,V,se,F,B,ee,W,oe){var Se=1-W;oe.x=Se*Se*Se*q+3*Se*Se*W*I+3*Se*W*W*se+W*W*W*B,oe.y=Se*Se*Se*j+3*Se*Se*W*V+3*Se*W*W*F+W*W*W*ee}function i(q,j){for(var I=/([MLQCZ])([^MLQCZ]*)/g,V,se,F,B,ee;V=I.exec(q);){var W=V[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(oe){return parseFloat(oe)});switch(V[1]){case"M":B=se=W[0],ee=F=W[1];break;case"L":(W[0]!==B||W[1]!==ee)&&j("L",B,ee,B=W[0],ee=W[1]);break;case"Q":{j("Q",B,ee,B=W[2],ee=W[3],W[0],W[1]);break}case"C":{j("C",B,ee,B=W[4],ee=W[5],W[0],W[1],W[2],W[3]);break}case"Z":(B!==se||ee!==F)&&j("L",B,ee,se,F);break}}}function r(q,j,I){I===void 0&&(I=16);var V={x:0,y:0};i(q,function(se,F,B,ee,W,oe,Se,ye,xe){switch(se){case"L":j(F,B,ee,W);break;case"Q":{for(var A=F,he=B,ce=1;ce<I;ce++)t(F,B,oe,Se,ee,W,ce/(I-1),V),j(A,he,V.x,V.y),A=V.x,he=V.y;break}case"C":{for(var pe=F,$=B,Te=1;Te<I;Te++)n(F,B,oe,Se,ye,xe,ee,W,Te/(I-1),V),j(pe,$,V.x,V.y),pe=V.x,$=V.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(q,j){var I=q.getContext?q.getContext("webgl",c):q,V=l.get(I);if(!V){let pe=function(x){var G=F[x];if(!G&&(G=F[x]=I.getExtension(x),!G))throw new Error(x+" not supported");return G},$=function(x,G){var J=I.createShader(G);return I.shaderSource(J,x),I.compileShader(J),J},Te=function(x,G,J,ie){if(!B[x]){var ne={},Ce={},fe=I.createProgram();I.attachShader(fe,$(G,I.VERTEX_SHADER)),I.attachShader(fe,$(J,I.FRAGMENT_SHADER)),I.linkProgram(fe),B[x]={program:fe,transaction:function(Ae){I.useProgram(fe),Ae({setUniform:function(Ee,ze){for(var Pe=[],ve=arguments.length-2;ve-- >0;)Pe[ve]=arguments[ve+2];var Me=Ce[ze]||(Ce[ze]=I.getUniformLocation(fe,ze));I["uniform"+Ee].apply(I,[Me].concat(Pe))},setAttribute:function(Ee,ze,Pe,ve,Me){var Ne=ne[Ee];Ne||(Ne=ne[Ee]={buf:I.createBuffer(),loc:I.getAttribLocation(fe,Ee),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Ne.buf),I.vertexAttribPointer(Ne.loc,ze,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Ne.loc),se?I.vertexAttribDivisor(Ne.loc,ve):pe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ne.loc,ve),Me!==Ne.data&&(I.bufferData(I.ARRAY_BUFFER,Me,Pe),Ne.data=Me)}})}}}B[x].transaction(ie)},ae=function(x,G){W++;try{I.activeTexture(I.TEXTURE0+W);var J=ee[x];J||(J=ee[x]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,J),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,J),G(J,W)}finally{W--}},de=function(x,G,J){var ie=I.createFramebuffer();oe.push(ie),I.bindFramebuffer(I.FRAMEBUFFER,ie),I.activeTexture(I.TEXTURE0+G),I.bindTexture(I.TEXTURE_2D,x),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,x,0);try{J(ie)}finally{I.deleteFramebuffer(ie),I.bindFramebuffer(I.FRAMEBUFFER,oe[--oe.length-1]||null)}},P=function(){F={},B={},ee={},W=-1,oe.length=0};var Se=pe,ye=$,xe=Te,A=ae,he=de,ce=P,se=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,F={},B={},ee={},W=-1,oe=[];I.canvas.addEventListener("webglcontextlost",function(x){P(),x.preventDefault()},!1),l.set(I,V={gl:I,isWebGL2:se,getExtension:pe,withProgram:Te,withTexture:ae,withTextureFramebuffer:de,handleContextLoss:P})}j(V)}function f(q,j,I,V,se,F,B,ee){B===void 0&&(B=15),ee===void 0&&(ee=null),u(q,function(W){var oe=W.gl,Se=W.withProgram,ye=W.withTexture;ye("copy",function(xe,A){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,se,F,0,oe.RGBA,oe.UNSIGNED_BYTE,j),Se("copy",a,o,function(he){var ce=he.setUniform,pe=he.setAttribute;pe("aUV",2,oe.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),ce("1i","image",A),oe.bindFramebuffer(oe.FRAMEBUFFER,ee||null),oe.disable(oe.BLEND),oe.colorMask(B&8,B&4,B&2,B&1),oe.viewport(I,V,se,F),oe.scissor(I,V,se,F),oe.drawArrays(oe.TRIANGLES,0,3)})})})}function h(q,j,I){var V=q.width,se=q.height;u(q,function(F){var B=F.gl,ee=new Uint8Array(V*se*4);B.readPixels(0,0,V,se,B.RGBA,B.UNSIGNED_BYTE,ee),q.width=j,q.height=I,f(B,ee,0,0,V,se)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(q,j,I,V,se,F){F===void 0&&(F=1);var B=new Uint8Array(q*j),ee=V[2]-V[0],W=V[3]-V[1],oe=[];r(I,function(pe,$,Te,ae){oe.push({x1:pe,y1:$,x2:Te,y2:ae,minX:Math.min(pe,Te),minY:Math.min($,ae),maxX:Math.max(pe,Te),maxY:Math.max($,ae)})}),oe.sort(function(pe,$){return pe.maxX-$.maxX});for(var Se=0;Se<q;Se++)for(var ye=0;ye<j;ye++){var xe=he(V[0]+ee*(Se+.5)/q,V[1]+W*(ye+.5)/j),A=Math.pow(1-Math.abs(xe)/se,F)/2;xe<0&&(A=1-A),A=Math.max(0,Math.min(255,Math.round(A*255))),B[ye*q+Se]=A}return B;function he(pe,$){for(var Te=1/0,ae=1/0,de=oe.length;de--;){var P=oe[de];if(P.maxX+ae<=pe)break;if(pe+ae>P.minX&&$-ae<P.maxY&&$+ae>P.minY){var x=m(pe,$,P.x1,P.y1,P.x2,P.y2);x<Te&&(Te=x,ae=Math.sqrt(Te))}}return ce(pe,$)&&(ae=-ae),ae}function ce(pe,$){for(var Te=0,ae=oe.length;ae--;){var de=oe[ae];if(de.maxX<=pe)break;var P=de.y1>$!=de.y2>$&&pe<(de.x2-de.x1)*($-de.y1)/(de.y2-de.y1)+de.x1;P&&(Te+=de.y1<de.y2?1:-1)}return Te!==0}}function v(q,j,I,V,se,F,B,ee,W,oe){F===void 0&&(F=1),ee===void 0&&(ee=0),W===void 0&&(W=0),oe===void 0&&(oe=0),p(q,j,I,V,se,F,B,null,ee,W,oe)}function p(q,j,I,V,se,F,B,ee,W,oe,Se){F===void 0&&(F=1),W===void 0&&(W=0),oe===void 0&&(oe=0),Se===void 0&&(Se=0);for(var ye=g(q,j,I,V,se,F),xe=new Uint8Array(ye.length*4),A=0;A<ye.length;A++)xe[A*4+Se]=ye[A];f(B,xe,W,oe,q,j,1<<3-Se,ee)}function m(q,j,I,V,se,F){var B=se-I,ee=F-V,W=B*B+ee*ee,oe=W?Math.max(0,Math.min(1,((q-I)*B+(j-V)*ee)/W)):0,Se=q-(I+oe*B),ye=j-(V+oe*ee);return Se*Se+ye*ye}var T=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:p}),y="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",M="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",D="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",C=new Float32Array([0,0,2,0,0,2]),w=null,b=!1,S={},_=new WeakMap;function U(q){if(!b&&!z(q))throw new Error("WebGL generation not supported")}function L(q,j,I,V,se,F,B){if(F===void 0&&(F=1),B===void 0&&(B=null),!B&&(B=w,!B)){var ee=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ee)throw new Error("OffscreenCanvas or DOM canvas not supported");B=w=ee.getContext("webgl",{depth:!1})}U(B);var W=new Uint8Array(q*j*4);u(B,function(xe){var A=xe.gl,he=xe.withTexture,ce=xe.withTextureFramebuffer;he("readable",function(pe,$){A.texImage2D(A.TEXTURE_2D,0,A.RGBA,q,j,0,A.RGBA,A.UNSIGNED_BYTE,null),ce(pe,$,function(Te){O(q,j,I,V,se,F,A,Te,0,0,0),A.readPixels(0,0,q,j,A.RGBA,A.UNSIGNED_BYTE,W)})})});for(var oe=new Uint8Array(q*j),Se=0,ye=0;Se<W.length;Se+=4)oe[ye++]=W[Se];return oe}function N(q,j,I,V,se,F,B,ee,W,oe){F===void 0&&(F=1),ee===void 0&&(ee=0),W===void 0&&(W=0),oe===void 0&&(oe=0),O(q,j,I,V,se,F,B,null,ee,W,oe)}function O(q,j,I,V,se,F,B,ee,W,oe,Se){F===void 0&&(F=1),W===void 0&&(W=0),oe===void 0&&(oe=0),Se===void 0&&(Se=0),U(B);var ye=[];r(I,function(xe,A,he,ce){ye.push(xe,A,he,ce)}),ye=new Float32Array(ye),u(B,function(xe){var A=xe.gl,he=xe.isWebGL2,ce=xe.getExtension,pe=xe.withProgram,$=xe.withTexture,Te=xe.withTextureFramebuffer,ae=xe.handleContextLoss;if($("rawDistances",function(de,P){(q!==de._lastWidth||j!==de._lastHeight)&&A.texImage2D(A.TEXTURE_2D,0,A.RGBA,de._lastWidth=q,de._lastHeight=j,0,A.RGBA,A.UNSIGNED_BYTE,null),pe("main",y,M,function(x){var G=x.setAttribute,J=x.setUniform,ie=!he&&ce("ANGLE_instanced_arrays"),ne=!he&&ce("EXT_blend_minmax");G("aUV",2,A.STATIC_DRAW,0,C),G("aLineSegment",4,A.DYNAMIC_DRAW,1,ye),J.apply(void 0,["4f","uGlyphBounds"].concat(V)),J("1f","uMaxDistance",se),J("1f","uExponent",F),Te(de,P,function(Ce){A.enable(A.BLEND),A.colorMask(!0,!0,!0,!0),A.viewport(0,0,q,j),A.scissor(0,0,q,j),A.blendFunc(A.ONE,A.ONE),A.blendEquationSeparate(A.FUNC_ADD,he?A.MAX:ne.MAX_EXT),A.clear(A.COLOR_BUFFER_BIT),he?A.drawArraysInstanced(A.TRIANGLES,0,3,ye.length/4):ie.drawArraysInstancedANGLE(A.TRIANGLES,0,3,ye.length/4)})}),pe("post",a,D,function(x){x.setAttribute("aUV",2,A.STATIC_DRAW,0,C),x.setUniform("1i","tex",P),A.bindFramebuffer(A.FRAMEBUFFER,ee),A.disable(A.BLEND),A.colorMask(Se===0,Se===1,Se===2,Se===3),A.viewport(W,oe,q,j),A.scissor(W,oe,q,j),A.drawArrays(A.TRIANGLES,0,3)})}),A.isContextLost())throw ae(),new Error("webgl context lost")})}function z(q){var j=!q||q===w?S:q.canvas||q,I=_.get(j);if(I===void 0){b=!0;var V=null;try{var se=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=L(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,q);I=F&&se.length===F.length&&F.every(function(B,ee){return B===se[ee]}),I||(V="bad trial run results",console.info(se,F))}catch(B){I=!1,V=B.message}V&&console.warn("WebGL SDF generation not supported:",V),b=!1,_.set(j,I)}return I}var k=Object.freeze({__proto__:null,generate:L,generateIntoCanvas:N,generateIntoFramebuffer:O,isSupported:z});function X(q,j,I,V,se,F){se===void 0&&(se=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1);try{return L.apply(k,arguments)}catch(B){return console.info("WebGL SDF generation failed, falling back to JS",B),g.apply(T,arguments)}}function Y(q,j,I,V,se,F,B,ee,W,oe){se===void 0&&(se=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1),ee===void 0&&(ee=0),W===void 0&&(W=0),oe===void 0&&(oe=0);try{return N.apply(k,arguments)}catch(Se){return console.info("WebGL SDF generation failed, falling back to JS",Se),v.apply(T,arguments)}}return e.forEachPathCommand=i,e.generate=X,e.generateIntoCanvas=Y,e.javascript=T,e.pathToLineSegments=r,e.webgl=k,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function G_(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(ae,de){n[ae]=1<<de+1,i[n[ae]]=ae}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,a=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function f(){if(!u){u=new Map;var ae=function(P){if(t.hasOwnProperty(P)){var x=0;t[P].split(",").forEach(function(G){var J=G.split("+"),ie=J[0],ne=J[1];ie=parseInt(ie,36),ne=ne?parseInt(ne,36):0,u.set(x+=ie,n[P]);for(var Ce=0;Ce<ne;Ce++)u.set(++x,n[P])})}};for(var de in t)ae(de)}}function h(ae){return f(),u.get(ae.codePointAt(0))||n.L}function d(ae){return i[h(ae)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(ae,de){var P=36,x=0,G=new Map,J=de&&new Map,ie;return ae.split(",").forEach(function ne(Ce){if(Ce.indexOf("+")!==-1)for(var fe=+Ce;fe--;)ne(ie);else{ie=Ce;var ge=Ce.split(">"),Ae=ge[0],me=ge[1];Ae=String.fromCodePoint(x+=parseInt(Ae,P)),me=String.fromCodePoint(x+=parseInt(me,P)),G.set(Ae,me),de&&J.set(me,Ae)}}),{map:G,reverseMap:J}}var p,m,T;function y(){if(!p){var ae=v(g.pairs,!0),de=ae.map,P=ae.reverseMap;p=de,m=P,T=v(g.canonical,!1).map}}function M(ae){return y(),p.get(ae)||null}function D(ae){return y(),m.get(ae)||null}function C(ae){return y(),T.get(ae)||null}var w=n.L,b=n.R,S=n.EN,_=n.ES,U=n.ET,L=n.AN,N=n.CS,O=n.B,z=n.S,k=n.ON,X=n.BN,Y=n.NSM,q=n.AL,j=n.LRO,I=n.RLO,V=n.LRE,se=n.RLE,F=n.PDF,B=n.LRI,ee=n.RLI,W=n.FSI,oe=n.PDI;function Se(ae,de){for(var P=125,x=new Uint32Array(ae.length),G=0;G<ae.length;G++)x[G]=h(ae[G]);var J=new Map;function ie(Ht,sn){var Vt=x[Ht];x[Ht]=sn,J.set(Vt,J.get(Vt)-1),Vt&o&&J.set(o,J.get(o)-1),J.set(sn,(J.get(sn)||0)+1),sn&o&&J.set(o,(J.get(o)||0)+1)}for(var ne=new Uint8Array(ae.length),Ce=new Map,fe=[],ge=null,Ae=0;Ae<ae.length;Ae++)ge||fe.push(ge={start:Ae,end:ae.length-1,level:de==="rtl"?1:de==="ltr"?0:ml(Ae,!1)}),x[Ae]&O&&(ge.end=Ae,ge=null);for(var me=se|V|I|j|r|oe|F|O,Ee=function(Ht){return Ht+(Ht&1?1:2)},ze=function(Ht){return Ht+(Ht&1?2:1)},Pe=0;Pe<fe.length;Pe++){ge=fe[Pe];var ve=[{_level:ge.level,_override:0,_isolate:0}],Me=void 0,Ne=0,Ye=0,E=0;J.clear();for(var K=ge.start;K<=ge.end;K++){var H=x[K];if(Me=ve[ve.length-1],J.set(H,(J.get(H)||0)+1),H&o&&J.set(o,(J.get(o)||0)+1),H&me)if(H&(se|V)){ne[K]=Me._level;var re=(H===se?ze:Ee)(Me._level);re<=P&&!Ne&&!Ye?ve.push({_level:re,_override:0,_isolate:0}):Ne||Ye++}else if(H&(I|j)){ne[K]=Me._level;var be=(H===I?ze:Ee)(Me._level);be<=P&&!Ne&&!Ye?ve.push({_level:be,_override:H&I?b:w,_isolate:0}):Ne||Ye++}else if(H&r){H&W&&(H=ml(K+1,!0)===1?ee:B),ne[K]=Me._level,Me._override&&ie(K,Me._override);var we=(H===ee?ze:Ee)(Me._level);we<=P&&Ne===0&&Ye===0?(E++,ve.push({_level:we,_override:0,_isolate:1,_isolInitIndex:K})):Ne++}else if(H&oe){if(Ne>0)Ne--;else if(E>0){for(Ye=0;!ve[ve.length-1]._isolate;)ve.pop();var Le=ve[ve.length-1]._isolInitIndex;Le!=null&&(Ce.set(Le,K),Ce.set(K,Le)),ve.pop(),E--}Me=ve[ve.length-1],ne[K]=Me._level,Me._override&&ie(K,Me._override)}else H&F?(Ne===0&&(Ye>0?Ye--:!Me._isolate&&ve.length>1&&(ve.pop(),Me=ve[ve.length-1])),ne[K]=Me._level):H&O&&(ne[K]=ge.level);else ne[K]=Me._level,Me._override&&H!==X&&ie(K,Me._override)}for(var Qe=[],Ze=null,Be=ge.start;Be<=ge.end;Be++){var Ke=x[Be];if(!(Ke&l)){var $e=ne[Be],at=Ke&r,it=Ke===oe;Ze&&$e===Ze._level?(Ze._end=Be,Ze._endsWithIsolInit=at):Qe.push(Ze={_start:Be,_end:Be,_level:$e,_startsWithPDI:it,_endsWithIsolInit:at})}}for(var ft=[],gt=0;gt<Qe.length;gt++){var yt=Qe[gt];if(!yt._startsWithPDI||yt._startsWithPDI&&!Ce.has(yt._start)){for(var Pt=[Ze=yt],pt=void 0;Ze&&Ze._endsWithIsolInit&&(pt=Ce.get(Ze._end))!=null;)for(var Mt=gt+1;Mt<Qe.length;Mt++)if(Qe[Mt]._start===pt){Pt.push(Ze=Qe[Mt]);break}for(var vt=[],zt=0;zt<Pt.length;zt++)for(var jn=Pt[zt],Qt=jn._start;Qt<=jn._end;Qt++)vt.push(Qt);for(var dn=ne[vt[0]],R=ge.level,Z=vt[0]-1;Z>=0;Z--)if(!(x[Z]&l)){R=ne[Z];break}var le=vt[vt.length-1],ue=ne[le],te=ge.level;if(!(x[le]&r)){for(var Ue=le+1;Ue<=ge.end;Ue++)if(!(x[Ue]&l)){te=ne[Ue];break}}ft.push({_seqIndices:vt,_sosType:Math.max(R,dn)%2?b:w,_eosType:Math.max(te,ue)%2?b:w})}}for(var De=0;De<ft.length;De++){var Ge=ft[De],_e=Ge._seqIndices,He=Ge._sosType,je=Ge._eosType,Xe=ne[_e[0]]&1?b:w;if(J.get(Y))for(var et=0;et<_e.length;et++){var Je=_e[et];if(x[Je]&Y){for(var ct=He,We=et-1;We>=0;We--)if(!(x[_e[We]]&l)){ct=x[_e[We]];break}ie(Je,ct&(r|oe)?k:ct)}}if(J.get(S))for(var Ve=0;Ve<_e.length;Ve++){var Oe=_e[Ve];if(x[Oe]&S)for(var ht=Ve-1;ht>=-1;ht--){var rt=ht===-1?He:x[_e[ht]];if(rt&a){rt===q&&ie(Oe,L);break}}}if(J.get(q))for(var Ot=0;Ot<_e.length;Ot++){var Sn=_e[Ot];x[Sn]&q&&ie(Sn,b)}if(J.get(_)||J.get(N))for(var Et=1;Et<_e.length-1;Et++){var Kn=_e[Et];if(x[Kn]&(_|N)){for(var ut=0,$t=0,Zn=Et-1;Zn>=0&&(ut=x[_e[Zn]],!!(ut&l));Zn--);for(var Ut=Et+1;Ut<_e.length&&($t=x[_e[Ut]],!!($t&l));Ut++);ut===$t&&(x[Kn]===_?ut===S:ut&(S|L))&&ie(Kn,ut)}}if(J.get(S))for(var Gt=0;Gt<_e.length;Gt++){var Qs=_e[Gt];if(x[Qs]&S){for(var Jn=Gt-1;Jn>=0&&x[_e[Jn]]&(U|l);Jn--)ie(_e[Jn],S);for(Gt++;Gt<_e.length&&x[_e[Gt]]&(U|l|S);Gt++)x[_e[Gt]]!==S&&ie(_e[Gt],S)}}if(J.get(U)||J.get(_)||J.get(N))for(var cr=0;cr<_e.length;cr++){var nl=_e[cr];if(x[nl]&(U|_|N)){ie(nl,k);for(var Wr=cr-1;Wr>=0&&x[_e[Wr]]&l;Wr--)ie(_e[Wr],k);for(var Xr=cr+1;Xr<_e.length&&x[_e[Xr]]&l;Xr++)ie(_e[Xr],k)}}if(J.get(S))for(var $s=0,il=He;$s<_e.length;$s++){var rl=_e[$s],ea=x[rl];ea&S?il===w&&ie(rl,w):ea&a&&(il=ea)}if(J.get(o)){var ur=b|S|L,sl=ur|w,Yr=[];{for(var Si=[],yi=0;yi<_e.length;yi++)if(x[_e[yi]]&o){var fr=ae[_e[yi]],al=void 0;if(M(fr)!==null)if(Si.length<63)Si.push({char:fr,seqIndex:yi});else break;else if((al=D(fr))!==null)for(var hr=Si.length-1;hr>=0;hr--){var ta=Si[hr].char;if(ta===al||ta===D(C(fr))||M(C(ta))===fr){Yr.push([Si[hr].seqIndex,yi]),Si.length=hr;break}}}Yr.sort(function(Ht,sn){return Ht[0]-sn[0]})}for(var na=0;na<Yr.length;na++){for(var ol=Yr[na],qr=ol[0],ia=ol[1],ll=!1,rn=0,ra=qr+1;ra<ia;ra++){var cl=_e[ra];if(x[cl]&sl){ll=!0;var ul=x[cl]&ur?b:w;if(ul===Xe){rn=ul;break}}}if(ll&&!rn){rn=He;for(var sa=qr-1;sa>=0;sa--){var fl=_e[sa];if(x[fl]&sl){var hl=x[fl]&ur?b:w;hl!==Xe?rn=hl:rn=Xe;break}}}if(rn){if(x[_e[qr]]=x[_e[ia]]=rn,rn!==Xe){for(var dr=qr+1;dr<_e.length;dr++)if(!(x[_e[dr]]&l)){h(ae[_e[dr]])&Y&&(x[_e[dr]]=rn);break}}if(rn!==Xe){for(var pr=ia+1;pr<_e.length;pr++)if(!(x[_e[pr]]&l)){h(ae[_e[pr]])&Y&&(x[_e[pr]]=rn);break}}}}for(var In=0;In<_e.length;In++)if(x[_e[In]]&o){for(var dl=In,aa=In,oa=He,mr=In-1;mr>=0;mr--)if(x[_e[mr]]&l)dl=mr;else{oa=x[_e[mr]]&ur?b:w;break}for(var pl=je,gr=In+1;gr<_e.length;gr++)if(x[_e[gr]]&(o|l))aa=gr;else{pl=x[_e[gr]]&ur?b:w;break}for(var la=dl;la<=aa;la++)x[_e[la]]=oa===pl?oa:Xe;In=aa}}}for(var Xt=ge.start;Xt<=ge.end;Xt++){var ef=ne[Xt],jr=x[Xt];if(ef&1?jr&(w|S|L)&&ne[Xt]++:jr&b?ne[Xt]++:jr&(L|S)&&(ne[Xt]+=2),jr&l&&(ne[Xt]=Xt===0?ge.level:ne[Xt-1]),Xt===ge.end||h(ae[Xt])&(z|O))for(var Kr=Xt;Kr>=0&&h(ae[Kr])&c;Kr--)ne[Kr]=ge.level}}return{levels:ne,paragraphs:fe};function ml(Ht,sn){for(var Vt=Ht;Vt<ae.length;Vt++){var Nn=x[Vt];if(Nn&(b|q))return 1;if(Nn&(O|w)||sn&&Nn===oe)return 0;if(Nn&r){var gl=tf(Vt);Vt=gl===-1?ae.length:gl}}return 0}function tf(Ht){for(var sn=1,Vt=Ht+1;Vt<ae.length;Vt++){var Nn=x[Vt];if(Nn&O)break;if(Nn&oe){if(--sn===0)return Vt}else Nn&r&&sn++}return-1}}var ye="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",xe;function A(){if(!xe){var ae=v(ye,!0),de=ae.map,P=ae.reverseMap;P.forEach(function(x,G){de.set(G,x)}),xe=de}}function he(ae){return A(),xe.get(ae)||null}function ce(ae,de,P,x){var G=ae.length;P=Math.max(0,P==null?0:+P),x=Math.min(G-1,x==null?G-1:+x);for(var J=new Map,ie=P;ie<=x;ie++)if(de[ie]&1){var ne=he(ae[ie]);ne!==null&&J.set(ie,ne)}return J}function pe(ae,de,P,x){var G=ae.length;P=Math.max(0,P==null?0:+P),x=Math.min(G-1,x==null?G-1:+x);var J=[];return de.paragraphs.forEach(function(ie){var ne=Math.max(P,ie.start),Ce=Math.min(x,ie.end);if(ne<Ce){for(var fe=de.levels.slice(ne,Ce+1),ge=Ce;ge>=ne&&h(ae[ge])&c;ge--)fe[ge]=ie.level;for(var Ae=ie.level,me=1/0,Ee=0;Ee<fe.length;Ee++){var ze=fe[Ee];ze>Ae&&(Ae=ze),ze<me&&(me=ze|1)}for(var Pe=Ae;Pe>=me;Pe--)for(var ve=0;ve<fe.length;ve++)if(fe[ve]>=Pe){for(var Me=ve;ve+1<fe.length&&fe[ve+1]>=Pe;)ve++;ve>Me&&J.push([Me+ne,ve+ne])}}}),J}function $(ae,de,P,x){var G=Te(ae,de,P,x),J=[].concat(ae);return G.forEach(function(ie,ne){J[ne]=(de.levels[ie]&1?he(ae[ie]):null)||ae[ie]}),J.join("")}function Te(ae,de,P,x){for(var G=pe(ae,de,P,x),J=[],ie=0;ie<ae.length;ie++)J[ie]=ie;return G.forEach(function(ne){for(var Ce=ne[0],fe=ne[1],ge=J.slice(Ce,fe+1),Ae=ge.length;Ae--;)J[fe-Ae]=ge[Ae]}),J}return e.closingToOpeningBracket=D,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=C,e.getEmbeddingLevels=Se,e.getMirroredCharacter=he,e.getMirroredCharactersMap=ce,e.getReorderSegments=pe,e.getReorderedIndices=Te,e.getReorderedString=$,e.openingToClosingBracket=M,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const qu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Do(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=tt[i];return r?Do(r):n}return s.replace(e,t)}const Rt=[];for(let s=0;s<256;s++)Rt[s]=(s<16?"0":"")+s.toString(16);function H_(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toUpperCase()}const ri=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},V_=Date.now(),Rc=new WeakMap,Pc=new Map;let W_=1e10;function Io(s,e){const t=j_(e);let n=Rc.get(s);if(n||Rc.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=Pc[f];if(!h){const d=X_(this,c,e,t);h=Pc[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,ri(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-V_}}),this[i]&&this[i](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:W_++}),u.uuid=H_(),u.uniforms=ri({},c.uniforms,e.uniforms),u.defines=ri({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=ri({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(ri(this.extensions,c.extensions),ri(this.defines,c.defines),ri(this.uniforms,Zo.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Io(s.isDerivedMaterial?s.getDepthMaterial():new Fu({depthPacking:mu}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Io(s.isDerivedMaterial?s.getDistanceMaterial():new Ou,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return n[t]=a,new a}function X_(s,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=n;if(r=r||"",a=a||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=Do(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Do(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(h){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(v.push(p),"")),f=`${h}
${v.join(`
`)}
${f}`}if(g){const v=`
uniform float ${g};
`;r=v+r,c=v+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,p,m,T)=>/\battribute\s+vec[23]\s+$/.test(T.substr(0,m))?p:`troika_${p}_${i}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=Uc(e,i,r,a,o),t=Uc(t,i,c,u,f),{vertexShader:e,fragmentShader:t}}function Uc(s,e,t,n,i){return(n||i||t)&&(s=s.replace(qu,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function Y_(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let q_=0;const Lc=new Map;function j_(s){const e=JSON.stringify(s,Y_);let t=Lc.get(e);return t==null&&Lc.set(e,t=++q_),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function K_(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(i){var r=e._bin,a=new Uint8Array(i);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(a,o);o+=4,c.push(e._readFont(a,f))}return c}return[e._readFont(a,0)]},_readFont:function(i,r){var a=e._bin,o=r;a.readFixed(i,r),r+=4;var l=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:o},f={},h=0;h<l;h++){var d=a.readASCII(i,r,4);r+=4,a.readUint(i,r),r+=4;var g=a.readUint(i,r);r+=4;var v=a.readUint(i,r);r+=4,f[d]={offset:g,length:v}}for(h=0;h<c.length;h++){var p=c[h];f[p]&&(u[p.trim()]=e[p.trim()].parse(i,f[p].offset,f[p].length,u))}return u},_tabOffset:function(i,r,a){for(var o=e._bin,l=o.readUshort(i,a+4),c=a+12,u=0;u<l;u++){var f=o.readASCII(i,c,4);c+=4,o.readUint(i,c),c+=4;var h=o.readUint(i,c);if(c+=4,o.readUint(i,c),c+=4,f==r)return h}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(i,r+2*l));return o},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(i[r+l]);return o},readUnicode:function(i,r,a){for(var o="",l=0;l<a;l++){var c=i[r++]<<8|i[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,a){var o=e._bin._tdec;return o&&r==0&&a==i.length?o.decode(i):e._bin.readASCII(i,r,a)},readBytes:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(i[r+l]);return o},readASCIIArray:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(i[r+l]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,a,o,l){var c=e._bin,u={},f=r;c.readFixed(i,r),r+=4;var h=c.readUshort(i,r);r+=2;var d=c.readUshort(i,r);r+=2;var g=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,f+h),u.featureList=e._lctf.readFeatureList(i,f+d),u.lookupList=e._lctf.readLookupList(i,f+g,l),u},e._lctf.readLookupList=function(i,r,a){var o=e._bin,l=r,c=[],u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var h=o.readUshort(i,r);r+=2;var d=e._lctf.readLookupTable(i,l+h,a);c.push(d)}return c},e._lctf.readLookupTable=function(i,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(i,r),r+=2,c.flag=o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var d=o.readUshort(i,r);r+=2;var g=a(i,f,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(i){for(var r=0,a=0;a<32;a++)i>>>a&1&&r++;return r},e._lctf.readClassDef=function(i,r){var a=e._bin,o=[],l=a.readUshort(i,r);if(r+=2,l==1){var c=a.readUshort(i,r);r+=2;var u=a.readUshort(i,r);r+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(a.readUshort(i,r)),r+=2}if(l==2){var h=a.readUshort(i,r);for(r+=2,f=0;f<h;f++)o.push(a.readUshort(i,r)),r+=2,o.push(a.readUshort(i,r)),r+=2,o.push(a.readUshort(i,r)),r+=2}return o},e._lctf.getInterval=function(i,r){for(var a=0;a<i.length;a+=3){var o=i[a],l=i[a+1];if(i[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(i,r){var a=e._bin,o={};o.fmt=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(i,r,l)),o.fmt==2&&(o.tab=a.readUshorts(i,r,3*l)),o},e._lctf.coverageIndex=function(i,r){var a=i.tab;if(i.fmt==1)return a.indexOf(r);if(i.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=a.readASCII(i,r,4);r+=4;var h=a.readUshort(i,r);r+=2;var d=e._lctf.readFeatureTable(i,o+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(i,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(a.readUshort(i,r+2*f));return l},e._lctf.readScriptList=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=a.readASCII(i,r,4);r+=4;var h=a.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(i,o+h)}return l},e._lctf.readScriptTable=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,o+c));var u=a.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var h=a.readASCII(i,r,4);r+=4;var d=a.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readLangSysTable(i,o+d)}return l},e._lctf.readLangSysTable=function(i,r){var a=e._bin,o={};a.readUshort(i,r),r+=2,o.reqFeature=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);return r+=2,o.features=a.readUshorts(i,r,l),o},e.CFF={},e.CFF.parse=function(i,r,a){var o=e._bin;(i=new Uint8Array(i.buffer,r,a))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(i,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(i,r+f[u],r+f[u+1]));r+=f[f.length-1];var d=h[0],g=[];r=e.CFF.readIndex(i,r,g);var v=[];for(u=0;u<g.length-1;u++)v.push(o.readASCII(i,r+g[u],g[u+1]-g[u]));if(r+=g[g.length-1],e.CFF.readSubrs(i,r,d),d.CharStrings){r=d.CharStrings,g=[],r=e.CFF.readIndex(i,r,g);var p=[];for(u=0;u<g.length-1;u++)p.push(o.readBytes(i,r+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(i,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var T=e.CFF.readDict(i,r+m[u],r+m[u+1]);e.CFF._readFDict(i,T,v),d.FDArray.push(T)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var y=i[r];if(r++,y!=3)throw y;var M=o.readUshort(i,r);for(r+=2,u=0;u<M+1;u++)d.FDSelect.push(o.readUshort(i,r),i[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,v),d},e.CFF._readFDict=function(i,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(i,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(i,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var f=0;f<l.length-1;f++)a.Subrs.push(o.readBytes(i,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var a=0;a<i.charset.length;a++)if(i.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,a){e._bin;var o=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)o.push(i[r+u]);return o},e.CFF.readCharset=function(i,r,a){var o=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<a;u++){var f=o.readUshort(i,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){f=o.readUshort(i,r),r+=2;var h=0;for(c==1?(h=i[r],r++):(h=o.readUshort(i,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(i,r,a){var o=e._bin,l=o.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)a.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,a){var o=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(i,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(i,r+1)/65535,u=5),a.val=h??"o"+f,a.size=u},e.CFF.readCharString=function(i,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(i,r+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(i,r+1)/65535,h=5),c.push(g??"o"+d),r+=h}return c},e.CFF.readDict=function(i,r,a){for(var o=e._bin,l={},c=[];r<a;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,d=null,g=null;if(u==28&&(g=o.readShort(i,r+1),h=3),u==29&&(g=o.readInt(i,r+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=o.readInt(i,r+1)/65535,h=5,"unknown number";if(u==30){var v=[];for(h=1;;){var p=i[r+h];h++;var m=p>>4,T=15&p;if(m!=15&&v.push(m),T!=15&&v.push(T),T==15)break}for(var y="",M=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],D=0;D<v.length;D++)y+=M[v[D]];g=parseFloat(y)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),r+=h}return l},e.cmap={},e.cmap.parse=function(i,r,a){i=new Uint8Array(i.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(i,r);r+=2;var d=o.readUshort(i,r);r+=2;var g=o.readUint(i,r);r+=4;var v="p"+h+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var T=o.readUshort(i,g);T==0?m=e.cmap.parse0(i,g):T==4?m=e.cmap.parse4(i,g):T==6?m=e.cmap.parse6(i,g):T==12?m=e.cmap.parse12(i,g):console.debug("unknown format: "+T,h,d,g),l.tables.push(m)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=p}return l},e.cmap.parse0=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(i[r+c]);return o},e.cmap.parse4=function(i,r){var a=e._bin,o=r,l={};l.format=a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;var f=u/2;l.searchRange=a.readUshort(i,r),r+=2,l.entrySelector=a.readUshort(i,r),r+=2,l.rangeShift=a.readUshort(i,r),r+=2,l.endCount=a.readUshorts(i,r,f),r+=2*f,r+=2,l.startCount=a.readUshorts(i,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(a.readShort(i,r)),r+=2;for(l.idRangeOffset=a.readUshorts(i,r,f),r+=2*f,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,o.firstCode=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(i,r)),r+=2;return o},e.cmap.parse12=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2,r+=2,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4;var l=a.readUint(i,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=a.readUint(i,u+0),h=a.readUint(i,u+4),d=a.readUint(i,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(i,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var a=e._bin,o=i._data,l=e._tabOffset(o,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var f=a.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=a.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var v=0;v<g;v++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var T=0,y=0;for(u=0;u<h;u++)T+=c.xs[u],y+=c.ys[u],c.xs[u]=T,c.ys[u]=y}else{var M;c.parts=[];do{M=a.readUshort(o,l),l+=2;var D={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(D),D.glyphIndex=a.readUshort(o,l),l+=2,1&M){var C=a.readShort(o,l);l+=2;var w=a.readShort(o,l);l+=2}else C=a.readInt8(o,l),l++,w=a.readInt8(o,l),l++;2&M?(D.m.tx=C,D.m.ty=w):(D.p1=C,D.p2=w),8&M?(D.m.a=D.m.d=a.readF2dot14(o,l),l+=2):64&M?(D.m.a=a.readF2dot14(o,l),l+=2,D.m.d=a.readF2dot14(o,l),l+=2):128&M&&(D.m.a=a.readF2dot14(o,l),l+=2,D.m.b=a.readF2dot14(o,l),l+=2,D.m.c=a.readF2dot14(o,l),l+=2,D.m.d=a.readF2dot14(o,l),l+=2)}while(32&M);if(256&M){var b=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<b;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(i,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,r,a,o){return e._lctf.parse(i,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(i,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(i,a);a+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(i,a,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(i,a),a+=2;var d=l.readUshort(i,a);a+=2;var g=e._lctf.numOfOnes(h),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(i,a);a+=2;for(var m=0;m<p;m++){var T=c+l.readUshort(i,a);a+=2;var y=l.readUshort(i,T);T+=2;for(var M=[],D=0;D<y;D++){var C=l.readUshort(i,T);T+=2,h!=0&&(L=e.GPOS.readValueRecord(i,T,h),T+=2*g),d!=0&&(N=e.GPOS.readValueRecord(i,T,d),T+=2*v),M.push({gid2:C,val1:L,val2:N})}u.pairsets.push(M)}}if(u.fmt==2){var w=l.readUshort(i,a);a+=2;var b=l.readUshort(i,a);a+=2;var S=l.readUshort(i,a);a+=2;var _=l.readUshort(i,a);for(a+=2,u.classDef1=e._lctf.readClassDef(i,c+w),u.classDef2=e._lctf.readClassDef(i,c+b),u.matrix=[],m=0;m<S;m++){var U=[];for(D=0;D<_;D++){var L=null,N=null;h!=0&&(L=e.GPOS.readValueRecord(i,a,h),a+=2*g),d!=0&&(N=e.GPOS.readValueRecord(i,a,d),a+=2*v),U.push({val1:L,val2:N})}u.matrix.push(U)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var O=l.readUshort(i,a);a+=2;var z=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=O;else if(o.ltype!=O)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,c+z)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(i,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(i,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(i,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(i,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(i,r,a){var o=e._bin,l=[],c=r,u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<a;d++)h.push(e.GPOS.readAnchorRecord(i,c+o.readUshort(i,r))),r+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(i,r){var a=e._bin,o=[],l=r,c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(i,a.readUshort(i,r+2)+l);f.markClass=a.readUshort(i,r),o.push(f),r+=4}return o},e.GPOS.readAnchorRecord=function(i,r){var a=e._bin,o={};return o.fmt=a.readUshort(i,r),o.x=a.readShort(i,r+2),o.y=a.readShort(i,r+4),o},e.GSUB={},e.GSUB.parse=function(i,r,a,o){return e._lctf.parse(i,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(i,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,a),a+=2;else if(u.fmt==2){var h=l.readUshort(i,a);a+=2,u.newg=l.readUshorts(i,a,h),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){h=l.readUshort(i,a),a+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(i,a)+c;a+=2;var v=l.readUshort(i,g);u.seqs.push(l.readUshorts(i,g+2,v))}}else if(r==4)for(u.vals=[],h=l.readUshort(i,a),a+=2,d=0;d<h;d++){var p=l.readUshort(i,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(i,a);a+=2,u.cDef=e._lctf.readClassDef(i,c+m),u.scset=[];var T=l.readUshort(i,a);for(a+=2,d=0;d<T;d++){var y=l.readUshort(i,a);a+=2,u.scset.push(y==0?null:e.GSUB.readSubClassSet(i,c+y))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(i,a),a+=2;for(var M=[],D=0;D<h;D++)M.push(e._lctf.readCoverage(i,c+l.readUshort(i,a+2*D)));a+=2*h,d==0&&(u.backCvg=M),d==1&&(u.inptCvg=M),d==2&&(u.ahedCvg=M)}h=l.readUshort(i,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,a,h)}}else{if(r==7&&u.fmt==1){var C=l.readUshort(i,a);a+=2;var w=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=C;else if(o.ltype!=C)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,c+w)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var a=e._bin.readUshort,o=r,l=[],c=a(i,r);r+=2;for(var u=0;u<c;u++){var f=a(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,o+f))}return l},e.GSUB.readSubClassRule=function(i,r){var a=e._bin.readUshort,o={},l=a(i,r),c=a(i,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(i,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),o},e.GSUB.readSubstLookupRecords=function(i,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(i,r),o(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=a.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,o+f))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(i,r);r+=2,c==1&&u--,o[l[c]]=a.readUshorts(i,r,u),r+=2*o[l[c]].length}return u=a.readUshort(i,r),r+=2,o.subst=a.readUshorts(i,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=a.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,o+f))}return l},e.GSUB.readLigature=function(i,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(i,r)),r+=2;return o},e.head={},e.head.parse=function(i,r,a){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.fontRevision=o.readFixed(i,r),r+=4,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4,l.flags=o.readUshort(i,r),r+=2,l.unitsPerEm=o.readUshort(i,r),r+=2,l.created=o.readUint64(i,r),r+=8,l.modified=o.readUint64(i,r),r+=8,l.xMin=o.readShort(i,r),r+=2,l.yMin=o.readShort(i,r),r+=2,l.xMax=o.readShort(i,r),r+=2,l.yMax=o.readShort(i,r),r+=2,l.macStyle=o.readUshort(i,r),r+=2,l.lowestRecPPEM=o.readUshort(i,r),r+=2,l.fontDirectionHint=o.readShort(i,r),r+=2,l.indexToLocFormat=o.readShort(i,r),r+=2,l.glyphDataFormat=o.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,a){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.ascender=o.readShort(i,r),r+=2,l.descender=o.readShort(i,r),r+=2,l.lineGap=o.readShort(i,r),r+=2,l.advanceWidthMax=o.readUshort(i,r),r+=2,l.minLeftSideBearing=o.readShort(i,r),r+=2,l.minRightSideBearing=o.readShort(i,r),r+=2,l.xMaxExtent=o.readShort(i,r),r+=2,l.caretSlopeRise=o.readShort(i,r),r+=2,l.caretSlopeRun=o.readShort(i,r),r+=2,l.caretOffset=o.readShort(i,r),r+=2,r+=8,l.metricDataFormat=o.readShort(i,r),r+=2,l.numberOfHMetrics=o.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,f=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(i,r,a,o){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,a,o);var u=l.readUshort(i,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,a=l.readUshort(i,r),r+=2;var d=l.readUshort(i,r);r+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(i,r,f)}return f},e.kern.parseV1=function(i,r,a,o){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(i,r),r+=4;var h=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,a){var o=e._bin,l=-1,c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var f=o.readUshort(i,r);r+=2;var h=o.readUshort(i,r);r+=2;var d=o.readShort(i,r);r+=2,f!=l&&(a.glyph1.push(f),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return r},e.loca={},e.loca.parse=function(i,r,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(i,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(i,r+(h<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,a){var o=e._bin,l={},c=o.readUint(i,r);return r+=4,l.numGlyphs=o.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(i,r),r+=2,l.maxContours=o.readUshort(i,r),r+=2,l.maxCompositePoints=o.readUshort(i,r),r+=2,l.maxCompositeContours=o.readUshort(i,r),r+=2,l.maxZones=o.readUshort(i,r),r+=2,l.maxTwilightPoints=o.readUshort(i,r),r+=2,l.maxStorage=o.readUshort(i,r),r+=2,l.maxFunctionDefs=o.readUshort(i,r),r+=2,l.maxInstructionDefs=o.readUshort(i,r),r+=2,l.maxStackElements=o.readUshort(i,r),r+=2,l.maxSizeOfInstructions=o.readUshort(i,r),r+=2,l.maxComponentElements=o.readUshort(i,r),r+=2,l.maxComponentDepth=o.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,a){var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,d=0;d<c;d++){var g=o.readUshort(i,r);r+=2;var v=o.readUshort(i,r);r+=2;var p=o.readUshort(i,r);r+=2;var m=o.readUshort(i,r);r+=2;var T=o.readUshort(i,r);r+=2;var y=o.readUshort(i,r);r+=2;var M,D=f[m],C=h+12*c+y;if(g==0)M=o.readUnicode(i,C,T/2);else if(g==3&&v==0)M=o.readUnicode(i,C,T/2);else if(v==0)M=o.readASCII(i,C,T);else if(v==1)M=o.readUnicode(i,C,T/2);else if(v==3)M=o.readUnicode(i,C,T/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;M=o.readASCII(i,C,T),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var w="p"+g+","+p.toString(16);l[w]==null&&(l[w]={}),l[w][D!==void 0?D:m]=M,l[w]._lang=p}for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==1033)return l[b];for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==0)return l[b];for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==3084)return l[b];for(var b in l)if(l[b].postScriptName!=null)return l[b];for(var b in l){u=b;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,a){var o=e._bin.readUshort(i,r);r+=2;var l={};if(o==0)e["OS/2"].version0(i,r,l);else if(o==1)e["OS/2"].version1(i,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(i,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(i,r),r+=2,a.usWeightClass=o.readUshort(i,r),r+=2,a.usWidthClass=o.readUshort(i,r),r+=2,a.fsType=o.readUshort(i,r),r+=2,a.ySubscriptXSize=o.readShort(i,r),r+=2,a.ySubscriptYSize=o.readShort(i,r),r+=2,a.ySubscriptXOffset=o.readShort(i,r),r+=2,a.ySubscriptYOffset=o.readShort(i,r),r+=2,a.ySuperscriptXSize=o.readShort(i,r),r+=2,a.ySuperscriptYSize=o.readShort(i,r),r+=2,a.ySuperscriptXOffset=o.readShort(i,r),r+=2,a.ySuperscriptYOffset=o.readShort(i,r),r+=2,a.yStrikeoutSize=o.readShort(i,r),r+=2,a.yStrikeoutPosition=o.readShort(i,r),r+=2,a.sFamilyClass=o.readShort(i,r),r+=2,a.panose=o.readBytes(i,r,10),r+=10,a.ulUnicodeRange1=o.readUint(i,r),r+=4,a.ulUnicodeRange2=o.readUint(i,r),r+=4,a.ulUnicodeRange3=o.readUint(i,r),r+=4,a.ulUnicodeRange4=o.readUint(i,r),r+=4,a.achVendID=[o.readInt8(i,r),o.readInt8(i,r+1),o.readInt8(i,r+2),o.readInt8(i,r+3)],r+=4,a.fsSelection=o.readUshort(i,r),r+=2,a.usFirstCharIndex=o.readUshort(i,r),r+=2,a.usLastCharIndex=o.readUshort(i,r),r+=2,a.sTypoAscender=o.readShort(i,r),r+=2,a.sTypoDescender=o.readShort(i,r),r+=2,a.sTypoLineGap=o.readShort(i,r),r+=2,a.usWinAscent=o.readUshort(i,r),r+=2,a.usWinDescent=o.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,a){var o=e._bin;return r=e["OS/2"].version0(i,r,a),a.ulCodePageRange1=o.readUint(i,r),r+=4,a.ulCodePageRange2=o.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,a){var o=e._bin;return r=e["OS/2"].version1(i,r,a),a.sxHeight=o.readShort(i,r),r+=2,a.sCapHeight=o.readShort(i,r),r+=2,a.usDefault=o.readUshort(i,r),r+=2,a.usBreak=o.readUshort(i,r),r+=2,a.usMaxContext=o.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,a){var o=e._bin;return r=e["OS/2"].version2(i,r,a),a.usLowerOpticalPointSize=o.readUshort(i,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,a){var o=e._bin,l={};return l.version=o.readFixed(i,r),r+=4,l.italicAngle=o.readFixed(i,r),r+=4,l.underlinePosition=o.readShort(i,r),r+=2,l.underlineThickness=o.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var a=i.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var a={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var o=i.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[r]=o),o)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,a)}else i.glyf&&e.U._drawGlyf(r,i,a);return a},e.U._drawGlyf=function(i,r,a){var o=r.glyf[i];o==null&&(o=r.glyf[i]=e.glyf._parseGlyf(r,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(i,r){for(var a=0;a<i.noc;a++){for(var o=a==0?0:i.endPts[a-1]+1,l=i.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&i.flags[c],d=1&i.flags[u],g=1&i.flags[f],v=i.xs[c],p=i.ys[c];if(c==o)if(h){if(!d){e.U.P.moveTo(r,v,p);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else d?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+v)/2,(i.ys[u]+p)/2);h?d&&e.U.P.lineTo(r,v,p):g?e.U.P.qcurveTo(r,v,p,i.xs[f],i.ys[f]):e.U.P.qcurveTo(r,v,p,(v+i.xs[f])/2,(p+i.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,a){for(var o=0;o<i.parts.length;o++){var l={cmds:[],crds:[]},c=i.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];a.crds.push(h*u.a+d*u.b+u.tx),a.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)a.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(i,r){var a=e._lctf.getInterval(r,i);return a==-1?0:r[a+2]},e.U._applySubs=function(i,r,a,o){for(var l=i.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,f=a.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,i[r]))!=-1){if(a.ltype==1)i[r],f.fmt==1?i[r]=i[r]+f.delta:i[r]=f.newg[u];else if(a.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],v=g.chain.length;if(!(v>l)){for(var p=!0,m=0,T=0;T<v;T++){for(;i[r+m+(1+T)]==-1;)m++;g.chain[T]!=i[r+m+(1+T)]&&(p=!1)}if(p){for(i[r]=g.nglyph,T=0;T<v+m;T++)i[r+T+1]=-1;break}}}else if(a.ltype==5&&f.fmt==2)for(var y=e._lctf.getInterval(f.cDef,i[r]),M=f.cDef[y+2],D=f.scset[M],C=0;C<D.length;C++){var w=D[C],b=w.input;if(!(b.length>l)){for(p=!0,T=0;T<b.length;T++){var S=e._lctf.getInterval(f.cDef,i[r+1+T]);if(y==-1&&f.cDef[S+2]!=b[T]){p=!1;break}}if(p){var _=w.substLookupRecords;for(d=0;d<_.length;d+=2)_[d],_[d+1]}}}else if(a.ltype==6&&f.fmt==3){if(!e.U._glsCovered(i,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(i,f.inptCvg,r)||!e.U._glsCovered(i,f.ahedCvg,r+f.inptCvg.length))continue;var U=f.lookupRec;for(C=0;C<U.length;C+=2){y=U[C];var L=o[U[C+1]];e.U._applySubs(i,r+y,L,o)}}}}},e.U._glsCovered=function(i,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],i[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=e.U.glyphToPath(i,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+l),o.crds.push(h.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);a&&o.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(i,r,a){i.cmds.push("M"),i.crds.push(r,a)},e.U.P.lineTo=function(i,r,a){i.cmds.push("L"),i.crds.push(r,a)},e.U.P.curveTo=function(i,r,a,o,l,c,u){i.cmds.push("C"),i.crds.push(r,a,o,l,c,u)},e.U.P.qcurveTo=function(i,r,a,o,l){i.cmds.push("Q"),i.crds.push(r,a,o,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,a,o,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open,g=0,v=r.x,p=r.y,m=0,T=0,y=0,M=0,D=0,C=0,w=0,b=0,S=0,_=0,U={val:0,size:0};g<i.length;){e.CFF.getCharString(i,g,U);var L=U.val;if(g+=U.size,L=="o1"||L=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(L=="o3"||L=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(L=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,v,p),d=!0;else if(L=="o5")for(;c.length>0;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);else if(L=="o6"||L=="o7")for(var N=c.length,O=L=="o6",z=0;z<N;z++){var k=c.shift();O?v+=k:p+=k,O=!O,e.U.P.lineTo(l,v,p)}else if(L=="o8"||L=="o24"){N=c.length;for(var X=0;X+6<=N;)m=v+c.shift(),T=p+c.shift(),y=m+c.shift(),M=T+c.shift(),v=y+c.shift(),p=M+c.shift(),e.U.P.curveTo(l,m,T,y,M,v,p),X+=6;L=="o24"&&(v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p))}else{if(L=="o11")break;if(L=="o1234"||L=="o1235"||L=="o1236"||L=="o1237")L=="o1234"&&(T=p,y=(m=v+c.shift())+c.shift(),_=M=T+c.shift(),C=M,b=p,v=(w=(D=(S=y+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,T,y,M,S,_),e.U.P.curveTo(l,D,C,w,b,v,p)),L=="o1235"&&(m=v+c.shift(),T=p+c.shift(),y=m+c.shift(),M=T+c.shift(),S=y+c.shift(),_=M+c.shift(),D=S+c.shift(),C=_+c.shift(),w=D+c.shift(),b=C+c.shift(),v=w+c.shift(),p=b+c.shift(),c.shift(),e.U.P.curveTo(l,m,T,y,M,S,_),e.U.P.curveTo(l,D,C,w,b,v,p)),L=="o1236"&&(m=v+c.shift(),T=p+c.shift(),y=m+c.shift(),_=M=T+c.shift(),C=M,w=(D=(S=y+c.shift())+c.shift())+c.shift(),b=C+c.shift(),v=w+c.shift(),e.U.P.curveTo(l,m,T,y,M,S,_),e.U.P.curveTo(l,D,C,w,b,v,p)),L=="o1237"&&(m=v+c.shift(),T=p+c.shift(),y=m+c.shift(),M=T+c.shift(),S=y+c.shift(),_=M+c.shift(),D=S+c.shift(),C=_+c.shift(),w=D+c.shift(),b=C+c.shift(),Math.abs(w-v)>Math.abs(b-p)?v=w+c.shift():p=b+c.shift(),e.U.P.curveTo(l,m,T,y,M,S,_),e.U.P.curveTo(l,D,C,w,b,v,p));else if(L=="o14"){if(c.length>0&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),c.length==4){var Y=c.shift(),q=c.shift(),j=c.shift(),I=c.shift(),V=e.CFF.glyphBySE(a,j),se=e.CFF.glyphBySE(a,I);e.U._drawCFF(a.CharStrings[V],r,a,o,l),r.x=Y,r.y=q,e.U._drawCFF(a.CharStrings[se],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(L=="o19"||L=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(L=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),p+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(L=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(L=="o25"){for(;c.length>6;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);m=v+c.shift(),T=p+c.shift(),y=m+c.shift(),M=T+c.shift(),v=y+c.shift(),p=M+c.shift(),e.U.P.curveTo(l,m,T,y,M,v,p)}else if(L=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)m=v,T=p+c.shift(),v=y=m+c.shift(),p=(M=T+c.shift())+c.shift(),e.U.P.curveTo(l,m,T,y,M,v,p);else if(L=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)T=p,y=(m=v+c.shift())+c.shift(),M=T+c.shift(),v=y+c.shift(),p=M,e.U.P.curveTo(l,m,T,y,M,v,p);else if(L=="o10"||L=="o29"){var F=L=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var B=c.pop(),ee=F.Subrs[B+F.Bias];r.x=v,r.y=p,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d,e.U._drawCFF(ee,r,a,o,l),v=r.x,p=r.y,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open}}else if(L=="o30"||L=="o31"){var W=c.length,oe=(X=0,L=="o31");for(X+=W-(N=-3&W);X<N;)oe?(T=p,y=(m=v+c.shift())+c.shift(),p=(M=T+c.shift())+c.shift(),N-X==5?(v=y+c.shift(),X++):v=y,oe=!1):(m=v,T=p+c.shift(),y=m+c.shift(),M=T+c.shift(),v=y+c.shift(),N-X==5?(p=M+c.shift(),X++):p=M,oe=!0),e.U.P.curveTo(l,m,T,y,M,v,p),X+=4}else{if((L+"").charAt(0)=="o")throw console.debug("Unknown operation: "+L,i),L;c.push(L)}}}r.x=v,r.y=p,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d};var t=e,n={Typr:t};return s.Typr=t,s.default=n,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Z_(){return function(s){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(L,N){for(var O=new t(31),z=0;z<31;++z)O[z]=N+=1<<L[z-1];var k=new n(O[30]);for(z=1;z<30;++z)for(var X=O[z];X<O[z+1];++X)k[X]=X-O[z]<<5|z;return[O,k]},l=o(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(r,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(L,N,O){for(var z=L.length,k=0,X=new t(N);k<z;++k)++X[L[k]-1];var Y,q=new t(N);for(k=0;k<N;++k)q[k]=q[k-1]+X[k-1]<<1;{Y=new t(1<<N);var j=15-N;for(k=0;k<z;++k)if(L[k])for(var I=k<<4|L[k],V=N-L[k],se=q[L[k]-1]++<<V,F=se|(1<<V)-1;se<=F;++se)Y[h[se]>>>j]=I}return Y},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var T=v(p,9),y=v(m,5),M=function(L){for(var N=L[0],O=1;O<L.length;++O)L[O]>N&&(N=L[O]);return N},D=function(L,N,O){var z=N/8|0;return(L[z]|L[z+1]<<8)>>(7&N)&O},C=function(L,N){var O=N/8|0;return(L[O]|L[O+1]<<8|L[O+2]<<16)>>(7&N)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],b=function(L,N,O){var z=new Error(N||w[L]);if(z.code=L,Error.captureStackTrace&&Error.captureStackTrace(z,b),!O)throw z;return z},S=function(L,N,O){var z=L.length;if(!z||O&&!O.l&&z<5)return N||new e(0);var k=!N||O,X=!O||O.i;O||(O={}),N||(N=new e(3*z));var Y,q=function(Me){var Ne=N.length;if(Me>Ne){var Ye=new e(Math.max(2*Ne,Me));Ye.set(N),N=Ye}},j=O.f||0,I=O.p||0,V=O.b||0,se=O.l,F=O.d,B=O.m,ee=O.n,W=8*z;do{if(!se){O.f=j=D(L,I,1);var oe=D(L,I+1,3);if(I+=3,!oe){var Se=L[(P=((Y=I)/8|0)+(7&Y&&1)+4)-4]|L[P-3]<<8,ye=P+Se;if(ye>z){X&&b(0);break}k&&q(V+Se),N.set(L.subarray(P,ye),V),O.b=V+=Se,O.p=I=8*ye;continue}if(oe==1)se=T,F=y,B=9,ee=5;else if(oe==2){var xe=D(L,I,31)+257,A=D(L,I+10,15)+4,he=xe+D(L,I+5,31)+1;I+=14;for(var ce=new e(he),pe=new e(19),$=0;$<A;++$)pe[a[$]]=D(L,I+3*$,7);I+=3*A;var Te=M(pe),ae=(1<<Te)-1,de=v(pe,Te);for($=0;$<he;){var P,x=de[D(L,I,ae)];if(I+=15&x,(P=x>>>4)<16)ce[$++]=P;else{var G=0,J=0;for(P==16?(J=3+D(L,I,3),I+=2,G=ce[$-1]):P==17?(J=3+D(L,I,7),I+=3):P==18&&(J=11+D(L,I,127),I+=7);J--;)ce[$++]=G}}var ie=ce.subarray(0,xe),ne=ce.subarray(xe);B=M(ie),ee=M(ne),se=v(ie,B),F=v(ne,ee)}else b(1);if(I>W){X&&b(0);break}}k&&q(V+131072);for(var Ce=(1<<B)-1,fe=(1<<ee)-1,ge=I;;ge=I){var Ae=(G=se[C(L,I)&Ce])>>>4;if((I+=15&G)>W){X&&b(0);break}if(G||b(2),Ae<256)N[V++]=Ae;else{if(Ae==256){ge=I,se=null;break}var me=Ae-254;if(Ae>264){var Ee=i[$=Ae-257];me=D(L,I,(1<<Ee)-1)+c[$],I+=Ee}var ze=F[C(L,I)&fe],Pe=ze>>>4;if(ze||b(3),I+=15&ze,ne=f[Pe],Pe>3&&(Ee=r[Pe],ne+=C(L,I)&(1<<Ee)-1,I+=Ee),I>W){X&&b(0);break}k&&q(V+131072);for(var ve=V+me;V<ve;V+=4)N[V]=N[V-ne],N[V+1]=N[V+1-ne],N[V+2]=N[V+2-ne],N[V+3]=N[V+3-ne];V=ve}}O.l=se,O.p=ge,O.b=V,se&&(j=1,O.m=B,O.d=F,O.n=ee)}while(!j);return V==N.length?N:function(Me,Ne,Ye){(Ye==null||Ye>Me.length)&&(Ye=Me.length);var E=new(Me instanceof t?t:Me instanceof n?n:e)(Ye-Ne);return E.set(Me.subarray(Ne,Ye)),E}(N,0,V)},_=new e(0),U=typeof TextDecoder<"u"&&new TextDecoder;try{U.decode(_,{stream:!0})}catch{}return s.convert_streams=function(L){var N=new DataView(L),O=0;function z(){var xe=N.getUint16(O);return O+=2,xe}function k(){var xe=N.getUint32(O);return O+=4,xe}function X(xe){Se.setUint16(ye,xe),ye+=2}function Y(xe){Se.setUint32(ye,xe),ye+=4}for(var q={signature:k(),flavor:k(),length:k(),numTables:z(),reserved:z(),totalSfntSize:k(),majorVersion:z(),minorVersion:z(),metaOffset:k(),metaLength:k(),metaOrigLength:k(),privOffset:k(),privLength:k()},j=0;Math.pow(2,j)<=q.numTables;)j++;j--;for(var I=16*Math.pow(2,j),V=16*q.numTables-I,se=12,F=[],B=0;B<q.numTables;B++)F.push({tag:k(),offset:k(),compLength:k(),origLength:k(),origChecksum:k()}),se+=16;var ee,W=new Uint8Array(12+16*F.length+F.reduce(function(xe,A){return xe+A.origLength+4},0)),oe=W.buffer,Se=new DataView(oe),ye=0;return Y(q.flavor),X(q.numTables),X(I),X(j),X(V),F.forEach(function(xe){Y(xe.tag),Y(xe.origChecksum),Y(se),Y(xe.origLength),xe.outOffset=se,(se+=xe.origLength)%4!=0&&(se+=4-se%4)}),F.forEach(function(xe){var A,he=L.slice(xe.offset,xe.offset+xe.compLength);if(xe.compLength!=xe.origLength){var ce=new Uint8Array(xe.origLength);A=new Uint8Array(he,2),S(A,ce)}else ce=new Uint8Array(he);W.set(ce,xe.outOffset);var pe=0;(se=xe.outOffset+xe.origLength)%4!=0&&(pe=4-se%4),W.set(new Uint8Array(pe).buffer,xe.outOffset+xe.origLength),ee=se+pe}),oe.slice(0,ee)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function J_(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,a=4,o=8,l=16,c=32;let u;function f(w){if(!u){const b={R:r,L:i,D:a,C:l,U:c,T:o};u=new Map;for(let S in n){let _=0;n[S].split(",").forEach(U=>{let[L,N]=U.split("+");L=parseInt(L,36),N=N?parseInt(N,36):0,u.set(_+=L,b[S]);for(let O=N;O--;)u.set(++_,b[S])})}}return u.get(w)||c}const h=1,d=2,g=3,v=4,p=[null,"isol","init","fina","medi"];function m(w){const b=new Uint8Array(w.length);let S=c,_=h,U=-1;for(let L=0;L<w.length;L++){const N=w.codePointAt(L);let O=f(N)|0,z=h;O&o||(S&(i|a|l)?O&(r|a|l)?(z=g,(_===h||_===g)&&b[U]++):O&(i|c)&&(_===d||_===v)&&b[U]--:S&(r|c)&&(_===d||_===v)&&b[U]--,_=b[L]=z,S=O,U=L,N>65535&&L++)}return b}function T(w,b){const S=[];for(let U=0;U<b.length;U++){const L=b.codePointAt(U);L>65535&&U++,S.push(s.U.codeToGlyph(w,L))}const _=w.GSUB;if(_){const{lookupList:U,featureList:L}=_;let N;const O=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,z=[];L.forEach(k=>{if(O.test(k.tag))for(let X=0;X<k.tab.length;X++){if(z[k.tab[X]])continue;z[k.tab[X]]=!0;const Y=U[k.tab[X]],q=/^(isol|init|fina|medi)$/.test(k.tag);q&&!N&&(N=m(b));for(let j=0;j<S.length;j++)(!N||!q||p[N[j]]===k.tag)&&s.U._applySubs(S,j,Y,U)}})}return S}function y(w,b){const S=new Int16Array(b.length*3);let _=0;for(;_<b.length;_++){const O=b[_];if(O===-1)continue;S[_*3+2]=w.hmtx.aWidth[O];const z=w.GPOS;if(z){const k=z.lookupList;for(let X=0;X<k.length;X++){const Y=k[X];for(let q=0;q<Y.tabs.length;q++){const j=Y.tabs[q];if(Y.ltype===1){if(s._lctf.coverageIndex(j.coverage,O)!==-1&&j.pos){N(j.pos,_);break}}else if(Y.ltype===2){let I=null,V=U();if(V!==-1){const se=s._lctf.coverageIndex(j.coverage,b[V]);if(se!==-1){if(j.fmt===1){const F=j.pairsets[se];for(let B=0;B<F.length;B++)F[B].gid2===O&&(I=F[B])}else if(j.fmt===2){const F=s.U._getGlyphClass(b[V],j.classDef1),B=s.U._getGlyphClass(O,j.classDef2);I=j.matrix[F][B]}if(I){I.val1&&N(I.val1,V),I.val2&&N(I.val2,_);break}}}}else if(Y.ltype===4){const I=s._lctf.coverageIndex(j.markCoverage,O);if(I!==-1){const V=U(L),se=V===-1?-1:s._lctf.coverageIndex(j.baseCoverage,b[V]);if(se!==-1){const F=j.markArray[I],B=j.baseArray[se][F.markClass];S[_*3]=B.x-F.x+S[V*3]-S[V*3+2],S[_*3+1]=B.y-F.y+S[V*3+1];break}}}else if(Y.ltype===6){const I=s._lctf.coverageIndex(j.mark1Coverage,O);if(I!==-1){const V=U();if(V!==-1){const se=b[V];if(M(w,se)===3){const F=s._lctf.coverageIndex(j.mark2Coverage,se);if(F!==-1){const B=j.mark1Array[I],ee=j.mark2Array[F][B.markClass];S[_*3]=ee.x-B.x+S[V*3]-S[V*3+2],S[_*3+1]=ee.y-B.y+S[V*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const k=U();if(k!==-1){const X=w.kern.glyph1.indexOf(b[k]);if(X!==-1){const Y=w.kern.rval[X].glyph2.indexOf(O);Y!==-1&&(S[k*3+2]+=w.kern.rval[X].vals[Y])}}}}return S;function U(O){for(let z=_-1;z>=0;z--)if(b[z]!==-1&&(!O||O(b[z])))return z;return-1}function L(O){return M(w,O)===1}function N(O,z){for(let k=0;k<3;k++)S[z*3+k]+=O[k]||0}}function M(w,b){const S=w.GDEF&&w.GDEF.glyphClassDef;return S?s.U._getGlyphClass(b,S):0}function D(...w){for(let b=0;b<w.length;b++)if(typeof w[b]=="number")return w[b]}function C(w){const b=Object.create(null),S=w["OS/2"],_=w.hhea,U=w.head.unitsPerEm,L=D(S&&S.sTypoAscender,_&&_.ascender,U),N={unitsPerEm:U,ascender:L,descender:D(S&&S.sTypoDescender,_&&_.descender,0),capHeight:D(S&&S.sCapHeight,L),xHeight:D(S&&S.sxHeight,L),lineGap:D(S&&S.sTypoLineGap,_&&_.lineGap),supportsCodePoint(O){return s.U.codeToGlyph(w,O)>0},forEachGlyph(O,z,k,X){let Y=0;const q=1/N.unitsPerEm*z,j=T(w,O);let I=0;const V=y(w,j);return j.forEach((se,F)=>{if(se!==-1){let B=b[se];if(!B){const{cmds:ee,crds:W}=s.U.glyphToPath(w,se);let oe="",Se=0;for(let ce=0,pe=ee.length;ce<pe;ce++){const $=t[ee[ce]];oe+=ee[ce];for(let Te=1;Te<=$;Te++)oe+=(Te>1?",":"")+W[Se++]}let ye,xe,A,he;if(W.length){ye=xe=1/0,A=he=-1/0;for(let ce=0,pe=W.length;ce<pe;ce+=2){let $=W[ce],Te=W[ce+1];$<ye&&(ye=$),Te<xe&&(xe=Te),$>A&&(A=$),Te>he&&(he=Te)}}else ye=A=xe=he=0;B=b[se]={index:se,advanceWidth:w.hmtx.aWidth[se],xMin:ye,yMin:xe,xMax:A,yMax:he,path:oe}}X.call(null,B,Y+V[F*3]*q,V[F*3+1]*q,I),Y+=V[F*3+2]*q,k&&(Y+=k*z)}I+=O.codePointAt(I)>65535?2:1}),Y}};return N}return function(b){const S=new Uint8Array(b,0,4),_=s._bin.readASCII(S,0,4);if(_==="wOFF")b=e(b);else if(_==="wOF2")throw new Error("woff2 fonts not supported");return C(s.parse(b)[0])}}const Q_=lr({name:"Typr Font Parser",dependencies:[K_,Z_,J_],init(s,e,t){const n=s(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function $_(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(y){var M=y>>5;this.buckets.set(M,(this.buckets.get(M)||0)|1<<(31&y))},e.prototype.has=function(y){var M=this.buckets.get(y>>5);return M!==void 0&&(M&1<<(31&y))!=0},e.prototype.serialize=function(){var y=[];return this.buckets.forEach(function(M,D){y.push((+D).toString(36)+":"+M.toString(36))}),y.join(",")},e.prototype.deserialize=function(y){var M=this;this.buckets.clear(),y.split(",").forEach(function(D){var C=D.split(":");M.buckets.set(parseInt(C[0],36),parseInt(C[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function r(y){var M=function(C){return C&i}(y).toString(16),D=function(C){return(C&i)+t-1}(y).toString(16);return"codepoint-index/plane"+(y>>16)+"/"+M+"-"+D+".json"}function a(y,M){var D=y&n,C=M.codePointAt(D/6|0);return((C=(C||48)-48)&1<<D%6)!=0}function o(y,M){var D;(D=y,D.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(C){return C.split("-").map(function(w){return parseInt(w.trim(),16)})})).forEach(function(C){var w=C[0],b=C[1];b===void 0&&(b=w),M(w,b)})}function l(y,M){o(y,function(D,C){for(var w=D;w<=C;w++)M(w)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(y){var M=f.get(y);return M||(M=new e,l(y.ranges,function(D){return M.add(D)}),f.set(y,M)),M}var g,v=new Map;function p(y,M,D){return y[M]?M:y[D]?D:function(C){for(var w in C)return w}(y)}function m(y,M){var D=M;if(!y.includes(D)){D=1/0;for(var C=0;C<y.length;C++)Math.abs(y[C]-M)<Math.abs(D-M)&&(D=y[C])}return D}function T(y){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(M){g.add(M)})),g.has(y)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(y,M){M===void 0&&(M={});var D,C=M.lang;C===void 0&&(C=new RegExp("\\p{Script=Hangul}","u").test(D=y)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(D)?"ja":"en");var w=M.category;w===void 0&&(w="sans-serif");var b=M.style;b===void 0&&(b="normal");var S=M.weight;S===void 0&&(S=400);var _=(M.dataUrl||h).replace(/\/$/g,""),U=new Map,L=new Uint8Array(y.length),N={},O={},z=new Array(y.length),k=new Map,X=!1;function Y(I){var V=v.get(I);return V||(V=fetch(_+"/"+I).then(function(se){if(!se.ok)throw new Error(se.statusText);return se.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(se){if(_!==h)return X||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+_+'", trying default CDN. '+se.message),X=!0),_=h,v.delete(I),Y(I);throw se}),v.set(I,V)),V}for(var q=function(I){var V=y.codePointAt(I),se=r(V);z[I]=se,c[se]||k.has(se)||k.set(se,Y(se).then(function(F){c[se]=F})),V>65535&&(I++,j=I)},j=0;j<y.length;j++)q(j);return Promise.all(k.values()).then(function(){k.clear();for(var I=function(se){var F=y.codePointAt(se),B=null,ee=c[z[se]],W=void 0;for(var oe in ee){var Se=O[oe];if(Se===void 0&&(Se=O[oe]=new RegExp(oe).test(C||"en")),Se){for(var ye in W=oe,ee[oe])if(a(F,ee[oe][ye])){B=ye;break}break}}if(!B){e:for(var xe in ee)if(xe!==W){for(var A in ee[xe])if(a(F,ee[xe][A])){B=A;break e}}}B||(console.debug("No font coverage for U+"+F.toString(16)),B="latin"),z[se]=B,u[B]||k.has(B)||k.set(B,Y("font-meta/"+B+".json").then(function(he){u[B]=he})),F>65535&&(se++,V=se)},V=0;V<y.length;V++)I(V);return Promise.all(k.values())}).then(function(){for(var I,V=null,se=0;se<y.length;se++){var F=y.codePointAt(se);if(V&&(T(F)||d(V).has(F)))L[se]=L[se-1];else{V=u[z[se]];var B=N[V.id];if(!B){var ee=V.typeforms,W=p(ee,w,"sans-serif"),oe=p(ee[W],b,"normal"),Se=m((I=ee[W])===null||I===void 0?void 0:I[oe],S);B=N[V.id]=_+"/font-files/"+V.id+"/"+W+"."+oe+"."+Se+".woff"}var ye=U.get(B);ye==null&&(ye=U.size,U.set(B,ye)),L[se]=ye}F>65535&&(se++,L[se]=L[se-1])}return{fontUrls:Array.from(U.keys()),chars:L}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function e0(s,e){const t=Object.create(null),n=Object.create(null);function i(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):n[a]?n[a].push(o):(n[a]=[o],i(a,c=>{c.src=a,t[a]=c,n[a].forEach(u=>u(c)),delete n[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(a.length),g=[];a.length||T();const v=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(M=>!M.lang||M.lang.test(l)).reverse(),c.length){let w=0;(function b(S=0){for(let _=S,U=a.length;_<U;_++){const L=a.codePointAt(_);if(w===1&&g[d[_-1]].supportsCodePoint(L)||/\s/.test(a[_]))d[_]=d[_-1],w===2&&(p[p.length-1][1]=_);else for(let N=d[_],O=c.length;N<=O;N++)if(N===O){const z=w===2?p[p.length-1]:p[p.length]=[_,_];z[1]=_,w=2}else{d[_]=N;const{src:z,unicodeRange:k}=c[N];if(!k||y(L,k)){const X=t[z];if(!X){r(z,()=>{b(_)});return}if(X.supportsCodePoint(L)){let Y=v.get(X);typeof Y!="number"&&(Y=g.length,g.push(X),v.set(X,Y)),d[_]=Y,w=1;break}}}L>65535&&_+1<U&&(d[_+1]=d[_],_++,w===2&&(p[p.length-1][1]=_))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){const M=p.map(D=>a.substring(D[0],D[1]+1)).join(`
`);e.getFontsForString(M,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:D,chars:C})=>{const w=g.length;let b=0;p.forEach(_=>{for(let U=0,L=_[1]-_[0];U<=L;U++)d[_[0]+U]=C[b++]+w;b++});let S=0;D.forEach((_,U)=>{r(_,L=>{g[U+w]=L,++S===D.length&&T()})})})}else T()}function T(){o({chars:d,fonts:g})}function y(M,D){for(let C=0;C<D.length;C++){const[w,b=w]=D[C];if(w<=M&&M<=b)return!0}return!1}}}const t0=lr({name:"FontResolver",dependencies:[e0,Q_,$_],init(s,e,t){return s(e,t())}});function n0(s,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:v,fonts:p,style:m,weight:T,preResolvedFonts:y,unicodeFontsURL:M},D){const C=({chars:w,fonts:b})=>{let S,_;const U=[];for(let L=0;L<w.length;L++)w[L]!==_?(_=w[L],U.push(S={start:L,end:L,fontObj:b[w[L]]})):S.end=L;D(U)};y?C(y):s(g,C,{lang:v,fonts:p,style:m,weight:T,unicodeFontsURL:M})}function o({text:g="",font:v,lang:p,sdfGlyphSize:m=64,fontSize:T=400,fontWeight:y=1,fontStyle:M="normal",letterSpacing:D=0,lineHeight:C="normal",maxWidth:w=1/0,direction:b,textAlign:S="left",textIndent:_=0,whiteSpace:U="normal",overflowWrap:L="normal",anchorX:N=0,anchorY:O=0,metricsOnly:z=!1,unicodeFontsURL:k,preResolvedFonts:X=null,includeCaretPositions:Y=!1,chunkedBoundsSize:q=8192,colorRanges:j=null},I){const V=f(),se={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),T=+T,D=+D,w=+w,C=C||"normal",_=+_,a({text:g,lang:p,style:M,weight:y,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:k,preResolvedFonts:X},F=>{se.fontLoad=f()-V;const B=isFinite(w);let ee=null,W=null,oe=null,Se=null,ye=null,xe=null,A=null,he=null,ce=0,pe=0,$=U!=="nowrap";const Te=new Map,ae=f();let de=_,P=0,x=new h;const G=[x];F.forEach(fe=>{const{fontObj:ge}=fe,{ascender:Ae,descender:me,unitsPerEm:Ee,lineGap:ze,capHeight:Pe,xHeight:ve}=ge;let Me=Te.get(ge);if(!Me){const H=T/Ee,re=C==="normal"?(Ae-me+ze)*H:C*T,be=(re-(Ae-me)*H)/2,we=Math.min(re,(Ae-me)*H),Le=(Ae+me)/2*H+we/2;Me={index:Te.size,src:ge.src,fontObj:ge,fontSizeMult:H,unitsPerEm:Ee,ascender:Ae*H,descender:me*H,capHeight:Pe*H,xHeight:ve*H,lineHeight:re,baseline:-be-Ae*H,caretTop:Le,caretBottom:Le-we},Te.set(ge,Me)}const{fontSizeMult:Ne}=Me,Ye=g.slice(fe.start,fe.end+1);let E,K;ge.forEachGlyph(Ye,T,D,(H,re,be,we)=>{re+=P,we+=fe.start,E=re,K=H;const Le=g.charAt(we),Qe=H.advanceWidth*Ne,Ze=x.count;let Be;if("isEmpty"in H||(H.isWhitespace=!!Le&&new RegExp(i).test(Le),H.canBreakAfter=!!Le&&r.test(Le),H.isEmpty=H.xMin===H.xMax||H.yMin===H.yMax||n.test(Le)),!H.isWhitespace&&!H.isEmpty&&pe++,$&&B&&!H.isWhitespace&&re+Qe+de>w&&Ze){if(x.glyphAt(Ze-1).glyphObj.canBreakAfter)Be=new h,de=-re;else for(let $e=Ze;$e--;)if($e===0&&L==="break-word"){Be=new h,de=-re;break}else if(x.glyphAt($e).glyphObj.canBreakAfter){Be=x.splitAt($e+1);const at=Be.glyphAt(0).x;de-=at;for(let it=Be.count;it--;)Be.glyphAt(it).x-=at;break}Be&&(x.isSoftWrapped=!0,x=Be,G.push(x),ce=w)}let Ke=x.glyphAt(x.count);Ke.glyphObj=H,Ke.x=re+de,Ke.y=be,Ke.width=Qe,Ke.charIndex=we,Ke.fontData=Me,Le===`
`&&(x=new h,G.push(x),de=-(re+Qe+D*T)+_)}),P=E+K.advanceWidth*Ne+D*T});let J=0;G.forEach(fe=>{let ge=!0;for(let Ae=fe.count;Ae--;){const me=fe.glyphAt(Ae);ge&&!me.glyphObj.isWhitespace&&(fe.width=me.x+me.width,fe.width>ce&&(ce=fe.width),ge=!1);let{lineHeight:Ee,capHeight:ze,xHeight:Pe,baseline:ve}=me.fontData;Ee>fe.lineHeight&&(fe.lineHeight=Ee);const Me=ve-fe.baseline;Me<0&&(fe.baseline+=Me,fe.cap+=Me,fe.ex+=Me),fe.cap=Math.max(fe.cap,fe.baseline+ze),fe.ex=Math.max(fe.ex,fe.baseline+Pe)}fe.baseline-=J,fe.cap-=J,fe.ex-=J,J+=fe.lineHeight});let ie=0,ne=0;if(N&&(typeof N=="number"?ie=-N:typeof N=="string"&&(ie=-ce*(N==="left"?0:N==="center"?.5:N==="right"?1:c(N)))),O&&(typeof O=="number"?ne=-O:typeof O=="string"&&(ne=O==="top"?0:O==="top-baseline"?-G[0].baseline:O==="top-cap"?-G[0].cap:O==="top-ex"?-G[0].ex:O==="middle"?J/2:O==="bottom"?J:O==="bottom-baseline"?-G[G.length-1].baseline:c(O)*J)),!z){const fe=e.getEmbeddingLevels(g,b);ee=new Uint16Array(pe),W=new Uint8Array(pe),oe=new Float32Array(pe*2),Se={},A=[1/0,1/0,-1/0,-1/0],he=[],Y&&(xe=new Float32Array(g.length*4)),j&&(ye=new Uint8Array(pe*3));let ge=0,Ae=-1,me=-1,Ee,ze;if(G.forEach((Pe,ve)=>{let{count:Me,width:Ne}=Pe;if(Me>0){let Ye=0;for(let we=Me;we--&&Pe.glyphAt(we).glyphObj.isWhitespace;)Ye++;let E=0,K=0;if(S==="center")E=(ce-Ne)/2;else if(S==="right")E=ce-Ne;else if(S==="justify"&&Pe.isSoftWrapped){let we=0;for(let Le=Me-Ye;Le--;)Pe.glyphAt(Le).glyphObj.isWhitespace&&we++;K=(ce-Ne)/we}if(K||E){let we=0;for(let Le=0;Le<Me;Le++){let Qe=Pe.glyphAt(Le);const Ze=Qe.glyphObj;Qe.x+=E+we,K!==0&&Ze.isWhitespace&&Le<Me-Ye&&(we+=K,Qe.width+=K)}}const H=e.getReorderSegments(g,fe,Pe.glyphAt(0).charIndex,Pe.glyphAt(Pe.count-1).charIndex);for(let we=0;we<H.length;we++){const[Le,Qe]=H[we];let Ze=1/0,Be=-1/0;for(let Ke=0;Ke<Me;Ke++)if(Pe.glyphAt(Ke).charIndex>=Le){let $e=Ke,at=Ke;for(;at<Me;at++){let it=Pe.glyphAt(at);if(it.charIndex>Qe)break;at<Me-Ye&&(Ze=Math.min(Ze,it.x),Be=Math.max(Be,it.x+it.width))}for(let it=$e;it<at;it++){const ft=Pe.glyphAt(it);ft.x=Be-(ft.x+ft.width-Ze)}break}}let re;const be=we=>re=we;for(let we=0;we<Me;we++){const Le=Pe.glyphAt(we);re=Le.glyphObj;const Qe=re.index,Ze=fe.levels[Le.charIndex]&1;if(Ze){const Be=e.getMirroredCharacter(g[Le.charIndex]);Be&&Le.fontData.fontObj.forEachGlyph(Be,0,0,be)}if(Y){const{charIndex:Be,fontData:Ke}=Le,$e=Le.x+ie,at=Le.x+Le.width+ie;xe[Be*4]=Ze?at:$e,xe[Be*4+1]=Ze?$e:at,xe[Be*4+2]=Pe.baseline+Ke.caretBottom+ne,xe[Be*4+3]=Pe.baseline+Ke.caretTop+ne;const it=Be-Ae;it>1&&u(xe,Ae,it),Ae=Be}if(j){const{charIndex:Be}=Le;for(;Be>me;)me++,j.hasOwnProperty(me)&&(ze=j[me])}if(!re.isWhitespace&&!re.isEmpty){const Be=ge++,{fontSizeMult:Ke,src:$e,index:at}=Le.fontData,it=Se[$e]||(Se[$e]={});it[Qe]||(it[Qe]={path:re.path,pathBounds:[re.xMin,re.yMin,re.xMax,re.yMax]});const ft=Le.x+ie,gt=Le.y+Pe.baseline+ne;oe[Be*2]=ft,oe[Be*2+1]=gt;const yt=ft+re.xMin*Ke,Pt=gt+re.yMin*Ke,pt=ft+re.xMax*Ke,Mt=gt+re.yMax*Ke;yt<A[0]&&(A[0]=yt),Pt<A[1]&&(A[1]=Pt),pt>A[2]&&(A[2]=pt),Mt>A[3]&&(A[3]=Mt),Be%q===0&&(Ee={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},he.push(Ee)),Ee.end++;const vt=Ee.rect;if(yt<vt[0]&&(vt[0]=yt),Pt<vt[1]&&(vt[1]=Pt),pt>vt[2]&&(vt[2]=pt),Mt>vt[3]&&(vt[3]=Mt),ee[Be]=Qe,W[Be]=at,j){const zt=Be*3;ye[zt]=ze>>16&255,ye[zt+1]=ze>>8&255,ye[zt+2]=ze&255}}}}}),xe){const Pe=g.length-Ae;Pe>1&&u(xe,Ae,Pe)}}const Ce=[];Te.forEach(({index:fe,src:ge,unitsPerEm:Ae,ascender:me,descender:Ee,lineHeight:ze,capHeight:Pe,xHeight:ve})=>{Ce[fe]={src:ge,unitsPerEm:Ae,ascender:me,descender:Ee,lineHeight:ze,capHeight:Pe,xHeight:ve}}),se.typesetting=f()-ae,I({glyphIds:ee,glyphFontIndices:W,glyphPositions:oe,glyphData:Se,fontData:Ce,caretPositions:xe,glyphColors:ye,chunkedBounds:he,fontSize:T,topBaseline:ne+G[0].baseline,blockBounds:[ie,ne-J,ie+ce,ne],visibleBounds:A,timings:se})})}function l(g,v){o({...g,metricsOnly:!0},p=>{const[m,T,y,M]=p.blockBounds;v({width:y-m,height:M-T})})}function c(g){let v=g.match(/^([\d.]+)%$/),p=v?parseFloat(v[1]):NaN;return isNaN(p)?0:p/100}function u(g,v,p){const m=g[v*4],T=g[v*4+1],y=g[v*4+2],M=g[v*4+3],D=(T-m)/p;for(let C=0;C<p;C++){const w=(v+C)*4;g[w]=m+D*C,g[w+1]=m+D*(C+1),g[w+2]=y,g[w+3]=M}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=h.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new h;return v.data=this.data.splice(g*d.length),v}},h.flyweight=d.reduce((g,v,p,m)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+p]},set(T){this.data[this.index*d.length+p]=T}}),g),{data:null,index:0}),{typeset:o,measure:l}}const hi=()=>(self.performance||Date).now(),Js=Yu();let Dc;function i0(s,e,t,n,i,r,a,o,l,c,u=!0){return u?s0(s,e,t,n,i,r,a,o,l,c).then(null,f=>(Dc||(console.warn("WebGL SDF generation failed, falling back to JS",f),Dc=!0),Nc(s,e,t,n,i,r,a,o,l,c))):Nc(s,e,t,n,i,r,a,o,l,c)}const Fs=[],r0=5;let No=0;function ju(){const s=hi();for(;Fs.length&&hi()-s<r0;)Fs.shift()();No=Fs.length?setTimeout(ju,0):0}const s0=(...s)=>new Promise((e,t)=>{Fs.push(()=>{const n=hi();try{Js.webgl.generateIntoCanvas(...s),e({timing:hi()-n})}catch(i){t(i)}}),No||(No=setTimeout(ju,0))}),a0=4,o0=2e3,Ic={};let l0=0;function Nc(s,e,t,n,i,r,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+l0++%a0;let f=Ic[u];return f||(f=Ic[u]={workerModule:lr({name:u,workerId:u,dependencies:[Yu,hi],init(h,d){const g=h().javascript.generate;return function(...v){const p=d();return{textureData:g(...v),timing:d()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(s,e,t,n,i,r).then(({textureData:h,timing:d})=>{const g=hi(),v=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)v[p*4+c]=h[p];return Js.webglUtils.renderImageData(a,v,o,l,s,e,1<<3-c),d+=hi()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{k_(u)},o0)),{timing:d}})}function c0(s){s._warm||(Js.webgl.isSupported(s),s._warm=!0)}const u0=Js.webglUtils.resizeWebGLCanvasWithoutClearing,Yi={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},f0=new st;function Hi(){return(self.performance||Date).now()}const Fc=Object.create(null);function h0(s,e){s=p0({},s);const t=Hi(),{defaultFontURL:n}=Yi,i=[];if(n&&i.push({label:"default",src:Oc(n)}),s.font&&i.push({label:"user",src:Oc(s.font)}),s.font=i,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Yi.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Yi.unicodeFontsURL,s.colorRanges!=null){let h={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let g=s.colorRanges[d];typeof g!="number"&&(g=f0.set(g).getHex()),h[d]=g}s.colorRanges=h}Object.freeze(s);const{textureWidth:r,sdfExponent:a}=Yi,{sdfGlyphSize:o}=s,l=r/o*4;let c=Fc[o];if(!c){const h=document.createElement("canvas");h.width=r,h.height=o*256/l,c=Fc[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:h,sdfTexture:new Ft(h,void 0,void 0,void 0,Kt,Kt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,d0(c)}const{sdfTexture:u,sdfCanvas:f}=c;g0(s).then(h=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:p,fontSize:m,timings:T}=h,y=[],M=new Float32Array(d.length*4);let D=0,C=0;const w=Hi(),b=v.map(N=>{let O=c.glyphsByFont.get(N.src);return O||c.glyphsByFont.set(N.src,O=new Map),O});d.forEach((N,O)=>{const z=g[O],{src:k,unitsPerEm:X}=v[z];let Y=b[z].get(N);if(!Y){const{path:se,pathBounds:F}=h.glyphData[k][N],B=Math.max(F[2]-F[0],F[3]-F[1])/o*(Yi.sdfMargin*o+.5),ee=c.glyphCount++,W=[F[0]-B,F[1]-B,F[2]+B,F[3]+B];b[z].set(N,Y={path:se,atlasIndex:ee,sdfViewBox:W}),y.push(Y)}const{sdfViewBox:q}=Y,j=p[C++],I=p[C++],V=m/X;M[D++]=j+q[0]*V,M[D++]=I+q[1]*V,M[D++]=j+q[2]*V,M[D++]=I+q[3]*V,d[O]=Y.atlasIndex}),T.quads=(T.quads||0)+(Hi()-w);const S=Hi();T.sdf={};const _=f.height,U=Math.ceil(c.glyphCount/l),L=Math.pow(2,Math.ceil(Math.log2(U*o)));L>_&&(console.info(`Increasing SDF texture size ${_}->${L}`),u0(f,r,L),u.dispose()),Promise.all(y.map(N=>Ku(N,c,s.gpuAccelerateSDF).then(({timing:O})=>{T.sdf[N.atlasIndex]=O}))).then(()=>{y.length&&!c.contextLost&&(Zu(c),u.needsUpdate=!0),T.sdfTotal=Hi()-S,T.total=Hi()-t,e(Object.freeze({parameters:s,sdfTexture:u,sdfGlyphSize:o,sdfExponent:a,glyphBounds:M,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{c.contextLost||c0(f)})}function Ku({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Yi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/n)*n,h=Math.floor(u/(o/n))*n,d=e%4;return i0(n,n,s,t,c,l,i,f,h,d,a)}function d0(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const n=[];s.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(Ku(r,s,!0))})}),Promise.all(n).then(()=>{Zu(s),s.sdfTexture.needsUpdate=!0})})}function p0(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let bs;function Oc(s){return bs||(bs=typeof document>"u"?{}:document.createElement("a")),bs.href=s,bs.href}function Zu(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:n,height:i}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==n*i*4)&&(a=new Uint8Array(n*i*4),t.image={width:n,height:i,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,a)}}const m0=lr({name:"Typesetter",dependencies:[n0,t0,G_],init(s,e,t){return s(e,t())}}),g0=lr({name:"Typesetter",dependencies:[m0],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),Bc={};function v0(s){let e=Bc[s];if(!e){const t=new xi(1,1,s,s),n=t.clone(),i=t.attributes,r=n.attributes,a=new _n,o=i.uv.count;for(let l=0;l<o;l++)r.position.array[l*3]*=-1,r.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{a.setAttribute(l,new vn([...i[l].array,...r[l].array],i[l].itemSize))}),a.setIndex([...t.index.array,...n.index.array.map(l=>l+o)]),a.translate(.5,.5,0),e=Bc[s]=a}return e}const _0="aTroikaGlyphBounds",kc="aTroikaGlyphIndex",x0="aTroikaGlyphColor";class S0 extends A_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new qs,this.boundingBox=new ar}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Nt?t/2:0,e===cn?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=v0(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){Ha(this,_0,e,4),Ha(this,kc,t,1),Ha(this,x0,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:a,max:o,sin:l,cos:c}=Math,u=i/2,f=i*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,v=r((d+u)/f)!==r((g+u)/f)?-h:a(l(d)*h,l(g)*h),p=r((d-u)/f)!==r((g-u)/f)?h:o(l(d)*h,l(g)*h),m=r((d+i)/f)!==r((g+i)/f)?h*2:o(h-c(d)*h,h-c(g)*h);n.min.set(v,e[1],t<0?-m:0),n.max.set(p,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(kc).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function Ha(s,e,t,n){const i=s.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(s.setAttribute(e,new Gv(t,n)),delete s._maxInstanceCount,s.dispose()):i&&s.deleteAttribute(e)}const y0=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,M0=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,E0=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,b0=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function T0(s){const e=Io(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ie},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new St(0,0,0,0)},uTroikaClipRect:{value:new St(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ie},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new st},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new nt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:y0,vertexTransform:M0,fragmentDefs:E0,fragmentColorTransform:b0,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(qu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const tl=new Or({color:16777215,side:cn,transparent:!0}),zc=8421504,Gc=new _t,Ts=new Q,Va=new Q,Mr=[],A0=new Q,Wa="+x+y";function Hc(s){return Array.isArray(s)?s[0]:s}let Ju=()=>{const s=new Zt(new xi(1,1),tl);return Ju=()=>s,s},Qu=()=>{const s=new Zt(new xi(1,1,32,1),tl);return Qu=()=>s,s};const w0={type:"syncstart"},C0={type:"synccomplete"},$u=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],R0=$u.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Fo extends Zt{constructor(){const e=new S0;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=zc,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Wa,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(w0),h0({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(C0),e&&e()})))}onBeforeRender(e,t,n,i,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=Pn}onAfterRender(e,t,n,i,r,a){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=tl.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=T0(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Hc(this.material).getDepthMaterial()}get customDistanceMaterial(){return Hc(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:l}=i;n.uTroikaSDFTexture.value=o,n.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,f=0,h,d,g,v=0,p=0;if(t){let{outlineWidth:T,outlineOffsetX:y,outlineOffsetY:M,outlineBlur:D,outlineOpacity:C}=this;c=this._parsePercent(T)||0,u=Math.max(0,this._parsePercent(D)||0),h=C,v=this._parsePercent(y)||0,p=this._parsePercent(M)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,n.uTroikaStrokeColor.value.set(g??zc),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;n.uTroikaDistanceOffset.value=c,n.uTroikaPositionOffset.value.set(v,p),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=f,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=h??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const T=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-T,l[1]-T,l[2]+T,l[3]+T)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new st;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||Wa;if(a!==e._orientation){let o=n.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==Wa&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;Ts.set(0,0,0)[u]=c==="-"?1:-1,Va.set(0,0,0)[h]=f==="-"?-1:1,Gc.lookAt(A0,Ts.cross(Va),Va),o.setFromMatrix4(Gc)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ie){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Ie){return Ts.copy(e),this.localPositionToTextCoords(this.worldToLocal(Ts),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,a=i?Qu():Ju(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=r[0]+c.getX(u)*(r[2]-r[0]);const h=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;i&&(d=i-Math.cos(f/i)*i,f=Math.sin(f/i)*i),l.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Mr.length=0,a.raycast(e,Mr);for(let u=0;u<Mr.length;u++)Mr[u].object=this,t.push(Mr[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,R0.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}$u.forEach(s=>{const e="_private_"+s;Object.defineProperty(Fo.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const Oo={text:"marco demo!",textureUrl:"https://threejs.org/examples/textures/uv_grid_opengl.jpg",fontUrl:"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",size:1,depth:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:.03,steps:1,bevelSize:.02,bevelOffset:0,bevelSegments:3,position:{x:0,y:0,z:0},withOutline:!0,outlineThickness:.01,outlineColor:[0,0,0],width:1280,height:720},Vc={fov:75,maxAngle:Math.PI/2,enableDamping:!0,dampingFactor:.25,screenSpacePanning:!1,position:{x:0,y:0,z:5}},P0=async({canvas:s,simulationProps:e={},cameraProps:t={}})=>{const{text:n,fontUrl:i,textureUrl:r,withOutline:a,outlineThickness:o,outlineColor:l,position:c,height:u,width:f,...h}={...Oo,...e},{fov:d,enableDamping:g,dampingFactor:v,maxAngle:p,screenSpacePanning:m,position:T}={...Vc,...t},y=new U_,M=new T_,D=new Map,C=new Map,w=async F=>{if(D.has(F))return D.get(F);const B=await y.loadAsync(F);return D.set(F,B),B},b=async F=>{if(C.has(F))return C.get(F);const B=await M.loadAsync(F);return C.set(F,B),B},S=new zv,_=new tn(d,f/u,.1,1e3);_.position.x=T.x,_.position.y=T.y,_.position.z=T.z;const U=new kv({canvas:s});U.setSize(f,u);const L=new R_(_,U.domElement);L.enableDamping=g,L.dampingFactor=v,L.maxPolarAngle=p,L.screenSpacePanning=m;let N=a,O=new P_(U,{defaultThickness:o,defaultColor:l}),z=new bc(n,{font:await w(i),...h}),k=new Or({map:await b(r)}),X=new Zt(z,k);const Y=new Fo,q=new Fo,j=F=>{const{text:B,fontUrl:ee,textureUrl:W,withOutline:oe,outlineThickness:Se,outlineColor:ye,position:xe,width:A,height:he,...ce}={...Oo,...F};N=oe;let pe=D.get(i),$=C.get(r);D.has(ee)?pe=D.get(ee):console.warn(`"${ee}" not registered`),C.has(W)?$=C.get(W):console.warn(`"${W}" not registered`),z.dispose(),k.dispose(),z=new bc(B,{font:pe,...ce}),k=new Or({map:$}),S.remove(X),X.geometry=z,X.material=k,Wc(X,xe),S.add(X);const Te=Bo(X);return As("width",X,Y,Te,ce.size),As("height",X,q,Te,ce.size),(A!==U.domElement.width||he!==U.domElement.height)&&(U.setSize(A,he),_.aspect=A/he,_.updateProjectionMatrix()),Te},I=()=>{_.position.set(T.x,T.y,T.z),_.rotation.set(0,0,0),_.fov=Vc.fov,_.updateProjectionMatrix(),L.target.set(0,0,0),L.enableDamping=g,L.dampingFactor=v,L.maxPolarAngle=p,L.screenSpacePanning=m,L.update()},V=Bo(X);S.add(X),S.add(Y),S.add(q),Wc(X),As("width",X,Y,V),As("height",X,q,V);const se=F=>{L.update(),N?O.render(S,_):U.render(S,_)};return U.setAnimationLoop(se),{dimensions:V,modify:j,reposition:I,registerFont:w,registerTexture:b}},Wc=(s,e={x:0,y:0,z:0})=>{const t=s.geometry;t.computeBoundingBox();const n=t.boundingBox,i=(n.max.x-n.min.x)/2,r=(n.max.y-n.min.y)/2,a=(n.max.z-n.min.z)/2;s.position.set(e.x-i,e.y-r,e.z-a)},Bo=s=>{s.geometry.computeBoundingBox();const e=s.geometry.boundingBox,t=e.max.x-e.min.x,n=e.max.y-e.min.y,i=e.max.z-e.min.z;return{width:t,height:n,depth:i}},As=(s,e,t,n,i=1)=>{const{width:r,height:a,depth:o}=n??Bo(e);t.text=`${(s==="width"?r:a).toFixed(2)} m`,t.fontSize=i*.3,t.color=10053375,t._needsSync=!0,t.sync(()=>{t.geometry.computeBoundingBox();const l=t.geometry.boundingBox;if(s=="width"){const c=l.max.x-l.min.x;t.position.x=e.position.x+(r-c)/2,t.position.y=e.position.y-.2,t.position.z=e.position.z+o/2}if(s=="height"){const c=l.max.y-l.min.y;t.position.x=e.position.x-a/2-.2,t.position.y=e.position.y-c/2,t.position.z=e.position.z+o/2,t.rotation.z=Math.PI/2}t.sync()})},Vi=[];function Wt(s,e=fn){let t;const n=new Set;function i(o){if(ko(s,o)&&(s=o,t)){const l=!Vi.length;for(const c of n)c[1](),Vi.push(c,s);if(l){for(let c=0;c<Vi.length;c+=2)Vi[c][0](Vi[c+1]);Vi.length=0}}}function r(o){i(o(s))}function a(o,l=fn){const c=[o,l];return n.add(c),n.size===1&&(t=e(i,r)||fn),o(s),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:a}}const Lr={helvetiker:{url:"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",valid:Wt(!1)},gentilis:{url:"https://threejs.org/examples/fonts/gentilis_regular.typeface.json",valid:Wt(!1)},optimer:{url:"https://threejs.org/examples/fonts/optimer_regular.typeface.json",valid:Wt(!1)},"droid sans":{url:"https://threejs.org/examples/fonts/droid/droid_sans_mono_regular.typeface.json",valid:Wt(!1)},"droid serif":{url:"https://threejs.org/examples/fonts/droid/droid_serif_regular.typeface.json",valid:Wt(!1)},playwright:{url:"https://raw.githubusercontent.com/DanielMontilla/marco-demo/master/fonts/Playwrite.json",valid:Wt(!1)},roboto:{url:"https://raw.githubusercontent.com/DanielMontilla/marco-demo/master/fonts/Roboto.json",valid:Wt(!1)},caveat:{url:"https://raw.githubusercontent.com/DanielMontilla/marco-demo/master/fonts/Caveat.json",valid:Wt(!1)},gluten:{url:"https://raw.githubusercontent.com/DanielMontilla/marco-demo/master/fonts/Gluten.json",valid:Wt(!1)},"luckiest guy":{url:"https://raw.githubusercontent.com/DanielMontilla/marco-demo/master/fonts/Luckiest_Guy.json",valid:Wt(!1)}};function Xc(s){let e,t;return{c(){e=qe("option"),t=jt(s[0]),e.__value=s[1],It(e,e.__value)},m(n,i){zo(n,e,i),Re(e,t)},p(n,i){i&1&&Hn(t,n[0]),i&2&&(e.__value=n[1],It(e,e.__value))},d(n){n&&Ws(e)}}}function U0(s){let e,t=s[3]&&Xc(s);return{c(){t&&t.c(),e=of()},m(n,i){t&&t.m(n,i),zo(n,e,i)},p(n,[i]){n[3]?t?t.p(n,i):(t=Xc(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:fn,o:fn,d(n){n&&Ws(e),t&&t.d(n)}}}function L0(s,e,t){let n,i=fn,r=()=>(i(),i=Zc(l,c=>t(3,n=c)),l);s.$$.on_destroy.push(()=>i());let{name:a}=e,{url:o}=e,{valid:l}=e;return r(),s.$$set=c=>{"name"in c&&t(0,a=c.name),"url"in c&&t(1,o=c.url),"valid"in c&&r(t(2,l=c.valid))},[a,o,l,n]}class D0 extends tu{constructor(e){super(),eu(this,e,L0,U0,ko,{name:0,url:1,valid:2})}}function Yc(s,e,t){const n=s.slice();return n[28]=e[t][0],n[29]=e[t][1].url,n[30]=e[t][1].valid,n}function qc(s){let e,t;return e=new D0({props:{name:s[28],url:s[29],valid:s[30]}}),{c(){_f(e.$$.fragment)},m(n,i){Qc(e,n,i),t=!0},p:fn,i(n){t||(Tr(e.$$.fragment,n),t=!0)},o(n){qa(e.$$.fragment,n),t=!1},d(n){$c(e,n)}}}function I0(s){let e,t,n,i,r,a,o,l,c,u,f,h,d,g,v,p,m=s[9].format(s[0])+"",T,y,M,D,C,w,b=s[8].format(s[3])+"",S,_,U,L,N,O,z,k,X,Y,q,j,I,V,se,F,B,ee,W,oe,Se,ye,xe,A,he=s[4].size+"",ce,pe,$,Te,ae,de,P,x,G,J=s[4].depth+"",ie,ne,Ce,fe,ge,Ae,me,Ee,ze,Pe,ve,Me,Ne,Ye,E,K,H=s[4].bevelThickness+"",re,be,we,Le,Qe,Ze,Be,Ke,$e,at,it,ft,gt=s[4].bevelSize.toFixed(3)+"",yt,Pt,pt,Mt,vt,zt,jn,Qt,dn,R,Z,le,ue=s[4].bevelSegments+"",te,Ue,De,Ge,_e,He,je,Xe,et=yl(Object.entries(Lr)),Je=[];for(let We=0;We<et.length;We+=1)Je[We]=qc(Yc(s,et,We));const ct=We=>qa(Je[We],1,1,()=>{Je[We]=null});return{c(){e=qe("main"),t=qe("canvas"),n=ot(),i=qe("div"),r=qe("button"),a=_l("svg"),o=_l("path"),c=ot(),u=qe("div"),f=qe("div"),h=qe("div"),d=qe("span"),d.textContent="Price",g=ot(),v=qe("span"),p=jt("("),T=jt(m),y=jt("/m"),M=qe("sup"),M.textContent="2",D=jt(")"),C=ot(),w=qe("p"),S=jt(b),_=ot(),U=qe("div"),L=qe("button"),L.innerHTML='<svg class="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m16.325 18.8l-1.15 1.15q-.425.425-1.05.438t-1.075-.438q-.425-.425-.425-1.062t.425-1.063l1.15-1.15q-.1-.275-.15-.575t-.05-.6q0-1.45 1.025-2.475T17.5 12q.225 0 .45.013t.425.087q.275.1.338.413t-.138.512L17.5 14.1q-.275.275-.275.7t.275.7t.7.275t.7-.275l1.075-1.075q.2-.2.512-.138t.413.338q.075.2.088.425t.012.45q0 1.45-1.025 2.475T17.5 19q-.325 0-.612-.05t-.563-.15M12 5Q9.075 5 7.038 7.038T5 12q0 1.8.813 3.3T8 17.75V16q0-.425.288-.712T9 15t.713.288T10 16v4q0 .425-.288.713T9 21H5q-.425 0-.712-.288T4 20t.288-.712T5 19h1.35Q4.8 17.75 3.9 15.938T3 12q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3q1.625 0 3.475.95t4.875 4.675q.275.325.088.713t-.638.587q-.4.175-.8.013t-.525-.563q-.5-1.7-2.287-3.037T12 5"></path></svg>',N=ot(),O=qe("button"),O.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M232 120h-8.34A96.14 96.14 0 0 0 136 32.34V24a8 8 0 0 0-16 0v8.34A96.14 96.14 0 0 0 32.34 120H24a8 8 0 0 0 0 16h8.34A96.14 96.14 0 0 0 120 223.66V232a8 8 0 0 0 16 0v-8.34A96.14 96.14 0 0 0 223.66 136H232a8 8 0 0 0 0-16m-96 87.6V200a8 8 0 0 0-16 0v7.6A80.15 80.15 0 0 1 48.4 136H56a8 8 0 0 0 0-16h-7.6A80.15 80.15 0 0 1 120 48.4V56a8 8 0 0 0 16 0v-7.6a80.15 80.15 0 0 1 71.6 71.6H200a8 8 0 0 0 0 16h7.6a80.15 80.15 0 0 1-71.6 71.6M128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></path></svg>',z=ot(),k=qe("div"),X=qe("div"),X.innerHTML="€/m<sup>2</sup>",Y=ot(),q=qe("input"),j=ot(),I=qe("label"),V=qe("div"),V.textContent="text",se=ot(),F=qe("input"),B=ot(),ee=qe("select");for(let We=0;We<Je.length;We+=1)Je[We].c();W=ot(),oe=qe("label"),Se=qe("div"),ye=qe("div"),ye.textContent="size",xe=ot(),A=qe("div"),ce=jt(he),pe=ot(),$=qe("input"),Te=ot(),ae=qe("label"),de=qe("div"),P=qe("div"),P.textContent="depth",x=ot(),G=qe("div"),ie=jt(J),ne=ot(),Ce=qe("input"),fe=ot(),ge=qe("div"),Ae=qe("div"),me=qe("div"),me.innerHTML='<div class="font-medium text-lg">bevel</div>',Ee=ot(),ze=qe("input"),Pe=ot(),ve=qe("div"),Me=qe("div"),Ne=qe("div"),Ye=qe("div"),Ye.textContent="thickness",E=ot(),K=qe("div"),re=jt(H),be=ot(),we=qe("input"),Qe=ot(),Ze=qe("div"),Be=ot(),Ke=qe("div"),$e=qe("div"),at=qe("div"),at.textContent="size",it=ot(),ft=qe("div"),yt=jt(gt),Pt=ot(),pt=qe("input"),vt=ot(),zt=qe("div"),jn=ot(),Qt=qe("div"),dn=qe("div"),R=qe("div"),R.textContent="segments",Z=ot(),le=qe("div"),te=jt(ue),Ue=ot(),De=qe("input"),Fe(t,"class","size-full z-0"),Fe(o,"fill","currentColor"),Fe(o,"d","m17.5 15.914l-5.5-5.5l-5.5 5.5L5.086 14.5L12 7.586l6.914 6.914z"),Fe(a,"class",l="size-full text-base-content transition-transform "+(s[5]?"rotate-180":"rotate-0")+" ease-in-out duration-200"),Fe(a,"xmlns","http://www.w3.org/2000/svg"),Fe(a,"viewBox","0 0 24 24"),Fe(r,"class","z-20 absolute -top-8 right-0 h-8 w-16 p-1 bg-base-300 rounded-t-md"),Fe(d,"class","font-semibold leading-none"),Fe(v,"class","text-xs"),Fe(f,"class","h-full flex flex-col"),Fe(L,"class","p-2 btn btn-circle"),Fe(O,"class","p-2 btn btn-circle"),Fe(U,"class","flex justify-end gap-2"),Fe(u,"class","w-full flex justify-between"),Fe(X,"class","font-medium"),Fe(q,"type","number"),Fe(q,"class","grow"),Fe(q,"min","0"),Fe(q,"step","1"),Fe(k,"class","input p-2 input-sm input-bordered flex items-center gap-3 min-w-64"),Fe(V,"class","font-medium"),Fe(F,"type","text"),Fe(F,"class","grow"),Fe(I,"class","input p-2 input-sm input-bordered flex items-center gap-3 min-w-64"),Fe(ee,"class","select select-bordered w-full min-w-64 select-sm"),s[4].fontUrl===void 0&&Os(()=>s[20].call(ee)),Fe(ye,"class","font-medium text-sm"),Fe(A,"class","text-xs"),Fe(Se,"class","flex flex-col justify-center items-center leading-none"),Fe($,"type","range"),Fe($,"min","0.1"),Fe($,"max","10"),Fe($,"step","0.05"),Fe($,"class","range range-sm"),Fe(oe,"class","input p-2 input-bordered flex items-center gap-3 min-w-64"),Fe(P,"class","font-medium text-sm"),Fe(G,"class","text-xs"),Fe(de,"class","flex flex-col justify-center items-center leading-none"),Fe(Ce,"type","range"),Fe(Ce,"min","0.01"),Fe(Ce,"max","1"),Fe(Ce,"step","0.01"),Fe(Ce,"class","range range-sm"),Fe(ae,"class","input p-2 input-bordered flex items-center gap-3 min-w-64"),Fe(me,"class","flex flex-col justify-center items-center leading-none"),Fe(ze,"type","checkbox"),Fe(ze,"class","checkbox"),Fe(Ae,"class","flex justify-between items-center w-full"),Fe(Ye,"class","font-medium text-sm"),Fe(K,"class","text-xs"),Fe(Ne,"class","flex min-w-16 flex-col justify-center items-center leading-none"),we.disabled=Le=!s[4].bevelEnabled,Fe(we,"type","range"),Fe(we,"min","0.0"),Fe(we,"max","0.1"),Fe(we,"step","0.01"),Fe(we,"class","range range-sm disabled:grayscale disabled:cursor-not-allowed"),Fe(Me,"class","flex gap-3 w-full items-center"),Fe(Ze,"class","divider m-0 opacity-50"),Fe(at,"class","font-medium text-sm"),Fe(ft,"class","text-xs"),Fe($e,"class","flex min-w-16 flex-col justify-center items-center leading-none"),pt.disabled=Mt=!s[4].bevelEnabled,Fe(pt,"type","range"),Fe(pt,"min","0.0"),Fe(pt,"max","0.03"),Fe(pt,"step","0.005"),Fe(pt,"class","range range-sm disabled:grayscale disabled:cursor-not-allowed"),Fe(Ke,"class","flex gap-3 w-full items-center"),Fe(zt,"class","divider m-0 opacity-50"),Fe(R,"class","font-medium text-sm"),Fe(le,"class","text-xs"),Fe(dn,"class","flex min-w-16 flex-col justify-center items-center leading-none"),De.disabled=Ge=!s[4].bevelEnabled,Fe(De,"type","range"),Fe(De,"min","1"),Fe(De,"max","16"),Fe(De,"step","1"),Fe(De,"class","range range-sm disabled:grayscale disabled:cursor-not-allowed"),Fe(Qt,"class","flex gap-3 w-full items-center"),Fe(ve,"class","flex flex-col gap-0.5 justify-start items-center w-full"),Fe(ge,"class","input h-auto p-2 input-bordered flex flex-col items-center gap-3 min-w-64"),Fe(i,"class",_e="z-10 absolute right-0 p-4 md:right-4 flex flex-col gap-3 bottom-0 bg-base-300 max-w-[100vw] min-w-16 rounded-tl-md "+(s[5]?"":"translate-y-full")+" transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"),Fe(e,"class","overflow-hidden relative w-screen h-screen")},m(We,Ve){zo(We,e,Ve),Re(e,t),s[14](t),Re(e,n),Re(e,i),Re(i,r),Re(r,a),Re(a,o),Re(i,c),Re(i,u),Re(u,f),Re(f,h),Re(h,d),Re(h,g),Re(h,v),Re(v,p),Re(v,T),Re(v,y),Re(v,M),Re(v,D),Re(f,C),Re(f,w),Re(w,S),Re(u,_),Re(u,U),Re(U,L),Re(U,N),Re(U,O),Re(i,z),Re(i,k),Re(k,X),Re(k,Y),Re(k,q),It(q,s[0]),Re(i,j),Re(i,I),Re(I,V),Re(I,se),Re(I,F),It(F,s[4].text),Re(i,B),Re(i,ee);for(let Oe=0;Oe<Je.length;Oe+=1)Je[Oe]&&Je[Oe].m(ee,null);xl(ee,s[4].fontUrl,!0),Re(i,W),Re(i,oe),Re(oe,Se),Re(Se,ye),Re(Se,xe),Re(Se,A),Re(A,ce),Re(oe,pe),Re(oe,$),It($,s[4].size),Re(i,Te),Re(i,ae),Re(ae,de),Re(de,P),Re(de,x),Re(de,G),Re(G,ie),Re(ae,ne),Re(ae,Ce),It(Ce,s[4].depth),Re(i,fe),Re(i,ge),Re(ge,Ae),Re(Ae,me),Re(Ae,Ee),Re(Ae,ze),ze.checked=s[4].bevelEnabled,Re(ge,Pe),Re(ge,ve),Re(ve,Me),Re(Me,Ne),Re(Ne,Ye),Re(Ne,E),Re(Ne,K),Re(K,re),Re(Me,be),Re(Me,we),It(we,s[4].bevelThickness),Re(ve,Qe),Re(ve,Ze),Re(ve,Be),Re(ve,Ke),Re(Ke,$e),Re($e,at),Re($e,it),Re($e,ft),Re(ft,yt),Re(Ke,Pt),Re(Ke,pt),It(pt,s[4].bevelSize),Re(ve,vt),Re(ve,zt),Re(ve,jn),Re(ve,Qt),Re(Qt,dn),Re(dn,R),Re(dn,Z),Re(dn,le),Re(le,te),Re(Qt,Ue),Re(Qt,De),It(De,s[4].bevelSegments),He=!0,je||(Xe=[Ct(r,"click",s[15]),Ct(L,"click",s[16]),Ct(O,"click",s[17]),Ct(q,"input",s[18]),Ct(F,"input",s[19]),Ct(ee,"change",s[20]),Ct($,"change",s[21]),Ct($,"input",s[21]),Ct(Ce,"change",s[22]),Ct(Ce,"input",s[22]),Ct(ze,"change",s[23]),Ct(we,"change",s[24]),Ct(we,"input",s[24]),Ct(pt,"change",s[25]),Ct(pt,"input",s[25]),Ct(De,"change",s[26]),Ct(De,"input",s[26])],je=!0)},p(We,Ve){if((!He||Ve[0]&32&&l!==(l="size-full text-base-content transition-transform "+(We[5]?"rotate-180":"rotate-0")+" ease-in-out duration-200"))&&Fe(a,"class",l),(!He||Ve[0]&1)&&m!==(m=We[9].format(We[0])+"")&&Hn(T,m),(!He||Ve[0]&8)&&b!==(b=We[8].format(We[3])+"")&&Hn(S,b),Ve[0]&1&&si(q.value)!==We[0]&&It(q,We[0]),Ve[0]&16&&F.value!==We[4].text&&It(F,We[4].text),Ve&0){et=yl(Object.entries(Lr));let Oe;for(Oe=0;Oe<et.length;Oe+=1){const ht=Yc(We,et,Oe);Je[Oe]?(Je[Oe].p(ht,Ve),Tr(Je[Oe],1)):(Je[Oe]=qc(ht),Je[Oe].c(),Tr(Je[Oe],1),Je[Oe].m(ee,null))}for(gf(),Oe=et.length;Oe<Je.length;Oe+=1)ct(Oe);vf()}Ve[0]&16&&xl(ee,We[4].fontUrl),(!He||Ve[0]&16)&&he!==(he=We[4].size+"")&&Hn(ce,he),Ve[0]&16&&It($,We[4].size),(!He||Ve[0]&16)&&J!==(J=We[4].depth+"")&&Hn(ie,J),Ve[0]&16&&It(Ce,We[4].depth),Ve[0]&16&&(ze.checked=We[4].bevelEnabled),(!He||Ve[0]&16)&&H!==(H=We[4].bevelThickness+"")&&Hn(re,H),(!He||Ve[0]&16&&Le!==(Le=!We[4].bevelEnabled))&&(we.disabled=Le),Ve[0]&16&&It(we,We[4].bevelThickness),(!He||Ve[0]&16)&&gt!==(gt=We[4].bevelSize.toFixed(3)+"")&&Hn(yt,gt),(!He||Ve[0]&16&&Mt!==(Mt=!We[4].bevelEnabled))&&(pt.disabled=Mt),Ve[0]&16&&It(pt,We[4].bevelSize),(!He||Ve[0]&16)&&ue!==(ue=We[4].bevelSegments+"")&&Hn(te,ue),(!He||Ve[0]&16&&Ge!==(Ge=!We[4].bevelEnabled))&&(De.disabled=Ge),Ve[0]&16&&It(De,We[4].bevelSegments),(!He||Ve[0]&32&&_e!==(_e="z-10 absolute right-0 p-4 md:right-4 flex flex-col gap-3 bottom-0 bg-base-300 max-w-[100vw] min-w-16 rounded-tl-md "+(We[5]?"":"translate-y-full")+" transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"))&&Fe(i,"class",_e)},i(We){if(!He){for(let Ve=0;Ve<et.length;Ve+=1)Tr(Je[Ve]);He=!0}},o(We){Je=Je.filter(Boolean);for(let Ve=0;Ve<Je.length;Ve+=1)qa(Je[Ve]);He=!1},d(We){We&&Ws(e),s[14](null),af(Je,We),je=!1,sr(Xe)}}}function N0(s,e,t){let n,i,r,a,o,l,c;const u=Wt(400);Zr(s,u,z=>t(0,a=z));const f=Wt({width:0,height:0});Zr(s,f,z=>t(13,i=z));const h=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR",minimumFractionDigits:2}),d=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR",minimumFractionDigits:0}),g=Wt(!0);Zr(s,g,z=>t(5,o=z));const v={...Oo,fontUrl:Lr.helvetiker.url,text:"marco",width:window.innerWidth,height:window.innerHeight,withOutline:!1},p=Wt({...v});Zr(s,p,z=>t(4,r=z));function m(){vr(p,r={...v},r)}ff(async()=>{const{dimensions:z,modify:k,reposition:X,registerFont:Y}=await P0({canvas:l,cameraProps:{maxAngle:Math.PI},simulationProps:r});Lr.helvetiker.valid.set(!0);for(const{url:j,valid:I}of Object.values(Lr))Y(j).then(V=>I.set(!0)).catch(console.warn);t(2,c=X),addEventListener("resize",()=>{vr(p,r={...r,width:window.innerWidth,height:window.innerHeight},r)}),vr(f,i=z,i);let q=!0;p.subscribe(j=>{if(q){q=!1;return}vr(f,i=k(j),i)})});function T(z){Xa[z?"unshift":"push"](()=>{l=z,t(1,l)})}const y=()=>vr(g,o=!o,o),M=()=>m(),D=()=>c();function C(){a=si(this.value),u.set(a)}function w(){r.text=this.value,p.set(r)}function b(){r.fontUrl=cf(this),p.set(r)}function S(){r.size=si(this.value),p.set(r)}function _(){r.depth=si(this.value),p.set(r)}function U(){r.bevelEnabled=this.checked,p.set(r)}function L(){r.bevelThickness=si(this.value),p.set(r)}function N(){r.bevelSize=si(this.value),p.set(r)}function O(){r.bevelSegments=si(this.value),p.set(r)}return s.$$.update=()=>{s.$$.dirty[0]&8193&&t(3,n=i.width*i.height*a)},[a,l,c,n,r,o,u,f,h,d,g,p,m,i,T,y,M,D,C,w,b,S,_,U,L,N,O]}class F0 extends tu{constructor(e){super(),eu(this,e,N0,I0,ko,{},null,[-1,-1])}}new F0({target:document.getElementById("app")});
