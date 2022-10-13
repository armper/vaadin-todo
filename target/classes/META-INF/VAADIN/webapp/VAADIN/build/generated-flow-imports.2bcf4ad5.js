import{i as w,r as I,T as G,c as ar,t as lr,a as dr,A as ii,b as pe,d as cr,e as hr,f as j,g as ur,x as pr,h as fr,w as _r,_ as mr}from"./indexhtml.5b4276b0.js";/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gr=w`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,ri=document.createElement("template");ri.innerHTML=`<style>${gr.toString().replace(":host","html")}</style>`;document.head.appendChild(ri.content);const yr=w`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;I("vaadin-button",yr,{moduleId:"lumo-button"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(i,e){return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let br=/(url\()([^)]*)(\))/g,vr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,fe,C;function ie(i,e){if(i&&vr.test(i)||i==="//")return i;if(fe===void 0){fe=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",fe=t.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),fe)try{return new URL(i,e).href}catch{return i}return C||(C=document.implementation.createHTMLDocument("temp"),C.base=C.createElement("base"),C.head.appendChild(C.base),C.anchor=C.createElement("a"),C.body.appendChild(C.anchor)),C.base.href=e,C.anchor.href=i,C.anchor.href||i}function et(i,e){return i.replace(br,function(t,s,r,n){return s+"'"+ie(r.replace(/["']/g,""),e)+"'"+n})}function tt(i){return i.substring(0,i.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const si=!window.ShadyDOM||!window.ShadyDOM.inUse;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);const Cr=si&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const i=new CSSStyleSheet;i.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[i],e.shadowRoot.adoptedStyleSheets[0]===i}catch{return!1}})();let wr=window.Polymer&&window.Polymer.rootPath||tt(document.baseURI||window.location.href),ye=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,$o=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,re=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Ar=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,ni=window.Polymer&&window.Polymer.legacyOptimizations||!1,oi=window.Polymer&&window.Polymer.legacyWarnings||!1,xr=window.Polymer&&window.Polymer.syncInitialRender||!1,Re=window.Polymer&&window.Polymer.legacyUndefined||!1,Pr=window.Polymer&&window.Polymer.orderedComputed||!1,Er=!0;const Tr=function(i){Er=i};let yt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ai=window.Polymer&&window.Polymer.fastDomIf||!1,Ir=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Ko=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Nr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Sr=0;const g=function(i){let e=i.__mixinApplications;e||(e=new WeakMap,i.__mixinApplications=e);let t=Sr++;function s(r){let n=r.__mixinSet;if(n&&n[t])return r;let o=e,a=o.get(r);if(!a){a=i(r),o.set(r,a);let l=Object.create(a.__mixinSet||n||null);l[t]=!0,a.__mixinSet=l}return a}return s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let it={},li={};function bt(i,e){it[i]=li[i.toLowerCase()]=e}function vt(i){return it[i]||li[i.toLowerCase()]}function Or(i){i.querySelector("style")&&console.warn("dom-module %s has style outside template",i.id)}class Y extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let s=vt(e);return s&&t?s.querySelector(t):s}return null}attributeChangedCallback(e,t,s,r){t!==s&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=ie(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=tt(t)}return this.__assetpath}register(e){if(e=e||this.id,e){if(re&&vt(e)!==void 0)throw bt(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,bt(e,this),Or(this)}}}Y.prototype.modules=it;customElements.define("dom-module",Y);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mr="link[rel=import][type~=css]",zr="include",Ct="shady-unscoped";function rt(i){return Y.import(i)}function wt(i){let e=i.body?i.body:i;const t=et(e.textContent,i.baseURI),s=document.createElement("style");return s.textContent=t,s}function kr(i){const e=i.trim().split(/\s+/),t=[];for(let s=0;s<e.length;s++)t.push(...Lr(e[s]));return t}function Lr(i){const e=rt(i);if(!e)return console.warn("Could not find style data in module named",i),[];if(e._styles===void 0){const t=[];t.push(...st(e));const s=e.querySelector("template");s&&t.push(...Ee(s,e.assetpath)),e._styles=t}return e._styles}function Ee(i,e){if(!i._styles){const t=[],s=i.content.querySelectorAll("style");for(let r=0;r<s.length;r++){let n=s[r],o=n.getAttribute(zr);o&&t.push(...kr(o).filter(function(a,l,d){return d.indexOf(a)===l})),e&&(n.textContent=et(n.textContent,e)),t.push(n)}i._styles=t}return i._styles}function Dr(i){let e=rt(i);return e?st(e):[]}function st(i){const e=[],t=i.querySelectorAll(Mr);for(let s=0;s<t.length;s++){let r=t[s];if(r.import){const n=r.import,o=r.hasAttribute(Ct);if(o&&!n._unscopedStyle){const a=wt(n);a.setAttribute(Ct,""),n._unscopedStyle=a}else n._style||(n._style=wt(n));e.push(o?n._unscopedStyle:n._style)}}return e}function Jo(i){let e=i.trim().split(/\s+/),t="";for(let s=0;s<e.length;s++)t+=Hr(e[s]);return t}function Hr(i){let e=rt(i);if(e&&e._cssText===void 0){let t=Fr(e),s=e.querySelector("template");s&&(t+=Rr(s,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",i),e&&e._cssText||""}function Rr(i,e){let t="";const s=Ee(i,e);for(let r=0;r<s.length;r++){let n=s[r];n.parentNode&&n.parentNode.removeChild(n),t+=n.textContent}return t}function Fr(i){let e="",t=st(i);for(let s=0;s<t.length;s++)e+=t[s].textContent;return e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?i=>ShadyDOM.patch(i):i=>i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fe(i){return i.indexOf(".")>=0}function N(i){let e=i.indexOf(".");return e===-1?i:i.slice(0,e)}function di(i,e){return i.indexOf(e+".")===0}function se(i,e){return e.indexOf(i+".")===0}function be(i,e,t){return e+t.slice(i.length)}function Xo(i,e){return i===e||di(i,e)||se(i,e)}function ee(i){if(Array.isArray(i)){let e=[];for(let t=0;t<i.length;t++){let s=i[t].toString().split(".");for(let r=0;r<s.length;r++)e.push(s[r])}return e.join(".")}else return i}function ci(i){return Array.isArray(i)?ee(i).split("."):i.toString().split(".")}function y(i,e,t){let s=i,r=ci(e);for(let n=0;n<r.length;n++){if(!s)return;let o=r[n];s=s[o]}return t&&(t.path=r.join(".")),s}function At(i,e,t){let s=i,r=ci(e),n=r[r.length-1];if(r.length>1){for(let o=0;o<r.length-1;o++){let a=r[o];if(s=s[a],!s)return}s[n]=t}else s[e]=t;return r.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ve={},Br=/-[a-z]/g,Vr=/([A-Z])/g;function hi(i){return ve[i]||(ve[i]=i.indexOf("-")<0?i:i.replace(Br,e=>e[1].toUpperCase()))}function Te(i){return ve[i]||(ve[i]=i.replace(Vr,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ur=0,ui=0,B=[],jr=0,Be=!1,pi=document.createTextNode("");new window.MutationObserver(Yr).observe(pi,{characterData:!0});function Yr(){Be=!1;const i=B.length;for(let e=0;e<i;e++){let t=B[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}B.splice(0,i),ui+=i}const Zo={after(i){return{run(e){return window.setTimeout(e,i)},cancel(e){window.clearTimeout(e)}}},run(i,e){return window.setTimeout(i,e)},cancel(i){window.clearTimeout(i)}},Qo={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},qr={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},nt={run(i){return Be||(Be=!0,pi.textContent=jr++),B.push(i),Ur++},cancel(i){const e=i-ui;if(e>=0){if(!B[e])throw new Error("invalid async handle: "+i);B[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Gr=nt,fi=g(i=>{class e extends i{static createProperties(s){const r=this.prototype;for(let n in s)n in r||r._createPropertyAccessor(n)}static attributeNameForProperty(s){return s.toLowerCase()}static typeForProperty(s){}_createPropertyAccessor(s,r){this._addPropertyToAttributeMap(s),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[s]||(this.__dataHasAccessor[s]=!0,this._definePropertyAccessor(s,r))}_addPropertyToAttributeMap(s){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[s];return r||(r=this.constructor.attributeNameForProperty(s),this.__dataAttributes[r]=s),r}_definePropertyAccessor(s,r){Object.defineProperty(this,s,{get(){return this.__data[s]},set:r?function(){}:function(n){this._setPendingProperty(s,n,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let s in this.__dataHasAccessor)this.hasOwnProperty(s)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[s]=this[s],delete this[s])}_initializeInstanceProperties(s){Object.assign(this,s)}_setProperty(s,r){this._setPendingProperty(s,r)&&this._invalidateProperties()}_getProperty(s){return this.__data[s]}_setPendingProperty(s,r,n){let o=this.__data[s],a=this._shouldPropertyChange(s,r,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(s in this.__dataOld)&&(this.__dataOld[s]=o),this.__data[s]=r,this.__dataPending[s]=r),a}_isPropertyPending(s){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(s))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Gr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const s=this.__data,r=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(s,r,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(s,r,n)),this.__dataCounter--}_shouldPropertiesChange(s,r,n){return Boolean(r)}_propertiesChanged(s,r,n){}_shouldPropertyChange(s,r,n){return n!==r&&(n===n||r===r)}attributeChangedCallback(s,r,n,o){r!==n&&this._attributeToProperty(s,n),super.attributeChangedCallback&&super.attributeChangedCallback(s,r,n,o)}_attributeToProperty(s,r,n){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[s]||s;this[a]=this._deserializeValue(r,n||this.constructor.typeForProperty(a))}}_propertyToAttribute(s,r,n){this.__serializing=!0,n=arguments.length<3?this[s]:n,this._valueToNodeAttribute(this,n,r||this.constructor.attributeNameForProperty(s)),this.__serializing=!1}_valueToNodeAttribute(s,r,n){const o=this._serializeValue(r);(n==="class"||n==="name"||n==="slot")&&(s=_(s)),o===void 0?s.removeAttribute(n):s.setAttribute(n,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(s){switch(typeof s){case"boolean":return s?"":void 0;default:return s!=null?s.toString():void 0}}_deserializeValue(s,r){switch(r){case Boolean:return s!==null;case Number:return Number(s);default:return s}}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _i={};let _e=HTMLElement.prototype;for(;_e;){let i=Object.getOwnPropertyNames(_e);for(let e=0;e<i.length;e++)_i[i[e]]=!0;_e=Object.getPrototypeOf(_e)}const Wr=(()=>window.trustedTypes?i=>trustedTypes.isHTML(i)||trustedTypes.isScript(i)||trustedTypes.isScriptURL(i):()=>!1)();function $r(i,e){if(!_i[e]){let t=i[e];t!==void 0&&(i.__data?i._setPendingProperty(e,t):(i.__dataProto?i.hasOwnProperty(JSCompiler_renameProperty("__dataProto",i))||(i.__dataProto=Object.create(i.__dataProto)):i.__dataProto={},i.__dataProto[e]=t))}}const Kr=g(i=>{const e=fi(i);class t extends e{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let n=0;n<r.length;n++)this.prototype._createPropertyAccessor(hi(r[n]))}static attributeNameForProperty(r){return Te(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let n in r)this._setProperty(n,r[n])}_ensureAttribute(r,n){const o=this;o.hasAttribute(r)||this._valueToNodeAttribute(o,n,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(Wr(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,n){let o;switch(n){case Object:try{o=JSON.parse(r)}catch{o=r}break;case Array:try{o=JSON.parse(r)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:o=isNaN(r)?String(r):Number(r),o=new Date(o);break;default:o=super._deserializeValue(r,n);break}return o}_definePropertyAccessor(r,n){$r(this,r),super._definePropertyAccessor(r,n)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return Boolean(this.__dataPending&&r in this.__dataPending)}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Jr={"dom-if":!0,"dom-repeat":!0};let xt=!1,Pt=!1;function Xr(){if(!xt){xt=!0;const i=document.createElement("textarea");i.placeholder="a",Pt=i.placeholder===i.textContent}return Pt}function Zr(i){Xr()&&i.localName==="textarea"&&i.placeholder&&i.placeholder===i.textContent&&(i.textContent=null)}const Qr=(()=>{const i=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,t,s)=>{const r=t.getAttribute(s);if(i&&s.startsWith("on-")){e.setAttribute(s,i.createScript(r,s));return}e.setAttribute(s,r)}})();function es(i){let e=i.getAttribute("is");if(e&&Jr[e]){let t=i;for(t.removeAttribute("is"),i=t.ownerDocument.createElement(e),t.parentNode.replaceChild(i,t),i.appendChild(t);t.attributes.length;){const{name:s}=t.attributes[0];Qr(i,t,s),t.removeAttribute(s)}}return i}function mi(i,e){let t=e.parentInfo&&mi(i,e.parentInfo);if(t){for(let s=t.firstChild,r=0;s;s=s.nextSibling)if(e.parentIndex===r++)return s}else return i}function ts(i,e,t,s){s.id&&(e[s.id]=t)}function is(i,e,t){if(t.events&&t.events.length)for(let s=0,r=t.events,n;s<r.length&&(n=r[s]);s++)i._addMethodEventListenerToNode(e,n.name,n.value,i)}function rs(i,e,t,s){t.templateInfo&&(e._templateInfo=t.templateInfo,e._parentTemplateInfo=s)}function ss(i,e,t){return i=i._methodHost||i,function(r){i[t]?i[t](r,r.detail):console.warn("listener method `"+t+"` not defined")}}const ns=g(i=>{class e extends i{static _parseTemplate(s,r){if(!s._templateInfo){let n=s._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=Boolean(r),n.stripWhiteSpace=r&&r.stripWhiteSpace||s.hasAttribute&&s.hasAttribute("strip-whitespace"),this._parseTemplateContent(s,n,{parent:null})}return s._templateInfo}static _parseTemplateContent(s,r,n){return this._parseTemplateNode(s.content,r,n)}static _parseTemplateNode(s,r,n){let o=!1,a=s;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,r,n)||o:a.localName==="slot"&&(r.hasInsertionPoint=!0),Zr(a),a.firstChild&&this._parseTemplateChildNodes(a,r,n),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,r,n)||o),o||n.noted}static _parseTemplateChildNodes(s,r,n){if(!(s.localName==="script"||s.localName==="style"))for(let o=s.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=es(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)o.textContent+=c.textContent,l=c.nextSibling,s.removeChild(c),c=l;if(r.stripWhiteSpace&&!o.textContent.trim()){s.removeChild(o);continue}}let d={parentIndex:a,parentInfo:n};this._parseTemplateNode(o,r,d)&&(d.infoIndex=r.nodeInfoList.push(d)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(s,r,n){let o=s,a=this._parseTemplate(o,r);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),n.templateInfo=a,!0}static _parseTemplateNodeAttributes(s,r,n){let o=!1,a=Array.from(s.attributes);for(let l=a.length-1,d;d=a[l];l--)o=this._parseTemplateNodeAttribute(s,r,n,d.name,d.value)||o;return o}static _parseTemplateNodeAttribute(s,r,n,o,a){return o.slice(0,3)==="on-"?(s.removeAttribute(o),n.events=n.events||[],n.events.push({name:o.slice(3),value:a}),!0):o==="id"?(n.id=a,!0):!1}static _contentForTemplate(s){let r=s._templateInfo;return r&&r.content||s.content}_stampTemplate(s,r){s&&!s.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(s),r=r||this.constructor._parseTemplate(s);let n=r.nodeInfoList,o=r.content||s.content,a=document.importNode(o,!0);a.__noInsertionPoint=!r.hasInsertionPoint;let l=a.nodeList=new Array(n.length);a.$={};for(let d=0,c=n.length,h;d<c&&(h=n[d]);d++){let u=l[d]=mi(a,h);ts(this,a.$,u,h),rs(this,u,h,r),is(this,u,h)}return a=a,a}_addMethodEventListenerToNode(s,r,n,o){o=o||s;let a=ss(o,r,n);return this._addEventListenerToNode(s,r,a),a}_addEventListenerToNode(s,r,n){s.addEventListener(r,n)}_removeEventListenerFromNode(s,r,n){s.removeEventListener(r,n)}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let ne=0;const oe=[],f={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},gi="__computeInfo",os=/[A-Z]/;function Se(i,e,t){let s=i[e];if(!s)s=i[e]={};else if(!i.hasOwnProperty(e)&&(s=i[e]=Object.create(i[e]),t))for(let r in s){let n=s[r],o=s[r]=Array(n.length);for(let a=0;a<n.length;a++)o[a]=n[a]}return s}function te(i,e,t,s,r,n){if(e){let o=!1;const a=ne++;for(let l in t){let d=r?N(l):l,c=e[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==a)&&(!r||ot(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(i,l,t,s,p.info,r,n),o=!0)}return o}return!1}function as(i,e,t,s,r,n,o,a){let l=!1,d=o?N(s):s,c=e[d];if(c)for(let h=0,u=c.length,p;h<u&&(p=c[h]);h++)(!p.info||p.info.lastRun!==t)&&(!o||ot(s,p.trigger))&&(p.info&&(p.info.lastRun=t),p.fn(i,s,r,n,p.info,o,a),l=!0);return l}function ot(i,e){if(e){let t=e.name;return t==i||!!(e.structured&&di(t,i))||!!(e.wildcard&&se(t,i))}else return!0}function Et(i,e,t,s,r){let n=typeof r.method=="string"?i[r.method]:r.method,o=r.property;n?n.call(i,i.__data[o],s[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function ls(i,e,t,s,r){let n=i[f.NOTIFY],o,a=ne++;for(let d in e)e[d]&&(n&&as(i,n,a,d,t,s,r)||r&&ds(i,d,t))&&(o=!0);let l;o&&(l=i.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function ds(i,e,t){let s=N(e);if(s!==e){let r=Te(s)+"-changed";return yi(i,r,t[e],e),!0}return!1}function yi(i,e,t,s){let r={value:t,queueProperty:!0};s&&(r.path=s),_(i).dispatchEvent(new CustomEvent(e,{detail:r}))}function cs(i,e,t,s,r,n){let a=(n?N(e):e)!=e?e:null,l=a?y(i,a):i.__data[e];a&&l===void 0&&(l=t[e]),yi(i,r.eventName,l,a)}function hs(i,e,t,s,r){let n,o=i.detail,a=o&&o.path;a?(s=be(t,s,a),n=o&&o.value):n=i.currentTarget[t],n=r?!n:n,(!e[f.READ_ONLY]||!e[f.READ_ONLY][s])&&e._setPendingPropertyOrPath(s,n,!0,Boolean(a))&&(!o||!o.queueProperty)&&e._invalidateProperties()}function us(i,e,t,s,r){let n=i.__data[e];ye&&(n=ye(n,r.attrName,"attribute",i)),i._propertyToAttribute(e,r.attrName,n)}function ps(i,e,t,s){let r=i[f.COMPUTE];if(r)if(Pr){ne++;const n=_s(i),o=[];for(let l in e)Tt(l,r,o,n,s);let a;for(;a=o.shift();)bi(i,"",e,t,a)&&Tt(a.methodInfo,r,o,n,s);Object.assign(t,i.__dataOld),Object.assign(e,i.__dataPending),i.__dataPending=null}else{let n=e;for(;te(i,r,n,t,s);)Object.assign(t,i.__dataOld),Object.assign(e,i.__dataPending),n=i.__dataPending,i.__dataPending=null}}const fs=(i,e,t)=>{let s=0,r=e.length-1,n=-1;for(;s<=r;){const o=s+r>>1,a=t.get(e[o].methodInfo)-t.get(i.methodInfo);if(a<0)s=o+1;else if(a>0)r=o-1;else{n=o;break}}n<0&&(n=r+1),e.splice(n,0,i)},Tt=(i,e,t,s,r)=>{const n=r?N(i):i,o=e[n];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==ne&&(!r||ot(i,l.trigger))&&(l.info.lastRun=ne,fs(l.info,t,s))}};function _s(i){let e=i.constructor.__orderedComputedDeps;if(!e){e=new Map;const t=i[f.COMPUTE];let{counts:s,ready:r,total:n}=ms(i),o;for(;o=r.shift();){e.set(o,e.size);const a=t[o];a&&a.forEach(l=>{const d=l.info.methodInfo;--n,--s[d]===0&&r.push(d)})}n!==0&&console.warn(`Computed graph for ${i.localName} incomplete; circular?`),i.constructor.__orderedComputedDeps=e}return e}function ms(i){const e=i[gi],t={},s=i[f.COMPUTE],r=[];let n=0;for(let o in e){const a=e[o];n+=t[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in s)e[o]||r.push(o);return{counts:t,ready:r,total:n}}function bi(i,e,t,s,r){let n=Ve(i,e,t,s,r);if(n===oe)return!1;let o=r.methodInfo;return i.__dataHasAccessor&&i.__dataHasAccessor[o]?i._setPendingProperty(o,n,!0):(i[o]=n,!1)}function gs(i,e,t){let s=i.__dataLinkedPaths;if(s){let r;for(let n in s){let o=s[n];se(n,e)?(r=be(n,o,e),i._setPendingPropertyOrPath(r,t,!0,!0)):se(o,e)&&(r=be(o,n,e),i._setPendingPropertyOrPath(r,t,!0,!0))}}}function Oe(i,e,t,s,r,n,o){t.bindings=t.bindings||[];let a={kind:s,target:r,parts:n,literal:o,isCompound:n.length!==1};if(t.bindings.push(a),ws(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||Te(r)+"-changed",a.listenerNegate=c}let l=e.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,ys(i,e,a,c,l)}}function ys(i,e,t,s,r){if(!s.literal)if(t.kind==="attribute"&&t.target[0]==="-")console.warn("Cannot set attribute "+t.target+' because "-" is not a valid attribute starting character');else{let n=s.dependencies,o={index:r,binding:t,part:s,evaluator:i};for(let a=0;a<n.length;a++){let l=n[a];typeof l=="string"&&(l=Ci(l),l.wildcard=!0),i._addTemplatePropertyEffect(e,l.rootProperty,{fn:bs,info:o,trigger:l})}}}function bs(i,e,t,s,r,n,o){let a=o[r.index],l=r.binding,d=r.part;if(n&&d.source&&e.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=t[e];e=be(d.source,l.target,e),a._setPendingPropertyOrPath(e,c,!1,!0)&&i._enqueueClient(a)}else{let c=r.evaluator._evaluateBinding(i,d,e,t,s,n);c!==oe&&vs(i,a,l,d,c)}}function vs(i,e,t,s,r){if(r=Cs(e,r,t,s),ye&&(r=ye(r,t.target,t.kind,e)),t.kind=="attribute")i._valueToNodeAttribute(e,r,t.target);else{let n=t.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?(!e[f.READ_ONLY]||!e[f.READ_ONLY][n])&&e._setPendingProperty(n,r)&&i._enqueueClient(e):i._setUnmanagedPropertyToNode(e,n,r)}}function Cs(i,e,t,s){if(t.isCompound){let r=i.__dataCompoundStorage[t.target];r[s.compoundIndex]=e,e=r.join("")}return t.kind!=="attribute"&&(t.target==="textContent"||t.target==="value"&&(i.localName==="input"||i.localName==="textarea"))&&(e=e==null?"":e),e}function ws(i){return Boolean(i.target)&&i.kind!="attribute"&&i.kind!="text"&&!i.isCompound&&i.parts[0].mode==="{"}function As(i,e){let{nodeList:t,nodeInfoList:s}=e;if(s.length)for(let r=0;r<s.length;r++){let n=s[r],o=t[r],a=n.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];xs(o,d),Ps(o,i,d)}o.__dataHost=i}}function xs(i,e){if(e.isCompound){let t=i.__dataCompoundStorage||(i.__dataCompoundStorage={}),s=e.parts,r=new Array(s.length);for(let o=0;o<s.length;o++)r[o]=s[o].literal;let n=e.target;t[n]=r,e.literal&&e.kind=="property"&&(n==="className"&&(i=_(i)),i[n]=e.literal)}}function Ps(i,e,t){if(t.listenerEvent){let s=t.parts[0];i.addEventListener(t.listenerEvent,function(r){hs(r,e,t.target,s.source,s.negate)})}}function It(i,e,t,s,r,n){n=e.static||n&&(typeof n!="object"||n[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:n};for(let a=0,l;a<e.args.length&&(l=e.args[a]);a++)l.literal||i._addPropertyEffect(l.rootProperty,t,{fn:s,info:o,trigger:l});return n&&i._addPropertyEffect(e.methodName,t,{fn:s,info:o}),o}function Ve(i,e,t,s,r){let n=i._methodHost||i,o=n[r.methodName];if(o){let a=i._marshalArgs(r.args,e,t);return a===oe?oe:o.apply(n,a)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Es=[],vi="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ts="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Is="(?:'(?:[^'\\\\]|\\\\.)*')",Ns='(?:"(?:[^"\\\\]|\\\\.)*")',Ss="(?:"+Is+"|"+Ns+")",Nt="(?:("+vi+"|"+Ts+"|"+Ss+")\\s*)",Os="(?:"+Nt+"(?:,\\s*"+Nt+")*)",Ms="(?:\\(\\s*(?:"+Os+"?)\\)\\s*)",zs="("+vi+"\\s*"+Ms+"?)",ks="(\\[\\[|{{)\\s*",Ls="(?:]]|}})",Ds="(?:(!)\\s*)?",Hs=ks+Ds+zs+Ls,St=new RegExp(Hs,"g");function Ot(i){let e="";for(let t=0;t<i.length;t++)e+=i[t].literal||"";return e}function Me(i){let e=i.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let s={methodName:e[1],static:!0,args:Es};if(e[2].trim()){let r=e[2].replace(/\\,/g,"&comma;").split(",");return Rs(r,s)}else return s}return null}function Rs(i,e){return e.args=i.map(function(t){let s=Ci(t);return s.literal||(e.static=!1),s},this),e}function Ci(i){let e=i.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),t={name:e,value:"",literal:!1},s=e[0];switch(s==="-"&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':t.value=e.slice(1,-1),t.literal=!0;break;case"#":t.value=Number(e),t.literal=!0;break}return t.literal||(t.rootProperty=N(e),t.structured=Fe(e),t.structured&&(t.wildcard=e.slice(-2)==".*",t.wildcard&&(t.name=e.slice(0,-2)))),t}function Mt(i,e,t){let s=y(i,t);return s===void 0&&(s=e[t]),s}function wi(i,e,t,s){const r={indexSplices:s};Re&&!i._overrideLegacyUndefined&&(e.splices=r),i.notifyPath(t+".splices",r),i.notifyPath(t+".length",e.length),Re&&!i._overrideLegacyUndefined&&(r.indexSplices=[])}function K(i,e,t,s,r,n){wi(i,e,t,[{index:s,addedCount:r,removed:n,object:e,type:"splice"}])}function Fs(i){return i[0].toUpperCase()+i.substring(1)}const at=g(i=>{const e=ns(Kr(i));class t extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return f}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(J.length){let r=J[J.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let n=this[f.READ_ONLY];for(let o in r)(!n||!n[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=r[o])}_addPropertyEffect(r,n,o){this._createPropertyAccessor(r,n==f.READ_ONLY);let a=Se(this,n,!0)[r];a||(a=this[n][r]=[]),a.push(o)}_removePropertyEffect(r,n,o){let a=Se(this,n,!0)[r],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(r,n){let o=this[n];return Boolean(o&&o[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,f.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,f.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,f.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,f.COMPUTE)}_setPendingPropertyOrPath(r,n,o,a){if(a||N(Array.isArray(r)?r[0]:r)!==r){if(!a){let l=y(this,r);if(r=At(this,r,n),!r||!super._shouldPropertyChange(r,n,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,n,o))return gs(this,r,n),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,n,o);this[r]=n}return!1}_setUnmanagedPropertyToNode(r,n,o){(o!==r[n]||typeof o=="object")&&(n==="className"&&(r=_(r)),r[n]=o)}_setPendingProperty(r,n,o){let a=this.__dataHasPaths&&Fe(r),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,n,l[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),a?this.__dataTemp[r]=n:this.__data[r]=n,this.__dataPending[r]=n,(a||this[f.NOTIFY]&&this[f.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=o),!0):!1}_setProperty(r,n){this._setPendingProperty(r,n,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let n=0;n<r.length;n++){let o=r[n];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,n){for(let o in r)(n||!this[f.READ_ONLY]||!this[f.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,r[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,n,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;ps(this,n,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(n,o,a),this._flushClients(),te(this,this[f.REFLECT],n,o,a),te(this,this[f.OBSERVE],n,o,a),l&&ls(this,l,n,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,n,o){this[f.PROPAGATE]&&te(this,this[f.PROPAGATE],r,n,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,n,o)}_runEffectsForTemplate(r,n,o,a){const l=(d,c)=>{te(this,r.propertyEffects,d,o,c,r.nodeList);for(let h=r.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,o,c)};r.runEffects?r.runEffects(l,n,a):l(n,a)}linkPaths(r,n){r=ee(r),n=ee(n),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=n}unlinkPaths(r){r=ee(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,n){let o={path:""},a=y(this,r,o);wi(this,a,o.path,n)}get(r,n){return y(n||this,r)}set(r,n,o){o?At(o,r,n):(!this[f.READ_ONLY]||!this[f.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,n,!0)&&this._invalidateProperties()}push(r,...n){let o={path:""},a=y(this,r,o),l=a.length,d=a.push(...n);return n.length&&K(this,a,o.path,l,n.length,[]),d}pop(r){let n={path:""},o=y(this,r,n),a=Boolean(o.length),l=o.pop();return a&&K(this,o,n.path,o.length,0,[l]),l}splice(r,n,o,...a){let l={path:""},d=y(this,r,l);n<0?n=d.length-Math.floor(-n):n&&(n=Math.floor(n));let c;return arguments.length===2?c=d.splice(n):c=d.splice(n,o,...a),(a.length||c.length)&&K(this,d,l.path,n,a.length,c),c}shift(r){let n={path:""},o=y(this,r,n),a=Boolean(o.length),l=o.shift();return a&&K(this,o,n.path,0,0,[l]),l}unshift(r,...n){let o={path:""},a=y(this,r,o),l=a.unshift(...n);return n.length&&K(this,a,o.path,0,n.length,[]),l}notifyPath(r,n){let o;if(arguments.length==1){let a={path:""};n=y(this,r,a),o=a.path}else Array.isArray(r)?o=ee(r):o=r;this._setPendingPropertyOrPath(o,n,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,n){this._addPropertyEffect(r,f.READ_ONLY),n&&(this["_set"+Fs(r)]=function(o){this._setProperty(r,o)})}_createPropertyObserver(r,n,o){let a={property:r,method:n,dynamicFn:Boolean(o)};this._addPropertyEffect(r,f.OBSERVE,{fn:Et,info:a,trigger:{name:r}}),o&&this._addPropertyEffect(n,f.OBSERVE,{fn:Et,info:a,trigger:{name:n}})}_createMethodObserver(r,n){let o=Me(r);if(!o)throw new Error("Malformed observer expression '"+r+"'");It(this,o,f.OBSERVE,Ve,null,n)}_createNotifyingProperty(r){this._addPropertyEffect(r,f.NOTIFY,{fn:cs,info:{eventName:Te(r)+"-changed",property:r}})}_createReflectedProperty(r){let n=this.constructor.attributeNameForProperty(r);n[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+n+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,f.REFLECT,{fn:us,info:{attrName:n}})}_createComputedProperty(r,n,o){let a=Me(n);if(!a)throw new Error("Malformed computed expression '"+n+"'");const l=It(this,a,f.COMPUTE,bi,r,o);Se(this,gi)[r]=l}_marshalArgs(r,n,o){const a=this.__data,l=[];for(let d=0,c=r.length;d<c;d++){let{name:h,structured:u,wildcard:p,value:m,literal:A}=r[d];if(!A)if(p){const x=se(h,n),b=Mt(a,o,x?n:h);m={path:x?n:h,value:b,base:x?y(a,h):b}}else m=u?Mt(a,o,h):a[h];if(Re&&!this._overrideLegacyUndefined&&m===void 0&&r.length>1)return oe;l[d]=m}return l}static addPropertyEffect(r,n,o){this.prototype._addPropertyEffect(r,n,o)}static createPropertyObserver(r,n,o){this.prototype._createPropertyObserver(r,n,o)}static createMethodObserver(r,n){this.prototype._createMethodObserver(r,n)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,n){this.prototype._createReadOnlyProperty(r,n)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,n,o){this.prototype._createComputedProperty(r,n,o)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,n){let o=this.constructor._parseTemplate(r),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(n)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=r._parentTemplateInfo||this.__templateInfo,d=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=d,d?d.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(r,n,o){let a=r.hostProps=r.hostProps||{};a[n]=!0;let l=r.propertyEffects=r.propertyEffects||{};(l[n]=l[n]||[]).push(o)}_stampTemplate(r,n){n=n||this._bindTemplate(r,!0),J.push(this);let o=super._stampTemplate(r,n);if(J.pop(),n.nodeList=o.nodeList,!n.wasPreBound){let a=n.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=n,As(this,n),this.__dataClientsReady&&(this._runEffectsForTemplate(n,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(r){const n=r.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=n;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),n.nextSibling=n.previousSibling=null;let d=n.childNodes;for(let c=0;c<d.length;c++){let h=d[c];_(_(h).parentNode).removeChild(h)}}static _parseTemplateNode(r,n,o){let a=e._parseTemplateNode.call(this,r,n,o);if(r.nodeType===Node.TEXT_NODE){let l=this._parseBindings(r.textContent,n);l&&(r.textContent=Ot(l)||" ",Oe(this,n,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(r,n,o,a,l){let d=this._parseBindings(l,n);if(d){let c=a,h="property";os.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let u=Ot(d);return u&&h=="attribute"&&(a=="class"&&r.hasAttribute("class")&&(u+=" "+r.getAttribute(a)),r.setAttribute(a,u)),h=="attribute"&&c=="disable-upgrade$"&&r.setAttribute(a,""),r.localName==="input"&&c==="value"&&r.setAttribute(c,""),r.removeAttribute(c),h==="property"&&(a=hi(a)),Oe(this,n,o,h,a,d,u),!0}else return e._parseTemplateNodeAttribute.call(this,r,n,o,a,l)}static _parseTemplateNestedTemplate(r,n,o){let a=e._parseTemplateNestedTemplate.call(this,r,n,o);const l=r.parentNode,d=o.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";yt&&(c||h)&&(l.removeChild(r),o=o.parentInfo,o.templateInfo=d,o.noted=!0,a=!1);let u=d.hostProps;if(ai&&c)u&&(n.hostProps=Object.assign(n.hostProps||{},u),yt||(o.parentInfo.noted=!0));else{let p="{";for(let m in u){let A=[{mode:p,source:m,dependencies:[m],hostProp:!0}];Oe(this,n,o,"property","_host_"+m,A)}}return a}static _parseBindings(r,n){let o=[],a=0,l;for(;(l=St.exec(r))!==null;){l.index>a&&o.push({literal:r.slice(a,l.index)});let d=l[1][0],c=Boolean(l[2]),h=l[3].trim(),u=!1,p="",m=-1;d=="{"&&(m=h.indexOf("::"))>0&&(p=h.substring(m+2),h=h.substring(0,m),u=!0);let A=Me(h),x=[];if(A){let{args:b,methodName:v}=A;for(let Ne=0;Ne<b.length;Ne++){let gt=b[Ne];gt.literal||x.push(gt)}let D=n.dynamicFns;(D&&D[v]||A.static)&&(x.push(v),A.dynamicFn=!0)}else x.push(h);o.push({source:h,mode:d,negate:c,customEvent:u,signature:A,dependencies:x,event:p}),a=St.lastIndex}if(a&&a<r.length){let d=r.substring(a);d&&o.push({literal:d})}return o.length?o:null}static _evaluateBinding(r,n,o,a,l,d){let c;return n.signature?c=Ve(r,o,a,l,n.signature):o!=n.source?c=y(r,n.source):d&&Fe(o)?c=y(r,o):c=r.__data[o],n.negate&&(c=!c),c}}return t}),J=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ea(i){}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Bs(i){const e={};for(let t in i){const s=i[t];e[t]=typeof s=="function"?{type:s}:s}return e}const Vs=g(i=>{const e=fi(i);function t(n){const o=Object.getPrototypeOf(n);return o.prototype instanceof r?o:null}function s(n){if(!n.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",n))){let o=null;if(n.hasOwnProperty(JSCompiler_renameProperty("properties",n))){const a=n.properties;a&&(o=Bs(a))}n.__ownProperties=o}return n.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=t(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=s(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=t(this);this.__properties=Object.assign({},o&&o._properties,s(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Us="3.5.1",zt=window.ShadyCSS&&window.ShadyCSS.cssBuild,js=g(i=>{const e=Vs(at(i));function t(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function s(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function r(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function n(l,d,c,h){if(!zt){const u=d.content.querySelectorAll("style"),p=Ee(d),m=Dr(c),A=d.content.firstElementChild;for(let b=0;b<m.length;b++){let v=m[b];v.textContent=l._processStyleText(v.textContent,h),d.content.insertBefore(v,A)}let x=0;for(let b=0;b<p.length;b++){let v=p[b],D=u[x];D!==v?(v=v.cloneNode(!0),D.parentNode.insertBefore(v,D)):x++,v.textContent=l._processStyleText(v.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),Nr&&zt&&Cr){const u=d.content.querySelectorAll("style");if(u){let p="";Array.from(u).forEach(m=>{p+=m.textContent,m.parentNode.removeChild(m)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let d=null;if(l&&(!re||Ar)&&(d=Y.import(l,"template"),re&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends e{static get polymerElementVersion(){return Us}static _finalizeClass(){e._finalizeClass.call(this);const d=s(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):ni||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)r(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let u=0;u<d.length;u++)h._createMethodObserver(d[u],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=tt(d.url);else{const c=Y.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=wr,this.importPath=this.constructor.importPath;let d=t(this.constructor);if(!!d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let u=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,u,!0):this[c]=u}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return et(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,u=h?ie(h):"";n(this,c,d,u),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=_(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),xr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=ie(this.importPath)),ie(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,e._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return oi&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kt=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:i=>i});class Ai{constructor(e,t){Pi(e,t);const s=t.reduce((r,n,o)=>r+xi(n)+e[o+1],e[0]);this.value=s.toString()}toString(){return this.value}}function xi(i){if(i instanceof Ai)return i.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${i}`)}function Ys(i){if(i instanceof HTMLTemplateElement)return i.innerHTML;if(i instanceof Ai)return xi(i);throw new Error(`non-template value passed to Polymer's html function: ${i}`)}const M=function(e,...t){Pi(e,t);const s=document.createElement("template");let r=t.reduce((n,o,a)=>n+Ys(o)+e[a+1],e[0]);return kt&&(r=kt.createHTML(r)),s.innerHTML=r,s},Pi=(i,e)=>{if(!Array.isArray(i)||!Array.isArray(i.raw)||e.length!==i.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const P=js(HTMLElement),qs=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ge=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Gs(){function i(){return!0}return Ei(i)}function Ws(){try{return $s()?!0:Ks()?ge?!Js():!Gs():!1}catch{return!1}}function $s(){return localStorage.getItem("vaadin.developmentmode.force")}function Ks(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Js(){return!!(ge&&Object.keys(ge).map(e=>ge[e]).filter(e=>e.productionMode).length>0)}function Ei(i,e){if(typeof i!="function")return;const t=qs.exec(i.toString());if(t)try{i=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return i(e)}window.Vaadin=window.Vaadin||{};const Lt=function(i,e){if(window.Vaadin.developmentMode)return Ei(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ws());function Xs(){}const Zs=function(){if(typeof Lt=="function")return Lt(Xs)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Dt=0,Ti=0;const V=[];let Ht=0,Ue=!1;const Ii=document.createTextNode("");new window.MutationObserver(Qs).observe(Ii,{characterData:!0});function Qs(){Ue=!1;const i=V.length;for(let e=0;e<i;e++){const t=V[e];if(t)try{t()}catch(s){setTimeout(()=>{throw s})}}V.splice(0,i),Ti+=i}const Ni={after(i){return{run(e){return window.setTimeout(e,i)},cancel(e){window.clearTimeout(e)}}},run(i,e){return window.setTimeout(i,e)},cancel(i){window.clearTimeout(i)}},ta={run(i){return window.requestAnimationFrame(i)},cancel(i){window.cancelAnimationFrame(i)}},en={run(i){return window.requestIdleCallback?window.requestIdleCallback(i):window.setTimeout(i,16)},cancel(i){window.cancelIdleCallback?window.cancelIdleCallback(i):window.clearTimeout(i)}},tn={run(i){Ue||(Ue=!0,Ii.textContent=Ht,Ht+=1),V.push(i);const e=Dt;return Dt+=1,e},cancel(i){const e=i-Ti;if(e>=0){if(!V[e])throw new Error(`invalid async handle: ${i}`);V[e]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class q{static debounce(e,t,s){return e instanceof q?e._cancelAsync():e=new q,e.setConfig(t,s),e}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,ae.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ae.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}let ae=new Set;function rn(i){ae.add(i)}function sn(){const i=Boolean(ae.size);return ae.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),i}const ia=()=>{let i;do i=sn();while(i)};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ze{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,s){const{scrollLeft:r}=s;if(t!=="rtl"||!e)return r;switch(e){case"negative":return s.scrollWidth-s.clientWidth+r;case"reverse":return s.scrollWidth-s.clientWidth-r;default:return r}}static setNormalizedScrollLeft(e,t,s,r){if(t!=="rtl"||!e){s.scrollLeft=r;return}switch(e){case"negative":s.scrollLeft=s.clientWidth-s.scrollWidth+r;break;case"reverse":s.scrollLeft=s.scrollWidth-s.clientWidth-r;break;default:s.scrollLeft=r;break}}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const S=[];function nn(){const i=Ye();S.forEach(e=>{je(e,i)})}let me;const on=new MutationObserver(nn);on.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});function je(i,e,t=i.getAttribute("dir")){e?i.setAttribute("dir",e):t!=null&&i.removeAttribute("dir")}function Ye(){return document.documentElement.getAttribute("dir")}const Si=i=>class extends i{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>t===""?null:t}}}}static finalize(){super.finalize(),me||(me=ze.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),je(this,Ye(),null))}attributeChangedCallback(t,s,r){if(super.attributeChangedCallback(t,s,r),t!=="dir")return;const n=Ye(),o=r===n&&S.indexOf(this)===-1,a=!r&&s&&S.indexOf(this)===-1;o||a?(this.__subscribe(),je(this,n,r)):r!==n&&s===n&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}_valueToNodeAttribute(t,s,r){r==="dir"&&s===""&&!t.hasAttribute("dir")||super._valueToNodeAttribute(t,s,r)}_attributeToProperty(t,s,r){t==="dir"&&!s?this.dir="":super._attributeToProperty(t,s,r)}__subscribe(t=!0){t?S.includes(this)||S.push(this):S.includes(this)&&S.splice(S.indexOf(this),1)}__getNormalizedScrollLeft(t){return ze.getNormalizedScrollLeft(me,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,s){return ze.setNormalizedScrollLeft(me,this.getAttribute("dir")||"ltr",t,s)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Tr(!1);window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Zs()};let ke;const Rt=new Set,W=i=>class extends Si(i){static get version(){return"23.2.4"}static finalize(){super.finalize();const{is:t}=this;t&&!Rt.has(t)&&(window.Vaadin.registrations.push(this),Rt.add(t),window.Vaadin.developmentModeCallback&&(ke=q.debounce(ke,en,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),rn(ke)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const an=!1,ln=i=>i,lt=typeof document.head.style.touchAction=="string",Ce="__polymerGestures",Le="__polymerGesturesHandled",qe="__polymerGesturesTouchAction",Ft=25,Bt=5,dn=2,cn=["mousedown","mousemove","mouseup","click"],hn=[0,1,4,2],un=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function dt(i){return cn.indexOf(i)>-1}let Oi=!1;(function(){try{const i=Object.defineProperty({},"passive",{get(){Oi=!0}});window.addEventListener("test",null,i),window.removeEventListener("test",null,i)}catch{}})();function Mi(i){if(!(dt(i)||i==="touchend")&&lt&&Oi&&an)return{passive:!0}}const pn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),fn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function L(i){const e=i.type;if(!dt(e))return!1;if(e==="mousemove"){let s=i.buttons===void 0?1:i.buttons;return i instanceof window.MouseEvent&&!un&&(s=hn[i.which]||0),Boolean(s&1)}return(i.button===void 0?0:i.button)===0}function _n(i){if(i.type==="click"){if(i.detail===0)return!0;const e=O(i);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const t=e.getBoundingClientRect(),s=i.pageX,r=i.pageY;return!(s>=t.left&&s<=t.right&&r>=t.top&&r<=t.bottom)}return!1}const T={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function mn(i){let e="auto";const t=ki(i);for(let s=0,r;s<t.length;s++)if(r=t[s],r[qe]){e=r[qe];break}return e}function zi(i,e,t){i.movefn=e,i.upfn=t,document.addEventListener("mousemove",e),document.addEventListener("mouseup",t)}function U(i){document.removeEventListener("mousemove",i.movefn),document.removeEventListener("mouseup",i.upfn),i.movefn=null,i.upfn=null}const ki=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:i=>i.composedPath&&i.composedPath()||[],he={},k=[];function gn(i,e){let t=document.elementFromPoint(i,e),s=t;for(;s&&s.shadowRoot&&!window.ShadyDOM;){const r=s;if(s=s.shadowRoot.elementFromPoint(i,e),r===s)break;s&&(t=s)}return t}function O(i){const e=ki(i);return e.length>0?e[0]:i.target}function Li(i){const e=i.type,s=i.currentTarget[Ce];if(!s)return;const r=s[e];if(!r)return;if(!i[Le]&&(i[Le]={},e.startsWith("touch"))){const o=i.changedTouches[0];if(e==="touchstart"&&i.touches.length===1&&(T.touch.id=o.identifier),T.touch.id!==o.identifier)return;lt||(e==="touchstart"||e==="touchmove")&&yn(i)}const n=i[Le];if(!n.skip){for(let o=0,a;o<k.length;o++)a=k[o],r[a.name]&&!n[a.name]&&a.flow&&a.flow.start.indexOf(i.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<k.length;o++)a=k[o],r[a.name]&&!n[a.name]&&(n[a.name]=!0,a[e](i))}}function yn(i){const e=i.changedTouches[0],t=i.type;if(t==="touchstart")T.touch.x=e.clientX,T.touch.y=e.clientY,T.touch.scrollDecided=!1;else if(t==="touchmove"){if(T.touch.scrollDecided)return;T.touch.scrollDecided=!0;const s=mn(i);let r=!1;const n=Math.abs(T.touch.x-e.clientX),o=Math.abs(T.touch.y-e.clientY);i.cancelable&&(s==="none"?r=!0:s==="pan-x"?r=o>n:s==="pan-y"&&(r=n>o)),r?i.preventDefault():we("track")}}function Vt(i,e,t){return he[e]?(bn(i,e,t),!0):!1}function na(i,e,t){return he[e]?(vn(i,e,t),!0):!1}function bn(i,e,t){const s=he[e],r=s.deps,n=s.name;let o=i[Ce];o||(i[Ce]=o={});for(let a=0,l,d;a<r.length;a++)l=r[a],!(pn&&dt(l)&&l!=="click")&&(d=o[l],d||(o[l]=d={_count:0}),d._count===0&&i.addEventListener(l,Li,Mi(l)),d[n]=(d[n]||0)+1,d._count=(d._count||0)+1);i.addEventListener(e,t),s.touchAction&&wn(i,s.touchAction)}function vn(i,e,t){const s=he[e],r=s.deps,n=s.name,o=i[Ce];if(o)for(let a=0,l,d;a<r.length;a++)l=r[a],d=o[l],d&&d[n]&&(d[n]=(d[n]||1)-1,d._count=(d._count||1)-1,d._count===0&&i.removeEventListener(l,Li,Mi(l)));i.removeEventListener(e,t)}function ct(i){k.push(i);for(let e=0;e<i.emits.length;e++)he[i.emits[e]]=i}function Cn(i){for(let e=0,t;e<k.length;e++){t=k[e];for(let s=0,r;s<t.emits.length;s++)if(r=t.emits[s],r===i)return t}return null}function wn(i,e){lt&&i instanceof HTMLElement&&tn.run(()=>{i.style.touchAction=e}),i[qe]=e}function ht(i,e,t){const s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=t,ln(i).dispatchEvent(s),s.defaultPrevented){const r=t.preventer||t.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function we(i){const e=Cn(i);e.info&&(e.info.prevent=!0)}ct({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){U(this.info)},mousedown(i){if(!L(i))return;const e=O(i),t=this,s=n=>{L(n)||(X("up",e,n),U(t.info))},r=n=>{L(n)&&X("up",e,n),U(t.info)};zi(this.info,s,r),X("down",e,i)},touchstart(i){X("down",O(i),i.changedTouches[0],i)},touchend(i){X("up",O(i),i.changedTouches[0],i)}});function X(i,e,t,s){!e||ht(e,i,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s,prevent(r){return we(r)}})}ct({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(i){this.moves.length>dn&&this.moves.shift(),this.moves.push(i)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,U(this.info)},mousedown(i){if(!L(i))return;const e=O(i),t=this,s=n=>{const o=n.clientX,a=n.clientY;Ut(t.info,o,a)&&(t.info.state=t.info.started?n.type==="mouseup"?"end":"track":"start",t.info.state==="start"&&we("tap"),t.info.addMove({x:o,y:a}),L(n)||(t.info.state="end",U(t.info)),e&&De(t.info,e,n),t.info.started=!0)},r=n=>{t.info.started&&s(n),U(t.info)};zi(this.info,s,r),this.info.x=i.clientX,this.info.y=i.clientY},touchstart(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(i){const e=O(i),t=i.changedTouches[0],s=t.clientX,r=t.clientY;Ut(this.info,s,r)&&(this.info.state==="start"&&we("tap"),this.info.addMove({x:s,y:r}),De(this.info,e,t),this.info.state="track",this.info.started=!0)},touchend(i){const e=O(i),t=i.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),De(this.info,e,t))}});function Ut(i,e,t){if(i.prevent)return!1;if(i.started)return!0;const s=Math.abs(i.x-e),r=Math.abs(i.y-t);return s>=Bt||r>=Bt}function De(i,e,t){if(!e)return;const s=i.moves[i.moves.length-2],r=i.moves[i.moves.length-1],n=r.x-i.x,o=r.y-i.y;let a,l=0;s&&(a=r.x-s.x,l=r.y-s.y),ht(e,"track",{state:i.state,x:t.clientX,y:t.clientY,dx:n,dy:o,ddx:a,ddy:l,sourceEvent:t,hover(){return gn(t.clientX,t.clientY)}})}ct({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(i){L(i)&&(this.info.x=i.clientX,this.info.y=i.clientY)},click(i){L(i)&&jt(this.info,i)},touchstart(i){const e=i.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(i){jt(this.info,i.changedTouches[0],i)}});function jt(i,e,t){const s=Math.abs(e.clientX-i.x),r=Math.abs(e.clientY-i.y),n=O(t||e);!n||fn[n.localName]&&n.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=Ft&&r<=Ft||_n(e))&&(i.prevent||ht(n,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Di=g(i=>class extends i{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hi=g(i=>class extends i{ready(){super.ready(),this.addEventListener("keydown",t=>{this._onKeyDown(t)}),this.addEventListener("keyup",t=>{this._onKeyUp(t)})}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t);break}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const An=i=>class extends Di(Hi(i)){get _activeKeys(){return[" "]}ready(){super.ready(),Vt(this,"down",t=>{this._shouldSetActive(t)&&this._setActive(!0)}),Vt(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",s=>{this._activeKeys.includes(s.key)&&this._setActive(!1)},{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ut=!1;window.addEventListener("keydown",()=>{ut=!0},{capture:!0});window.addEventListener("mousedown",()=>{ut=!1},{capture:!0});function xn(){return ut}function Pn(i){const e=i.style;if(e.visibility==="hidden"||e.display==="none")return!0;const t=window.getComputedStyle(i);return t.visibility==="hidden"||t.display==="none"}function En(i){if(!Nn(i))return-1;const e=i.getAttribute("tabindex")||0;return Number(e)}function Tn(i,e){const t=Math.max(i.tabIndex,0),s=Math.max(e.tabIndex,0);return t===0||s===0?s>t:t>s}function In(i,e){const t=[];for(;i.length>0&&e.length>0;)Tn(i[0],e[0])?t.push(e.shift()):t.push(i.shift());return t.concat(i,e)}function Ge(i){const e=i.length;if(e<2)return i;const t=Math.ceil(e/2),s=Ge(i.slice(0,t)),r=Ge(i.slice(t));return In(s,r)}function Ri(i,e){if(i.nodeType!==Node.ELEMENT_NODE||Pn(i))return!1;const t=i,s=En(t);let r=s>0;s>=0&&e.push(t);let n=[];return t.localName==="slot"?n=t.assignedNodes({flatten:!0}):n=(t.shadowRoot||t).children,[...n].forEach(o=>{r=Ri(o,e)||r}),r}function Nn(i){return i.matches('[tabindex="-1"]')?!1:i.matches("input, select, textarea, button, object")?i.matches(":not([disabled])"):i.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function da(i){return i.getRootNode().activeElement===i}function ca(i){const e=[];return Ri(i,e)?Ge(e):e}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fi=g(i=>class extends i{get _keyboardActive(){return xn()}ready(){this.addEventListener("focusin",t=>{this._shouldSetFocus(t)&&this._setFocused(!0)}),this.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bi=i=>class extends Di(i){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,s){super._disabledChanged(t,s),t?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):s&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&t!==-1&&(this._lastTabIndex=t,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sn=i=>class extends An(Bi(Fi(i))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yt extends Sn(W(G(P))){static get is(){return"vaadin-button"}static get template(){return M`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `}}customElements.define(Yt.is,Yt);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class le{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,de.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),de.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,t,s){return e instanceof le?e._cancelAsync():e=new le,e.setConfig(t,s),e}}let de=new Set;const On=function(i){de.add(i)},Mn=function(){const i=Boolean(de.size);return de.forEach(e=>{try{e.flush()}catch(t){setTimeout(()=>{throw t})}}),i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const zn=function(){let i,e;do i=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Mn();while(i||e)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let qt=!1;function kn(){if(ni&&!si){if(!qt){qt=!0;const i=document.createElement("style");i.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(i)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function pt(i,e,t,s,r){let n;r&&(n=typeof t=="object"&&t!==null,n&&(s=i.__dataTemp[e]));let o=s!==t&&(s===s||t===t);return n&&o&&(i.__dataTemp[e]=t),o}const ft=g(i=>{class e extends i{_shouldPropertyChange(s,r,n){return pt(this,s,r,n,!0)}}return e}),fa=g(i=>{class e extends i{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(s,r,n){return pt(this,s,r,n,this.mutableData)}}return e});ft._mutablePropertyChange=pt;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let We=null;function $e(){return We}$e.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:$e,writable:!0}});const Vi=at($e),Ln=ft(Vi);function Dn(i,e){We=i,Object.setPrototypeOf(i,e.prototype),new e,We=null}const Hn=at(class{});function Ui(i,e){for(let t=0;t<e.length;t++){let s=e[t];if(Boolean(i)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)i?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if(s.localName==="slot")if(i)s.__polymerReplaced__=document.createComment("hidden-slot"),_(_(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const r=s.__polymerReplaced__;r&&_(_(r).parentNode).replaceChild(s,r)}else s.style&&(i?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=i,s._showHideChildren&&s._showHideChildren(i)}}class z extends Hn{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let r=this.root.firstChild;r;r=r.nextSibling)t.push(r),r.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let s=this.__templatizeOptions;(e&&s.instanceProps||!s.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let s in this.__hostProps)this._setPendingProperty(s,this.__dataHost["_host_"+s]);for(let s in e)this._setPendingProperty(s,e[s])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,s){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,r=>{r.model=this,s(r)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,s)}}_showHideChildren(e){Ui(e,this.children)}_setUnmanagedPropertyToNode(e,t,s){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&t=="textContent"?e.__polymerTextContent__=s:super._setUnmanagedPropertyToNode(e,t,s)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do e=e.__dataHost.__dataHost;while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}z.prototype.__dataHost;z.prototype.__templatizeOptions;z.prototype._methodHost;z.prototype.__templatizeOwner;z.prototype.__hostProps;const Rn=ft(z);function Gt(i){let e=i.__dataHost;return e&&e._methodHost||e}function Fn(i,e,t){let s=t.mutableData?Rn:z;Ae.mixin&&(s=Ae.mixin(s));let r=class extends s{};return r.prototype.__templatizeOptions=t,r.prototype._bindTemplate(i),Un(r,i,e,t),r}function Bn(i,e,t,s){let r=t.forwardHostProp;if(r&&e.hasHostProps){const n=i.localName=="template";let o=e.templatizeTemplateClass;if(!o){if(n){let l=t.mutableData?Ln:Vi;class d extends l{}o=e.templatizeTemplateClass=d}else{const l=i.constructor;class d extends l{}o=e.templatizeTemplateClass=d}let a=e.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Vn(l,r)}),o.prototype._createNotifyingProperty("_host_"+l);oi&&s&&qn(e,t,s)}if(i.__dataProto&&Object.assign(i.__data,i.__dataProto),n)Dn(i,o),i.__dataTemp={},i.__dataPending=null,i.__dataOld=null,i._enableProperties();else{Object.setPrototypeOf(i,o.prototype);const a=e.hostProps;for(let l in a)if(l="_host_"+l,l in i){const d=i[l];delete i[l],i.__data[l]=d}}}}function Vn(i,e){return function(s,r,n){e.call(s.__templatizeOwner,r.substring(6),n[r])}}function Un(i,e,t,s){let r=t.hostProps||{};for(let n in s.instanceProps){delete r[n];let o=s.notifyInstanceProp;o&&i.prototype._addPropertyEffect(n,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:jn(n,o)})}if(s.forwardHostProp&&e.__dataHost)for(let n in r)t.hasHostProps||(t.hasHostProps=!0),i.prototype._addPropertyEffect(n,i.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Yn()})}function jn(i,e){return function(s,r,n){e.call(s.__templatizeOwner,s,r,n[r])}}function Yn(){return function(e,t,s){e.__dataHost._setPendingPropertyOrPath("_host_"+t,s[t],!0,!0)}}function Ae(i,e,t){if(re&&!Gt(i))throw new Error("strictTemplatePolicy: template owner not trusted");if(t=t||{},i.__templatizeOwner)throw new Error("A <template> can only be templatized once");i.__templatizeOwner=e;let r=(e?e.constructor:z)._parseTemplate(i),n=r.templatizeInstanceClass;n||(n=Fn(i,r,t),r.templatizeInstanceClass=n);const o=Gt(i);Bn(i,r,t,o);let a=class extends n{};return a.prototype._methodHost=o,a.prototype.__dataHost=i,a.prototype.__templatizeOwner=e,a.prototype.__hostProps=r.hostProps,a=a,a}function qn(i,e,t){const s=t.constructor._properties,{propertyEffects:r}=i,{instanceProps:n}=e;for(let o in r)if(!s[o]&&!(n&&n[o])){const a=r[o];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function ma(i,e){let t;for(;e;)if(t=e.__dataHost?e:e.__templatizeInstance)if(t.__dataHost!=i)e=t.__dataHost;else return t;else e=_(e).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ji extends P{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=le.debounce(this.__renderDebouncer,nt,()=>this.__render()),On(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=_(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!_(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),kn()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:_(e).querySelector("template");if(!t){let s=new MutationObserver(()=>{if(_(this).querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return s.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=_(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length&&_(this).previousSibling!==t[t.length-1])for(let r=0,n;r<t.length&&(n=t[r]);r++)_(e).insertBefore(n,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){zn()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Ir||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class Gn extends ji{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(re&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const s=t._bindTemplate(this.__template,!0);s.runEffects=(r,n,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),n=Object.assign(a.changedProps,n)),r(n,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:r,changedProps:{}}),o)for(const l in n){const d=N(l);a.changedProps[d]=this.__dataHost[d]}else Object.assign(a.changedProps,n)},this.__instance=t._stampTemplate(this.__template,s),_(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Ui(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class Wn extends ji{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Ae(this.__template,this,{mutableData:!0,forwardHostProp:function(t,s){this.__instance&&(this.if?this.__instance.forwardHostProp(t,s):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[N(t)]=!0))}})),this.__instance=new this.__ctor,_(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=_(e[0]).parentNode;if(t){t=_(t);for(let s=0,r;s<e.length&&(r=e[s]);s++)t.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const Wt=ai?Gn:Wn;customElements.define(Wt.is,Wt);class $t extends P{static get template(){return M`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(e){this.firstChild&&typeof this.firstChild.click=="function"&&e.target===this&&(e.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=le.debounce(this._debouncer,qr,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);e!==null&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(e.hasAttribute&&(e.hasAttribute("disabled")||e.hasAttribute("hidden"))||!e.children)return null;for(var t=0;t<e.children.length;t++){var s=this._getFirstFocusableDescendant(e.children[t]);if(s!==null)return s}return null}_isFocusable(e){return e.hasAttribute&&typeof e.hasAttribute=="function"&&(e.hasAttribute("disabled")||e.hasAttribute("hidden"))?!1:e.tabIndex===0}_onAnimationEnd(e){e.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define($t.is,$t);const Yi=document.createElement("template");Yi.innerHTML=`<style>
  ${ar.cssText}
  ${lr.cssText}
</style>`;document.head.appendChild(Yi.content);(function(){function i(t){const s=t._card;s&&(s.className=t.className)}const e=new MutationObserver(t=>{t.forEach(s=>{s.type==="attributes"&&s.attributeName==="class"&&i(s.target)})});window.Vaadin.Flow.notificationConnector={initLazy:function(t){t.$connector||(t.$connector={},t.addEventListener("opened-changed",s=>{s.detail.value&&i(t)}),e.observe(t,{attributes:!0,attributeFilter:["class"]}),i(t))}}})();const $n=w`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;I("vaadin-horizontal-layout",$n,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Kt extends W(G(P)){static get template(){return M`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}customElements.define(Kt.is,Kt);I("vaadin-notification-card",w`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot\$='stretch']) {
      margin: 0;
    }

    :host([slot\$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot\$='stretch'])) {
        display: flex;
      }

      :host([slot\$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot\$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
      --_lumo-button-primary-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --_lumo-button-background-color: var(--lumo-contrast-20pct);
      --_lumo-button-color: var(--lumo-base-color);
      --_lumo-button-primary-background-color: var(--lumo-base-color);
      --_lumo-button-primary-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
      --_lumo-button-primary-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --_lumo-button-background-color: var(--lumo-shade-20pct);
      --_lumo-button-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
      --_lumo-button-primary-color: var(--lumo-error-text-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kn={HTML:1,SVG:2},qi=(i,e)=>e===void 0?(i==null?void 0:i._$litType$)!==void 0:(i==null?void 0:i._$litType$)===e;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ie=i=>i.test(navigator.userAgent),Ke=i=>i.test(navigator.platform),Jn=i=>i.test(navigator.vendor),ga=Ie(/Android/),ya=Ie(/Chrome/)&&Jn(/Google Inc/),ba=Ie(/Firefox/),Xn=Ke(/^iPad/)||Ke(/^Mac/)&&navigator.maxTouchPoints>1,Zn=Ke(/^iPhone/),Qn=Zn||Xn,va=Ie(/^((?!chrome|android).)*safari/i),Ca=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function eo(i){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(i);return}i.querySelector("template")&&console.warn(`WARNING: <template> inside <${i.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jt extends G(W(P)){static get template(){return M`
      <style>
        :host {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          pointer-events: none;
        }

        [region-group] {
          flex: 1 1 0%;
          display: flex;
        }

        [region-group='top'] {
          align-items: flex-start;
        }

        [region-group='bottom'] {
          align-items: flex-end;
        }

        [region-group] > [region] {
          flex: 1 1 0%;
        }

        @media (max-width: 420px) {
          [region-group] {
            flex-direction: column;
            align-items: stretch;
          }

          [region-group='top'] {
            justify-content: flex-start;
          }

          [region-group='bottom'] {
            justify-content: flex-end;
          }

          [region-group] > [region] {
            flex: initial;
          }
        }
      </style>

      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),Qn&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(e){e?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const e=window.innerHeight,s=window.innerWidth>e,r=document.documentElement.clientHeight;s&&r>e?this.style.bottom=`${r-e}px`:this.style.bottom="0"}_onVaadinOverlayClose(e){const t=e.detail.sourceEvent;t&&t.composedPath().indexOf(this)>=0&&e.preventDefault()}}class Xt extends G(P){static get template(){return M`
      <style>
        :host {
          display: block;
        }

        [part='overlay'] {
          pointer-events: auto;
        }
      </style>

      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class E extends dr(W(P)){static get template(){return M`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card theme$="[[_theme]]"> </vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _card)"]}static show(e,t){return qi(e)?E._createAndShowNotification(s=>{ii(e,s)},t):E._createAndShowNotification(s=>{s.innerText=e},t)}static _createAndShowNotification(e,t){const s=document.createElement(E.is);return t&&Number.isFinite(t.duration)&&(s.duration=t.duration),t&&t.position&&(s.position=t.position),t&&t.theme&&s.setAttribute("theme",t.theme),s.renderer=e,document.body.appendChild(s),s.opened=!0,s.addEventListener("opened-changed",r=>{r.detail.value||s.remove()}),s}ready(){super.ready(),this._card=this.shadowRoot.querySelector("vaadin-notification-card"),eo(this)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}requestContentUpdate(){!this.renderer||this.renderer(this._card,this)}_rendererChanged(e,t,s){if(!s)return;const r=this._oldRenderer!==e;this._oldRenderer=e,r&&(s.innerHTML="",delete s._$litPart$),t&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}get _container(){return E._container||(E._container=document.createElement("vaadin-notification-container"),document.body.appendChild(E._container)),E._container}_openedChanged(e){e?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const e=()=>{this._card.removeEventListener("animationend",e),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",e),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(!!this._card){if(!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const e=getComputedStyle(this._card).getPropertyValue("animation-name");if(e&&e!=="none"){const t=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",t)};this._card.addEventListener("animationend",t)}else this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(e,t){t&&(clearTimeout(this._durationTimeoutId),e>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),e)))}}customElements.define(Jt.is,Jt);customElements.define(Xt.is,Xt);customElements.define(E.is,E);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Zt=0;function Gi(i,e=[],t={}){const s=t.moduleId||`custom-style-module-${Zt}`;Zt+=1;const r=document.createElement("dom-module");i&&r.setAttribute("theme-for",i);const n=!!(e.length&&t.moduleId),o=[].concat(t.include||[]);o.length===0?r.__allStyles=e:n||(r.__partialStyles=e),r.innerHTML=`
    <template>
      ${o.map(a=>`<style include=${a}></style>`)}
      ${n?`<style>${e.map(a=>a.cssText).join(`
`)}</style>`:""}
    </template>
  `,r.register(s)}function to(i){return Ee(i.querySelector("template")).map(e=>cr(e.textContent))}function io(){const e=Y.prototype.modules;return Object.keys(e).map(t=>{const s=e[t],r=s.getAttribute("theme-for");return s.__allStyles=s.__allStyles||to(s).concat(s.__partialStyles||[]),{themeFor:r,moduleId:t,styles:s.__allStyles}})}window.Vaadin=window.Vaadin||{};window.Vaadin.styleModules={getAllThemes:io,registerStyles:Gi};pe&&pe.length>0&&(pe.forEach(i=>{Gi(i.themeFor,i.styles,{moduleId:i.moduleId,include:i.include})}),pe.length=0);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Z(i,e,t){return{index:i,removed:e,addedCount:t}}const Wi=0,$i=1,Je=2,Xe=3;function ro(i,e,t,s,r,n){let o=n-r+1,a=t-e+1,l=new Array(o);for(let d=0;d<o;d++)l[d]=new Array(a),l[d][0]=d;for(let d=0;d<a;d++)l[0][d]=d;for(let d=1;d<o;d++)for(let c=1;c<a;c++)if(_t(i[e+c-1],s[r+d-1]))l[d][c]=l[d-1][c-1];else{let h=l[d-1][c]+1,u=l[d][c-1]+1;l[d][c]=h<u?h:u}return l}function so(i){let e=i.length-1,t=i[0].length-1,s=i[e][t],r=[];for(;e>0||t>0;){if(e==0){r.push(Je),t--;continue}if(t==0){r.push(Xe),e--;continue}let n=i[e-1][t-1],o=i[e-1][t],a=i[e][t-1],l;o<a?l=o<n?o:n:l=a<n?a:n,l==n?(n==s?r.push(Wi):(r.push($i),s=n),e--,t--):l==o?(r.push(Xe),e--,s=o):(r.push(Je),t--,s=a)}return r.reverse(),r}function no(i,e,t,s,r,n){let o=0,a=0,l,d=Math.min(t-e,n-r);if(e==0&&r==0&&(o=oo(i,s,d)),t==i.length&&n==s.length&&(a=ao(i,s,d-o)),e+=o,r+=o,t-=a,n-=a,t-e==0&&n-r==0)return[];if(e==t){for(l=Z(e,[],0);r<n;)l.removed.push(s[r++]);return[l]}else if(r==n)return[Z(e,[],t-e)];let c=so(ro(i,e,t,s,r,n));l=void 0;let h=[],u=e,p=r;for(let m=0;m<c.length;m++)switch(c[m]){case Wi:l&&(h.push(l),l=void 0),u++,p++;break;case $i:l||(l=Z(u,[],0)),l.addedCount++,u++,l.removed.push(s[p]),p++;break;case Je:l||(l=Z(u,[],0)),l.addedCount++,u++;break;case Xe:l||(l=Z(u,[],0)),l.removed.push(s[p]),p++;break}return l&&h.push(l),h}function oo(i,e,t){for(let s=0;s<t;s++)if(!_t(i[s],e[s]))return s;return t}function ao(i,e,t){let s=i.length,r=e.length,n=0;for(;n<t&&_t(i[--s],e[--r]);)n++;return n}function lo(i,e){return no(i,0,i.length,e,0,e.length)}function _t(i,e){return i===e}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function H(i){return i.localName==="slot"}let mt=class{static getFlattenedNodes(i){const e=_(i);return H(i)?(i=i,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>H(t)?(t=t,_(t).assignedNodes({flatten:!0})):[t]).reduce((t,s)=>t.concat(s),[])}constructor(i,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=i,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){H(this._target)?this._listenSlots([this._target]):_(this._target).children&&(this._listenSlots(_(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,i=>{this._processMutations(i)}):(this._nativeChildrenObserver=new MutationObserver(i=>{this._processMutations(i)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){H(this._target)?this._unlistenSlots([this._target]):_(this._target).children&&(this._unlistenSlots(_(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,nt.run(()=>this.flush()))}_processMutations(i){this._processSlotMutations(i),this.flush()}_processSlotMutations(i){if(i)for(let e=0;e<i.length;e++){let t=i[e];t.addedNodes&&this._listenSlots(t.addedNodes),t.removedNodes&&this._unlistenSlots(t.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let i={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),t=lo(e,this._effectiveNodes);for(let r=0,n;r<t.length&&(n=t[r]);r++)for(let o=0,a;o<n.removed.length&&(a=n.removed[o]);o++)i.removedNodes.push(a);for(let r=0,n;r<t.length&&(n=t[r]);r++)for(let o=n.index;o<n.index+n.addedCount;o++)i.addedNodes.push(e[o]);this._effectiveNodes=e;let s=!1;return(i.addedNodes.length||i.removedNodes.length)&&(s=!0,this.callback.call(this._target,i)),s}_listenSlots(i){for(let e=0;e<i.length;e++){let t=i[e];H(t)&&t.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(i){for(let e=0;e<i.length;e++){let t=i[e];H(t)&&t.removeEventListener("slotchange",this._boundSchedule)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xe extends P{static create(e,t){const s=new this;return s.__template=t,s.__component=e,s}static get is(){return"vaadin-template-renderer-templatizer"}constructor(){super(),this.__template=null,this.__component=null,this.__TemplateClass=null,this.__templateInstances=new Set}render(e,t={}){let s=e.__templateInstance;if(this.__hasTemplateInstance(s)&&this.__isTemplateInstanceAttachedToDOM(s)){this.__updateProperties(s,t);return}this.__hasTemplateInstance(s)&&this.__disposeOfTemplateInstance(s),s=this.__createTemplateInstance(t),e.__templateInstance=s,e.innerHTML="",e.appendChild(s.root)}__updateProperties(e,t){e.item===t.item&&e._setPendingProperty("item"),e.__properties=t,e.setProperties(t)}__createTemplateInstance(e){this.__createTemplateClass(e);const t=new this.__TemplateClass(e);return t.__properties=e,this.__templateInstances.add(t),t}__disposeOfTemplateInstance(e){this.__templateInstances.delete(e)}__hasTemplateInstance(e){return this.__templateInstances.has(e)}__isTemplateInstanceAttachedToDOM(e){return e.children.length===0?!1:!!e.children[0].parentElement}__createTemplateClass(e){if(this.__TemplateClass)return;const t=Object.keys(e).reduce((s,r)=>({...s,[r]:!0}),{});this.__TemplateClass=Ae(this.__template,this,{parentModel:!0,instanceProps:t,forwardHostProp(s,r){this.__templateInstances.forEach(n=>{n.forwardHostProp(s,r)})},notifyInstanceProp(s,r,n){let o;o=r.split(".")[0],o=o[0].toUpperCase()+o.slice(1);const a=`_on${o}PropertyChanged`;this[a]&&this[a](s,r,n)}})}}customElements.define(xe.is,xe);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ce extends xe{static get is(){return"vaadin-template-renderer-grid-templatizer"}_onItemPropertyChanged(e,t,s){if(t==="item"||!Array.isArray(this.__grid.items))return;const r=this.__grid.items.indexOf(e.item);t=t.replace(/^item\./,""),t=`items.${r}.${t}`,this.__grid.notifyPath(t,s)}_onExpandedPropertyChanged(e,t,s){e.__properties.expanded!==s&&(s?this.__grid.expandItem(e.item):this.__grid.collapseItem(e.item))}_onSelectedPropertyChanged(e,t,s){e.__properties.selected!==s&&(s?this.__grid.selectItem(e.item):this.__grid.deselectItem(e.item))}_onDetailsOpenedPropertyChanged(e,t,s){e.__properties.detailsOpened!==s&&(s?this.__grid.openItemDetails(e.item):this.__grid.closeItemDetails(e.item))}get __grid(){return this.__component.__gridElement?this.__component:this.__component._grid}}customElements.define(ce.is,ce);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function R(i,e,t=xe){const s=t.create(i,e),r=(n,o,a)=>{s.render(n,a)};return e.__templatizer=s,r.__templatized=!0,r}function F(i,e,t){const s=i[e];if(s&&!s.__templatized){const r=i.localName;throw new Error(`Cannot use both a template and a renderer for <${r} />.`)}i[e]=t}function co(i){i.__suppressTemplateWarning||i.hasAttribute("suppress-template-warning")||(console.warn(`WARNING: <template> inside <${i.localName}> is deprecated. Use a renderer function instead (see https://vaad.in/template-renderer)`),i.__suppressTemplateWarning=!0)}function ho(i,e){if(e.matches(".row-details")){const t=R(i,e,ce);F(i,"rowDetailsRenderer",t)}}function uo(i,e){if(e.matches(".header")){const s=R(i,e);F(i,"headerRenderer",s);return}if(e.matches(".footer")){const s=R(i,e);F(i,"footerRenderer",s);return}if(e.matches(".editor")){const s=R(i,e,ce);F(i,"editModeRenderer",s);return}const t=R(i,e,ce);F(i,"renderer",t)}function po(i,e){if(co(i),i.__gridElement){ho(i,e);return}if(i.__gridColumnElement){uo(i,e);return}const t=R(i,e);F(i,"renderer",t)}function Ki(i){mt.getFlattenedNodes(i).filter(e=>e instanceof HTMLTemplateElement).forEach(e=>{e.__templatizer||po(i,e)})}function fo(i){i.__templateObserver||(i.__templateObserver=new mt(i,()=>{Ki(i)}))}window.Vaadin=window.Vaadin||{};window.Vaadin.templateRendererCallback=i=>{Ki(i),fo(i)};I("vaadin-input-container",w`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qt extends G(Si(P)){static get is(){return"vaadin-input-container"}static get template(){return M`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}}customElements.define(Qt.is,Qt);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ji=document.createElement("template");Ji.innerHTML=`
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
`;document.head.appendChild(Ji.content);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xi=w`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;I("",Xi,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _o=w`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zi=w`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;I("",Zi,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mo=w`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,Qi=[Zi,Xi,_o,mo];I("",Qi,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-text-field",Qi,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let go=0;function yo(){return go++}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $ extends EventTarget{static generateId(e,t){return`${e||"default"}-${t.localName}-${yo()}`}constructor(e,t,s,r,n){super(),this.host=e,this.slotName=t,this.slotFactory=s,this.slotInitializer=r,n&&(this.defaultId=$.generateId(t,e))}hostConnected(){if(!this.initialized){let e=this.getSlotChild();e?(this.node=e,this.initCustomNode(e)):e=this.attachDefaultNode(),this.initNode(e),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:e,slotName:t,slotFactory:s}=this;let r=this.defaultNode;return!r&&s&&(r=s(e),r instanceof Element&&(t!==""&&r.setAttribute("slot",t),this.node=r,this.defaultNode=r)),r&&e.appendChild(r),r}getSlotChild(){const{slotName:e}=this;return Array.from(this.host.childNodes).find(t=>t.nodeType===Node.ELEMENT_NODE&&t.slot===e||t.nodeType===Node.TEXT_NODE&&t.textContent.trim()&&e==="")}initNode(e){const{slotInitializer:t}=this;t&&t(this.host,e)}initCustomNode(e){}teardownNode(e){}observe(){const{slotName:e}=this,t=e===""?"slot:not([name])":`slot[name=${e}]`,s=this.host.shadowRoot.querySelector(t);this.__slotObserver=new mt(s,r=>{const n=this.node,o=r.addedNodes.find(a=>a!==n);r.removedNodes.length&&r.removedNodes.forEach(a=>{this.teardownNode(a)}),o&&(n&&n.isConnected&&this.host.removeChild(n),this.node=o,o!==this.defaultNode&&(this.initCustomNode(o),this.initNode(o)))})}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bo extends ${constructor(e,t){super(e,"input",()=>document.createElement("input"),(s,r)=>{s.value&&r.setAttribute("value",s.value),s.type&&r.setAttribute("type",s.type),r.id=this.defaultId,typeof t=="function"&&t(r)},!0)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vo=g(i=>class extends Fi(Bi(i)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){!this.focusElement||this.disabled||(this.focusElement.focus(),this._setFocused(!0))}blur(){!this.focusElement||(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,s){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):s&&this._removeFocusListeners(s)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,s){super._disabledChanged(t,s),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){t!==void 0&&this.focusElement&&(this.focusElement.tabIndex=t,t!==-1&&(this.tabindex=void 0)),this.disabled&&t&&(t!==-1&&(this._lastTabIndex=t),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const er=g(i=>class extends i{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(t=>{t.hostConnected&&t.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(t=>{t.hostDisconnected&&t.hostDisconnected()})}addController(t){this.__controllers.add(t),this.$!==void 0&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Co extends ${constructor(e){super(e,"error-message",()=>document.createElement("div"),(t,s)=>{this.__updateErrorId(s),this.__updateHasError()},!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(e){this.errorMessage=e,this.__updateHasError()}setInvalid(e){this.invalid=e,this.__updateHasError()}initCustomNode(e){this.__updateErrorId(e),e.textContent&&!this.errorMessage&&(this.errorMessage=e.textContent.trim()),this.__updateHasError()}teardownNode(e){let t=this.getSlotChild();!t&&e!==this.defaultNode&&(t=this.attachDefaultNode(),this.initNode(t)),this.__updateHasError()}__isNotEmpty(e){return Boolean(e&&e.trim()!=="")}__updateHasError(){const e=this.node,t=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));e&&(e.textContent=t?this.errorMessage:"",e.hidden=!t,t?e.setAttribute("role","alert"):e.removeAttribute("role")),this.host.toggleAttribute("has-error-message",t)}__updateErrorId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function xa(i){const e=[];for(;i;){if(i.nodeType===Node.DOCUMENT_NODE){e.push(i);break}if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(i),i=i.host;continue}if(i.assignedSlot){i=i.assignedSlot;continue}i=i.parentNode}return e}function tr(i){return i?new Set(i.split(" ")):new Set}function ir(i){return[...i].join(" ")}function wo(i,e,t){const s=tr(i.getAttribute(e));s.add(t),i.setAttribute(e,ir(s))}function Ao(i,e,t){const s=tr(i.getAttribute(e));if(s.delete(t),s.size===0){i.removeAttribute(e);return}i.setAttribute(e,ir(s))}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xo{constructor(e){this.host=e,this.__required=!1}setTarget(e){this.__target=e,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(e){this.__setAriaRequiredAttribute(e),this.__required=e}setLabelId(e){this.__setLabelIdToAriaAttribute(e,this.__labelId),this.__labelId=e}setErrorId(e){this.__setErrorIdToAriaAttribute(e,this.__errorId),this.__errorId=e}setHelperId(e){this.__setHelperIdToAriaAttribute(e,this.__helperId),this.__helperId=e}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(e,t){this.__setAriaAttributeId("aria-labelledby",e,t)}__setErrorIdToAriaAttribute(e,t){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",e,t):this.__setAriaAttributeId("aria-describedby",e,t)}__setHelperIdToAriaAttribute(e,t){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",e,t):this.__setAriaAttributeId("aria-describedby",e,t)}__setAriaRequiredAttribute(e){!this.__target||["input","textarea"].includes(this.__target.localName)||(e?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required"))}__setAriaAttributeId(e,t,s){!this.__target||(s&&Ao(this.__target,e,s),t&&wo(this.__target,e,t))}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Po extends ${constructor(e){super(e,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(e){this.__updateHelperId(e),this.__observeHelper(e);const t=this.__hasHelper(e);this.__toggleHasHelper(t)}teardownNode(e){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const t=this.getSlotChild();if(t&&t!==this.defaultNode){const s=this.__hasHelper(t);this.__toggleHasHelper(s)}else this.__applyDefaultHelper(this.helperText,t)}setHelperText(e){this.helperText=e;const t=this.getSlotChild();(!t||t===this.defaultNode)&&this.__applyDefaultHelper(e,t)}__hasHelper(e){return e?e.children.length>0||this.__isNotEmpty(e.textContent):!1}__isNotEmpty(e){return e&&e.trim()!==""}__applyDefaultHelper(e,t){const s=this.__isNotEmpty(e);s&&!t&&(this.slotFactory=()=>document.createElement("div"),t=this.attachDefaultNode(),this.__updateHelperId(t),this.__observeHelper(t)),t&&(t.textContent=e),this.__toggleHasHelper(s)}__observeHelper(e){this.__helperObserver=new MutationObserver(t=>{t.forEach(s=>{const r=s.target,n=r===this.node;if(s.type==="attributes")n&&r.id!==this.defaultId&&this.__updateHelperId(r);else if(n||r.parentElement===this.node){const o=this.__hasHelper(this.node);this.__toggleHasHelper(o)}})}),this.__helperObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(e){this.host.toggleAttribute("has-helper",e),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:e,node:this.node}}))}__updateHelperId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Eo extends ${constructor(e){super(e,"label",()=>document.createElement("label"),(t,s)=>{this.__updateLabelId(s),this.__updateDefaultLabel(this.label),this.__observeLabel(s)},!0)}get labelId(){return this.node.id}initCustomNode(e){this.__updateLabelId(e);const t=this.__hasLabel(e);this.__toggleHasLabel(t)}teardownNode(e){this.__labelObserver&&this.__labelObserver.disconnect();let t=this.getSlotChild();!t&&e!==this.defaultNode&&(t=this.attachDefaultNode(),this.initNode(t));const s=this.__hasLabel(t);this.__toggleHasLabel(s)}setLabel(e){this.label=e,this.__updateDefaultLabel(e)}__hasLabel(e){return e?e.children.length>0||this.__isNotEmpty(e.textContent):!1}__isNotEmpty(e){return Boolean(e&&e.trim()!=="")}__observeLabel(e){this.__labelObserver=new MutationObserver(t=>{t.forEach(s=>{const r=s.target,n=r===this.node;if(s.type==="attributes")n&&r.id!==this.defaultId&&this.__updateLabelId(r);else if(n||r.parentElement===this.node){const o=this.__hasLabel(this.node);this.__toggleHasLabel(o)}})}),this.__labelObserver.observe(e,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(e){this.host.toggleAttribute("has-label",e),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:e,node:this.node}}))}__updateDefaultLabel(e){if(this.defaultNode&&(this.defaultNode.textContent=e,this.defaultNode===this.node)){const t=this.__isNotEmpty(e);this.__toggleHasLabel(t)}}__updateLabelId(e){e.id||(e.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const To=g(i=>class extends er(i){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new Eo(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rr=g(i=>class extends i{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Io=i=>class extends rr(To(er(i))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new xo(this),this._helperController=new Po(this),this._errorController=new Co(this),this._labelController.addEventListener("label-changed",t=>{const{hasLabel:s,node:r}=t.detail;this.__labelChanged(s,r)}),this._helperController.addEventListener("helper-changed",t=>{const{hasHelper:s,node:r}=t.detail;this.__helperChanged(s,r)})}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,s){t?this._fieldAriaController.setHelperId(s.id):this._fieldAriaController.setHelperId(null)}__labelChanged(t,s){t?this._fieldAriaController.setLabelId(s.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout(()=>{t?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const No=g(i=>class extends i{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(t=>{this._delegateAttribute(t,this[t])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(t=>{this._delegateProperty(t,this[t])})}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach((s,r)=>{this._delegateAttribute(s,t[r])})}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach((s,r)=>{this._delegateProperty(s,t[r])})}_delegateAttribute(t,s){!this.stateTarget||(t==="invalid"&&this._delegateAttribute("aria-invalid",s?"true":!1),typeof s=="boolean"?this.stateTarget.toggleAttribute(t,s):s?this.stateTarget.setAttribute(t,s):this.stateTarget.removeAttribute(t))}_delegateProperty(t,s){!this.stateTarget||(this.stateTarget[t]=s)}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So=g(i=>class extends i{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){!this.inputElement||(t!=null?this.inputElement.value=t:this.inputElement.value="")}_inputElementChanged(t,s){t?this._addInputListeners(t):s&&this._removeInputListeners(s)}_hasInputValueChanged(t,s){(t||s)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){const s=t.composedPath()[0];this._hasInputValue=s.value.length>0,this._onInput(t)}_onInput(t){const s=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=s.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,s){this._toggleHasValue(this._hasValue),!(t===""&&s===void 0)&&(this.__userInput||this._forwardInputValue(t))}get _hasValue(){return this.value!=null&&this.value!==""}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sr=g(i=>class extends No(rr(So(i))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(t=>this[t]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some(s=>this.__isValidConstraint(s))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...s){if(!t)return;const r=this._hasValidConstraints(s),n=this.__previousHasConstraints&&!r;(this._hasValue||this.invalid)&&r?this.validate():n&&this._setInvalid(!1),this.__previousHasConstraints=r}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||t===0}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const He=new WeakMap;function Oo(i){return He.has(i)||He.set(i,new Set),He.get(i)}function Mo(i,e){const t=document.createElement("style");t.textContent=i,e===document?document.head.appendChild(t):e.insertBefore(t,e.firstChild)}const zo=g(i=>class extends i{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),s=Oo(t);this.slotStyles.forEach(r=>{s.has(r)||(Mo(r,t),s.add(r))})}});/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ko=i=>class extends zo(vo(sr(Io(Hi(i))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",t=>this._onClearButtonClick(t))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&!!this.value&&(t.stopPropagation(),this.__clear())}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=q.debounce(this._preventInputDebouncer,Ni.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||t.key.length!==1||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const s=t.clipboardData.getData("text");this.__allowedTextRegExp.test(s)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const s=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(s)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`),this.__allowedTextRegExp=new RegExp(`^${t}*$`)}catch(s){console.error(s)}}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo=i=>class extends ko(i){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_setFocused(t){super._setFocused(t),t||this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_valueChanged(t,s){super._valueChanged(t,s),s!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Do{constructor(e,t){this.input=e,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),t.addEventListener("label-changed",s=>{this.__initLabel(s.detail.node)}),this.__initLabel(t.node)}__initLabel(e){e&&(e.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&e.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const e=t=>{t.stopImmediatePropagation(),this.input.removeEventListener("click",e)};this.input.addEventListener("click",e)}}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ho=i=>class extends sr(i){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const t=this.inputElement;t&&t.value.length>0&&!this.checkValidity()&&(t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=q.debounce(this._inputDebouncer,Ni.after(200),()=>{this.removeAttribute("input-prevented")}))}}_onInput(t){this._checkInputValue(),super._onInput(t)}_preventInvalidInputChanged(t){t&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ro=w`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fo=w`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bo=w`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vo=[Fo,Bo,Ro];/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */I("vaadin-text-field",Vo,{moduleId:"vaadin-text-field-styles"});class ei extends Ho(Lo(G(W(P)))){static get is(){return"vaadin-text-field"}static get template(){return M`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new bo(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Do(this.inputElement,this._labelController))}}customElements.define(ei.is,ei);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ze extends hr{constructor(e){if(super(e),this.it=j,e.type!==ur.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===pr)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ze.directiveName="unsafeHTML",Ze.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qe extends Ze{}Qe.directiveName="unsafeSVG",Qe.resultType=2;const Uo=fr(Qe);/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function jo(i){let e=j;if(i){const t=i.cloneNode(!0);t.removeAttribute("id"),e=_r`${Uo(t.outerHTML)}`}return e}function Yo(i){return qi(i,Kn.SVG)||i===j}function qo(i){let e=i==null||i===""?j:i;return Yo(e)||(console.error("[vaadin-icon] Invalid svg passed, please use Lit svg literal."),e=j),e}function La(i,e){const t=qo(i);ii(t,e)}/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Q={};class Pe extends W(P){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static getIconset(e){let t=Q[e];return t||(t=document.createElement("vaadin-iconset"),t.name=e,Q[e]=t),t}connectedCallback(){super.connectedCallback(),this.style.display="none"}applyIcon(e){this._icons=this._icons||this.__createIconMap();const t=this._icons[this.__getIconId(e)];return{svg:jo(t),size:this.size,viewBox:t?t.getAttribute("viewBox"):null}}__createIconMap(){const e={};return this.querySelectorAll("[id]").forEach(t=>{e[this.__getIconId(t.id)]=t}),e}__getIconId(e){return(e||"").replace(`${this.name}:`,"")}__nameChanged(e,t){t&&(Q[e]=Pe.getIconset(t),delete Q[t]),e&&(Q[e]=this,document.dispatchEvent(new CustomEvent("vaadin-iconset-registered",{detail:e})))}}customElements.define(Pe.is,Pe);/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nr=document.createElement("template");nr.innerHTML=`<vaadin-iconset name="lumo" size="1000">
<svg xmlns="http://www.w3.org/2000/svg">
<defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs>
</svg>
</vaadin-iconset>`;document.head.appendChild(nr.content);const Go=function(i,e=!1){const t=document.createElement("template");t.innerHTML=i,document.head[e?"insertBefore":"appendChild"](t.content,document.head.firstChild)};let ue;const ti=document.getElementsByTagName("script");for(let i=0;i<ti.length;i++){const e=ti[i];if(e.getAttribute("type")=="module"&&e.getAttribute("data-app-id")&&!e["vaadin-bundle"]){ue=e;break}}if(!ue)throw new Error("Could not find the bundle script to identify the application id");ue["vaadin-bundle"]=!0;window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const or=window.Vaadin.Flow.fallbacks;or[ue.getAttribute("data-app-id")]={};or[ue.getAttribute("data-app-id")].loadFallback=function(){return mr(()=>import("./generated-flow-imports-fallback.f7fc5759.js"),["generated-flow-imports-fallback.f7fc5759.js","indexhtml.5b4276b0.js"],import.meta.url)};const Da=Object.freeze(Object.defineProperty({__proto__:null,addCssBlock:Go},Symbol.toStringTag,{value:"Module"}));export{No as $,Qo as A,qr as B,vo as C,le as D,js as E,mt as F,yo as G,W as H,Qn as I,ca as J,Hi as K,da as L,ft as M,er as N,fa as O,Kr as P,yr as Q,Yt as R,Fi as S,An as T,Si as U,q as V,Ni as W,ze as X,xa as Y,ta as Z,Wt as _,ni as a,Di as a0,So as a1,To as a2,bo as a3,Do as a4,Zi as a5,_o as a6,Io as a7,Qi as a8,tn as a9,Bo as aA,At as aB,Pe as aC,qo as aD,La as aE,Xi as aF,Lo as aG,Y as aH,Qt as aI,Da as aJ,en as aa,ia as ab,rn as ac,va as ad,eo as ae,Ca as af,Ho as ag,ko as ah,Vo as ai,ct as aj,we as ak,he as al,Vt as am,na as an,Bi as ao,ba as ap,ga as aq,ya as ar,wn as as,sr as at,ei as au,wo as av,Ao as aw,Sn as ax,$ as ay,Fo as az,zt as b,Er as c,g as d,Ae as e,ma as f,y as g,at as h,kn as i,P as j,Ir as k,Ko as l,nt as m,Xo as n,be as o,$o as p,On as q,ea as r,re as s,Zo as t,zn as u,lo as v,_ as w,Jo as x,M as y,si as z};
