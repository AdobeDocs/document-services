"use strict";(self.webpackChunkdev_site_product_template=self.webpackChunkdev_site_product_template||[]).push([[5206],{32199:function(e,t,i){i.d(t,{BA:function(){return x},NN:function(){return O},Rp:function(){return z},__:function(){return _},ck:function(){return k},gq:function(){return P},mQ:function(){return T},ms:function(){return q},vS:function(){return A}});var n=i(4942),r=i(87462),a=i(63366),o=i(15007),s=i(75900),l=i.n(s),c=i(95223),d=i(158),m=["orientation","density","isQuiet","children","className","onFontsReady"],u=["elementType","isDisabled","isSelected","className","children","icon","label"],p=["elementType","icon","isSelected","isDisabled","className","children","iconSize"],v=["className"],b=["className","index"],f=["elementType","isDisabled","isSelected","className","children","icon","hasDropdown","label"],g=["elementType","isHidden","className","children"],h=["theme","orientation","className","APIReference"];function y(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?y(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var x=function(e,t){e.current.style.transform="translate("+t.current.offsetLeft+"px, 0px)",e.current.style.width=t.current.offsetWidth+"px"},z=function(e,t){e.current.style.transition=t?"":"none"},Z="480px",N=function(e){var t;return"img"===(null==e||null===(t=e.props)||void 0===t?void 0:t.mdxType)?(0,o.cloneElement)(e,{loading:"eager"}):e},D=function(e){var t=e.image,i=void 0===t?"":t,n=e.styles,r=void 0===n?"":n;return i?(0,o.cloneElement)(i,{children:(0,d.ve)(i.props.children,N),css:(0,c.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",r,";","")}):null},S=function(e){var t=e.icon,i=e.styles;return t?(0,o.cloneElement)(t,{alt:"",css:(0,c.iv)("height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",i,";","")}):null},T=(0,o.forwardRef)((function(e,t){var i=e.orientation,n=void 0===i?"horizontal":i,s=e.density,d=void 0===s?"regular":s,u=e.isQuiet,p=void 0===u||u,v=e.children,b=e.className,f=e.onFontsReady,g=(0,a.Z)(e,m);return(0,o.useEffect)((function(){document.fonts.ready.then((function(){f&&f()}))}),[f]),(0,c.tZ)("div",(0,r.Z)({ref:t},g,{role:"tablist","aria-orientation":n,className:l()(b,"spectrum-Tabs","spectrum-Tabs--sizeM","spectrum-Tabs--"+n,{"spectrum-Tabs--quiet":p},{"spectrum-Tabs--compact":"compact"===d})}),v)})),k=(0,o.forwardRef)((function(e,t){var i,n=e.elementType,o=void 0===n?"div":n,s=e.isDisabled,d=void 0!==s&&s,m=e.isSelected,p=void 0!==m&&m,v=e.className,b=e.children,f=e.icon,g=e.label,h=(0,a.Z)(e,u),y=o;return(0,c.tZ)(y,(0,r.Z)({},h,{ref:t,role:"tab",title:null==g||null===(i=g.props)||void 0===i?void 0:i.children,"aria-selected":p,disabled:d,className:l()(v,"spectrum-Tabs-item",{"is-selected":p},{"is-disabled":d})}),f?(0,c.tZ)(E,{icon:f,isSelected:p,isDisabled:d}):null,g?(0,c.tZ)(_,null," ",g," "):null,b)})),I={name:"16l42sl",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-550);z-index:1"},E=(0,o.forwardRef)((function(e,t){var i=e.elementType,n=void 0===i?"div":i,o=e.icon,s=e.isSelected,d=e.isDisabled,m=e.className,u=(e.children,e.iconSize),v=void 0===u?"xl":u,b=(0,a.Z)(e,p),f=n;return(0,c.tZ)(f,(0,r.Z)({},b,{ref:t,className:l()(m,"spectrum-Icon",{"is-selected":s},{"is-disabled ":d}),css:I}),o?function(e,t,i){var n,r,a;return"img"===(null==e||null===(n=e.props)||void 0===n||null===(r=n.children)||void 0===r||null===(a=r.props)||void 0===a?void 0:a.mdxType)?(0,c.tZ)(D,{image:e,className:l()(t,"spectrum-Icon--spectrum-icon-size-"+i)}):(0,c.tZ)(S,{icon:e,className:l()(t,"spectrum-Icon--spectrum-icon-size-"+i)})}(o,m,v):null)})),R={name:"pwo431",styles:"transition-property:transform,width"},O=(0,o.forwardRef)((function(e,t){var i=e.className,n=(0,a.Z)(e,v);return(0,c.tZ)("div",(0,r.Z)({},n,{ref:t,className:l()(i,"spectrum-Tabs-selectionIndicator"),css:R}))})),j={name:"pwo431",styles:"transition-property:transform,width"},A=(0,o.forwardRef)((function(e,t){var i=e.className,n=e.index,o=void 0===n?0:n,s=(0,a.Z)(e,b);return(0,c.tZ)("div",(0,r.Z)({},s,{ref:t,className:l()(i,"spectrum-Tabs-selectionIndicator",{default:0===o}),css:j}))})),_=function(e){var t=e.children;return(0,c.tZ)("span",{className:"spectrum-Tabs-itemLabel"},t)},P=(0,o.forwardRef)((function(e,t){var i,n=e.elementType,o=void 0===n?"div":n,s=e.isDisabled,d=void 0!==s&&s,m=e.isSelected,u=void 0!==m&&m,p=e.className,v=e.children,b=e.icon,g=e.hasDropdown,h=void 0!==g&&g,y=e.label,w=(0,a.Z)(e,f),x=o;return(0,c.tZ)(x,(0,r.Z)({},w,{ref:t,role:"tab",title:null==y||null===(i=y.props)||void 0===i?void 0:i.children,"aria-selected":u,autofocus:!0,tabIndex:"0",onKeyDown:function(e){var t;("ArrowRight"===e.key&&("tabindex5"===w.id&&document.getElementById("getCredentialID").focus(),e.target.nextElementSibling&&e.target.nextElementSibling.focus()),"ArrowLeft"===e.key)&&("tabindex0"===w.id?null===(t=document.getElementById("product"))||void 0===t||t.focus():e.target.previousElementSibling&&e.target.previousElementSibling.focus());"ArrowDown"===e.key&&(e.preventDefault(),h?(null==w?void 0:w.openDropDown)&&(null==w||w.openDropDown({index:w.index,isOpen:!0,id:w.id})):e.target.nextElementSibling&&e.target.nextElementSibling.focus()),"ArrowUp"===e.key&&((null==w?void 0:w.openDropDown)&&(null==w||w.openDropDown({isOpen:!1,id:w.id})),e.target.previousElementSibling&&e.target.previousElementSibling.focus())},disabled:d,className:l()(p,"spectrum-Tabs-item",{"is-selected":u},{"is-disabled":d})}),b?(0,c.tZ)(E,{icon:b,isSelected:u,isDisabled:d}):null,y?(0,c.tZ)(_,null," ",y," "):null,v)})),B=(0,o.forwardRef)((function(e,t){var i=e.elementType,n=void 0===i?"div":i,o=e.isHidden,s=e.className,d=e.children,m=(0,a.Z)(e,g),u=n;return(0,c.tZ)(u,(0,r.Z)({},m,{ref:t,hidden:o,className:l()(s)}),d)})),L={name:"15jol59",styles:"color:#4b9cf5;&:focus{text-decoration:underline;border-bottom:1px solid #1374e6;}"},U={name:"1lx7s8w",styles:"background:var(--spectrum-global-color-gray-100);max-width:100%;overflow-x:hidden!important;margin:0;padding-bottom:calc(var(--spectrum-global-dimension-size-1250) + var(--spectrum-global-dimension-size-250))"},q=function(e){var t=e.theme,i=void 0===t?"light":t,n=e.orientation,r=void 0===n?"horizontal":n,s=e.className,m=e.APIReference,u=void 0===m?"":m,p=(0,a.Z)(e,h),v=(0,o.useState)([])[0],b=(0,o.useRef)(null),f=(0,o.useState)({tab:0}),g=f[0],y=f[1],z=Object.keys(p).filter((function(e){return e.startsWith("heading")})).map((function(e){return e})).map((function(e,t){var i,n;return{heading:(null==p||null===(i=p["heading"+t])||void 0===i||null===(n=i.props)||void 0===n?void 0:n.children)||(null==p?void 0:p.heading),content:(null==p?void 0:p["content"+t])||(null==p?void 0:p.content),image:(null==p?void 0:p["image"+t])||(null==p?void 0:p.image)}})),N=function(e){void 0===e&&(e=g.tab);var t=v.filter((function(e){return null==e?void 0:e.current}))[e];x(b,t)},D=function(e){y({tab:e}),N(e)};return(0,c.tZ)("section",{className:l()(s,"tabsBlock spectrum--"+i),css:U},(0,c.tZ)("div",{className:"tabs-wrapper",css:(0,c.iv)("display:","vertical"===r?"inline-flex":"",";@media only screen and (min-width: ",d.LU,"){margin:0 auto!important;}@media screen and (max-device-width: ",d.q9,"){flex-direction:column;}","")},(0,c.tZ)("div",{className:"tabs-content",css:(0,c.iv)("display:","vertical"===r?"grid":"initial",";position:relative;grid-template-columns:300px calc(100% - 300px);margin-top:var(--spectrum-global-dimension-size-300);width:",d.Av,"!important;@media only screen and (max-width: ",d.q9,"){width:100%!important;}@media only screen and (device-width: ",d.LU,"){width:",(0,d.MY)(8),"!important;}","")},(0,c.tZ)("div",{css:(0,c.iv)((null==z?void 0:z.length)>6?"overflow-x:auto; overflow-y: hidden;":"",";","")},(null==z?void 0:z.length)>0?(0,c.tZ)(T,{orientation:r,isQuiet:!0,onFontsReady:N},z.map((function(e,t){var i=(0,o.createRef)();v.push(i);var n=g.tab===t;return(0,c.tZ)(o.default.Fragment,null,(0,c.tZ)(k,{className:"tabItem",key:"tabItem_"+t,id:"tabItem_"+t,ref:i,isSelected:n,"aria-controls":"tabView"+t,tabIndex:t===g.tab?0:-1,"aria-label":e.heading,"aria-selected":t===g.tab,label:(0,c.tZ)("b",null,e.heading),icon:e.image,onKeyDown:function(e){if("ArrowDown"===e.key||"Enter"===e.key){var i;if(e.preventDefault(),z.length===t+1&&""!==u)null===(i=document.getElementById("apiReference"))||void 0===i||i.setAttribute("tabIndex",0),document.getElementById("apiReference").focus();e.currentTarget.nextSibling&&e.currentTarget.nextSibling.nextSibling.focus()}"ArrowUp"===e.key&&(e.preventDefault(),e.currentTarget.previousSibling&&e.currentTarget.previousSibling.previousSibling.focus())},onFocus:function(){D(t)},onClick:function(){D(t)},css:(0,c.iv)("text-align:left;white-space:normal;width:calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-600))!important;font-size:var(--spectrum-global-dimension-size-200);margin-bottom:","vertical"===r?"1rem !important":"0rem",";display:flex!important;padding:var(--spectrum-global-dimension-size-125)!important;height:auto!important;line-height:initial;.spectrum-Tabs-itemLabel{margin-top:5px;margin-bottom:5px;}.spectrum-Icon{background-size:var(--spectrum-global-dimension-size-225) var(--spectrum-global-dimension-size-275);width:var(--spectrum-global-dimension-size-500);height:var(--spectrum-global-dimension-size-400);}&.is-disabled{pointer-events:none;}&::before{left:var(--spectrum-global-dimension-size-0)!important;right:var(--spectrum-global-dimension-size-0)!important;border:none!important;}@media only screen and (max-width: ",Z,"){margin-top:var(--spectrum-global-dimension-size-25)!important;margin-bottom:var(--spectrum-global-dimension-size-25)!important;}@media only screen and (max-width: ",d.q9,"){padding-left:var(--spectrum-global-dimension-size-0)!important;}@media only screen and (min-width: ",d.LU,"){width:calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-750))!important;left:var(--spectrum-global-dimension-size-250)!important;}","")}),(0,c.tZ)("div",{key:"mobileTabView_"+t,className:"mobileTabView",hidden:!n,css:(0,c.iv)("display:none;padding:var(--spectrum-global-dimension-size-0)!important;h3{font-size:var(--spectrum-heading-s-text-size, var(--spectrum-alias-heading-s-text-size));}p{font-size:var(--spectrum-body-s-text-size, var(--spectrum-global-dimension-font-size-150));}@media only screen and (max-width: ","767px","){display:block;}","")},e.content?e.content:null))})),(0,c.tZ)(O,{ref:b}),""!==u&&(0,c.tZ)("div",{css:(0,c.iv)("text-align:left;white-space:normal;width:calc(var(--spectrum-global-dimension-size-2500) + var(--spectrum-global-dimension-size-750))!important;font-size:var(--spectrum-global-dimension-size-200);padding:var(--spectrum-global-dimension-size-125)!important;@media only screen and (max-width: ",Z,"){left:var(--spectrum-global-dimension-size-100)!important;margin-top:var(--spectrum-global-dimension-size-125)!important;margin-bottom:var(--spectrum-global-dimension-size-125)!important;}@media only screen and (min-width: ",d.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")},(0,c.tZ)("span",{css:(0,c.iv)("text-align:left;cursor:pointer;margin-top:var(--spectrum-global-dimension-size-85);margin-left:var(--spectrum-global-dimension-size-400);@media only screen and (max-width: ",Z,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}@media only screen and (max-width: ",d.q9,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}","")},(0,c.tZ)("a",{href:u,tabIndex:-1,id:"apiReference",css:L,target:"_blank",rel:"noreferrer",onKeyDown:function(e){"ArrowUp"===e.key&&(e.preventDefault(),D((null==z?void 0:z.length)-1),document.getElementById("tabItem_"+((null==z?void 0:z.length)-1)).focus())},onBlur:function(){document.getElementById("apiReference").setAttribute("tabIndex",-1)}},"API Reference")))):null),(null==z?void 0:z.length)>0?z.map((function(e,t){var i=g.tab===t,n=e.content;return n.props=w(w({},n.props),{},{index:g.tab}),(0,c.tZ)(B,{key:"tabView_"+t,id:"tabView"+t,className:"tabView",isHidden:!i,css:(0,c.iv)("text-align:left;padding:0px 0 var(--spectrum-global-dimension-size-100) 10px!important;overflow-x:hidden!important;@media only screen and (max-width: ",Z,"){padding-left:inherit!important;max-width:",(0,d.MY)(3),"!important;}@media only screen and (device-width: ",d.q9,"){max-width:",(0,d.MY)(3.5),"!important;}@media only screen and (device-width: ",d.LU,"){max-width:",(0,d.MY)(6.5),"!important;padding-left:var(--spectrum-global-dimension-size-500);}","")},n)})):null)))}}}]);
//# sourceMappingURL=3f943334-ab0fae6fb989312756ad.js.map