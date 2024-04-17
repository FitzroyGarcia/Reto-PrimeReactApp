/*! For license information please see 557.a794d716.chunk.js.LICENSE.txt */
(self.webpackChunkprime_react_app=self.webpackChunkprime_react_app||[]).push([[557],{557:function(t,e,n){var o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof this||("undefined"!==typeof window?window:"undefined"!==typeof self?self:n.g),o=function(t){return function(){"use strict";var e={172:function(t,e){var n=this&&this.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.CellHookData=e.HookData=void 0;var o=function(t,e,n){this.table=e,this.pageNumber=e.pageNumber,this.pageCount=this.pageNumber,this.settings=e.settings,this.cursor=n,this.doc=t.getDocument()};e.HookData=o;var r=function(t){function e(e,n,o,r,i,l){var a=t.call(this,e,n,l)||this;return a.cell=o,a.row=r,a.column=i,a.section=r.section,a}return n(e,t),e}(o);e.CellHookData=r},340:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(136),i=n(744),l=n(776),a=n(664),s=n(972);e.default=function(t){t.API.autoTable=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];1===e.length?t=e[0]:(console.error("Use of deprecated autoTable initiation"),(t=e[2]||{}).columns=e[0],t.body=e[1]);var o=(0,l.parseInput)(this,t),r=(0,s.createTable)(this,o);return(0,a.drawTable)(this,r),this},t.API.lastAutoTable=!1,t.API.previousAutoTable=!1,t.API.autoTable.previous=!1,t.API.autoTableText=function(t,e,n,o){(0,r.default)(t,e,n,o,this)},t.API.autoTableSetDefaults=function(t){return i.DocHandler.setDefaults(t,this),this},t.autoTableSetDefaults=function(t,e){i.DocHandler.setDefaults(t,e)},t.API.autoTableHtmlToJson=function(t,e){var n;if(void 0===e&&(e=!1),"undefined"===typeof window)return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var r=new i.DocHandler(this),l=(0,o.parseHtml)(r,t,window,e,!1),a=l.head,s=l.body;return{columns:(null===(n=a[0])||void 0===n?void 0:n.map((function(t){return t.content})))||[],rows:s,data:s}},t.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var t=this.lastAutoTable;return t&&t.finalY?t.finalY:0},t.API.autoTableAddPageContent=function(e){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),t.API.autoTable.globalDefaults||(t.API.autoTable.globalDefaults={}),t.API.autoTable.globalDefaults.addPageContent=e,this},t.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}},136:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n,o,r){o=o||{};var i=r.internal.scaleFactor,l=r.internal.getFontSize()/i,a=l*(r.getLineHeightFactor?r.getLineHeightFactor():1.15),s="",u=1;if("middle"!==o.valign&&"bottom"!==o.valign&&"center"!==o.halign&&"right"!==o.halign||(u=(s="string"===typeof t?t.split(/\r\n|\r|\n/g):t).length||1),n+=l*(2-1.15),"middle"===o.valign?n-=u/2*a:"bottom"===o.valign&&(n-=u*a),"center"===o.halign||"right"===o.halign){var d=l;if("center"===o.halign&&(d*=.5),s&&u>=1){for(var h=0;h<s.length;h++)r.text(s[h],e-r.getStringUnitWidth(s[h])*d,n),n+=a;return r}e-=r.getStringUnitWidth(t)*d}return"justify"===o.halign?r.text(t,e,n,{maxWidth:o.maxWidth||100,align:"justify"}):r.text(t,e,n),r}},420:function(t,e){function n(t,e){var n=t>0,o=e||0===e;return n&&o?"DF":n?"S":o?"F":null}function o(t,e){var n,o,r,i;if(t=t||e,Array.isArray(t)){if(t.length>=4)return{top:t[0],right:t[1],bottom:t[2],left:t[3]};if(3===t.length)return{top:t[0],right:t[1],bottom:t[2],left:t[1]};if(2===t.length)return{top:t[0],right:t[1],bottom:t[0],left:t[1]};t=1===t.length?t[0]:e}return"object"===typeof t?("number"===typeof t.vertical&&(t.top=t.vertical,t.bottom=t.vertical),"number"===typeof t.horizontal&&(t.right=t.horizontal,t.left=t.horizontal),{left:null!==(n=t.left)&&void 0!==n?n:e,top:null!==(o=t.top)&&void 0!==o?o:e,right:null!==(r=t.right)&&void 0!==r?r:e,bottom:null!==(i=t.bottom)&&void 0!==i?i:e}):("number"!==typeof t&&(t=e),{top:t,right:t,bottom:t,left:t})}Object.defineProperty(e,"__esModule",{value:!0}),e.getPageAvailableWidth=e.parseSpacing=e.getFillStyle=e.addTableBorder=e.getStringWidth=void 0,e.getStringWidth=function(t,e,n){return n.applyStyles(e,!0),(Array.isArray(t)?t:[t]).map((function(t){return n.getTextWidth(t)})).reduce((function(t,e){return Math.max(t,e)}),0)},e.addTableBorder=function(t,e,o,r){var i=e.settings.tableLineWidth,l=e.settings.tableLineColor;t.applyStyles({lineWidth:i,lineColor:l});var a=n(i,!1);a&&t.rect(o.x,o.y,e.getWidth(t.pageSize().width),r.y-o.y,a)},e.getFillStyle=n,e.parseSpacing=o,e.getPageAvailableWidth=function(t,e){var n=o(e.settings.margin,0);return t.pageSize().width-(n.left+n.right)}},796:function(t,e){var n=this&&this.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.getTheme=e.defaultStyles=e.HtmlRowInput=void 0;var o=function(t){function e(e){var n=t.call(this)||this;return n._element=e,n}return n(e,t),e}(Array);e.HtmlRowInput=o,e.defaultStyles=function(t){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/t,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}},e.getTheme=function(t){return{striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}}[t]}},903:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseCss=void 0;var o=n(420);function r(t,e){var n=i(t,e);if(!n)return null;var o=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!o||!Array.isArray(o))return null;var r=[parseInt(o[1]),parseInt(o[2]),parseInt(o[3])];return 0===parseInt(o[4])||isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function i(t,e){var n=e(t);return"rgba(0, 0, 0, 0)"===n||"transparent"===n||"initial"===n||"inherit"===n?null==t.parentElement?null:i(t.parentElement,e):n}e.parseCss=function(t,e,n,i,l){var a={},s=96/72,u=r(e,(function(t){return l.getComputedStyle(t).backgroundColor}));null!=u&&(a.fillColor=u);var d=r(e,(function(t){return l.getComputedStyle(t).color}));null!=d&&(a.textColor=d);var h=function(t,e){var n=[t.paddingTop,t.paddingRight,t.paddingBottom,t.paddingLeft],r=96/(72/e),i=(parseInt(t.lineHeight)-parseInt(t.fontSize))/e/2,l=n.map((function(t){return parseInt(t||"0")/r})),a=(0,o.parseSpacing)(l,0);return i>a.top&&(a.top=i),i>a.bottom&&(a.bottom=i),a}(i,n);h&&(a.cellPadding=h);var c="borderTopColor",f=s*n,g=i.borderTopWidth;if(i.borderBottomWidth===g&&i.borderRightWidth===g&&i.borderLeftWidth===g){var p=(parseFloat(g)||0)/f;p&&(a.lineWidth=p)}else a.lineWidth={top:(parseFloat(i.borderTopWidth)||0)/f,right:(parseFloat(i.borderRightWidth)||0)/f,bottom:(parseFloat(i.borderBottomWidth)||0)/f,left:(parseFloat(i.borderLeftWidth)||0)/f},a.lineWidth.top||(a.lineWidth.right?c="borderRightColor":a.lineWidth.bottom?c="borderBottomColor":a.lineWidth.left&&(c="borderLeftColor"));console.log(a.lineWidth);var y=r(e,(function(t){return l.getComputedStyle(t)[c]}));null!=y&&(a.lineColor=y);var v=["left","right","center","justify"];-1!==v.indexOf(i.textAlign)&&(a.halign=i.textAlign),-1!==(v=["middle","bottom","top"]).indexOf(i.verticalAlign)&&(a.valign=i.verticalAlign);var m=parseInt(i.fontSize||"");isNaN(m)||(a.fontSize=m/s);var b=function(t){var e="";return("bold"===t.fontWeight||"bolder"===t.fontWeight||parseInt(t.fontWeight)>=700)&&(e="bold"),"italic"!==t.fontStyle&&"oblique"!==t.fontStyle||(e+="italic"),e}(i);b&&(a.fontStyle=b);var w=(i.fontFamily||"").toLowerCase();return-1!==t.indexOf(w)&&(a.font=w),a}},744:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.DocHandler=void 0;var n={},o=function(){function t(t){this.jsPDFDocument=t,this.userStyles={textColor:t.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:t.internal.getFontSize(),fontStyle:t.internal.getFont().fontStyle,font:t.internal.getFont().fontName,lineWidth:t.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:t.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return t.setDefaults=function(t,e){void 0===e&&(e=null),e?e.__autoTableDocumentDefaults=t:n=t},t.unifyColor=function(t){return Array.isArray(t)?t:"number"===typeof t?[t,t,t]:"string"===typeof t?[t]:null},t.prototype.applyStyles=function(e,n){var o,r,i;void 0===n&&(n=!1),e.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e.fontStyle);var l=this.jsPDFDocument.internal.getFont(),a=l.fontStyle,s=l.fontName;if(e.font&&(s=e.font),e.fontStyle){a=e.fontStyle;var u=this.getFontList()[s];u&&-1===u.indexOf(a)&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(u[0]),a=u[0])}if(this.jsPDFDocument.setFont(s,a),e.fontSize&&this.jsPDFDocument.setFontSize(e.fontSize),!n){var d=t.unifyColor(e.fillColor);d&&(o=this.jsPDFDocument).setFillColor.apply(o,d),(d=t.unifyColor(e.textColor))&&(r=this.jsPDFDocument).setTextColor.apply(r,d),(d=t.unifyColor(e.lineColor))&&(i=this.jsPDFDocument).setDrawColor.apply(i,d),"number"===typeof e.lineWidth&&this.jsPDFDocument.setLineWidth(e.lineWidth)}},t.prototype.splitTextToSize=function(t,e,n){return this.jsPDFDocument.splitTextToSize(t,e,n)},t.prototype.rect=function(t,e,n,o,r){return this.jsPDFDocument.rect(t,e,n,o,r)},t.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},t.prototype.getTextWidth=function(t){return this.jsPDFDocument.getTextWidth(t)},t.prototype.getDocument=function(){return this.jsPDFDocument},t.prototype.setPage=function(t){this.jsPDFDocument.setPage(t)},t.prototype.addPage=function(){return this.jsPDFDocument.addPage()},t.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},t.prototype.getGlobalOptions=function(){return n||{}},t.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},t.prototype.pageSize=function(){var t=this.jsPDFDocument.internal.pageSize;return null==t.width&&(t={width:t.getWidth(),height:t.getHeight()}),t},t.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},t.prototype.getLineHeightFactor=function(){var t=this.jsPDFDocument;return t.getLineHeightFactor?t.getLineHeightFactor():1.15},t.prototype.getLineHeight=function(t){return t/this.scaleFactor()*this.getLineHeightFactor()},t.prototype.pageNumber=function(){var t=this.jsPDFDocument.internal.getCurrentPageInfo();return t?t.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},t}();e.DocHandler=o},4:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseHtml=void 0;var o=n(903),r=n(796);function i(t,e,n,i,a,s){for(var u=new r.HtmlRowInput(i),d=0;d<i.cells.length;d++){var h=i.cells[d],c=n.getComputedStyle(h);if(a||"none"!==c.display){var f=void 0;s&&(f=(0,o.parseCss)(t,h,e,c,n)),u.push({rowSpan:h.rowSpan,colSpan:h.colSpan,styles:f,_element:h,content:l(h)})}}var g=n.getComputedStyle(i);if(u.length>0&&(a||"none"!==g.display))return u}function l(t){var e=t.cloneNode(!0);return e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/ +/g," "),e.innerHTML=e.innerHTML.split(/<br.*?>/).map((function(t){return t.trim()})).join("\n"),e.innerText||e.textContent||""}e.parseHtml=function(t,e,n,o,r){var l,a,s;void 0===o&&(o=!1),void 0===r&&(r=!1),s="string"===typeof e?n.document.querySelector(e):e;var u=Object.keys(t.getFontList()),d=t.scaleFactor(),h=[],c=[],f=[];if(!s)return console.error("Html table could not be found with input: ",e),{head:h,body:c,foot:f};for(var g=0;g<s.rows.length;g++){var p=s.rows[g],y=null===(a=null===(l=null===p||void 0===p?void 0:p.parentElement)||void 0===l?void 0:l.tagName)||void 0===a?void 0:a.toLowerCase(),v=i(u,d,n,p,o,r);v&&("thead"===y?h.push(v):"tfoot"===y?f.push(v):c.push(v))}return{head:h,body:c,foot:f}}},776:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.parseInput=void 0;var o=n(4),r=n(356),i=n(420),l=n(744),a=n(792);e.parseInput=function(t,e){var n=new l.DocHandler(t),s=n.getDocumentOptions(),u=n.getGlobalOptions();(0,a.default)(n,u,s,e);var d,h=(0,r.assign)({},u,s,e);"undefined"!==typeof window&&(d=window);var c=function(t,e,n){for(var o={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},i=function(i){if("columnStyles"===i){var l=t[i],a=e[i],s=n[i];o.columnStyles=(0,r.assign)({},l,a,s)}else{var u=[t,e,n].map((function(t){return t[i]||{}}));o[i]=(0,r.assign)({},u[0],u[1],u[2])}},l=0,a=Object.keys(o);l<a.length;l++)i(a[l]);return o}(u,s,e),f=function(t,e,n){for(var o={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},r=0,i=[t,e,n];r<i.length;r++){var l=i[r];l.didParseCell&&o.didParseCell.push(l.didParseCell),l.willDrawCell&&o.willDrawCell.push(l.willDrawCell),l.didDrawCell&&o.didDrawCell.push(l.didDrawCell),l.willDrawPage&&o.willDrawPage.push(l.willDrawPage),l.didDrawPage&&o.didDrawPage.push(l.didDrawPage)}return o}(u,s,e),g=function(t,e){var n,o,r,l,a,s,u,d,h,c,f,g,p,y,v=(0,i.parseSpacing)(e.margin,40/t.scaleFactor()),m=null!==(n=function(t,e){var n=t.getLastAutoTable(),o=t.scaleFactor(),r=t.pageNumber(),i=!1;return n&&n.startPageNumber&&(i=n.startPageNumber+n.pageNumber-1===r),"number"===typeof e?e:null!=e&&!1!==e||!i||null==(null===n||void 0===n?void 0:n.finalY)?null:n.finalY+20/o}(t,e.startY))&&void 0!==n?n:v.top;p=!0===e.showFoot?"everyPage":!1===e.showFoot?"never":null!==(o=e.showFoot)&&void 0!==o?o:"everyPage",y=!0===e.showHead?"everyPage":!1===e.showHead?"never":null!==(r=e.showHead)&&void 0!==r?r:"everyPage";var b=null!==(l=e.useCss)&&void 0!==l&&l,w=e.theme||(b?"plain":"striped"),P=!!e.horizontalPageBreak,S=null!==(a=e.horizontalPageBreakRepeat)&&void 0!==a?a:null;return{includeHiddenHtml:null!==(s=e.includeHiddenHtml)&&void 0!==s&&s,useCss:b,theme:w,startY:m,margin:v,pageBreak:null!==(u=e.pageBreak)&&void 0!==u?u:"auto",rowPageBreak:null!==(d=e.rowPageBreak)&&void 0!==d?d:"auto",tableWidth:null!==(h=e.tableWidth)&&void 0!==h?h:"auto",showHead:y,showFoot:p,tableLineWidth:null!==(c=e.tableLineWidth)&&void 0!==c?c:0,tableLineColor:null!==(f=e.tableLineColor)&&void 0!==f?f:200,horizontalPageBreak:P,horizontalPageBreakRepeat:S,horizontalPageBreakBehaviour:null!==(g=e.horizontalPageBreakBehaviour)&&void 0!==g?g:"afterAllRows"}}(n,h),p=function(t,e,n){var r=e.head||[],i=e.body||[],l=e.foot||[];if(e.html){var a=e.includeHiddenHtml;if(n){var s=(0,o.parseHtml)(t,e.html,n,a,e.useCss)||{};r=s.head||r,i=s.body||r,l=s.foot||r}else console.error("Cannot parse html in non browser environment")}var u=e.columns||function(t,e,n){var o=t[0]||e[0]||n[0]||[],r=[];return Object.keys(o).filter((function(t){return"_element"!==t})).forEach((function(t){var e,n=1;"object"!==typeof(e=Array.isArray(o)?o[parseInt(t)]:o[t])||Array.isArray(e)||(n=(null===e||void 0===e?void 0:e.colSpan)||1);for(var i=0;i<n;i++){var l={dataKey:Array.isArray(o)?r.length:t+(i>0?"_".concat(i):"")};r.push(l)}})),r}(r,i,l);return{columns:u,head:r,body:i,foot:l}}(n,h,d);return{id:e.tableId,content:p,hooks:f,styles:c,settings:g}}},792:function(t,e){function n(t){t.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),t.minCellHeight||(t.minCellHeight=t.rowHeight)):t.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),t.cellWidth||(t.cellWidth=t.columnWidth))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,o,r){for(var i=function(e){e&&"object"!==typeof e&&console.error("The options parameter should be of type object, is: "+typeof e),"undefined"!==typeof e.extendWidth&&(e.tableWidth=e.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),"undefined"!==typeof e.margins&&("undefined"===typeof e.margin&&(e.margin=e.margins),console.error("Use of deprecated option: margins, use margin instead.")),e.startY&&"number"!==typeof e.startY&&(console.error("Invalid value for startY option",e.startY),delete e.startY),!e.didDrawPage&&(e.afterPageContent||e.beforePageContent||e.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),e.didDrawPage=function(n){t.applyStyles(t.userStyles),e.beforePageContent&&e.beforePageContent(n),t.applyStyles(t.userStyles),e.afterPageContent&&e.afterPageContent(n),t.applyStyles(t.userStyles),e.afterPageAdd&&n.pageNumber>1&&n.afterPageAdd(n),t.applyStyles(t.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach((function(t){e[t]&&console.error('The "'.concat(t,'" hook has changed in version 3.0, check the changelog for how to migrate.'))})),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach((function(t){var n=t[0],o=t[1];e[o]&&(console.error("Use of deprecated option ".concat(o,". Use ").concat(n," instead")),e[n]=e[o])})),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach((function(t){var n="string"===typeof t?t:t[0],o="string"===typeof t?t:t[1];"undefined"!==typeof e[n]&&("undefined"===typeof e.styles[o]&&(e.styles[o]=e[n]),console.error("Use of deprecated option: "+n+", use the style "+o+" instead."))}));for(var o=0,r=["styles","bodyStyles","headStyles","footStyles"];o<r.length;o++)n(e[r[o]]||{});for(var i=e.columnStyles||{},l=0,a=Object.keys(i);l<a.length;l++)n(i[a[l]]||{})},l=0,a=[e,o,r];l<a.length;l++)i(a[l])}},260:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.Column=e.Cell=e.Row=e.Table=void 0;var o=n(796),r=n(172),i=n(420),l=function(){function t(t,e){this.pageNumber=1,this.pageCount=1,this.id=t.id,this.settings=t.settings,this.styles=t.styles,this.hooks=t.hooks,this.columns=e.columns,this.head=e.head,this.body=e.body,this.foot=e.foot}return t.prototype.getHeadHeight=function(t){return this.head.reduce((function(e,n){return e+n.getMaxCellHeight(t)}),0)},t.prototype.getFootHeight=function(t){return this.foot.reduce((function(e,n){return e+n.getMaxCellHeight(t)}),0)},t.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},t.prototype.callCellHooks=function(t,e,n,o,i,l){for(var a=0,s=e;a<s.length;a++){var u=!1===(0,s[a])(new r.CellHookData(t,this,n,o,i,l));if(n.text=Array.isArray(n.text)?n.text:[n.text],u)return!1}return!0},t.prototype.callEndPageHooks=function(t,e){t.applyStyles(t.userStyles);for(var n=0,o=this.hooks.didDrawPage;n<o.length;n++)(0,o[n])(new r.HookData(t,this,e))},t.prototype.callWillDrawPageHooks=function(t,e){for(var n=0,o=this.hooks.willDrawPage;n<o.length;n++)(0,o[n])(new r.HookData(t,this,e))},t.prototype.getWidth=function(t){if("number"===typeof this.settings.tableWidth)return this.settings.tableWidth;if("wrap"===this.settings.tableWidth)return this.columns.reduce((function(t,e){return t+e.wrappedWidth}),0);var e=this.settings.margin;return t-e.left-e.right},t}();e.Table=l;var a=function(){function t(t,e,n,r,i){void 0===i&&(i=!1),this.height=0,this.raw=t,t instanceof o.HtmlRowInput&&(this.raw=t._element,this.element=t._element),this.index=e,this.section=n,this.cells=r,this.spansMultiplePages=i}return t.prototype.getMaxCellHeight=function(t){var e=this;return t.reduce((function(t,n){var o;return Math.max(t,(null===(o=e.cells[n.index])||void 0===o?void 0:o.height)||0)}),0)},t.prototype.hasRowSpan=function(t){var e=this;return t.filter((function(t){var n=e.cells[t.index];return!!n&&n.rowSpan>1})).length>0},t.prototype.canEntireRowFit=function(t,e){return this.getMaxCellHeight(e)<=t},t.prototype.getMinimumRowHeight=function(t,e){var n=this;return t.reduce((function(t,o){var r=n.cells[o.index];if(!r)return 0;var i=e.getLineHeight(r.styles.fontSize),l=r.padding("vertical")+i;return l>t?l:t}),0)},t}();e.Row=a;var s=function(){function t(t,e,n){var o,r;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=e,this.section=n,this.raw=t;var i=t;null==t||"object"!==typeof t||Array.isArray(t)?(this.rowSpan=1,this.colSpan=1):(this.rowSpan=t.rowSpan||1,this.colSpan=t.colSpan||1,i=null!==(r=null!==(o=t.content)&&void 0!==o?o:t.title)&&void 0!==r?r:t,t._element&&(this.raw=t._element));var l=null!=i?""+i:"";this.text=l.split(/\r\n|\r|\n/g)}return t.prototype.getTextPos=function(){var t,e;if("top"===this.styles.valign)t=this.y+this.padding("top");else if("bottom"===this.styles.valign)t=this.y+this.height-this.padding("bottom");else{var n=this.height-this.padding("vertical");t=this.y+n/2+this.padding("top")}if("right"===this.styles.halign)e=this.x+this.width-this.padding("right");else if("center"===this.styles.halign){var o=this.width-this.padding("horizontal");e=this.x+o/2+this.padding("left")}else e=this.x+this.padding("left");return{x:e,y:t}},t.prototype.getContentHeight=function(t,e){void 0===e&&(e=1.15);var n=(Array.isArray(this.text)?this.text.length:1)*(this.styles.fontSize/t*e)+this.padding("vertical");return Math.max(n,this.styles.minCellHeight)},t.prototype.padding=function(t){var e=(0,i.parseSpacing)(this.styles.cellPadding,0);return"vertical"===t?e.top+e.bottom:"horizontal"===t?e.left+e.right:e[t]},t}();e.Cell=s;var u=function(){function t(t,e,n){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=t,this.raw=e,this.index=n}return t.prototype.getMaxCustomCellWidth=function(t){for(var e=0,n=0,o=t.allRows();n<o.length;n++){var r=o[n].cells[this.index];r&&"number"===typeof r.styles.cellWidth&&(e=Math.max(e,r.styles.cellWidth))}return e},t}();e.Column=u},356:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.assign=void 0,e.assign=function(t,e,n,o,r){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),l=1;l<arguments.length;l++){var a=arguments[l];if(null!=a)for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(i[s]=a[s])}return i}},972:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.createTable=void 0;var o=n(744),r=n(260),i=n(324),l=n(796),a=n(356);function s(t,e,n,o,i,l){var a={};return e.map((function(e,s){for(var u=0,h={},c=0,f=0,g=0,p=n;g<p.length;g++){var y=p[g];if(null==a[y.index]||0===a[y.index].left)if(0===f){var v=void 0,m={};"object"!==typeof(v=Array.isArray(e)?e[y.index-c-u]:e[y.dataKey])||Array.isArray(v)||(m=(null===v||void 0===v?void 0:v.styles)||{});var b=d(t,y,s,i,o,l,m),w=new r.Cell(v,b,t);h[y.dataKey]=w,h[y.index]=w,f=w.colSpan-1,a[y.index]={left:w.rowSpan-1,times:f}}else f--,c++;else a[y.index].left--,f=a[y.index].times,u++}return new r.Row(e,s,t,h)}))}function u(t,e){var n={};return t.forEach((function(t){if(null!=t.raw){var o=function(t,e){if("head"===t){if("object"===typeof e)return e.header||e.title||null;if("string"===typeof e||"number"===typeof e)return e}else if("foot"===t&&"object"===typeof e)return e.footer;return null}(e,t.raw);null!=o&&(n[t.dataKey]=o)}})),Object.keys(n).length>0?n:null}function d(t,e,n,o,r,i,s){var u,d=(0,l.getTheme)(o);"head"===t?u=r.headStyles:"body"===t?u=r.bodyStyles:"foot"===t&&(u=r.footStyles);var h=(0,a.assign)({},d.table,d[t],r.styles,u),c=r.columnStyles[e.dataKey]||r.columnStyles[e.index]||{},f="body"===t?c:{},g="body"===t&&n%2===0?(0,a.assign)({},d.alternateRow,r.alternateRowStyles):{},p=(0,l.defaultStyles)(i),y=(0,a.assign)({},p,h,g,f);return(0,a.assign)(y,s)}e.createTable=function(t,e){var n=new o.DocHandler(t),l=function(t,e){var n,o=t.content,i=function(t){return t.map((function(t,e){var n,o,i;return i="object"===typeof t&&null!==(o=null!==(n=t.dataKey)&&void 0!==n?n:t.key)&&void 0!==o?o:e,new r.Column(i,t,e)}))}(o.columns);(0===o.head.length&&(n=u(i,"head"))&&o.head.push(n),0===o.foot.length)&&((n=u(i,"foot"))&&o.foot.push(n));var l=t.settings.theme,a=t.styles;return{columns:i,head:s("head",o.head,i,a,l,e),body:s("body",o.body,i,a,l,e),foot:s("foot",o.foot,i,a,l,e)}}(e,n.scaleFactor()),a=new r.Table(e,l);return(0,i.calculateWidths)(n,a),n.applyStyles(n.userStyles),a}},664:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.addPage=e.drawTable=void 0;var o=n(420),r=n(260),i=n(744),l=n(356),a=n(136),s=n(224);function u(t,e,n,o){var r=e.settings;t.applyStyles(t.userStyles),"firstPage"!==r.showHead&&"everyPage"!==r.showHead||e.head.forEach((function(r){return g(t,e,r,n,o)}))}function d(t,e,n,o,r,i){t.applyStyles(t.userStyles),i=null!==i&&void 0!==i?i:e.body.length;var l=Math.min(n+i,e.body.length),a=-1;return e.body.slice(n,l).forEach((function(i,l){var s=n+l===e.body.length-1,u=y(t,e,s,o);i.canEntireRowFit(u,r)&&(g(t,e,i,o,r),a=n+l)})),a}function h(t,e,n,o){var r=e.settings;t.applyStyles(t.userStyles),"lastPage"!==r.showFoot&&"everyPage"!==r.showFoot||e.foot.forEach((function(r){return g(t,e,r,n,o)}))}function c(t,e,n){var o=n.getLineHeight(t.styles.fontSize),r=t.padding("vertical"),i=Math.floor((e-r)/o);return Math.max(0,i)}function f(t,e,n,o,i,a,s){var u=y(t,e,o,a);if(n.canEntireRowFit(u,s))g(t,e,n,a,s);else if(function(t,e,n,o){var r=t.pageSize().height,i=o.settings.margin,l=r-(i.top+i.bottom);"body"===e.section&&(l-=o.getHeadHeight(o.columns)+o.getFootHeight(o.columns));var a=e.getMinimumRowHeight(o.columns,t),s=a<n;if(a>l)return console.error("Will not be able to print row ".concat(e.index," correctly since it's minimum height is larger than page height")),!0;if(!s)return!1;var u=e.hasRowSpan(o.columns);return e.getMaxCellHeight(o.columns)>l?(u&&console.error("The content of row ".concat(e.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!u&&"avoid"!==o.settings.rowPageBreak}(t,n,u,e)){var d=function(t,e,n,o){var i={};t.spansMultiplePages=!0,t.height=0;for(var a=0,s=0,u=n.columns;s<u.length;s++){var d=u[s];if(b=t.cells[d.index]){Array.isArray(b.text)||(b.text=[b.text]);var h=new r.Cell(b.raw,b.styles,b.section);(h=(0,l.assign)(h,b)).text=[];var f=c(b,e,o);b.text.length>f&&(h.text=b.text.splice(f,b.text.length));var g=o.scaleFactor(),p=o.getLineHeightFactor();b.contentHeight=b.getContentHeight(g,p),b.contentHeight>=e&&(b.contentHeight=e,h.styles.minCellHeight-=e),b.contentHeight>t.height&&(t.height=b.contentHeight),h.contentHeight=h.getContentHeight(g,p),h.contentHeight>a&&(a=h.contentHeight),i[d.index]=h}}var y=new r.Row(t.raw,-1,t.section,i,!0);y.height=a;for(var v=0,m=n.columns;v<m.length;v++){var b;d=m[v],(h=y.cells[d.index])&&(h.height=y.height),(b=t.cells[d.index])&&(b.height=t.height)}return y}(n,u,e,t);g(t,e,n,a,s),v(t,e,i,a,s),f(t,e,d,o,i,a,s)}else v(t,e,i,a,s),f(t,e,n,o,i,a,s)}function g(t,e,n,o,r){o.x=e.settings.margin.left;for(var i=0,l=r;i<l.length;i++){var s=l[i],u=n.cells[s.index];if(u)if(t.applyStyles(u.styles),u.x=o.x,u.y=o.y,!1!==e.callCellHooks(t,e.hooks.willDrawCell,u,n,s,o)){p(t,u,o);var d=u.getTextPos();(0,a.default)(u.text,d.x,d.y,{halign:u.styles.halign,valign:u.styles.valign,maxWidth:Math.ceil(u.width-u.padding("left")-u.padding("right"))},t.getDocument()),e.callCellHooks(t,e.hooks.didDrawCell,u,n,s,o),o.x+=s.width}else o.x+=s.width;else o.x+=s.width}o.y+=n.height}function p(t,e,n){var r=e.styles;if(t.getDocument().setFillColor(t.getDocument().getFillColor()),"number"===typeof r.lineWidth){var i=(0,o.getFillStyle)(r.lineWidth,r.fillColor);i&&t.rect(e.x,n.y,e.width,e.height,i)}else"object"===typeof r.lineWidth&&(r.fillColor&&t.rect(e.x,n.y,e.width,e.height,"F"),function(t,e,n,o){var r,i,l,a;function s(e,n,o,r,i){t.getDocument().setLineWidth(e),t.getDocument().line(n,o,r,i,"S")}o.top&&(r=n.x,i=n.y,l=n.x+e.width,a=n.y,o.right&&(l+=.5*o.right),o.left&&(r-=.5*o.left),s(o.top,r,i,l,a)),o.bottom&&(r=n.x,i=n.y+e.height,l=n.x+e.width,a=n.y+e.height,o.right&&(l+=.5*o.right),o.left&&(r-=.5*o.left),s(o.bottom,r,i,l,a)),o.left&&(r=n.x,i=n.y,l=n.x,a=n.y+e.height,o.top&&(i-=.5*o.top),o.bottom&&(a+=.5*o.bottom),s(o.left,r,i,l,a)),o.right&&(r=n.x+e.width,i=n.y,l=n.x+e.width,a=n.y+e.height,o.top&&(i-=.5*o.top),o.bottom&&(a+=.5*o.bottom),s(o.right,r,i,l,a))}(t,e,n,r.lineWidth))}function y(t,e,n,o){var r=e.settings.margin.bottom,i=e.settings.showFoot;return("everyPage"===i||"lastPage"===i&&n)&&(r+=e.getFootHeight(e.columns)),t.pageSize().height-o.y-r}function v(t,e,n,r,i,l){void 0===i&&(i=[]),void 0===l&&(l=!1),t.applyStyles(t.userStyles),"everyPage"!==e.settings.showFoot||l||e.foot.forEach((function(n){return g(t,e,n,r,i)})),e.callEndPageHooks(t,r);var a=e.settings.margin;(0,o.addTableBorder)(t,e,n,r),m(t),e.pageNumber++,e.pageCount++,r.x=a.left,r.y=a.top,n.y=a.top,e.callWillDrawPageHooks(t,r),"everyPage"===e.settings.showHead&&(e.head.forEach((function(n){return g(t,e,n,r,i)})),t.applyStyles(t.userStyles))}function m(t){var e=t.pageNumber();return t.setPage(e+1),t.pageNumber()===e&&(t.addPage(),!0)}e.drawTable=function(t,e){var n=e.settings,r=n.startY,a=n.margin,c={x:a.left,y:r},p=e.getHeadHeight(e.columns)+e.getFootHeight(e.columns),y=r+a.bottom+p;"avoid"===n.pageBreak&&(y+=e.body.reduce((function(t,e){return t+e.height}),0));var b=new i.DocHandler(t);("always"===n.pageBreak||null!=n.startY&&y>b.pageSize().height)&&(m(b),c.y=a.top),e.callWillDrawPageHooks(b,c);var w=(0,l.assign)({},c);e.startPageNumber=b.pageNumber(),n.horizontalPageBreak?function(t,e,n,o){var r=(0,s.calculateAllColumnsCanFitInPage)(t,e),i=e.settings;if("afterAllRows"===i.horizontalPageBreakBehaviour)r.forEach((function(r,i){t.applyStyles(t.userStyles),i>0?v(t,e,n,o,r.columns,!0):u(t,e,o,r.columns),function(t,e,n,o,r){t.applyStyles(t.userStyles),e.body.forEach((function(i,l){var a=l===e.body.length-1;f(t,e,i,a,n,o,r)}))}(t,e,n,o,r.columns),h(t,e,o,r.columns)}));else for(var l=-1,a=r[0],c=function(){var i=l;if(a){t.applyStyles(t.userStyles);var s=a.columns;l>=0?v(t,e,n,o,s,!0):u(t,e,o,s),i=d(t,e,l+1,o,s),h(t,e,o,s)}var c=i-l;r.slice(1).forEach((function(r){t.applyStyles(t.userStyles),v(t,e,n,o,r.columns,!0),d(t,e,l+1,o,r.columns,c),h(t,e,o,r.columns)})),l=i};l<e.body.length-1;)c()}(b,e,w,c):(b.applyStyles(b.userStyles),"firstPage"!==n.showHead&&"everyPage"!==n.showHead||e.head.forEach((function(t){return g(b,e,t,c,e.columns)})),b.applyStyles(b.userStyles),e.body.forEach((function(t,n){var o=n===e.body.length-1;f(b,e,t,o,w,c,e.columns)})),b.applyStyles(b.userStyles),"lastPage"!==n.showFoot&&"everyPage"!==n.showFoot||e.foot.forEach((function(t){return g(b,e,t,c,e.columns)}))),(0,o.addTableBorder)(b,e,w,c),e.callEndPageHooks(b,c),e.finalY=c.y,t.lastAutoTable=e,t.previousAutoTable=e,t.autoTable&&(t.autoTable.previous=e),b.applyStyles(b.userStyles)},e.addPage=v},224:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.calculateAllColumnsCanFitInPage=void 0;var o=n(420);function r(t,e,n){var r;void 0===n&&(n={});var i=(0,o.getPageAvailableWidth)(t,e),l=new Map,a=[],s=[],u=[];e.settings.horizontalPageBreakRepeat,Array.isArray(e.settings.horizontalPageBreakRepeat)?u=e.settings.horizontalPageBreakRepeat:"string"!==typeof e.settings.horizontalPageBreakRepeat&&"number"!==typeof e.settings.horizontalPageBreakRepeat||(u=[e.settings.horizontalPageBreakRepeat]),u.forEach((function(t){var n=e.columns.find((function(e){return e.dataKey===t||e.index===t}));n&&!l.has(n.index)&&(l.set(n.index,!0),a.push(n.index),s.push(e.columns[n.index]),i-=n.wrappedWidth)}));for(var d=!0,h=null!==(r=null===n||void 0===n?void 0:n.start)&&void 0!==r?r:0;h<e.columns.length;)if(l.has(h))h++;else{var c=e.columns[h].wrappedWidth;if(!(d||i>=c))break;d=!1,a.push(h),s.push(e.columns[h]),i-=c,h++}return{colIndexes:a,columns:s,lastIndex:h-1}}e.calculateAllColumnsCanFitInPage=function(t,e){for(var n=[],o=0;o<e.columns.length;o++){var i=r(t,e,{start:o});i.columns.length&&(n.push(i),o=i.lastIndex)}return n}},324:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.ellipsize=e.resizeColumns=e.calculateWidths=void 0;var o=n(420);function r(t,e,n){for(var o=e,i=t.reduce((function(t,e){return t+e.wrappedWidth}),0),l=0;l<t.length;l++){var a=t[l],s=o*(a.wrappedWidth/i),u=a.width+s,d=n(a),h=u<d?d:u;e-=h-a.width,a.width=h}if(e=Math.round(1e10*e)/1e10){var c=t.filter((function(t){return!(e<0)||t.width>n(t)}));c.length&&(e=r(c,e,n))}return e}function i(t,e,n,r,i){return t.map((function(t){return function(t,e,n,r,i){var l=1e4*r.scaleFactor();if((e=Math.ceil(e*l)/l)>=(0,o.getStringWidth)(t,n,r))return t;for(;e<(0,o.getStringWidth)(t+i,n,r)&&!(t.length<=1);)t=t.substring(0,t.length-1);return t.trim()+i}(t,e,n,r,i)}))}e.calculateWidths=function(t,e){!function(t,e){var n=t.scaleFactor(),r=e.settings.horizontalPageBreak,i=(0,o.getPageAvailableWidth)(t,e);e.allRows().forEach((function(l){for(var a=0,s=e.columns;a<s.length;a++){var u=s[a],d=l.cells[u.index];if(d){var h=e.hooks.didParseCell;e.callCellHooks(t,h,d,l,u,null);var c=d.padding("horizontal");d.contentWidth=(0,o.getStringWidth)(d.text,d.styles,t)+c;var f=(0,o.getStringWidth)(d.text.join(" ").split(/\s+/),d.styles,t);if(d.minReadableWidth=f+d.padding("horizontal"),"number"===typeof d.styles.cellWidth)d.minWidth=d.styles.cellWidth,d.wrappedWidth=d.styles.cellWidth;else if("wrap"===d.styles.cellWidth||!0===r)d.contentWidth>i?(d.minWidth=i,d.wrappedWidth=i):(d.minWidth=d.contentWidth,d.wrappedWidth=d.contentWidth);else{var g=10/n;d.minWidth=d.styles.minCellWidth||g,d.wrappedWidth=d.contentWidth,d.minWidth>d.wrappedWidth&&(d.wrappedWidth=d.minWidth)}}}})),e.allRows().forEach((function(t){for(var n=0,o=e.columns;n<o.length;n++){var r=o[n],i=t.cells[r.index];if(i&&1===i.colSpan)r.wrappedWidth=Math.max(r.wrappedWidth,i.wrappedWidth),r.minWidth=Math.max(r.minWidth,i.minWidth),r.minReadableWidth=Math.max(r.minReadableWidth,i.minReadableWidth);else{var l=e.styles.columnStyles[r.dataKey]||e.styles.columnStyles[r.index]||{},a=l.cellWidth||l.minCellWidth;a&&"number"===typeof a&&(r.minWidth=a,r.wrappedWidth=a)}i&&(i.colSpan>1&&!r.minWidth&&(r.minWidth=i.minWidth),i.colSpan>1&&!r.wrappedWidth&&(r.wrappedWidth=i.minWidth))}}))}(t,e);var n=[],l=0;e.columns.forEach((function(t){var o=t.getMaxCustomCellWidth(e);o?t.width=o:(t.width=t.wrappedWidth,n.push(t)),l+=t.width}));var a=e.getWidth(t.pageSize().width)-l;a&&(a=r(n,a,(function(t){return Math.max(t.minReadableWidth,t.minWidth)}))),a&&(a=r(n,a,(function(t){return t.minWidth}))),a=Math.abs(a),!e.settings.horizontalPageBreak&&a>.1/t.scaleFactor()&&(a=a<1?a:Math.round(a),console.warn("Of the table content, ".concat(a," units width could not fit page"))),function(t){for(var e=t.allRows(),n=0;n<e.length;n++)for(var o=e[n],r=null,i=0,l=0,a=0;a<t.columns.length;a++){var s=t.columns[a];if((l-=1)>1&&t.columns[a+1])i+=s.width,delete o.cells[s.index];else if(r){var u=r;delete o.cells[s.index],r=null,u.width=s.width+i}else{if(!(u=o.cells[s.index]))continue;if(l=u.colSpan,i=0,u.colSpan>1){r=u,i+=s.width;continue}u.width=s.width+i}}}(e),function(t,e){for(var n={count:0,height:0},o=0,r=t.allRows();o<r.length;o++){for(var l=r[o],a=0,s=t.columns;a<s.length;a++){var u=s[a],d=l.cells[u.index];if(d){e.applyStyles(d.styles,!0);var h=d.width-d.padding("horizontal");if("linebreak"===d.styles.overflow)d.text=e.splitTextToSize(d.text,h+1/e.scaleFactor(),{fontSize:d.styles.fontSize});else if("ellipsize"===d.styles.overflow)d.text=i(d.text,h,d.styles,e,"...");else if("hidden"===d.styles.overflow)d.text=i(d.text,h,d.styles,e,"");else if("function"===typeof d.styles.overflow){var c=d.styles.overflow(d.text,h);d.text="string"===typeof c?[c]:c}d.contentHeight=d.getContentHeight(e.scaleFactor(),e.getLineHeightFactor());var f=d.contentHeight/d.rowSpan;d.rowSpan>1&&n.count*n.height<f*d.rowSpan?n={height:f,count:d.rowSpan}:n&&n.count>0&&n.height>f&&(f=n.height),f>l.height&&(l.height=f)}}n.count--}}(e,t),function(t){for(var e={},n=1,o=t.allRows(),r=0;r<o.length;r++)for(var i=o[r],l=0,a=t.columns;l<a.length;l++){var s=a[l],u=e[s.index];if(n>1)n--,delete i.cells[s.index];else if(u)u.cell.height+=i.height,n=u.cell.colSpan,delete i.cells[s.index],u.left--,u.left<=1&&delete e[s.index];else{var d=i.cells[s.index];if(!d)continue;if(d.height=i.height,d.rowSpan>1){var h=o.length-r,c=d.rowSpan>h?h:d.rowSpan;e[s.index]={cell:d,left:c,row:i}}}}}(e)},e.resizeColumns=r,e.ellipsize=i},964:function(e){if("undefined"===typeof t){var n=new Error("Cannot find module 'undefined'");throw n.code="MODULE_NOT_FOUND",n}e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}var r={};return function(){var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.Cell=t.Column=t.Row=t.Table=t.CellHookData=t.__drawTable=t.__createTable=t.applyPlugin=void 0;var e=o(340),n=o(776),i=o(664),l=o(972),a=o(260);Object.defineProperty(t,"Table",{enumerable:!0,get:function(){return a.Table}});var s=o(172);Object.defineProperty(t,"CellHookData",{enumerable:!0,get:function(){return s.CellHookData}});var u=o(260);function d(t){(0,e.default)(t)}Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return u.Cell}}),Object.defineProperty(t,"Column",{enumerable:!0,get:function(){return u.Column}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return u.Row}}),t.applyPlugin=d,t.__createTable=function(t,e){var o=(0,n.parseInput)(t,e);return(0,l.createTable)(t,o)},t.__drawTable=function(t,e){(0,i.drawTable)(t,e)};try{var h=o(964);h.jsPDF&&(h=h.jsPDF),d(h)}catch(c){}t.default=function(t,e){var o=(0,n.parseInput)(t,e),r=(0,l.createTable)(t,o);(0,i.drawTable)(t,r)}}(),r}()},t.exports=o(function(){try{return n(7762)}catch(t){}}())}}]);
//# sourceMappingURL=557.a794d716.chunk.js.map